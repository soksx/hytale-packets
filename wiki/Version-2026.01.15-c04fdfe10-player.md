# Player Packets

**Version:** 2026.01.15-c04fdfe10

This category contains 20 packet(s).

## Packet Index

| ID | Name | Compressed | Max Size |
|----|------|------------|----------|
| `0x64` | [SetClientId](#setclientid) | No | 4 bytes |
| `0x65` | [SetGameMode](#setgamemode) | No | 1 bytes |
| `0x66` | [SetMovementStates](#setmovementstates) | No | 2 bytes |
| `0x67` | [SetBlockPlacementOverride](#setblockplacementoverride) | No | 1 bytes |
| `0x68` | [JoinWorld](#joinworld) | No | 18 bytes |
| `0x69` | [ClientReady](#clientready) | No | 2 bytes |
| `0x6A` | [LoadHotbar](#loadhotbar) | No | 1 bytes |
| `0x6B` | [SaveHotbar](#savehotbar) | No | 1 bytes |
| `0x6C` | [ClientMovement](#clientmovement) | No | 153 bytes |
| `0x6D` | [ClientTeleport](#clientteleport) | No | 52 bytes |
| `0x6E` | [UpdateMovementSettings](#updatemovementsettings) | No | 252 bytes |
| `0x6F` | [MouseInteraction](#mouseinteraction) | No | 20.5 MB |
| `0x70` | [DamageInfo](#damageinfo) | No | 32.8 MB |
| `0x71` | [ReticleEvent](#reticleevent) | No | 4 bytes |
| `0x72` | [DisplayDebug](#displaydebug) | No | 32.8 MB |
| `0x73` | [ClearDebugShapes](#cleardebugshapes) | No | 0 bytes |
| `0x74` | [SyncPlayerPreferences](#syncplayerpreferences) | No | 8 bytes |
| `0x75` | [ClientPlaceBlock](#clientplaceblock) | No | 20 bytes |
| `0x76` | [UpdateMemoriesFeatureStatus](#updatememoriesfeaturestatus) | No | 1 bytes |
| `0x77` | [RemoveMapMarker](#removemapmarker) | No | 16.4 MB |

---

## SetClientId

| Property | Value |
|----------|-------|
| Packet ID | `0x64` (100) |
| Compressed | No |
| Fixed Block Size | 4 bytes |
| Variable Field Count | 0 |
| Max Size | 4 bytes |

### Fields

| Name | Type | Nullable | Max Length |
|------|------|----------|------------|
| `clientId` | `int` | No | - |

---

## SetGameMode

| Property | Value |
|----------|-------|
| Packet ID | `0x65` (101) |
| Compressed | No |
| Fixed Block Size | 1 bytes |
| Variable Field Count | 0 |
| Max Size | 1 bytes |

### Fields

| Name | Type | Nullable | Max Length |
|------|------|----------|------------|
| `gameMode` | [GameMode](Version-2026.01.15-c04fdfe10-Enums#gamemode) | No | - |

**gameMode** enum values:

- `0` = Adventure
- `1` = Creative

---

## SetMovementStates

| Property | Value |
|----------|-------|
| Packet ID | `0x66` (102) |
| Compressed | No |
| Fixed Block Size | 2 bytes |
| Variable Field Count | 0 |
| Max Size | 2 bytes |
| Nullable Bit Field | 1 byte(s) |

### Fields

| Name | Type | Nullable | Max Length |
|------|------|----------|------------|
| `movementStates` | [SavedMovementStates](Version-2026.01.15-c04fdfe10-Data-Types#savedmovementstates) | Yes | - |

---

## SetBlockPlacementOverride

| Property | Value |
|----------|-------|
| Packet ID | `0x67` (103) |
| Compressed | No |
| Fixed Block Size | 1 bytes |
| Variable Field Count | 0 |
| Max Size | 1 bytes |

### Fields

| Name | Type | Nullable | Max Length |
|------|------|----------|------------|
| `enabled` | `boolean` | No | - |

---

## JoinWorld

| Property | Value |
|----------|-------|
| Packet ID | `0x68` (104) |
| Compressed | No |
| Fixed Block Size | 18 bytes |
| Variable Field Count | 0 |
| Max Size | 18 bytes |

### Fields

| Name | Type | Nullable | Max Length |
|------|------|----------|------------|
| `clearWorld` | `boolean` | No | - |
| `fadeInOut` | `boolean` | No | - |
| `worldUuid` | `UUID` | No | - |

---

## ClientReady

| Property | Value |
|----------|-------|
| Packet ID | `0x69` (105) |
| Compressed | No |
| Fixed Block Size | 2 bytes |
| Variable Field Count | 0 |
| Max Size | 2 bytes |

### Fields

| Name | Type | Nullable | Max Length |
|------|------|----------|------------|
| `readyForChunks` | `boolean` | No | - |
| `readyForGameplay` | `boolean` | No | - |

---

## LoadHotbar

| Property | Value |
|----------|-------|
| Packet ID | `0x6A` (106) |
| Compressed | No |
| Fixed Block Size | 1 bytes |
| Variable Field Count | 0 |
| Max Size | 1 bytes |

### Fields

| Name | Type | Nullable | Max Length |
|------|------|----------|------------|
| `inventoryRow` | `byte` | No | - |

---

## SaveHotbar

| Property | Value |
|----------|-------|
| Packet ID | `0x6B` (107) |
| Compressed | No |
| Fixed Block Size | 1 bytes |
| Variable Field Count | 0 |
| Max Size | 1 bytes |

### Fields

| Name | Type | Nullable | Max Length |
|------|------|----------|------------|
| `inventoryRow` | `byte` | No | - |

---

## ClientMovement

| Property | Value |
|----------|-------|
| Packet ID | `0x6C` (108) |
| Compressed | No |
| Fixed Block Size | 153 bytes |
| Variable Field Count | 0 |
| Max Size | 153 bytes |
| Nullable Bit Field | 2 byte(s) |

### Fields

| Name | Type | Nullable | Max Length |
|------|------|----------|------------|
| `movementStates` | [MovementStates](Version-2026.01.15-c04fdfe10-Data-Types#movementstates) | Yes | - |
| `relativePosition` | [HalfFloatPosition](Version-2026.01.15-c04fdfe10-Data-Types#halffloatposition) | Yes | - |
| `absolutePosition` | [Position](Version-2026.01.15-c04fdfe10-Data-Types#position) | Yes | - |
| `bodyOrientation` | [Direction](Version-2026.01.15-c04fdfe10-Data-Types#direction) | Yes | - |
| `lookOrientation` | [Direction](Version-2026.01.15-c04fdfe10-Data-Types#direction) | Yes | - |
| `teleportAck` | [TeleportAck](Version-2026.01.15-c04fdfe10-Data-Types#teleportack) | Yes | - |
| `wishMovement` | [Position](Version-2026.01.15-c04fdfe10-Data-Types#position) | Yes | - |
| `velocity` | [Vector3d](Version-2026.01.15-c04fdfe10-Data-Types#vector3d) | Yes | - |
| `mountedTo` | `int` | No | - |
| `riderMovementStates` | [MovementStates](Version-2026.01.15-c04fdfe10-Data-Types#movementstates) | Yes | - |

---

## ClientTeleport

| Property | Value |
|----------|-------|
| Packet ID | `0x6D` (109) |
| Compressed | No |
| Fixed Block Size | 52 bytes |
| Variable Field Count | 0 |
| Max Size | 52 bytes |
| Nullable Bit Field | 1 byte(s) |

### Fields

| Name | Type | Nullable | Max Length |
|------|------|----------|------------|
| `teleportId` | `byte` | No | - |
| `modelTransform` | [ModelTransform](Version-2026.01.15-c04fdfe10-Data-Types#modeltransform) | Yes | - |
| `resetVelocity` | `boolean` | No | - |

---

## UpdateMovementSettings

| Property | Value |
|----------|-------|
| Packet ID | `0x6E` (110) |
| Compressed | No |
| Fixed Block Size | 252 bytes |
| Variable Field Count | 0 |
| Max Size | 252 bytes |
| Nullable Bit Field | 1 byte(s) |

### Fields

| Name | Type | Nullable | Max Length |
|------|------|----------|------------|
| `movementSettings` | [MovementSettings](Version-2026.01.15-c04fdfe10-Data-Types#movementsettings) | Yes | - |

---

## MouseInteraction

| Property | Value |
|----------|-------|
| Packet ID | `0x6F` (111) |
| Compressed | No |
| Fixed Block Size | 44 bytes |
| Variable Field Count | 2 |
| Max Size | 20.5 MB |
| Nullable Bit Field | 1 byte(s) |

### Fields

| Name | Type | Nullable | Max Length |
|------|------|----------|------------|
| `clientTimestamp` | `long` | No | - |
| `activeSlot` | `int` | No | - |
| `itemInHandId` | `String` | Yes | 4096000 |
| `screenPoint` | [Vector2f](Version-2026.01.15-c04fdfe10-Data-Types#vector2f) | Yes | - |
| `mouseButton` | [MouseButtonEvent](Version-2026.01.15-c04fdfe10-Data-Types#mousebuttonevent) | Yes | - |
| `mouseMotion` | [MouseMotionEvent](Version-2026.01.15-c04fdfe10-Data-Types#mousemotionevent) | Yes | - |
| `worldInteraction` | [WorldInteraction](Version-2026.01.15-c04fdfe10-Data-Types#worldinteraction) | Yes | - |

---

## DamageInfo

| Property | Value |
|----------|-------|
| Packet ID | `0x70` (112) |
| Compressed | No |
| Fixed Block Size | 29 bytes |
| Variable Field Count | 1 |
| Max Size | 32.8 MB |
| Nullable Bit Field | 1 byte(s) |

### Fields

| Name | Type | Nullable | Max Length |
|------|------|----------|------------|
| `damageSourcePosition` | [Vector3d](Version-2026.01.15-c04fdfe10-Data-Types#vector3d) | Yes | - |
| `damageAmount` | `float` | No | - |
| `damageCause` | [DamageCause](Version-2026.01.15-c04fdfe10-Data-Types#damagecause) | Yes | - |

---

## ReticleEvent

| Property | Value |
|----------|-------|
| Packet ID | `0x71` (113) |
| Compressed | No |
| Fixed Block Size | 4 bytes |
| Variable Field Count | 0 |
| Max Size | 4 bytes |

### Fields

| Name | Type | Nullable | Max Length |
|------|------|----------|------------|
| `eventIndex` | `int` | No | - |

---

## DisplayDebug

| Property | Value |
|----------|-------|
| Packet ID | `0x72` (114) |
| Compressed | No |
| Fixed Block Size | 19 bytes |
| Variable Field Count | 2 |
| Max Size | 32.8 MB |
| Nullable Bit Field | 1 byte(s) |

### Fields

| Name | Type | Nullable | Max Length |
|------|------|----------|------------|
| `shape` | [DebugShape](Version-2026.01.15-c04fdfe10-Enums#debugshape) | No | - |
| `matrix` | `float[]` | Yes | 4096000 |
| `color` | [Vector3f](Version-2026.01.15-c04fdfe10-Data-Types#vector3f) | Yes | - |
| `time` | `float` | No | - |
| `fade` | `boolean` | No | - |
| `frustumProjection` | `float[]` | Yes | 4096000 |

**shape** enum values:

- `0` = Sphere
- `1` = Cylinder
- `2` = Cone
- `3` = Cube
- `4` = Frustum

---

## ClearDebugShapes

| Property | Value |
|----------|-------|
| Packet ID | `0x73` (115) |
| Compressed | No |
| Fixed Block Size | 0 bytes |
| Variable Field Count | 0 |
| Max Size | 0 bytes |

---

## SyncPlayerPreferences

| Property | Value |
|----------|-------|
| Packet ID | `0x74` (116) |
| Compressed | No |
| Fixed Block Size | 8 bytes |
| Variable Field Count | 0 |
| Max Size | 8 bytes |

### Fields

| Name | Type | Nullable | Max Length |
|------|------|----------|------------|
| `showEntityMarkers` | `boolean` | No | - |
| `armorItemsPreferredPickupLocation` | [PickupLocation](Version-2026.01.15-c04fdfe10-Enums#pickuplocation) | No | - |
| `weaponAndToolItemsPreferredPickupLocation` | [PickupLocation](Version-2026.01.15-c04fdfe10-Enums#pickuplocation) | No | - |
| `usableItemsItemsPreferredPickupLocation` | [PickupLocation](Version-2026.01.15-c04fdfe10-Enums#pickuplocation) | No | - |
| `solidBlockItemsPreferredPickupLocation` | [PickupLocation](Version-2026.01.15-c04fdfe10-Enums#pickuplocation) | No | - |
| `miscItemsPreferredPickupLocation` | [PickupLocation](Version-2026.01.15-c04fdfe10-Enums#pickuplocation) | No | - |
| `allowNPCDetection` | `boolean` | No | - |
| `respondToHit` | `boolean` | No | - |

**armorItemsPreferredPickupLocation** enum values:

- `0` = Hotbar
- `1` = Storage

**weaponAndToolItemsPreferredPickupLocation** enum values:

- `0` = Hotbar
- `1` = Storage

**usableItemsItemsPreferredPickupLocation** enum values:

- `0` = Hotbar
- `1` = Storage

**solidBlockItemsPreferredPickupLocation** enum values:

- `0` = Hotbar
- `1` = Storage

**miscItemsPreferredPickupLocation** enum values:

- `0` = Hotbar
- `1` = Storage

---

## ClientPlaceBlock

| Property | Value |
|----------|-------|
| Packet ID | `0x75` (117) |
| Compressed | No |
| Fixed Block Size | 20 bytes |
| Variable Field Count | 0 |
| Max Size | 20 bytes |
| Nullable Bit Field | 1 byte(s) |

### Fields

| Name | Type | Nullable | Max Length |
|------|------|----------|------------|
| `position` | [BlockPosition](Version-2026.01.15-c04fdfe10-Data-Types#blockposition) | Yes | - |
| `rotation` | [BlockRotation](Version-2026.01.15-c04fdfe10-Data-Types#blockrotation) | Yes | - |
| `placedBlockId` | `int` | No | - |

---

## UpdateMemoriesFeatureStatus

| Property | Value |
|----------|-------|
| Packet ID | `0x76` (118) |
| Compressed | No |
| Fixed Block Size | 1 bytes |
| Variable Field Count | 0 |
| Max Size | 1 bytes |

### Fields

| Name | Type | Nullable | Max Length |
|------|------|----------|------------|
| `isFeatureUnlocked` | `boolean` | No | - |

---

## RemoveMapMarker

| Property | Value |
|----------|-------|
| Packet ID | `0x77` (119) |
| Compressed | No |
| Fixed Block Size | 1 bytes |
| Variable Field Count | 1 |
| Max Size | 16.4 MB |
| Nullable Bit Field | 1 byte(s) |

### Fields

| Name | Type | Nullable | Max Length |
|------|------|----------|------------|
| `markerId` | `String` | Yes | 4096000 |

---
[Back to Home](Version-2026.01.15-c04fdfe10-Home)