/**
 * Type definitions for Hytale protocol documentation generator
 */

export interface EnumValue {
  name: string;
  value: number;
}

export interface EnumInfo {
  name: string;
  package: string;
  category: string;
  sourcePath: string;
  values: EnumValue[];
}

export interface FieldInfo {
  name: string;
  javaType: string;
  nullable: boolean;
  defaultValue?: string;
  maxLength?: number;
  // Layout information extracted from serialize method
  wireOffset?: number;
  wireSize?: number;
  isVariable: boolean;
  encoding: string;
}

export interface DataClassInfo {
  name: string;
  package: string;
  category: string;
  sourcePath: string;
  fields: FieldInfo[];
  imports: string[];
}

export interface PacketInfo {
  name: string;
  package: string;
  category: string;
  packetId?: number;
  isCompressed: boolean;
  nullableBitFieldSize: number;
  fixedBlockSize: number;
  variableFieldCount: number;
  variableBlockStart: number;
  maxSize: number;
  fields: FieldInfo[];
  imports: string[];
  isEnum: boolean;
  isDataClass: boolean;
  /** Raw deserialize method code with dependencies for AI processing */
  deserializeContext?: string;
}

export interface ParsedResults {
  packetsByCategory: Map<string, PacketInfo[]>;
  enums: Map<string, EnumInfo>;
  dataClasses: Map<string, DataClassInfo>;
}

export interface GeneratorOptions {
  protocolDir: string;
  outputDir: string;
  version: string;
  generateJson: boolean;
}

/**
 * Layout information for a single field as analyzed by AI
 */
export interface FieldLayoutInfo {
  name: string;
  wireOffset?: number;
  wireSize?: number;
  encoding: string;
  isVariable: boolean;
  nullBit?: number;
  notes?: string;
}

/**
 * Complete layout analysis for a packet
 */
export interface LayoutAnalysis {
  packetName: string;
  fields: FieldLayoutInfo[];
  totalFixedSize: number;
  hasVariableSection: boolean;
  variableSectionStart?: number;
  nullBitMapping?: Record<string, string>;
  notes?: string;
}
