# Camera Packets

**Version:** 2026.01.15-c04fdfe10

This category contains 4 packet(s).

## Packet Index

| ID | Name | Compressed | Max Size |
|----|------|------------|----------|
| `0x118` | [SetServerCamera](#setservercamera) | No | 157 bytes |
| `0x119` | [CameraShakeEffect](#camerashakeeffect) | No | 9 bytes |
| `0x11A` | [RequestFlyCameraMode](#requestflycameramode) | No | 1 bytes |
| `0x11B` | [SetFlyCameraMode](#setflycameramode) | No | 1 bytes |

---

## SetServerCamera

| Property | Value |
|----------|-------|
| Packet ID | `0x118` (280) |
| Compressed | No |
| Fixed Block Size | 157 bytes |
| Variable Field Count | 0 |
| Max Size | 157 bytes |
| Nullable Bit Field | 1 byte(s) |

### Fields

| Name | Type | Nullable | Max Length |
|------|------|----------|------------|
| `clientCameraView` | [ClientCameraView](Version-2026.01.15-c04fdfe10-Enums#clientcameraview) | No | - |
| `isLocked` | `boolean` | No | - |
| `cameraSettings` | [ServerCameraSettings](Version-2026.01.15-c04fdfe10-Data-Types#servercamerasettings) | Yes | - |

**clientCameraView** enum values:

- `0` = FirstPerson
- `1` = ThirdPerson
- `2` = Custom

---

## CameraShakeEffect

| Property | Value |
|----------|-------|
| Packet ID | `0x119` (281) |
| Compressed | No |
| Fixed Block Size | 9 bytes |
| Variable Field Count | 0 |
| Max Size | 9 bytes |

### Fields

| Name | Type | Nullable | Max Length |
|------|------|----------|------------|
| `cameraShakeId` | `int` | No | - |
| `intensity` | `float` | No | - |
| `mode` | [AccumulationMode](Version-2026.01.15-c04fdfe10-Enums#accumulationmode) | No | - |

**mode** enum values:

- `0` = Set
- `1` = Sum
- `2` = Average

---

## RequestFlyCameraMode

| Property | Value |
|----------|-------|
| Packet ID | `0x11A` (282) |
| Compressed | No |
| Fixed Block Size | 1 bytes |
| Variable Field Count | 0 |
| Max Size | 1 bytes |

### Fields

| Name | Type | Nullable | Max Length |
|------|------|----------|------------|
| `entering` | `boolean` | No | - |

---

## SetFlyCameraMode

| Property | Value |
|----------|-------|
| Packet ID | `0x11B` (283) |
| Compressed | No |
| Fixed Block Size | 1 bytes |
| Variable Field Count | 0 |
| Max Size | 1 bytes |

### Fields

| Name | Type | Nullable | Max Length |
|------|------|----------|------------|
| `entering` | `boolean` | No | - |

---
[Back to Home](Version-2026.01.15-c04fdfe10-Home)