/**
 * Wiki documentation generator
 */

import { writeFileSync, existsSync, mkdirSync, readFileSync } from 'fs';
import { join } from 'path';
import type { PacketInfo, EnumInfo, DataClassInfo, LayoutAnalysis, FieldLayoutInfo } from './types';

export class WikiGenerator {
  private outputDir: string;
  private version: string;
  private layouts: Map<string, LayoutAnalysis>;

  constructor(outputDir: string, version: string) {
    this.outputDir = outputDir;
    this.version = version;
    this.layouts = new Map();

    if (!existsSync(outputDir)) {
      mkdirSync(outputDir, { recursive: true });
    }
  }

  /**
   * Set layout analysis results to include in documentation
   */
  setLayouts(layouts: Map<string, LayoutAnalysis>): void {
    this.layouts = layouts;
  }

  generate(
    packetsByCategory: Map<string, PacketInfo[]>,
    enums: Map<string, EnumInfo>,
    dataClasses: Map<string, DataClassInfo>
  ): void {
    console.log('Generating wiki documentation...');

    // Generate version home page
    this.generateVersionHome(packetsByCategory, enums, dataClasses);

    // Generate category pages
    for (const [category, packets] of packetsByCategory) {
      this.generateCategoryPage(category, packets, enums, dataClasses);
    }

    // Generate enums page
    this.generateEnumsPage(enums);

    // Generate data types page
    this.generateDataTypesPage(dataClasses, enums);

    // Generate version sidebar
    this.generateVersionSidebar(packetsByCategory);

    // Update root home and sidebar
    this.generateRootHome();
    this.generateRootSidebar();

    console.log(`✓ Generated wiki for version ${this.version}`);
  }

  private generateVersionHome(
    packetsByCategory: Map<string, PacketInfo[]>,
    enums: Map<string, EnumInfo>,
    dataClasses: Map<string, DataClassInfo>
  ): void {
    const lines: string[] = [];

    lines.push(`# Hytale Protocol Documentation - ${this.version}`);
    lines.push('');
    lines.push('This documentation covers the Hytale game protocol packets, data structures, and enums.');
    lines.push('');

    // Statistics
    const totalPackets = Array.from(packetsByCategory.values()).reduce((sum, pkts) => sum + pkts.length, 0);
    lines.push('## Overview');
    lines.push('');
    lines.push(`- **Version**: ${this.version}`);
    lines.push(`- **Total Packets**: ${totalPackets}`);
    lines.push(`- **Categories**: ${packetsByCategory.size}`);
    lines.push(`- **Enums**: ${enums.size}`);
    lines.push(`- **Data Classes**: ${dataClasses.size}`);
    lines.push('');

    // Category index
    lines.push('## Packet Categories');
    lines.push('');

    const sortedCategories = Array.from(packetsByCategory.keys()).sort();
    for (const category of sortedCategories) {
      const packets = packetsByCategory.get(category)!;
      const displayName = this.formatCategoryName(category);
      lines.push(`### [${displayName}](${this.pageName(`${this.version}-${category}`)})`);
      lines.push('');
      lines.push(`${packets.length} packet${packets.length !== 1 ? 's' : ''}`);
      lines.push('');
    }

    // Quick links
    lines.push('## Quick Links');
    lines.push('');
    lines.push(`- [Enums](${this.pageName(`${this.version}-Enums`)})`);
    lines.push(`- [Data Types](${this.pageName(`${this.version}-Data-Types`)})`);
    lines.push('');

    this.writePage(`${this.version}-Home`, lines);
  }

  private generateCategoryPage(
    category: string,
    packets: PacketInfo[],
    enums: Map<string, EnumInfo>,
    dataClasses: Map<string, DataClassInfo>
  ): void {
    const lines: string[] = [];
    const displayName = this.formatCategoryName(category);

    // Sort packets by packet ID
    const sortedPackets = packets.sort((a, b) => (a.packetId ?? 0) - (b.packetId ?? 0));

    lines.push(`# ${displayName} Packets`);
    lines.push('');
    lines.push(`**Version:** ${this.version}`);
    lines.push('');
    lines.push(`This category contains ${packets.length} packet(s).`);
    lines.push('');

    // Packet Index table
    lines.push('## Packet Index');
    lines.push('');
    lines.push('| ID | Name | Package | Compressed | Max Size |');
    lines.push('|----|------|---------|------------|----------|');

    for (const packet of sortedPackets) {
      const id = packet.packetId !== undefined ? `\`0x${packet.packetId.toString(16).padStart(2, '0').toUpperCase()}\`` : '-';
      const name = `[${packet.name}](#${packet.name.toLowerCase()})`;
      const pkg = `\`${packet.package}\``;
      const compressed = packet.isCompressed ? 'Yes' : 'No';
      const maxSize = this.formatByteSize(packet.maxSize);
      lines.push(`| ${id} | ${name} | ${pkg} | ${compressed} | ${maxSize} |`);
    }
    lines.push('');
    lines.push('---');
    lines.push('');

    // Packet details
    for (const packet of sortedPackets) {
      lines.push(...this.generatePacketSection(packet, enums, dataClasses));
      lines.push('---');
      lines.push('');
    }

    // Back link
    lines.push(`[Back to Home](${this.pageName(`${this.version}-Home`)})`);

    this.writePage(`${this.version}-${category}`, lines);
  }

  private generatePacketSection(
    packet: PacketInfo,
    enums: Map<string, EnumInfo>,
    dataClasses: Map<string, DataClassInfo>
  ): string[] {
    const lines: string[] = [];
    const layout = this.layouts.get(packet.name);

    lines.push(`## ${packet.name}`);
    lines.push('');

    // Metadata table with all static final constants
    lines.push('| Property | Value |');
    lines.push('|----------|-------|');
    if (packet.packetId !== undefined) {
      lines.push(`| Packet ID | \`0x${packet.packetId.toString(16).padStart(2, '0').toUpperCase()}\` (${packet.packetId}) |`);
    }
    lines.push(`| Compressed | ${packet.isCompressed ? 'Yes' : 'No'} |`);
    if (packet.fixedBlockSize > 0) {
      lines.push(`| Fixed Block Size | ${packet.fixedBlockSize} bytes |`);
    }
    lines.push(`| Variable Field Count | ${packet.variableFieldCount} |`);
    if (packet.maxSize > 0) {
      lines.push(`| Max Size | ${this.formatByteSize(packet.maxSize)} |`);
    }
    if (packet.nullableBitFieldSize > 0) {
      lines.push(`| Nullable Bit Field | ${packet.nullableBitFieldSize} byte(s) |`);
    }
    if (packet.variableBlockStart > 0) {
      lines.push(`| Variable Block Start | ${packet.variableBlockStart} |`);
    }
    lines.push('');

    // Fields table with layout information if available
    if (packet.fields.length > 0) {
      lines.push('### Fields');
      lines.push('');

      if (layout && layout.fields.length > 0) {
        // Enhanced table with wire layout information
        lines.push('| Name | Type | Offset | Size | Encoding | Nullable |');
        lines.push('|------|------|--------|------|----------|----------|');

        for (const field of packet.fields) {
          const typeLink = this.formatTypeLink(field.javaType, enums, dataClasses);
          const nullable = field.nullable ? 'Yes' : 'No';
          const layoutField = layout.fields.find((f: FieldLayoutInfo) => f.name === field.name);

          const offset = layoutField?.wireOffset !== undefined ? layoutField.wireOffset.toString() : '-';
          const size = layoutField?.wireSize !== undefined
            ? (layoutField.wireSize === -1 ? 'var' : layoutField.wireSize.toString())
            : '-';
          const encoding = layoutField?.encoding ? `\`${layoutField.encoding}\`` : '-';

          lines.push(`| \`${field.name}\` | ${typeLink} | ${offset} | ${size} | ${encoding} | ${nullable} |`);
        }
      } else {
        // Basic table without layout information
        lines.push('| Name | Type | Nullable | Max Length |');
        lines.push('|------|------|----------|------------|');

        for (const field of packet.fields) {
          const typeLink = this.formatTypeLink(field.javaType, enums, dataClasses);
          const nullable = field.nullable ? 'Yes' : 'No';
          const maxLength = field.maxLength ? field.maxLength.toString() : '-';

          lines.push(`| \`${field.name}\` | ${typeLink} | ${nullable} | ${maxLength} |`);
        }
      }
      lines.push('');

      // Add layout notes if available
      if (layout?.notes) {
        lines.push(`> **Layout Notes:** ${layout.notes}`);
        lines.push('');
      }

      // Add inline enum values for enum fields
      for (const field of packet.fields) {
        const simpleName = field.javaType.split('.').pop() || field.javaType;
        const enumInfo = enums.get(simpleName);
        if (enumInfo && enumInfo.values.length > 0) {
          lines.push(`**${field.name}** enum values:`);
          lines.push('');
          for (const value of enumInfo.values) {
            lines.push(`- \`${value.value}\` = ${value.name}`);
          }
          lines.push('');
        }
      }
    }

    return lines;
  }

  private generateEnumsPage(enums: Map<string, EnumInfo>): void {
    const lines: string[] = [];

    lines.push(`# Enums - ${this.version}`);
    lines.push('');
    lines.push(`[← Back to ${this.version} Home](${this.pageName(`${this.version}-Home`)})`);
    lines.push('');

    // Table of contents
    lines.push('## Enum Types');
    lines.push('');
    const sortedEnums = Array.from(enums.values()).sort((a, b) => a.name.localeCompare(b.name));
    for (const enumInfo of sortedEnums) {
      lines.push(`- [${enumInfo.name}](#${enumInfo.name.toLowerCase()})`);
    }
    lines.push('');

    // Enum details
    for (const enumInfo of sortedEnums) {
      lines.push(`## ${enumInfo.name}`);
      lines.push('');
      lines.push(`**Package**: \`${enumInfo.package}\``);
      lines.push('');

      if (enumInfo.values.length > 0) {
        lines.push('| Name | Value |');
        lines.push('|------|-------|');

        for (const value of enumInfo.values) {
          lines.push(`| \`${value.name}\` | ${value.value} |`);
        }
        lines.push('');
      }
    }

    this.writePage(`${this.version}-Enums`, lines);
  }

  private generateDataTypesPage(
    dataClasses: Map<string, DataClassInfo>,
    enums: Map<string, EnumInfo>
  ): void {
    const lines: string[] = [];

    lines.push(`# Data Types - ${this.version}`);
    lines.push('');
    lines.push(`[← Back to ${this.version} Home](${this.pageName(`${this.version}-Home`)})`);
    lines.push('');

    // Table of contents
    lines.push('## Data Classes');
    lines.push('');
    const sortedClasses = Array.from(dataClasses.values()).sort((a, b) => a.name.localeCompare(b.name));
    for (const dataClass of sortedClasses) {
      lines.push(`- [${dataClass.name}](#${dataClass.name.toLowerCase()})`);
    }
    lines.push('');

    // Data class details
    for (const dataClass of sortedClasses) {
      lines.push(`## ${dataClass.name}`);
      lines.push('');
      lines.push(`**Package**: \`${dataClass.package}\``);
      lines.push('');

      if (dataClass.fields.length > 0) {
        lines.push('### Fields');
        lines.push('');
        lines.push('| Field | Type | Nullable |');
        lines.push('|-------|------|----------|');

        for (const field of dataClass.fields) {
          const typeLink = this.formatTypeLink(field.javaType, enums, dataClasses);
          const nullable = field.nullable ? 'Yes' : 'No';

          lines.push(`| \`${field.name}\` | ${typeLink} | ${nullable} |`);
        }
        lines.push('');
      }
    }

    this.writePage(`${this.version}-Data-Types`, lines);
  }

  private generateVersionSidebar(packetsByCategory: Map<string, PacketInfo[]>): void {
    const lines: string[] = [];

    lines.push(`## ${this.version}`);
    lines.push('');
    lines.push(`- [Home](${this.pageName(`${this.version}-Home`)})`);

    const sortedCategories = Array.from(packetsByCategory.keys()).sort();
    for (const category of sortedCategories) {
      const displayName = this.formatCategoryName(category);
      lines.push(`- [${displayName}](${this.pageName(`${this.version}-${category}`)})`);
    }

    lines.push(`- [Enums](${this.pageName(`${this.version}-Enums`)})`);
    lines.push(`- [Data Types](${this.pageName(`${this.version}-Data-Types`)})`);

    this.writePage(`_Sidebar-${this.version}`, lines);
  }

  private parseExistingVersionsFromHome(): Set<string> {
    const homePath = join(this.outputDir, 'Home.md');
    const versions = new Set<string>();

    if (existsSync(homePath)) {
      const content = readFileSync(homePath, 'utf-8');
      const versionRegex = /\[([^\]]+)\]\([^)]*-Home\)/g;
      let match;

      while ((match = versionRegex.exec(content)) !== null) {
        versions.add(match[1]);
      }
    }

    return versions;
  }

  private generateRootHome(): void {
    const versions = this.parseExistingVersionsFromHome();
    versions.add(this.version);

    const lines: string[] = [];

    lines.push('# Hytale Protocol Documentation');
    lines.push('');
    lines.push('Welcome to the Hytale protocol documentation wiki.');
    lines.push('');
    lines.push('## Available Versions');
    lines.push('');

    const sortedVersions = Array.from(versions).sort().reverse();
    for (const version of sortedVersions) {
      lines.push(`- [${version}](${this.pageName(`${version}-Home`)})`);
    }
    lines.push('');

    this.writePage('Home', lines);
  }

  private parseExistingVersionsFromSidebar(): Set<string> {
    const sidebarPath = join(this.outputDir, '_Sidebar.md');
    const versions = new Set<string>();

    if (existsSync(sidebarPath)) {
      const content = readFileSync(sidebarPath, 'utf-8');
      const versionRegex = /## (.+)/g;
      let match;

      while ((match = versionRegex.exec(content)) !== null) {
        const version = match[1].trim();
        if (version !== 'Versions') {
          versions.add(version);
        }
      }
    }

    return versions;
  }

  private generateRootSidebar(): void {
    const versions = this.parseExistingVersionsFromSidebar();
    versions.add(this.version);

    const lines: string[] = [];

    lines.push('## Versions');
    lines.push('');

    const sortedVersions = Array.from(versions).sort().reverse();
    for (const version of sortedVersions) {
      lines.push(`- [${version}](${this.pageName(`${version}-Home`)})`);
    }

    this.writePage('_Sidebar', lines);
  }

  private formatCategoryName(category: string): string {
    return category
      .split('/')
      .map(part => part.charAt(0).toUpperCase() + part.slice(1))
      .join(' / ');
  }

  private formatByteSize(bytes: number): string {
    if (bytes <= 0) return '-';
    if (bytes < 1024) return `${bytes} bytes`;
    if (bytes < 1024 * 1024) {
      const kb = bytes / 1024;
      return `${kb % 1 === 0 ? kb : kb.toFixed(1)} KB`;
    }
    const mb = bytes / (1024 * 1024);
    return `${mb % 1 === 0 ? mb : mb.toFixed(1)} MB`;
  }

  private formatTypeLink(
    javaType: string,
    enums: Map<string, EnumInfo>,
    dataClasses: Map<string, DataClassInfo>
  ): string {
    // Strip generic parameters for lookup
    const baseType = javaType.replace(/<.*>/, '');
    const simpleName = baseType.split('.').pop() || baseType;

    // Check if it's an enum
    if (enums.has(simpleName)) {
      return `[${simpleName}](${this.pageName(`${this.version}-Enums`)}#${simpleName.toLowerCase()})`;
    }

    // Check if it's a data class
    if (dataClasses.has(simpleName)) {
      return `[${simpleName}](${this.pageName(`${this.version}-Data-Types`)}#${simpleName.toLowerCase()})`;
    }

    // Return as code
    return `\`${javaType}\``;
  }

  private pageName(page: string): string {
    return page.replace(/ /g, '-');
  }

  private writePage(name: string, lines: string[]): void {
    const path = join(this.outputDir, `${name}.md`);
    writeFileSync(path, lines.join('\n'), 'utf-8');
    console.log(`  ✓ ${name}.md`);
  }
}

export function generateJsonSummary(
  packetsByCategory: Map<string, PacketInfo[]>,
  enums: Map<string, EnumInfo>,
  outputPath: string,
  version: string
): void {
  const summary: any = {
    version,
    categories: {},
    enums: {}
  };

  for (const [category, packets] of packetsByCategory) {
    summary.categories[category] = packets.map(p => ({
      name: p.name,
      packetId: p.packetId,
      package: p.package,
      fields: p.fields.map(f => ({
        name: f.name,
        type: f.javaType,
        nullable: f.nullable
      })),
      deserializeContext: p.deserializeContext
    }));
  }

  for (const [name, enumInfo] of enums) {
    summary.enums[name] = {
      package: enumInfo.package,
      values: enumInfo.values
    };
  }

  writeFileSync(outputPath, JSON.stringify(summary, null, 2), 'utf-8');
  console.log(`✓ Generated JSON summary: ${outputPath}`);
}
