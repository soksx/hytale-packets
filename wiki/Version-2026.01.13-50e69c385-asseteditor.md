# Asseteditor Packets

**Version:** 2026.01.13-50e69c385

This category contains 56 packet(s).

## Packet Index

| ID | Name | Compressed | Max Size |
|----|------|------------|----------|
| `0x12C` | [FailureReply](#failurereply) | No | 1.7 GB |
| `0x12D` | [SuccessReply](#successreply) | No | 1.7 GB |
| `0x12E` | [AssetEditorInitialize](#asseteditorinitialize) | No | 0 bytes |
| `0x12F` | [AssetEditorAuthorization](#asseteditorauthorization) | No | 1 bytes |
| `0x130` | [AssetEditorCapabilities](#asseteditorcapabilities) | No | 5 bytes |
| `0x131` | [AssetEditorSetupSchemas](#asseteditorsetupschemas) | Yes | 1.7 GB |
| `0x132` | [AssetEditorSetupAssetTypes](#asseteditorsetupassettypes) | No | 1.7 GB |
| `0x133` | [AssetEditorCreateDirectory](#asseteditorcreatedirectory) | No | 32.8 MB |
| `0x134` | [AssetEditorDeleteDirectory](#asseteditordeletedirectory) | No | 32.8 MB |
| `0x135` | [AssetEditorRenameDirectory](#asseteditorrenamedirectory) | No | 65.5 MB |
| `0x136` | [AssetEditorFetchAsset](#asseteditorfetchasset) | No | 32.8 MB |
| `0x137` | [AssetEditorFetchJsonAssetWithParents](#asseteditorfetchjsonassetwithparents) | No | 32.8 MB |
| `0x138` | [AssetEditorFetchAssetReply](#asseteditorfetchassetreply) | No | 4.1 MB |
| `0x139` | [AssetEditorFetchJsonAssetWithParentsReply](#asseteditorfetchjsonassetwithparentsreply) | Yes | 1.7 GB |
| `0x13A` | [AssetEditorAssetPackSetup](#asseteditorassetpacksetup) | No | 1.7 GB |
| `0x13B` | [AssetEditorUpdateAssetPack](#asseteditorupdateassetpack) | No | 1.7 GB |
| `0x13C` | [AssetEditorCreateAssetPack](#asseteditorcreateassetpack) | No | 1.7 GB |
| `0x13D` | [AssetEditorDeleteAssetPack](#asseteditordeleteassetpack) | No | 16.4 MB |
| `0x13E` | [AssetEditorEnableAssetPack](#asseteditorenableassetpack) | No | 16.4 MB |
| `0x13F` | [AssetEditorAssetListSetup](#asseteditorassetlistsetup) | Yes | 1.7 GB |
| `0x140` | [AssetEditorAssetListUpdate](#asseteditorassetlistupdate) | Yes | 1.7 GB |
| `0x141` | [AssetEditorRequestChildrenList](#asseteditorrequestchildrenlist) | No | 32.8 MB |
| `0x142` | [AssetEditorRequestChildrenListReply](#asseteditorrequestchildrenlistreply) | No | 1.7 GB |
| `0x143` | [AssetEditorUpdateJsonAsset](#asseteditorupdatejsonasset) | Yes | 1.7 GB |
| `0x144` | [AssetEditorUpdateAsset](#asseteditorupdateasset) | No | 53.2 MB |
| `0x145` | [AssetEditorJsonAssetUpdated](#asseteditorjsonassetupdated) | No | 1.7 GB |
| `0x146` | [AssetEditorAssetUpdated](#asseteditorassetupdated) | No | 36.9 MB |
| `0x147` | [AssetEditorCreateAsset](#asseteditorcreateasset) | No | 53.2 MB |
| `0x148` | [AssetEditorRenameAsset](#asseteditorrenameasset) | No | 65.5 MB |
| `0x149` | [AssetEditorDeleteAsset](#asseteditordeleteasset) | No | 32.8 MB |
| `0x14A` | [AssetEditorDiscardChanges](#asseteditordiscardchanges) | No | 1.7 GB |
| `0x14B` | [AssetEditorFetchAutoCompleteData](#asseteditorfetchautocompletedata) | No | 32.8 MB |
| `0x14C` | [AssetEditorFetchAutoCompleteDataReply](#asseteditorfetchautocompletedatareply) | No | 1.7 GB |
| `0x14D` | [AssetEditorRequestDataset](#asseteditorrequestdataset) | No | 16.4 MB |
| `0x14E` | [AssetEditorRequestDatasetReply](#asseteditorrequestdatasetreply) | No | 1.7 GB |
| `0x14F` | [AssetEditorActivateButton](#asseteditoractivatebutton) | No | 16.4 MB |
| `0x150` | [AssetEditorSelectAsset](#asseteditorselectasset) | No | 32.8 MB |
| `0x151` | [AssetEditorPopupNotification](#asseteditorpopupnotification) | No | 1.7 GB |
| `0x152` | [AssetEditorFetchLastModifiedAssets](#asseteditorfetchlastmodifiedassets) | No | 0 bytes |
| `0x153` | [AssetEditorLastModifiedAssets](#asseteditorlastmodifiedassets) | No | 1.7 GB |
| `0x154` | [AssetEditorModifiedAssetsCount](#asseteditormodifiedassetscount) | No | 4 bytes |
| `0x155` | [AssetEditorSubscribeModifiedAssetsChanges](#asseteditorsubscribemodifiedassetschanges) | No | 1 bytes |
| `0x156` | [AssetEditorExportAssets](#asseteditorexportassets) | No | 1.7 GB |
| `0x157` | [AssetEditorExportAssetInitialize](#asseteditorexportassetinitialize) | No | 81.9 MB |
| `0x158` | [AssetEditorExportAssetPart](#asseteditorexportassetpart) | Yes | 4.1 MB |
| `0x159` | [AssetEditorExportAssetFinalize](#asseteditorexportassetfinalize) | No | 0 bytes |
| `0x15A` | [AssetEditorExportDeleteAssets](#asseteditorexportdeleteassets) | No | 1.7 GB |
| `0x15B` | [AssetEditorExportComplete](#asseteditorexportcomplete) | No | 1.7 GB |
| `0x15C` | [AssetEditorRebuildCaches](#asseteditorrebuildcaches) | No | 5 bytes |
| `0x15D` | [AssetEditorUndoChanges](#asseteditorundochanges) | No | 32.8 MB |
| `0x15E` | [AssetEditorRedoChanges](#asseteditorredochanges) | No | 32.8 MB |
| `0x15F` | [AssetEditorUndoRedoReply](#asseteditorundoredoreply) | No | 1.7 GB |
| `0x160` | [AssetEditorSetGameTime](#asseteditorsetgametime) | No | 14 bytes |
| `0x161` | [AssetEditorUpdateSecondsPerGameDay](#asseteditorupdatesecondspergameday) | No | 8 bytes |
| `0x162` | [AssetEditorUpdateWeatherPreviewLock](#asseteditorupdateweatherpreviewlock) | No | 1 bytes |
| `0x163` | [AssetEditorUpdateModelPreview](#asseteditorupdatemodelpreview) | No | 1.7 GB |

---

## FailureReply

| Property | Value |
|----------|-------|
| Packet ID | `0x12C` (300) |
| Compressed | No |
| Fixed Block Size | 5 bytes |
| Variable Field Count | 1 |
| Max Size | 1.7 GB |
| Nullable Bit Field | 1 byte(s) |

### Fields

| Name | Type | Nullable | Max Length |
|------|------|----------|------------|
| `token` | `int` | No | - |
| `message` | [FormattedMessage](Version-2026.01.13-50e69c385-Data-Types#formattedmessage) | Yes | - |

---

## SuccessReply

| Property | Value |
|----------|-------|
| Packet ID | `0x12D` (301) |
| Compressed | No |
| Fixed Block Size | 5 bytes |
| Variable Field Count | 1 |
| Max Size | 1.7 GB |
| Nullable Bit Field | 1 byte(s) |

### Fields

| Name | Type | Nullable | Max Length |
|------|------|----------|------------|
| `token` | `int` | No | - |
| `message` | [FormattedMessage](Version-2026.01.13-50e69c385-Data-Types#formattedmessage) | Yes | - |

---

## AssetEditorInitialize

| Property | Value |
|----------|-------|
| Packet ID | `0x12E` (302) |
| Compressed | No |
| Fixed Block Size | 0 bytes |
| Variable Field Count | 0 |
| Max Size | 0 bytes |

---

## AssetEditorAuthorization

| Property | Value |
|----------|-------|
| Packet ID | `0x12F` (303) |
| Compressed | No |
| Fixed Block Size | 1 bytes |
| Variable Field Count | 0 |
| Max Size | 1 bytes |

### Fields

| Name | Type | Nullable | Max Length |
|------|------|----------|------------|
| `canUse` | `boolean` | No | - |

---

## AssetEditorCapabilities

| Property | Value |
|----------|-------|
| Packet ID | `0x130` (304) |
| Compressed | No |
| Fixed Block Size | 5 bytes |
| Variable Field Count | 0 |
| Max Size | 5 bytes |

### Fields

| Name | Type | Nullable | Max Length |
|------|------|----------|------------|
| `canDiscardAssets` | `boolean` | No | - |
| `canEditAssets` | `boolean` | No | - |
| `canCreateAssetPacks` | `boolean` | No | - |
| `canEditAssetPacks` | `boolean` | No | - |
| `canDeleteAssetPacks` | `boolean` | No | - |

---

## AssetEditorSetupSchemas

| Property | Value |
|----------|-------|
| Packet ID | `0x131` (305) |
| Compressed | Yes |
| Fixed Block Size | 1 bytes |
| Variable Field Count | 1 |
| Max Size | 1.7 GB |
| Nullable Bit Field | 1 byte(s) |

### Fields

| Name | Type | Nullable | Max Length |
|------|------|----------|------------|
| `schemas` | [SchemaFile](Version-2026.01.13-50e69c385-Data-Types#schemafile)[] | Yes | 4096000 |

---

## AssetEditorSetupAssetTypes

| Property | Value |
|----------|-------|
| Packet ID | `0x132` (306) |
| Compressed | No |
| Fixed Block Size | 1 bytes |
| Variable Field Count | 1 |
| Max Size | 1.7 GB |
| Nullable Bit Field | 1 byte(s) |

### Fields

| Name | Type | Nullable | Max Length |
|------|------|----------|------------|
| `assetTypes` | [AssetEditorAssetType](Version-2026.01.13-50e69c385-Data-Types#asseteditorassettype)[] | Yes | 4096000 |

---

## AssetEditorCreateDirectory

| Property | Value |
|----------|-------|
| Packet ID | `0x133` (307) |
| Compressed | No |
| Fixed Block Size | 5 bytes |
| Variable Field Count | 1 |
| Max Size | 32.8 MB |
| Nullable Bit Field | 1 byte(s) |

### Fields

| Name | Type | Nullable | Max Length |
|------|------|----------|------------|
| `token` | `int` | No | - |
| `path` | [AssetPath](Version-2026.01.13-50e69c385-Data-Types#assetpath) | Yes | - |

---

## AssetEditorDeleteDirectory

| Property | Value |
|----------|-------|
| Packet ID | `0x134` (308) |
| Compressed | No |
| Fixed Block Size | 5 bytes |
| Variable Field Count | 1 |
| Max Size | 32.8 MB |
| Nullable Bit Field | 1 byte(s) |

### Fields

| Name | Type | Nullable | Max Length |
|------|------|----------|------------|
| `token` | `int` | No | - |
| `path` | [AssetPath](Version-2026.01.13-50e69c385-Data-Types#assetpath) | Yes | - |

---

## AssetEditorRenameDirectory

| Property | Value |
|----------|-------|
| Packet ID | `0x135` (309) |
| Compressed | No |
| Fixed Block Size | 5 bytes |
| Variable Field Count | 2 |
| Max Size | 65.5 MB |
| Nullable Bit Field | 1 byte(s) |

### Fields

| Name | Type | Nullable | Max Length |
|------|------|----------|------------|
| `token` | `int` | No | - |
| `path` | [AssetPath](Version-2026.01.13-50e69c385-Data-Types#assetpath) | Yes | - |
| `newPath` | [AssetPath](Version-2026.01.13-50e69c385-Data-Types#assetpath) | Yes | - |

---

## AssetEditorFetchAsset

| Property | Value |
|----------|-------|
| Packet ID | `0x136` (310) |
| Compressed | No |
| Fixed Block Size | 6 bytes |
| Variable Field Count | 1 |
| Max Size | 32.8 MB |
| Nullable Bit Field | 1 byte(s) |

### Fields

| Name | Type | Nullable | Max Length |
|------|------|----------|------------|
| `token` | `int` | No | - |
| `path` | [AssetPath](Version-2026.01.13-50e69c385-Data-Types#assetpath) | Yes | - |
| `isFromOpenedTab` | `boolean` | No | - |

---

## AssetEditorFetchJsonAssetWithParents

| Property | Value |
|----------|-------|
| Packet ID | `0x137` (311) |
| Compressed | No |
| Fixed Block Size | 6 bytes |
| Variable Field Count | 1 |
| Max Size | 32.8 MB |
| Nullable Bit Field | 1 byte(s) |

### Fields

| Name | Type | Nullable | Max Length |
|------|------|----------|------------|
| `token` | `int` | No | - |
| `path` | [AssetPath](Version-2026.01.13-50e69c385-Data-Types#assetpath) | Yes | - |
| `isFromOpenedTab` | `boolean` | No | - |

---

## AssetEditorFetchAssetReply

| Property | Value |
|----------|-------|
| Packet ID | `0x138` (312) |
| Compressed | No |
| Fixed Block Size | 5 bytes |
| Variable Field Count | 1 |
| Max Size | 4.1 MB |
| Nullable Bit Field | 1 byte(s) |

### Fields

| Name | Type | Nullable | Max Length |
|------|------|----------|------------|
| `token` | `int` | No | - |
| `contents` | `byte[]` | Yes | 4096000 |

---

## AssetEditorFetchJsonAssetWithParentsReply

| Property | Value |
|----------|-------|
| Packet ID | `0x139` (313) |
| Compressed | Yes |
| Fixed Block Size | 5 bytes |
| Variable Field Count | 1 |
| Max Size | 1.7 GB |
| Nullable Bit Field | 1 byte(s) |

### Fields

| Name | Type | Nullable | Max Length |
|------|------|----------|------------|
| `token` | `int` | No | - |
| `assets` | `Map<AssetPath, String>` | Yes | - |

---

## AssetEditorAssetPackSetup

| Property | Value |
|----------|-------|
| Packet ID | `0x13A` (314) |
| Compressed | No |
| Fixed Block Size | 1 bytes |
| Variable Field Count | 1 |
| Max Size | 1.7 GB |
| Nullable Bit Field | 1 byte(s) |

### Fields

| Name | Type | Nullable | Max Length |
|------|------|----------|------------|
| `packs` | `Map<String, AssetPackManifest>` | Yes | - |

---

## AssetEditorUpdateAssetPack

| Property | Value |
|----------|-------|
| Packet ID | `0x13B` (315) |
| Compressed | No |
| Fixed Block Size | 1 bytes |
| Variable Field Count | 2 |
| Max Size | 1.7 GB |
| Nullable Bit Field | 1 byte(s) |

### Fields

| Name | Type | Nullable | Max Length |
|------|------|----------|------------|
| `id` | `String` | Yes | 4096000 |
| `manifest` | [AssetPackManifest](Version-2026.01.13-50e69c385-Data-Types#assetpackmanifest) | Yes | - |

---

## AssetEditorCreateAssetPack

| Property | Value |
|----------|-------|
| Packet ID | `0x13C` (316) |
| Compressed | No |
| Fixed Block Size | 5 bytes |
| Variable Field Count | 1 |
| Max Size | 1.7 GB |
| Nullable Bit Field | 1 byte(s) |

### Fields

| Name | Type | Nullable | Max Length |
|------|------|----------|------------|
| `token` | `int` | No | - |
| `manifest` | [AssetPackManifest](Version-2026.01.13-50e69c385-Data-Types#assetpackmanifest) | Yes | - |

---

## AssetEditorDeleteAssetPack

| Property | Value |
|----------|-------|
| Packet ID | `0x13D` (317) |
| Compressed | No |
| Fixed Block Size | 1 bytes |
| Variable Field Count | 1 |
| Max Size | 16.4 MB |
| Nullable Bit Field | 1 byte(s) |

### Fields

| Name | Type | Nullable | Max Length |
|------|------|----------|------------|
| `id` | `String` | Yes | 4096000 |

---

## AssetEditorEnableAssetPack

| Property | Value |
|----------|-------|
| Packet ID | `0x13E` (318) |
| Compressed | No |
| Fixed Block Size | 2 bytes |
| Variable Field Count | 1 |
| Max Size | 16.4 MB |
| Nullable Bit Field | 1 byte(s) |

### Fields

| Name | Type | Nullable | Max Length |
|------|------|----------|------------|
| `id` | `String` | Yes | 4096000 |
| `enabled` | `boolean` | No | - |

---

## AssetEditorAssetListSetup

| Property | Value |
|----------|-------|
| Packet ID | `0x13F` (319) |
| Compressed | Yes |
| Fixed Block Size | 4 bytes |
| Variable Field Count | 2 |
| Max Size | 1.7 GB |
| Nullable Bit Field | 1 byte(s) |

### Fields

| Name | Type | Nullable | Max Length |
|------|------|----------|------------|
| `pack` | `String` | Yes | 4096000 |
| `isReadOnly` | `boolean` | No | - |
| `canBeDeleted` | `boolean` | No | - |
| `tree` | [AssetEditorFileTree](Version-2026.01.13-50e69c385-Enums#asseteditorfiletree) | No | - |
| `paths` | [AssetEditorFileEntry](Version-2026.01.13-50e69c385-Data-Types#asseteditorfileentry)[] | Yes | 4096000 |

**tree** enum values:

- `0` = Server
- `1` = Common

---

## AssetEditorAssetListUpdate

| Property | Value |
|----------|-------|
| Packet ID | `0x140` (320) |
| Compressed | Yes |
| Fixed Block Size | 1 bytes |
| Variable Field Count | 3 |
| Max Size | 1.7 GB |
| Nullable Bit Field | 1 byte(s) |

### Fields

| Name | Type | Nullable | Max Length |
|------|------|----------|------------|
| `pack` | `String` | Yes | 4096000 |
| `additions` | [AssetEditorFileEntry](Version-2026.01.13-50e69c385-Data-Types#asseteditorfileentry)[] | Yes | 4096000 |
| `deletions` | [AssetEditorFileEntry](Version-2026.01.13-50e69c385-Data-Types#asseteditorfileentry)[] | Yes | 4096000 |

---

## AssetEditorRequestChildrenList

| Property | Value |
|----------|-------|
| Packet ID | `0x141` (321) |
| Compressed | No |
| Fixed Block Size | 1 bytes |
| Variable Field Count | 1 |
| Max Size | 32.8 MB |
| Nullable Bit Field | 1 byte(s) |

### Fields

| Name | Type | Nullable | Max Length |
|------|------|----------|------------|
| `path` | [AssetPath](Version-2026.01.13-50e69c385-Data-Types#assetpath) | Yes | - |

---

## AssetEditorRequestChildrenListReply

| Property | Value |
|----------|-------|
| Packet ID | `0x142` (322) |
| Compressed | No |
| Fixed Block Size | 1 bytes |
| Variable Field Count | 2 |
| Max Size | 1.7 GB |
| Nullable Bit Field | 1 byte(s) |

### Fields

| Name | Type | Nullable | Max Length |
|------|------|----------|------------|
| `path` | [AssetPath](Version-2026.01.13-50e69c385-Data-Types#assetpath) | Yes | - |
| `childrenIds` | `String[]` | Yes | 4096000 |

---

## AssetEditorUpdateJsonAsset

| Property | Value |
|----------|-------|
| Packet ID | `0x143` (323) |
| Compressed | Yes |
| Fixed Block Size | 9 bytes |
| Variable Field Count | 3 |
| Max Size | 1.7 GB |
| Nullable Bit Field | 1 byte(s) |

### Fields

| Name | Type | Nullable | Max Length |
|------|------|----------|------------|
| `token` | `int` | No | - |
| `assetType` | `String` | Yes | 4096000 |
| `path` | [AssetPath](Version-2026.01.13-50e69c385-Data-Types#assetpath) | Yes | - |
| `assetIndex` | `int` | No | - |
| `commands` | [JsonUpdateCommand](Version-2026.01.13-50e69c385-Data-Types#jsonupdatecommand)[] | Yes | 4096000 |

---

## AssetEditorUpdateAsset

| Property | Value |
|----------|-------|
| Packet ID | `0x144` (324) |
| Compressed | No |
| Fixed Block Size | 9 bytes |
| Variable Field Count | 3 |
| Max Size | 53.2 MB |
| Nullable Bit Field | 1 byte(s) |

### Fields

| Name | Type | Nullable | Max Length |
|------|------|----------|------------|
| `token` | `int` | No | - |
| `assetType` | `String` | Yes | 4096000 |
| `path` | [AssetPath](Version-2026.01.13-50e69c385-Data-Types#assetpath) | Yes | - |
| `assetIndex` | `int` | No | - |
| `data` | `byte[]` | Yes | 4096000 |

---

## AssetEditorJsonAssetUpdated

| Property | Value |
|----------|-------|
| Packet ID | `0x145` (325) |
| Compressed | No |
| Fixed Block Size | 1 bytes |
| Variable Field Count | 2 |
| Max Size | 1.7 GB |
| Nullable Bit Field | 1 byte(s) |

### Fields

| Name | Type | Nullable | Max Length |
|------|------|----------|------------|
| `path` | [AssetPath](Version-2026.01.13-50e69c385-Data-Types#assetpath) | Yes | - |
| `commands` | [JsonUpdateCommand](Version-2026.01.13-50e69c385-Data-Types#jsonupdatecommand)[] | Yes | 4096000 |

---

## AssetEditorAssetUpdated

| Property | Value |
|----------|-------|
| Packet ID | `0x146` (326) |
| Compressed | No |
| Fixed Block Size | 1 bytes |
| Variable Field Count | 2 |
| Max Size | 36.9 MB |
| Nullable Bit Field | 1 byte(s) |

### Fields

| Name | Type | Nullable | Max Length |
|------|------|----------|------------|
| `path` | [AssetPath](Version-2026.01.13-50e69c385-Data-Types#assetpath) | Yes | - |
| `data` | `byte[]` | Yes | 4096000 |

---

## AssetEditorCreateAsset

| Property | Value |
|----------|-------|
| Packet ID | `0x147` (327) |
| Compressed | No |
| Fixed Block Size | 10 bytes |
| Variable Field Count | 3 |
| Max Size | 53.2 MB |
| Nullable Bit Field | 1 byte(s) |

### Fields

| Name | Type | Nullable | Max Length |
|------|------|----------|------------|
| `token` | `int` | No | - |
| `path` | [AssetPath](Version-2026.01.13-50e69c385-Data-Types#assetpath) | Yes | - |
| `data` | `byte[]` | Yes | 4096000 |
| `rebuildCaches` | `AssetEditorRebuildCaches` | Yes | - |
| `buttonId` | `String` | Yes | 4096000 |

---

## AssetEditorRenameAsset

| Property | Value |
|----------|-------|
| Packet ID | `0x148` (328) |
| Compressed | No |
| Fixed Block Size | 5 bytes |
| Variable Field Count | 2 |
| Max Size | 65.5 MB |
| Nullable Bit Field | 1 byte(s) |

### Fields

| Name | Type | Nullable | Max Length |
|------|------|----------|------------|
| `token` | `int` | No | - |
| `path` | [AssetPath](Version-2026.01.13-50e69c385-Data-Types#assetpath) | Yes | - |
| `newPath` | [AssetPath](Version-2026.01.13-50e69c385-Data-Types#assetpath) | Yes | - |

---

## AssetEditorDeleteAsset

| Property | Value |
|----------|-------|
| Packet ID | `0x149` (329) |
| Compressed | No |
| Fixed Block Size | 5 bytes |
| Variable Field Count | 1 |
| Max Size | 32.8 MB |
| Nullable Bit Field | 1 byte(s) |

### Fields

| Name | Type | Nullable | Max Length |
|------|------|----------|------------|
| `token` | `int` | No | - |
| `path` | [AssetPath](Version-2026.01.13-50e69c385-Data-Types#assetpath) | Yes | - |

---

## AssetEditorDiscardChanges

| Property | Value |
|----------|-------|
| Packet ID | `0x14A` (330) |
| Compressed | No |
| Fixed Block Size | 1 bytes |
| Variable Field Count | 1 |
| Max Size | 1.7 GB |
| Nullable Bit Field | 1 byte(s) |

### Fields

| Name | Type | Nullable | Max Length |
|------|------|----------|------------|
| `assets` | [TimestampedAssetReference](Version-2026.01.13-50e69c385-Data-Types#timestampedassetreference)[] | Yes | 4096000 |

---

## AssetEditorFetchAutoCompleteData

| Property | Value |
|----------|-------|
| Packet ID | `0x14B` (331) |
| Compressed | No |
| Fixed Block Size | 5 bytes |
| Variable Field Count | 2 |
| Max Size | 32.8 MB |
| Nullable Bit Field | 1 byte(s) |

### Fields

| Name | Type | Nullable | Max Length |
|------|------|----------|------------|
| `token` | `int` | No | - |
| `dataset` | `String` | Yes | 4096000 |
| `query` | `String` | Yes | 4096000 |

---

## AssetEditorFetchAutoCompleteDataReply

| Property | Value |
|----------|-------|
| Packet ID | `0x14C` (332) |
| Compressed | No |
| Fixed Block Size | 5 bytes |
| Variable Field Count | 1 |
| Max Size | 1.7 GB |
| Nullable Bit Field | 1 byte(s) |

### Fields

| Name | Type | Nullable | Max Length |
|------|------|----------|------------|
| `token` | `int` | No | - |
| `results` | `String[]` | Yes | 4096000 |

---

## AssetEditorRequestDataset

| Property | Value |
|----------|-------|
| Packet ID | `0x14D` (333) |
| Compressed | No |
| Fixed Block Size | 1 bytes |
| Variable Field Count | 1 |
| Max Size | 16.4 MB |
| Nullable Bit Field | 1 byte(s) |

### Fields

| Name | Type | Nullable | Max Length |
|------|------|----------|------------|
| `name` | `String` | Yes | 4096000 |

---

## AssetEditorRequestDatasetReply

| Property | Value |
|----------|-------|
| Packet ID | `0x14E` (334) |
| Compressed | No |
| Fixed Block Size | 1 bytes |
| Variable Field Count | 2 |
| Max Size | 1.7 GB |
| Nullable Bit Field | 1 byte(s) |

### Fields

| Name | Type | Nullable | Max Length |
|------|------|----------|------------|
| `name` | `String` | Yes | 4096000 |
| `ids` | `String[]` | Yes | 4096000 |

---

## AssetEditorActivateButton

| Property | Value |
|----------|-------|
| Packet ID | `0x14F` (335) |
| Compressed | No |
| Fixed Block Size | 1 bytes |
| Variable Field Count | 1 |
| Max Size | 16.4 MB |
| Nullable Bit Field | 1 byte(s) |

### Fields

| Name | Type | Nullable | Max Length |
|------|------|----------|------------|
| `buttonId` | `String` | Yes | 4096000 |

---

## AssetEditorSelectAsset

| Property | Value |
|----------|-------|
| Packet ID | `0x150` (336) |
| Compressed | No |
| Fixed Block Size | 1 bytes |
| Variable Field Count | 1 |
| Max Size | 32.8 MB |
| Nullable Bit Field | 1 byte(s) |

### Fields

| Name | Type | Nullable | Max Length |
|------|------|----------|------------|
| `path` | [AssetPath](Version-2026.01.13-50e69c385-Data-Types#assetpath) | Yes | - |

---

## AssetEditorPopupNotification

| Property | Value |
|----------|-------|
| Packet ID | `0x151` (337) |
| Compressed | No |
| Fixed Block Size | 2 bytes |
| Variable Field Count | 1 |
| Max Size | 1.7 GB |
| Nullable Bit Field | 1 byte(s) |

### Fields

| Name | Type | Nullable | Max Length |
|------|------|----------|------------|
| `type` | [AssetEditorPopupNotificationType](Version-2026.01.13-50e69c385-Enums#asseteditorpopupnotificationtype) | No | - |
| `message` | [FormattedMessage](Version-2026.01.13-50e69c385-Data-Types#formattedmessage) | Yes | - |

**type** enum values:

- `0` = Info
- `1` = Success
- `2` = Error
- `3` = Warning

---

## AssetEditorFetchLastModifiedAssets

| Property | Value |
|----------|-------|
| Packet ID | `0x152` (338) |
| Compressed | No |
| Fixed Block Size | 0 bytes |
| Variable Field Count | 0 |
| Max Size | 0 bytes |

---

## AssetEditorLastModifiedAssets

| Property | Value |
|----------|-------|
| Packet ID | `0x153` (339) |
| Compressed | No |
| Fixed Block Size | 1 bytes |
| Variable Field Count | 1 |
| Max Size | 1.7 GB |
| Nullable Bit Field | 1 byte(s) |

### Fields

| Name | Type | Nullable | Max Length |
|------|------|----------|------------|
| `assets` | [AssetInfo](Version-2026.01.13-50e69c385-Data-Types#assetinfo)[] | Yes | 4096000 |

---

## AssetEditorModifiedAssetsCount

| Property | Value |
|----------|-------|
| Packet ID | `0x154` (340) |
| Compressed | No |
| Fixed Block Size | 4 bytes |
| Variable Field Count | 0 |
| Max Size | 4 bytes |

### Fields

| Name | Type | Nullable | Max Length |
|------|------|----------|------------|
| `count` | `int` | No | - |

---

## AssetEditorSubscribeModifiedAssetsChanges

| Property | Value |
|----------|-------|
| Packet ID | `0x155` (341) |
| Compressed | No |
| Fixed Block Size | 1 bytes |
| Variable Field Count | 0 |
| Max Size | 1 bytes |

### Fields

| Name | Type | Nullable | Max Length |
|------|------|----------|------------|
| `subscribe` | `boolean` | No | - |

---

## AssetEditorExportAssets

| Property | Value |
|----------|-------|
| Packet ID | `0x156` (342) |
| Compressed | No |
| Fixed Block Size | 1 bytes |
| Variable Field Count | 1 |
| Max Size | 1.7 GB |
| Nullable Bit Field | 1 byte(s) |

### Fields

| Name | Type | Nullable | Max Length |
|------|------|----------|------------|
| `paths` | [AssetPath](Version-2026.01.13-50e69c385-Data-Types#assetpath)[] | Yes | 4096000 |

---

## AssetEditorExportAssetInitialize

| Property | Value |
|----------|-------|
| Packet ID | `0x157` (343) |
| Compressed | No |
| Fixed Block Size | 6 bytes |
| Variable Field Count | 2 |
| Max Size | 81.9 MB |
| Nullable Bit Field | 1 byte(s) |

### Fields

| Name | Type | Nullable | Max Length |
|------|------|----------|------------|
| `asset` | [AssetEditorAsset](Version-2026.01.13-50e69c385-Data-Types#asseteditorasset) | Yes | - |
| `oldPath` | [AssetPath](Version-2026.01.13-50e69c385-Data-Types#assetpath) | Yes | - |
| `size` | `int` | No | - |
| `failed` | `boolean` | No | - |

---

## AssetEditorExportAssetPart

| Property | Value |
|----------|-------|
| Packet ID | `0x158` (344) |
| Compressed | Yes |
| Fixed Block Size | 1 bytes |
| Variable Field Count | 1 |
| Max Size | 4.1 MB |
| Nullable Bit Field | 1 byte(s) |

### Fields

| Name | Type | Nullable | Max Length |
|------|------|----------|------------|
| `part` | `byte[]` | Yes | 4096000 |

---

## AssetEditorExportAssetFinalize

| Property | Value |
|----------|-------|
| Packet ID | `0x159` (345) |
| Compressed | No |
| Fixed Block Size | 0 bytes |
| Variable Field Count | 0 |
| Max Size | 0 bytes |

---

## AssetEditorExportDeleteAssets

| Property | Value |
|----------|-------|
| Packet ID | `0x15A` (346) |
| Compressed | No |
| Fixed Block Size | 1 bytes |
| Variable Field Count | 1 |
| Max Size | 1.7 GB |
| Nullable Bit Field | 1 byte(s) |

### Fields

| Name | Type | Nullable | Max Length |
|------|------|----------|------------|
| `asset` | [AssetEditorAsset](Version-2026.01.13-50e69c385-Data-Types#asseteditorasset)[] | Yes | 4096000 |

---

## AssetEditorExportComplete

| Property | Value |
|----------|-------|
| Packet ID | `0x15B` (347) |
| Compressed | No |
| Fixed Block Size | 1 bytes |
| Variable Field Count | 1 |
| Max Size | 1.7 GB |
| Nullable Bit Field | 1 byte(s) |

### Fields

| Name | Type | Nullable | Max Length |
|------|------|----------|------------|
| `assets` | [TimestampedAssetReference](Version-2026.01.13-50e69c385-Data-Types#timestampedassetreference)[] | Yes | 4096000 |

---

## AssetEditorRebuildCaches

| Property | Value |
|----------|-------|
| Packet ID | `0x15C` (348) |
| Compressed | No |
| Fixed Block Size | 5 bytes |
| Variable Field Count | 0 |
| Max Size | 5 bytes |

### Fields

| Name | Type | Nullable | Max Length |
|------|------|----------|------------|
| `blockTextures` | `boolean` | No | - |
| `models` | `boolean` | No | - |
| `modelTextures` | `boolean` | No | - |
| `mapGeometry` | `boolean` | No | - |
| `itemIcons` | `boolean` | No | - |

---

## AssetEditorUndoChanges

| Property | Value |
|----------|-------|
| Packet ID | `0x15D` (349) |
| Compressed | No |
| Fixed Block Size | 5 bytes |
| Variable Field Count | 1 |
| Max Size | 32.8 MB |
| Nullable Bit Field | 1 byte(s) |

### Fields

| Name | Type | Nullable | Max Length |
|------|------|----------|------------|
| `token` | `int` | No | - |
| `path` | [AssetPath](Version-2026.01.13-50e69c385-Data-Types#assetpath) | Yes | - |

---

## AssetEditorRedoChanges

| Property | Value |
|----------|-------|
| Packet ID | `0x15E` (350) |
| Compressed | No |
| Fixed Block Size | 5 bytes |
| Variable Field Count | 1 |
| Max Size | 32.8 MB |
| Nullable Bit Field | 1 byte(s) |

### Fields

| Name | Type | Nullable | Max Length |
|------|------|----------|------------|
| `token` | `int` | No | - |
| `path` | [AssetPath](Version-2026.01.13-50e69c385-Data-Types#assetpath) | Yes | - |

---

## AssetEditorUndoRedoReply

| Property | Value |
|----------|-------|
| Packet ID | `0x15F` (351) |
| Compressed | No |
| Fixed Block Size | 5 bytes |
| Variable Field Count | 1 |
| Max Size | 1.7 GB |
| Nullable Bit Field | 1 byte(s) |

### Fields

| Name | Type | Nullable | Max Length |
|------|------|----------|------------|
| `token` | `int` | No | - |
| `command` | [JsonUpdateCommand](Version-2026.01.13-50e69c385-Data-Types#jsonupdatecommand) | Yes | - |

---

## AssetEditorSetGameTime

| Property | Value |
|----------|-------|
| Packet ID | `0x160` (352) |
| Compressed | No |
| Fixed Block Size | 14 bytes |
| Variable Field Count | 0 |
| Max Size | 14 bytes |
| Nullable Bit Field | 1 byte(s) |

### Fields

| Name | Type | Nullable | Max Length |
|------|------|----------|------------|
| `gameTime` | [InstantData](Version-2026.01.13-50e69c385-Data-Types#instantdata) | Yes | - |
| `paused` | `boolean` | No | - |

---

## AssetEditorUpdateSecondsPerGameDay

| Property | Value |
|----------|-------|
| Packet ID | `0x161` (353) |
| Compressed | No |
| Fixed Block Size | 8 bytes |
| Variable Field Count | 0 |
| Max Size | 8 bytes |

### Fields

| Name | Type | Nullable | Max Length |
|------|------|----------|------------|
| `daytimeDurationSeconds` | `int` | No | - |
| `nighttimeDurationSeconds` | `int` | No | - |

---

## AssetEditorUpdateWeatherPreviewLock

| Property | Value |
|----------|-------|
| Packet ID | `0x162` (354) |
| Compressed | No |
| Fixed Block Size | 1 bytes |
| Variable Field Count | 0 |
| Max Size | 1 bytes |

### Fields

| Name | Type | Nullable | Max Length |
|------|------|----------|------------|
| `locked` | `boolean` | No | - |

---

## AssetEditorUpdateModelPreview

| Property | Value |
|----------|-------|
| Packet ID | `0x163` (355) |
| Compressed | No |
| Fixed Block Size | 30 bytes |
| Variable Field Count | 3 |
| Max Size | 1.7 GB |
| Nullable Bit Field | 1 byte(s) |

### Fields

| Name | Type | Nullable | Max Length |
|------|------|----------|------------|
| `assetPath` | [AssetPath](Version-2026.01.13-50e69c385-Data-Types#assetpath) | Yes | - |
| `model` | [Model](Version-2026.01.13-50e69c385-Data-Types#model) | Yes | - |
| `block` | [BlockType](Version-2026.01.13-50e69c385-Data-Types#blocktype) | Yes | - |
| `camera` | [AssetEditorPreviewCameraSettings](Version-2026.01.13-50e69c385-Data-Types#asseteditorpreviewcamerasettings) | Yes | - |

---
[Back to Home](Version-2026.01.13-50e69c385-Home)