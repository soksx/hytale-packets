# Enum Types

**Version:** 2026.01.13-50e69c385

This page documents all enum types used in the protocol.

## Packets

### Access

*Source: `protocol/packets/serveraccess`*

| Value | Name |
|-------|------|
| 0 | `Private` |
| 1 | `LAN` |
| 2 | `Friend` |
| 3 | `Open` |

### AssetEditorEditorType

*Source: `protocol/packets/asseteditor`*

| Value | Name |
|-------|------|
| 0 | `None` |
| 1 | `Text` |
| 2 | `JsonSource` |
| 3 | `JsonConfig` |
| 4 | `Model` |
| 5 | `Texture` |
| 6 | `Animation` |

### AssetEditorFileTree

*Source: `protocol/packets/asseteditor`*

| Value | Name |
|-------|------|
| 0 | `Server` |
| 1 | `Common` |

### AssetEditorPopupNotificationType

*Source: `protocol/packets/asseteditor`*

| Value | Name |
|-------|------|
| 0 | `Info` |
| 1 | `Success` |
| 2 | `Error` |
| 3 | `Warning` |

### Axis

*Source: `protocol/packets/buildertools`*

| Value | Name |
|-------|------|
| 0 | `X` |
| 1 | `Y` |
| 2 | `Z` |

### BrushAxis

*Source: `protocol/packets/buildertools`*

| Value | Name |
|-------|------|
| 0 | `None` |
| 1 | `Auto` |
| 2 | `X` |
| 3 | `Y` |
| 4 | `Z` |

### BrushOrigin

*Source: `protocol/packets/buildertools`*

| Value | Name |
|-------|------|
| 0 | `Center` |
| 1 | `Bottom` |
| 2 | `Top` |

### BrushShape

*Source: `protocol/packets/buildertools`*

| Value | Name |
|-------|------|
| 0 | `Cube` |
| 1 | `Sphere` |
| 2 | `Cylinder` |
| 3 | `Cone` |
| 4 | `InvertedCone` |
| 5 | `Pyramid` |
| 6 | `InvertedPyramid` |
| 7 | `Dome` |
| 8 | `InvertedDome` |
| 9 | `Diamond` |
| 10 | `Torus` |

### BuilderToolAction

*Source: `protocol/packets/buildertools`*

| Value | Name |
|-------|------|
| 0 | `SelectionPosition1` |
| 1 | `SelectionPosition2` |
| 2 | `SelectionCopy` |
| 3 | `HistoryUndo` |
| 4 | `HistoryRedo` |
| 5 | `ActivateToolMode` |
| 6 | `DeactivateToolMode` |

### BuilderToolArgGroup

*Source: `protocol/packets/buildertools`*

| Value | Name |
|-------|------|
| 0 | `Tool` |
| 1 | `Brush` |

### BuilderToolArgType

*Source: `protocol/packets/buildertools`*

| Value | Name |
|-------|------|
| 0 | `Bool` |
| 1 | `Float` |
| 2 | `Int` |
| 3 | `String` |
| 4 | `Block` |
| 5 | `Mask` |
| 6 | `BrushShape` |
| 7 | `BrushOrigin` |
| 8 | `BrushAxis` |
| 9 | `Rotation` |
| 10 | `Option` |

### ChatTagType

*Source: `protocol/packets/interface_`*

| Value | Name |
|-------|------|
| 0 | `Item` |

### ChatType

*Source: `protocol/packets/interface_`*

| Value | Name |
|-------|------|
| 0 | `Chat` |

### ClientFeature

*Source: `protocol/packets/setup`*

| Value | Name |
|-------|------|
| 0 | `SplitVelocity` |
| 1 | `Mantling` |
| 2 | `SprintForce` |
| 3 | `CrouchSlide` |
| 4 | `SafetyRoll` |
| 5 | `DisplayHealthBars` |
| 6 | `DisplayCombatText` |

### ClientType

*Source: `protocol/packets/connection`*

| Value | Name |
|-------|------|
| 0 | `Game` |
| 1 | `Editor` |

### CustomPageEventType

*Source: `protocol/packets/interface_`*

| Value | Name |
|-------|------|
| 0 | `Acknowledge` |
| 1 | `Data` |
| 2 | `Dismiss` |

### CustomPageLifetime

*Source: `protocol/packets/interface_`*

| Value | Name |
|-------|------|
| 0 | `CantClose` |
| 1 | `CanDismiss` |
| 2 | `CanDismissOrCloseThroughInteraction` |

### CustomUICommandType

*Source: `protocol/packets/interface_`*

| Value | Name |
|-------|------|
| 0 | `Append` |
| 1 | `AppendInline` |
| 2 | `InsertBefore` |
| 3 | `InsertBeforeInline` |
| 4 | `Remove` |
| 5 | `Set` |
| 6 | `Clear` |

### CustomUIEventBindingType

*Source: `protocol/packets/interface_`*

| Value | Name |
|-------|------|
| 0 | `Activating` |
| 1 | `RightClicking` |
| 2 | `DoubleClicking` |
| 3 | `MouseEntered` |
| 4 | `MouseExited` |
| 5 | `ValueChanged` |
| 6 | `ElementReordered` |
| 7 | `Validating` |
| 8 | `Dismissing` |
| 9 | `FocusGained` |
| 10 | `FocusLost` |
| 11 | `KeyDown` |
| 12 | `MouseButtonReleased` |
| 13 | `SlotClicking` |
| 14 | `SlotDoubleClicking` |
| 15 | `SlotMouseEntered` |
| 16 | `SlotMouseExited` |
| 17 | `DragCancelled` |
| 18 | `Dropped` |
| 19 | `SlotMouseDragCompleted` |
| 20 | `SlotMouseDragExited` |
| 21 | `SlotClickReleaseWhileDragging` |
| 22 | `SlotClickPressWhileDragging` |
| 23 | `SelectedTabChanged` |

### DisconnectType

*Source: `protocol/packets/connection`*

| Value | Name |
|-------|------|
| 0 | `Disconnect` |
| 1 | `Crash` |

### EntityToolAction

*Source: `protocol/packets/buildertools`*

| Value | Name |
|-------|------|
| 0 | `Remove` |
| 1 | `Clone` |
| 2 | `Freeze` |

### HudComponent

*Source: `protocol/packets/interface_`*

| Value | Name |
|-------|------|
| 0 | `Hotbar` |
| 1 | `StatusIcons` |
| 2 | `Reticle` |
| 3 | `Chat` |
| 4 | `Requests` |
| 5 | `Notifications` |
| 6 | `KillFeed` |
| 7 | `InputBindings` |
| 8 | `PlayerList` |
| 9 | `EventTitle` |
| 10 | `Compass` |
| 11 | `ObjectivePanel` |
| 12 | `PortalPanel` |
| 13 | `BuilderToolsLegend` |
| 14 | `Speedometer` |
| 15 | `UtilitySlotSelector` |
| 16 | `BlockVariantSelector` |
| 17 | `BuilderToolsMaterialSlotSelector` |
| 18 | `Stamina` |
| 19 | `AmmoIndicator` |
| 20 | `Health` |
| 21 | `Mana` |
| 22 | `Oxygen` |
| 23 | `Sleep` |

### JsonUpdateType

*Source: `protocol/packets/asseteditor`*

| Value | Name |
|-------|------|
| 0 | `SetProperty` |
| 1 | `InsertProperty` |
| 2 | `RemoveProperty` |

### NotificationStyle

*Source: `protocol/packets/interface_`*

| Value | Name |
|-------|------|
| 0 | `Default` |
| 1 | `Danger` |
| 2 | `Warning` |
| 3 | `Success` |

### Page

*Source: `protocol/packets/interface_`*

| Value | Name |
|-------|------|
| 0 | `None` |
| 1 | `Bench` |
| 2 | `Inventory` |
| 3 | `ToolsSettings` |
| 4 | `Map` |
| 5 | `MachinimaEditor` |
| 6 | `ContentCreation` |
| 7 | `Custom` |

### PaletteType

*Source: `protocol/packets/world`*

| Value | Name |
|-------|------|
| 0 | `Empty` |
| 1 | `HalfByte` |
| 2 | `Byte` |
| 3 | `Short` |

### PongType

*Source: `protocol/packets/connection`*

| Value | Name |
|-------|------|
| 0 | `Raw` |
| 1 | `Direct` |
| 2 | `Tick` |

### RotationAxis

*Source: `protocol/packets/world`*

| Value | Name |
|-------|------|
| 0 | `X` |
| 1 | `Y` |
| 2 | `Z` |

### RotationDirection

*Source: `protocol/packets/world`*

| Value | Name |
|-------|------|
| 0 | `Positive` |
| 1 | `Negative` |

### SceneUpdateType

*Source: `protocol/packets/machinima`*

| Value | Name |
|-------|------|
| 0 | `Update` |
| 1 | `Play` |
| 2 | `Stop` |
| 3 | `Frame` |
| 4 | `Save` |

### WindowType

*Source: `protocol/packets/window`*

| Value | Name |
|-------|------|
| 0 | `Container` |
| 1 | `PocketCrafting` |
| 2 | `BasicCrafting` |
| 3 | `DiagramCrafting` |
| 4 | `StructuralCrafting` |
| 5 | `Processing` |
| 6 | `Memories` |

### WriteUpdateType

*Source: `protocol/packets/asseteditor`*

| Value | Name |
|-------|------|
| 0 | `Add` |
| 1 | `Update` |
| 2 | `Remove` |

## Root

### AccumulationMode

| Value | Name |
|-------|------|
| 0 | `Set` |
| 1 | `Sum` |
| 2 | `Average` |

### AmbienceFXAltitude

| Value | Name |
|-------|------|
| 0 | `Normal` |
| 1 | `Lowest` |
| 2 | `Highest` |
| 3 | `Random` |

### AmbienceFXSoundPlay3D

| Value | Name |
|-------|------|
| 0 | `Random` |
| 1 | `LocationName` |
| 2 | `No` |

### AmbienceTransitionSpeed

| Value | Name |
|-------|------|
| 0 | `Default` |
| 1 | `Fast` |
| 2 | `Instant` |

### AnimationSlot

| Value | Name |
|-------|------|
| 0 | `Movement` |
| 1 | `Status` |
| 2 | `Action` |
| 3 | `Face` |
| 4 | `Emote` |

### ApplyForceState

| Value | Name |
|-------|------|
| 0 | `Waiting` |
| 1 | `Ground` |
| 2 | `Collision` |
| 3 | `Timer` |

### ApplyLookType

| Value | Name |
|-------|------|
| 0 | `LocalPlayerLookOrientation` |
| 1 | `Rotation` |

### ApplyMovementType

| Value | Name |
|-------|------|
| 0 | `CharacterController` |
| 1 | `Position` |

### AttachedToType

| Value | Name |
|-------|------|
| 0 | `LocalPlayer` |
| 1 | `EntityId` |
| 2 | `None` |

### BenchType

| Value | Name |
|-------|------|
| 0 | `Crafting` |
| 1 | `Processing` |
| 2 | `DiagramCrafting` |
| 3 | `StructuralCrafting` |

### BlockFace

| Value | Name |
|-------|------|
| 0 | `None` |
| 1 | `Up` |
| 2 | `Down` |
| 3 | `North` |
| 4 | `South` |
| 5 | `East` |
| 6 | `West` |

### BlockMaterial

| Value | Name |
|-------|------|
| 0 | `Empty` |
| 1 | `Solid` |

### BlockMountType

| Value | Name |
|-------|------|
| 0 | `Seat` |
| 1 | `Bed` |

### BlockNeighbor

| Value | Name |
|-------|------|
| 0 | `Up` |
| 1 | `Down` |
| 2 | `North` |
| 3 | `East` |
| 4 | `South` |
| 5 | `West` |
| 6 | `UpNorth` |
| 7 | `UpSouth` |
| 8 | `UpEast` |
| 9 | `UpWest` |
| 10 | `DownNorth` |
| 11 | `DownSouth` |
| 12 | `DownEast` |
| 13 | `DownWest` |
| 14 | `NorthEast` |
| 15 | `SouthEast` |
| 16 | `SouthWest` |
| 17 | `NorthWest` |
| 18 | `UpNorthEast` |
| 19 | `UpSouthEast` |
| 20 | `UpSouthWest` |
| 21 | `UpNorthWest` |
| 22 | `DownNorthEast` |
| 23 | `DownSouthEast` |
| 24 | `DownSouthWest` |
| 25 | `DownNorthWest` |

### BlockParticleEvent

| Value | Name |
|-------|------|
| 0 | `Walk` |
| 1 | `Run` |
| 2 | `Sprint` |
| 3 | `SoftLand` |
| 4 | `HardLand` |
| 5 | `MoveOut` |
| 6 | `Hit` |
| 7 | `Break` |
| 8 | `Build` |
| 9 | `Physics` |

### BlockPlacementRotationMode

| Value | Name |
|-------|------|
| 0 | `FacingPlayer` |
| 1 | `StairFacingPlayer` |
| 2 | `BlockNormal` |
| 3 | `Default` |

### BlockPreviewVisibility

| Value | Name |
|-------|------|
| 0 | `AlwaysVisible` |
| 1 | `AlwaysHidden` |
| 2 | `Default` |

### BlockSoundEvent

| Value | Name |
|-------|------|
| 0 | `Walk` |
| 1 | `Land` |
| 2 | `MoveIn` |
| 3 | `MoveOut` |
| 4 | `Hit` |
| 5 | `Break` |
| 6 | `Build` |
| 7 | `Clone` |
| 8 | `Harvest` |

### BlockSupportsRequiredForType

| Value | Name |
|-------|------|
| 0 | `Any` |
| 1 | `All` |

### CalculationType

| Value | Name |
|-------|------|
| 0 | `Additive` |
| 1 | `Multiplicative` |

### CameraActionType

| Value | Name |
|-------|------|
| 0 | `ForcePerspective` |
| 1 | `Orbit` |
| 2 | `Transition` |

### CameraNode

| Value | Name |
|-------|------|
| 0 | `None` |
| 1 | `Head` |
| 2 | `LShoulder` |
| 3 | `RShoulder` |
| 4 | `Belly` |

### CameraPerspectiveType

| Value | Name |
|-------|------|
| 0 | `First` |
| 1 | `Third` |

### CanMoveType

| Value | Name |
|-------|------|
| 0 | `AttachedToLocalPlayer` |
| 1 | `Always` |

### ChangeStatBehaviour

| Value | Name |
|-------|------|
| 0 | `Add` |
| 1 | `Set` |

### ChangeVelocityType

| Value | Name |
|-------|------|
| 0 | `Add` |
| 1 | `Set` |

### ClickType

| Value | Name |
|-------|------|
| 0 | `None` |
| 1 | `Left` |
| 2 | `Right` |
| 3 | `Middle` |

### ClientCameraView

| Value | Name |
|-------|------|
| 0 | `FirstPerson` |
| 1 | `ThirdPerson` |
| 2 | `Custom` |

### CollisionType

| Value | Name |
|-------|------|
| 0 | `Hard` |
| 1 | `Soft` |

### CombatTextEntityUIAnimationEventType

| Value | Name |
|-------|------|
| 0 | `Scale` |
| 1 | `Position` |
| 2 | `Opacity` |

### ComponentUpdateType

| Value | Name |
|-------|------|
| 0 | `Nameplate` |
| 1 | `UIComponents` |
| 2 | `CombatText` |
| 3 | `Model` |
| 4 | `PlayerSkin` |
| 5 | `Item` |
| 6 | `Block` |
| 7 | `Equipment` |
| 8 | `EntityStats` |
| 9 | `Transform` |
| 10 | `MovementStates` |
| 11 | `EntityEffects` |
| 12 | `Interactions` |
| 13 | `DynamicLight` |
| 14 | `Interactable` |
| 15 | `Intangible` |
| 16 | `Invulnerable` |
| 17 | `RespondToHit` |
| 18 | `HitboxCollision` |
| 19 | `Repulsion` |
| 20 | `Prediction` |
| 21 | `Audio` |
| 22 | `Mounted` |
| 23 | `NewSpawn` |
| 24 | `ActiveAnimations` |

### ConnectedBlockRuleSetType

| Value | Name |
|-------|------|
| 0 | `Stair` |
| 1 | `Roof` |

### Cosmetic

| Value | Name |
|-------|------|
| 0 | `Haircut` |
| 1 | `FacialHair` |
| 2 | `Undertop` |
| 3 | `Overtop` |
| 4 | `Pants` |
| 5 | `Overpants` |
| 6 | `Shoes` |
| 7 | `Gloves` |
| 8 | `Cape` |
| 9 | `HeadAccessory` |
| 10 | `FaceAccessory` |
| 11 | `EarAccessory` |
| 12 | `Ear` |

### CurveType

| Value | Name |
|-------|------|
| 0 | `Linear` |
| 1 | `QuartIn` |
| 2 | `QuartOut` |
| 3 | `QuartInOut` |

### DebugShape

| Value | Name |
|-------|------|
| 0 | `Sphere` |
| 1 | `Cylinder` |
| 2 | `Cone` |
| 3 | `Cube` |
| 4 | `Frustum` |

### DrawType

| Value | Name |
|-------|------|
| 0 | `Empty` |
| 1 | `GizmoCube` |
| 2 | `Cube` |
| 3 | `Model` |
| 4 | `CubeWithModel` |

### EasingType

| Value | Name |
|-------|------|
| 0 | `Linear` |
| 1 | `QuadIn` |
| 2 | `QuadOut` |
| 3 | `QuadInOut` |
| 4 | `CubicIn` |
| 5 | `CubicOut` |
| 6 | `CubicInOut` |
| 7 | `QuartIn` |
| 8 | `QuartOut` |
| 9 | `QuartInOut` |
| 10 | `QuintIn` |
| 11 | `QuintOut` |
| 12 | `QuintInOut` |
| 13 | `SineIn` |
| 14 | `SineOut` |
| 15 | `SineInOut` |
| 16 | `ExpoIn` |
| 17 | `ExpoOut` |
| 18 | `ExpoInOut` |
| 19 | `CircIn` |
| 20 | `CircOut` |
| 21 | `CircInOut` |
| 22 | `ElasticIn` |
| 23 | `ElasticOut` |
| 24 | `ElasticInOut` |
| 25 | `BackIn` |
| 26 | `BackOut` |
| 27 | `BackInOut` |
| 28 | `BounceIn` |
| 29 | `BounceOut` |
| 30 | `BounceInOut` |

### EffectDirection

| Value | Name |
|-------|------|
| 0 | `None` |
| 1 | `BottomUp` |
| 2 | `TopDown` |
| 3 | `ToCenter` |
| 4 | `FromCenter` |

### EffectOp

| Value | Name |
|-------|------|
| 0 | `Add` |
| 1 | `Remove` |

### EmitShape

| Value | Name |
|-------|------|
| 0 | `Sphere` |
| 1 | `Cube` |

### EntityMatcherType

| Value | Name |
|-------|------|
| 0 | `Server` |
| 1 | `VulnerableMatcher` |
| 2 | `Player` |

### EntityPart

| Value | Name |
|-------|------|
| 0 | `Self` |
| 1 | `Entity` |
| 2 | `PrimaryItem` |
| 3 | `SecondaryItem` |

### EntityStatOp

| Value | Name |
|-------|------|
| 0 | `Init` |
| 1 | `Remove` |
| 2 | `PutModifier` |
| 3 | `RemoveModifier` |
| 4 | `Add` |
| 5 | `Set` |
| 6 | `Minimize` |
| 7 | `Maximize` |
| 8 | `Reset` |

### EntityStatResetBehavior

| Value | Name |
|-------|------|
| 0 | `InitialValue` |
| 1 | `MaxValue` |

### EntityUIType

| Value | Name |
|-------|------|
| 0 | `EntityStat` |
| 1 | `CombatText` |

### FXRenderMode

| Value | Name |
|-------|------|
| 0 | `BlendLinear` |
| 1 | `BlendAdd` |
| 2 | `Erosion` |
| 3 | `Distortion` |

### FailOnType

| Value | Name |
|-------|------|
| 0 | `Neither` |
| 1 | `Entity` |
| 2 | `Block` |
| 3 | `Either` |

### FluidFog

| Value | Name |
|-------|------|
| 0 | `Color` |
| 1 | `ColorLight` |
| 2 | `EnvironmentTint` |

### GameMode

| Value | Name |
|-------|------|
| 0 | `Adventure` |
| 1 | `Creative` |

### HorizontalSelectorDirection

| Value | Name |
|-------|------|
| 0 | `ToLeft` |
| 1 | `ToRight` |

### InteractionState

| Value | Name |
|-------|------|
| 0 | `Finished` |
| 1 | `Skip` |
| 2 | `ItemChanged` |
| 3 | `Failed` |
| 4 | `NotFinished` |

### InteractionTarget

| Value | Name |
|-------|------|
| 0 | `User` |
| 1 | `Owner` |
| 2 | `Target` |

### InteractionType

| Value | Name |
|-------|------|
| 0 | `Primary` |
| 1 | `Secondary` |
| 2 | `Ability1` |
| 3 | `Ability2` |
| 4 | `Ability3` |
| 5 | `Use` |
| 6 | `Pick` |
| 7 | `Pickup` |
| 8 | `CollisionEnter` |
| 9 | `CollisionLeave` |
| 10 | `Collision` |
| 11 | `EntityStatEffect` |
| 12 | `SwapTo` |
| 13 | `SwapFrom` |
| 14 | `Death` |
| 15 | `Wielding` |
| 16 | `ProjectileSpawn` |
| 17 | `ProjectileHit` |
| 18 | `ProjectileMiss` |
| 19 | `ProjectileBounce` |
| 20 | `Held` |
| 21 | `HeldOffhand` |
| 22 | `Equipped` |
| 23 | `Dodge` |
| 24 | `GameModeSwap` |

### InventoryActionType

| Value | Name |
|-------|------|
| 0 | `TakeAll` |
| 1 | `PutAll` |
| 2 | `QuickStack` |
| 3 | `Sort` |

### ItemArmorSlot

| Value | Name |
|-------|------|
| 0 | `Head` |
| 1 | `Chest` |
| 2 | `Hands` |
| 3 | `Legs` |

### ItemGridInfoDisplayMode

| Value | Name |
|-------|------|
| 0 | `Tooltip` |
| 1 | `Adjacent` |
| 2 | `None` |

### ItemReticleClientEvent

| Value | Name |
|-------|------|
| 0 | `OnHit` |
| 1 | `Wielding` |
| 2 | `OnMovementLeft` |
| 3 | `OnMovementRight` |
| 4 | `OnMovementBack` |

### ItemSoundEvent

| Value | Name |
|-------|------|
| 0 | `Drag` |
| 1 | `Drop` |

### LoopOption

| Value | Name |
|-------|------|
| 0 | `PlayOnce` |
| 1 | `Loop` |
| 2 | `LoopMirror` |

### Match

| Value | Name |
|-------|------|
| 0 | `All` |
| 1 | `None` |

### MaybeBool

| Value | Name |
|-------|------|
| 0 | `Null` |
| 1 | `False` |
| 2 | `True` |

### ModifierTarget

| Value | Name |
|-------|------|
| 0 | `Min` |
| 1 | `Max` |

### MountController

| Value | Name |
|-------|------|
| 0 | `Minecart` |
| 1 | `BlockMount` |

### MouseButtonState

| Value | Name |
|-------|------|
| 0 | `Pressed` |
| 1 | `Released` |

### MouseButtonType

| Value | Name |
|-------|------|
| 0 | `Left` |
| 1 | `Middle` |
| 2 | `Right` |
| 3 | `X1` |
| 4 | `X2` |

### MouseInputTargetType

| Value | Name |
|-------|------|
| 0 | `Any` |
| 1 | `Block` |
| 2 | `Entity` |
| 3 | `None` |

### MouseInputType

| Value | Name |
|-------|------|
| 0 | `LookAtTarget` |
| 1 | `LookAtTargetBlock` |
| 2 | `LookAtTargetEntity` |
| 3 | `LookAtPlane` |

### MovementDirection

| Value | Name |
|-------|------|
| 0 | `None` |
| 1 | `Forward` |
| 2 | `Back` |
| 3 | `Left` |
| 4 | `Right` |
| 5 | `ForwardLeft` |
| 6 | `ForwardRight` |
| 7 | `BackLeft` |
| 8 | `BackRight` |

### MovementForceRotationType

| Value | Name |
|-------|------|
| 0 | `AttachedToHead` |
| 1 | `CameraRotation` |
| 2 | `Custom` |

### MovementType

| Value | Name |
|-------|------|
| 0 | `None` |
| 1 | `Idle` |
| 2 | `Crouching` |
| 3 | `Walking` |
| 4 | `Running` |
| 5 | `Sprinting` |
| 6 | `Climbing` |
| 7 | `Swimming` |
| 8 | `Flying` |
| 9 | `Sliding` |
| 10 | `Rolling` |
| 11 | `Mounting` |
| 12 | `SprintMounting` |

### NoiseType

| Value | Name |
|-------|------|
| 0 | `Sin` |
| 1 | `Cos` |
| 2 | `Perlin_Linear` |
| 3 | `Perlin_Hermite` |
| 4 | `Perlin_Quintic` |
| 5 | `Random` |

### Opacity

| Value | Name |
|-------|------|
| 0 | `Solid` |
| 1 | `Semitransparent` |
| 2 | `Cutout` |
| 3 | `Transparent` |

### OverlapBehavior

| Value | Name |
|-------|------|
| 0 | `Extend` |
| 1 | `Overwrite` |
| 2 | `Ignore` |

### ParticleCollisionAction

| Value | Name |
|-------|------|
| 0 | `Expire` |
| 1 | `LastFrame` |
| 2 | `Linger` |

### ParticleCollisionBlockType

| Value | Name |
|-------|------|
| 0 | `None` |
| 1 | `Air` |
| 2 | `Solid` |
| 3 | `All` |

### ParticleRotationInfluence

| Value | Name |
|-------|------|
| 0 | `None` |
| 1 | `Billboard` |
| 2 | `BillboardY` |
| 3 | `BillboardVelocity` |
| 4 | `Velocity` |

### ParticleScaleRatioConstraint

| Value | Name |
|-------|------|
| 0 | `OneToOne` |
| 1 | `Preserved` |
| 2 | `None` |

### ParticleUVOption

| Value | Name |
|-------|------|
| 0 | `None` |
| 1 | `RandomFlipU` |
| 2 | `RandomFlipV` |
| 3 | `RandomFlipUV` |
| 4 | `FlipU` |
| 5 | `FlipV` |
| 6 | `FlipUV` |

### Phobia

| Value | Name |
|-------|------|
| 0 | `None` |
| 1 | `Arachnophobia` |

### PhysicsType

| Value | Name |
|-------|------|
| 0 | `Standard` |

### PickupLocation

| Value | Name |
|-------|------|
| 0 | `Hotbar` |
| 1 | `Storage` |

### PositionDistanceOffsetType

| Value | Name |
|-------|------|
| 0 | `DistanceOffset` |
| 1 | `DistanceOffsetRaycast` |
| 2 | `None` |

### PositionType

| Value | Name |
|-------|------|
| 0 | `AttachedToPlusOffset` |
| 1 | `Custom` |

### PrioritySlot

| Value | Name |
|-------|------|
| 0 | `Default` |
| 1 | `MainHand` |
| 2 | `OffHand` |

### RandomRotation

| Value | Name |
|-------|------|
| 0 | `None` |
| 1 | `YawPitchRollStep1` |
| 2 | `YawStep1` |
| 3 | `YawStep1XZ` |
| 4 | `YawStep90` |

### RaycastMode

| Value | Name |
|-------|------|
| 0 | `FollowMotion` |
| 1 | `FollowLook` |

### Rotation

| Value | Name |
|-------|------|
| 0 | `None` |
| 1 | `Ninety` |
| 2 | `OneEighty` |
| 3 | `TwoSeventy` |

### RotationMode

| Value | Name |
|-------|------|
| 0 | `None` |
| 1 | `Velocity` |
| 2 | `VelocityDamped` |
| 3 | `VelocityRoll` |

### RotationType

| Value | Name |
|-------|------|
| 0 | `AttachedToPlusOffset` |
| 1 | `Custom` |

### ShaderType

| Value | Name |
|-------|------|
| 0 | `None` |
| 1 | `Wind` |
| 2 | `WindAttached` |
| 3 | `WindRandom` |
| 4 | `WindFractal` |
| 5 | `Ice` |
| 6 | `Water` |
| 7 | `Lava` |
| 8 | `Slime` |
| 9 | `Ripple` |

### ShadingMode

| Value | Name |
|-------|------|
| 0 | `Standard` |
| 1 | `Flat` |
| 2 | `Fullbright` |
| 3 | `Reflective` |

### SmartMoveType

| Value | Name |
|-------|------|
| 0 | `EquipOrMergeStack` |
| 1 | `PutInHotbarOrWindow` |
| 2 | `PutInHotbarOrBackpack` |

### SoftParticle

| Value | Name |
|-------|------|
| 0 | `Enable` |
| 1 | `Disable` |
| 2 | `Require` |

### SortType

| Value | Name |
|-------|------|
| 0 | `Name` |
| 1 | `Type` |
| 2 | `Rarity` |

### SoundCategory

| Value | Name |
|-------|------|
| 0 | `Music` |
| 1 | `Ambient` |
| 2 | `SFX` |
| 3 | `UI` |

### SupportMatch

| Value | Name |
|-------|------|
| 0 | `Ignored` |
| 1 | `Required` |
| 2 | `Disallowed` |

### SwitchTo

| Value | Name |
|-------|------|
| 0 | `Disappear` |
| 1 | `PostColor` |
| 2 | `Distortion` |
| 3 | `Transparency` |

### TagPatternType

| Value | Name |
|-------|------|
| 0 | `Equals` |
| 1 | `And` |
| 2 | `Or` |
| 3 | `Not` |

### UVMotionCurveType

| Value | Name |
|-------|------|
| 0 | `Constant` |
| 1 | `IncreaseLinear` |
| 2 | `IncreaseQuartIn` |
| 3 | `IncreaseQuartInOut` |
| 4 | `IncreaseQuartOut` |
| 5 | `DecreaseLinear` |
| 6 | `DecreaseQuartIn` |
| 7 | `DecreaseQuartInOut` |
| 8 | `DecreaseQuartOut` |

### UpdateType

| Value | Name |
|-------|------|
| 0 | `Init` |
| 1 | `AddOrUpdate` |
| 2 | `Remove` |

### ValueType

| Value | Name |
|-------|------|
| 0 | `Percent` |
| 1 | `Absolute` |

### VariantRotation

| Value | Name |
|-------|------|
| 0 | `None` |
| 1 | `Wall` |
| 2 | `UpDown` |
| 3 | `Pipe` |
| 4 | `DoublePipe` |
| 5 | `NESW` |
| 6 | `UpDownNESW` |
| 7 | `All` |

### VelocityThresholdStyle

| Value | Name |
|-------|------|
| 0 | `Linear` |
| 1 | `Exp` |

### WaitForDataFrom

| Value | Name |
|-------|------|
| 0 | `Client` |
| 1 | `Server` |
| 2 | `None` |

---
[Back to Home](Version-2026.01.13-50e69c385-Home)