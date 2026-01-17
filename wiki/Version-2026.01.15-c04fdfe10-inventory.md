# Inventory Packets

**Version:** 2026.01.15-c04fdfe10

This category contains 10 packet(s).

## Packet Index

| ID | Name | Compressed | Max Size |
|----|------|------------|----------|
| `0xAA` | [UpdatePlayerInventory](#updateplayerinventory) | Yes | 1.7 GB |
| `0xAB` | [SetCreativeItem](#setcreativeitem) | No | 16.4 MB |
| `0xAC` | [DropCreativeItem](#dropcreativeitem) | No | 16.4 MB |
| `0xAD` | [SmartGiveCreativeItem](#smartgivecreativeitem) | No | 16.4 MB |
| `0xAE` | [DropItemStack](#dropitemstack) | No | 12 bytes |
| `0xAF` | [MoveItemStack](#moveitemstack) | No | 20 bytes |
| `0xB0` | [SmartMoveItemStack](#smartmoveitemstack) | No | 13 bytes |
| `0xB1` | [SetActiveSlot](#setactiveslot) | No | 8 bytes |
| `0xB2` | [SwitchHotbarBlockSet](#switchhotbarblockset) | No | 16.4 MB |
| `0xB3` | [InventoryAction](#inventoryaction) | No | 6 bytes |

---

## UpdatePlayerInventory

| Property | Value |
|----------|-------|
| Packet ID | `0xAA` (170) |
| Compressed | Yes |
| Fixed Block Size | 2 bytes |
| Variable Field Count | 7 |
| Max Size | 1.7 GB |
| Nullable Bit Field | 1 byte(s) |

### Fields

| Name | Type | Nullable | Max Length |
|------|------|----------|------------|
| `storage` | [InventorySection](Version-2026.01.15-c04fdfe10-Data-Types#inventorysection) | Yes | - |
| `armor` | [InventorySection](Version-2026.01.15-c04fdfe10-Data-Types#inventorysection) | Yes | - |
| `hotbar` | [InventorySection](Version-2026.01.15-c04fdfe10-Data-Types#inventorysection) | Yes | - |
| `utility` | [InventorySection](Version-2026.01.15-c04fdfe10-Data-Types#inventorysection) | Yes | - |
| `builderMaterial` | [InventorySection](Version-2026.01.15-c04fdfe10-Data-Types#inventorysection) | Yes | - |
| `tools` | [InventorySection](Version-2026.01.15-c04fdfe10-Data-Types#inventorysection) | Yes | - |
| `backpack` | [InventorySection](Version-2026.01.15-c04fdfe10-Data-Types#inventorysection) | Yes | - |
| `sortType` | [SortType](Version-2026.01.15-c04fdfe10-Enums#sorttype) | No | - |

**sortType** enum values:

- `0` = Name
- `1` = Type
- `2` = Rarity

---

## SetCreativeItem

| Property | Value |
|----------|-------|
| Packet ID | `0xAB` (171) |
| Compressed | No |
| Fixed Block Size | 9 bytes |
| Variable Field Count | 1 |
| Max Size | 16.4 MB |

### Fields

| Name | Type | Nullable | Max Length |
|------|------|----------|------------|
| `inventorySectionId` | `int` | No | - |
| `slotId` | `int` | No | - |
| `item` | [ItemQuantity](Version-2026.01.15-c04fdfe10-Data-Types#itemquantity) | No | - |
| `override` | `boolean` | No | - |

---

## DropCreativeItem

| Property | Value |
|----------|-------|
| Packet ID | `0xAC` (172) |
| Compressed | No |
| Fixed Block Size | 0 bytes |
| Variable Field Count | 1 |
| Max Size | 16.4 MB |

### Fields

| Name | Type | Nullable | Max Length |
|------|------|----------|------------|
| `item` | [ItemQuantity](Version-2026.01.15-c04fdfe10-Data-Types#itemquantity) | No | - |

---

## SmartGiveCreativeItem

| Property | Value |
|----------|-------|
| Packet ID | `0xAD` (173) |
| Compressed | No |
| Fixed Block Size | 1 bytes |
| Variable Field Count | 1 |
| Max Size | 16.4 MB |

### Fields

| Name | Type | Nullable | Max Length |
|------|------|----------|------------|
| `item` | [ItemQuantity](Version-2026.01.15-c04fdfe10-Data-Types#itemquantity) | No | - |
| `moveType` | [SmartMoveType](Version-2026.01.15-c04fdfe10-Enums#smartmovetype) | No | - |

**moveType** enum values:

- `0` = EquipOrMergeStack
- `1` = PutInHotbarOrWindow
- `2` = PutInHotbarOrBackpack

---

## DropItemStack

| Property | Value |
|----------|-------|
| Packet ID | `0xAE` (174) |
| Compressed | No |
| Fixed Block Size | 12 bytes |
| Variable Field Count | 0 |
| Max Size | 12 bytes |

### Fields

| Name | Type | Nullable | Max Length |
|------|------|----------|------------|
| `inventorySectionId` | `int` | No | - |
| `slotId` | `int` | No | - |
| `quantity` | `int` | No | - |

---

## MoveItemStack

| Property | Value |
|----------|-------|
| Packet ID | `0xAF` (175) |
| Compressed | No |
| Fixed Block Size | 20 bytes |
| Variable Field Count | 0 |
| Max Size | 20 bytes |

### Fields

| Name | Type | Nullable | Max Length |
|------|------|----------|------------|
| `fromSectionId` | `int` | No | - |
| `fromSlotId` | `int` | No | - |
| `quantity` | `int` | No | - |
| `toSectionId` | `int` | No | - |
| `toSlotId` | `int` | No | - |

---

## SmartMoveItemStack

| Property | Value |
|----------|-------|
| Packet ID | `0xB0` (176) |
| Compressed | No |
| Fixed Block Size | 13 bytes |
| Variable Field Count | 0 |
| Max Size | 13 bytes |

### Fields

| Name | Type | Nullable | Max Length |
|------|------|----------|------------|
| `fromSectionId` | `int` | No | - |
| `fromSlotId` | `int` | No | - |
| `quantity` | `int` | No | - |
| `moveType` | [SmartMoveType](Version-2026.01.15-c04fdfe10-Enums#smartmovetype) | No | - |

**moveType** enum values:

- `0` = EquipOrMergeStack
- `1` = PutInHotbarOrWindow
- `2` = PutInHotbarOrBackpack

---

## SetActiveSlot

| Property | Value |
|----------|-------|
| Packet ID | `0xB1` (177) |
| Compressed | No |
| Fixed Block Size | 8 bytes |
| Variable Field Count | 0 |
| Max Size | 8 bytes |

### Fields

| Name | Type | Nullable | Max Length |
|------|------|----------|------------|
| `inventorySectionId` | `int` | No | - |
| `activeSlot` | `int` | No | - |

---

## SwitchHotbarBlockSet

| Property | Value |
|----------|-------|
| Packet ID | `0xB2` (178) |
| Compressed | No |
| Fixed Block Size | 1 bytes |
| Variable Field Count | 1 |
| Max Size | 16.4 MB |
| Nullable Bit Field | 1 byte(s) |

### Fields

| Name | Type | Nullable | Max Length |
|------|------|----------|------------|
| `itemId` | `String` | Yes | 4096000 |

---

## InventoryAction

| Property | Value |
|----------|-------|
| Packet ID | `0xB3` (179) |
| Compressed | No |
| Fixed Block Size | 6 bytes |
| Variable Field Count | 0 |
| Max Size | 6 bytes |

### Fields

| Name | Type | Nullable | Max Length |
|------|------|----------|------------|
| `inventorySectionId` | `int` | No | - |
| `inventoryActionType` | [InventoryActionType](Version-2026.01.15-c04fdfe10-Enums#inventoryactiontype) | No | - |
| `actionData` | `byte` | No | - |

**inventoryActionType** enum values:

- `0` = TakeAll
- `1` = PutAll
- `2` = QuickStack
- `3` = Sort

---
[Back to Home](Version-2026.01.15-c04fdfe10-Home)