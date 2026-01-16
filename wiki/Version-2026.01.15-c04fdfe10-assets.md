# Assets Packets

**Version:** 2026.01.15-c04fdfe10

This category contains 46 packet(s).

## Packet Index

| ID | Name | Compressed | Max Size |
|----|------|------------|----------|
| `0x28` | [UpdateBlockTypes](#updateblocktypes) | Yes | 1.7 GB |
| `0x29` | [UpdateBlockHitboxes](#updateblockhitboxes) | Yes | 1.7 GB |
| `0x2A` | [UpdateBlockSoundSets](#updateblocksoundsets) | Yes | 1.7 GB |
| `0x2B` | [UpdateItemSoundSets](#updateitemsoundsets) | Yes | 1.7 GB |
| `0x2C` | [UpdateBlockParticleSets](#updateblockparticlesets) | Yes | 1.7 GB |
| `0x2D` | [UpdateBlockBreakingDecals](#updateblockbreakingdecals) | Yes | 1.7 GB |
| `0x2E` | [UpdateBlockSets](#updateblocksets) | Yes | 1.7 GB |
| `0x2F` | [UpdateWeathers](#updateweathers) | Yes | 1.7 GB |
| `0x30` | [UpdateTrails](#updatetrails) | Yes | 1.7 GB |
| `0x31` | [UpdateParticleSystems](#updateparticlesystems) | Yes | 1.7 GB |
| `0x32` | [UpdateParticleSpawners](#updateparticlespawners) | Yes | 1.7 GB |
| `0x33` | [UpdateEntityEffects](#updateentityeffects) | Yes | 1.7 GB |
| `0x34` | [UpdateItemPlayerAnimations](#updateitemplayeranimations) | Yes | 1.7 GB |
| `0x35` | [UpdateModelvfxs](#updatemodelvfxs) | Yes | 1.7 GB |
| `0x36` | [UpdateItems](#updateitems) | Yes | 1.7 GB |
| `0x37` | [UpdateItemQualities](#updateitemqualities) | Yes | 1.7 GB |
| `0x38` | [UpdateItemCategories](#updateitemcategories) | Yes | 1.7 GB |
| `0x39` | [UpdateItemReticles](#updateitemreticles) | Yes | 1.7 GB |
| `0x3A` | [UpdateFieldcraftCategories](#updatefieldcraftcategories) | Yes | 1.7 GB |
| `0x3B` | [UpdateResourceTypes](#updateresourcetypes) | Yes | 1.7 GB |
| `0x3C` | [UpdateRecipes](#updaterecipes) | Yes | 1.7 GB |
| `0x3D` | [UpdateEnvironments](#updateenvironments) | Yes | 1.7 GB |
| `0x3E` | [UpdateAmbienceFX](#updateambiencefx) | Yes | 1.7 GB |
| `0x3F` | [UpdateFluidFX](#updatefluidfx) | Yes | 1.7 GB |
| `0x40` | [UpdateTranslations](#updatetranslations) | Yes | 1.7 GB |
| `0x41` | [UpdateSoundEvents](#updatesoundevents) | Yes | 1.7 GB |
| `0x42` | [UpdateInteractions](#updateinteractions) | Yes | 1.7 GB |
| `0x43` | [UpdateRootInteractions](#updaterootinteractions) | Yes | 1.7 GB |
| `0x44` | [UpdateUnarmedInteractions](#updateunarmedinteractions) | Yes | 20.5 MB |
| `0x45` | [TrackOrUpdateObjective](#trackorupdateobjective) | No | 1.7 GB |
| `0x46` | [UntrackObjective](#untrackobjective) | No | 16 bytes |
| `0x47` | [UpdateObjectiveTask](#updateobjectivetask) | No | 16.4 MB |
| `0x48` | [UpdateEntityStatTypes](#updateentitystattypes) | Yes | 1.7 GB |
| `0x49` | [UpdateEntityUIComponents](#updateentityuicomponents) | Yes | 1.7 GB |
| `0x4A` | [UpdateHitboxCollisionConfig](#updatehitboxcollisionconfig) | Yes | 36.9 MB |
| `0x4B` | [UpdateRepulsionConfig](#updaterepulsionconfig) | Yes | 65.5 MB |
| `0x4C` | [UpdateViewBobbing](#updateviewbobbing) | Yes | 1.7 GB |
| `0x4D` | [UpdateCameraShake](#updatecamerashake) | Yes | 1.7 GB |
| `0x4E` | [UpdateBlockGroups](#updateblockgroups) | Yes | 1.7 GB |
| `0x4F` | [UpdateSoundSets](#updatesoundsets) | Yes | 1.7 GB |
| `0x50` | [UpdateAudioCategories](#updateaudiocategories) | Yes | 1.7 GB |
| `0x51` | [UpdateReverbEffects](#updatereverbeffects) | Yes | 1.7 GB |
| `0x52` | [UpdateEqualizerEffects](#updateequalizereffects) | Yes | 1.7 GB |
| `0x53` | [UpdateFluids](#updatefluids) | Yes | 1.7 GB |
| `0x54` | [UpdateTagPatterns](#updatetagpatterns) | Yes | 1.7 GB |
| `0x55` | [UpdateProjectileConfigs](#updateprojectileconfigs) | Yes | 1.7 GB |

---

## UpdateBlockTypes

| Property | Value |
|----------|-------|
| Packet ID | `0x28` (40) |
| Compressed | Yes |
| Fixed Block Size | 10 bytes |
| Variable Field Count | 1 |
| Max Size | 1.7 GB |
| Nullable Bit Field | 1 byte(s) |

### Fields

| Name | Type | Nullable | Max Length |
|------|------|----------|------------|
| `type` | [UpdateType](Version-2026.01.15-c04fdfe10-Enums#updatetype) | No | - |
| `maxId` | `int` | No | - |
| `blockTypes` | `Map<Integer, BlockType>` | Yes | - |
| `updateBlockTextures` | `boolean` | No | - |
| `updateModelTextures` | `boolean` | No | - |
| `updateModels` | `boolean` | No | - |
| `updateMapGeometry` | `boolean` | No | - |

**type** enum values:

- `0` = Init
- `1` = AddOrUpdate
- `2` = Remove

---

## UpdateBlockHitboxes

| Property | Value |
|----------|-------|
| Packet ID | `0x29` (41) |
| Compressed | Yes |
| Fixed Block Size | 6 bytes |
| Variable Field Count | 1 |
| Max Size | 1.7 GB |
| Nullable Bit Field | 1 byte(s) |

### Fields

| Name | Type | Nullable | Max Length |
|------|------|----------|------------|
| `type` | [UpdateType](Version-2026.01.15-c04fdfe10-Enums#updatetype) | No | - |
| `maxId` | `int` | No | - |

**type** enum values:

- `0` = Init
- `1` = AddOrUpdate
- `2` = Remove

---

## UpdateBlockSoundSets

| Property | Value |
|----------|-------|
| Packet ID | `0x2A` (42) |
| Compressed | Yes |
| Fixed Block Size | 6 bytes |
| Variable Field Count | 1 |
| Max Size | 1.7 GB |
| Nullable Bit Field | 1 byte(s) |

### Fields

| Name | Type | Nullable | Max Length |
|------|------|----------|------------|
| `type` | [UpdateType](Version-2026.01.15-c04fdfe10-Enums#updatetype) | No | - |
| `maxId` | `int` | No | - |
| `blockSoundSets` | `Map<Integer, BlockSoundSet>` | Yes | - |

**type** enum values:

- `0` = Init
- `1` = AddOrUpdate
- `2` = Remove

---

## UpdateItemSoundSets

| Property | Value |
|----------|-------|
| Packet ID | `0x2B` (43) |
| Compressed | Yes |
| Fixed Block Size | 6 bytes |
| Variable Field Count | 1 |
| Max Size | 1.7 GB |
| Nullable Bit Field | 1 byte(s) |

### Fields

| Name | Type | Nullable | Max Length |
|------|------|----------|------------|
| `type` | [UpdateType](Version-2026.01.15-c04fdfe10-Enums#updatetype) | No | - |
| `maxId` | `int` | No | - |
| `itemSoundSets` | `Map<Integer, ItemSoundSet>` | Yes | - |

**type** enum values:

- `0` = Init
- `1` = AddOrUpdate
- `2` = Remove

---

## UpdateBlockParticleSets

| Property | Value |
|----------|-------|
| Packet ID | `0x2C` (44) |
| Compressed | Yes |
| Fixed Block Size | 2 bytes |
| Variable Field Count | 1 |
| Max Size | 1.7 GB |
| Nullable Bit Field | 1 byte(s) |

### Fields

| Name | Type | Nullable | Max Length |
|------|------|----------|------------|
| `type` | [UpdateType](Version-2026.01.15-c04fdfe10-Enums#updatetype) | No | - |
| `blockParticleSets` | `Map<String, BlockParticleSet>` | Yes | - |

**type** enum values:

- `0` = Init
- `1` = AddOrUpdate
- `2` = Remove

---

## UpdateBlockBreakingDecals

| Property | Value |
|----------|-------|
| Packet ID | `0x2D` (45) |
| Compressed | Yes |
| Fixed Block Size | 2 bytes |
| Variable Field Count | 1 |
| Max Size | 1.7 GB |
| Nullable Bit Field | 1 byte(s) |

### Fields

| Name | Type | Nullable | Max Length |
|------|------|----------|------------|
| `type` | [UpdateType](Version-2026.01.15-c04fdfe10-Enums#updatetype) | No | - |
| `blockBreakingDecals` | `Map<String, BlockBreakingDecal>` | Yes | - |

**type** enum values:

- `0` = Init
- `1` = AddOrUpdate
- `2` = Remove

---

## UpdateBlockSets

| Property | Value |
|----------|-------|
| Packet ID | `0x2E` (46) |
| Compressed | Yes |
| Fixed Block Size | 2 bytes |
| Variable Field Count | 1 |
| Max Size | 1.7 GB |
| Nullable Bit Field | 1 byte(s) |

### Fields

| Name | Type | Nullable | Max Length |
|------|------|----------|------------|
| `type` | [UpdateType](Version-2026.01.15-c04fdfe10-Enums#updatetype) | No | - |
| `blockSets` | `Map<String, BlockSet>` | Yes | - |

**type** enum values:

- `0` = Init
- `1` = AddOrUpdate
- `2` = Remove

---

## UpdateWeathers

| Property | Value |
|----------|-------|
| Packet ID | `0x2F` (47) |
| Compressed | Yes |
| Fixed Block Size | 6 bytes |
| Variable Field Count | 1 |
| Max Size | 1.7 GB |
| Nullable Bit Field | 1 byte(s) |

### Fields

| Name | Type | Nullable | Max Length |
|------|------|----------|------------|
| `type` | [UpdateType](Version-2026.01.15-c04fdfe10-Enums#updatetype) | No | - |
| `maxId` | `int` | No | - |
| `weathers` | `Map<Integer, Weather>` | Yes | - |

**type** enum values:

- `0` = Init
- `1` = AddOrUpdate
- `2` = Remove

---

## UpdateTrails

| Property | Value |
|----------|-------|
| Packet ID | `0x30` (48) |
| Compressed | Yes |
| Fixed Block Size | 2 bytes |
| Variable Field Count | 1 |
| Max Size | 1.7 GB |
| Nullable Bit Field | 1 byte(s) |

### Fields

| Name | Type | Nullable | Max Length |
|------|------|----------|------------|
| `type` | [UpdateType](Version-2026.01.15-c04fdfe10-Enums#updatetype) | No | - |
| `trails` | `Map<String, Trail>` | Yes | - |

**type** enum values:

- `0` = Init
- `1` = AddOrUpdate
- `2` = Remove

---

## UpdateParticleSystems

| Property | Value |
|----------|-------|
| Packet ID | `0x31` (49) |
| Compressed | Yes |
| Fixed Block Size | 2 bytes |
| Variable Field Count | 2 |
| Max Size | 1.7 GB |
| Nullable Bit Field | 1 byte(s) |

### Fields

| Name | Type | Nullable | Max Length |
|------|------|----------|------------|
| `type` | [UpdateType](Version-2026.01.15-c04fdfe10-Enums#updatetype) | No | - |
| `particleSystems` | `Map<String, ParticleSystem>` | Yes | - |
| `removedParticleSystems` | `String[]` | Yes | 4096000 |

**type** enum values:

- `0` = Init
- `1` = AddOrUpdate
- `2` = Remove

---

## UpdateParticleSpawners

| Property | Value |
|----------|-------|
| Packet ID | `0x32` (50) |
| Compressed | Yes |
| Fixed Block Size | 2 bytes |
| Variable Field Count | 2 |
| Max Size | 1.7 GB |
| Nullable Bit Field | 1 byte(s) |

### Fields

| Name | Type | Nullable | Max Length |
|------|------|----------|------------|
| `type` | [UpdateType](Version-2026.01.15-c04fdfe10-Enums#updatetype) | No | - |
| `particleSpawners` | `Map<String, ParticleSpawner>` | Yes | - |
| `removedParticleSpawners` | `String[]` | Yes | 4096000 |

**type** enum values:

- `0` = Init
- `1` = AddOrUpdate
- `2` = Remove

---

## UpdateEntityEffects

| Property | Value |
|----------|-------|
| Packet ID | `0x33` (51) |
| Compressed | Yes |
| Fixed Block Size | 6 bytes |
| Variable Field Count | 1 |
| Max Size | 1.7 GB |
| Nullable Bit Field | 1 byte(s) |

### Fields

| Name | Type | Nullable | Max Length |
|------|------|----------|------------|
| `type` | [UpdateType](Version-2026.01.15-c04fdfe10-Enums#updatetype) | No | - |
| `maxId` | `int` | No | - |
| `entityEffects` | `Map<Integer, EntityEffect>` | Yes | - |

**type** enum values:

- `0` = Init
- `1` = AddOrUpdate
- `2` = Remove

---

## UpdateItemPlayerAnimations

| Property | Value |
|----------|-------|
| Packet ID | `0x34` (52) |
| Compressed | Yes |
| Fixed Block Size | 2 bytes |
| Variable Field Count | 1 |
| Max Size | 1.7 GB |
| Nullable Bit Field | 1 byte(s) |

### Fields

| Name | Type | Nullable | Max Length |
|------|------|----------|------------|
| `type` | [UpdateType](Version-2026.01.15-c04fdfe10-Enums#updatetype) | No | - |
| `itemPlayerAnimations` | `Map<String, ItemPlayerAnimations>` | Yes | - |

**type** enum values:

- `0` = Init
- `1` = AddOrUpdate
- `2` = Remove

---

## UpdateModelvfxs

| Property | Value |
|----------|-------|
| Packet ID | `0x35` (53) |
| Compressed | Yes |
| Fixed Block Size | 6 bytes |
| Variable Field Count | 1 |
| Max Size | 1.7 GB |
| Nullable Bit Field | 1 byte(s) |

### Fields

| Name | Type | Nullable | Max Length |
|------|------|----------|------------|
| `type` | [UpdateType](Version-2026.01.15-c04fdfe10-Enums#updatetype) | No | - |
| `maxId` | `int` | No | - |
| `modelVFXs` | `Map<Integer, ModelVFX>` | Yes | - |

**type** enum values:

- `0` = Init
- `1` = AddOrUpdate
- `2` = Remove

---

## UpdateItems

| Property | Value |
|----------|-------|
| Packet ID | `0x36` (54) |
| Compressed | Yes |
| Fixed Block Size | 4 bytes |
| Variable Field Count | 2 |
| Max Size | 1.7 GB |
| Nullable Bit Field | 1 byte(s) |

### Fields

| Name | Type | Nullable | Max Length |
|------|------|----------|------------|
| `type` | [UpdateType](Version-2026.01.15-c04fdfe10-Enums#updatetype) | No | - |
| `items` | `Map<String, ItemBase>` | Yes | - |
| `removedItems` | `String[]` | Yes | 4096000 |
| `updateModels` | `boolean` | No | - |
| `updateIcons` | `boolean` | No | - |

**type** enum values:

- `0` = Init
- `1` = AddOrUpdate
- `2` = Remove

---

## UpdateItemQualities

| Property | Value |
|----------|-------|
| Packet ID | `0x37` (55) |
| Compressed | Yes |
| Fixed Block Size | 6 bytes |
| Variable Field Count | 1 |
| Max Size | 1.7 GB |
| Nullable Bit Field | 1 byte(s) |

### Fields

| Name | Type | Nullable | Max Length |
|------|------|----------|------------|
| `type` | [UpdateType](Version-2026.01.15-c04fdfe10-Enums#updatetype) | No | - |
| `maxId` | `int` | No | - |
| `itemQualities` | `Map<Integer, ItemQuality>` | Yes | - |

**type** enum values:

- `0` = Init
- `1` = AddOrUpdate
- `2` = Remove

---

## UpdateItemCategories

| Property | Value |
|----------|-------|
| Packet ID | `0x38` (56) |
| Compressed | Yes |
| Fixed Block Size | 2 bytes |
| Variable Field Count | 1 |
| Max Size | 1.7 GB |
| Nullable Bit Field | 1 byte(s) |

### Fields

| Name | Type | Nullable | Max Length |
|------|------|----------|------------|
| `type` | [UpdateType](Version-2026.01.15-c04fdfe10-Enums#updatetype) | No | - |
| `itemCategories` | [ItemCategory](Version-2026.01.15-c04fdfe10-Data-Types#itemcategory)[] | Yes | 4096000 |

**type** enum values:

- `0` = Init
- `1` = AddOrUpdate
- `2` = Remove

---

## UpdateItemReticles

| Property | Value |
|----------|-------|
| Packet ID | `0x39` (57) |
| Compressed | Yes |
| Fixed Block Size | 6 bytes |
| Variable Field Count | 1 |
| Max Size | 1.7 GB |
| Nullable Bit Field | 1 byte(s) |

### Fields

| Name | Type | Nullable | Max Length |
|------|------|----------|------------|
| `type` | [UpdateType](Version-2026.01.15-c04fdfe10-Enums#updatetype) | No | - |
| `maxId` | `int` | No | - |
| `itemReticleConfigs` | `Map<Integer, ItemReticleConfig>` | Yes | - |

**type** enum values:

- `0` = Init
- `1` = AddOrUpdate
- `2` = Remove

---

## UpdateFieldcraftCategories

| Property | Value |
|----------|-------|
| Packet ID | `0x3A` (58) |
| Compressed | Yes |
| Fixed Block Size | 2 bytes |
| Variable Field Count | 1 |
| Max Size | 1.7 GB |
| Nullable Bit Field | 1 byte(s) |

### Fields

| Name | Type | Nullable | Max Length |
|------|------|----------|------------|
| `type` | [UpdateType](Version-2026.01.15-c04fdfe10-Enums#updatetype) | No | - |
| `itemCategories` | [ItemCategory](Version-2026.01.15-c04fdfe10-Data-Types#itemcategory)[] | Yes | 4096000 |

**type** enum values:

- `0` = Init
- `1` = AddOrUpdate
- `2` = Remove

---

## UpdateResourceTypes

| Property | Value |
|----------|-------|
| Packet ID | `0x3B` (59) |
| Compressed | Yes |
| Fixed Block Size | 2 bytes |
| Variable Field Count | 1 |
| Max Size | 1.7 GB |
| Nullable Bit Field | 1 byte(s) |

### Fields

| Name | Type | Nullable | Max Length |
|------|------|----------|------------|
| `type` | [UpdateType](Version-2026.01.15-c04fdfe10-Enums#updatetype) | No | - |
| `resourceTypes` | `Map<String, ResourceType>` | Yes | - |

**type** enum values:

- `0` = Init
- `1` = AddOrUpdate
- `2` = Remove

---

## UpdateRecipes

| Property | Value |
|----------|-------|
| Packet ID | `0x3C` (60) |
| Compressed | Yes |
| Fixed Block Size | 2 bytes |
| Variable Field Count | 2 |
| Max Size | 1.7 GB |
| Nullable Bit Field | 1 byte(s) |

### Fields

| Name | Type | Nullable | Max Length |
|------|------|----------|------------|
| `type` | [UpdateType](Version-2026.01.15-c04fdfe10-Enums#updatetype) | No | - |
| `recipes` | `Map<String, CraftingRecipe>` | Yes | - |
| `removedRecipes` | `String[]` | Yes | 4096000 |

**type** enum values:

- `0` = Init
- `1` = AddOrUpdate
- `2` = Remove

---

## UpdateEnvironments

| Property | Value |
|----------|-------|
| Packet ID | `0x3D` (61) |
| Compressed | Yes |
| Fixed Block Size | 7 bytes |
| Variable Field Count | 1 |
| Max Size | 1.7 GB |
| Nullable Bit Field | 1 byte(s) |

### Fields

| Name | Type | Nullable | Max Length |
|------|------|----------|------------|
| `type` | [UpdateType](Version-2026.01.15-c04fdfe10-Enums#updatetype) | No | - |
| `maxId` | `int` | No | - |
| `environments` | `Map<Integer, WorldEnvironment>` | Yes | - |
| `rebuildMapGeometry` | `boolean` | No | - |

**type** enum values:

- `0` = Init
- `1` = AddOrUpdate
- `2` = Remove

---

## UpdateAmbienceFX

| Property | Value |
|----------|-------|
| Packet ID | `0x3E` (62) |
| Compressed | Yes |
| Fixed Block Size | 6 bytes |
| Variable Field Count | 1 |
| Max Size | 1.7 GB |
| Nullable Bit Field | 1 byte(s) |

### Fields

| Name | Type | Nullable | Max Length |
|------|------|----------|------------|
| `type` | [UpdateType](Version-2026.01.15-c04fdfe10-Enums#updatetype) | No | - |
| `maxId` | `int` | No | - |
| `ambienceFX` | `Map<Integer, AmbienceFX>` | Yes | - |

**type** enum values:

- `0` = Init
- `1` = AddOrUpdate
- `2` = Remove

---

## UpdateFluidFX

| Property | Value |
|----------|-------|
| Packet ID | `0x3F` (63) |
| Compressed | Yes |
| Fixed Block Size | 6 bytes |
| Variable Field Count | 1 |
| Max Size | 1.7 GB |
| Nullable Bit Field | 1 byte(s) |

### Fields

| Name | Type | Nullable | Max Length |
|------|------|----------|------------|
| `type` | [UpdateType](Version-2026.01.15-c04fdfe10-Enums#updatetype) | No | - |
| `maxId` | `int` | No | - |
| `fluidFX` | `Map<Integer, FluidFX>` | Yes | - |

**type** enum values:

- `0` = Init
- `1` = AddOrUpdate
- `2` = Remove

---

## UpdateTranslations

| Property | Value |
|----------|-------|
| Packet ID | `0x40` (64) |
| Compressed | Yes |
| Fixed Block Size | 2 bytes |
| Variable Field Count | 1 |
| Max Size | 1.7 GB |
| Nullable Bit Field | 1 byte(s) |

### Fields

| Name | Type | Nullable | Max Length |
|------|------|----------|------------|
| `type` | [UpdateType](Version-2026.01.15-c04fdfe10-Enums#updatetype) | No | - |
| `translations` | `Map<String, String>` | Yes | - |

**type** enum values:

- `0` = Init
- `1` = AddOrUpdate
- `2` = Remove

---

## UpdateSoundEvents

| Property | Value |
|----------|-------|
| Packet ID | `0x41` (65) |
| Compressed | Yes |
| Fixed Block Size | 6 bytes |
| Variable Field Count | 1 |
| Max Size | 1.7 GB |
| Nullable Bit Field | 1 byte(s) |

### Fields

| Name | Type | Nullable | Max Length |
|------|------|----------|------------|
| `type` | [UpdateType](Version-2026.01.15-c04fdfe10-Enums#updatetype) | No | - |
| `maxId` | `int` | No | - |
| `soundEvents` | `Map<Integer, SoundEvent>` | Yes | - |

**type** enum values:

- `0` = Init
- `1` = AddOrUpdate
- `2` = Remove

---

## UpdateInteractions

| Property | Value |
|----------|-------|
| Packet ID | `0x42` (66) |
| Compressed | Yes |
| Fixed Block Size | 6 bytes |
| Variable Field Count | 1 |
| Max Size | 1.7 GB |
| Nullable Bit Field | 1 byte(s) |

### Fields

| Name | Type | Nullable | Max Length |
|------|------|----------|------------|
| `type` | [UpdateType](Version-2026.01.15-c04fdfe10-Enums#updatetype) | No | - |
| `maxId` | `int` | No | - |
| `interactions` | `Map<Integer, Interaction>` | Yes | - |

**type** enum values:

- `0` = Init
- `1` = AddOrUpdate
- `2` = Remove

---

## UpdateRootInteractions

| Property | Value |
|----------|-------|
| Packet ID | `0x43` (67) |
| Compressed | Yes |
| Fixed Block Size | 6 bytes |
| Variable Field Count | 1 |
| Max Size | 1.7 GB |
| Nullable Bit Field | 1 byte(s) |

### Fields

| Name | Type | Nullable | Max Length |
|------|------|----------|------------|
| `type` | [UpdateType](Version-2026.01.15-c04fdfe10-Enums#updatetype) | No | - |
| `maxId` | `int` | No | - |
| `interactions` | `Map<Integer, RootInteraction>` | Yes | - |

**type** enum values:

- `0` = Init
- `1` = AddOrUpdate
- `2` = Remove

---

## UpdateUnarmedInteractions

| Property | Value |
|----------|-------|
| Packet ID | `0x44` (68) |
| Compressed | Yes |
| Fixed Block Size | 2 bytes |
| Variable Field Count | 1 |
| Max Size | 20.5 MB |
| Nullable Bit Field | 1 byte(s) |

### Fields

| Name | Type | Nullable | Max Length |
|------|------|----------|------------|
| `type` | [UpdateType](Version-2026.01.15-c04fdfe10-Enums#updatetype) | No | - |
| `interactions` | `Map<InteractionType, Integer>` | Yes | - |

**type** enum values:

- `0` = Init
- `1` = AddOrUpdate
- `2` = Remove

---

## TrackOrUpdateObjective

| Property | Value |
|----------|-------|
| Packet ID | `0x45` (69) |
| Compressed | No |
| Fixed Block Size | 1 bytes |
| Variable Field Count | 1 |
| Max Size | 1.7 GB |
| Nullable Bit Field | 1 byte(s) |

### Fields

| Name | Type | Nullable | Max Length |
|------|------|----------|------------|
| `objective` | [Objective](Version-2026.01.15-c04fdfe10-Data-Types#objective) | Yes | - |

---

## UntrackObjective

| Property | Value |
|----------|-------|
| Packet ID | `0x46` (70) |
| Compressed | No |
| Fixed Block Size | 16 bytes |
| Variable Field Count | 0 |
| Max Size | 16 bytes |

### Fields

| Name | Type | Nullable | Max Length |
|------|------|----------|------------|
| `objectiveUuid` | `UUID` | No | - |

---

## UpdateObjectiveTask

| Property | Value |
|----------|-------|
| Packet ID | `0x47` (71) |
| Compressed | No |
| Fixed Block Size | 21 bytes |
| Variable Field Count | 1 |
| Max Size | 16.4 MB |
| Nullable Bit Field | 1 byte(s) |

### Fields

| Name | Type | Nullable | Max Length |
|------|------|----------|------------|
| `objectiveUuid` | `UUID` | No | - |
| `taskIndex` | `int` | No | - |
| `task` | [ObjectiveTask](Version-2026.01.15-c04fdfe10-Data-Types#objectivetask) | Yes | - |

---

## UpdateEntityStatTypes

| Property | Value |
|----------|-------|
| Packet ID | `0x48` (72) |
| Compressed | Yes |
| Fixed Block Size | 6 bytes |
| Variable Field Count | 1 |
| Max Size | 1.7 GB |
| Nullable Bit Field | 1 byte(s) |

### Fields

| Name | Type | Nullable | Max Length |
|------|------|----------|------------|
| `type` | [UpdateType](Version-2026.01.15-c04fdfe10-Enums#updatetype) | No | - |
| `maxId` | `int` | No | - |
| `types` | `Map<Integer, EntityStatType>` | Yes | - |

**type** enum values:

- `0` = Init
- `1` = AddOrUpdate
- `2` = Remove

---

## UpdateEntityUIComponents

| Property | Value |
|----------|-------|
| Packet ID | `0x49` (73) |
| Compressed | Yes |
| Fixed Block Size | 6 bytes |
| Variable Field Count | 1 |
| Max Size | 1.7 GB |
| Nullable Bit Field | 1 byte(s) |

### Fields

| Name | Type | Nullable | Max Length |
|------|------|----------|------------|
| `type` | [UpdateType](Version-2026.01.15-c04fdfe10-Enums#updatetype) | No | - |
| `maxId` | `int` | No | - |
| `components` | `Map<Integer, EntityUIComponent>` | Yes | - |

**type** enum values:

- `0` = Init
- `1` = AddOrUpdate
- `2` = Remove

---

## UpdateHitboxCollisionConfig

| Property | Value |
|----------|-------|
| Packet ID | `0x4A` (74) |
| Compressed | Yes |
| Fixed Block Size | 6 bytes |
| Variable Field Count | 1 |
| Max Size | 36.9 MB |
| Nullable Bit Field | 1 byte(s) |

### Fields

| Name | Type | Nullable | Max Length |
|------|------|----------|------------|
| `type` | [UpdateType](Version-2026.01.15-c04fdfe10-Enums#updatetype) | No | - |
| `maxId` | `int` | No | - |
| `hitboxCollisionConfigs` | `Map<Integer, HitboxCollisionConfig>` | Yes | - |

**type** enum values:

- `0` = Init
- `1` = AddOrUpdate
- `2` = Remove

---

## UpdateRepulsionConfig

| Property | Value |
|----------|-------|
| Packet ID | `0x4B` (75) |
| Compressed | Yes |
| Fixed Block Size | 6 bytes |
| Variable Field Count | 1 |
| Max Size | 65.5 MB |
| Nullable Bit Field | 1 byte(s) |

### Fields

| Name | Type | Nullable | Max Length |
|------|------|----------|------------|
| `type` | [UpdateType](Version-2026.01.15-c04fdfe10-Enums#updatetype) | No | - |
| `maxId` | `int` | No | - |
| `repulsionConfigs` | `Map<Integer, RepulsionConfig>` | Yes | - |

**type** enum values:

- `0` = Init
- `1` = AddOrUpdate
- `2` = Remove

---

## UpdateViewBobbing

| Property | Value |
|----------|-------|
| Packet ID | `0x4C` (76) |
| Compressed | Yes |
| Fixed Block Size | 2 bytes |
| Variable Field Count | 1 |
| Max Size | 1.7 GB |
| Nullable Bit Field | 1 byte(s) |

### Fields

| Name | Type | Nullable | Max Length |
|------|------|----------|------------|
| `type` | [UpdateType](Version-2026.01.15-c04fdfe10-Enums#updatetype) | No | - |
| `profiles` | `Map<MovementType, ViewBobbing>` | Yes | - |

**type** enum values:

- `0` = Init
- `1` = AddOrUpdate
- `2` = Remove

---

## UpdateCameraShake

| Property | Value |
|----------|-------|
| Packet ID | `0x4D` (77) |
| Compressed | Yes |
| Fixed Block Size | 2 bytes |
| Variable Field Count | 1 |
| Max Size | 1.7 GB |
| Nullable Bit Field | 1 byte(s) |

### Fields

| Name | Type | Nullable | Max Length |
|------|------|----------|------------|
| `type` | [UpdateType](Version-2026.01.15-c04fdfe10-Enums#updatetype) | No | - |
| `profiles` | `Map<Integer, CameraShake>` | Yes | - |

**type** enum values:

- `0` = Init
- `1` = AddOrUpdate
- `2` = Remove

---

## UpdateBlockGroups

| Property | Value |
|----------|-------|
| Packet ID | `0x4E` (78) |
| Compressed | Yes |
| Fixed Block Size | 2 bytes |
| Variable Field Count | 1 |
| Max Size | 1.7 GB |
| Nullable Bit Field | 1 byte(s) |

### Fields

| Name | Type | Nullable | Max Length |
|------|------|----------|------------|
| `type` | [UpdateType](Version-2026.01.15-c04fdfe10-Enums#updatetype) | No | - |
| `groups` | `Map<String, BlockGroup>` | Yes | - |

**type** enum values:

- `0` = Init
- `1` = AddOrUpdate
- `2` = Remove

---

## UpdateSoundSets

| Property | Value |
|----------|-------|
| Packet ID | `0x4F` (79) |
| Compressed | Yes |
| Fixed Block Size | 6 bytes |
| Variable Field Count | 1 |
| Max Size | 1.7 GB |
| Nullable Bit Field | 1 byte(s) |

### Fields

| Name | Type | Nullable | Max Length |
|------|------|----------|------------|
| `type` | [UpdateType](Version-2026.01.15-c04fdfe10-Enums#updatetype) | No | - |
| `maxId` | `int` | No | - |
| `soundSets` | `Map<Integer, SoundSet>` | Yes | - |

**type** enum values:

- `0` = Init
- `1` = AddOrUpdate
- `2` = Remove

---

## UpdateAudioCategories

| Property | Value |
|----------|-------|
| Packet ID | `0x50` (80) |
| Compressed | Yes |
| Fixed Block Size | 6 bytes |
| Variable Field Count | 1 |
| Max Size | 1.7 GB |
| Nullable Bit Field | 1 byte(s) |

### Fields

| Name | Type | Nullable | Max Length |
|------|------|----------|------------|
| `type` | [UpdateType](Version-2026.01.15-c04fdfe10-Enums#updatetype) | No | - |
| `maxId` | `int` | No | - |
| `categories` | `Map<Integer, AudioCategory>` | Yes | - |

**type** enum values:

- `0` = Init
- `1` = AddOrUpdate
- `2` = Remove

---

## UpdateReverbEffects

| Property | Value |
|----------|-------|
| Packet ID | `0x51` (81) |
| Compressed | Yes |
| Fixed Block Size | 6 bytes |
| Variable Field Count | 1 |
| Max Size | 1.7 GB |
| Nullable Bit Field | 1 byte(s) |

### Fields

| Name | Type | Nullable | Max Length |
|------|------|----------|------------|
| `type` | [UpdateType](Version-2026.01.15-c04fdfe10-Enums#updatetype) | No | - |
| `maxId` | `int` | No | - |
| `effects` | `Map<Integer, ReverbEffect>` | Yes | - |

**type** enum values:

- `0` = Init
- `1` = AddOrUpdate
- `2` = Remove

---

## UpdateEqualizerEffects

| Property | Value |
|----------|-------|
| Packet ID | `0x52` (82) |
| Compressed | Yes |
| Fixed Block Size | 6 bytes |
| Variable Field Count | 1 |
| Max Size | 1.7 GB |
| Nullable Bit Field | 1 byte(s) |

### Fields

| Name | Type | Nullable | Max Length |
|------|------|----------|------------|
| `type` | [UpdateType](Version-2026.01.15-c04fdfe10-Enums#updatetype) | No | - |
| `maxId` | `int` | No | - |
| `effects` | `Map<Integer, EqualizerEffect>` | Yes | - |

**type** enum values:

- `0` = Init
- `1` = AddOrUpdate
- `2` = Remove

---

## UpdateFluids

| Property | Value |
|----------|-------|
| Packet ID | `0x53` (83) |
| Compressed | Yes |
| Fixed Block Size | 6 bytes |
| Variable Field Count | 1 |
| Max Size | 1.7 GB |
| Nullable Bit Field | 1 byte(s) |

### Fields

| Name | Type | Nullable | Max Length |
|------|------|----------|------------|
| `type` | [UpdateType](Version-2026.01.15-c04fdfe10-Enums#updatetype) | No | - |
| `maxId` | `int` | No | - |
| `fluids` | `Map<Integer, Fluid>` | Yes | - |

**type** enum values:

- `0` = Init
- `1` = AddOrUpdate
- `2` = Remove

---

## UpdateTagPatterns

| Property | Value |
|----------|-------|
| Packet ID | `0x54` (84) |
| Compressed | Yes |
| Fixed Block Size | 6 bytes |
| Variable Field Count | 1 |
| Max Size | 1.7 GB |
| Nullable Bit Field | 1 byte(s) |

### Fields

| Name | Type | Nullable | Max Length |
|------|------|----------|------------|
| `type` | [UpdateType](Version-2026.01.15-c04fdfe10-Enums#updatetype) | No | - |
| `maxId` | `int` | No | - |
| `patterns` | `Map<Integer, TagPattern>` | Yes | - |

**type** enum values:

- `0` = Init
- `1` = AddOrUpdate
- `2` = Remove

---

## UpdateProjectileConfigs

| Property | Value |
|----------|-------|
| Packet ID | `0x55` (85) |
| Compressed | Yes |
| Fixed Block Size | 2 bytes |
| Variable Field Count | 2 |
| Max Size | 1.7 GB |
| Nullable Bit Field | 1 byte(s) |

### Fields

| Name | Type | Nullable | Max Length |
|------|------|----------|------------|
| `type` | [UpdateType](Version-2026.01.15-c04fdfe10-Enums#updatetype) | No | - |
| `configs` | `Map<String, ProjectileConfig>` | Yes | - |
| `removedConfigs` | `String[]` | Yes | 4096000 |

**type** enum values:

- `0` = Init
- `1` = AddOrUpdate
- `2` = Remove

---
[Back to Home](Version-2026.01.15-c04fdfe10-Home)