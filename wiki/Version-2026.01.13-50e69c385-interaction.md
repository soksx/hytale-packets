# Interaction Packets

**Version:** 2026.01.13-50e69c385

This category contains 5 packet(s).

## Packet Index

| ID | Name | Compressed | Max Size |
|----|------|------------|----------|
| `0x122` | [SyncInteractionChains](#syncinteractionchains) | No | 1.7 GB |
| `0x123` | [CancelInteractionChain](#cancelinteractionchain) | No | 1.0 KB |
| `0x124` | [PlayInteractionFor](#playinteractionfor) | No | 16.4 MB |
| `0x125` | [MountNPC](#mountnpc) | No | 16 bytes |
| `0x126` | [DismountNPC](#dismountnpc) | No | 0 bytes |

---

## SyncInteractionChains

| Property | Value |
|----------|-------|
| Packet ID | `0x122` (290) |
| Compressed | No |
| Fixed Block Size | 0 bytes |
| Variable Field Count | 1 |
| Max Size | 1.7 GB |

### Fields

| Name | Type | Nullable | Max Length |
|------|------|----------|------------|
| `updates` | [SyncInteractionChain](Version-2026.01.13-50e69c385-Data-Types#syncinteractionchain)[] | No | 4096000 |

---

## CancelInteractionChain

| Property | Value |
|----------|-------|
| Packet ID | `0x123` (291) |
| Compressed | No |
| Fixed Block Size | 5 bytes |
| Variable Field Count | 1 |
| Max Size | 1.0 KB |
| Nullable Bit Field | 1 byte(s) |

### Fields

| Name | Type | Nullable | Max Length |
|------|------|----------|------------|
| `chainId` | `int` | No | - |
| `forkedId` | [ForkedChainId](Version-2026.01.13-50e69c385-Data-Types#forkedchainid) | Yes | - |

---

## PlayInteractionFor

| Property | Value |
|----------|-------|
| Packet ID | `0x124` (292) |
| Compressed | No |
| Fixed Block Size | 19 bytes |
| Variable Field Count | 2 |
| Max Size | 16.4 MB |
| Nullable Bit Field | 1 byte(s) |

### Fields

| Name | Type | Nullable | Max Length |
|------|------|----------|------------|
| `entityId` | `int` | No | - |
| `chainId` | `int` | No | - |
| `forkedId` | [ForkedChainId](Version-2026.01.13-50e69c385-Data-Types#forkedchainid) | Yes | - |
| `operationIndex` | `int` | No | - |
| `interactionId` | `int` | No | - |
| `interactedItemId` | `String` | Yes | 4096000 |
| `interactionType` | [InteractionType](Version-2026.01.13-50e69c385-Enums#interactiontype) | No | - |
| `cancel` | `boolean` | No | - |

**interactionType** enum values:

- `0` = Primary
- `1` = Secondary
- `2` = Ability1
- `3` = Ability2
- `4` = Ability3
- `5` = Use
- `6` = Pick
- `7` = Pickup
- `8` = CollisionEnter
- `9` = CollisionLeave
- `10` = Collision
- `11` = EntityStatEffect
- `12` = SwapTo
- `13` = SwapFrom
- `14` = Death
- `15` = Wielding
- `16` = ProjectileSpawn
- `17` = ProjectileHit
- `18` = ProjectileMiss
- `19` = ProjectileBounce
- `20` = Held
- `21` = HeldOffhand
- `22` = Equipped
- `23` = Dodge
- `24` = GameModeSwap

---

## MountNPC

| Property | Value |
|----------|-------|
| Packet ID | `0x125` (293) |
| Compressed | No |
| Fixed Block Size | 16 bytes |
| Variable Field Count | 0 |
| Max Size | 16 bytes |

### Fields

| Name | Type | Nullable | Max Length |
|------|------|----------|------------|
| `anchorX` | `float` | No | - |
| `anchorY` | `float` | No | - |
| `anchorZ` | `float` | No | - |
| `entityId` | `int` | No | - |

---

## DismountNPC

| Property | Value |
|----------|-------|
| Packet ID | `0x126` (294) |
| Compressed | No |
| Fixed Block Size | 0 bytes |
| Variable Field Count | 0 |
| Max Size | 0 bytes |

---
[Back to Home](Version-2026.01.13-50e69c385-Home)