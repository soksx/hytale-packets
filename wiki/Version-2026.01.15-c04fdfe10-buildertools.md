# Buildertools Packets

**Version:** 2026.01.15-c04fdfe10

This category contains 24 packet(s).

## Packet Index

| ID | Name | Compressed | Max Size |
|----|------|------------|----------|
| `0x190` | [BuilderToolArgUpdate](#buildertoolargupdate) | No | 32.8 MB |
| `0x191` | [BuilderToolEntityAction](#buildertoolentityaction) | No | 5 bytes |
| `0x192` | [BuilderToolSetEntityTransform](#buildertoolsetentitytransform) | No | 54 bytes |
| `0x193` | [BuilderToolExtrudeAction](#buildertoolextrudeaction) | No | 24 bytes |
| `0x194` | [BuilderToolStackArea](#buildertoolstackarea) | No | 41 bytes |
| `0x195` | [BuilderToolSelectionTransform](#buildertoolselectiontransform) | No | 16.4 MB |
| `0x196` | [BuilderToolRotateClipboard](#buildertoolrotateclipboard) | No | 5 bytes |
| `0x197` | [BuilderToolPasteClipboard](#buildertoolpasteclipboard) | No | 12 bytes |
| `0x198` | [BuilderToolSetTransformationModeState](#buildertoolsettransformationmodestate) | No | 1 bytes |
| `0x199` | [BuilderToolSelectionUpdate](#buildertoolselectionupdate) | No | 24 bytes |
| `0x19A` | [BuilderToolSelectionToolAskForClipboard](#buildertoolselectiontoolaskforclipboard) | No | 0 bytes |
| `0x19B` | [BuilderToolSelectionToolReplyWithClipboard](#buildertoolselectiontoolreplywithclipboard) | Yes | 139.3 MB |
| `0x19C` | [BuilderToolGeneralAction](#buildertoolgeneralaction) | No | 1 bytes |
| `0x19D` | [BuilderToolOnUseInteraction](#buildertoolonuseinteraction) | No | 57 bytes |
| `0x19E` | [BuilderToolLineAction](#buildertoollineaction) | No | 24 bytes |
| `0x19F` | [BuilderToolShowAnchor](#buildertoolshowanchor) | No | 12 bytes |
| `0x1A0` | [BuilderToolHideAnchors](#buildertoolhideanchors) | No | 0 bytes |
| `0x1A1` | [PrefabUnselectPrefab](#prefabunselectprefab) | No | 0 bytes |
| `0x1A2` | [BuilderToolsSetSoundSet](#buildertoolssetsoundset) | No | 4 bytes |
| `0x1A3` | [BuilderToolLaserPointer](#buildertoollaserpointer) | No | 36 bytes |
| `0x1A4` | [BuilderToolSetEntityScale](#buildertoolsetentityscale) | No | 8 bytes |
| `0x1A5` | [BuilderToolSetEntityPickupEnabled](#buildertoolsetentitypickupenabled) | No | 5 bytes |
| `0x1A6` | [BuilderToolSetEntityLight](#buildertoolsetentitylight) | No | 9 bytes |
| `0x1A7` | [BuilderToolSetNPCDebug](#buildertoolsetnpcdebug) | No | 5 bytes |

---

## BuilderToolArgUpdate

| Property | Value |
|----------|-------|
| Packet ID | `0x190` (400) |
| Compressed | No |
| Fixed Block Size | 14 bytes |
| Variable Field Count | 2 |
| Max Size | 32.8 MB |
| Nullable Bit Field | 1 byte(s) |

### Fields

| Name | Type | Nullable | Max Length |
|------|------|----------|------------|
| `token` | `int` | No | - |
| `section` | `int` | No | - |
| `slot` | `int` | No | - |
| `group` | [BuilderToolArgGroup](Version-2026.01.15-c04fdfe10-Enums#buildertoolarggroup) | No | - |
| `id` | `String` | Yes | 4096000 |

**group** enum values:

- `0` = Tool
- `1` = Brush

---

## BuilderToolEntityAction

| Property | Value |
|----------|-------|
| Packet ID | `0x191` (401) |
| Compressed | No |
| Fixed Block Size | 5 bytes |
| Variable Field Count | 0 |
| Max Size | 5 bytes |

### Fields

| Name | Type | Nullable | Max Length |
|------|------|----------|------------|
| `entityId` | `int` | No | - |
| `action` | [EntityToolAction](Version-2026.01.15-c04fdfe10-Enums#entitytoolaction) | No | - |

**action** enum values:

- `0` = Remove
- `1` = Clone
- `2` = Freeze

---

## BuilderToolSetEntityTransform

| Property | Value |
|----------|-------|
| Packet ID | `0x192` (402) |
| Compressed | No |
| Fixed Block Size | 54 bytes |
| Variable Field Count | 0 |
| Max Size | 54 bytes |
| Nullable Bit Field | 1 byte(s) |

### Fields

| Name | Type | Nullable | Max Length |
|------|------|----------|------------|
| `entityId` | `int` | No | - |
| `modelTransform` | [ModelTransform](Version-2026.01.15-c04fdfe10-Data-Types#modeltransform) | Yes | - |

---

## BuilderToolExtrudeAction

| Property | Value |
|----------|-------|
| Packet ID | `0x193` (403) |
| Compressed | No |
| Fixed Block Size | 24 bytes |
| Variable Field Count | 0 |
| Max Size | 24 bytes |

### Fields

| Name | Type | Nullable | Max Length |
|------|------|----------|------------|
| `x` | `int` | No | - |
| `y` | `int` | No | - |
| `z` | `int` | No | - |
| `xNormal` | `int` | No | - |
| `yNormal` | `int` | No | - |
| `zNormal` | `int` | No | - |

---

## BuilderToolStackArea

| Property | Value |
|----------|-------|
| Packet ID | `0x194` (404) |
| Compressed | No |
| Fixed Block Size | 41 bytes |
| Variable Field Count | 0 |
| Max Size | 41 bytes |
| Nullable Bit Field | 1 byte(s) |

### Fields

| Name | Type | Nullable | Max Length |
|------|------|----------|------------|
| `selectionMin` | [BlockPosition](Version-2026.01.15-c04fdfe10-Data-Types#blockposition) | Yes | - |
| `selectionMax` | [BlockPosition](Version-2026.01.15-c04fdfe10-Data-Types#blockposition) | Yes | - |
| `xNormal` | `int` | No | - |
| `yNormal` | `int` | No | - |
| `zNormal` | `int` | No | - |
| `numStacks` | `int` | No | - |

---

## BuilderToolSelectionTransform

| Property | Value |
|----------|-------|
| Packet ID | `0x195` (405) |
| Compressed | No |
| Fixed Block Size | 52 bytes |
| Variable Field Count | 1 |
| Max Size | 16.4 MB |
| Nullable Bit Field | 1 byte(s) |

### Fields

| Name | Type | Nullable | Max Length |
|------|------|----------|------------|
| `transformationMatrix` | `float[]` | Yes | 4096000 |
| `initialSelectionMin` | [BlockPosition](Version-2026.01.15-c04fdfe10-Data-Types#blockposition) | Yes | - |
| `initialSelectionMax` | [BlockPosition](Version-2026.01.15-c04fdfe10-Data-Types#blockposition) | Yes | - |
| `initialRotationOrigin` | [Vector3f](Version-2026.01.15-c04fdfe10-Data-Types#vector3f) | Yes | - |
| `cutOriginal` | `boolean` | No | - |
| `applyTransformationToSelectionMinMax` | `boolean` | No | - |
| `isExitingTransformMode` | `boolean` | No | - |
| `initialPastePointForClipboardPaste` | [BlockPosition](Version-2026.01.15-c04fdfe10-Data-Types#blockposition) | Yes | - |

---

## BuilderToolRotateClipboard

| Property | Value |
|----------|-------|
| Packet ID | `0x196` (406) |
| Compressed | No |
| Fixed Block Size | 5 bytes |
| Variable Field Count | 0 |
| Max Size | 5 bytes |

### Fields

| Name | Type | Nullable | Max Length |
|------|------|----------|------------|
| `angle` | `int` | No | - |
| `axis` | [Axis](Version-2026.01.15-c04fdfe10-Enums#axis) | No | - |

**axis** enum values:

- `0` = X
- `1` = Y
- `2` = Z

---

## BuilderToolPasteClipboard

| Property | Value |
|----------|-------|
| Packet ID | `0x197` (407) |
| Compressed | No |
| Fixed Block Size | 12 bytes |
| Variable Field Count | 0 |
| Max Size | 12 bytes |

### Fields

| Name | Type | Nullable | Max Length |
|------|------|----------|------------|
| `x` | `int` | No | - |
| `y` | `int` | No | - |
| `z` | `int` | No | - |

---

## BuilderToolSetTransformationModeState

| Property | Value |
|----------|-------|
| Packet ID | `0x198` (408) |
| Compressed | No |
| Fixed Block Size | 1 bytes |
| Variable Field Count | 0 |
| Max Size | 1 bytes |

### Fields

| Name | Type | Nullable | Max Length |
|------|------|----------|------------|
| `enabled` | `boolean` | No | - |

---

## BuilderToolSelectionUpdate

| Property | Value |
|----------|-------|
| Packet ID | `0x199` (409) |
| Compressed | No |
| Fixed Block Size | 24 bytes |
| Variable Field Count | 0 |
| Max Size | 24 bytes |

### Fields

| Name | Type | Nullable | Max Length |
|------|------|----------|------------|
| `xMin` | `int` | No | - |
| `yMin` | `int` | No | - |
| `zMin` | `int` | No | - |
| `xMax` | `int` | No | - |
| `yMax` | `int` | No | - |
| `zMax` | `int` | No | - |

---

## BuilderToolSelectionToolAskForClipboard

| Property | Value |
|----------|-------|
| Packet ID | `0x19A` (410) |
| Compressed | No |
| Fixed Block Size | 0 bytes |
| Variable Field Count | 0 |
| Max Size | 0 bytes |

---

## BuilderToolSelectionToolReplyWithClipboard

| Property | Value |
|----------|-------|
| Packet ID | `0x19B` (411) |
| Compressed | Yes |
| Fixed Block Size | 1 bytes |
| Variable Field Count | 2 |
| Max Size | 139.3 MB |
| Nullable Bit Field | 1 byte(s) |

### Fields

| Name | Type | Nullable | Max Length |
|------|------|----------|------------|
| `blocksChange` | [BlockChange](Version-2026.01.15-c04fdfe10-Data-Types#blockchange)[] | Yes | 4096000 |
| `fluidsChange` | [FluidChange](Version-2026.01.15-c04fdfe10-Data-Types#fluidchange)[] | Yes | 4096000 |

---

## BuilderToolGeneralAction

| Property | Value |
|----------|-------|
| Packet ID | `0x19C` (412) |
| Compressed | No |
| Fixed Block Size | 1 bytes |
| Variable Field Count | 0 |
| Max Size | 1 bytes |

### Fields

| Name | Type | Nullable | Max Length |
|------|------|----------|------------|
| `action` | [BuilderToolAction](Version-2026.01.15-c04fdfe10-Enums#buildertoolaction) | No | - |

**action** enum values:

- `0` = SelectionPosition1
- `1` = SelectionPosition2
- `2` = SelectionCopy
- `3` = HistoryUndo
- `4` = HistoryRedo
- `5` = ActivateToolMode
- `6` = DeactivateToolMode

---

## BuilderToolOnUseInteraction

| Property | Value |
|----------|-------|
| Packet ID | `0x19D` (413) |
| Compressed | No |
| Fixed Block Size | 57 bytes |
| Variable Field Count | 0 |
| Max Size | 57 bytes |

### Fields

| Name | Type | Nullable | Max Length |
|------|------|----------|------------|
| `type` | [InteractionType](Version-2026.01.15-c04fdfe10-Enums#interactiontype) | No | - |
| `x` | `int` | No | - |
| `y` | `int` | No | - |
| `z` | `int` | No | - |
| `offsetForPaintModeX` | `int` | No | - |
| `offsetForPaintModeY` | `int` | No | - |
| `offsetForPaintModeZ` | `int` | No | - |
| `isAltPlaySculptBrushModDown` | `boolean` | No | - |
| `isHoldDownInteraction` | `boolean` | No | - |
| `isDoServerRaytraceForPosition` | `boolean` | No | - |
| `isShowEditNotifications` | `boolean` | No | - |
| `maxLengthToolIgnoreHistory` | `int` | No | - |
| `raycastOriginX` | `float` | No | - |
| `raycastOriginY` | `float` | No | - |
| `raycastOriginZ` | `float` | No | - |
| `raycastDirectionX` | `float` | No | - |
| `raycastDirectionY` | `float` | No | - |
| `raycastDirectionZ` | `float` | No | - |

**type** enum values:

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

## BuilderToolLineAction

| Property | Value |
|----------|-------|
| Packet ID | `0x19E` (414) |
| Compressed | No |
| Fixed Block Size | 24 bytes |
| Variable Field Count | 0 |
| Max Size | 24 bytes |

### Fields

| Name | Type | Nullable | Max Length |
|------|------|----------|------------|
| `xStart` | `int` | No | - |
| `yStart` | `int` | No | - |
| `zStart` | `int` | No | - |
| `xEnd` | `int` | No | - |
| `yEnd` | `int` | No | - |
| `zEnd` | `int` | No | - |

---

## BuilderToolShowAnchor

| Property | Value |
|----------|-------|
| Packet ID | `0x19F` (415) |
| Compressed | No |
| Fixed Block Size | 12 bytes |
| Variable Field Count | 0 |
| Max Size | 12 bytes |

### Fields

| Name | Type | Nullable | Max Length |
|------|------|----------|------------|
| `x` | `int` | No | - |
| `y` | `int` | No | - |
| `z` | `int` | No | - |

---

## BuilderToolHideAnchors

| Property | Value |
|----------|-------|
| Packet ID | `0x1A0` (416) |
| Compressed | No |
| Fixed Block Size | 0 bytes |
| Variable Field Count | 0 |
| Max Size | 0 bytes |

---

## PrefabUnselectPrefab

| Property | Value |
|----------|-------|
| Packet ID | `0x1A1` (417) |
| Compressed | No |
| Fixed Block Size | 0 bytes |
| Variable Field Count | 0 |
| Max Size | 0 bytes |

---

## BuilderToolsSetSoundSet

| Property | Value |
|----------|-------|
| Packet ID | `0x1A2` (418) |
| Compressed | No |
| Fixed Block Size | 4 bytes |
| Variable Field Count | 0 |
| Max Size | 4 bytes |

### Fields

| Name | Type | Nullable | Max Length |
|------|------|----------|------------|
| `soundSetIndex` | `int` | No | - |

---

## BuilderToolLaserPointer

| Property | Value |
|----------|-------|
| Packet ID | `0x1A3` (419) |
| Compressed | No |
| Fixed Block Size | 36 bytes |
| Variable Field Count | 0 |
| Max Size | 36 bytes |

### Fields

| Name | Type | Nullable | Max Length |
|------|------|----------|------------|
| `playerNetworkId` | `int` | No | - |
| `startX` | `float` | No | - |
| `startY` | `float` | No | - |
| `startZ` | `float` | No | - |
| `endX` | `float` | No | - |
| `endY` | `float` | No | - |
| `endZ` | `float` | No | - |
| `color` | `int` | No | - |
| `durationMs` | `int` | No | - |

---

## BuilderToolSetEntityScale

| Property | Value |
|----------|-------|
| Packet ID | `0x1A4` (420) |
| Compressed | No |
| Fixed Block Size | 8 bytes |
| Variable Field Count | 0 |
| Max Size | 8 bytes |

### Fields

| Name | Type | Nullable | Max Length |
|------|------|----------|------------|
| `entityId` | `int` | No | - |
| `scale` | `float` | No | - |

---

## BuilderToolSetEntityPickupEnabled

| Property | Value |
|----------|-------|
| Packet ID | `0x1A5` (421) |
| Compressed | No |
| Fixed Block Size | 5 bytes |
| Variable Field Count | 0 |
| Max Size | 5 bytes |

### Fields

| Name | Type | Nullable | Max Length |
|------|------|----------|------------|
| `entityId` | `int` | No | - |
| `enabled` | `boolean` | No | - |

---

## BuilderToolSetEntityLight

| Property | Value |
|----------|-------|
| Packet ID | `0x1A6` (422) |
| Compressed | No |
| Fixed Block Size | 9 bytes |
| Variable Field Count | 0 |
| Max Size | 9 bytes |
| Nullable Bit Field | 1 byte(s) |

### Fields

| Name | Type | Nullable | Max Length |
|------|------|----------|------------|
| `entityId` | `int` | No | - |
| `light` | [ColorLight](Version-2026.01.15-c04fdfe10-Data-Types#colorlight) | Yes | - |

---

## BuilderToolSetNPCDebug

| Property | Value |
|----------|-------|
| Packet ID | `0x1A7` (423) |
| Compressed | No |
| Fixed Block Size | 5 bytes |
| Variable Field Count | 0 |
| Max Size | 5 bytes |

### Fields

| Name | Type | Nullable | Max Length |
|------|------|----------|------------|
| `entityId` | `int` | No | - |
| `enabled` | `boolean` | No | - |

---
[Back to Home](Version-2026.01.15-c04fdfe10-Home)