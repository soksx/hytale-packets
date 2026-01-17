# Data Types

**Version:** 2026.01.13-50e69c385

This page documents composite data types used in packets.

## Io

### PacketDecoder

*Source: `protocol/io/netty`*

*No fields documented*

### ProtocolException

*Source: `protocol/io`*

*No fields documented*

## Packets

### AssetEditorAsset

*Source: `protocol/packets/asseteditor`*

| Field | Type | Nullable |
|-------|------|----------|
| `hash` | `String` | Yes |
| `path` | [AssetPath](Version-2026.01.13-50e69c385-Data-Types#assetpath) | Yes |

### AssetEditorAssetType

*Source: `protocol/packets/asseteditor`*

| Field | Type | Nullable |
|-------|------|----------|
| `id` | `String` | Yes |
| `icon` | `String` | Yes |
| `isColoredIcon` | `boolean` | No |
| `path` | `String` | Yes |
| `fileExtension` | `String` | Yes |
| `editorType` | [AssetEditorEditorType](Version-2026.01.13-50e69c385-Enums#asseteditoreditortype) | No |

### AssetEditorFileEntry

*Source: `protocol/packets/asseteditor`*

| Field | Type | Nullable |
|-------|------|----------|
| `path` | `String` | Yes |
| `isDirectory` | `boolean` | No |

### AssetEditorPreviewCameraSettings

*Source: `protocol/packets/asseteditor`*

| Field | Type | Nullable |
|-------|------|----------|
| `modelScale` | `float` | No |
| `cameraPosition` | [Vector3f](Version-2026.01.13-50e69c385-Data-Types#vector3f) | Yes |
| `cameraOrientation` | [Vector3f](Version-2026.01.13-50e69c385-Data-Types#vector3f) | Yes |

### AssetInfo

*Source: `protocol/packets/asseteditor`*

| Field | Type | Nullable |
|-------|------|----------|
| `path` | [AssetPath](Version-2026.01.13-50e69c385-Data-Types#assetpath) | Yes |
| `oldPath` | [AssetPath](Version-2026.01.13-50e69c385-Data-Types#assetpath) | Yes |
| `isDeleted` | `boolean` | No |
| `isNew` | `boolean` | No |
| `lastModificationDate` | `long` | No |
| `lastModificationUsername` | `String` | Yes |

### AssetPackManifest

*Source: `protocol/packets/asseteditor`*

| Field | Type | Nullable |
|-------|------|----------|
| `name` | `String` | Yes |
| `group` | `String` | Yes |
| `website` | `String` | Yes |
| `description` | `String` | Yes |
| `version` | `String` | Yes |
| `authors` | [AuthorInfo](Version-2026.01.13-50e69c385-Data-Types#authorinfo)[] | Yes |

### AssetPath

*Source: `protocol/packets/asseteditor`*

| Field | Type | Nullable |
|-------|------|----------|
| `pack` | `String` | Yes |
| `path` | `String` | Yes |

### AuthorInfo

*Source: `protocol/packets/asseteditor`*

| Field | Type | Nullable |
|-------|------|----------|
| `name` | `String` | Yes |
| `email` | `String` | Yes |
| `url` | `String` | Yes |

### BiomeData

*Source: `protocol/packets/worldmap`*

| Field | Type | Nullable |
|-------|------|----------|
| `zoneId` | `int` | No |
| `zoneName` | `String` | Yes |
| `biomeName` | `String` | Yes |
| `biomeColor` | `int` | No |

### BlockChange

*Source: `protocol/packets/interface_`*

| Field | Type | Nullable |
|-------|------|----------|
| `x` | `int` | No |
| `y` | `int` | No |
| `z` | `int` | No |
| `block` | `int` | No |
| `rotation` | `byte` | No |

### BuilderToolArg

*Source: `protocol/packets/buildertools`*

| Field | Type | Nullable |
|-------|------|----------|
| `required` | `boolean` | No |
| `argType` | [BuilderToolArgType](Version-2026.01.13-50e69c385-Enums#buildertoolargtype) | No |
| `boolArg` | [BuilderToolBoolArg](Version-2026.01.13-50e69c385-Data-Types#buildertoolboolarg) | Yes |
| `floatArg` | [BuilderToolFloatArg](Version-2026.01.13-50e69c385-Data-Types#buildertoolfloatarg) | Yes |
| `intArg` | [BuilderToolIntArg](Version-2026.01.13-50e69c385-Data-Types#buildertoolintarg) | Yes |
| `stringArg` | [BuilderToolStringArg](Version-2026.01.13-50e69c385-Data-Types#buildertoolstringarg) | Yes |
| `blockArg` | [BuilderToolBlockArg](Version-2026.01.13-50e69c385-Data-Types#buildertoolblockarg) | Yes |
| `maskArg` | [BuilderToolMaskArg](Version-2026.01.13-50e69c385-Data-Types#buildertoolmaskarg) | Yes |
| `brushShapeArg` | [BuilderToolBrushShapeArg](Version-2026.01.13-50e69c385-Data-Types#buildertoolbrushshapearg) | Yes |
| `brushOriginArg` | [BuilderToolBrushOriginArg](Version-2026.01.13-50e69c385-Data-Types#buildertoolbrushoriginarg) | Yes |
| `brushAxisArg` | [BuilderToolBrushAxisArg](Version-2026.01.13-50e69c385-Data-Types#buildertoolbrushaxisarg) | Yes |
| `rotationArg` | [BuilderToolRotationArg](Version-2026.01.13-50e69c385-Data-Types#buildertoolrotationarg) | Yes |
| `optionArg` | [BuilderToolOptionArg](Version-2026.01.13-50e69c385-Data-Types#buildertooloptionarg) | Yes |

### BuilderToolBlockArg

*Source: `protocol/packets/buildertools`*

| Field | Type | Nullable |
|-------|------|----------|
| `defaultValue` | `String` | Yes |
| `allowPattern` | `boolean` | No |

### BuilderToolBoolArg

*Source: `protocol/packets/buildertools`*

| Field | Type | Nullable |
|-------|------|----------|
| `defaultValue` | `boolean` | No |

### BuilderToolBrushAxisArg

*Source: `protocol/packets/buildertools`*

| Field | Type | Nullable |
|-------|------|----------|
| `defaultValue` | [BrushAxis](Version-2026.01.13-50e69c385-Enums#brushaxis) | No |

### BuilderToolBrushData

*Source: `protocol/packets/buildertools`*

| Field | Type | Nullable |
|-------|------|----------|
| `width` | [BuilderToolIntArg](Version-2026.01.13-50e69c385-Data-Types#buildertoolintarg) | Yes |
| `height` | [BuilderToolIntArg](Version-2026.01.13-50e69c385-Data-Types#buildertoolintarg) | Yes |
| `thickness` | [BuilderToolIntArg](Version-2026.01.13-50e69c385-Data-Types#buildertoolintarg) | Yes |
| `capped` | [BuilderToolBoolArg](Version-2026.01.13-50e69c385-Data-Types#buildertoolboolarg) | Yes |
| `shape` | [BuilderToolBrushShapeArg](Version-2026.01.13-50e69c385-Data-Types#buildertoolbrushshapearg) | Yes |
| `origin` | [BuilderToolBrushOriginArg](Version-2026.01.13-50e69c385-Data-Types#buildertoolbrushoriginarg) | Yes |
| `originRotation` | [BuilderToolBoolArg](Version-2026.01.13-50e69c385-Data-Types#buildertoolboolarg) | Yes |
| `rotationAxis` | [BuilderToolBrushAxisArg](Version-2026.01.13-50e69c385-Data-Types#buildertoolbrushaxisarg) | Yes |
| `rotationAngle` | [BuilderToolRotationArg](Version-2026.01.13-50e69c385-Data-Types#buildertoolrotationarg) | Yes |
| `mirrorAxis` | [BuilderToolBrushAxisArg](Version-2026.01.13-50e69c385-Data-Types#buildertoolbrushaxisarg) | Yes |
| `material` | [BuilderToolBlockArg](Version-2026.01.13-50e69c385-Data-Types#buildertoolblockarg) | Yes |
| `favoriteMaterials` | [BuilderToolBlockArg](Version-2026.01.13-50e69c385-Data-Types#buildertoolblockarg)[] | Yes |
| `mask` | [BuilderToolMaskArg](Version-2026.01.13-50e69c385-Data-Types#buildertoolmaskarg) | Yes |
| `maskAbove` | [BuilderToolMaskArg](Version-2026.01.13-50e69c385-Data-Types#buildertoolmaskarg) | Yes |
| `maskNot` | [BuilderToolMaskArg](Version-2026.01.13-50e69c385-Data-Types#buildertoolmaskarg) | Yes |
| `maskBelow` | [BuilderToolMaskArg](Version-2026.01.13-50e69c385-Data-Types#buildertoolmaskarg) | Yes |
| `maskAdjacent` | [BuilderToolMaskArg](Version-2026.01.13-50e69c385-Data-Types#buildertoolmaskarg) | Yes |
| `maskNeighbor` | [BuilderToolMaskArg](Version-2026.01.13-50e69c385-Data-Types#buildertoolmaskarg) | Yes |
| `maskCommands` | [BuilderToolStringArg](Version-2026.01.13-50e69c385-Data-Types#buildertoolstringarg)[] | Yes |
| `useMaskCommands` | [BuilderToolBoolArg](Version-2026.01.13-50e69c385-Data-Types#buildertoolboolarg) | Yes |
| `invertMask` | [BuilderToolBoolArg](Version-2026.01.13-50e69c385-Data-Types#buildertoolboolarg) | Yes |

### BuilderToolBrushOriginArg

*Source: `protocol/packets/buildertools`*

| Field | Type | Nullable |
|-------|------|----------|
| `defaultValue` | [BrushOrigin](Version-2026.01.13-50e69c385-Enums#brushorigin) | No |

### BuilderToolBrushShapeArg

*Source: `protocol/packets/buildertools`*

| Field | Type | Nullable |
|-------|------|----------|
| `defaultValue` | [BrushShape](Version-2026.01.13-50e69c385-Enums#brushshape) | No |

### BuilderToolFloatArg

*Source: `protocol/packets/buildertools`*

| Field | Type | Nullable |
|-------|------|----------|
| `defaultValue` | `float` | No |
| `min` | `float` | No |
| `max` | `float` | No |

### BuilderToolIntArg

*Source: `protocol/packets/buildertools`*

| Field | Type | Nullable |
|-------|------|----------|
| `defaultValue` | `int` | No |
| `min` | `int` | No |
| `max` | `int` | No |

### BuilderToolMaskArg

*Source: `protocol/packets/buildertools`*

| Field | Type | Nullable |
|-------|------|----------|
| `defaultValue` | `String` | Yes |

### BuilderToolOptionArg

*Source: `protocol/packets/buildertools`*

| Field | Type | Nullable |
|-------|------|----------|
| `defaultValue` | `String` | Yes |
| `options` | `String[]` | Yes |

### BuilderToolRotationArg

*Source: `protocol/packets/buildertools`*

| Field | Type | Nullable |
|-------|------|----------|
| `defaultValue` | [Rotation](Version-2026.01.13-50e69c385-Enums#rotation) | No |

### BuilderToolState

*Source: `protocol/packets/buildertools`*

| Field | Type | Nullable |
|-------|------|----------|
| `id` | `String` | Yes |
| `isBrush` | `boolean` | No |
| `brushData` | [BuilderToolBrushData](Version-2026.01.13-50e69c385-Data-Types#buildertoolbrushdata) | Yes |
| `args` | `Map<String, BuilderToolArg>` | Yes |

### BuilderToolStringArg

*Source: `protocol/packets/buildertools`*

| Field | Type | Nullable |
|-------|------|----------|
| `defaultValue` | `String` | Yes |

### CancelCraftingAction

*Source: `protocol/packets/window`*

*No fields documented*

### ChangeBlockAction

*Source: `protocol/packets/window`*

| Field | Type | Nullable |
|-------|------|----------|
| `down` | `boolean` | No |

### ContextMenuItem

*Source: `protocol/packets/worldmap`*

| Field | Type | Nullable |
|-------|------|----------|
| `name` | `String` | No |
| `command` | `String` | No |

### CraftItemAction

*Source: `protocol/packets/window`*

*No fields documented*

### CraftRecipeAction

*Source: `protocol/packets/window`*

| Field | Type | Nullable |
|-------|------|----------|
| `recipeId` | `String` | Yes |
| `quantity` | `int` | No |

### CustomUICommand

*Source: `protocol/packets/interface_`*

| Field | Type | Nullable |
|-------|------|----------|
| `type` | [CustomUICommandType](Version-2026.01.13-50e69c385-Enums#customuicommandtype) | No |
| `selector` | `String` | Yes |
| `data` | `String` | Yes |
| `text` | `String` | Yes |

### CustomUIEventBinding

*Source: `protocol/packets/interface_`*

| Field | Type | Nullable |
|-------|------|----------|
| `type` | [CustomUIEventBindingType](Version-2026.01.13-50e69c385-Enums#customuieventbindingtype) | No |
| `selector` | `String` | Yes |
| `data` | `String` | Yes |
| `locksInterface` | `boolean` | No |

### EditorSelection

*Source: `protocol/packets/interface_`*

| Field | Type | Nullable |
|-------|------|----------|
| `minX` | `int` | No |
| `minY` | `int` | No |
| `minZ` | `int` | No |
| `maxX` | `int` | No |
| `maxY` | `int` | No |
| `maxZ` | `int` | No |

### FluidChange

*Source: `protocol/packets/interface_`*

| Field | Type | Nullable |
|-------|------|----------|
| `x` | `int` | No |
| `y` | `int` | No |
| `z` | `int` | No |
| `fluidId` | `int` | No |
| `fluidLevel` | `byte` | No |

### JsonUpdateCommand

*Source: `protocol/packets/asseteditor`*

| Field | Type | Nullable |
|-------|------|----------|
| `type` | [JsonUpdateType](Version-2026.01.13-50e69c385-Enums#jsonupdatetype) | No |
| `path` | `String[]` | Yes |
| `previousValue` | `String` | Yes |
| `firstCreatedProperty` | `String[]` | Yes |
| `rebuildCaches` | `AssetEditorRebuildCaches` | Yes |

### MapChunk

*Source: `protocol/packets/worldmap`*

| Field | Type | Nullable |
|-------|------|----------|
| `chunkX` | `int` | No |
| `chunkZ` | `int` | No |
| `image` | [MapImage](Version-2026.01.13-50e69c385-Data-Types#mapimage) | Yes |

### MapImage

*Source: `protocol/packets/worldmap`*

| Field | Type | Nullable |
|-------|------|----------|
| `width` | `int` | No |
| `height` | `int` | No |
| `data` | `int[]` | Yes |

### MapMarker

*Source: `protocol/packets/worldmap`*

| Field | Type | Nullable |
|-------|------|----------|
| `id` | `String` | Yes |
| `name` | `String` | Yes |
| `markerImage` | `String` | Yes |
| `transform` | [Transform](Version-2026.01.13-50e69c385-Data-Types#transform) | Yes |
| `contextMenuItems` | [ContextMenuItem](Version-2026.01.13-50e69c385-Data-Types#contextmenuitem)[] | Yes |

### PortalDef

*Source: `protocol/packets/interface_`*

| Field | Type | Nullable |
|-------|------|----------|
| `nameKey` | `String` | Yes |
| `explorationSeconds` | `int` | No |
| `breachSeconds` | `int` | No |

### PortalState

*Source: `protocol/packets/interface_`*

| Field | Type | Nullable |
|-------|------|----------|
| `remainingSeconds` | `int` | No |
| `breaching` | `boolean` | No |

### SchemaFile

*Source: `protocol/packets/asseteditor`*

| Field | Type | Nullable |
|-------|------|----------|
| `content` | `String` | Yes |

### SelectSlotAction

*Source: `protocol/packets/window`*

| Field | Type | Nullable |
|-------|------|----------|
| `slot` | `int` | No |

### ServerPlayerListPlayer

*Source: `protocol/packets/interface_`*

| Field | Type | Nullable |
|-------|------|----------|
| `uuid` | `UUID` | No |
| `username` | `String` | Yes |
| `worldUuid` | `UUID` | Yes |
| `ping` | `int` | No |

### ServerPlayerListUpdate

*Source: `protocol/packets/interface_`*

| Field | Type | Nullable |
|-------|------|----------|
| `uuid` | `UUID` | No |
| `worldUuid` | `UUID` | No |

### SetActiveAction

*Source: `protocol/packets/window`*

| Field | Type | Nullable |
|-------|------|----------|
| `state` | `boolean` | No |

### SetBlockCmd

*Source: `protocol/packets/world`*

| Field | Type | Nullable |
|-------|------|----------|
| `index` | `short` | No |
| `blockId` | `int` | No |
| `filler` | `short` | No |
| `rotation` | `byte` | No |

### SetFluidCmd

*Source: `protocol/packets/world`*

| Field | Type | Nullable |
|-------|------|----------|
| `index` | `short` | No |
| `fluidId` | `int` | No |
| `fluidLevel` | `byte` | No |

### SleepClock

*Source: `protocol/packets/world`*

| Field | Type | Nullable |
|-------|------|----------|
| `startGametime` | [InstantData](Version-2026.01.13-50e69c385-Data-Types#instantdata) | Yes |
| `targetGametime` | [InstantData](Version-2026.01.13-50e69c385-Data-Types#instantdata) | Yes |
| `progress` | `float` | No |
| `durationSeconds` | `float` | No |

### SleepMultiplayer

*Source: `protocol/packets/world`*

| Field | Type | Nullable |
|-------|------|----------|
| `sleepersCount` | `int` | No |
| `awakeCount` | `int` | No |
| `awakeSample` | `UUID[]` | Yes |

### SortItemsAction

*Source: `protocol/packets/window`*

| Field | Type | Nullable |
|-------|------|----------|
| `sortType` | [SortType](Version-2026.01.13-50e69c385-Enums#sorttype) | No |

### SyncInteractionChain

*Source: `protocol/packets/interaction`*

| Field | Type | Nullable |
|-------|------|----------|
| `activeHotbarSlot` | `int` | No |
| `activeUtilitySlot` | `int` | No |
| `activeToolsSlot` | `int` | No |
| `itemInHandId` | `String` | Yes |
| `utilityItemId` | `String` | Yes |
| `toolsItemId` | `String` | Yes |
| `initial` | `boolean` | No |
| `desync` | `boolean` | No |
| `overrideRootInteraction` | `int` | No |
| `interactionType` | [InteractionType](Version-2026.01.13-50e69c385-Enums#interactiontype) | No |
| `equipSlot` | `int` | No |
| `chainId` | `int` | No |
| `forkedId` | [ForkedChainId](Version-2026.01.13-50e69c385-Data-Types#forkedchainid) | Yes |
| `data` | [InteractionChainData](Version-2026.01.13-50e69c385-Data-Types#interactionchaindata) | Yes |
| `state` | [InteractionState](Version-2026.01.13-50e69c385-Enums#interactionstate) | No |
| `newForks` | [SyncInteractionChain](Version-2026.01.13-50e69c385-Data-Types#syncinteractionchain)[] | Yes |
| `operationBaseIndex` | `int` | No |
| `interactionData` | [InteractionSyncData](Version-2026.01.13-50e69c385-Data-Types#interactionsyncdata)[] | Yes |

### TierUpgradeAction

*Source: `protocol/packets/window`*

*No fields documented*

### TimestampedAssetReference

*Source: `protocol/packets/asseteditor`*

| Field | Type | Nullable |
|-------|------|----------|
| `path` | [AssetPath](Version-2026.01.13-50e69c385-Data-Types#assetpath) | Yes |
| `timestamp` | `String` | Yes |

### UpdateCategoryAction

*Source: `protocol/packets/window`*

| Field | Type | Nullable |
|-------|------|----------|
| `category` | `String` | No |
| `itemCategory` | `String` | No |

## Root

### AOECircleSelector

| Field | Type | Nullable |
|-------|------|----------|
| `range` | `float` | No |
| `offset` | [Vector3f](Version-2026.01.13-50e69c385-Data-Types#vector3f) | Yes |

### AOECylinderSelector

| Field | Type | Nullable |
|-------|------|----------|
| `range` | `float` | No |
| `height` | `float` | No |
| `offset` | [Vector3f](Version-2026.01.13-50e69c385-Data-Types#vector3f) | Yes |

### AbilityEffects

| Field | Type | Nullable |
|-------|------|----------|
| `disabled` | [InteractionType](Version-2026.01.13-50e69c385-Enums#interactiontype)[] | Yes |

### AmbienceFX

| Field | Type | Nullable |
|-------|------|----------|
| `id` | `String` | Yes |
| `conditions` | [AmbienceFXConditions](Version-2026.01.13-50e69c385-Data-Types#ambiencefxconditions) | Yes |
| `sounds` | [AmbienceFXSound](Version-2026.01.13-50e69c385-Data-Types#ambiencefxsound)[] | Yes |
| `music` | [AmbienceFXMusic](Version-2026.01.13-50e69c385-Data-Types#ambiencefxmusic) | Yes |
| `ambientBed` | [AmbienceFXAmbientBed](Version-2026.01.13-50e69c385-Data-Types#ambiencefxambientbed) | Yes |
| `soundEffect` | [AmbienceFXSoundEffect](Version-2026.01.13-50e69c385-Data-Types#ambiencefxsoundeffect) | Yes |
| `priority` | `int` | No |
| `blockedAmbienceFxIndices` | `int[]` | Yes |
| `audioCategoryIndex` | `int` | No |

### AmbienceFXAmbientBed

| Field | Type | Nullable |
|-------|------|----------|
| `track` | `String` | Yes |
| `volume` | `float` | No |
| `transitionSpeed` | [AmbienceTransitionSpeed](Version-2026.01.13-50e69c385-Enums#ambiencetransitionspeed) | No |

### AmbienceFXBlockSoundSet

| Field | Type | Nullable |
|-------|------|----------|
| `blockSoundSetIndex` | `int` | No |
| `percent` | [Rangef](Version-2026.01.13-50e69c385-Data-Types#rangef) | Yes |

### AmbienceFXConditions

| Field | Type | Nullable |
|-------|------|----------|
| `never` | `boolean` | No |
| `environmentIndices` | `int[]` | Yes |
| `weatherIndices` | `int[]` | Yes |
| `fluidFXIndices` | `int[]` | Yes |
| `environmentTagPatternIndex` | `int` | No |
| `weatherTagPatternIndex` | `int` | No |
| `surroundingBlockSoundSets` | [AmbienceFXBlockSoundSet](Version-2026.01.13-50e69c385-Data-Types#ambiencefxblocksoundset)[] | Yes |
| `altitude` | [Range](Version-2026.01.13-50e69c385-Data-Types#range) | Yes |
| `walls` | [Rangeb](Version-2026.01.13-50e69c385-Data-Types#rangeb) | Yes |
| `roof` | `boolean` | No |
| `roofMaterialTagPatternIndex` | `int` | No |
| `floor` | `boolean` | No |
| `sunLightLevel` | [Rangeb](Version-2026.01.13-50e69c385-Data-Types#rangeb) | Yes |
| `torchLightLevel` | [Rangeb](Version-2026.01.13-50e69c385-Data-Types#rangeb) | Yes |
| `globalLightLevel` | [Rangeb](Version-2026.01.13-50e69c385-Data-Types#rangeb) | Yes |
| `dayTime` | [Rangef](Version-2026.01.13-50e69c385-Data-Types#rangef) | Yes |

### AmbienceFXMusic

| Field | Type | Nullable |
|-------|------|----------|
| `tracks` | `String[]` | Yes |
| `volume` | `float` | No |

### AmbienceFXSound

| Field | Type | Nullable |
|-------|------|----------|
| `soundEventIndex` | `int` | No |
| `play3D` | [AmbienceFXSoundPlay3D](Version-2026.01.13-50e69c385-Enums#ambiencefxsoundplay3d) | No |
| `blockSoundSetIndex` | `int` | No |
| `altitude` | [AmbienceFXAltitude](Version-2026.01.13-50e69c385-Enums#ambiencefxaltitude) | No |
| `frequency` | [Rangef](Version-2026.01.13-50e69c385-Data-Types#rangef) | Yes |
| `radius` | [Range](Version-2026.01.13-50e69c385-Data-Types#range) | Yes |

### AmbienceFXSoundEffect

| Field | Type | Nullable |
|-------|------|----------|
| `reverbEffectIndex` | `int` | No |
| `equalizerEffectIndex` | `int` | No |
| `isInstant` | `boolean` | No |

### AngledDamage

| Field | Type | Nullable |
|-------|------|----------|
| `angle` | `double` | No |
| `angleDistance` | `double` | No |
| `damageEffects` | [DamageEffects](Version-2026.01.13-50e69c385-Data-Types#damageeffects) | Yes |
| `next` | `int` | No |

### AngledWielding

| Field | Type | Nullable |
|-------|------|----------|
| `angleRad` | `float` | No |
| `angleDistanceRad` | `float` | No |
| `hasModifiers` | `boolean` | No |

### Animation

| Field | Type | Nullable |
|-------|------|----------|
| `name` | `String` | Yes |
| `speed` | `float` | No |
| `blendingDuration` | `float` | No |
| `looping` | `boolean` | No |
| `weight` | `float` | No |
| `footstepIntervals` | `int[]` | Yes |
| `soundEventIndex` | `int` | No |
| `passiveLoopCount` | `int` | No |

### AnimationSet

| Field | Type | Nullable |
|-------|------|----------|
| `id` | `String` | Yes |
| `animations` | [Animation](Version-2026.01.13-50e69c385-Data-Types#animation)[] | Yes |
| `nextAnimationDelay` | [Rangef](Version-2026.01.13-50e69c385-Data-Types#rangef) | Yes |

### ApplicationEffects

| Field | Type | Nullable |
|-------|------|----------|
| `entityBottomTint` | [Color](Version-2026.01.13-50e69c385-Data-Types#color) | Yes |
| `entityTopTint` | [Color](Version-2026.01.13-50e69c385-Data-Types#color) | Yes |
| `entityAnimationId` | `String` | Yes |
| `particles` | [ModelParticle](Version-2026.01.13-50e69c385-Data-Types#modelparticle)[] | Yes |
| `firstPersonParticles` | [ModelParticle](Version-2026.01.13-50e69c385-Data-Types#modelparticle)[] | Yes |
| `screenEffect` | `String` | Yes |
| `horizontalSpeedMultiplier` | `float` | No |
| `soundEventIndexLocal` | `int` | No |
| `soundEventIndexWorld` | `int` | No |
| `modelVFXId` | `String` | Yes |
| `movementEffects` | [MovementEffects](Version-2026.01.13-50e69c385-Data-Types#movementeffects) | Yes |
| `mouseSensitivityAdjustmentTarget` | `float` | No |
| `mouseSensitivityAdjustmentDuration` | `float` | No |
| `abilityEffects` | [AbilityEffects](Version-2026.01.13-50e69c385-Data-Types#abilityeffects) | Yes |

### AppliedForce

| Field | Type | Nullable |
|-------|------|----------|
| `direction` | [Vector3f](Version-2026.01.13-50e69c385-Data-Types#vector3f) | Yes |
| `adjustVertical` | `boolean` | No |
| `force` | `float` | No |

### ApplyEffectInteraction

| Field | Type | Nullable |
|-------|------|----------|
| `effectId` | `int` | No |
| `entityTarget` | [InteractionTarget](Version-2026.01.13-50e69c385-Enums#interactiontarget) | No |

### ApplyForceInteraction

| Field | Type | Nullable |
|-------|------|----------|
| `velocityConfig` | [VelocityConfig](Version-2026.01.13-50e69c385-Data-Types#velocityconfig) | Yes |
| `changeVelocityType` | [ChangeVelocityType](Version-2026.01.13-50e69c385-Enums#changevelocitytype) | No |
| `forces` | [AppliedForce](Version-2026.01.13-50e69c385-Data-Types#appliedforce)[] | Yes |
| `duration` | `float` | No |
| `verticalClamp` | [FloatRange](Version-2026.01.13-50e69c385-Data-Types#floatrange) | Yes |
| `waitForGround` | `boolean` | No |
| `waitForCollision` | `boolean` | No |
| `groundCheckDelay` | `float` | No |
| `collisionCheckDelay` | `float` | No |
| `groundNext` | `int` | No |
| `collisionNext` | `int` | No |
| `raycastDistance` | `float` | No |
| `raycastHeightOffset` | `float` | No |
| `raycastMode` | [RaycastMode](Version-2026.01.13-50e69c385-Enums#raycastmode) | No |

### Asset

| Field | Type | Nullable |
|-------|------|----------|
| `hash` | `String` | No |
| `name` | `String` | No |

### AssetIconProperties

| Field | Type | Nullable |
|-------|------|----------|
| `scale` | `float` | No |
| `translation` | [Vector2f](Version-2026.01.13-50e69c385-Data-Types#vector2f) | Yes |
| `rotation` | [Vector3f](Version-2026.01.13-50e69c385-Data-Types#vector3f) | Yes |

### AudioCategory

| Field | Type | Nullable |
|-------|------|----------|
| `id` | `String` | Yes |
| `volume` | `float` | No |

### Bench

| Field | Type | Nullable |
|-------|------|----------|
| `benchTierLevels` | [BenchTierLevel](Version-2026.01.13-50e69c385-Data-Types#benchtierlevel)[] | Yes |

### BenchRequirement

| Field | Type | Nullable |
|-------|------|----------|
| `type` | [BenchType](Version-2026.01.13-50e69c385-Enums#benchtype) | No |
| `id` | `String` | Yes |
| `categories` | `String[]` | Yes |
| `requiredTierLevel` | `int` | No |

### BenchTierLevel

| Field | Type | Nullable |
|-------|------|----------|
| `benchUpgradeRequirement` | [BenchUpgradeRequirement](Version-2026.01.13-50e69c385-Data-Types#benchupgraderequirement) | Yes |
| `craftingTimeReductionModifier` | `double` | No |
| `extraInputSlot` | `int` | No |
| `extraOutputSlot` | `int` | No |

### BenchUpgradeRequirement

| Field | Type | Nullable |
|-------|------|----------|
| `material` | [MaterialQuantity](Version-2026.01.13-50e69c385-Data-Types#materialquantity)[] | Yes |
| `timeSeconds` | `double` | No |

### BlockBreaking

| Field | Type | Nullable |
|-------|------|----------|
| `gatherType` | `String` | Yes |
| `health` | `float` | No |
| `quantity` | `int` | No |
| `quality` | `int` | No |
| `itemId` | `String` | Yes |
| `dropListId` | `String` | Yes |

### BlockBreakingDecal

| Field | Type | Nullable |
|-------|------|----------|
| `stageTextures` | `String[]` | Yes |

### BlockConditionInteraction

| Field | Type | Nullable |
|-------|------|----------|
| `matchers` | [BlockMatcher](Version-2026.01.13-50e69c385-Data-Types#blockmatcher)[] | Yes |

### BlockFaceSupport

| Field | Type | Nullable |
|-------|------|----------|
| `faceType` | `String` | Yes |
| `filler` | [Vector3i](Version-2026.01.13-50e69c385-Data-Types#vector3i)[] | Yes |

### BlockFlags

| Field | Type | Nullable |
|-------|------|----------|
| `isUsable` | `boolean` | No |
| `isStackable` | `boolean` | No |

### BlockGathering

| Field | Type | Nullable |
|-------|------|----------|
| `breaking` | [BlockBreaking](Version-2026.01.13-50e69c385-Data-Types#blockbreaking) | Yes |
| `harvest` | [Harvesting](Version-2026.01.13-50e69c385-Data-Types#harvesting) | Yes |
| `soft` | [SoftBlock](Version-2026.01.13-50e69c385-Data-Types#softblock) | Yes |

### BlockGroup

| Field | Type | Nullable |
|-------|------|----------|
| `names` | `String[]` | Yes |

### BlockIdMatcher

| Field | Type | Nullable |
|-------|------|----------|
| `id` | `String` | Yes |
| `state` | `String` | Yes |
| `tagIndex` | `int` | No |

### BlockMatcher

| Field | Type | Nullable |
|-------|------|----------|
| `block` | [BlockIdMatcher](Version-2026.01.13-50e69c385-Data-Types#blockidmatcher) | Yes |
| `face` | [BlockFace](Version-2026.01.13-50e69c385-Enums#blockface) | No |
| `staticFace` | `boolean` | No |

### BlockMount

| Field | Type | Nullable |
|-------|------|----------|
| `type` | [BlockMountType](Version-2026.01.13-50e69c385-Enums#blockmounttype) | No |
| `position` | [Vector3f](Version-2026.01.13-50e69c385-Data-Types#vector3f) | Yes |
| `orientation` | [Vector3f](Version-2026.01.13-50e69c385-Data-Types#vector3f) | Yes |
| `blockTypeId` | `int` | No |

### BlockMovementSettings

| Field | Type | Nullable |
|-------|------|----------|
| `isClimbable` | `boolean` | No |
| `climbUpSpeedMultiplier` | `float` | No |
| `climbDownSpeedMultiplier` | `float` | No |
| `climbLateralSpeedMultiplier` | `float` | No |
| `isBouncy` | `boolean` | No |
| `bounceVelocity` | `float` | No |
| `drag` | `float` | No |
| `friction` | `float` | No |
| `terminalVelocityModifier` | `float` | No |
| `horizontalSpeedMultiplier` | `float` | No |
| `acceleration` | `float` | No |
| `jumpForceMultiplier` | `float` | No |

### BlockParticleSet

| Field | Type | Nullable |
|-------|------|----------|
| `id` | `String` | Yes |
| `color` | [Color](Version-2026.01.13-50e69c385-Data-Types#color) | Yes |
| `scale` | `float` | No |
| `positionOffset` | [Vector3f](Version-2026.01.13-50e69c385-Data-Types#vector3f) | Yes |
| `rotationOffset` | [Direction](Version-2026.01.13-50e69c385-Data-Types#direction) | Yes |
| `particleSystemIds` | `Map<BlockParticleEvent, String>` | Yes |

### BlockPlacementSettings

| Field | Type | Nullable |
|-------|------|----------|
| `allowRotationKey` | `boolean` | No |
| `placeInEmptyBlocks` | `boolean` | No |
| `previewVisibility` | [BlockPreviewVisibility](Version-2026.01.13-50e69c385-Enums#blockpreviewvisibility) | No |
| `rotationMode` | [BlockPlacementRotationMode](Version-2026.01.13-50e69c385-Enums#blockplacementrotationmode) | No |
| `wallPlacementOverrideBlockId` | `int` | No |
| `floorPlacementOverrideBlockId` | `int` | No |
| `ceilingPlacementOverrideBlockId` | `int` | No |

### BlockPosition

| Field | Type | Nullable |
|-------|------|----------|
| `x` | `int` | No |
| `y` | `int` | No |
| `z` | `int` | No |

### BlockRotation

| Field | Type | Nullable |
|-------|------|----------|
| `rotationYaw` | [Rotation](Version-2026.01.13-50e69c385-Enums#rotation) | No |
| `rotationPitch` | [Rotation](Version-2026.01.13-50e69c385-Enums#rotation) | No |
| `rotationRoll` | [Rotation](Version-2026.01.13-50e69c385-Enums#rotation) | No |

### BlockSelectorToolData

| Field | Type | Nullable |
|-------|------|----------|
| `durabilityLossOnUse` | `float` | No |

### BlockSet

| Field | Type | Nullable |
|-------|------|----------|
| `name` | `String` | Yes |
| `blocks` | `int[]` | Yes |

### BlockSoundSet

| Field | Type | Nullable |
|-------|------|----------|
| `id` | `String` | Yes |
| `soundEventIndices` | `Map<BlockSoundEvent, Integer>` | Yes |
| `moveInRepeatRange` | [FloatRange](Version-2026.01.13-50e69c385-Data-Types#floatrange) | Yes |

### BlockTextures

| Field | Type | Nullable |
|-------|------|----------|
| `top` | `String` | Yes |
| `bottom` | `String` | Yes |
| `front` | `String` | Yes |
| `back` | `String` | Yes |
| `left` | `String` | Yes |
| `right` | `String` | Yes |
| `weight` | `float` | No |

### BlockType

| Field | Type | Nullable |
|-------|------|----------|
| `item` | `String` | Yes |
| `name` | `String` | Yes |
| `unknown` | `boolean` | No |
| `drawType` | [DrawType](Version-2026.01.13-50e69c385-Enums#drawtype) | No |
| `material` | [BlockMaterial](Version-2026.01.13-50e69c385-Enums#blockmaterial) | No |
| `opacity` | [Opacity](Version-2026.01.13-50e69c385-Enums#opacity) | No |
| `shaderEffect` | [ShaderType](Version-2026.01.13-50e69c385-Enums#shadertype)[] | Yes |
| `hitbox` | `int` | No |
| `interactionHitbox` | `int` | No |
| `model` | `String` | Yes |
| `modelTexture` | [ModelTexture](Version-2026.01.13-50e69c385-Data-Types#modeltexture)[] | Yes |
| `modelScale` | `float` | No |
| `modelAnimation` | `String` | Yes |
| `looping` | `boolean` | No |
| `maxSupportDistance` | `int` | No |
| `blockSupportsRequiredFor` | [BlockSupportsRequiredForType](Version-2026.01.13-50e69c385-Enums#blocksupportsrequiredfortype) | No |
| `requiresAlphaBlending` | `boolean` | No |
| `cubeTextures` | [BlockTextures](Version-2026.01.13-50e69c385-Data-Types#blocktextures)[] | Yes |
| `cubeSideMaskTexture` | `String` | Yes |
| `cubeShadingMode` | [ShadingMode](Version-2026.01.13-50e69c385-Enums#shadingmode) | No |
| `randomRotation` | [RandomRotation](Version-2026.01.13-50e69c385-Enums#randomrotation) | No |
| `variantRotation` | [VariantRotation](Version-2026.01.13-50e69c385-Enums#variantrotation) | No |
| `rotationYawPlacementOffset` | [Rotation](Version-2026.01.13-50e69c385-Enums#rotation) | No |
| `blockSoundSetIndex` | `int` | No |
| `ambientSoundEventIndex` | `int` | No |
| `particles` | [ModelParticle](Version-2026.01.13-50e69c385-Data-Types#modelparticle)[] | Yes |
| `blockParticleSetId` | `String` | Yes |
| `blockBreakingDecalId` | `String` | Yes |
| `particleColor` | [Color](Version-2026.01.13-50e69c385-Data-Types#color) | Yes |
| `light` | [ColorLight](Version-2026.01.13-50e69c385-Data-Types#colorlight) | Yes |
| `tint` | [Tint](Version-2026.01.13-50e69c385-Data-Types#tint) | Yes |
| `biomeTint` | [Tint](Version-2026.01.13-50e69c385-Data-Types#tint) | Yes |
| `group` | `int` | No |
| `transitionTexture` | `String` | Yes |
| `transitionToGroups` | `int[]` | Yes |
| `movementSettings` | [BlockMovementSettings](Version-2026.01.13-50e69c385-Data-Types#blockmovementsettings) | Yes |
| `flags` | [BlockFlags](Version-2026.01.13-50e69c385-Data-Types#blockflags) | Yes |
| `interactionHint` | `String` | Yes |
| `gathering` | [BlockGathering](Version-2026.01.13-50e69c385-Data-Types#blockgathering) | Yes |
| `placementSettings` | [BlockPlacementSettings](Version-2026.01.13-50e69c385-Data-Types#blockplacementsettings) | Yes |
| `display` | [ModelDisplay](Version-2026.01.13-50e69c385-Data-Types#modeldisplay) | Yes |
| `rail` | [RailConfig](Version-2026.01.13-50e69c385-Data-Types#railconfig) | Yes |
| `ignoreSupportWhenPlaced` | `boolean` | No |
| `interactions` | `Map<InteractionType, Integer>` | Yes |
| `states` | `Map<String, Integer>` | Yes |
| `transitionToTag` | `int` | No |
| `tagIndexes` | `int[]` | Yes |
| `bench` | [Bench](Version-2026.01.13-50e69c385-Data-Types#bench) | Yes |
| `connectedBlockRuleSet` | [ConnectedBlockRuleSet](Version-2026.01.13-50e69c385-Data-Types#connectedblockruleset) | Yes |

### BoolParamValue

*No fields documented*

### BreakBlockInteraction

| Field | Type | Nullable |
|-------|------|----------|
| `harvest` | `boolean` | No |

### BuilderToolInteraction

*No fields documented*

### CameraAxis

| Field | Type | Nullable |
|-------|------|----------|
| `angleRange` | [Rangef](Version-2026.01.13-50e69c385-Data-Types#rangef) | Yes |
| `targetNodes` | [CameraNode](Version-2026.01.13-50e69c385-Enums#cameranode)[] | Yes |

### CameraInteraction

| Field | Type | Nullable |
|-------|------|----------|
| `cameraAction` | [CameraActionType](Version-2026.01.13-50e69c385-Enums#cameraactiontype) | No |
| `cameraPerspective` | [CameraPerspectiveType](Version-2026.01.13-50e69c385-Enums#cameraperspectivetype) | No |
| `cameraPersist` | `boolean` | No |
| `cameraInteractionTime` | `float` | No |

### CameraSettings

| Field | Type | Nullable |
|-------|------|----------|
| `positionOffset` | [Vector3f](Version-2026.01.13-50e69c385-Data-Types#vector3f) | Yes |
| `yaw` | [CameraAxis](Version-2026.01.13-50e69c385-Data-Types#cameraaxis) | Yes |
| `pitch` | [CameraAxis](Version-2026.01.13-50e69c385-Data-Types#cameraaxis) | Yes |

### CameraShake

| Field | Type | Nullable |
|-------|------|----------|
| `firstPerson` | [CameraShakeConfig](Version-2026.01.13-50e69c385-Data-Types#camerashakeconfig) | Yes |
| `thirdPerson` | [CameraShakeConfig](Version-2026.01.13-50e69c385-Data-Types#camerashakeconfig) | Yes |

### CameraShakeConfig

| Field | Type | Nullable |
|-------|------|----------|
| `duration` | `float` | No |
| `startTime` | `float` | No |
| `continuous` | `boolean` | No |
| `easeIn` | [EasingConfig](Version-2026.01.13-50e69c385-Data-Types#easingconfig) | Yes |
| `easeOut` | [EasingConfig](Version-2026.01.13-50e69c385-Data-Types#easingconfig) | Yes |
| `offset` | [OffsetNoise](Version-2026.01.13-50e69c385-Data-Types#offsetnoise) | Yes |
| `rotation` | [RotationNoise](Version-2026.01.13-50e69c385-Data-Types#rotationnoise) | Yes |

### CancelChainInteraction

| Field | Type | Nullable |
|-------|------|----------|
| `chainId` | `String` | Yes |

### ChainFlagInteraction

| Field | Type | Nullable |
|-------|------|----------|
| `chainId` | `String` | Yes |
| `flag` | `String` | Yes |

### ChainingInteraction

| Field | Type | Nullable |
|-------|------|----------|
| `chainId` | `String` | Yes |
| `chainingAllowance` | `float` | No |
| `chainingNext` | `int[]` | Yes |
| `flags` | `Map<String, Integer>` | Yes |

### ChangeActiveSlotInteraction

| Field | Type | Nullable |
|-------|------|----------|
| `targetSlot` | `int` | No |

### ChangeBlockInteraction

| Field | Type | Nullable |
|-------|------|----------|
| `blockChanges` | `Map<Integer, Integer>` | Yes |
| `worldSoundEventIndex` | `int` | No |
| `requireNotBroken` | `boolean` | No |

### ChangeStatInteraction

| Field | Type | Nullable |
|-------|------|----------|
| `entityTarget` | [InteractionTarget](Version-2026.01.13-50e69c385-Enums#interactiontarget) | No |
| `valueType` | [ValueType](Version-2026.01.13-50e69c385-Enums#valuetype) | No |
| `statModifiers` | `Map<Integer, Float>` | Yes |
| `changeStatBehaviour` | [ChangeStatBehaviour](Version-2026.01.13-50e69c385-Enums#changestatbehaviour) | No |

### ChangeStateInteraction

| Field | Type | Nullable |
|-------|------|----------|
| `stateChanges` | `Map<String, String>` | Yes |

### ChargingDelay

| Field | Type | Nullable |
|-------|------|----------|
| `minDelay` | `float` | No |
| `maxDelay` | `float` | No |
| `maxTotalDelay` | `float` | No |
| `minHealth` | `float` | No |
| `maxHealth` | `float` | No |

### ChargingInteraction

| Field | Type | Nullable |
|-------|------|----------|
| `failed` | `int` | No |
| `allowIndefiniteHold` | `boolean` | No |
| `displayProgress` | `boolean` | No |
| `cancelOnOtherClick` | `boolean` | No |
| `failOnDamage` | `boolean` | No |
| `mouseSensitivityAdjustmentTarget` | `float` | No |
| `mouseSensitivityAdjustmentDuration` | `float` | No |
| `chargedNext` | `Map<Float, Integer>` | Yes |
| `forks` | `Map<InteractionType, Integer>` | Yes |
| `chargingDelay` | [ChargingDelay](Version-2026.01.13-50e69c385-Data-Types#chargingdelay) | Yes |

### ClampConfig

| Field | Type | Nullable |
|-------|------|----------|
| `min` | `float` | No |
| `max` | `float` | No |
| `normalize` | `boolean` | No |

### ClearEntityEffectInteraction

| Field | Type | Nullable |
|-------|------|----------|
| `effectId` | `int` | No |
| `entityTarget` | [InteractionTarget](Version-2026.01.13-50e69c385-Enums#interactiontarget) | No |

### Cloud

| Field | Type | Nullable |
|-------|------|----------|
| `texture` | `String` | Yes |
| `speeds` | `Map<Float, Float>` | Yes |
| `colors` | `Map<Float, ColorAlpha>` | Yes |

### Color

| Field | Type | Nullable |
|-------|------|----------|
| `red` | `byte` | No |
| `green` | `byte` | No |
| `blue` | `byte` | No |

### ColorAlpha

| Field | Type | Nullable |
|-------|------|----------|
| `alpha` | `byte` | No |
| `red` | `byte` | No |
| `green` | `byte` | No |
| `blue` | `byte` | No |

### ColorLight

| Field | Type | Nullable |
|-------|------|----------|
| `radius` | `byte` | No |
| `red` | `byte` | No |
| `green` | `byte` | No |
| `blue` | `byte` | No |

### CombatTextEntityUIComponentAnimationEvent

| Field | Type | Nullable |
|-------|------|----------|
| `type` | [CombatTextEntityUIAnimationEventType](Version-2026.01.13-50e69c385-Enums#combattextentityuianimationeventtype) | No |
| `startAt` | `float` | No |
| `endAt` | `float` | No |
| `startScale` | `float` | No |
| `endScale` | `float` | No |
| `positionOffset` | [Vector2f](Version-2026.01.13-50e69c385-Data-Types#vector2f) | Yes |
| `startOpacity` | `float` | No |
| `endOpacity` | `float` | No |

### CombatTextUpdate

| Field | Type | Nullable |
|-------|------|----------|
| `hitAngleDeg` | `float` | No |
| `text` | `String` | Yes |

### ComponentUpdate

| Field | Type | Nullable |
|-------|------|----------|
| `type` | [ComponentUpdateType](Version-2026.01.13-50e69c385-Enums#componentupdatetype) | No |
| `nameplate` | [Nameplate](Version-2026.01.13-50e69c385-Data-Types#nameplate) | Yes |
| `entityUIComponents` | `int[]` | Yes |
| `combatTextUpdate` | [CombatTextUpdate](Version-2026.01.13-50e69c385-Data-Types#combattextupdate) | Yes |
| `model` | [Model](Version-2026.01.13-50e69c385-Data-Types#model) | Yes |
| `skin` | [PlayerSkin](Version-2026.01.13-50e69c385-Data-Types#playerskin) | Yes |
| `item` | [ItemWithAllMetadata](Version-2026.01.13-50e69c385-Data-Types#itemwithallmetadata) | Yes |
| `blockId` | `int` | No |
| `entityScale` | `float` | No |
| `equipment` | [Equipment](Version-2026.01.13-50e69c385-Data-Types#equipment) | Yes |
| `transform` | [ModelTransform](Version-2026.01.13-50e69c385-Data-Types#modeltransform) | Yes |
| `movementStates` | [MovementStates](Version-2026.01.13-50e69c385-Data-Types#movementstates) | Yes |
| `entityEffectUpdates` | [EntityEffectUpdate](Version-2026.01.13-50e69c385-Data-Types#entityeffectupdate)[] | Yes |
| `interactions` | `Map<InteractionType, Integer>` | Yes |
| `dynamicLight` | [ColorLight](Version-2026.01.13-50e69c385-Data-Types#colorlight) | Yes |
| `hitboxCollisionConfigIndex` | `int` | No |
| `repulsionConfigIndex` | `int` | No |
| `predictionId` | `UUID` | No |
| `soundEventIds` | `int[]` | Yes |
| `interactionHint` | `String` | Yes |
| `mounted` | [MountedUpdate](Version-2026.01.13-50e69c385-Data-Types#mountedupdate) | Yes |
| `activeAnimations` | `String[]` | Yes |

### ConditionInteraction

| Field | Type | Nullable |
|-------|------|----------|
| `requiredGameMode` | [GameMode](Version-2026.01.13-50e69c385-Enums#gamemode) | Yes |
| `jumping` | `Boolean` | Yes |
| `swimming` | `Boolean` | Yes |
| `crouching` | `Boolean` | Yes |
| `running` | `Boolean` | Yes |
| `flying` | `Boolean` | Yes |

### ConnectedBlockRuleSet

| Field | Type | Nullable |
|-------|------|----------|
| `type` | [ConnectedBlockRuleSetType](Version-2026.01.13-50e69c385-Enums#connectedblockrulesettype) | No |
| `stair` | [StairConnectedBlockRuleSet](Version-2026.01.13-50e69c385-Data-Types#stairconnectedblockruleset) | Yes |
| `roof` | [RoofConnectedBlockRuleSet](Version-2026.01.13-50e69c385-Data-Types#roofconnectedblockruleset) | Yes |

### CooldownConditionInteraction

| Field | Type | Nullable |
|-------|------|----------|
| `cooldownId` | `String` | Yes |

### CraftingRecipe

| Field | Type | Nullable |
|-------|------|----------|
| `id` | `String` | Yes |
| `inputs` | [MaterialQuantity](Version-2026.01.13-50e69c385-Data-Types#materialquantity)[] | Yes |
| `outputs` | [MaterialQuantity](Version-2026.01.13-50e69c385-Data-Types#materialquantity)[] | Yes |
| `primaryOutput` | [MaterialQuantity](Version-2026.01.13-50e69c385-Data-Types#materialquantity) | Yes |
| `benchRequirement` | [BenchRequirement](Version-2026.01.13-50e69c385-Data-Types#benchrequirement)[] | Yes |
| `knowledgeRequired` | `boolean` | No |
| `timeSeconds` | `float` | No |
| `requiredMemoriesLevel` | `int` | No |

### DamageCause

| Field | Type | Nullable |
|-------|------|----------|
| `id` | `String` | Yes |
| `damageTextColor` | `String` | Yes |

### DamageEffects

| Field | Type | Nullable |
|-------|------|----------|
| `modelParticles` | [ModelParticle](Version-2026.01.13-50e69c385-Data-Types#modelparticle)[] | Yes |
| `worldParticles` | [WorldParticle](Version-2026.01.13-50e69c385-Data-Types#worldparticle)[] | Yes |
| `soundEventIndex` | `int` | No |

### DamageEntityInteraction

| Field | Type | Nullable |
|-------|------|----------|
| `next` | `int` | No |
| `failed` | `int` | No |
| `blocked` | `int` | No |
| `damageEffects` | [DamageEffects](Version-2026.01.13-50e69c385-Data-Types#damageeffects) | Yes |
| `angledDamage` | [AngledDamage](Version-2026.01.13-50e69c385-Data-Types#angleddamage)[] | Yes |
| `targetedDamage` | `Map<String, TargetedDamage>` | Yes |
| `entityStatsOnHit` | [EntityStatOnHit](Version-2026.01.13-50e69c385-Data-Types#entitystatonhit)[] | Yes |

### DeployableConfig

| Field | Type | Nullable |
|-------|------|----------|
| `model` | [Model](Version-2026.01.13-50e69c385-Data-Types#model) | Yes |
| `modelPreview` | [Model](Version-2026.01.13-50e69c385-Data-Types#model) | Yes |
| `allowPlaceOnWalls` | `boolean` | No |

### DetailBox

| Field | Type | Nullable |
|-------|------|----------|
| `offset` | [Vector3f](Version-2026.01.13-50e69c385-Data-Types#vector3f) | Yes |
| `box` | [Hitbox](Version-2026.01.13-50e69c385-Data-Types#hitbox) | Yes |

### Direction

| Field | Type | Nullable |
|-------|------|----------|
| `yaw` | `float` | No |
| `pitch` | `float` | No |
| `roll` | `float` | No |

### DoubleParamValue

*No fields documented*

### EasingConfig

| Field | Type | Nullable |
|-------|------|----------|
| `time` | `float` | No |
| `type` | [EasingType](Version-2026.01.13-50e69c385-Enums#easingtype) | No |

### Edge

| Field | Type | Nullable |
|-------|------|----------|
| `color` | [ColorAlpha](Version-2026.01.13-50e69c385-Data-Types#coloralpha) | Yes |
| `width` | `float` | No |

### EffectConditionInteraction

| Field | Type | Nullable |
|-------|------|----------|
| `entityEffects` | `int[]` | Yes |
| `match` | [Match](Version-2026.01.13-50e69c385-Enums#match) | No |
| `entityTarget` | [InteractionTarget](Version-2026.01.13-50e69c385-Enums#interactiontarget) | No |

### EntityEffect

| Field | Type | Nullable |
|-------|------|----------|
| `id` | `String` | Yes |
| `name` | `String` | Yes |
| `applicationEffects` | [ApplicationEffects](Version-2026.01.13-50e69c385-Data-Types#applicationeffects) | Yes |
| `worldRemovalSoundEventIndex` | `int` | No |
| `localRemovalSoundEventIndex` | `int` | No |
| `modelOverride` | [ModelOverride](Version-2026.01.13-50e69c385-Data-Types#modeloverride) | Yes |
| `duration` | `float` | No |
| `infinite` | `boolean` | No |
| `debuff` | `boolean` | No |
| `statusEffectIcon` | `String` | Yes |
| `overlapBehavior` | [OverlapBehavior](Version-2026.01.13-50e69c385-Enums#overlapbehavior) | No |
| `damageCalculatorCooldown` | `double` | No |
| `statModifiers` | `Map<Integer, Float>` | Yes |
| `valueType` | [ValueType](Version-2026.01.13-50e69c385-Enums#valuetype) | No |

### EntityEffectUpdate

| Field | Type | Nullable |
|-------|------|----------|
| `type` | [EffectOp](Version-2026.01.13-50e69c385-Enums#effectop) | No |
| `id` | `int` | No |
| `remainingTime` | `float` | No |
| `infinite` | `boolean` | No |
| `debuff` | `boolean` | No |
| `statusEffectIcon` | `String` | Yes |

### EntityMatcher

| Field | Type | Nullable |
|-------|------|----------|
| `type` | [EntityMatcherType](Version-2026.01.13-50e69c385-Enums#entitymatchertype) | No |
| `invert` | `boolean` | No |

### EntityStatEffects

| Field | Type | Nullable |
|-------|------|----------|
| `triggerAtZero` | `boolean` | No |
| `soundEventIndex` | `int` | No |
| `particles` | [ModelParticle](Version-2026.01.13-50e69c385-Data-Types#modelparticle)[] | Yes |

### EntityStatOnHit

| Field | Type | Nullable |
|-------|------|----------|
| `entityStatIndex` | `int` | No |
| `amount` | `float` | No |
| `multipliersPerEntitiesHit` | `float[]` | Yes |
| `multiplierPerExtraEntityHit` | `float` | No |

### EntityStatType

| Field | Type | Nullable |
|-------|------|----------|
| `id` | `String` | Yes |
| `min` | `float` | No |
| `max` | `float` | No |
| `minValueEffects` | [EntityStatEffects](Version-2026.01.13-50e69c385-Data-Types#entitystateffects) | Yes |
| `maxValueEffects` | [EntityStatEffects](Version-2026.01.13-50e69c385-Data-Types#entitystateffects) | Yes |
| `resetBehavior` | [EntityStatResetBehavior](Version-2026.01.13-50e69c385-Enums#entitystatresetbehavior) | No |

### EntityStatUpdate

| Field | Type | Nullable |
|-------|------|----------|
| `op` | [EntityStatOp](Version-2026.01.13-50e69c385-Enums#entitystatop) | No |
| `predictable` | `boolean` | No |
| `modifiers` | `Map<String, Modifier>` | Yes |
| `modifierKey` | `String` | Yes |
| `modifier` | [Modifier](Version-2026.01.13-50e69c385-Data-Types#modifier) | Yes |

### EntityUIComponent

| Field | Type | Nullable |
|-------|------|----------|
| `type` | [EntityUIType](Version-2026.01.13-50e69c385-Enums#entityuitype) | No |
| `hitboxOffset` | [Vector2f](Version-2026.01.13-50e69c385-Data-Types#vector2f) | Yes |
| `unknown` | `boolean` | No |
| `entityStatIndex` | `int` | No |
| `combatTextRandomPositionOffsetRange` | [RangeVector2f](Version-2026.01.13-50e69c385-Data-Types#rangevector2f) | Yes |
| `combatTextViewportMargin` | `float` | No |
| `combatTextDuration` | `float` | No |
| `combatTextHitAngleModifierStrength` | `float` | No |
| `combatTextFontSize` | `float` | No |
| `combatTextColor` | [Color](Version-2026.01.13-50e69c385-Data-Types#color) | Yes |
| `combatTextAnimationEvents` | [CombatTextEntityUIComponentAnimationEvent](Version-2026.01.13-50e69c385-Data-Types#combattextentityuicomponentanimationevent)[] | Yes |

### EntityUpdate

| Field | Type | Nullable |
|-------|------|----------|
| `networkId` | `int` | No |
| `removed` | [ComponentUpdateType](Version-2026.01.13-50e69c385-Enums#componentupdatetype)[] | Yes |
| `updates` | [ComponentUpdate](Version-2026.01.13-50e69c385-Data-Types#componentupdate)[] | Yes |

### EqualizerEffect

| Field | Type | Nullable |
|-------|------|----------|
| `id` | `String` | Yes |
| `lowGain` | `float` | No |
| `lowCutOff` | `float` | No |
| `lowMidGain` | `float` | No |
| `lowMidCenter` | `float` | No |
| `lowMidWidth` | `float` | No |
| `highMidGain` | `float` | No |
| `highMidCenter` | `float` | No |
| `highMidWidth` | `float` | No |
| `highGain` | `float` | No |
| `highCutOff` | `float` | No |

### Equipment

| Field | Type | Nullable |
|-------|------|----------|
| `armorIds` | `String[]` | Yes |
| `rightHandItemId` | `String` | Yes |
| `leftHandItemId` | `String` | Yes |

### ExtraResources

| Field | Type | Nullable |
|-------|------|----------|
| `resources` | [ItemQuantity](Version-2026.01.13-50e69c385-Data-Types#itemquantity)[] | Yes |

### FirstClickInteraction

| Field | Type | Nullable |
|-------|------|----------|
| `click` | `int` | No |
| `held` | `int` | No |

### FloatRange

| Field | Type | Nullable |
|-------|------|----------|
| `inclusiveMin` | `float` | No |
| `inclusiveMax` | `float` | No |

### Fluid

| Field | Type | Nullable |
|-------|------|----------|
| `id` | `String` | Yes |
| `maxFluidLevel` | `int` | No |
| `cubeTextures` | [BlockTextures](Version-2026.01.13-50e69c385-Data-Types#blocktextures)[] | Yes |
| `requiresAlphaBlending` | `boolean` | No |
| `opacity` | [Opacity](Version-2026.01.13-50e69c385-Enums#opacity) | No |
| `shaderEffect` | [ShaderType](Version-2026.01.13-50e69c385-Enums#shadertype)[] | Yes |
| `light` | [ColorLight](Version-2026.01.13-50e69c385-Data-Types#colorlight) | Yes |
| `fluidFXIndex` | `int` | No |
| `blockSoundSetIndex` | `int` | No |
| `blockParticleSetId` | `String` | Yes |
| `particleColor` | [Color](Version-2026.01.13-50e69c385-Data-Types#color) | Yes |
| `tagIndexes` | `int[]` | Yes |

### FluidFX

| Field | Type | Nullable |
|-------|------|----------|
| `id` | `String` | Yes |
| `shader` | [ShaderType](Version-2026.01.13-50e69c385-Enums#shadertype) | No |
| `fogMode` | [FluidFog](Version-2026.01.13-50e69c385-Enums#fluidfog) | No |
| `fogColor` | [Color](Version-2026.01.13-50e69c385-Data-Types#color) | Yes |
| `fogDistance` | [NearFar](Version-2026.01.13-50e69c385-Data-Types#nearfar) | Yes |
| `fogDepthStart` | `float` | No |
| `fogDepthFalloff` | `float` | No |
| `colorFilter` | [Color](Version-2026.01.13-50e69c385-Data-Types#color) | Yes |
| `colorSaturation` | `float` | No |
| `distortionAmplitude` | `float` | No |
| `distortionFrequency` | `float` | No |
| `particle` | [FluidParticle](Version-2026.01.13-50e69c385-Data-Types#fluidparticle) | Yes |
| `movementSettings` | [FluidFXMovementSettings](Version-2026.01.13-50e69c385-Data-Types#fluidfxmovementsettings) | Yes |

### FluidFXMovementSettings

| Field | Type | Nullable |
|-------|------|----------|
| `swimUpSpeed` | `float` | No |
| `swimDownSpeed` | `float` | No |
| `sinkSpeed` | `float` | No |
| `horizontalSpeedMultiplier` | `float` | No |
| `fieldOfViewMultiplier` | `float` | No |
| `entryVelocityMultiplier` | `float` | No |

### FluidParticle

| Field | Type | Nullable |
|-------|------|----------|
| `systemId` | `String` | Yes |
| `color` | [Color](Version-2026.01.13-50e69c385-Data-Types#color) | Yes |
| `scale` | `float` | No |

### FogOptions

| Field | Type | Nullable |
|-------|------|----------|
| `ignoreFogLimits` | `boolean` | No |
| `effectiveViewDistanceMultiplier` | `float` | No |
| `fogFarViewDistance` | `float` | No |
| `fogHeightCameraOffset` | `float` | No |
| `fogHeightCameraOverriden` | `boolean` | No |
| `fogHeightCameraFixed` | `float` | No |

### ForkedChainId

| Field | Type | Nullable |
|-------|------|----------|
| `entryIndex` | `int` | No |
| `subIndex` | `int` | No |
| `forkedId` | [ForkedChainId](Version-2026.01.13-50e69c385-Data-Types#forkedchainid) | Yes |

### FormattedMessage

| Field | Type | Nullable |
|-------|------|----------|
| `rawText` | `String` | Yes |
| `messageId` | `String` | Yes |
| `children` | [FormattedMessage](Version-2026.01.13-50e69c385-Data-Types#formattedmessage)[] | Yes |
| `params` | `Map<String, ParamValue>` | Yes |
| `messageParams` | `Map<String, FormattedMessage>` | Yes |
| `color` | `String` | Yes |
| `bold` | [MaybeBool](Version-2026.01.13-50e69c385-Enums#maybebool) | No |
| `italic` | [MaybeBool](Version-2026.01.13-50e69c385-Enums#maybebool) | No |
| `monospace` | [MaybeBool](Version-2026.01.13-50e69c385-Enums#maybebool) | No |
| `underlined` | [MaybeBool](Version-2026.01.13-50e69c385-Enums#maybebool) | No |
| `link` | `String` | Yes |
| `markupEnabled` | `boolean` | No |

### HalfFloatPosition

| Field | Type | Nullable |
|-------|------|----------|
| `x` | `short` | No |
| `y` | `short` | No |
| `z` | `short` | No |

### Harvesting

| Field | Type | Nullable |
|-------|------|----------|
| `itemId` | `String` | Yes |
| `dropListId` | `String` | Yes |

### HitEntity

| Field | Type | Nullable |
|-------|------|----------|
| `next` | `int` | No |
| `matchers` | [EntityMatcher](Version-2026.01.13-50e69c385-Data-Types#entitymatcher)[] | Yes |

### Hitbox

| Field | Type | Nullable |
|-------|------|----------|
| `minX` | `float` | No |
| `minY` | `float` | No |
| `minZ` | `float` | No |
| `maxX` | `float` | No |
| `maxY` | `float` | No |
| `maxZ` | `float` | No |

### HitboxCollisionConfig

| Field | Type | Nullable |
|-------|------|----------|
| `collisionType` | [CollisionType](Version-2026.01.13-50e69c385-Enums#collisiontype) | No |
| `softCollisionOffsetRatio` | `float` | No |

### HorizontalSelector

| Field | Type | Nullable |
|-------|------|----------|
| `extendTop` | `float` | No |
| `extendBottom` | `float` | No |
| `yawLength` | `float` | No |
| `yawStartOffset` | `float` | No |
| `pitchOffset` | `float` | No |
| `rollOffset` | `float` | No |
| `startDistance` | `float` | No |
| `endDistance` | `float` | No |
| `direction` | [HorizontalSelectorDirection](Version-2026.01.13-50e69c385-Enums#horizontalselectordirection) | No |
| `testLineOfSight` | `boolean` | No |

### HostAddress

| Field | Type | Nullable |
|-------|------|----------|
| `host` | `String` | No |
| `port` | `short` | No |

### IncrementCooldownInteraction

| Field | Type | Nullable |
|-------|------|----------|
| `cooldownId` | `String` | Yes |
| `cooldownIncrementTime` | `float` | No |
| `cooldownIncrementCharge` | `int` | No |
| `cooldownIncrementChargeTime` | `float` | No |
| `cooldownIncrementInterrupt` | `boolean` | No |

### InitialVelocity

| Field | Type | Nullable |
|-------|------|----------|
| `yaw` | [Rangef](Version-2026.01.13-50e69c385-Data-Types#rangef) | Yes |
| `pitch` | [Rangef](Version-2026.01.13-50e69c385-Data-Types#rangef) | Yes |
| `speed` | [Rangef](Version-2026.01.13-50e69c385-Data-Types#rangef) | Yes |

### InstantData

| Field | Type | Nullable |
|-------|------|----------|
| `seconds` | `long` | No |
| `nanos` | `int` | No |

### IntParamValue

*No fields documented*

### InteractionCamera

| Field | Type | Nullable |
|-------|------|----------|
| `time` | `float` | No |
| `position` | [Vector3f](Version-2026.01.13-50e69c385-Data-Types#vector3f) | Yes |
| `rotation` | [Direction](Version-2026.01.13-50e69c385-Data-Types#direction) | Yes |

### InteractionCameraSettings

| Field | Type | Nullable |
|-------|------|----------|
| `firstPerson` | [InteractionCamera](Version-2026.01.13-50e69c385-Data-Types#interactioncamera)[] | Yes |
| `thirdPerson` | [InteractionCamera](Version-2026.01.13-50e69c385-Data-Types#interactioncamera)[] | Yes |

### InteractionChainData

| Field | Type | Nullable |
|-------|------|----------|
| `entityId` | `int` | No |
| `proxyId` | `UUID` | No |
| `hitLocation` | [Vector3f](Version-2026.01.13-50e69c385-Data-Types#vector3f) | Yes |
| `hitDetail` | `String` | Yes |
| `blockPosition` | [BlockPosition](Version-2026.01.13-50e69c385-Data-Types#blockposition) | Yes |
| `targetSlot` | `int` | No |
| `hitNormal` | [Vector3f](Version-2026.01.13-50e69c385-Data-Types#vector3f) | Yes |

### InteractionConfiguration

| Field | Type | Nullable |
|-------|------|----------|
| `displayOutlines` | `boolean` | No |
| `debugOutlines` | `boolean` | No |
| `useDistance` | `Map<GameMode, Float>` | Yes |
| `allEntities` | `boolean` | No |
| `priorities` | `Map<InteractionType, InteractionPriority>` | Yes |

### InteractionCooldown

| Field | Type | Nullable |
|-------|------|----------|
| `cooldownId` | `String` | Yes |
| `cooldown` | `float` | No |
| `clickBypass` | `boolean` | No |
| `chargeTimes` | `float[]` | Yes |
| `skipCooldownReset` | `boolean` | No |
| `interruptRecharge` | `boolean` | No |

### InteractionEffects

| Field | Type | Nullable |
|-------|------|----------|
| `particles` | [ModelParticle](Version-2026.01.13-50e69c385-Data-Types#modelparticle)[] | Yes |
| `firstPersonParticles` | [ModelParticle](Version-2026.01.13-50e69c385-Data-Types#modelparticle)[] | Yes |
| `worldSoundEventIndex` | `int` | No |
| `localSoundEventIndex` | `int` | No |
| `trails` | [ModelTrail](Version-2026.01.13-50e69c385-Data-Types#modeltrail)[] | Yes |
| `waitForAnimationToFinish` | `boolean` | No |
| `itemPlayerAnimationsId` | `String` | Yes |
| `itemAnimationId` | `String` | Yes |
| `clearAnimationOnFinish` | `boolean` | No |
| `clearSoundEventOnFinish` | `boolean` | No |
| `cameraShake` | `CameraShakeEffect` | Yes |
| `movementEffects` | [MovementEffects](Version-2026.01.13-50e69c385-Data-Types#movementeffects) | Yes |
| `startDelay` | `float` | No |

### InteractionPriority

| Field | Type | Nullable |
|-------|------|----------|
| `values` | `Map<PrioritySlot, Integer>` | Yes |

### InteractionRules

| Field | Type | Nullable |
|-------|------|----------|
| `blockedBy` | [InteractionType](Version-2026.01.13-50e69c385-Enums#interactiontype)[] | Yes |
| `blocking` | [InteractionType](Version-2026.01.13-50e69c385-Enums#interactiontype)[] | Yes |
| `interruptedBy` | [InteractionType](Version-2026.01.13-50e69c385-Enums#interactiontype)[] | Yes |
| `interrupting` | [InteractionType](Version-2026.01.13-50e69c385-Enums#interactiontype)[] | Yes |
| `blockedByBypassIndex` | `int` | No |
| `blockingBypassIndex` | `int` | No |
| `interruptedByBypassIndex` | `int` | No |
| `interruptingBypassIndex` | `int` | No |

### InteractionSettings

| Field | Type | Nullable |
|-------|------|----------|
| `allowSkipOnClick` | `boolean` | No |

### InteractionSyncData

| Field | Type | Nullable |
|-------|------|----------|
| `state` | [InteractionState](Version-2026.01.13-50e69c385-Enums#interactionstate) | No |
| `progress` | `float` | No |
| `operationCounter` | `int` | No |
| `rootInteraction` | `int` | No |
| `totalForks` | `int` | No |
| `entityId` | `int` | No |
| `enteredRootInteraction` | `int` | No |
| `blockPosition` | [BlockPosition](Version-2026.01.13-50e69c385-Data-Types#blockposition) | Yes |
| `blockFace` | [BlockFace](Version-2026.01.13-50e69c385-Enums#blockface) | No |
| `blockRotation` | [BlockRotation](Version-2026.01.13-50e69c385-Data-Types#blockrotation) | Yes |
| `placedBlockId` | `int` | No |
| `chargeValue` | `float` | No |
| `forkCounts` | `Map<InteractionType, Integer>` | Yes |
| `chainingIndex` | `int` | No |
| `flagIndex` | `int` | No |
| `hitEntities` | [SelectedHitEntity](Version-2026.01.13-50e69c385-Data-Types#selectedhitentity)[] | Yes |
| `attackerPos` | [Position](Version-2026.01.13-50e69c385-Data-Types#position) | Yes |
| `attackerRot` | [Direction](Version-2026.01.13-50e69c385-Data-Types#direction) | Yes |
| `raycastHit` | [Position](Version-2026.01.13-50e69c385-Data-Types#position) | Yes |
| `raycastDistance` | `float` | No |
| `raycastNormal` | [Vector3f](Version-2026.01.13-50e69c385-Data-Types#vector3f) | Yes |
| `movementDirection` | [MovementDirection](Version-2026.01.13-50e69c385-Enums#movementdirection) | No |
| `applyForceState` | [ApplyForceState](Version-2026.01.13-50e69c385-Enums#applyforcestate) | No |
| `nextLabel` | `int` | No |
| `generatedUUID` | `UUID` | Yes |

### IntersectionHighlight

| Field | Type | Nullable |
|-------|------|----------|
| `highlightThreshold` | `float` | No |
| `highlightColor` | [Color](Version-2026.01.13-50e69c385-Data-Types#color) | Yes |

### InventorySection

| Field | Type | Nullable |
|-------|------|----------|
| `items` | `Map<Integer, ItemWithAllMetadata>` | Yes |
| `capacity` | `short` | No |

### ItemAnimation

| Field | Type | Nullable |
|-------|------|----------|
| `thirdPerson` | `String` | Yes |
| `thirdPersonMoving` | `String` | Yes |
| `thirdPersonFace` | `String` | Yes |
| `firstPerson` | `String` | Yes |
| `firstPersonOverride` | `String` | Yes |
| `keepPreviousFirstPersonAnimation` | `boolean` | No |
| `speed` | `float` | No |
| `blendingDuration` | `float` | No |
| `looping` | `boolean` | No |
| `clipsGeometry` | `boolean` | No |

### ItemAppearanceCondition

| Field | Type | Nullable |
|-------|------|----------|
| `particles` | [ModelParticle](Version-2026.01.13-50e69c385-Data-Types#modelparticle)[] | Yes |
| `firstPersonParticles` | [ModelParticle](Version-2026.01.13-50e69c385-Data-Types#modelparticle)[] | Yes |
| `model` | `String` | Yes |
| `texture` | `String` | Yes |
| `modelVFXId` | `String` | Yes |
| `condition` | [FloatRange](Version-2026.01.13-50e69c385-Data-Types#floatrange) | Yes |
| `conditionValueType` | [ValueType](Version-2026.01.13-50e69c385-Enums#valuetype) | No |
| `localSoundEventId` | `int` | No |
| `worldSoundEventId` | `int` | No |

### ItemArmor

| Field | Type | Nullable |
|-------|------|----------|
| `armorSlot` | [ItemArmorSlot](Version-2026.01.13-50e69c385-Enums#itemarmorslot) | No |
| `cosmeticsToHide` | [Cosmetic](Version-2026.01.13-50e69c385-Enums#cosmetic)[] | Yes |
| `baseDamageResistance` | `double` | No |

### ItemBase

| Field | Type | Nullable |
|-------|------|----------|
| `id` | `String` | Yes |
| `model` | `String` | Yes |
| `scale` | `float` | No |
| `texture` | `String` | Yes |
| `animation` | `String` | Yes |
| `playerAnimationsId` | `String` | Yes |
| `usePlayerAnimations` | `boolean` | No |
| `maxStack` | `int` | No |
| `reticleIndex` | `int` | No |
| `icon` | `String` | Yes |
| `iconProperties` | [AssetIconProperties](Version-2026.01.13-50e69c385-Data-Types#asseticonproperties) | Yes |
| `translationProperties` | [ItemTranslationProperties](Version-2026.01.13-50e69c385-Data-Types#itemtranslationproperties) | Yes |
| `itemLevel` | `int` | No |
| `qualityIndex` | `int` | No |
| `resourceTypes` | [ItemResourceType](Version-2026.01.13-50e69c385-Data-Types#itemresourcetype)[] | Yes |
| `consumable` | `boolean` | No |
| `variant` | `boolean` | No |
| `blockId` | `int` | No |
| `tool` | [ItemTool](Version-2026.01.13-50e69c385-Data-Types#itemtool) | Yes |
| `weapon` | [ItemWeapon](Version-2026.01.13-50e69c385-Data-Types#itemweapon) | Yes |
| `armor` | [ItemArmor](Version-2026.01.13-50e69c385-Data-Types#itemarmor) | Yes |
| `gliderConfig` | [ItemGlider](Version-2026.01.13-50e69c385-Data-Types#itemglider) | Yes |
| `utility` | [ItemUtility](Version-2026.01.13-50e69c385-Data-Types#itemutility) | Yes |
| `blockSelectorTool` | [BlockSelectorToolData](Version-2026.01.13-50e69c385-Data-Types#blockselectortooldata) | Yes |
| `builderToolData` | [ItemBuilderToolData](Version-2026.01.13-50e69c385-Data-Types#itembuildertooldata) | Yes |
| `itemEntity` | [ItemEntityConfig](Version-2026.01.13-50e69c385-Data-Types#itementityconfig) | Yes |
| `set` | `String` | Yes |
| `categories` | `String[]` | Yes |
| `particles` | [ModelParticle](Version-2026.01.13-50e69c385-Data-Types#modelparticle)[] | Yes |
| `firstPersonParticles` | [ModelParticle](Version-2026.01.13-50e69c385-Data-Types#modelparticle)[] | Yes |
| `trails` | [ModelTrail](Version-2026.01.13-50e69c385-Data-Types#modeltrail)[] | Yes |
| `light` | [ColorLight](Version-2026.01.13-50e69c385-Data-Types#colorlight) | Yes |
| `durability` | `double` | No |
| `soundEventIndex` | `int` | No |
| `itemSoundSetIndex` | `int` | No |
| `interactions` | `Map<InteractionType, Integer>` | Yes |
| `interactionVars` | `Map<String, Integer>` | Yes |
| `interactionConfig` | [InteractionConfiguration](Version-2026.01.13-50e69c385-Data-Types#interactionconfiguration) | Yes |
| `droppedItemAnimation` | `String` | Yes |
| `tagIndexes` | `int[]` | Yes |
| `displayEntityStatsHUD` | `int[]` | Yes |
| `pullbackConfig` | [ItemPullbackConfiguration](Version-2026.01.13-50e69c385-Data-Types#itempullbackconfiguration) | Yes |
| `clipsGeometry` | `boolean` | No |
| `renderDeployablePreview` | `boolean` | No |

### ItemBuilderToolData

| Field | Type | Nullable |
|-------|------|----------|
| `ui` | `String[]` | Yes |
| `tools` | [BuilderToolState](Version-2026.01.13-50e69c385-Data-Types#buildertoolstate)[] | Yes |

### ItemCategory

| Field | Type | Nullable |
|-------|------|----------|
| `id` | `String` | Yes |
| `name` | `String` | Yes |
| `icon` | `String` | Yes |
| `order` | `int` | No |
| `infoDisplayMode` | [ItemGridInfoDisplayMode](Version-2026.01.13-50e69c385-Enums#itemgridinfodisplaymode) | No |
| `children` | [ItemCategory](Version-2026.01.13-50e69c385-Data-Types#itemcategory)[] | Yes |

### ItemEntityConfig

| Field | Type | Nullable |
|-------|------|----------|
| `particleSystemId` | `String` | Yes |
| `particleColor` | [Color](Version-2026.01.13-50e69c385-Data-Types#color) | Yes |
| `showItemParticles` | `boolean` | No |

### ItemGlider

| Field | Type | Nullable |
|-------|------|----------|
| `terminalVelocity` | `float` | No |
| `fallSpeedMultiplier` | `float` | No |
| `horizontalSpeedMultiplier` | `float` | No |
| `speed` | `float` | No |

### ItemLibrary

| Field | Type | Nullable |
|-------|------|----------|
| `items` | [ItemBase](Version-2026.01.13-50e69c385-Data-Types#itembase)[] | Yes |
| `blockMap` | `Map<Integer, String>[]` | Yes |

### ItemPlayerAnimations

| Field | Type | Nullable |
|-------|------|----------|
| `id` | `String` | Yes |
| `animations` | `Map<String, ItemAnimation>` | Yes |
| `wiggleWeights` | [WiggleWeights](Version-2026.01.13-50e69c385-Data-Types#wiggleweights) | Yes |
| `camera` | [CameraSettings](Version-2026.01.13-50e69c385-Data-Types#camerasettings) | Yes |
| `pullbackConfig` | [ItemPullbackConfiguration](Version-2026.01.13-50e69c385-Data-Types#itempullbackconfiguration) | Yes |
| `useFirstPersonOverride` | `boolean` | No |

### ItemPullbackConfiguration

| Field | Type | Nullable |
|-------|------|----------|
| `leftOffsetOverride` | [Vector3f](Version-2026.01.13-50e69c385-Data-Types#vector3f) | Yes |
| `leftRotationOverride` | [Vector3f](Version-2026.01.13-50e69c385-Data-Types#vector3f) | Yes |
| `rightOffsetOverride` | [Vector3f](Version-2026.01.13-50e69c385-Data-Types#vector3f) | Yes |
| `rightRotationOverride` | [Vector3f](Version-2026.01.13-50e69c385-Data-Types#vector3f) | Yes |

### ItemQuality

| Field | Type | Nullable |
|-------|------|----------|
| `id` | `String` | Yes |
| `itemTooltipTexture` | `String` | Yes |
| `itemTooltipArrowTexture` | `String` | Yes |
| `slotTexture` | `String` | Yes |
| `blockSlotTexture` | `String` | Yes |
| `specialSlotTexture` | `String` | Yes |
| `textColor` | [Color](Version-2026.01.13-50e69c385-Data-Types#color) | Yes |
| `localizationKey` | `String` | Yes |
| `visibleQualityLabel` | `boolean` | No |
| `renderSpecialSlot` | `boolean` | No |
| `hideFromSearch` | `boolean` | No |

### ItemQuantity

| Field | Type | Nullable |
|-------|------|----------|
| `itemId` | `String` | Yes |
| `quantity` | `int` | No |

### ItemResourceType

| Field | Type | Nullable |
|-------|------|----------|
| `id` | `String` | Yes |
| `quantity` | `int` | No |

### ItemReticle

| Field | Type | Nullable |
|-------|------|----------|
| `hideBase` | `boolean` | No |
| `parts` | `String[]` | Yes |
| `duration` | `float` | No |

### ItemReticleConfig

| Field | Type | Nullable |
|-------|------|----------|
| `id` | `String` | Yes |
| `base` | `String[]` | Yes |
| `serverEvents` | `Map<Integer, ItemReticle>` | Yes |
| `clientEvents` | `Map<ItemReticleClientEvent, ItemReticle>` | Yes |

### ItemSoundSet

| Field | Type | Nullable |
|-------|------|----------|
| `id` | `String` | Yes |
| `soundEventIndices` | `Map<ItemSoundEvent, Integer>` | Yes |

### ItemTool

| Field | Type | Nullable |
|-------|------|----------|
| `specs` | [ItemToolSpec](Version-2026.01.13-50e69c385-Data-Types#itemtoolspec)[] | Yes |
| `speed` | `float` | No |

### ItemToolSpec

| Field | Type | Nullable |
|-------|------|----------|
| `gatherType` | `String` | Yes |
| `power` | `float` | No |
| `quality` | `int` | No |

### ItemTranslationProperties

| Field | Type | Nullable |
|-------|------|----------|
| `name` | `String` | Yes |
| `description` | `String` | Yes |

### ItemUtility

| Field | Type | Nullable |
|-------|------|----------|
| `usable` | `boolean` | No |
| `compatible` | `boolean` | No |
| `entityStatsToClear` | `int[]` | Yes |

### ItemWeapon

| Field | Type | Nullable |
|-------|------|----------|
| `entityStatsToClear` | `int[]` | Yes |
| `renderDualWielded` | `boolean` | No |

### ItemWithAllMetadata

| Field | Type | Nullable |
|-------|------|----------|
| `itemId` | `String` | No |
| `quantity` | `int` | No |
| `durability` | `double` | No |
| `maxDurability` | `double` | No |
| `overrideDroppedItemAnimation` | `boolean` | No |
| `metadata` | `String` | Yes |

### LongParamValue

*No fields documented*

### MaterialQuantity

| Field | Type | Nullable |
|-------|------|----------|
| `itemId` | `String` | Yes |
| `itemTag` | `int` | No |
| `resourceTypeId` | `String` | Yes |
| `quantity` | `int` | No |

### MemoriesConditionInteraction

| Field | Type | Nullable |
|-------|------|----------|
| `memoriesNext` | `Map<Integer, Integer>` | Yes |
| `failed` | `int` | No |

### Model

| Field | Type | Nullable |
|-------|------|----------|
| `assetId` | `String` | Yes |
| `path` | `String` | Yes |
| `texture` | `String` | Yes |
| `gradientSet` | `String` | Yes |
| `gradientId` | `String` | Yes |
| `camera` | [CameraSettings](Version-2026.01.13-50e69c385-Data-Types#camerasettings) | Yes |
| `scale` | `float` | No |
| `eyeHeight` | `float` | No |
| `crouchOffset` | `float` | No |
| `animationSets` | `Map<String, AnimationSet>` | Yes |
| `attachments` | [ModelAttachment](Version-2026.01.13-50e69c385-Data-Types#modelattachment)[] | Yes |
| `hitbox` | [Hitbox](Version-2026.01.13-50e69c385-Data-Types#hitbox) | Yes |
| `particles` | [ModelParticle](Version-2026.01.13-50e69c385-Data-Types#modelparticle)[] | Yes |
| `trails` | [ModelTrail](Version-2026.01.13-50e69c385-Data-Types#modeltrail)[] | Yes |
| `light` | [ColorLight](Version-2026.01.13-50e69c385-Data-Types#colorlight) | Yes |
| `phobia` | [Phobia](Version-2026.01.13-50e69c385-Enums#phobia) | No |
| `phobiaModel` | [Model](Version-2026.01.13-50e69c385-Data-Types#model) | Yes |

### ModelAttachment

| Field | Type | Nullable |
|-------|------|----------|
| `model` | `String` | Yes |
| `texture` | `String` | Yes |
| `gradientSet` | `String` | Yes |
| `gradientId` | `String` | Yes |

### ModelDisplay

| Field | Type | Nullable |
|-------|------|----------|
| `node` | `String` | Yes |
| `attachTo` | `String` | Yes |
| `translation` | [Vector3f](Version-2026.01.13-50e69c385-Data-Types#vector3f) | Yes |
| `rotation` | [Vector3f](Version-2026.01.13-50e69c385-Data-Types#vector3f) | Yes |
| `scale` | [Vector3f](Version-2026.01.13-50e69c385-Data-Types#vector3f) | Yes |

### ModelOverride

| Field | Type | Nullable |
|-------|------|----------|
| `model` | `String` | Yes |
| `texture` | `String` | Yes |
| `animationSets` | `Map<String, AnimationSet>` | Yes |

### ModelParticle

| Field | Type | Nullable |
|-------|------|----------|
| `systemId` | `String` | Yes |
| `scale` | `float` | No |
| `color` | [Color](Version-2026.01.13-50e69c385-Data-Types#color) | Yes |
| `targetEntityPart` | [EntityPart](Version-2026.01.13-50e69c385-Enums#entitypart) | No |
| `targetNodeName` | `String` | Yes |
| `positionOffset` | [Vector3f](Version-2026.01.13-50e69c385-Data-Types#vector3f) | Yes |
| `rotationOffset` | [Direction](Version-2026.01.13-50e69c385-Data-Types#direction) | Yes |
| `detachedFromModel` | `boolean` | No |

### ModelTexture

| Field | Type | Nullable |
|-------|------|----------|
| `texture` | `String` | Yes |
| `weight` | `float` | No |

### ModelTrail

| Field | Type | Nullable |
|-------|------|----------|
| `trailId` | `String` | Yes |
| `targetEntityPart` | [EntityPart](Version-2026.01.13-50e69c385-Enums#entitypart) | No |
| `targetNodeName` | `String` | Yes |
| `positionOffset` | [Vector3f](Version-2026.01.13-50e69c385-Data-Types#vector3f) | Yes |
| `rotationOffset` | [Direction](Version-2026.01.13-50e69c385-Data-Types#direction) | Yes |
| `fixedRotation` | `boolean` | No |

### ModelTransform

| Field | Type | Nullable |
|-------|------|----------|
| `position` | [Position](Version-2026.01.13-50e69c385-Data-Types#position) | Yes |
| `bodyOrientation` | [Direction](Version-2026.01.13-50e69c385-Data-Types#direction) | Yes |
| `lookOrientation` | [Direction](Version-2026.01.13-50e69c385-Data-Types#direction) | Yes |

### ModelVFX

| Field | Type | Nullable |
|-------|------|----------|
| `id` | `String` | Yes |
| `switchTo` | [SwitchTo](Version-2026.01.13-50e69c385-Enums#switchto) | No |
| `effectDirection` | [EffectDirection](Version-2026.01.13-50e69c385-Enums#effectdirection) | No |
| `animationDuration` | `float` | No |
| `animationRange` | [Vector2f](Version-2026.01.13-50e69c385-Data-Types#vector2f) | Yes |
| `loopOption` | [LoopOption](Version-2026.01.13-50e69c385-Enums#loopoption) | No |
| `curveType` | [CurveType](Version-2026.01.13-50e69c385-Enums#curvetype) | No |
| `highlightColor` | [Color](Version-2026.01.13-50e69c385-Data-Types#color) | Yes |
| `highlightThickness` | `float` | No |
| `useBloomOnHighlight` | `boolean` | No |
| `useProgessiveHighlight` | `boolean` | No |
| `noiseScale` | [Vector2f](Version-2026.01.13-50e69c385-Data-Types#vector2f) | Yes |
| `noiseScrollSpeed` | [Vector2f](Version-2026.01.13-50e69c385-Data-Types#vector2f) | Yes |
| `postColor` | [Color](Version-2026.01.13-50e69c385-Data-Types#color) | Yes |
| `postColorOpacity` | `float` | No |

### Modifier

| Field | Type | Nullable |
|-------|------|----------|
| `target` | [ModifierTarget](Version-2026.01.13-50e69c385-Enums#modifiertarget) | No |
| `calculationType` | [CalculationType](Version-2026.01.13-50e69c385-Enums#calculationtype) | No |
| `amount` | `float` | No |

### ModifyInventoryInteraction

| Field | Type | Nullable |
|-------|------|----------|
| `requiredGameMode` | [GameMode](Version-2026.01.13-50e69c385-Enums#gamemode) | Yes |
| `itemToRemove` | [ItemWithAllMetadata](Version-2026.01.13-50e69c385-Data-Types#itemwithallmetadata) | Yes |
| `adjustHeldItemQuantity` | `int` | No |
| `itemToAdd` | [ItemWithAllMetadata](Version-2026.01.13-50e69c385-Data-Types#itemwithallmetadata) | Yes |
| `brokenItem` | `String` | Yes |
| `adjustHeldItemDurability` | `double` | No |

### MountedUpdate

| Field | Type | Nullable |
|-------|------|----------|
| `mountedToEntity` | `int` | No |
| `attachmentOffset` | [Vector3f](Version-2026.01.13-50e69c385-Data-Types#vector3f) | Yes |
| `controller` | [MountController](Version-2026.01.13-50e69c385-Enums#mountcontroller) | No |
| `block` | [BlockMount](Version-2026.01.13-50e69c385-Data-Types#blockmount) | Yes |

### MouseButtonEvent

| Field | Type | Nullable |
|-------|------|----------|
| `mouseButtonType` | [MouseButtonType](Version-2026.01.13-50e69c385-Enums#mousebuttontype) | No |
| `state` | [MouseButtonState](Version-2026.01.13-50e69c385-Enums#mousebuttonstate) | No |
| `clicks` | `byte` | No |

### MouseMotionEvent

| Field | Type | Nullable |
|-------|------|----------|
| `mouseButtonType` | [MouseButtonType](Version-2026.01.13-50e69c385-Enums#mousebuttontype)[] | Yes |
| `relativeMotion` | [Vector2i](Version-2026.01.13-50e69c385-Data-Types#vector2i) | Yes |

### MovementConditionInteraction

| Field | Type | Nullable |
|-------|------|----------|
| `forward` | `int` | No |
| `back` | `int` | No |
| `left` | `int` | No |
| `right` | `int` | No |
| `forwardLeft` | `int` | No |
| `forwardRight` | `int` | No |
| `backLeft` | `int` | No |
| `backRight` | `int` | No |

### MovementEffects

| Field | Type | Nullable |
|-------|------|----------|
| `disableForward` | `boolean` | No |
| `disableBackward` | `boolean` | No |
| `disableLeft` | `boolean` | No |
| `disableRight` | `boolean` | No |
| `disableSprint` | `boolean` | No |
| `disableJump` | `boolean` | No |
| `disableCrouch` | `boolean` | No |

### MovementSettings

| Field | Type | Nullable |
|-------|------|----------|
| `mass` | `float` | No |
| `dragCoefficient` | `float` | No |
| `invertedGravity` | `boolean` | No |
| `velocityResistance` | `float` | No |
| `jumpForce` | `float` | No |
| `swimJumpForce` | `float` | No |
| `jumpBufferDuration` | `float` | No |
| `jumpBufferMaxYVelocity` | `float` | No |
| `acceleration` | `float` | No |
| `airDragMin` | `float` | No |
| `airDragMax` | `float` | No |
| `airDragMinSpeed` | `float` | No |
| `airDragMaxSpeed` | `float` | No |
| `airFrictionMin` | `float` | No |
| `airFrictionMax` | `float` | No |
| `airFrictionMinSpeed` | `float` | No |
| `airFrictionMaxSpeed` | `float` | No |
| `airSpeedMultiplier` | `float` | No |
| `airControlMinSpeed` | `float` | No |
| `airControlMaxSpeed` | `float` | No |
| `airControlMinMultiplier` | `float` | No |
| `airControlMaxMultiplier` | `float` | No |
| `comboAirSpeedMultiplier` | `float` | No |
| `baseSpeed` | `float` | No |
| `climbSpeed` | `float` | No |
| `climbSpeedLateral` | `float` | No |
| `climbUpSprintSpeed` | `float` | No |
| `climbDownSprintSpeed` | `float` | No |
| `horizontalFlySpeed` | `float` | No |
| `verticalFlySpeed` | `float` | No |
| `maxSpeedMultiplier` | `float` | No |
| `minSpeedMultiplier` | `float` | No |
| `wishDirectionGravityX` | `float` | No |
| `wishDirectionGravityY` | `float` | No |
| `wishDirectionWeightX` | `float` | No |
| `wishDirectionWeightY` | `float` | No |
| `canFly` | `boolean` | No |
| `collisionExpulsionForce` | `float` | No |
| `forwardWalkSpeedMultiplier` | `float` | No |
| `backwardWalkSpeedMultiplier` | `float` | No |
| `strafeWalkSpeedMultiplier` | `float` | No |
| `forwardRunSpeedMultiplier` | `float` | No |
| `backwardRunSpeedMultiplier` | `float` | No |
| `strafeRunSpeedMultiplier` | `float` | No |
| `forwardCrouchSpeedMultiplier` | `float` | No |
| `backwardCrouchSpeedMultiplier` | `float` | No |
| `strafeCrouchSpeedMultiplier` | `float` | No |
| `forwardSprintSpeedMultiplier` | `float` | No |
| `variableJumpFallForce` | `float` | No |
| `fallEffectDuration` | `float` | No |
| `fallJumpForce` | `float` | No |
| `fallMomentumLoss` | `float` | No |
| `autoJumpObstacleSpeedLoss` | `float` | No |
| `autoJumpObstacleSprintSpeedLoss` | `float` | No |
| `autoJumpObstacleEffectDuration` | `float` | No |
| `autoJumpObstacleSprintEffectDuration` | `float` | No |
| `autoJumpObstacleMaxAngle` | `float` | No |
| `autoJumpDisableJumping` | `boolean` | No |
| `minSlideEntrySpeed` | `float` | No |
| `slideExitSpeed` | `float` | No |
| `minFallSpeedToEngageRoll` | `float` | No |
| `maxFallSpeedToEngageRoll` | `float` | No |
| `rollStartSpeedModifier` | `float` | No |
| `rollExitSpeedModifier` | `float` | No |
| `rollTimeToComplete` | `float` | No |

### MovementStates

| Field | Type | Nullable |
|-------|------|----------|
| `idle` | `boolean` | No |
| `horizontalIdle` | `boolean` | No |
| `jumping` | `boolean` | No |
| `flying` | `boolean` | No |
| `walking` | `boolean` | No |
| `running` | `boolean` | No |
| `sprinting` | `boolean` | No |
| `crouching` | `boolean` | No |
| `forcedCrouching` | `boolean` | No |
| `falling` | `boolean` | No |
| `climbing` | `boolean` | No |
| `inFluid` | `boolean` | No |
| `swimming` | `boolean` | No |
| `swimJumping` | `boolean` | No |
| `onGround` | `boolean` | No |
| `mantling` | `boolean` | No |
| `sliding` | `boolean` | No |
| `mounting` | `boolean` | No |
| `rolling` | `boolean` | No |
| `sitting` | `boolean` | No |
| `gliding` | `boolean` | No |
| `sleeping` | `boolean` | No |

### Nameplate

| Field | Type | Nullable |
|-------|------|----------|
| `text` | `String` | Yes |

### NearFar

| Field | Type | Nullable |
|-------|------|----------|
| `near` | `float` | No |
| `far` | `float` | No |

### NoiseConfig

| Field | Type | Nullable |
|-------|------|----------|
| `seed` | `int` | No |
| `type` | [NoiseType](Version-2026.01.13-50e69c385-Enums#noisetype) | No |
| `frequency` | `float` | No |
| `amplitude` | `float` | No |
| `clamp` | [ClampConfig](Version-2026.01.13-50e69c385-Data-Types#clampconfig) | Yes |

### Objective

| Field | Type | Nullable |
|-------|------|----------|
| `objectiveUuid` | `UUID` | No |
| `objectiveTitleKey` | `String` | Yes |
| `objectiveDescriptionKey` | `String` | Yes |
| `objectiveLineId` | `String` | Yes |
| `tasks` | [ObjectiveTask](Version-2026.01.13-50e69c385-Data-Types#objectivetask)[] | Yes |

### ObjectiveTask

| Field | Type | Nullable |
|-------|------|----------|
| `taskDescriptionKey` | `String` | Yes |
| `currentCompletion` | `int` | No |
| `completionNeeded` | `int` | No |

### OffsetNoise

| Field | Type | Nullable |
|-------|------|----------|
| `x` | [NoiseConfig](Version-2026.01.13-50e69c385-Data-Types#noiseconfig)[] | Yes |
| `y` | [NoiseConfig](Version-2026.01.13-50e69c385-Data-Types#noiseconfig)[] | Yes |
| `z` | [NoiseConfig](Version-2026.01.13-50e69c385-Data-Types#noiseconfig)[] | Yes |

### ParallelInteraction

| Field | Type | Nullable |
|-------|------|----------|
| `next` | `int[]` | Yes |

### Particle

| Field | Type | Nullable |
|-------|------|----------|
| `texturePath` | `String` | Yes |
| `frameSize` | [Size](Version-2026.01.13-50e69c385-Data-Types#size) | Yes |
| `uvOption` | [ParticleUVOption](Version-2026.01.13-50e69c385-Enums#particleuvoption) | No |
| `scaleRatioConstraint` | [ParticleScaleRatioConstraint](Version-2026.01.13-50e69c385-Enums#particlescaleratioconstraint) | No |
| `softParticles` | [SoftParticle](Version-2026.01.13-50e69c385-Enums#softparticle) | No |
| `softParticlesFadeFactor` | `float` | No |
| `useSpriteBlending` | `boolean` | No |
| `initialAnimationFrame` | [ParticleAnimationFrame](Version-2026.01.13-50e69c385-Data-Types#particleanimationframe) | Yes |
| `collisionAnimationFrame` | [ParticleAnimationFrame](Version-2026.01.13-50e69c385-Data-Types#particleanimationframe) | Yes |
| `animationFrames` | `Map<Integer, ParticleAnimationFrame>` | Yes |

### ParticleAnimationFrame

| Field | Type | Nullable |
|-------|------|----------|
| `frameIndex` | [Range](Version-2026.01.13-50e69c385-Data-Types#range) | Yes |
| `scale` | [RangeVector2f](Version-2026.01.13-50e69c385-Data-Types#rangevector2f) | Yes |
| `rotation` | [RangeVector3f](Version-2026.01.13-50e69c385-Data-Types#rangevector3f) | Yes |
| `color` | [Color](Version-2026.01.13-50e69c385-Data-Types#color) | Yes |
| `opacity` | `float` | No |

### ParticleAttractor

| Field | Type | Nullable |
|-------|------|----------|
| `position` | [Vector3f](Version-2026.01.13-50e69c385-Data-Types#vector3f) | Yes |
| `radialAxis` | [Vector3f](Version-2026.01.13-50e69c385-Data-Types#vector3f) | Yes |
| `trailPositionMultiplier` | `float` | No |
| `radius` | `float` | No |
| `radialAcceleration` | `float` | No |
| `radialTangentAcceleration` | `float` | No |
| `linearAcceleration` | [Vector3f](Version-2026.01.13-50e69c385-Data-Types#vector3f) | Yes |
| `radialImpulse` | `float` | No |
| `radialTangentImpulse` | `float` | No |
| `linearImpulse` | [Vector3f](Version-2026.01.13-50e69c385-Data-Types#vector3f) | Yes |
| `dampingMultiplier` | [Vector3f](Version-2026.01.13-50e69c385-Data-Types#vector3f) | Yes |

### ParticleCollision

| Field | Type | Nullable |
|-------|------|----------|
| `blockType` | [ParticleCollisionBlockType](Version-2026.01.13-50e69c385-Enums#particlecollisionblocktype) | No |
| `action` | [ParticleCollisionAction](Version-2026.01.13-50e69c385-Enums#particlecollisionaction) | No |
| `particleRotationInfluence` | [ParticleRotationInfluence](Version-2026.01.13-50e69c385-Enums#particlerotationinfluence) | No |

### ParticleSpawner

| Field | Type | Nullable |
|-------|------|----------|
| `id` | `String` | Yes |
| `particle` | [Particle](Version-2026.01.13-50e69c385-Data-Types#particle) | Yes |
| `shape` | [EmitShape](Version-2026.01.13-50e69c385-Enums#emitshape) | No |
| `emitOffset` | [RangeVector3f](Version-2026.01.13-50e69c385-Data-Types#rangevector3f) | Yes |
| `cameraOffset` | `float` | No |
| `useEmitDirection` | `boolean` | No |
| `lifeSpan` | `float` | No |
| `spawnRate` | [Rangef](Version-2026.01.13-50e69c385-Data-Types#rangef) | Yes |
| `spawnBurst` | `boolean` | No |
| `waveDelay` | [Rangef](Version-2026.01.13-50e69c385-Data-Types#rangef) | Yes |
| `totalParticles` | [Range](Version-2026.01.13-50e69c385-Data-Types#range) | Yes |
| `maxConcurrentParticles` | `int` | No |
| `initialVelocity` | [InitialVelocity](Version-2026.01.13-50e69c385-Data-Types#initialvelocity) | Yes |
| `velocityStretchMultiplier` | `float` | No |
| `particleRotationInfluence` | [ParticleRotationInfluence](Version-2026.01.13-50e69c385-Enums#particlerotationinfluence) | No |
| `particleRotateWithSpawner` | `boolean` | No |
| `isLowRes` | `boolean` | No |
| `trailSpawnerPositionMultiplier` | `float` | No |
| `trailSpawnerRotationMultiplier` | `float` | No |
| `particleCollision` | [ParticleCollision](Version-2026.01.13-50e69c385-Data-Types#particlecollision) | Yes |
| `renderMode` | [FXRenderMode](Version-2026.01.13-50e69c385-Enums#fxrendermode) | No |
| `lightInfluence` | `float` | No |
| `linearFiltering` | `boolean` | No |
| `particleLifeSpan` | [Rangef](Version-2026.01.13-50e69c385-Data-Types#rangef) | Yes |
| `uvMotion` | [UVMotion](Version-2026.01.13-50e69c385-Data-Types#uvmotion) | Yes |
| `attractors` | [ParticleAttractor](Version-2026.01.13-50e69c385-Data-Types#particleattractor)[] | Yes |
| `intersectionHighlight` | [IntersectionHighlight](Version-2026.01.13-50e69c385-Data-Types#intersectionhighlight) | Yes |

### ParticleSpawnerGroup

| Field | Type | Nullable |
|-------|------|----------|
| `spawnerId` | `String` | Yes |
| `positionOffset` | [Vector3f](Version-2026.01.13-50e69c385-Data-Types#vector3f) | Yes |
| `rotationOffset` | [Direction](Version-2026.01.13-50e69c385-Data-Types#direction) | Yes |
| `fixedRotation` | `boolean` | No |
| `startDelay` | `float` | No |
| `spawnRate` | [Rangef](Version-2026.01.13-50e69c385-Data-Types#rangef) | Yes |
| `waveDelay` | [Rangef](Version-2026.01.13-50e69c385-Data-Types#rangef) | Yes |
| `totalSpawners` | `int` | No |
| `maxConcurrent` | `int` | No |
| `initialVelocity` | [InitialVelocity](Version-2026.01.13-50e69c385-Data-Types#initialvelocity) | Yes |
| `emitOffset` | [RangeVector3f](Version-2026.01.13-50e69c385-Data-Types#rangevector3f) | Yes |
| `lifeSpan` | [Rangef](Version-2026.01.13-50e69c385-Data-Types#rangef) | Yes |
| `attractors` | [ParticleAttractor](Version-2026.01.13-50e69c385-Data-Types#particleattractor)[] | Yes |

### ParticleSystem

| Field | Type | Nullable |
|-------|------|----------|
| `id` | `String` | Yes |
| `spawners` | [ParticleSpawnerGroup](Version-2026.01.13-50e69c385-Data-Types#particlespawnergroup)[] | Yes |
| `lifeSpan` | `float` | No |
| `cullDistance` | `float` | No |
| `boundingRadius` | `float` | No |
| `isImportant` | `boolean` | No |

### PhysicsConfig

| Field | Type | Nullable |
|-------|------|----------|
| `type` | [PhysicsType](Version-2026.01.13-50e69c385-Enums#physicstype) | No |
| `density` | `double` | No |
| `gravity` | `double` | No |
| `bounciness` | `double` | No |
| `bounceCount` | `int` | No |
| `bounceLimit` | `double` | No |
| `sticksVertically` | `boolean` | No |
| `computeYaw` | `boolean` | No |
| `computePitch` | `boolean` | No |
| `rotationMode` | [RotationMode](Version-2026.01.13-50e69c385-Enums#rotationmode) | No |
| `moveOutOfSolidSpeed` | `double` | No |
| `terminalVelocityAir` | `double` | No |
| `densityAir` | `double` | No |
| `terminalVelocityWater` | `double` | No |
| `densityWater` | `double` | No |
| `hitWaterImpulseLoss` | `double` | No |
| `rotationForce` | `double` | No |
| `speedRotationFactor` | `float` | No |
| `swimmingDampingFactor` | `double` | No |
| `allowRolling` | `boolean` | No |
| `rollingFrictionFactor` | `double` | No |
| `rollingSpeed` | `float` | No |

### PickBlockInteraction

*No fields documented*

### PlaceBlockInteraction

| Field | Type | Nullable |
|-------|------|----------|
| `blockId` | `int` | No |
| `removeItemInHand` | `boolean` | No |
| `allowDragPlacement` | `boolean` | No |

### PlayerSkin

| Field | Type | Nullable |
|-------|------|----------|
| `bodyCharacteristic` | `String` | Yes |
| `underwear` | `String` | Yes |
| `face` | `String` | Yes |
| `eyes` | `String` | Yes |
| `ears` | `String` | Yes |
| `mouth` | `String` | Yes |
| `facialHair` | `String` | Yes |
| `haircut` | `String` | Yes |
| `eyebrows` | `String` | Yes |
| `pants` | `String` | Yes |
| `overpants` | `String` | Yes |
| `undertop` | `String` | Yes |
| `overtop` | `String` | Yes |
| `shoes` | `String` | Yes |
| `headAccessory` | `String` | Yes |
| `faceAccessory` | `String` | Yes |
| `earAccessory` | `String` | Yes |
| `skinFeature` | `String` | Yes |
| `gloves` | `String` | Yes |
| `cape` | `String` | Yes |

### Position

| Field | Type | Nullable |
|-------|------|----------|
| `x` | `double` | No |
| `y` | `double` | No |
| `z` | `double` | No |

### ProjectileConfig

| Field | Type | Nullable |
|-------|------|----------|
| `physicsConfig` | [PhysicsConfig](Version-2026.01.13-50e69c385-Data-Types#physicsconfig) | Yes |
| `model` | [Model](Version-2026.01.13-50e69c385-Data-Types#model) | Yes |
| `launchForce` | `double` | No |
| `spawnOffset` | [Vector3f](Version-2026.01.13-50e69c385-Data-Types#vector3f) | Yes |
| `rotationOffset` | [Direction](Version-2026.01.13-50e69c385-Data-Types#direction) | Yes |
| `interactions` | `Map<InteractionType, Integer>` | Yes |
| `launchLocalSoundEventIndex` | `int` | No |
| `projectileSoundEventIndex` | `int` | No |

### ProjectileInteraction

| Field | Type | Nullable |
|-------|------|----------|
| `configId` | `String` | Yes |

### RailConfig

| Field | Type | Nullable |
|-------|------|----------|
| `points` | [RailPoint](Version-2026.01.13-50e69c385-Data-Types#railpoint)[] | Yes |

### RailPoint

| Field | Type | Nullable |
|-------|------|----------|
| `point` | [Vector3f](Version-2026.01.13-50e69c385-Data-Types#vector3f) | Yes |
| `normal` | [Vector3f](Version-2026.01.13-50e69c385-Data-Types#vector3f) | Yes |

### Range

| Field | Type | Nullable |
|-------|------|----------|
| `min` | `int` | No |
| `max` | `int` | No |

### RangeVector2f

| Field | Type | Nullable |
|-------|------|----------|
| `x` | [Rangef](Version-2026.01.13-50e69c385-Data-Types#rangef) | Yes |
| `y` | [Rangef](Version-2026.01.13-50e69c385-Data-Types#rangef) | Yes |

### RangeVector3f

| Field | Type | Nullable |
|-------|------|----------|
| `x` | [Rangef](Version-2026.01.13-50e69c385-Data-Types#rangef) | Yes |
| `y` | [Rangef](Version-2026.01.13-50e69c385-Data-Types#rangef) | Yes |
| `z` | [Rangef](Version-2026.01.13-50e69c385-Data-Types#rangef) | Yes |

### Rangeb

| Field | Type | Nullable |
|-------|------|----------|
| `min` | `byte` | No |
| `max` | `byte` | No |

### Rangef

| Field | Type | Nullable |
|-------|------|----------|
| `min` | `float` | No |
| `max` | `float` | No |

### RaycastSelector

| Field | Type | Nullable |
|-------|------|----------|
| `offset` | [Vector3f](Version-2026.01.13-50e69c385-Data-Types#vector3f) | Yes |
| `distance` | `int` | No |
| `blockTagIndex` | `int` | No |
| `ignoreFluids` | `boolean` | No |
| `ignoreEmptyCollisionMaterial` | `boolean` | No |

### RefillContainerInteraction

| Field | Type | Nullable |
|-------|------|----------|
| `refillFluids` | `int[]` | Yes |

### RemoveEntityInteraction

| Field | Type | Nullable |
|-------|------|----------|
| `entityTarget` | [InteractionTarget](Version-2026.01.13-50e69c385-Enums#interactiontarget) | No |

### RepeatInteraction

| Field | Type | Nullable |
|-------|------|----------|
| `forkInteractions` | `int` | No |
| `repeat` | `int` | No |

### ReplaceInteraction

| Field | Type | Nullable |
|-------|------|----------|
| `defaultValue` | `int` | No |
| `variable` | `String` | Yes |

### RepulsionConfig

| Field | Type | Nullable |
|-------|------|----------|
| `radius` | `float` | No |
| `minForce` | `float` | No |
| `maxForce` | `float` | No |

### RequiredBlockFaceSupport

| Field | Type | Nullable |
|-------|------|----------|
| `faceType` | `String` | Yes |
| `selfFaceType` | `String` | Yes |
| `blockSetId` | `String` | Yes |
| `blockTypeId` | `int` | No |
| `tagIndex` | `int` | No |
| `fluidId` | `int` | No |
| `support` | [SupportMatch](Version-2026.01.13-50e69c385-Enums#supportmatch) | No |
| `matchSelf` | [SupportMatch](Version-2026.01.13-50e69c385-Enums#supportmatch) | No |
| `allowSupportPropagation` | `boolean` | No |
| `rotate` | `boolean` | No |
| `filler` | [Vector3i](Version-2026.01.13-50e69c385-Data-Types#vector3i)[] | Yes |

### ResetCooldownInteraction

| Field | Type | Nullable |
|-------|------|----------|
| `cooldown` | [InteractionCooldown](Version-2026.01.13-50e69c385-Data-Types#interactioncooldown) | Yes |

### ResourceType

| Field | Type | Nullable |
|-------|------|----------|
| `id` | `String` | Yes |
| `icon` | `String` | Yes |

### ReverbEffect

| Field | Type | Nullable |
|-------|------|----------|
| `id` | `String` | Yes |
| `dryGain` | `float` | No |
| `modalDensity` | `float` | No |
| `diffusion` | `float` | No |
| `gain` | `float` | No |
| `highFrequencyGain` | `float` | No |
| `decayTime` | `float` | No |
| `highFrequencyDecayRatio` | `float` | No |
| `reflectionGain` | `float` | No |
| `reflectionDelay` | `float` | No |
| `lateReverbGain` | `float` | No |
| `lateReverbDelay` | `float` | No |
| `roomRolloffFactor` | `float` | No |
| `airAbsorptionHighFrequencyGain` | `float` | No |
| `limitDecayHighFrequency` | `boolean` | No |

### RoofConnectedBlockRuleSet

| Field | Type | Nullable |
|-------|------|----------|
| `regular` | [StairConnectedBlockRuleSet](Version-2026.01.13-50e69c385-Data-Types#stairconnectedblockruleset) | Yes |
| `hollow` | [StairConnectedBlockRuleSet](Version-2026.01.13-50e69c385-Data-Types#stairconnectedblockruleset) | Yes |
| `topperBlockId` | `int` | No |
| `width` | `int` | No |
| `materialName` | `String` | Yes |

### RootInteraction

| Field | Type | Nullable |
|-------|------|----------|
| `id` | `String` | Yes |
| `interactions` | `int[]` | Yes |
| `cooldown` | [InteractionCooldown](Version-2026.01.13-50e69c385-Data-Types#interactioncooldown) | Yes |
| `settings` | `Map<GameMode, RootInteractionSettings>` | Yes |
| `rules` | [InteractionRules](Version-2026.01.13-50e69c385-Data-Types#interactionrules) | Yes |
| `tags` | `int[]` | Yes |
| `clickQueuingTimeout` | `float` | No |
| `requireNewClick` | `boolean` | No |

### RootInteractionSettings

| Field | Type | Nullable |
|-------|------|----------|
| `allowSkipChainOnClick` | `boolean` | No |
| `cooldown` | [InteractionCooldown](Version-2026.01.13-50e69c385-Data-Types#interactioncooldown) | Yes |

### RotationNoise

| Field | Type | Nullable |
|-------|------|----------|
| `pitch` | [NoiseConfig](Version-2026.01.13-50e69c385-Data-Types#noiseconfig)[] | Yes |
| `yaw` | [NoiseConfig](Version-2026.01.13-50e69c385-Data-Types#noiseconfig)[] | Yes |
| `roll` | [NoiseConfig](Version-2026.01.13-50e69c385-Data-Types#noiseconfig)[] | Yes |

### RunRootInteraction

| Field | Type | Nullable |
|-------|------|----------|
| `rootInteraction` | `int` | No |

### SavedMovementStates

| Field | Type | Nullable |
|-------|------|----------|
| `flying` | `boolean` | No |

### SelectInteraction

| Field | Type | Nullable |
|-------|------|----------|
| `selector` | `Selector` | Yes |
| `ignoreOwner` | `boolean` | No |
| `hitEntity` | `int` | No |
| `hitEntityRules` | [HitEntity](Version-2026.01.13-50e69c385-Data-Types#hitentity)[] | Yes |
| `failOn` | [FailOnType](Version-2026.01.13-50e69c385-Enums#failontype) | No |

### SelectedHitEntity

| Field | Type | Nullable |
|-------|------|----------|
| `networkId` | `int` | No |
| `hitLocation` | [Vector3f](Version-2026.01.13-50e69c385-Data-Types#vector3f) | Yes |
| `position` | [Position](Version-2026.01.13-50e69c385-Data-Types#position) | Yes |
| `bodyRotation` | [Direction](Version-2026.01.13-50e69c385-Data-Types#direction) | Yes |

### SerialInteraction

| Field | Type | Nullable |
|-------|------|----------|
| `serialInteractions` | `int[]` | Yes |

### ServerCameraSettings

| Field | Type | Nullable |
|-------|------|----------|
| `positionLerpSpeed` | `float` | No |
| `rotationLerpSpeed` | `float` | No |
| `distance` | `float` | No |
| `speedModifier` | `float` | No |
| `allowPitchControls` | `boolean` | No |
| `displayCursor` | `boolean` | No |
| `displayReticle` | `boolean` | No |
| `mouseInputTargetType` | [MouseInputTargetType](Version-2026.01.13-50e69c385-Enums#mouseinputtargettype) | No |
| `sendMouseMotion` | `boolean` | No |
| `skipCharacterPhysics` | `boolean` | No |
| `isFirstPerson` | `boolean` | No |
| `movementForceRotationType` | [MovementForceRotationType](Version-2026.01.13-50e69c385-Enums#movementforcerotationtype) | No |
| `movementForceRotation` | [Direction](Version-2026.01.13-50e69c385-Data-Types#direction) | Yes |
| `attachedToType` | [AttachedToType](Version-2026.01.13-50e69c385-Enums#attachedtotype) | No |
| `attachedToEntityId` | `int` | No |
| `eyeOffset` | `boolean` | No |
| `positionDistanceOffsetType` | [PositionDistanceOffsetType](Version-2026.01.13-50e69c385-Enums#positiondistanceoffsettype) | No |
| `positionOffset` | [Position](Version-2026.01.13-50e69c385-Data-Types#position) | Yes |
| `rotationOffset` | [Direction](Version-2026.01.13-50e69c385-Data-Types#direction) | Yes |
| `positionType` | [PositionType](Version-2026.01.13-50e69c385-Enums#positiontype) | No |
| `position` | [Position](Version-2026.01.13-50e69c385-Data-Types#position) | Yes |
| `rotationType` | [RotationType](Version-2026.01.13-50e69c385-Enums#rotationtype) | No |
| `rotation` | [Direction](Version-2026.01.13-50e69c385-Data-Types#direction) | Yes |
| `canMoveType` | [CanMoveType](Version-2026.01.13-50e69c385-Enums#canmovetype) | No |
| `applyMovementType` | [ApplyMovementType](Version-2026.01.13-50e69c385-Enums#applymovementtype) | No |
| `movementMultiplier` | [Vector3f](Version-2026.01.13-50e69c385-Data-Types#vector3f) | Yes |
| `applyLookType` | [ApplyLookType](Version-2026.01.13-50e69c385-Enums#applylooktype) | No |
| `lookMultiplier` | [Vector2f](Version-2026.01.13-50e69c385-Data-Types#vector2f) | Yes |
| `mouseInputType` | [MouseInputType](Version-2026.01.13-50e69c385-Enums#mouseinputtype) | No |
| `planeNormal` | [Vector3f](Version-2026.01.13-50e69c385-Data-Types#vector3f) | Yes |

### SimpleBlockInteraction

| Field | Type | Nullable |
|-------|------|----------|
| `useLatestTarget` | `boolean` | No |

### SimpleInteraction

| Field | Type | Nullable |
|-------|------|----------|
| `next` | `int` | No |
| `failed` | `int` | No |

### Size

| Field | Type | Nullable |
|-------|------|----------|
| `width` | `int` | No |
| `height` | `int` | No |

### SoftBlock

| Field | Type | Nullable |
|-------|------|----------|
| `itemId` | `String` | Yes |
| `dropListId` | `String` | Yes |
| `isWeaponBreakable` | `boolean` | No |

### SoundEvent

| Field | Type | Nullable |
|-------|------|----------|
| `id` | `String` | Yes |
| `volume` | `float` | No |
| `pitch` | `float` | No |
| `musicDuckingVolume` | `float` | No |
| `ambientDuckingVolume` | `float` | No |
| `maxInstance` | `int` | No |
| `preventSoundInterruption` | `boolean` | No |
| `startAttenuationDistance` | `float` | No |
| `maxDistance` | `float` | No |
| `layers` | [SoundEventLayer](Version-2026.01.13-50e69c385-Data-Types#soundeventlayer)[] | Yes |
| `audioCategory` | `int` | No |

### SoundEventLayer

| Field | Type | Nullable |
|-------|------|----------|
| `volume` | `float` | No |
| `startDelay` | `float` | No |
| `looping` | `boolean` | No |
| `probability` | `int` | No |
| `probabilityRerollDelay` | `float` | No |
| `roundRobinHistorySize` | `int` | No |
| `randomSettings` | [SoundEventLayerRandomSettings](Version-2026.01.13-50e69c385-Data-Types#soundeventlayerrandomsettings) | Yes |
| `files` | `String[]` | Yes |

### SoundEventLayerRandomSettings

| Field | Type | Nullable |
|-------|------|----------|
| `minVolume` | `float` | No |
| `maxVolume` | `float` | No |
| `minPitch` | `float` | No |
| `maxPitch` | `float` | No |
| `maxStartOffset` | `float` | No |

### SoundSet

| Field | Type | Nullable |
|-------|------|----------|
| `id` | `String` | Yes |
| `sounds` | `Map<String, Integer>` | Yes |
| `category` | [SoundCategory](Version-2026.01.13-50e69c385-Enums#soundcategory) | No |

### SpawnDeployableFromRaycastInteraction

| Field | Type | Nullable |
|-------|------|----------|
| `deployableConfig` | [DeployableConfig](Version-2026.01.13-50e69c385-Data-Types#deployableconfig) | Yes |
| `maxDistance` | `float` | No |
| `costs` | `Map<Integer, Float>` | Yes |

### StabSelector

| Field | Type | Nullable |
|-------|------|----------|
| `extendTop` | `float` | No |
| `extendBottom` | `float` | No |
| `extendLeft` | `float` | No |
| `extendRight` | `float` | No |
| `yawOffset` | `float` | No |
| `pitchOffset` | `float` | No |
| `rollOffset` | `float` | No |
| `startDistance` | `float` | No |
| `endDistance` | `float` | No |
| `testLineOfSight` | `boolean` | No |

### StairConnectedBlockRuleSet

| Field | Type | Nullable |
|-------|------|----------|
| `straightBlockId` | `int` | No |
| `cornerLeftBlockId` | `int` | No |
| `cornerRightBlockId` | `int` | No |
| `invertedCornerLeftBlockId` | `int` | No |
| `invertedCornerRightBlockId` | `int` | No |
| `materialName` | `String` | Yes |

### StatsConditionInteraction

| Field | Type | Nullable |
|-------|------|----------|
| `costs` | `Map<Integer, Float>` | Yes |
| `lessThan` | `boolean` | No |
| `lenient` | `boolean` | No |
| `valueType` | [ValueType](Version-2026.01.13-50e69c385-Enums#valuetype) | No |

### StringParamValue

*No fields documented*

### TagPattern

| Field | Type | Nullable |
|-------|------|----------|
| `type` | [TagPatternType](Version-2026.01.13-50e69c385-Enums#tagpatterntype) | No |
| `tagIndex` | `int` | No |
| `operands` | [TagPattern](Version-2026.01.13-50e69c385-Data-Types#tagpattern)[] | Yes |
| `not` | [TagPattern](Version-2026.01.13-50e69c385-Data-Types#tagpattern) | Yes |

### TargetedDamage

| Field | Type | Nullable |
|-------|------|----------|
| `index` | `int` | No |
| `damageEffects` | [DamageEffects](Version-2026.01.13-50e69c385-Data-Types#damageeffects) | Yes |
| `next` | `int` | No |

### TeleportAck

| Field | Type | Nullable |
|-------|------|----------|
| `teleportId` | `byte` | No |

### Tint

| Field | Type | Nullable |
|-------|------|----------|
| `top` | `int` | No |
| `bottom` | `int` | No |
| `front` | `int` | No |
| `back` | `int` | No |
| `left` | `int` | No |
| `right` | `int` | No |

### ToggleGliderInteraction

*No fields documented*

### Trail

| Field | Type | Nullable |
|-------|------|----------|
| `id` | `String` | Yes |
| `texture` | `String` | Yes |
| `lifeSpan` | `int` | No |
| `roll` | `float` | No |
| `start` | [Edge](Version-2026.01.13-50e69c385-Data-Types#edge) | Yes |
| `end` | [Edge](Version-2026.01.13-50e69c385-Data-Types#edge) | Yes |
| `lightInfluence` | `float` | No |
| `renderMode` | [FXRenderMode](Version-2026.01.13-50e69c385-Enums#fxrendermode) | No |
| `intersectionHighlight` | [IntersectionHighlight](Version-2026.01.13-50e69c385-Data-Types#intersectionhighlight) | Yes |
| `smooth` | `boolean` | No |
| `frameSize` | [Vector2i](Version-2026.01.13-50e69c385-Data-Types#vector2i) | Yes |
| `frameRange` | [Range](Version-2026.01.13-50e69c385-Data-Types#range) | Yes |
| `frameLifeSpan` | `int` | No |

### Transform

| Field | Type | Nullable |
|-------|------|----------|
| `position` | [Position](Version-2026.01.13-50e69c385-Data-Types#position) | Yes |
| `orientation` | [Direction](Version-2026.01.13-50e69c385-Data-Types#direction) | Yes |

### TriggerCooldownInteraction

| Field | Type | Nullable |
|-------|------|----------|
| `cooldown` | [InteractionCooldown](Version-2026.01.13-50e69c385-Data-Types#interactioncooldown) | Yes |

### UVMotion

| Field | Type | Nullable |
|-------|------|----------|
| `texture` | `String` | Yes |
| `addRandomUVOffset` | `boolean` | No |
| `speedX` | `float` | No |
| `speedY` | `float` | No |
| `scale` | `float` | No |
| `strength` | `float` | No |
| `strengthCurveType` | [UVMotionCurveType](Version-2026.01.13-50e69c385-Enums#uvmotioncurvetype) | No |

### UseBlockInteraction

*No fields documented*

### UseEntityInteraction

*No fields documented*

### Vector2f

| Field | Type | Nullable |
|-------|------|----------|
| `x` | `float` | No |
| `y` | `float` | No |

### Vector2i

| Field | Type | Nullable |
|-------|------|----------|
| `x` | `int` | No |
| `y` | `int` | No |

### Vector3d

| Field | Type | Nullable |
|-------|------|----------|
| `x` | `double` | No |
| `y` | `double` | No |
| `z` | `double` | No |

### Vector3f

| Field | Type | Nullable |
|-------|------|----------|
| `x` | `float` | No |
| `y` | `float` | No |
| `z` | `float` | No |

### Vector3i

| Field | Type | Nullable |
|-------|------|----------|
| `x` | `int` | No |
| `y` | `int` | No |
| `z` | `int` | No |

### VelocityConfig

| Field | Type | Nullable |
|-------|------|----------|
| `groundResistance` | `float` | No |
| `groundResistanceMax` | `float` | No |
| `airResistance` | `float` | No |
| `airResistanceMax` | `float` | No |
| `threshold` | `float` | No |
| `style` | [VelocityThresholdStyle](Version-2026.01.13-50e69c385-Enums#velocitythresholdstyle) | No |

### ViewBobbing

| Field | Type | Nullable |
|-------|------|----------|
| `firstPerson` | [CameraShakeConfig](Version-2026.01.13-50e69c385-Data-Types#camerashakeconfig) | Yes |

### Weather

| Field | Type | Nullable |
|-------|------|----------|
| `id` | `String` | Yes |
| `tagIndexes` | `int[]` | Yes |
| `stars` | `String` | Yes |
| `moons` | `Map<Integer, String>` | Yes |
| `clouds` | [Cloud](Version-2026.01.13-50e69c385-Data-Types#cloud)[] | Yes |
| `sunlightDampingMultiplier` | `Map<Float, Float>` | Yes |
| `sunlightColors` | `Map<Float, Color>` | Yes |
| `skyTopColors` | `Map<Float, ColorAlpha>` | Yes |
| `skyBottomColors` | `Map<Float, ColorAlpha>` | Yes |
| `skySunsetColors` | `Map<Float, ColorAlpha>` | Yes |
| `sunColors` | `Map<Float, Color>` | Yes |
| `sunScales` | `Map<Float, Float>` | Yes |
| `sunGlowColors` | `Map<Float, ColorAlpha>` | Yes |
| `moonColors` | `Map<Float, ColorAlpha>` | Yes |
| `moonScales` | `Map<Float, Float>` | Yes |
| `moonGlowColors` | `Map<Float, ColorAlpha>` | Yes |
| `fogColors` | `Map<Float, Color>` | Yes |
| `fogHeightFalloffs` | `Map<Float, Float>` | Yes |
| `fogDensities` | `Map<Float, Float>` | Yes |
| `screenEffect` | `String` | Yes |
| `screenEffectColors` | `Map<Float, ColorAlpha>` | Yes |
| `colorFilters` | `Map<Float, Color>` | Yes |
| `waterTints` | `Map<Float, Color>` | Yes |
| `particle` | [WeatherParticle](Version-2026.01.13-50e69c385-Data-Types#weatherparticle) | Yes |
| `fog` | [NearFar](Version-2026.01.13-50e69c385-Data-Types#nearfar) | Yes |
| `fogOptions` | [FogOptions](Version-2026.01.13-50e69c385-Data-Types#fogoptions) | Yes |

### WeatherParticle

| Field | Type | Nullable |
|-------|------|----------|
| `systemId` | `String` | Yes |
| `color` | [Color](Version-2026.01.13-50e69c385-Data-Types#color) | Yes |
| `scale` | `float` | No |
| `isOvergroundOnly` | `boolean` | No |
| `positionOffsetMultiplier` | `float` | No |

### WieldingInteraction

| Field | Type | Nullable |
|-------|------|----------|
| `blockedEffects` | [DamageEffects](Version-2026.01.13-50e69c385-Data-Types#damageeffects) | Yes |
| `hasModifiers` | `boolean` | No |
| `angledWielding` | [AngledWielding](Version-2026.01.13-50e69c385-Data-Types#angledwielding) | Yes |

### WiggleWeights

| Field | Type | Nullable |
|-------|------|----------|
| `x` | `float` | No |
| `xDeceleration` | `float` | No |
| `y` | `float` | No |
| `yDeceleration` | `float` | No |
| `z` | `float` | No |
| `zDeceleration` | `float` | No |
| `roll` | `float` | No |
| `rollDeceleration` | `float` | No |
| `pitch` | `float` | No |
| `pitchDeceleration` | `float` | No |

### WorldEnvironment

| Field | Type | Nullable |
|-------|------|----------|
| `id` | `String` | Yes |
| `waterTint` | [Color](Version-2026.01.13-50e69c385-Data-Types#color) | Yes |
| `fluidParticles` | `Map<Integer, FluidParticle>` | Yes |
| `tagIndexes` | `int[]` | Yes |

### WorldInteraction

| Field | Type | Nullable |
|-------|------|----------|
| `entityId` | `int` | No |
| `blockPosition` | [BlockPosition](Version-2026.01.13-50e69c385-Data-Types#blockposition) | Yes |
| `blockRotation` | [BlockRotation](Version-2026.01.13-50e69c385-Data-Types#blockrotation) | Yes |

### WorldParticle

| Field | Type | Nullable |
|-------|------|----------|
| `systemId` | `String` | Yes |
| `scale` | `float` | No |
| `color` | [Color](Version-2026.01.13-50e69c385-Data-Types#color) | Yes |
| `positionOffset` | [Vector3f](Version-2026.01.13-50e69c385-Data-Types#vector3f) | Yes |
| `rotationOffset` | [Direction](Version-2026.01.13-50e69c385-Data-Types#direction) | Yes |

---
[Back to Home](Version-2026.01.13-50e69c385-Home)