/**
 * Java protocol parser using tree-sitter
 */

import Parser from 'tree-sitter';
import Java from 'tree-sitter-java';
import { readFileSync, readdirSync, statSync } from 'fs';
import { join, relative } from 'path';
import type { PacketInfo, EnumInfo, DataClassInfo, FieldInfo, EnumValue, ParsedResults } from './types';

export class JavaProtocolParser {
  private parser: Parser;
  private protocolDir: string;
  private packetsDir: string;
  private enums: Map<string, EnumInfo> = new Map();
  private dataClasses: Map<string, DataClassInfo> = new Map();

  constructor(protocolDir: string) {
    this.protocolDir = protocolDir;
    this.packetsDir = join(protocolDir, 'packets');
    
    this.parser = new Parser();
    this.parser.setLanguage(Java);
  }

  parseAll(): ParsedResults {
    console.log('Parsing protocol entities...');
    this.parseProtocolEntities();

    console.log('Parsing packets...');
    const packetsByCategory = this.parsePackets();

    // Also parse enums from the packets directory (some enums are defined alongside packets)
    console.log('Parsing enums from packets directory...');
    this.parseEnumsFromPacketsDirectory(this.packetsDir, '');

    return {
      packetsByCategory,
      enums: this.enums,
      dataClasses: this.dataClasses
    };
  }

  private parseProtocolEntities(): void {
    this.parseEntityDirectory(this.protocolDir, '');
  }

  private parseEntityDirectory(dir: string, relPath: string): void {
    const entries = readdirSync(dir);

    for (const entry of entries) {
      const fullPath = join(dir, entry);
      const stat = statSync(fullPath);

      if (stat.isDirectory()) {
        if (entry === 'packets') continue; // Skip packets dir, handled separately
        this.parseEntityDirectory(fullPath, join(relPath, entry));
      } else if (entry.endsWith('.java')) {
        this.parseEntityFile(fullPath, relPath);
      }
    }
  }

  private parseEnumsFromPacketsDirectory(dir: string, relPath: string): void {
    const entries = readdirSync(dir);

    for (const entry of entries) {
      const fullPath = join(dir, entry);
      const stat = statSync(fullPath);

      if (stat.isDirectory()) {
        this.parseEnumsFromPacketsDirectory(fullPath, join(relPath, entry));
      } else if (entry.endsWith('.java')) {
        // Only parse enums from this file, skip packet classes
        this.parseEnumsFromFile(fullPath, relPath);
      }
    }
  }

  private parseEnumsFromFile(filePath: string, relPath: string): void {
    try {
      const buffer = readFileSync(filePath);
      const content = String(buffer.toString('utf-8'));

      if (typeof content !== 'string' || content.trim().length === 0) {
        return;
      }

      const tree = this.parser.parse(content);
      if (!tree || !tree.rootNode) {
        return;
      }

      const category = relPath.replace(/\\/g, '/') || 'root';

      this.traverseTree(tree.rootNode, (node) => {
        if (node.type === 'enum_declaration') {
          const enumInfo = this.extractEnumInfo(node, content, category, relPath);
          if (enumInfo && !this.enums.has(enumInfo.name)) {
            this.enums.set(enumInfo.name, enumInfo);
          }
        }
      });
    } catch (error) {
      // Silently skip files that can't be parsed for enums
    }
  }

  private parseEntityFile(filePath: string, relPath: string): void {
    try {
      const buffer = readFileSync(filePath);
      const content = String(buffer.toString('utf-8'));
      
      // Validate content is a non-empty string
      if (typeof content !== 'string' || content.trim().length === 0) {
        console.warn(`⚠️  Skipping empty or invalid file: ${filePath}`);
        return;
      }
      
      // Parse directly with the string
      const tree = this.parser.parse(content);
      if (!tree || !tree.rootNode) {
        console.warn(`⚠️  Failed to parse file: ${filePath}`);
        return;
      }
      
      const category = relPath.replace(/\\/g, '/') || 'root';
      
      this.traverseTree(tree.rootNode, (node) => {
        if (node.type === 'enum_declaration') {
          const enumInfo = this.extractEnumInfo(node, content, category, relPath);
          if (enumInfo) {
            this.enums.set(enumInfo.name, enumInfo);
          }
        } else if (node.type === 'class_declaration') {
          const dataClassInfo = this.extractDataClassInfo(node, content, category, relPath);
          if (dataClassInfo && !dataClassInfo.name.includes('Packet')) {
            this.dataClasses.set(dataClassInfo.name, dataClassInfo);
          }
        }
      });
    } catch (error) {
      console.error(`❌ Error parsing file ${filePath}:`, error instanceof Error ? error.message : String(error));
      // Continue processing other files
    }
  }

  private parsePackets(): Map<string, PacketInfo[]> {
    const packetsByCategory = new Map<string, PacketInfo[]>();
    this.parsePacketDirectory(this.packetsDir, '', packetsByCategory);
    return packetsByCategory;
  }

  private parsePacketDirectory(dir: string, relPath: string, result: Map<string, PacketInfo[]>): void {
    const entries = readdirSync(dir);
    for (const entry of entries) {
      const fullPath = join(dir, entry);
      const stat = statSync(fullPath);
      
      if (stat.isDirectory()) {
        this.parsePacketDirectory(fullPath, join(relPath, entry), result);
      } else if (entry.endsWith('.java')) {
        const packet = this.parsePacketFile(fullPath, relPath);
        if (packet) {
          const category = relPath.replace(/\\/g, '/') || 'uncategorized';
          if (!result.has(category)) {
            result.set(category, []);
          }
          result.get(category)!.push(packet);
        }
      }
    }
  }

  private parsePacketFile(filePath: string, relPath: string): PacketInfo | null {
    try {
      const buffer = readFileSync(filePath);
      const content = String(buffer.toString('utf-8'));
      
      // Validate content is a non-empty string
      if (typeof content !== 'string' || content.trim().length === 0) {
        console.warn(`⚠️  Skipping empty or invalid packet file: ${filePath}`);
        return null;
      }
      
      // Parse directly with the string
      const tree = this.parser.parse(content);
      if (!tree || !tree.rootNode) {
        console.warn(`⚠️  Failed to parse packet file: ${filePath}`);
        return null;
      }
      
      const category = relPath.replace(/\\/g, '/') || 'uncategorized';
      
      let packetInfo: PacketInfo | null = null;
      
      this.traverseTree(tree.rootNode, (node) => {
        if (node.type === 'class_declaration') {
          const className = this.getNodeText(node.childForFieldName('name'), content);
          if (className) {
            packetInfo = this.extractPacketInfo(node, content, category);
          }
        }
      });
      
      return packetInfo;
    } catch (error) {
      console.error(`❌ Error parsing packet file ${filePath}:`, error instanceof Error ? error.message : String(error));
      return null;
    }
  }

  private extractPacketInfo(node: Parser.SyntaxNode, content: string, category: string): PacketInfo {
    const className = this.getNodeText(node.childForFieldName('name'), content) || 'Unknown';
    const packageName = this.extractPackage(content);
    
    const packet: PacketInfo = {
      name: className,
      package: packageName,
      category,
      isCompressed: false,
      nullableBitFieldSize: 0,
      fixedBlockSize: 0,
      variableFieldCount: 0,
      variableBlockStart: 0,
      maxSize: 0,
      fields: [],
      imports: this.extractImports(content),
      isEnum: false,
      isDataClass: false
    };
    
    // Extract constants
    this.extractConstants(node, content, packet);
    
    // Extract fields
    this.extractFields(node, content, packet);
    
    // Extract layout from serialize method
    this.extractLayout(node, content, packet);
    
    return packet;
  }

  private extractEnumInfo(node: Parser.SyntaxNode, content: string, category: string, relPath: string): EnumInfo | null {
    const enumName = this.getNodeText(node.childForFieldName('name'), content);
    if (!enumName) return null;
    
    const packageName = this.extractPackage(content);
    const values: EnumValue[] = [];
    
    // Find enum body
    const body = node.childForFieldName('body');
    if (body) {
      this.traverseTree(body, (child) => {
        if (child.type === 'enum_constant') {
          const name = this.getNodeText(child.childForFieldName('name'), content);
          if (name) {
            // Try to find value in arguments
            let value = values.length;
            const args = child.childForFieldName('arguments');
            if (args) {
              const firstArg = args.namedChildren[0];
              if (firstArg) {
                const argText = this.getNodeText(firstArg, content);
                const parsed = parseInt(argText);
                if (!isNaN(parsed)) {
                  value = parsed;
                }
              }
            }
            values.push({ name, value });
          }
        }
      });
    }
    
    return {
      name: enumName,
      package: packageName,
      category,
      sourcePath: relPath,
      values
    };
  }

  private extractDataClassInfo(node: Parser.SyntaxNode, content: string, category: string, relPath: string): DataClassInfo | null {
    const className = this.getNodeText(node.childForFieldName('name'), content);
    if (!className) return null;
    
    const packageName = this.extractPackage(content);
    const fields: FieldInfo[] = [];
    
    // Extract fields from class body
    const body = node.childForFieldName('body');
    if (body) {
      this.traverseTree(body, (child) => {
        if (child.type === 'field_declaration') {
          const fieldInfo = this.extractFieldInfo(child, content);
          if (fieldInfo) {
            fields.push(fieldInfo);
          }
        }
      });
    }
    
    return {
      name: className,
      package: packageName,
      category,
      sourcePath: relPath,
      fields,
      imports: this.extractImports(content)
    };
  }

  private extractConstants(node: Parser.SyntaxNode, content: string, packet: PacketInfo): void {
    const body = node.childForFieldName('body');
    if (!body) return;

    this.traverseTree(body, (child) => {
      if (child.type === 'field_declaration') {
        // Find modifiers by looking through children (not using childForFieldName which doesn't work for modifiers)
        const modifiers = child.children.find((c: Parser.SyntaxNode) => c.type === 'modifiers');
        const modText = modifiers ? this.getNodeText(modifiers, content) : '';

        if (modText.includes('static') && modText.includes('final')) {
          const declarator = child.children.find((c: Parser.SyntaxNode) => c.type === 'variable_declarator');
          if (declarator) {
            const name = this.getNodeText(declarator.childForFieldName('name'), content);
            const value = this.getNodeText(declarator.childForFieldName('value'), content);

            if (name && value) {
              if (name === 'IS_COMPRESSED') {
                packet.isCompressed = value === 'true';
              } else {
                const numValue = parseInt(value);
                if (!isNaN(numValue)) {
                  if (name === 'PACKET_ID') packet.packetId = numValue;
                  else if (name === 'NULLABLE_BIT_FIELD_SIZE') packet.nullableBitFieldSize = numValue;
                  else if (name === 'FIXED_BLOCK_SIZE') packet.fixedBlockSize = numValue;
                  else if (name === 'VARIABLE_FIELD_COUNT') packet.variableFieldCount = numValue;
                  else if (name === 'VARIABLE_BLOCK_START') packet.variableBlockStart = numValue;
                  else if (name === 'MAX_SIZE') packet.maxSize = numValue;
                }
              }
            }
          }
        }
      }
    });
  }

  private extractFields(node: Parser.SyntaxNode, content: string, packet: PacketInfo): void {
    const body = node.childForFieldName('body');
    if (!body) return;

    // First, try to extract fields from the "full" constructor (with all parameters)
    // This gives us the most accurate field definitions with types and nullability
    const constructorFields = this.extractFieldsFromConstructor(body, content);
    if (constructorFields.length > 0) {
      packet.fields = constructorFields;
      return;
    }

    // Fallback to field declarations if no constructor found
    this.traverseTree(body, (child) => {
      if (child.type === 'field_declaration') {
        // Find modifiers by looking through children
        const modifiers = child.children.find((c: Parser.SyntaxNode) => c.type === 'modifiers');
        const modText = modifiers ? this.getNodeText(modifiers, content) : '';

        // Skip static fields
        if (modText.includes('static')) return;

        const fieldInfo = this.extractFieldInfo(child, content);
        if (fieldInfo) {
          packet.fields.push(fieldInfo);
        }
      }
    });
  }

  private extractFieldsFromConstructor(body: Parser.SyntaxNode, content: string): FieldInfo[] {
    const fields: FieldInfo[] = [];
    let bestConstructor: Parser.SyntaxNode | null = null;
    let maxParams = 0;

    // Find all constructors and pick the one with the most parameters
    // (the "full" constructor, not the copy constructor or empty one)
    this.traverseTree(body, (child) => {
      if (child.type === 'constructor_declaration') {
        const params = child.childForFieldName('parameters');
        if (params) {
          const paramCount = params.namedChildren.filter((p: Parser.SyntaxNode) =>
            p.type === 'formal_parameter' || p.type === 'spread_parameter'
          ).length;

          // Check if this is NOT a copy constructor (single param of same type)
          if (paramCount === 1) {
            const firstParam = params.namedChildren.find((p: Parser.SyntaxNode) =>
              p.type === 'formal_parameter'
            );
            if (firstParam) {
              const paramType = this.getNodeText(firstParam.childForFieldName('type'), content);
              // Skip if it's a copy constructor (type matches class containing it)
              const parentClass = this.findParentClass(child);
              if (parentClass) {
                const className = this.getNodeText(parentClass.childForFieldName('name'), content);
                if (paramType === className) {
                  return; // Skip copy constructor
                }
              }
            }
          }

          if (paramCount > maxParams) {
            maxParams = paramCount;
            bestConstructor = child;
          }
        }
      }
    });

    if (!bestConstructor) return fields;

    const params = (bestConstructor as Parser.SyntaxNode).childForFieldName('parameters');
    if (!params) return fields;

    for (const param of params.namedChildren) {
      if (param.type === 'formal_parameter') {
        const typeNode = param.childForFieldName('type');
        const nameNode = param.childForFieldName('name');

        if (typeNode && nameNode) {
          const javaType = this.getNodeText(typeNode, content);
          const name = this.getNodeText(nameNode, content);

          // Check for nullability annotations - find modifiers by looking through children
          const modifiers = param.children.find((c: Parser.SyntaxNode) => c.type === 'modifiers');
          const modText = modifiers ? this.getNodeText(modifiers, content) : '';
          const nullable = modText.includes('@Nullable');

          fields.push({
            name,
            javaType,
            nullable,
            isVariable: false,
            encoding: ''
          });
        }
      }
    }

    return fields;
  }

  private findParentClass(node: Parser.SyntaxNode): Parser.SyntaxNode | null {
    let current: Parser.SyntaxNode | null = node.parent;
    while (current) {
      if (current.type === 'class_declaration') {
        return current;
      }
      current = current.parent;
    }
    return null;
  }

  private extractFieldInfo(node: Parser.SyntaxNode, content: string): FieldInfo | null {
    const typeNode = node.childForFieldName('type');
    const declarator = node.children.find((c: Parser.SyntaxNode) => c.type === 'variable_declarator');

    if (!typeNode || !declarator) return null;

    const name = this.getNodeText(declarator.childForFieldName('name'), content);
    const javaType = this.getNodeText(typeNode, content);

    if (!name || !javaType) return null;

    // Check for nullable annotation - find modifiers by looking through children
    const modifiers = node.children.find((c: Parser.SyntaxNode) => c.type === 'modifiers');
    const modText = modifiers ? this.getNodeText(modifiers, content) : '';
    const nullable = modText.includes('@Nullable');

    return {
      name,
      javaType,
      nullable,
      isVariable: false,
      encoding: ''
    };
  }

  private extractLayout(node: Parser.SyntaxNode, content: string, packet: PacketInfo): void {
    const body = node.childForFieldName('body');
    if (!body) return;

    // Find deserialize method
    let deserializeMethod: Parser.SyntaxNode | null = null;

    this.traverseTree(body, (child) => {
      if (child.type === 'method_declaration') {
        const name = this.getNodeText(child.childForFieldName('name'), content);
        if (name === 'deserialize') {
          deserializeMethod = child;
        }
      }
    });

    // Extract AI context from deserialize method (primary source for layout)
    if (deserializeMethod) {
      packet.deserializeContext = this.extractDeserializeContext(
        node,
        deserializeMethod,
        content,
        packet
      );
    }
  }

  /**
   * Extract the deserialize method code along with all dependencies
   * (static methods used, referenced types, etc.) to create a context
   * chunk that can be processed by an AI to understand the packet layout.
   */
  private extractDeserializeContext(
    classNode: Parser.SyntaxNode,
    deserializeMethod: Parser.SyntaxNode,
    content: string,
    packet: PacketInfo
  ): string {
    const contextParts: string[] = [];
    const referencedMethods = new Set<string>();
    const referencedTypes = new Set<string>();

    // Add class header info
    const className = this.getNodeText(classNode.childForFieldName('name'), content);
    contextParts.push(`// Packet: ${className}`);
    contextParts.push(`// Package: ${packet.package}`);
    contextParts.push('');

    // Add constants that are relevant to deserialization
    const body = classNode.childForFieldName('body');
    if (body) {
      const constants = this.extractRelevantConstants(body, content);
      if (constants.length > 0) {
        contextParts.push('// === CONSTANTS ===');
        contextParts.push(...constants);
        contextParts.push('');
      }
    }

    // Add field declarations for reference
    contextParts.push('// === FIELDS ===');
    for (const field of packet.fields) {
      const nullableAnnotation = field.nullable ? '@Nullable ' : '@Nonnull ';
      contextParts.push(`${nullableAnnotation}${field.javaType} ${field.name};`);
    }
    contextParts.push('');

    // Get the deserialize method code
    const deserializeCode = this.getNodeText(deserializeMethod, content);
    contextParts.push('// === DESERIALIZE METHOD ===');
    contextParts.push(deserializeCode);
    contextParts.push('');

    // Find all method calls within deserialize to identify dependencies
    this.traverseTree(deserializeMethod, (node) => {
      if (node.type === 'method_invocation') {
        const methodName = this.getMethodName(node, content);
        if (methodName) {
          // Check for static method calls like PacketIO.readXxx, VarInt.xxx
          const objectNode = node.childForFieldName('object');
          if (objectNode) {
            const objectName = this.getNodeText(objectNode, content);
            referencedMethods.add(`${objectName}.${methodName}`);
          }

          // Check for nested type deserialize calls (e.g., HostAddress.deserialize)
          if (methodName === 'deserialize' || methodName === 'fromValue') {
            if (objectNode) {
              referencedTypes.add(this.getNodeText(objectNode, content));
            }
          }
        }
      }
    });

    // Add static methods from this class that are called by deserialize
    if (body) {
      const staticMethods = this.extractStaticMethods(body, content, deserializeMethod);
      if (staticMethods.length > 0) {
        contextParts.push('// === STATIC HELPER METHODS (same class) ===');
        contextParts.push(...staticMethods);
        contextParts.push('');
      }
    }

    // Add reference info about external dependencies
    if (referencedMethods.size > 0 || referencedTypes.size > 0) {
      contextParts.push('// === EXTERNAL DEPENDENCIES ===');
      if (referencedMethods.size > 0) {
        contextParts.push('// Methods used: ' + Array.from(referencedMethods).join(', '));
      }
      if (referencedTypes.size > 0) {
        contextParts.push('// Types referenced: ' + Array.from(referencedTypes).join(', '));
      }
      contextParts.push('');
    }

    // Add a brief description of common PacketIO methods for context
    contextParts.push('// === COMMON PACKETIO METHODS REFERENCE ===');
    contextParts.push('// PacketIO.readFixedAsciiString(buf, offset, length) - reads fixed-length ASCII string');
    contextParts.push('// PacketIO.readVarString(buf, pos, charset) - reads variable-length string with VarInt prefix');
    contextParts.push('// PacketIO.readVarAsciiString(buf, pos, maxLen) - reads variable ASCII string');
    contextParts.push('// PacketIO.readUUID(buf, offset) - reads 16-byte UUID');
    contextParts.push('// VarInt.peek(buf, pos) - reads VarInt value without advancing');
    contextParts.push('// VarInt.length(buf, pos) - gets byte length of VarInt at position');
    contextParts.push('// buf.getByte(offset) - reads 1 byte');
    contextParts.push('// buf.getIntLE(offset) - reads 4-byte little-endian int');
    contextParts.push('// buf.getLongLE(offset) - reads 8-byte little-endian long');
    contextParts.push('// buf.getShortLE(offset) - reads 2-byte little-endian short');

    return contextParts.join('\n');
  }

  /**
   * Extract constants that are relevant to deserialization
   */
  private extractRelevantConstants(body: Parser.SyntaxNode, content: string): string[] {
    const constants: string[] = [];
    const relevantNames = [
      'PACKET_ID', 'IS_COMPRESSED', 'NULLABLE_BIT_FIELD_SIZE',
      'FIXED_BLOCK_SIZE', 'VARIABLE_FIELD_COUNT', 'VARIABLE_BLOCK_START', 'MAX_SIZE'
    ];

    this.traverseTree(body, (child) => {
      if (child.type === 'field_declaration') {
        // Find modifiers by looking through children
        const modifiers = child.children.find((c: Parser.SyntaxNode) => c.type === 'modifiers');
        const modText = modifiers ? this.getNodeText(modifiers, content) : '';

        if (modText.includes('static') && modText.includes('final')) {
          const declarator = child.children.find((c: Parser.SyntaxNode) => c.type === 'variable_declarator');
          if (declarator) {
            const name = this.getNodeText(declarator.childForFieldName('name'), content);
            if (name && relevantNames.includes(name)) {
              constants.push(this.getNodeText(child, content).trim());
            }
          }
        }
      }
    });

    return constants;
  }

  /**
   * Extract static methods that are referenced in the deserialize method
   */
  private extractStaticMethods(
    body: Parser.SyntaxNode,
    content: string,
    deserializeMethod: Parser.SyntaxNode
  ): string[] {
    const methods: string[] = [];
    const calledMethods = new Set<string>();

    // First find all method names called within deserialize
    this.traverseTree(deserializeMethod, (node) => {
      if (node.type === 'method_invocation') {
        const methodName = this.getMethodName(node, content);
        if (methodName) {
          calledMethods.add(methodName);
        }
      }
    });

    // Then find static methods in the class body that match
    this.traverseTree(body, (child) => {
      if (child.type === 'method_declaration') {
        // Find modifiers by looking through children
        const modifiers = child.children.find((c: Parser.SyntaxNode) => c.type === 'modifiers');
        const modText = modifiers ? this.getNodeText(modifiers, content) : '';

        if (modText.includes('static')) {
          const methodName = this.getNodeText(child.childForFieldName('name'), content);
          // Include helper methods that might be called (like computeBytesConsumed, validateStructure)
          if (methodName && (calledMethods.has(methodName) ||
              methodName === 'computeBytesConsumed' ||
              methodName === 'validateStructure')) {
            methods.push(this.getNodeText(child, content));
          }
        }
      }
    });

    return methods;
  }

  private getMethodName(node: Parser.SyntaxNode, content: string): string | null {
    const nameNode = node.childForFieldName('name');
    if (nameNode) {
      return this.getNodeText(nameNode, content);
    }
    
    // Handle object.method() pattern
    const objectNode = node.childForFieldName('object');
    if (objectNode && objectNode.type === 'field_access') {
      const fieldNode = objectNode.childForFieldName('field');
      if (fieldNode) {
        return this.getNodeText(fieldNode, content);
      }
    }
    
    return null;
  }

  private extractPackage(content: string): string {
    const match = content.match(/package\s+([\w.]+);/);
    return match ? match[1] : '';
  }

  private extractImports(content: string): string[] {
    const imports: string[] = [];
    const matches = content.matchAll(/import\s+([\w.]+);/g);
    for (const match of matches) {
      imports.push(match[1]);
    }
    return imports;
  }

  private getNodeText(node: Parser.SyntaxNode | null, content: string): string {
    if (!node) return '';
    return content.substring(node.startIndex, node.endIndex);
  }

  private traverseTree(node: Parser.SyntaxNode, callback: (node: Parser.SyntaxNode) => void): void {
    callback(node);
    for (const child of node.children) {
      this.traverseTree(child, callback);
    }
  }
}
