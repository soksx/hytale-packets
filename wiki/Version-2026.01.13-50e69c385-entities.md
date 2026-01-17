# Entities Packets

**Version:** 2026.01.13-50e69c385

This category contains 7 packet(s).

## Packet Index

| ID | Name | Compressed | Max Size |
|----|------|------------|----------|
| `0xA0` | [SetEntitySeed](#setentityseed) | No | 4 bytes |
| `0xA1` | [EntityUpdates](#entityupdates) | Yes | 1.7 GB |
| `0xA2` | [PlayAnimation](#playanimation) | No | 32.8 MB |
| `0xA3` | [ChangeVelocity](#changevelocity) | No | 35 bytes |
| `0xA4` | [ApplyKnockback](#applyknockback) | No | 38 bytes |
| `0xA5` | [SpawnModelParticles](#spawnmodelparticles) | No | 1.7 GB |
| `0xA6` | [MountMovement](#mountmovement) | No | 59 bytes |

---

## SetEntitySeed

| Property | Value |
|----------|-------|
| Packet ID | `0xA0` (160) |
| Compressed | No |
| Fixed Block Size | 4 bytes |
| Variable Field Count | 0 |
| Max Size | 4 bytes |

### Fields

| Name | Type | Nullable | Max Length |
|------|------|----------|------------|
| `entitySeed` | `int` | No | - |

---

## EntityUpdates

| Property | Value |
|----------|-------|
| Packet ID | `0xA1` (161) |
| Compressed | Yes |
| Fixed Block Size | 1 bytes |
| Variable Field Count | 2 |
| Max Size | 1.7 GB |
| Nullable Bit Field | 1 byte(s) |

### Fields

| Name | Type | Nullable | Max Length |
|------|------|----------|------------|
| `removed` | `int[]` | Yes | 4096000 |
| `updates` | [EntityUpdate](Version-2026.01.13-50e69c385-Data-Types#entityupdate)[] | Yes | 4096000 |

---

## PlayAnimation

| Property | Value |
|----------|-------|
| Packet ID | `0xA2` (162) |
| Compressed | No |
| Fixed Block Size | 6 bytes |
| Variable Field Count | 2 |
| Max Size | 32.8 MB |
| Nullable Bit Field | 1 byte(s) |

### Fields

| Name | Type | Nullable | Max Length |
|------|------|----------|------------|
| `entityId` | `int` | No | - |
| `itemAnimationsId` | `String` | Yes | 4096000 |
| `animationId` | `String` | Yes | 4096000 |
| `slot` | [AnimationSlot](Version-2026.01.13-50e69c385-Enums#animationslot) | No | - |

**slot** enum values:

- `0` = Movement
- `1` = Status
- `2` = Action
- `3` = Face
- `4` = Emote

---

## ChangeVelocity

| Property | Value |
|----------|-------|
| Packet ID | `0xA3` (163) |
| Compressed | No |
| Fixed Block Size | 35 bytes |
| Variable Field Count | 0 |
| Max Size | 35 bytes |
| Nullable Bit Field | 1 byte(s) |

### Fields

| Name | Type | Nullable | Max Length |
|------|------|----------|------------|
| `x` | `float` | No | - |
| `y` | `float` | No | - |
| `z` | `float` | No | - |
| `changeType` | [ChangeVelocityType](Version-2026.01.13-50e69c385-Enums#changevelocitytype) | No | - |
| `config` | [VelocityConfig](Version-2026.01.13-50e69c385-Data-Types#velocityconfig) | Yes | - |

**changeType** enum values:

- `0` = Add
- `1` = Set

---

## ApplyKnockback

| Property | Value |
|----------|-------|
| Packet ID | `0xA4` (164) |
| Compressed | No |
| Fixed Block Size | 38 bytes |
| Variable Field Count | 0 |
| Max Size | 38 bytes |
| Nullable Bit Field | 1 byte(s) |

### Fields

| Name | Type | Nullable | Max Length |
|------|------|----------|------------|
| `hitPosition` | [Position](Version-2026.01.13-50e69c385-Data-Types#position) | Yes | - |
| `x` | `float` | No | - |
| `y` | `float` | No | - |
| `z` | `float` | No | - |
| `changeType` | [ChangeVelocityType](Version-2026.01.13-50e69c385-Enums#changevelocitytype) | No | - |

**changeType** enum values:

- `0` = Add
- `1` = Set

---

## SpawnModelParticles

| Property | Value |
|----------|-------|
| Packet ID | `0xA5` (165) |
| Compressed | No |
| Fixed Block Size | 5 bytes |
| Variable Field Count | 1 |
| Max Size | 1.7 GB |
| Nullable Bit Field | 1 byte(s) |

### Fields

| Name | Type | Nullable | Max Length |
|------|------|----------|------------|
| `entityId` | `int` | No | - |
| `modelParticles` | [ModelParticle](Version-2026.01.13-50e69c385-Data-Types#modelparticle)[] | Yes | 4096000 |

---

## MountMovement

| Property | Value |
|----------|-------|
| Packet ID | `0xA6` (166) |
| Compressed | No |
| Fixed Block Size | 59 bytes |
| Variable Field Count | 0 |
| Max Size | 59 bytes |
| Nullable Bit Field | 1 byte(s) |

### Fields

| Name | Type | Nullable | Max Length |
|------|------|----------|------------|
| `absolutePosition` | [Position](Version-2026.01.13-50e69c385-Data-Types#position) | Yes | - |
| `bodyOrientation` | [Direction](Version-2026.01.13-50e69c385-Data-Types#direction) | Yes | - |
| `movementStates` | [MovementStates](Version-2026.01.13-50e69c385-Data-Types#movementstates) | Yes | - |

---
[Back to Home](Version-2026.01.13-50e69c385-Home)