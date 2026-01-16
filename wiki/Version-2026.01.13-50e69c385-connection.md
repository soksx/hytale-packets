# Connection Packets

**Version:** 2026.01.13-50e69c385

This category contains 4 packet(s).

## Packet Index

| ID | Name | Compressed | Max Size |
|----|------|------------|----------|
| `0x00` | [Connect](#connect) | No | 38.2 KB |
| `0x01` | [Disconnect](#disconnect) | No | 16.4 MB |
| `0x02` | [Ping](#ping) | No | 29 bytes |
| `0x03` | [Pong](#pong) | No | 20 bytes |

---

## Connect

| Property | Value |
|----------|-------|
| Packet ID | `0x00` (0) |
| Compressed | No |
| Fixed Block Size | 82 bytes |
| Variable Field Count | 5 |
| Max Size | 38.2 KB |
| Nullable Bit Field | 1 byte(s) |

### Fields

| Name | Type | Nullable | Max Length |
|------|------|----------|------------|
| `protocolHash` | `String` | No | - |
| `clientType` | [ClientType](Version-2026.01.13-50e69c385-Enums#clienttype) | No | - |
| `language` | `String` | Yes | 128 |
| `identityToken` | `String` | Yes | 8192 |
| `uuid` | `UUID` | No | - |
| `username` | `String` | No | 16 |
| `referralData` | `byte[]` | Yes | 4096 |
| `referralSource` | [HostAddress](Version-2026.01.13-50e69c385-Data-Types#hostaddress) | Yes | - |

**clientType** enum values:

- `0` = Game
- `1` = Editor

---

## Disconnect

| Property | Value |
|----------|-------|
| Packet ID | `0x01` (1) |
| Compressed | No |
| Fixed Block Size | 2 bytes |
| Variable Field Count | 1 |
| Max Size | 16.4 MB |
| Nullable Bit Field | 1 byte(s) |

### Fields

| Name | Type | Nullable | Max Length |
|------|------|----------|------------|
| `reason` | `String` | Yes | 4096000 |
| `type` | [DisconnectType](Version-2026.01.13-50e69c385-Enums#disconnecttype) | No | - |

**type** enum values:

- `0` = Disconnect
- `1` = Crash

---

## Ping

| Property | Value |
|----------|-------|
| Packet ID | `0x02` (2) |
| Compressed | No |
| Fixed Block Size | 29 bytes |
| Variable Field Count | 0 |
| Max Size | 29 bytes |
| Nullable Bit Field | 1 byte(s) |

### Fields

| Name | Type | Nullable | Max Length |
|------|------|----------|------------|
| `id` | `int` | No | - |
| `time` | [InstantData](Version-2026.01.13-50e69c385-Data-Types#instantdata) | Yes | - |
| `lastPingValueRaw` | `int` | No | - |
| `lastPingValueDirect` | `int` | No | - |
| `lastPingValueTick` | `int` | No | - |

---

## Pong

| Property | Value |
|----------|-------|
| Packet ID | `0x03` (3) |
| Compressed | No |
| Fixed Block Size | 20 bytes |
| Variable Field Count | 0 |
| Max Size | 20 bytes |
| Nullable Bit Field | 1 byte(s) |

### Fields

| Name | Type | Nullable | Max Length |
|------|------|----------|------------|
| `id` | `int` | No | - |
| `time` | [InstantData](Version-2026.01.13-50e69c385-Data-Types#instantdata) | Yes | - |
| `type` | [PongType](Version-2026.01.13-50e69c385-Enums#pongtype) | No | - |
| `packetQueueSize` | `short` | No | - |

**type** enum values:

- `0` = Raw
- `1` = Direct
- `2` = Tick

---
[Back to Home](Version-2026.01.13-50e69c385-Home)