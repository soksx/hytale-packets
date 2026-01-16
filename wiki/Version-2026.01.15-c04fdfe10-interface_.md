# Interface Packets

**Version:** 2026.01.15-c04fdfe10

This category contains 23 packet(s).

## Packet Index

| ID | Name | Compressed | Max Size |
|----|------|------------|----------|
| `0xD2` | [ServerMessage](#servermessage) | No | 1.7 GB |
| `0xD3` | [ChatMessage](#chatmessage) | No | 16.4 MB |
| `0xD4` | [Notification](#notification) | No | 1.7 GB |
| `0xD5` | [KillFeedMessage](#killfeedmessage) | No | 1.7 GB |
| `0xD6` | [ShowEventTitle](#showeventtitle) | No | 1.7 GB |
| `0xD7` | [HideEventTitle](#hideeventtitle) | No | 4 bytes |
| `0xD8` | [SetPage](#setpage) | No | 2 bytes |
| `0xD9` | [CustomHud](#customhud) | Yes | 1.7 GB |
| `0xDA` | [CustomPage](#custompage) | Yes | 1.7 GB |
| `0xDB` | [CustomPageEvent](#custompageevent) | No | 16.4 MB |
| `0xDE` | [EditorBlocksChange](#editorblockschange) | Yes | 139.3 MB |
| `0xDF` | [ServerInfo](#serverinfo) | No | 32.8 MB |
| `0xE0` | [AddToServerPlayerList](#addtoserverplayerlist) | No | 1.7 GB |
| `0xE1` | [RemoveFromServerPlayerList](#removefromserverplayerlist) | No | 65.5 MB |
| `0xE2` | [UpdateServerPlayerList](#updateserverplayerlist) | No | 131.1 MB |
| `0xE3` | [UpdateServerPlayerListPing](#updateserverplayerlistping) | No | 81.9 MB |
| `0xE4` | [UpdateKnownRecipes](#updateknownrecipes) | No | 1.7 GB |
| `0xE5` | [UpdatePortal](#updateportal) | No | 16.4 MB |
| `0xE6` | [UpdateVisibleHudComponents](#updatevisiblehudcomponents) | No | 4.1 MB |
| `0xE7` | [ResetUserInterfaceState](#resetuserinterfacestate) | No | 0 bytes |
| `0xE8` | [UpdateLanguage](#updatelanguage) | No | 16.4 MB |
| `0xE9` | [WorldSavingStatus](#worldsavingstatus) | No | 1 bytes |
| `0xEA` | [OpenChatWithCommand](#openchatwithcommand) | No | 16.4 MB |

---

## ServerMessage

| Property | Value |
|----------|-------|
| Packet ID | `0xD2` (210) |
| Compressed | No |
| Fixed Block Size | 2 bytes |
| Variable Field Count | 1 |
| Max Size | 1.7 GB |
| Nullable Bit Field | 1 byte(s) |

### Fields

| Name | Type | Nullable | Max Length |
|------|------|----------|------------|
| `type` | [ChatType](Version-2026.01.15-c04fdfe10-Enums#chattype) | No | - |
| `message` | [FormattedMessage](Version-2026.01.15-c04fdfe10-Data-Types#formattedmessage) | Yes | - |

**type** enum values:

- `0` = Chat

---

## ChatMessage

| Property | Value |
|----------|-------|
| Packet ID | `0xD3` (211) |
| Compressed | No |
| Fixed Block Size | 1 bytes |
| Variable Field Count | 1 |
| Max Size | 16.4 MB |
| Nullable Bit Field | 1 byte(s) |

### Fields

| Name | Type | Nullable | Max Length |
|------|------|----------|------------|
| `message` | `String` | Yes | 4096000 |

---

## Notification

| Property | Value |
|----------|-------|
| Packet ID | `0xD4` (212) |
| Compressed | No |
| Fixed Block Size | 2 bytes |
| Variable Field Count | 4 |
| Max Size | 1.7 GB |
| Nullable Bit Field | 1 byte(s) |

### Fields

| Name | Type | Nullable | Max Length |
|------|------|----------|------------|
| `message` | [FormattedMessage](Version-2026.01.15-c04fdfe10-Data-Types#formattedmessage) | Yes | - |
| `secondaryMessage` | [FormattedMessage](Version-2026.01.15-c04fdfe10-Data-Types#formattedmessage) | Yes | - |
| `icon` | `String` | Yes | 4096000 |
| `item` | [ItemWithAllMetadata](Version-2026.01.15-c04fdfe10-Data-Types#itemwithallmetadata) | Yes | - |
| `style` | [NotificationStyle](Version-2026.01.15-c04fdfe10-Enums#notificationstyle) | No | - |

**style** enum values:

- `0` = Default
- `1` = Danger
- `2` = Warning
- `3` = Success

---

## KillFeedMessage

| Property | Value |
|----------|-------|
| Packet ID | `0xD5` (213) |
| Compressed | No |
| Fixed Block Size | 1 bytes |
| Variable Field Count | 3 |
| Max Size | 1.7 GB |
| Nullable Bit Field | 1 byte(s) |

### Fields

| Name | Type | Nullable | Max Length |
|------|------|----------|------------|
| `killer` | [FormattedMessage](Version-2026.01.15-c04fdfe10-Data-Types#formattedmessage) | Yes | - |
| `decedent` | [FormattedMessage](Version-2026.01.15-c04fdfe10-Data-Types#formattedmessage) | Yes | - |
| `icon` | `String` | Yes | 4096000 |

---

## ShowEventTitle

| Property | Value |
|----------|-------|
| Packet ID | `0xD6` (214) |
| Compressed | No |
| Fixed Block Size | 14 bytes |
| Variable Field Count | 3 |
| Max Size | 1.7 GB |
| Nullable Bit Field | 1 byte(s) |

### Fields

| Name | Type | Nullable | Max Length |
|------|------|----------|------------|
| `fadeInDuration` | `float` | No | - |
| `fadeOutDuration` | `float` | No | - |
| `duration` | `float` | No | - |
| `icon` | `String` | Yes | 4096000 |
| `isMajor` | `boolean` | No | - |
| `primaryTitle` | [FormattedMessage](Version-2026.01.15-c04fdfe10-Data-Types#formattedmessage) | Yes | - |
| `secondaryTitle` | [FormattedMessage](Version-2026.01.15-c04fdfe10-Data-Types#formattedmessage) | Yes | - |

---

## HideEventTitle

| Property | Value |
|----------|-------|
| Packet ID | `0xD7` (215) |
| Compressed | No |
| Fixed Block Size | 4 bytes |
| Variable Field Count | 0 |
| Max Size | 4 bytes |

### Fields

| Name | Type | Nullable | Max Length |
|------|------|----------|------------|
| `fadeOutDuration` | `float` | No | - |

---

## SetPage

| Property | Value |
|----------|-------|
| Packet ID | `0xD8` (216) |
| Compressed | No |
| Fixed Block Size | 2 bytes |
| Variable Field Count | 0 |
| Max Size | 2 bytes |

### Fields

| Name | Type | Nullable | Max Length |
|------|------|----------|------------|
| `page` | [Page](Version-2026.01.15-c04fdfe10-Enums#page) | No | - |
| `canCloseThroughInteraction` | `boolean` | No | - |

**page** enum values:

- `0` = None
- `1` = Bench
- `2` = Inventory
- `3` = ToolsSettings
- `4` = Map
- `5` = MachinimaEditor
- `6` = ContentCreation
- `7` = Custom

---

## CustomHud

| Property | Value |
|----------|-------|
| Packet ID | `0xD9` (217) |
| Compressed | Yes |
| Fixed Block Size | 2 bytes |
| Variable Field Count | 1 |
| Max Size | 1.7 GB |
| Nullable Bit Field | 1 byte(s) |

### Fields

| Name | Type | Nullable | Max Length |
|------|------|----------|------------|
| `clear` | `boolean` | No | - |
| `commands` | [CustomUICommand](Version-2026.01.15-c04fdfe10-Data-Types#customuicommand)[] | Yes | 4096000 |

---

## CustomPage

| Property | Value |
|----------|-------|
| Packet ID | `0xDA` (218) |
| Compressed | Yes |
| Fixed Block Size | 4 bytes |
| Variable Field Count | 3 |
| Max Size | 1.7 GB |
| Nullable Bit Field | 1 byte(s) |

### Fields

| Name | Type | Nullable | Max Length |
|------|------|----------|------------|
| `key` | `String` | Yes | 4096000 |
| `isInitial` | `boolean` | No | - |
| `clear` | `boolean` | No | - |
| `lifetime` | [CustomPageLifetime](Version-2026.01.15-c04fdfe10-Enums#custompagelifetime) | No | - |
| `commands` | [CustomUICommand](Version-2026.01.15-c04fdfe10-Data-Types#customuicommand)[] | Yes | 4096000 |
| `eventBindings` | [CustomUIEventBinding](Version-2026.01.15-c04fdfe10-Data-Types#customuieventbinding)[] | Yes | 4096000 |

**lifetime** enum values:

- `0` = CantClose
- `1` = CanDismiss
- `2` = CanDismissOrCloseThroughInteraction

---

## CustomPageEvent

| Property | Value |
|----------|-------|
| Packet ID | `0xDB` (219) |
| Compressed | No |
| Fixed Block Size | 2 bytes |
| Variable Field Count | 1 |
| Max Size | 16.4 MB |
| Nullable Bit Field | 1 byte(s) |

### Fields

| Name | Type | Nullable | Max Length |
|------|------|----------|------------|
| `type` | [CustomPageEventType](Version-2026.01.15-c04fdfe10-Enums#custompageeventtype) | No | - |
| `data` | `String` | Yes | 4096000 |

**type** enum values:

- `0` = Acknowledge
- `1` = Data
- `2` = Dismiss

---

## EditorBlocksChange

| Property | Value |
|----------|-------|
| Packet ID | `0xDE` (222) |
| Compressed | Yes |
| Fixed Block Size | 30 bytes |
| Variable Field Count | 2 |
| Max Size | 139.3 MB |
| Nullable Bit Field | 1 byte(s) |

### Fields

| Name | Type | Nullable | Max Length |
|------|------|----------|------------|
| `selection` | [EditorSelection](Version-2026.01.15-c04fdfe10-Data-Types#editorselection) | Yes | - |
| `blocksChange` | [BlockChange](Version-2026.01.15-c04fdfe10-Data-Types#blockchange)[] | Yes | 4096000 |
| `fluidsChange` | [FluidChange](Version-2026.01.15-c04fdfe10-Data-Types#fluidchange)[] | Yes | 4096000 |
| `blocksCount` | `int` | No | - |
| `advancedPreview` | `boolean` | No | - |

---

## ServerInfo

| Property | Value |
|----------|-------|
| Packet ID | `0xDF` (223) |
| Compressed | No |
| Fixed Block Size | 5 bytes |
| Variable Field Count | 2 |
| Max Size | 32.8 MB |
| Nullable Bit Field | 1 byte(s) |

### Fields

| Name | Type | Nullable | Max Length |
|------|------|----------|------------|
| `serverName` | `String` | Yes | 4096000 |
| `motd` | `String` | Yes | 4096000 |
| `maxPlayers` | `int` | No | - |

---

## AddToServerPlayerList

| Property | Value |
|----------|-------|
| Packet ID | `0xE0` (224) |
| Compressed | No |
| Fixed Block Size | 1 bytes |
| Variable Field Count | 1 |
| Max Size | 1.7 GB |
| Nullable Bit Field | 1 byte(s) |

### Fields

| Name | Type | Nullable | Max Length |
|------|------|----------|------------|
| `players` | [ServerPlayerListPlayer](Version-2026.01.15-c04fdfe10-Data-Types#serverplayerlistplayer)[] | Yes | 4096000 |

---

## RemoveFromServerPlayerList

| Property | Value |
|----------|-------|
| Packet ID | `0xE1` (225) |
| Compressed | No |
| Fixed Block Size | 1 bytes |
| Variable Field Count | 1 |
| Max Size | 65.5 MB |
| Nullable Bit Field | 1 byte(s) |

### Fields

| Name | Type | Nullable | Max Length |
|------|------|----------|------------|
| `players` | `UUID[]` | Yes | 4096000 |

---

## UpdateServerPlayerList

| Property | Value |
|----------|-------|
| Packet ID | `0xE2` (226) |
| Compressed | No |
| Fixed Block Size | 1 bytes |
| Variable Field Count | 1 |
| Max Size | 131.1 MB |
| Nullable Bit Field | 1 byte(s) |

### Fields

| Name | Type | Nullable | Max Length |
|------|------|----------|------------|
| `players` | [ServerPlayerListUpdate](Version-2026.01.15-c04fdfe10-Data-Types#serverplayerlistupdate)[] | Yes | 4096000 |

---

## UpdateServerPlayerListPing

| Property | Value |
|----------|-------|
| Packet ID | `0xE3` (227) |
| Compressed | No |
| Fixed Block Size | 1 bytes |
| Variable Field Count | 1 |
| Max Size | 81.9 MB |
| Nullable Bit Field | 1 byte(s) |

### Fields

| Name | Type | Nullable | Max Length |
|------|------|----------|------------|
| `players` | `Map<UUID, Integer>` | Yes | - |

---

## UpdateKnownRecipes

| Property | Value |
|----------|-------|
| Packet ID | `0xE4` (228) |
| Compressed | No |
| Fixed Block Size | 1 bytes |
| Variable Field Count | 1 |
| Max Size | 1.7 GB |
| Nullable Bit Field | 1 byte(s) |

### Fields

| Name | Type | Nullable | Max Length |
|------|------|----------|------------|
| `known` | `Map<String, CraftingRecipe>` | Yes | - |

---

## UpdatePortal

| Property | Value |
|----------|-------|
| Packet ID | `0xE5` (229) |
| Compressed | No |
| Fixed Block Size | 6 bytes |
| Variable Field Count | 1 |
| Max Size | 16.4 MB |
| Nullable Bit Field | 1 byte(s) |

### Fields

| Name | Type | Nullable | Max Length |
|------|------|----------|------------|
| `state` | [PortalState](Version-2026.01.15-c04fdfe10-Data-Types#portalstate) | Yes | - |
| `definition` | [PortalDef](Version-2026.01.15-c04fdfe10-Data-Types#portaldef) | Yes | - |

---

## UpdateVisibleHudComponents

| Property | Value |
|----------|-------|
| Packet ID | `0xE6` (230) |
| Compressed | No |
| Fixed Block Size | 1 bytes |
| Variable Field Count | 1 |
| Max Size | 4.1 MB |
| Nullable Bit Field | 1 byte(s) |

### Fields

| Name | Type | Nullable | Max Length |
|------|------|----------|------------|
| `visibleComponents` | [HudComponent](Version-2026.01.15-c04fdfe10-Enums#hudcomponent)[] | Yes | 4096000 |

**visibleComponents** enum values:

- `0` = Hotbar
- `1` = StatusIcons
- `2` = Reticle
- `3` = Chat
- `4` = Requests
- `5` = Notifications
- `6` = KillFeed
- `7` = InputBindings
- `8` = PlayerList
- `9` = EventTitle
- `10` = Compass
- `11` = ObjectivePanel
- `12` = PortalPanel
- `13` = BuilderToolsLegend
- `14` = Speedometer
- `15` = UtilitySlotSelector
- `16` = BlockVariantSelector
- `17` = BuilderToolsMaterialSlotSelector
- `18` = Stamina
- `19` = AmmoIndicator
- `20` = Health
- `21` = Mana
- `22` = Oxygen
- `23` = Sleep

---

## ResetUserInterfaceState

| Property | Value |
|----------|-------|
| Packet ID | `0xE7` (231) |
| Compressed | No |
| Fixed Block Size | 0 bytes |
| Variable Field Count | 0 |
| Max Size | 0 bytes |

---

## UpdateLanguage

| Property | Value |
|----------|-------|
| Packet ID | `0xE8` (232) |
| Compressed | No |
| Fixed Block Size | 1 bytes |
| Variable Field Count | 1 |
| Max Size | 16.4 MB |
| Nullable Bit Field | 1 byte(s) |

### Fields

| Name | Type | Nullable | Max Length |
|------|------|----------|------------|
| `language` | `String` | Yes | 4096000 |

---

## WorldSavingStatus

| Property | Value |
|----------|-------|
| Packet ID | `0xE9` (233) |
| Compressed | No |
| Fixed Block Size | 1 bytes |
| Variable Field Count | 0 |
| Max Size | 1 bytes |

### Fields

| Name | Type | Nullable | Max Length |
|------|------|----------|------------|
| `isWorldSaving` | `boolean` | No | - |

---

## OpenChatWithCommand

| Property | Value |
|----------|-------|
| Packet ID | `0xEA` (234) |
| Compressed | No |
| Fixed Block Size | 1 bytes |
| Variable Field Count | 1 |
| Max Size | 16.4 MB |
| Nullable Bit Field | 1 byte(s) |

### Fields

| Name | Type | Nullable | Max Length |
|------|------|----------|------------|
| `command` | `String` | Yes | 4096000 |

---
[Back to Home](Version-2026.01.15-c04fdfe10-Home)