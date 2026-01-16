# Window Packets

**Version:** 2026.01.13-50e69c385

This category contains 5 packet(s).

## Packet Index

| ID | Name | Compressed | Max Size |
|----|------|------------|----------|
| `0xC8` | [OpenWindow](#openwindow) | Yes | 1.7 GB |
| `0xC9` | [UpdateWindow](#updatewindow) | Yes | 1.7 GB |
| `0xCA` | [CloseWindow](#closewindow) | No | 4 bytes |
| `0xCB` | [SendWindowAction](#sendwindowaction) | No | 32.8 MB |
| `0xCC` | [ClientOpenWindow](#clientopenwindow) | No | 1 bytes |

---

## OpenWindow

| Property | Value |
|----------|-------|
| Packet ID | `0xC8` (200) |
| Compressed | Yes |
| Fixed Block Size | 6 bytes |
| Variable Field Count | 3 |
| Max Size | 1.7 GB |
| Nullable Bit Field | 1 byte(s) |

### Fields

| Name | Type | Nullable | Max Length |
|------|------|----------|------------|
| `id` | `int` | No | - |
| `windowType` | [WindowType](Version-2026.01.13-50e69c385-Enums#windowtype) | No | - |
| `windowData` | `String` | Yes | 4096000 |
| `inventory` | [InventorySection](Version-2026.01.13-50e69c385-Data-Types#inventorysection) | Yes | - |
| `extraResources` | [ExtraResources](Version-2026.01.13-50e69c385-Data-Types#extraresources) | Yes | - |

**windowType** enum values:

- `0` = Container
- `1` = PocketCrafting
- `2` = BasicCrafting
- `3` = DiagramCrafting
- `4` = StructuralCrafting
- `5` = Processing
- `6` = Memories

---

## UpdateWindow

| Property | Value |
|----------|-------|
| Packet ID | `0xC9` (201) |
| Compressed | Yes |
| Fixed Block Size | 5 bytes |
| Variable Field Count | 3 |
| Max Size | 1.7 GB |
| Nullable Bit Field | 1 byte(s) |

### Fields

| Name | Type | Nullable | Max Length |
|------|------|----------|------------|
| `id` | `int` | No | - |
| `windowData` | `String` | Yes | 4096000 |
| `inventory` | [InventorySection](Version-2026.01.13-50e69c385-Data-Types#inventorysection) | Yes | - |
| `extraResources` | [ExtraResources](Version-2026.01.13-50e69c385-Data-Types#extraresources) | Yes | - |

---

## CloseWindow

| Property | Value |
|----------|-------|
| Packet ID | `0xCA` (202) |
| Compressed | No |
| Fixed Block Size | 4 bytes |
| Variable Field Count | 0 |
| Max Size | 4 bytes |

### Fields

| Name | Type | Nullable | Max Length |
|------|------|----------|------------|
| `id` | `int` | No | - |

---

## SendWindowAction

| Property | Value |
|----------|-------|
| Packet ID | `0xCB` (203) |
| Compressed | No |
| Fixed Block Size | 4 bytes |
| Variable Field Count | 1 |
| Max Size | 32.8 MB |

### Fields

| Name | Type | Nullable | Max Length |
|------|------|----------|------------|
| `id` | `int` | No | - |
| `action` | `WindowAction` | No | - |

---

## ClientOpenWindow

| Property | Value |
|----------|-------|
| Packet ID | `0xCC` (204) |
| Compressed | No |
| Fixed Block Size | 1 bytes |
| Variable Field Count | 0 |
| Max Size | 1 bytes |

### Fields

| Name | Type | Nullable | Max Length |
|------|------|----------|------------|
| `type` | [WindowType](Version-2026.01.13-50e69c385-Enums#windowtype) | No | - |

**type** enum values:

- `0` = Container
- `1` = PocketCrafting
- `2` = BasicCrafting
- `3` = DiagramCrafting
- `4` = StructuralCrafting
- `5` = Processing
- `6` = Memories

---
[Back to Home](Version-2026.01.13-50e69c385-Home)