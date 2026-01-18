/**
 * AI-powered layout analyzer using OpenRouter
 */

import { generateText, Output } from 'ai';
import { createOpenRouter } from '@openrouter/ai-sdk-provider';
import { z } from 'zod';
import { readFileSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';
import type { PacketInfo, LayoutAnalysis, FieldLayoutInfo } from './types';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

/**
 * Zod schema for field layout information
 * Note: Using .nullable() instead of .optional() for OpenAI JSON schema compatibility
 */
const FieldLayoutSchema = z.object({
  name: z.string().describe('The field name as declared in the packet'),
  wireOffset: z.number().int().describe('Byte offset where this field starts (-1 for variable block fields)'),
  wireSize: z.number().int().describe('Size in bytes (-1 for variable-length fields)'),
  encoding: z.string().describe('Wire encoding (e.g., byte, int32_le, varint, var_string:ascii, uuid, nested:ClassName)'),
  isVariable: z.boolean().describe('Whether the field has variable size'),
  nullBit: z.number().int().nullable().describe('The bit value (1, 2, 4, 8...) that controls this nullable field, or null if not nullable'),
  notes: z.string().nullable().describe('Additional notes about this field, or null if none')
});

/**
 * Schema for null bit mapping entry
 */
const NullBitMappingEntry = z.object({
  bit: z.string().describe('The bit value as string (e.g., "1", "2", "4")'),
  fieldName: z.string().describe('The field name controlled by this bit')
});

/**
 * Zod schema for the complete layout analysis response
 * Note: Using .nullable() instead of .optional() for OpenAI JSON schema compatibility
 */
const LayoutAnalysisSchema = z.object({
  fields: z.array(FieldLayoutSchema).describe('Layout information for each field in wire order'),
  totalFixedSize: z.number().int().describe('Total size of the fixed block in bytes'),
  hasVariableSection: z.boolean().describe('Whether the packet has a variable-length section'),
  variableSectionStart: z.number().int().nullable().describe('Byte offset where the variable section starts, or null if no variable section'),
  nullBitMappings: z.array(NullBitMappingEntry).describe('Array of bit-to-field mappings for nullable fields, empty array if none'),
  notes: z.string().nullable().describe('Overall notes about the packet structure, or null if none')
});

export interface LayoutAnalyzerOptions {
  apiKey: string;
  model?: string;
  maxConcurrency?: number;
}

export class LayoutAnalyzer {
  private openrouter: ReturnType<typeof createOpenRouter>;
  private model: string;
  private systemPrompt: string;
  private maxConcurrency: number;

  constructor(options: LayoutAnalyzerOptions) {
    this.openrouter = createOpenRouter({
      apiKey: options.apiKey
    });
    this.model = options.model || 'openai/gpt-4.1-nano';
    this.maxConcurrency = options.maxConcurrency || 5;

    // Load the system prompt from the prompts directory
    const promptPath = join(__dirname, '..', 'prompts', 'layout-analyzer.md');
    this.systemPrompt = readFileSync(promptPath, 'utf-8');
  }

  /**
   * Analyze a single packet's layout using AI
   */
  async analyzePacket(packet: PacketInfo): Promise<LayoutAnalysis | null> {
    if (!packet.deserializeContext) {
      return null;
    }

    try {
      const result = await generateText({
        model: this.openrouter(this.model),
        output: Output.object({ schema: LayoutAnalysisSchema }),
        system: this.systemPrompt,
        prompt: packet.deserializeContext,
        temperature: 0.1, // Low temperature for more deterministic output
      });

      if (!result.output) {
        console.warn(`  ⚠️  No structured output for ${packet.name}`);
        return null;
      }

      console.log(result.output)

      return this.normalizeLayout(result.output, packet);
    } catch (error) {
      console.error(`  ❌ Error analyzing ${packet.name}:`, error instanceof Error ? error.message : String(error));
      return null;
    }
  }

  /**
   * Analyze multiple packets with concurrency control
   */
  async analyzePackets(packets: PacketInfo[]): Promise<Map<string, LayoutAnalysis>> {
    const results = new Map<string, LayoutAnalysis>();
    const queue = [...packets.filter(p => p.deserializeContext)];
    let completed = 0;
    const total = queue.length;

    console.log(`  Analyzing ${total} packets with AI...`);

    // Process in batches with concurrency limit
    while (queue.length > 0) {
      const batch = queue.splice(0, this.maxConcurrency);
      const batchResults = await Promise.all(
        batch.map(async (packet) => {
          const layout = await this.analyzePacket(packet);
          completed++;
          if (layout) {
            console.log(`  ✓ [${completed}/${total}] ${packet.name}`);
          } else {
            console.log(`  - [${completed}/${total}] ${packet.name} (skipped)`);
          }
          return { name: packet.name, layout };
        })
      );

      for (const { name, layout } of batchResults) {
        if (layout) {
          results.set(name, layout);
        }
      }
    }

    return results;
  }

  /**
   * Normalize the validated response to our internal type
   * Converts null values to undefined for internal consistency
   */
  private normalizeLayout(parsed: z.infer<typeof LayoutAnalysisSchema>, packet: PacketInfo): LayoutAnalysis {
    const fields: FieldLayoutInfo[] = parsed.fields.map(field => ({
      name: field.name,
      wireOffset: field.wireOffset,
      wireSize: field.wireSize,
      encoding: field.encoding,
      isVariable: field.isVariable,
      nullBit: field.nullBit ?? undefined,
      notes: field.notes ?? undefined
    }));

    // Convert array format to record format for nullBitMapping
    let nullBitMapping: Record<string, string> | undefined;
    if (parsed.nullBitMappings && parsed.nullBitMappings.length > 0) {
      nullBitMapping = {};
      for (const entry of parsed.nullBitMappings) {
        nullBitMapping[entry.bit] = entry.fieldName;
      }
    }

    return {
      packetName: packet.name,
      fields,
      totalFixedSize: parsed.totalFixedSize,
      hasVariableSection: parsed.hasVariableSection,
      variableSectionStart: parsed.variableSectionStart ?? undefined,
      nullBitMapping,
      notes: parsed.notes ?? undefined
    };
  }
}
