# Worldmap Packets

**Version:** 2026.01.13-50e69c385

This category contains 6 packet(s).

## Packet Index

| ID | Name | Compressed | Max Size |
|----|------|------------|----------|
| `0xF0` | [UpdateWorldMapSettings](#updateworldmapsettings) | No | 1.7 GB |
| `0xF1` | [UpdateWorldMap](#updateworldmap) | Yes | 1.7 GB |
| `0xF2` | [ClearWorldMap](#clearworldmap) | No | 0 bytes |
| `0xF3` | [UpdateWorldMapVisible](#updateworldmapvisible) | No | 1 bytes |
| `0xF4` | [TeleportToWorldMapMarker](#teleporttoworldmapmarker) | No | 16.4 MB |
| `0xF5` | [TeleportToWorldMapPosition](#teleporttoworldmapposition) | No | 8 bytes |

---

## UpdateWorldMapSettings

| Property | Value |
|----------|-------|
| Packet ID | `0xF0` (240) |
| Compressed | No |
| Fixed Block Size | 16 bytes |
| Variable Field Count | 1 |
| Max Size | 1.7 GB |
| Nullable Bit Field | 1 byte(s) |

### Fields

| Name | Type | Nullable | Max Length |
|------|------|----------|------------|
| `enabled` | `boolean` | No | - |
| `biomeDataMap` | `Map<Short, BiomeData>` | Yes | - |
| `allowTeleportToCoordinates` | `boolean` | No | - |
| `allowTeleportToMarkers` | `boolean` | No | - |
| `defaultScale` | `float` | No | - |
| `minScale` | `float` | No | - |
| `maxScale` | `float` | No | - |

---

## UpdateWorldMap

| Property | Value |
|----------|-------|
| Packet ID | `0xF1` (241) |
| Compressed | Yes |
| Fixed Block Size | 1 bytes |
| Variable Field Count | 3 |
| Max Size | 1.7 GB |
| Nullable Bit Field | 1 byte(s) |

### Fields

| Name | Type | Nullable | Max Length |
|------|------|----------|------------|
| `chunks` | [MapChunk](Version-2026.01.13-50e69c385-Data-Types#mapchunk)[] | Yes | 4096000 |
| `addedMarkers` | [MapMarker](Version-2026.01.13-50e69c385-Data-Types#mapmarker)[] | Yes | 4096000 |
| `removedMarkers` | `String[]` | Yes | 4096000 |

---

## ClearWorldMap

| Property | Value |
|----------|-------|
| Packet ID | `0xF2` (242) |
| Compressed | No |
| Fixed Block Size | 0 bytes |
| Variable Field Count | 0 |
| Max Size | 0 bytes |

---

## UpdateWorldMapVisible

| Property | Value |
|----------|-------|
| Packet ID | `0xF3` (243) |
| Compressed | No |
| Fixed Block Size | 1 bytes |
| Variable Field Count | 0 |
| Max Size | 1 bytes |

### Fields

| Name | Type | Nullable | Max Length |
|------|------|----------|------------|
| `visible` | `boolean` | No | - |

---

## TeleportToWorldMapMarker

| Property | Value |
|----------|-------|
| Packet ID | `0xF4` (244) |
| Compressed | No |
| Fixed Block Size | 1 bytes |
| Variable Field Count | 1 |
| Max Size | 16.4 MB |
| Nullable Bit Field | 1 byte(s) |

### Fields

| Name | Type | Nullable | Max Length |
|------|------|----------|------------|
| `id` | `String` | Yes | 4096000 |

---

## TeleportToWorldMapPosition

| Property | Value |
|----------|-------|
| Packet ID | `0xF5` (245) |
| Compressed | No |
| Fixed Block Size | 8 bytes |
| Variable Field Count | 0 |
| Max Size | 8 bytes |

### Fields

| Name | Type | Nullable | Max Length |
|------|------|----------|------------|
| `x` | `int` | No | - |
| `y` | `int` | No | - |

---
[Back to Home](Version-2026.01.13-50e69c385-Home)