# Hytale Protocol Documentation

[![Extract Hytale Packets](https://github.com/soksx/hytale-protocol/actions/workflows/extract-packets.yml/badge.svg)](https://github.com/soksx/hytale-protocol/actions/workflows/extract-packets.yml)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

**Comprehensive, version-tracked documentation of Hytale's network protocol** — automatically extracted and decompiled from official server builds.

> **[Browse the Protocol Wiki →](../../wiki)**

## What is This?

This project provides complete documentation of the **QUIC/UDP network protocol** used by [Hytale](https://hytale.com) game servers. It automates the extraction, decompilation, and documentation of all network packets, enums, and data structures from server JAR files.

### Key Features

- **Automated Extraction** — GitHub Actions workflow extracts protocol from any server version
- **Version Tracking** — Each server version gets its own git branch with full source code
- **AI-Enhanced Wiki Documentation** — Human-readable docs with packet IDs, fields, types, and AI-generated descriptions
- **Machine-Readable Output** — JSON summaries for tool integration and analysis
- **Cross-Referenced Types** — Links between packets, enums, and data classes

## Protocol Overview

The documented `com.hypixel.hytale.protocol` package includes:

| Category | Description |
|----------|-------------|
| `packets/auth` | Authentication, authorization, and session management |
| `packets/connection` | Connection lifecycle (connect, disconnect, ping/pong, keepalive) |
| `packets/entities` | Entity spawning, updates, animations, and state sync |
| `packets/interaction` | Player-entity and player-world interactions |
| `packets/inventory` | Inventory slots, items, and container management |
| `packets/player` | Player movement, actions, and state updates |
| `packets/world` | Chunk data, block updates, and world state |
| `packets/worldmap` | Minimap and world map data |
| `packets/camera` | Camera positioning and cinematic controls |
| `packets/interface_` | UI/HUD updates and client interface packets |
| `packets/window` | GUI windows and menu management |
| *...and more* | Additional categories for assets, builder tools, machinima, etc. |

Each packet is documented with:
- **Packet ID** (decimal and hexadecimal)
- **Compression flag** and block sizes
- **Field definitions** with types and constraints
- **Related enums and data structures**

## Quick Start

### Browse Documentation

Visit the **[Wiki](../../wiki)** to browse protocol documentation organized by version and packet category.

### Extract a New Server Version

1. Go to **Actions** → **[Upload Server JAR](../../actions/workflows/upload-jar.yml)**
2. Enter the version number (e.g., `1.0.0`, `beta-1`)
3. Upload your server JAR to the created draft release
4. Go to **Actions** → **[Extract Hytale Packets](../../actions/workflows/extract-packets.yml)**
5. Enter the version and JAR URL

The workflow will automatically:
- Extract and decompile the protocol package
- Generate wiki documentation
- Create a version branch (e.g., `version/1.0.0`)
- Publish to the wiki

### Browse Source Code

Each server version has a dedicated branch with decompiled Java sources:

```
version/1.0.0
version/beta-1
...
```

Browse `protocol/packets/` for network packet definitions and `protocol/*/` for related types.

## Local Development

### Prerequisites

- Java 21+
- PowerShell 7+ (or Windows PowerShell 5.1)
- Python 3.11+ (for wiki generation)

### Running Locally

```powershell
# Extract protocol from a local JAR
./scripts/Extract-Packets.ps1 -JarPath "HytaleServer.jar" -OutputPath "protocol"

# Vineflower will be downloaded automatically

# Generate wiki documentation
python ./scripts/generate_wiki.py --protocol-dir "./protocol" --output-dir "./wiki" --version "1.0.0"
```

### Script Parameters

**Extract-Packets.ps1:**

| Parameter | Required | Default | Description |
|-----------|----------|---------|-------------|
| `-JarPath` | Yes | - | Path to the server JAR |
| `-OutputPath` | No | `protocol` | Output directory for Java files |
| `-VineflowerPath` | No | `vineflower.jar` | Path to Vineflower decompiler |

**generate_wiki.py:**

| Parameter | Required | Default | Description |
|-----------|----------|---------|-------------|
| `--protocol-dir` | No | `./protocol` | Directory containing protocol package |
| `--output-dir` | No | `./wiki` | Output directory for wiki pages |
| `--version` | No | `unknown` | Version string for documentation |
| `--json` | No | - | Also generate JSON summary |

## How It Works

```
┌─────────────────┐     ┌──────────────────┐     ┌─────────────────┐
│  Server JAR     │────▶│  Extract-Packets │────▶│  Decompiled     │
│  (HytaleServer) │     │  (PowerShell)    │     │  Java Sources   │
└─────────────────┘     └──────────────────┘     └────────┬────────┘
                                                          │
                        ┌──────────────────┐              │
                        │  generate_wiki   │◀─────────────┘
                        │  (Python)        │
                        └────────┬─────────┘
                                 │
              ┌──────────────────┼──────────────────┐
              ▼                  ▼                  ▼
        ┌──────────┐      ┌──────────┐       ┌──────────┐
        │  Wiki    │      │  JSON    │       │  Version │
        │  Pages   │      │  Summary │       │  Branch  │
        └──────────┘      └──────────┘       └──────────┘
```

### Technical Stack

| Component | Technology | Purpose |
|-----------|------------|---------|
| Extraction | PowerShell 7+ | Cross-platform JAR extraction and orchestration |
| Decompilation | [Vineflower](https://github.com/Vineflower/vineflower) | Modern Fernflower fork for Java bytecode decompilation |
| Documentation | TypeScript + LLM (OpenRouter) | Parse Java sources and generate AI-enhanced Markdown/JSON |
| Automation | GitHub Actions | CI/CD pipeline for extraction and publishing |
| Runtime | Java 21+ | Required for Vineflower decompiler |

## Use Cases

- **Protocol Analysis** — Understand how Hytale client-server communication works
- **Tool Development** — Build packet sniffers, proxies, or analysis tools
- **Mod Development** — Reference for server-side mod compatibility
- **Research** — Study modern game networking patterns
- **Version Comparison** — Track protocol changes across server updates

## Contributing

Contributions are welcome! Areas where help is appreciated:

- Improving packet documentation accuracy
- Adding protocol analysis insights
- Enhancing the wiki generation scripts
- Supporting additional output formats

## Related Resources

- [Hytale Official](https://hytale.com) — Official game website
- [Hytale Community Hub](https://hytale.com/news) — News and updates
- [Vineflower](https://github.com/Vineflower/vineflower) — Java decompiler used by this project

## Disclaimer

> **AI-Generated Content Notice:** Parts of the wiki documentation, including packets layouts, are generated using AI. While we strive for accuracy, **AI-generated information may contain errors, inaccuracies, or misinterpretations** of the actual protocol behavior. Always verify critical information against the decompiled source code. Contributions to improve accuracy are welcome.

## License

This repository is provided for **educational and documentation purposes only**. The decompiled protocol code remains the intellectual property of Hypixel Studios.

---

<p align="center">
  <sub>Maintained by the Hytale community for research and documentation purposes.</sub>
</p>
