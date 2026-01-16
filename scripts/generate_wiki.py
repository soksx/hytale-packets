#!/usr/bin/env python3
"""
Hytale Packet Documentation Generator

Parses decompiled Java protocol files using regex and generates Markdown
documentation for GitHub Wiki pages organized by version and category.

The documentation focuses on packets (from protocol/packets/) but includes
links to related entities (enums, data classes) from the broader protocol package.
"""

import re
import json
import argparse
from pathlib import Path
from dataclasses import dataclass, field
from typing import Optional
from collections import defaultdict


@dataclass
class EnumValue:
    """Represents an enum constant."""
    name: str
    value: int


@dataclass
class EnumInfo:
    """Represents a Java enum type."""
    name: str
    package: str
    category: str
    source_path: str = ""  # Relative path within protocol package
    values: list[EnumValue] = field(default_factory=list)


@dataclass
class FieldInfo:
    """Represents a packet field."""
    name: str
    java_type: str
    nullable: bool = False
    default_value: Optional[str] = None
    max_length: Optional[int] = None

    @property
    def wire_type(self) -> str:
        """Convert Java type to wire protocol type."""
        type_map = {
            'byte': 'i8',
            'short': 'i16',
            'int': 'i32',
            'long': 'i64',
            'float': 'f32',
            'double': 'f64',
            'boolean': 'bool',
            'String': 'string',
            'UUID': 'uuid',
            'byte[]': 'bytes[]',
            'int[]': 'i32[]',
            'long[]': 'i64[]',
            'float[]': 'f32[]',
            'double[]': 'f64[]',
        }
        base_type = self.java_type.replace('[]', '')
        is_array = '[]' in self.java_type

        if self.java_type in type_map:
            return type_map[self.java_type]
        elif base_type in type_map and is_array:
            return type_map[base_type] + '[]'
        else:
            return self.java_type


@dataclass
class DataClassInfo:
    """Represents a protocol data class (non-packet, non-enum)."""
    name: str
    package: str
    category: str
    source_path: str = ""  # Relative path within protocol package
    fields: list[FieldInfo] = field(default_factory=list)
    imports: list[str] = field(default_factory=list)


@dataclass
class PacketInfo:
    """Represents a parsed packet class."""
    name: str
    package: str
    category: str
    packet_id: Optional[int] = None
    is_compressed: bool = False
    nullable_bit_field_size: int = 0
    fixed_block_size: int = 0
    variable_field_count: int = 0
    variable_block_start: int = 0
    max_size: int = 0
    fields: list[FieldInfo] = field(default_factory=list)
    imports: list[str] = field(default_factory=list)
    is_enum: bool = False
    is_data_class: bool = False

    @property
    def packet_id_hex(self) -> str:
        """Return packet ID as hex string."""
        if self.packet_id is not None:
            return f"0x{self.packet_id:02X}"
        return "N/A"


class JavaProtocolParser:
    """Parses Java protocol source files using regex patterns.

    Parses the full protocol package but distinguishes between:
    - Packets (from protocol/packets/): fully documented
    - Protocol entities (enums, data classes from other protocol dirs): linked from packet docs
    """

    # Regex patterns for parsing
    PACKAGE_PATTERN = re.compile(r'package\s+([\w.]+);')
    IMPORT_PATTERN = re.compile(r'import\s+([\w.]+);')
    CLASS_PATTERN = re.compile(r'public\s+class\s+(\w+)\s+implements\s+Packet')
    ENUM_PATTERN = re.compile(r'public\s+enum\s+(\w+)\s*\{')
    ENUM_VALUE_PATTERN = re.compile(r'(\w+)\s*\(\s*(\d+)\s*\)')
    DATA_CLASS_PATTERN = re.compile(r'public\s+class\s+(\w+)\s*(?:extends\s+\w+\s*)?\{')

    # Static constants regex
    PACKET_ID_PATTERN = re.compile(r'public\s+static\s+final\s+int\s+PACKET_ID\s*=\s*(\d+);')
    IS_COMPRESSED_PATTERN = re.compile(r'public\s+static\s+final\s+boolean\s+IS_COMPRESSED\s*=\s*(true|false);')
    NULLABLE_BIT_FIELD_PATTERN = re.compile(r'public\s+static\s+final\s+int\s+NULLABLE_BIT_FIELD_SIZE\s*=\s*(\d+);')
    FIXED_BLOCK_SIZE_PATTERN = re.compile(r'public\s+static\s+final\s+int\s+FIXED_BLOCK_SIZE\s*=\s*(\d+);')
    VARIABLE_FIELD_COUNT_PATTERN = re.compile(r'public\s+static\s+final\s+int\s+VARIABLE_FIELD_COUNT\s*=\s*(\d+);')
    VARIABLE_BLOCK_START_PATTERN = re.compile(r'public\s+static\s+final\s+int\s+VARIABLE_BLOCK_START\s*=\s*(\d+);')
    MAX_SIZE_PATTERN = re.compile(r'public\s+static\s+final\s+int\s+MAX_SIZE\s*=\s*(\d+);')

    # Field patterns
    FIELD_PATTERN = re.compile(
        r'(@Nullable\s+|@Nonnull\s+)?public\s+(?!static)(\w+(?:<[\w<>, ]+>)?(?:\[\])?)\s+(\w+)(?:\s*=\s*([^;]+))?;'
    )

    # Max length patterns from validation code
    STRING_MAX_LENGTH_PATTERN = re.compile(r'stringTooLong\s*\(\s*"(\w+)"\s*,\s*\w+\s*,\s*(\d+)\s*\)')
    ARRAY_MAX_LENGTH_PATTERN = re.compile(r'arrayTooLong\s*\(\s*"(\w+)"\s*,\s*\w+\s*,\s*(\d+)\s*\)')

    def __init__(self, protocol_dir: Path):
        self.protocol_dir = protocol_dir
        self.packets_dir = protocol_dir / "packets"
        self.enums: dict[str, EnumInfo] = {}
        self.packets: dict[str, PacketInfo] = {}
        self.data_classes: dict[str, DataClassInfo] = {}

    def parse_all(self) -> tuple[dict[str, list[PacketInfo]], dict[str, EnumInfo], dict[str, DataClassInfo]]:
        """Parse all Java files and return categorized results.

        Returns:
            - packets_by_category: Packets from protocol/packets/ organized by category
            - enums: All enums from the full protocol package
            - data_classes: All data classes from the full protocol package
        """
        packets_by_category: dict[str, list[PacketInfo]] = defaultdict(list)

        # First, parse the full protocol package for enums and data classes
        self._parse_protocol_entities()

        # Then parse packets from protocol/packets/
        if self.packets_dir.exists():
            for category_dir in self.packets_dir.iterdir():
                if not category_dir.is_dir():
                    continue

                category = category_dir.name

                for java_file in category_dir.glob('*.java'):
                    result = self._parse_packet_file(java_file, category)
                    if result:
                        if result.is_enum:
                            # Packet-local enum - add to enums with packets category
                            enum_info = self._extract_enum_info(result, java_file, f"packets/{category}")
                            self.enums[result.name] = enum_info
                        elif result.packet_id is not None:
                            packets_by_category[category].append(result)
                            self.packets[result.name] = result
                        else:
                            # Packet-local data class
                            data_class = self._convert_to_data_class(result, f"packets/{category}")
                            self.data_classes[result.name] = data_class

        # Sort packets by ID within each category
        for category in packets_by_category:
            packets_by_category[category].sort(key=lambda p: p.packet_id or 0)

        return dict(packets_by_category), self.enums, self.data_classes

    def _parse_protocol_entities(self):
        """Parse enums and data classes from all protocol subdirectories (except packets)."""
        for subdir in self.protocol_dir.iterdir():
            if not subdir.is_dir():
                # Handle root-level protocol files
                if subdir.suffix == '.java':
                    self._parse_entity_file(subdir, "")
                continue

            # Skip packets directory - handled separately
            if subdir.name == "packets":
                continue

            rel_path = subdir.name
            self._parse_entity_directory(subdir, rel_path)

    def _parse_entity_directory(self, directory: Path, rel_path: str):
        """Recursively parse a directory for enums and data classes."""
        for item in directory.iterdir():
            if item.is_dir():
                self._parse_entity_directory(item, f"{rel_path}/{item.name}")
            elif item.suffix == '.java':
                self._parse_entity_file(item, rel_path)

    def _parse_entity_file(self, java_file: Path, rel_path: str):
        """Parse a single Java file for enum or data class."""
        try:
            content = java_file.read_text(encoding='utf-8')
        except Exception as e:
            print(f"Error reading {java_file}: {e}")
            return

        # Extract package
        package = ""
        package_match = self.PACKAGE_PATTERN.search(content)
        if package_match:
            package = package_match.group(1)

        # Determine category from relative path
        category = rel_path.split('/')[0] if rel_path else "root"

        # Check if it's an enum
        enum_match = self.ENUM_PATTERN.search(content)
        if enum_match:
            enum_name = enum_match.group(1)
            enum_info = EnumInfo(
                name=enum_name,
                package=package,
                category=category,
                source_path=rel_path
            )
            # Extract enum values
            start = enum_match.end()
            enum_body_end = content.find(';', start)
            if enum_body_end != -1:
                enum_body = content[start:enum_body_end]
                for match in self.ENUM_VALUE_PATTERN.finditer(enum_body):
                    enum_info.values.append(EnumValue(
                        name=match.group(1),
                        value=int(match.group(2))
                    ))
            self.enums[enum_name] = enum_info
            return

        # Check if it's a data class (not a packet)
        class_match = self.CLASS_PATTERN.search(content)
        if class_match:
            # It's a packet - skip (packets are only from packets/ directory)
            return

        data_class_match = self.DATA_CLASS_PATTERN.search(content)
        if data_class_match:
            class_name = data_class_match.group(1)
            data_class = DataClassInfo(
                name=class_name,
                package=package,
                category=category,
                source_path=rel_path
            )
            # Extract imports
            for match in self.IMPORT_PATTERN.finditer(content):
                data_class.imports.append(match.group(1))
            # Extract fields
            self._extract_data_class_fields(content, data_class)
            self.data_classes[class_name] = data_class

    def _extract_data_class_fields(self, content: str, data_class: DataClassInfo):
        """Extract field declarations from a data class."""
        for match in self.FIELD_PATTERN.finditer(content):
            annotation = match.group(1)
            java_type = match.group(2)
            name = match.group(3)
            default_value = match.group(4)

            # Skip static fields and common non-data fields
            if name in ('VALUES', 'value'):
                continue

            fld = FieldInfo(
                name=name,
                java_type=java_type,
                nullable=annotation and '@Nullable' in annotation,
                default_value=default_value.strip() if default_value else None
            )
            data_class.fields.append(fld)

    def _convert_to_data_class(self, packet_info: PacketInfo, rel_path: str) -> DataClassInfo:
        """Convert a PacketInfo (without packet_id) to a DataClassInfo."""
        return DataClassInfo(
            name=packet_info.name,
            package=packet_info.package,
            category=packet_info.category,
            source_path=rel_path,
            fields=packet_info.fields,
            imports=packet_info.imports
        )

    def _extract_enum_info(self, packet_info: PacketInfo, java_file: Path, rel_path: str) -> EnumInfo:
        """Extract enum values from an enum file."""
        content = java_file.read_text(encoding='utf-8')
        enum_info = EnumInfo(
            name=packet_info.name,
            package=packet_info.package,
            category=packet_info.category,
            source_path=rel_path
        )

        # Find enum body
        enum_match = self.ENUM_PATTERN.search(content)
        if enum_match:
            start = enum_match.end()
            enum_body_end = content.find(';', start)
            if enum_body_end != -1:
                enum_body = content[start:enum_body_end]
                for match in self.ENUM_VALUE_PATTERN.finditer(enum_body):
                    enum_info.values.append(EnumValue(
                        name=match.group(1),
                        value=int(match.group(2))
                    ))

        return enum_info

    def _parse_packet_file(self, file_path: Path, category: str) -> Optional[PacketInfo]:
        """Parse a single Java packet file using regex."""
        try:
            content = file_path.read_text(encoding='utf-8')
        except Exception as e:
            print(f"Error reading {file_path}: {e}")
            return None

        # Check if it's an enum
        enum_match = self.ENUM_PATTERN.search(content)
        if enum_match:
            package_match = self.PACKAGE_PATTERN.search(content)
            return PacketInfo(
                name=enum_match.group(1),
                package=package_match.group(1) if package_match else '',
                category=category,
                is_enum=True
            )

        # Check if it's a packet class
        class_match = self.CLASS_PATTERN.search(content)
        if class_match:
            packet = PacketInfo(
                name=class_match.group(1),
                package='',
                category=category
            )
        else:
            # Check for data class
            data_class_match = self.DATA_CLASS_PATTERN.search(content)
            if data_class_match:
                packet = PacketInfo(
                    name=data_class_match.group(1),
                    package='',
                    category=category,
                    is_data_class=True
                )
            else:
                return None

        # Extract package
        package_match = self.PACKAGE_PATTERN.search(content)
        if package_match:
            packet.package = package_match.group(1)

        # Extract imports
        for match in self.IMPORT_PATTERN.finditer(content):
            packet.imports.append(match.group(1))

        # Extract static constants
        self._extract_constants(content, packet)

        # Extract fields
        self._extract_fields(content, packet)

        # Extract max lengths from validation code
        self._extract_max_lengths(content, packet)

        return packet

    def _extract_constants(self, content: str, packet: PacketInfo):
        """Extract static constant values."""
        if match := self.PACKET_ID_PATTERN.search(content):
            packet.packet_id = int(match.group(1))

        if match := self.IS_COMPRESSED_PATTERN.search(content):
            packet.is_compressed = match.group(1) == 'true'

        if match := self.NULLABLE_BIT_FIELD_PATTERN.search(content):
            packet.nullable_bit_field_size = int(match.group(1))

        if match := self.FIXED_BLOCK_SIZE_PATTERN.search(content):
            packet.fixed_block_size = int(match.group(1))

        if match := self.VARIABLE_FIELD_COUNT_PATTERN.search(content):
            packet.variable_field_count = int(match.group(1))

        if match := self.VARIABLE_BLOCK_START_PATTERN.search(content):
            packet.variable_block_start = int(match.group(1))

        if match := self.MAX_SIZE_PATTERN.search(content):
            packet.max_size = int(match.group(1))

    def _extract_fields(self, content: str, packet: PacketInfo):
        """Extract field declarations."""
        for match in self.FIELD_PATTERN.finditer(content):
            annotation = match.group(1)
            java_type = match.group(2)
            name = match.group(3)
            default_value = match.group(4)

            # Skip static fields and common non-data fields
            if name in ('VALUES', 'value'):
                continue

            fld = FieldInfo(
                name=name,
                java_type=java_type,
                nullable=annotation and '@Nullable' in annotation,
                default_value=default_value.strip() if default_value else None
            )
            packet.fields.append(fld)

    def _extract_max_lengths(self, content: str, packet: PacketInfo):
        """Extract max lengths from validation/exception code."""
        field_by_name = {f.name.lower(): f for f in packet.fields}

        for match in self.STRING_MAX_LENGTH_PATTERN.finditer(content):
            field_name = match.group(1).lower()
            max_len = int(match.group(2))
            if field_name in field_by_name:
                field_by_name[field_name].max_length = max_len

        for match in self.ARRAY_MAX_LENGTH_PATTERN.finditer(content):
            field_name = match.group(1).lower()
            max_len = int(match.group(2))
            if field_name in field_by_name:
                field_by_name[field_name].max_length = max_len


class WikiGenerator:
    """Generates Markdown wiki documentation organized by version/category."""

    def __init__(self, output_dir: Path, version: str):
        self.output_dir = output_dir
        self.version = version
        self.output_dir.mkdir(parents=True, exist_ok=True)

    def generate(
        self,
        packets_by_category: dict[str, list[PacketInfo]],
        enums: dict[str, EnumInfo],
        data_classes: dict[str, DataClassInfo]
    ):
        """Generate all wiki pages."""
        # Generate version home page
        self._generate_version_home(packets_by_category, enums, data_classes)

        # Generate category pages with packets
        for category, packets in packets_by_category.items():
            self._generate_category_page(category, packets, enums, data_classes)

        # Generate enums page for this version
        self._generate_enums_page(enums)

        # Generate data types page for this version
        self._generate_data_types_page(data_classes, enums)

        # Generate sidebar for this version
        self._generate_version_sidebar(packets_by_category)

        # Generate root home page (versions index)
        self._generate_root_home()

        # Generate root sidebar
        self._generate_root_sidebar()

    def _generate_version_home(
        self,
        packets_by_category: dict[str, list[PacketInfo]],
        enums: dict[str, EnumInfo],
        data_classes: dict[str, DataClassInfo]
    ):
        """Generate the version home page."""
        total_packets = sum(len(p) for p in packets_by_category.values())

        lines = [
            f"# Hytale Protocol - Version {self.version}",
            f"",
            f"This documentation describes the network packets for version `{self.version}`.",
            f"",
            f"## Overview",
            f"",
            f"| Metric | Count |",
            f"|--------|-------|",
            f"| Total Packets | {total_packets} |",
            f"| Categories | {len(packets_by_category)} |",
            f"| Enum Types | {len(enums)} |",
            f"| Data Types | {len(data_classes)} |",
            f"",
            f"## Categories",
            f"",
        ]

        category_descriptions = {
            'auth': 'Authentication and authorization',
            'connection': 'Connection management (connect, disconnect, ping)',
            'entities': 'Entity updates and synchronization',
            'interaction': 'Player-entity interactions',
            'inventory': 'Inventory management',
            'player': 'Player state and movement',
            'world': 'World state and chunk data',
            'worldmap': 'World map information',
            'asseteditor': 'Asset editor functionality',
            'assets': 'Asset management and updates',
            'buildertools': 'Builder mode tools',
            'camera': 'Camera control',
            'interface_': 'UI interface packets',
            'machinima': 'Machinima/cinematics',
            'serveraccess': 'Server access control',
            'setup': 'Initial setup packets',
            'window': 'Window/GUI management',
        }

        for category in sorted(packets_by_category.keys()):
            packets = packets_by_category[category]
            desc = category_descriptions.get(category, '')
            display_name = category.replace('_', '').title()
            lines.append(f"- [{display_name}]({self._page_name(category)}) ({len(packets)} packets) - {desc}")

        lines.extend([
            f"",
            f"## Reference",
            f"",
            f"- [Enum Types]({self._page_name('Enums')})",
            f"- [Data Types]({self._page_name('Data-Types')})",
            f"",
            f"---",
            f"[All Versions](Home)",
        ])

        self._write_page(self._page_name('Home'), lines)

    def _generate_category_page(
        self,
        category: str,
        packets: list[PacketInfo],
        enums: dict[str, EnumInfo],
        data_classes: dict[str, DataClassInfo]
    ):
        """Generate a category page with all packets inline."""
        display_name = category.replace('_', '').title()

        lines = [
            f"# {display_name} Packets",
            f"",
            f"**Version:** {self.version}",
            f"",
            f"This category contains {len(packets)} packet(s).",
            f"",
            f"## Packet Index",
            f"",
            f"| ID | Name | Compressed | Max Size |",
            f"|----|------|------------|----------|",
        ]

        for packet in packets:
            compressed = "Yes" if packet.is_compressed else "No"
            max_size = self._format_size(packet.max_size)
            lines.append(
                f"| `{packet.packet_id_hex}` | [{packet.name}](#{packet.name.lower()}) | {compressed} | {max_size} |"
            )

        lines.append("")

        # Add each packet's detailed documentation
        for packet in packets:
            lines.extend(self._generate_packet_section(packet, enums, data_classes))

        lines.extend([
            f"---",
            f"[Back to Home]({self._page_name('Home')})",
        ])

        self._write_page(self._page_name(category), lines)

    def _generate_packet_section(
        self,
        packet: PacketInfo,
        enums: dict[str, EnumInfo],
        data_classes: dict[str, DataClassInfo]
    ) -> list[str]:
        """Generate documentation section for a single packet."""
        lines = [
            f"---",
            f"",
            f"## {packet.name}",
            f"",
            f"| Property | Value |",
            f"|----------|-------|",
            f"| Packet ID | `{packet.packet_id_hex}` ({packet.packet_id}) |",
            f"| Compressed | {'Yes' if packet.is_compressed else 'No'} |",
            f"| Fixed Block Size | {packet.fixed_block_size} bytes |",
            f"| Variable Field Count | {packet.variable_field_count} |",
            f"| Max Size | {self._format_size(packet.max_size)} |",
        ]

        if packet.nullable_bit_field_size > 0:
            lines.append(f"| Nullable Bit Field | {packet.nullable_bit_field_size} byte(s) |")

        if packet.fields:
            lines.extend([
                f"",
                f"### Fields",
                f"",
                f"| Name | Type | Nullable | Max Length |",
                f"|------|------|----------|------------|",
            ])

            for fld in packet.fields:
                nullable = "Yes" if fld.nullable else "No"
                max_len = str(fld.max_length) if fld.max_length else "-"
                type_str = self._format_type_link(fld.java_type, enums, data_classes)
                lines.append(f"| `{fld.name}` | {type_str} | {nullable} | {max_len} |")

        # Add enum details inline
        for fld in packet.fields:
            base_type = fld.java_type.replace('[]', '')
            if base_type in enums:
                enum = enums[base_type]
                if enum.values:
                    lines.extend([
                        f"",
                        f"**{fld.name}** enum values:",
                        f"",
                    ])
                    for ev in enum.values:
                        lines.append(f"- `{ev.value}` = {ev.name}")

        lines.append("")
        return lines

    def _generate_enums_page(self, enums: dict[str, EnumInfo]):
        """Generate the enums documentation page."""
        lines = [
            f"# Enum Types",
            f"",
            f"**Version:** {self.version}",
            f"",
            f"This page documents all enum types used in the protocol.",
            f"",
        ]

        # Group enums by source path (category)
        enums_by_category: dict[str, list[EnumInfo]] = defaultdict(list)
        for enum in enums.values():
            # Use source_path for grouping to show full protocol structure
            group_key = enum.source_path.split('/')[0] if enum.source_path else enum.category
            enums_by_category[group_key].append(enum)

        for category in sorted(enums_by_category.keys()):
            category_enums = sorted(enums_by_category[category], key=lambda e: e.name)
            display_category = category.replace('_', '').title()
            lines.extend([
                f"## {display_category}",
                f"",
            ])

            for enum in category_enums:
                # Show source path as subtitle if available
                source_info = f" (`{enum.source_path}`)" if enum.source_path else ""
                lines.extend([
                    f"### {enum.name}",
                    f"",
                ])
                if enum.source_path:
                    lines.append(f"*Source: `protocol/{enum.source_path}`*")
                    lines.append(f"")
                if enum.values:
                    lines.extend([
                        f"| Value | Name |",
                        f"|-------|------|",
                    ])
                    for ev in enum.values:
                        lines.append(f"| {ev.value} | `{ev.name}` |")
                else:
                    lines.append("*No values extracted*")
                lines.append("")

        lines.extend([
            f"---",
            f"[Back to Home]({self._page_name('Home')})",
        ])

        self._write_page(self._page_name('Enums'), lines)

    def _generate_data_types_page(self, data_classes: dict[str, DataClassInfo], enums: dict[str, EnumInfo]):
        """Generate the data types documentation page."""
        lines = [
            f"# Data Types",
            f"",
            f"**Version:** {self.version}",
            f"",
            f"This page documents composite data types used in packets.",
            f"",
        ]

        # Group by source path (category)
        types_by_category: dict[str, list[DataClassInfo]] = defaultdict(list)
        for dc in data_classes.values():
            # Use source_path for grouping to show full protocol structure
            group_key = dc.source_path.split('/')[0] if dc.source_path else dc.category
            types_by_category[group_key].append(dc)

        for category in sorted(types_by_category.keys()):
            category_types = sorted(types_by_category[category], key=lambda t: t.name)
            display_category = category.replace('_', '').title()
            lines.extend([
                f"## {display_category}",
                f"",
            ])

            for dc in category_types:
                lines.extend([
                    f"### {dc.name}",
                    f"",
                ])
                if dc.source_path:
                    lines.append(f"*Source: `protocol/{dc.source_path}`*")
                    lines.append(f"")

                if dc.fields:
                    lines.extend([
                        f"| Field | Type | Nullable |",
                        f"|-------|------|----------|",
                    ])
                    for fld in dc.fields:
                        nullable = "Yes" if fld.nullable else "No"
                        type_str = self._format_type_link(fld.java_type, enums, data_classes)
                        lines.append(f"| `{fld.name}` | {type_str} | {nullable} |")
                else:
                    lines.append("*No fields documented*")

                lines.append("")

        lines.extend([
            f"---",
            f"[Back to Home]({self._page_name('Home')})",
        ])

        self._write_page(self._page_name('Data-Types'), lines)

    def _generate_version_sidebar(self, packets_by_category: dict[str, list[PacketInfo]]):
        """Generate the sidebar for this version."""
        lines = [
            f"**Version {self.version}**",
            f"",
            f"[Home]({self._page_name('Home')})",
            f"",
            f"**Categories**",
        ]

        for category in sorted(packets_by_category.keys()):
            display_name = category.replace('_', '').title()
            lines.append(f"- [{display_name}]({self._page_name(category)})")

        lines.extend([
            f"",
            f"**Reference**",
            f"- [Enums]({self._page_name('Enums')})",
            f"- [Data Types]({self._page_name('Data-Types')})",
            f"",
            f"---",
            f"[All Versions](Home)",
        ])

        self._write_page(self._page_name('_Sidebar'), lines)

    def _parse_existing_versions_from_home(self) -> set[str]:
        """Parse existing versions from Home.md if it exists."""
        versions = set()
        root_home = self.output_dir / "Home.md"

        if root_home.exists():
            try:
                content = root_home.read_text(encoding='utf-8')
                # Match lines like "- [1.0.0](Version-1.0.0-Home)" or "- [beta-1](Version-beta-1-Home)"
                version_link_pattern = re.compile(r'^\s*-\s*\[([^\]]+)\]\(Version-[^\)]+\)', re.MULTILINE)
                for match in version_link_pattern.finditer(content):
                    versions.add(match.group(1))
                print(f"Found {len(versions)} existing versions in Home.md")
            except Exception as e:
                print(f"Warning: Could not parse existing Home.md: {e}")

        return versions

    def _generate_root_home(self):
        """Generate the root home page with versions list."""
        # Collect versions from version-specific home pages
        versions = set()
        for file in self.output_dir.glob('Version-*-Home.md'):
            # Extract version from filename like "Version-1.0.0-Home.md"
            parts = file.stem.split('-')
            if len(parts) >= 3:
                version = '-'.join(parts[1:-1])  # Everything between "Version" and "Home"
                versions.add(version)

        # Also parse existing Home.md for any versions that might be listed there
        existing_versions = self._parse_existing_versions_from_home()
        versions.update(existing_versions)

        # Always add current version
        versions.add(self.version)

        lines = [
            f"# Hytale Protocol Documentation",
            f"",
            f"Welcome to the Hytale network protocol documentation.",
            f"",
            f"## Available Versions",
            f"",
        ]

        if versions:
            for ver in sorted(versions, reverse=True):
                page_name = f"Version-{ver}-Home"
                lines.append(f"- [{ver}]({page_name})")
        else:
            lines.append("*No versions documented yet*")

        lines.extend([
            f"",
            f"---",
            f"*Documentation generated from decompiled packet sources.*",
        ])

        root_home = self.output_dir / "Home.md"
        root_home.write_text('\n'.join(lines), encoding='utf-8')
        print(f"Generated: Home.md (root)")

    def _parse_existing_versions_from_sidebar(self) -> set[str]:
        """Parse existing versions from _Sidebar.md if it exists."""
        versions = set()
        root_sidebar = self.output_dir / "_Sidebar.md"

        if root_sidebar.exists():
            try:
                content = root_sidebar.read_text(encoding='utf-8')
                # Match lines like "- [1.0.0](Version-1.0.0-Home)" or "- [beta-1](Version-beta-1-Home)"
                version_link_pattern = re.compile(r'^\s*-\s*\[([^\]]+)\]\(Version-[^\)]+\)', re.MULTILINE)
                for match in version_link_pattern.finditer(content):
                    versions.add(match.group(1))
                print(f"Found {len(versions)} existing versions in _Sidebar.md")
            except Exception as e:
                print(f"Warning: Could not parse existing _Sidebar.md: {e}")

        return versions

    def _generate_root_sidebar(self):
        """Generate the root sidebar."""
        # Collect versions from version-specific home pages
        versions = set()
        for file in self.output_dir.glob('Version-*-Home.md'):
            parts = file.stem.split('-')
            if len(parts) >= 3:
                version = '-'.join(parts[1:-1])
                versions.add(version)

        # Also parse existing _Sidebar.md for any versions that might be listed there
        existing_versions = self._parse_existing_versions_from_sidebar()
        versions.update(existing_versions)

        # Always add current version
        versions.add(self.version)

        lines = [
            f"**[Home](Home)**",
            f"",
            f"**Versions**",
        ]

        sorted_versions = sorted(versions, reverse=True)
        for ver in sorted_versions[:10]:  # Show latest 10
            page_name = f"Version-{ver}-Home"
            lines.append(f"- [{ver}]({page_name})")

        if len(sorted_versions) > 10:
            lines.append(f"- *...and {len(sorted_versions) - 10} more*")

        root_sidebar = self.output_dir / "_Sidebar.md"
        root_sidebar.write_text('\n'.join(lines), encoding='utf-8')
        print(f"Generated: _Sidebar.md (root)")

    def _write_page(self, name: str, lines: list[str]):
        """Write a wiki page to the output directory."""
        file_path = self.output_dir / f"{name}.md"
        content = '\n'.join(lines)
        file_path.write_text(content, encoding='utf-8')
        print(f"Generated: {name}.md")

    def _page_name(self, page: str) -> str:
        """Generate version-prefixed page name."""
        return f"Version-{self.version}-{page}"

    def _format_size(self, size: int) -> str:
        """Format byte size for display."""
        if size >= 1_000_000_000:
            return f"{size / 1_000_000_000:.1f} GB"
        elif size >= 1_000_000:
            return f"{size / 1_000_000:.1f} MB"
        elif size >= 1_000:
            return f"{size / 1_000:.1f} KB"
        else:
            return f"{size} bytes"

    def _format_type_link(
        self,
        java_type: str,
        enums: dict[str, EnumInfo],
        data_classes: dict[str, DataClassInfo]
    ) -> str:
        """Format a type with links to enum/data class documentation."""
        base_type = java_type.replace('[]', '')
        is_array = '[]' in java_type
        suffix = '[]' if is_array else ''

        if base_type in enums:
            return f"[{base_type}]({self._page_name('Enums')}#{base_type.lower()}){suffix}"
        elif base_type in data_classes:
            return f"[{base_type}]({self._page_name('Data-Types')}#{base_type.lower()}){suffix}"
        else:
            return f"`{java_type}`"


def generate_json_summary(
    packets_by_category: dict[str, list[PacketInfo]],
    enums: dict[str, EnumInfo],
    output_path: Path,
    version: str
):
    """Generate a JSON summary of all packets."""
    summary = {
        'version': version,
        'categories': {},
        'enums': {}
    }

    for category, packets in packets_by_category.items():
        summary['categories'][category] = {
            'packet_count': len(packets),
            'packets': [
                {
                    'name': p.name,
                    'id': p.packet_id,
                    'id_hex': p.packet_id_hex,
                    'compressed': p.is_compressed,
                    'max_size': p.max_size,
                    'field_count': len(p.fields),
                    'fields': [
                        {
                            'name': f.name,
                            'type': f.java_type,
                            'nullable': f.nullable,
                            'max_length': f.max_length
                        }
                        for f in p.fields
                    ]
                }
                for p in packets
            ]
        }

    for name, enum in enums.items():
        summary['enums'][name] = {
            'category': enum.category,
            'values': [{'name': v.name, 'value': v.value} for v in enum.values]
        }

    output_path.write_text(json.dumps(summary, indent=2), encoding='utf-8')
    print(f"Generated: {output_path.name}")


def main():
    parser = argparse.ArgumentParser(
        description='Generate wiki documentation from Hytale protocol Java files'
    )
    parser.add_argument(
        '--protocol-dir',
        type=Path,
        default=Path('./protocol'),
        help='Directory containing the full protocol package (with packets/ subdirectory)'
    )
    parser.add_argument(
        '--output-dir',
        type=Path,
        default=Path('./wiki'),
        help='Output directory for wiki pages'
    )
    parser.add_argument(
        '--version',
        type=str,
        default='unknown',
        help='Version string for documentation'
    )
    parser.add_argument(
        '--json',
        action='store_true',
        help='Also generate JSON summary'
    )

    args = parser.parse_args()

    if not args.protocol_dir.exists():
        print(f"Error: Protocol directory not found: {args.protocol_dir}")
        return 1

    packets_dir = args.protocol_dir / "packets"
    if not packets_dir.exists():
        print(f"Error: Packets directory not found: {packets_dir}")
        return 1

    print(f"Parsing protocol from: {args.protocol_dir}")
    print(f"Output directory: {args.output_dir}")
    print(f"Version: {args.version}")
    print()

    # Parse all Java files
    protocol_parser = JavaProtocolParser(args.protocol_dir)
    packets_by_category, enums, data_classes = protocol_parser.parse_all()

    total_packets = sum(len(p) for p in packets_by_category.values())
    print(f"\nFound {total_packets} packets in {len(packets_by_category)} categories")
    print(f"Found {len(enums)} enum types (from full protocol package)")
    print(f"Found {len(data_classes)} data classes (from full protocol package)")
    print()

    # Generate wiki pages
    generator = WikiGenerator(args.output_dir, args.version)
    generator.generate(packets_by_category, enums, data_classes)

    # Generate JSON if requested
    if args.json:
        json_path = args.output_dir / f'Version-{args.version}-packets.json'
        generate_json_summary(packets_by_category, enums, json_path, args.version)

    print(f"\nWiki generation complete!")
    return 0


if __name__ == '__main__':
    exit(main())
