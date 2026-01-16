# Setup Packets

**Version:** 2026.01.13-50e69c385

This category contains 15 packet(s).

## Packet Index

| ID | Name | Compressed | Max Size |
|----|------|------------|----------|
| `0x14` | [WorldSettings](#worldsettings) | Yes | 1.7 GB |
| `0x15` | [WorldLoadProgress](#worldloadprogress) | No | 16.4 MB |
| `0x16` | [WorldLoadFinished](#worldloadfinished) | No | 0 bytes |
| `0x17` | [RequestAssets](#requestassets) | Yes | 1.7 GB |
| `0x18` | [AssetInitialize](#assetinitialize) | No | 2.1 KB |
| `0x19` | [AssetPart](#assetpart) | Yes | 4.1 MB |
| `0x1A` | [AssetFinalize](#assetfinalize) | No | 0 bytes |
| `0x1B` | [RemoveAssets](#removeassets) | No | 1.7 GB |
| `0x1C` | [RequestCommonAssetsRebuild](#requestcommonassetsrebuild) | No | 0 bytes |
| `0x1D` | [SetUpdateRate](#setupdaterate) | No | 4 bytes |
| `0x1E` | [SetTimeDilation](#settimedilation) | No | 4 bytes |
| `0x1F` | [UpdateFeatures](#updatefeatures) | No | 8.2 MB |
| `0x20` | [ViewRadius](#viewradius) | No | 4 bytes |
| `0x21` | [PlayerOptions](#playeroptions) | No | 327.7 MB |
| `0x22` | [ServerTags](#servertags) | No | 1.7 GB |

---

## WorldSettings

| Property | Value |
|----------|-------|
| Packet ID | `0x14` (20) |
| Compressed | Yes |
| Fixed Block Size | 5 bytes |
| Variable Field Count | 1 |
| Max Size | 1.7 GB |
| Nullable Bit Field | 1 byte(s) |

### Fields

| Name | Type | Nullable | Max Length |
|------|------|----------|------------|
| `worldHeight` | `int` | No | - |
| `requiredAssets` | [Asset](Version-2026.01.13-50e69c385-Data-Types#asset)[] | Yes | 4096000 |

---

## WorldLoadProgress

| Property | Value |
|----------|-------|
| Packet ID | `0x15` (21) |
| Compressed | No |
| Fixed Block Size | 9 bytes |
| Variable Field Count | 1 |
| Max Size | 16.4 MB |
| Nullable Bit Field | 1 byte(s) |

### Fields

| Name | Type | Nullable | Max Length |
|------|------|----------|------------|
| `status` | `String` | Yes | 4096000 |
| `percentComplete` | `int` | No | - |
| `percentCompleteSubitem` | `int` | No | - |

---

## WorldLoadFinished

| Property | Value |
|----------|-------|
| Packet ID | `0x16` (22) |
| Compressed | No |
| Fixed Block Size | 0 bytes |
| Variable Field Count | 0 |
| Max Size | 0 bytes |

---

## RequestAssets

| Property | Value |
|----------|-------|
| Packet ID | `0x17` (23) |
| Compressed | Yes |
| Fixed Block Size | 1 bytes |
| Variable Field Count | 1 |
| Max Size | 1.7 GB |
| Nullable Bit Field | 1 byte(s) |

### Fields

| Name | Type | Nullable | Max Length |
|------|------|----------|------------|
| `assets` | [Asset](Version-2026.01.13-50e69c385-Data-Types#asset)[] | Yes | 4096000 |

---

## AssetInitialize

| Property | Value |
|----------|-------|
| Packet ID | `0x18` (24) |
| Compressed | No |
| Fixed Block Size | 4 bytes |
| Variable Field Count | 1 |
| Max Size | 2.1 KB |

### Fields

| Name | Type | Nullable | Max Length |
|------|------|----------|------------|
| `asset` | [Asset](Version-2026.01.13-50e69c385-Data-Types#asset) | No | - |
| `size` | `int` | No | - |

---

## AssetPart

| Property | Value |
|----------|-------|
| Packet ID | `0x19` (25) |
| Compressed | Yes |
| Fixed Block Size | 1 bytes |
| Variable Field Count | 1 |
| Max Size | 4.1 MB |
| Nullable Bit Field | 1 byte(s) |

### Fields

| Name | Type | Nullable | Max Length |
|------|------|----------|------------|
| `part` | `byte[]` | Yes | 4096000 |

---

## AssetFinalize

| Property | Value |
|----------|-------|
| Packet ID | `0x1A` (26) |
| Compressed | No |
| Fixed Block Size | 0 bytes |
| Variable Field Count | 0 |
| Max Size | 0 bytes |

---

## RemoveAssets

| Property | Value |
|----------|-------|
| Packet ID | `0x1B` (27) |
| Compressed | No |
| Fixed Block Size | 1 bytes |
| Variable Field Count | 1 |
| Max Size | 1.7 GB |
| Nullable Bit Field | 1 byte(s) |

### Fields

| Name | Type | Nullable | Max Length |
|------|------|----------|------------|
| `asset` | [Asset](Version-2026.01.13-50e69c385-Data-Types#asset)[] | Yes | 4096000 |

---

## RequestCommonAssetsRebuild

| Property | Value |
|----------|-------|
| Packet ID | `0x1C` (28) |
| Compressed | No |
| Fixed Block Size | 0 bytes |
| Variable Field Count | 0 |
| Max Size | 0 bytes |

---

## SetUpdateRate

| Property | Value |
|----------|-------|
| Packet ID | `0x1D` (29) |
| Compressed | No |
| Fixed Block Size | 4 bytes |
| Variable Field Count | 0 |
| Max Size | 4 bytes |

### Fields

| Name | Type | Nullable | Max Length |
|------|------|----------|------------|
| `updatesPerSecond` | `int` | No | - |

---

## SetTimeDilation

| Property | Value |
|----------|-------|
| Packet ID | `0x1E` (30) |
| Compressed | No |
| Fixed Block Size | 4 bytes |
| Variable Field Count | 0 |
| Max Size | 4 bytes |

### Fields

| Name | Type | Nullable | Max Length |
|------|------|----------|------------|
| `timeDilation` | `float` | No | - |

---

## UpdateFeatures

| Property | Value |
|----------|-------|
| Packet ID | `0x1F` (31) |
| Compressed | No |
| Fixed Block Size | 1 bytes |
| Variable Field Count | 1 |
| Max Size | 8.2 MB |
| Nullable Bit Field | 1 byte(s) |

### Fields

| Name | Type | Nullable | Max Length |
|------|------|----------|------------|
| `features` | `Map<ClientFeature, Boolean>` | Yes | - |

---

## ViewRadius

| Property | Value |
|----------|-------|
| Packet ID | `0x20` (32) |
| Compressed | No |
| Fixed Block Size | 4 bytes |
| Variable Field Count | 0 |
| Max Size | 4 bytes |

---

## PlayerOptions

| Property | Value |
|----------|-------|
| Packet ID | `0x21` (33) |
| Compressed | No |
| Fixed Block Size | 1 bytes |
| Variable Field Count | 1 |
| Max Size | 327.7 MB |
| Nullable Bit Field | 1 byte(s) |

### Fields

| Name | Type | Nullable | Max Length |
|------|------|----------|------------|
| `skin` | [PlayerSkin](Version-2026.01.13-50e69c385-Data-Types#playerskin) | Yes | - |

---

## ServerTags

| Property | Value |
|----------|-------|
| Packet ID | `0x22` (34) |
| Compressed | No |
| Fixed Block Size | 1 bytes |
| Variable Field Count | 1 |
| Max Size | 1.7 GB |
| Nullable Bit Field | 1 byte(s) |

### Fields

| Name | Type | Nullable | Max Length |
|------|------|----------|------------|
| `tags` | `Map<String, Integer>` | Yes | - |

---
[Back to Home](Version-2026.01.13-50e69c385-Home)