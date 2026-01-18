#!/usr/bin/env bun
/**
 * Hytale Protocol Documentation Generator - TypeScript/Bun version
 *
 * Parses decompiled Java protocol files using tree-sitter and generates
 * Markdown documentation for GitHub Wiki pages organized by version and category.
 */

import { parseArgs } from 'util';
import { existsSync } from 'fs';
import { join } from 'path';
import { JavaProtocolParser } from './parser';
import { WikiGenerator, generateJsonSummary } from './wiki-generator';
import { LayoutAnalyzer } from './layout-analyzer';

interface Args {
  protocolDir: string;
  outputDir: string;
  version: string;
  json: boolean;
  help: boolean;
  openrouterKey: string | null;
  aiModel: string;
}

function printHelp(): void {
  console.log(`
Hytale Protocol Documentation Generator

Usage: bun run src/generate-wiki.ts [options]

Options:
  --protocol-dir <path>    Directory containing the full protocol package
                           (default: ./protocol)
  --output-dir <path>      Output directory for wiki pages
                           (default: ./wiki)
  --version <version>      Version string for documentation
                           (default: unknown)
  --json                   Also generate JSON summary
  --openrouter-key <key>   OpenRouter API key for AI layout analysis
                           (can also use OPENROUTER_KEY env var)
  --ai-model <model>       AI model to use for layout analysis
                           (default: openai/gpt-4.1-nano)
  --help                   Show this help message

Examples:
  bun run src/generate-wiki.ts --version 1.0.0
  bun run src/generate-wiki.ts --protocol-dir ./protocol --output-dir ./wiki --version beta-1 --json
  bun run src/generate-wiki.ts --version 1.0.0 --openrouter-key sk-or-xxx --ai-model openai/gpt-4.1-nano
`);
}

function parseArguments(): Args {
  const { values } = parseArgs({
    options: {
      'protocol-dir': {
        type: 'string',
        default: './protocol'
      },
      'output-dir': {
        type: 'string',
        default: './wiki'
      },
      'version': {
        type: 'string',
        default: 'unknown'
      },
      'json': {
        type: 'boolean',
        default: false
      },
      'openrouter-key': {
        type: 'string'
      },
      'ai-model': {
        type: 'string',
        default: 'openai/gpt-4.1-nano'
      },
      'help': {
        type: 'boolean',
        default: false
      }
    },
    allowPositionals: false
  });

  // Check for API key in env if not provided as argument
  const openrouterKey = values['openrouter-key'] as string | undefined
    || process.env.OPENROUTER_KEY
    || null;

  return {
    protocolDir: values['protocol-dir'] as string,
    outputDir: values['output-dir'] as string,
    version: values['version'] as string,
    json: values['json'] as boolean,
    help: values['help'] as boolean,
    openrouterKey,
    aiModel: values['ai-model'] as string
  };
}

async function main(): Promise<number> {
  const args = parseArguments();

  if (args.help) {
    printHelp();
    return 0;
  }

  // Validate inputs
  if (!existsSync(args.protocolDir)) {
    console.error(`Error: Protocol directory not found: ${args.protocolDir}`);
    return 1;
  }

  const packetsDir = join(args.protocolDir, 'packets');
  if (!existsSync(packetsDir)) {
    console.error(`Error: Packets directory not found: ${packetsDir}`);
    console.error('Expected structure: protocol-dir/packets/');
    return 1;
  }

  console.log('╔════════════════════════════════════════════════════════════╗');
  console.log('║  Hytale Protocol Documentation Generator (TypeScript)     ║');
  console.log('╚════════════════════════════════════════════════════════════╝');
  console.log('');
  console.log(`📁 Protocol directory: ${args.protocolDir}`);
  console.log(`📁 Output directory: ${args.outputDir}`);
  console.log(`🏷️  Version: ${args.version}`);
  if (args.openrouterKey) {
    console.log(`🤖 AI Layout Analysis: Enabled (${args.aiModel})`);
  } else {
    console.log('🤖 AI Layout Analysis: Disabled (no API key provided)');
  }
  console.log('');

  try {
    // Parse all Java files using tree-sitter
    console.log('🔍 Parsing protocol files...');
    const parser = new JavaProtocolParser(args.protocolDir);
    const { packetsByCategory, enums, dataClasses } = parser.parseAll();

    // Summary statistics
    const totalPackets = Array.from(packetsByCategory.values()).reduce((sum, pkts) => sum + pkts.length, 0);
    console.log('');
    console.log('📊 Parsing complete:');
    console.log(`   ├─ ${totalPackets} packets in ${packetsByCategory.size} categories`);
    console.log(`   ├─ ${enums.size} enum types`);
    console.log(`   └─ ${dataClasses.size} data classes`);
    console.log('');

    // Create wiki generator
    const generator = new WikiGenerator(args.outputDir, args.version);

    // Run AI layout analysis if API key is provided
    if (args.openrouterKey) {
      console.log('🤖 Running AI layout analysis...');
      const layoutAnalyzer = new LayoutAnalyzer({
        apiKey: args.openrouterKey,
        model: args.aiModel
      });

      // Collect all packets for analysis
      const allPackets = Array.from(packetsByCategory.values()).flat();
      const layouts = await layoutAnalyzer.analyzePackets(allPackets);

      console.log(`   ✓ Analyzed ${layouts.size} packet layouts`);
      console.log('');

      // Pass layouts to the generator
      generator.setLayouts(layouts);
    }

    // Generate wiki pages
    console.log('📝 Generating wiki documentation...');
    generator.generate(packetsByCategory, enums, dataClasses);
    console.log('');

    // Generate JSON summary if requested
    if (args.json) {
      console.log('📄 Generating JSON summary...');
      const jsonPath = join(args.outputDir, `${args.version}-summary.json`);
      generateJsonSummary(packetsByCategory, enums, jsonPath, args.version);
      console.log('');
    }

    console.log('✅ Wiki generation complete!');
    console.log('');

    return 0;
  } catch (error) {
    console.error('');
    console.error('❌ Error during generation:');
    console.error(error);
    return 1;
  }
}

// Run main and exit with status code
main().then(code => process.exit(code));
