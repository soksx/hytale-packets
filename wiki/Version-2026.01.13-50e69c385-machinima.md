# Machinima Packets

**Version:** 2026.01.13-50e69c385

This category contains 3 packet(s).

## Packet Index

| ID | Name | Compressed | Max Size |
|----|------|------------|----------|
| `0x104` | [RequestMachinimaActorModel](#requestmachinimaactormodel) | No | 49.2 MB |
| `0x105` | [SetMachinimaActorModel](#setmachinimaactormodel) | No | 1.7 GB |
| `0x106` | [UpdateMachinimaScene](#updatemachinimascene) | Yes | 36.9 MB |

---

## RequestMachinimaActorModel

| Property | Value |
|----------|-------|
| Packet ID | `0x104` (260) |
| Compressed | No |
| Fixed Block Size | 1 bytes |
| Variable Field Count | 3 |
| Max Size | 49.2 MB |
| Nullable Bit Field | 1 byte(s) |

### Fields

| Name | Type | Nullable | Max Length |
|------|------|----------|------------|
| `modelId` | `String` | Yes | 4096000 |
| `sceneName` | `String` | Yes | 4096000 |
| `actorName` | `String` | Yes | 4096000 |

---

## SetMachinimaActorModel

| Property | Value |
|----------|-------|
| Packet ID | `0x105` (261) |
| Compressed | No |
| Fixed Block Size | 1 bytes |
| Variable Field Count | 3 |
| Max Size | 1.7 GB |
| Nullable Bit Field | 1 byte(s) |

### Fields

| Name | Type | Nullable | Max Length |
|------|------|----------|------------|
| `model` | [Model](Version-2026.01.13-50e69c385-Data-Types#model) | Yes | - |
| `sceneName` | `String` | Yes | 4096000 |
| `actorName` | `String` | Yes | 4096000 |

---

## UpdateMachinimaScene

| Property | Value |
|----------|-------|
| Packet ID | `0x106` (262) |
| Compressed | Yes |
| Fixed Block Size | 6 bytes |
| Variable Field Count | 3 |
| Max Size | 36.9 MB |
| Nullable Bit Field | 1 byte(s) |

### Fields

| Name | Type | Nullable | Max Length |
|------|------|----------|------------|
| `player` | `String` | Yes | 4096000 |
| `sceneName` | `String` | Yes | 4096000 |
| `frame` | `float` | No | - |
| `updateType` | [SceneUpdateType](Version-2026.01.13-50e69c385-Enums#sceneupdatetype) | No | - |
| `scene` | `byte[]` | Yes | 4096000 |

**updateType** enum values:

- `0` = Update
- `1` = Play
- `2` = Stop
- `3` = Frame
- `4` = Save

---
[Back to Home](Version-2026.01.13-50e69c385-Home)