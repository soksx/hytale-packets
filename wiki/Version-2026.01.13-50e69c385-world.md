# World Packets

**Version:** 2026.01.13-50e69c385

This category contains 28 packet(s).

## Packet Index

| ID | Name | Compressed | Max Size |
|----|------|------------|----------|
| `0x83` | [SetChunk](#setchunk) | Yes | 12.3 MB |
| `0x84` | [SetChunkHeightmap](#setchunkheightmap) | Yes | 4.1 MB |
| `0x85` | [SetChunkTintmap](#setchunktintmap) | Yes | 4.1 MB |
| `0x86` | [SetChunkEnvironments](#setchunkenvironments) | Yes | 4.1 MB |
| `0x87` | [UnloadChunk](#unloadchunk) | No | 8 bytes |
| `0x88` | [SetFluids](#setfluids) | Yes | 4.1 MB |
| `0x8C` | [ServerSetBlock](#serversetblock) | No | 19 bytes |
| `0x8D` | [ServerSetBlocks](#serversetblocks) | No | 36.9 MB |
| `0x8E` | [ServerSetFluid](#serversetfluid) | No | 17 bytes |
| `0x8F` | [ServerSetFluids](#serversetfluids) | No | 28.7 MB |
| `0x90` | [UpdateBlockDamage](#updateblockdamage) | No | 21 bytes |
| `0x91` | [UpdateTimeSettings](#updatetimesettings) | No | 10 bytes |
| `0x92` | [UpdateTime](#updatetime) | No | 13 bytes |
| `0x93` | [UpdateEditorTimeOverride](#updateeditortimeoverride) | No | 14 bytes |
| `0x94` | [ClearEditorTimeOverride](#cleareditortimeoverride) | No | 0 bytes |
| `0x95` | [UpdateWeather](#updateweather) | No | 8 bytes |
| `0x96` | [UpdateEditorWeatherOverride](#updateeditorweatheroverride) | No | 4 bytes |
| `0x97` | [UpdateEnvironmentMusic](#updateenvironmentmusic) | No | 4 bytes |
| `0x98` | [SpawnParticleSystem](#spawnparticlesystem) | No | 16.4 MB |
| `0x99` | [SpawnBlockParticleSystem](#spawnblockparticlesystem) | No | 30 bytes |
| `0x9A` | [PlaySoundEvent2D](#playsoundevent2d) | No | 13 bytes |
| `0x9B` | [PlaySoundEvent3D](#playsoundevent3d) | No | 38 bytes |
| `0x9C` | [PlaySoundEventEntity](#playsoundevententity) | No | 16 bytes |
| `0x9D` | [UpdateSleepState](#updatesleepstate) | No | 65.5 MB |
| `0x9E` | [SetPaused](#setpaused) | No | 1 bytes |
| `0x9F` | [ServerSetPaused](#serversetpaused) | No | 1 bytes |
| `0x168` | [UpdateSunSettings](#updatesunsettings) | No | 8 bytes |
| `0x169` | [UpdatePostFxSettings](#updatepostfxsettings) | No | 20 bytes |

---

## SetChunk

| Property | Value |
|----------|-------|
| Packet ID | `0x83` (131) |
| Compressed | Yes |
| Fixed Block Size | 13 bytes |
| Variable Field Count | 3 |
| Max Size | 12.3 MB |
| Nullable Bit Field | 1 byte(s) |

### Fields

| Name | Type | Nullable | Max Length |
|------|------|----------|------------|
| `x` | `int` | No | - |
| `y` | `int` | No | - |
| `z` | `int` | No | - |
| `localLight` | `byte[]` | Yes | 4096000 |
| `globalLight` | `byte[]` | Yes | 4096000 |
| `data` | `byte[]` | Yes | 4096000 |

---

## SetChunkHeightmap

| Property | Value |
|----------|-------|
| Packet ID | `0x84` (132) |
| Compressed | Yes |
| Fixed Block Size | 9 bytes |
| Variable Field Count | 1 |
| Max Size | 4.1 MB |
| Nullable Bit Field | 1 byte(s) |

### Fields

| Name | Type | Nullable | Max Length |
|------|------|----------|------------|
| `x` | `int` | No | - |
| `z` | `int` | No | - |
| `heightmap` | `byte[]` | Yes | 4096000 |

---

## SetChunkTintmap

| Property | Value |
|----------|-------|
| Packet ID | `0x85` (133) |
| Compressed | Yes |
| Fixed Block Size | 9 bytes |
| Variable Field Count | 1 |
| Max Size | 4.1 MB |
| Nullable Bit Field | 1 byte(s) |

### Fields

| Name | Type | Nullable | Max Length |
|------|------|----------|------------|
| `x` | `int` | No | - |
| `z` | `int` | No | - |
| `tintmap` | `byte[]` | Yes | 4096000 |

---

## SetChunkEnvironments

| Property | Value |
|----------|-------|
| Packet ID | `0x86` (134) |
| Compressed | Yes |
| Fixed Block Size | 9 bytes |
| Variable Field Count | 1 |
| Max Size | 4.1 MB |
| Nullable Bit Field | 1 byte(s) |

### Fields

| Name | Type | Nullable | Max Length |
|------|------|----------|------------|
| `x` | `int` | No | - |
| `z` | `int` | No | - |
| `environments` | `byte[]` | Yes | 4096000 |

---

## UnloadChunk

| Property | Value |
|----------|-------|
| Packet ID | `0x87` (135) |
| Compressed | No |
| Fixed Block Size | 8 bytes |
| Variable Field Count | 0 |
| Max Size | 8 bytes |

### Fields

| Name | Type | Nullable | Max Length |
|------|------|----------|------------|
| `chunkX` | `int` | No | - |
| `chunkZ` | `int` | No | - |

---

## SetFluids

| Property | Value |
|----------|-------|
| Packet ID | `0x88` (136) |
| Compressed | Yes |
| Fixed Block Size | 13 bytes |
| Variable Field Count | 1 |
| Max Size | 4.1 MB |
| Nullable Bit Field | 1 byte(s) |

### Fields

| Name | Type | Nullable | Max Length |
|------|------|----------|------------|
| `x` | `int` | No | - |
| `y` | `int` | No | - |
| `z` | `int` | No | - |
| `data` | `byte[]` | Yes | 4096000 |

---

## ServerSetBlock

| Property | Value |
|----------|-------|
| Packet ID | `0x8C` (140) |
| Compressed | No |
| Fixed Block Size | 19 bytes |
| Variable Field Count | 0 |
| Max Size | 19 bytes |

### Fields

| Name | Type | Nullable | Max Length |
|------|------|----------|------------|
| `x` | `int` | No | - |
| `y` | `int` | No | - |
| `z` | `int` | No | - |
| `blockId` | `int` | No | - |
| `filler` | `short` | No | - |
| `rotation` | `byte` | No | - |

---

## ServerSetBlocks

| Property | Value |
|----------|-------|
| Packet ID | `0x8D` (141) |
| Compressed | No |
| Fixed Block Size | 12 bytes |
| Variable Field Count | 1 |
| Max Size | 36.9 MB |

### Fields

| Name | Type | Nullable | Max Length |
|------|------|----------|------------|
| `x` | `int` | No | - |
| `y` | `int` | No | - |
| `z` | `int` | No | - |
| `cmds` | [SetBlockCmd](Version-2026.01.13-50e69c385-Data-Types#setblockcmd)[] | No | 4096000 |

---

## ServerSetFluid

| Property | Value |
|----------|-------|
| Packet ID | `0x8E` (142) |
| Compressed | No |
| Fixed Block Size | 17 bytes |
| Variable Field Count | 0 |
| Max Size | 17 bytes |

### Fields

| Name | Type | Nullable | Max Length |
|------|------|----------|------------|
| `x` | `int` | No | - |
| `y` | `int` | No | - |
| `z` | `int` | No | - |
| `fluidId` | `int` | No | - |
| `fluidLevel` | `byte` | No | - |

---

## ServerSetFluids

| Property | Value |
|----------|-------|
| Packet ID | `0x8F` (143) |
| Compressed | No |
| Fixed Block Size | 12 bytes |
| Variable Field Count | 1 |
| Max Size | 28.7 MB |

### Fields

| Name | Type | Nullable | Max Length |
|------|------|----------|------------|
| `x` | `int` | No | - |
| `y` | `int` | No | - |
| `z` | `int` | No | - |
| `cmds` | [SetFluidCmd](Version-2026.01.13-50e69c385-Data-Types#setfluidcmd)[] | No | 4096000 |

---

## UpdateBlockDamage

| Property | Value |
|----------|-------|
| Packet ID | `0x90` (144) |
| Compressed | No |
| Fixed Block Size | 21 bytes |
| Variable Field Count | 0 |
| Max Size | 21 bytes |
| Nullable Bit Field | 1 byte(s) |

### Fields

| Name | Type | Nullable | Max Length |
|------|------|----------|------------|
| `blockPosition` | [BlockPosition](Version-2026.01.13-50e69c385-Data-Types#blockposition) | Yes | - |
| `damage` | `float` | No | - |
| `delta` | `float` | No | - |

---

## UpdateTimeSettings

| Property | Value |
|----------|-------|
| Packet ID | `0x91` (145) |
| Compressed | No |
| Fixed Block Size | 10 bytes |
| Variable Field Count | 0 |
| Max Size | 10 bytes |

### Fields

| Name | Type | Nullable | Max Length |
|------|------|----------|------------|
| `daytimeDurationSeconds` | `int` | No | - |
| `nighttimeDurationSeconds` | `int` | No | - |
| `totalMoonPhases` | `byte` | No | - |
| `timePaused` | `boolean` | No | - |

---

## UpdateTime

| Property | Value |
|----------|-------|
| Packet ID | `0x92` (146) |
| Compressed | No |
| Fixed Block Size | 13 bytes |
| Variable Field Count | 0 |
| Max Size | 13 bytes |
| Nullable Bit Field | 1 byte(s) |

### Fields

| Name | Type | Nullable | Max Length |
|------|------|----------|------------|
| `gameTime` | [InstantData](Version-2026.01.13-50e69c385-Data-Types#instantdata) | Yes | - |

---

## UpdateEditorTimeOverride

| Property | Value |
|----------|-------|
| Packet ID | `0x93` (147) |
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

## ClearEditorTimeOverride

| Property | Value |
|----------|-------|
| Packet ID | `0x94` (148) |
| Compressed | No |
| Fixed Block Size | 0 bytes |
| Variable Field Count | 0 |
| Max Size | 0 bytes |

---

## UpdateWeather

| Property | Value |
|----------|-------|
| Packet ID | `0x95` (149) |
| Compressed | No |
| Fixed Block Size | 8 bytes |
| Variable Field Count | 0 |
| Max Size | 8 bytes |

### Fields

| Name | Type | Nullable | Max Length |
|------|------|----------|------------|
| `weatherIndex` | `int` | No | - |
| `transitionSeconds` | `float` | No | - |

---

## UpdateEditorWeatherOverride

| Property | Value |
|----------|-------|
| Packet ID | `0x96` (150) |
| Compressed | No |
| Fixed Block Size | 4 bytes |
| Variable Field Count | 0 |
| Max Size | 4 bytes |

### Fields

| Name | Type | Nullable | Max Length |
|------|------|----------|------------|
| `weatherIndex` | `int` | No | - |

---

## UpdateEnvironmentMusic

| Property | Value |
|----------|-------|
| Packet ID | `0x97` (151) |
| Compressed | No |
| Fixed Block Size | 4 bytes |
| Variable Field Count | 0 |
| Max Size | 4 bytes |

### Fields

| Name | Type | Nullable | Max Length |
|------|------|----------|------------|
| `environmentIndex` | `int` | No | - |

---

## SpawnParticleSystem

| Property | Value |
|----------|-------|
| Packet ID | `0x98` (152) |
| Compressed | No |
| Fixed Block Size | 44 bytes |
| Variable Field Count | 1 |
| Max Size | 16.4 MB |
| Nullable Bit Field | 1 byte(s) |

### Fields

| Name | Type | Nullable | Max Length |
|------|------|----------|------------|
| `particleSystemId` | `String` | Yes | 4096000 |
| `position` | [Position](Version-2026.01.13-50e69c385-Data-Types#position) | Yes | - |
| `rotation` | [Direction](Version-2026.01.13-50e69c385-Data-Types#direction) | Yes | - |
| `scale` | `float` | No | - |
| `color` | [Color](Version-2026.01.13-50e69c385-Data-Types#color) | Yes | - |

---

## SpawnBlockParticleSystem

| Property | Value |
|----------|-------|
| Packet ID | `0x99` (153) |
| Compressed | No |
| Fixed Block Size | 30 bytes |
| Variable Field Count | 0 |
| Max Size | 30 bytes |
| Nullable Bit Field | 1 byte(s) |

### Fields

| Name | Type | Nullable | Max Length |
|------|------|----------|------------|
| `blockId` | `int` | No | - |
| `particleType` | [BlockParticleEvent](Version-2026.01.13-50e69c385-Enums#blockparticleevent) | No | - |
| `position` | [Position](Version-2026.01.13-50e69c385-Data-Types#position) | Yes | - |

**particleType** enum values:

- `0` = Walk
- `1` = Run
- `2` = Sprint
- `3` = SoftLand
- `4` = HardLand
- `5` = MoveOut
- `6` = Hit
- `7` = Break
- `8` = Build
- `9` = Physics

---

## PlaySoundEvent2D

| Property | Value |
|----------|-------|
| Packet ID | `0x9A` (154) |
| Compressed | No |
| Fixed Block Size | 13 bytes |
| Variable Field Count | 0 |
| Max Size | 13 bytes |

### Fields

| Name | Type | Nullable | Max Length |
|------|------|----------|------------|
| `soundEventIndex` | `int` | No | - |
| `category` | [SoundCategory](Version-2026.01.13-50e69c385-Enums#soundcategory) | No | - |
| `volumeModifier` | `float` | No | - |
| `pitchModifier` | `float` | No | - |

**category** enum values:

- `0` = Music
- `1` = Ambient
- `2` = SFX
- `3` = UI

---

## PlaySoundEvent3D

| Property | Value |
|----------|-------|
| Packet ID | `0x9B` (155) |
| Compressed | No |
| Fixed Block Size | 38 bytes |
| Variable Field Count | 0 |
| Max Size | 38 bytes |
| Nullable Bit Field | 1 byte(s) |

### Fields

| Name | Type | Nullable | Max Length |
|------|------|----------|------------|
| `soundEventIndex` | `int` | No | - |
| `category` | [SoundCategory](Version-2026.01.13-50e69c385-Enums#soundcategory) | No | - |
| `position` | [Position](Version-2026.01.13-50e69c385-Data-Types#position) | Yes | - |
| `volumeModifier` | `float` | No | - |
| `pitchModifier` | `float` | No | - |

**category** enum values:

- `0` = Music
- `1` = Ambient
- `2` = SFX
- `3` = UI

---

## PlaySoundEventEntity

| Property | Value |
|----------|-------|
| Packet ID | `0x9C` (156) |
| Compressed | No |
| Fixed Block Size | 16 bytes |
| Variable Field Count | 0 |
| Max Size | 16 bytes |

### Fields

| Name | Type | Nullable | Max Length |
|------|------|----------|------------|
| `soundEventIndex` | `int` | No | - |
| `networkId` | `int` | No | - |
| `volumeModifier` | `float` | No | - |
| `pitchModifier` | `float` | No | - |

---

## UpdateSleepState

| Property | Value |
|----------|-------|
| Packet ID | `0x9D` (157) |
| Compressed | No |
| Fixed Block Size | 36 bytes |
| Variable Field Count | 1 |
| Max Size | 65.5 MB |
| Nullable Bit Field | 1 byte(s) |

### Fields

| Name | Type | Nullable | Max Length |
|------|------|----------|------------|
| `grayFade` | `boolean` | No | - |
| `sleepUi` | `boolean` | No | - |
| `clock` | [SleepClock](Version-2026.01.13-50e69c385-Data-Types#sleepclock) | Yes | - |
| `multiplayer` | [SleepMultiplayer](Version-2026.01.13-50e69c385-Data-Types#sleepmultiplayer) | Yes | - |

---

## SetPaused

| Property | Value |
|----------|-------|
| Packet ID | `0x9E` (158) |
| Compressed | No |
| Fixed Block Size | 1 bytes |
| Variable Field Count | 0 |
| Max Size | 1 bytes |

### Fields

| Name | Type | Nullable | Max Length |
|------|------|----------|------------|
| `paused` | `boolean` | No | - |

---

## ServerSetPaused

| Property | Value |
|----------|-------|
| Packet ID | `0x9F` (159) |
| Compressed | No |
| Fixed Block Size | 1 bytes |
| Variable Field Count | 0 |
| Max Size | 1 bytes |

### Fields

| Name | Type | Nullable | Max Length |
|------|------|----------|------------|
| `paused` | `boolean` | No | - |

---

## UpdateSunSettings

| Property | Value |
|----------|-------|
| Packet ID | `0x168` (360) |
| Compressed | No |
| Fixed Block Size | 8 bytes |
| Variable Field Count | 0 |
| Max Size | 8 bytes |

### Fields

| Name | Type | Nullable | Max Length |
|------|------|----------|------------|
| `heightPercentage` | `float` | No | - |
| `angleRadians` | `float` | No | - |

---

## UpdatePostFxSettings

| Property | Value |
|----------|-------|
| Packet ID | `0x169` (361) |
| Compressed | No |
| Fixed Block Size | 20 bytes |
| Variable Field Count | 0 |
| Max Size | 20 bytes |

### Fields

| Name | Type | Nullable | Max Length |
|------|------|----------|------------|
| `globalIntensity` | `float` | No | - |
| `power` | `float` | No | - |
| `sunshaftScale` | `float` | No | - |
| `sunIntensity` | `float` | No | - |
| `sunshaftIntensity` | `float` | No | - |

---
[Back to Home](Version-2026.01.13-50e69c385-Home)