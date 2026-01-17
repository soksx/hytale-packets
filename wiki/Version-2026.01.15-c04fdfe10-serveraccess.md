# Serveraccess Packets

**Version:** 2026.01.15-c04fdfe10

This category contains 3 packet(s).

## Packet Index

| ID | Name | Compressed | Max Size |
|----|------|------------|----------|
| `0xFA` | [RequestServerAccess](#requestserveraccess) | No | 3 bytes |
| `0xFB` | [UpdateServerAccess](#updateserveraccess) | No | 1.7 GB |
| `0xFC` | [SetServerAccess](#setserveraccess) | No | 16.4 MB |

---

## RequestServerAccess

| Property | Value |
|----------|-------|
| Packet ID | `0xFA` (250) |
| Compressed | No |
| Fixed Block Size | 3 bytes |
| Variable Field Count | 0 |
| Max Size | 3 bytes |

### Fields

| Name | Type | Nullable | Max Length |
|------|------|----------|------------|
| `access` | [Access](Version-2026.01.15-c04fdfe10-Enums#access) | No | - |
| `externalPort` | `short` | No | - |

**access** enum values:

- `0` = Private
- `1` = LAN
- `2` = Friend
- `3` = Open

---

## UpdateServerAccess

| Property | Value |
|----------|-------|
| Packet ID | `0xFB` (251) |
| Compressed | No |
| Fixed Block Size | 2 bytes |
| Variable Field Count | 1 |
| Max Size | 1.7 GB |
| Nullable Bit Field | 1 byte(s) |

### Fields

| Name | Type | Nullable | Max Length |
|------|------|----------|------------|
| `access` | [Access](Version-2026.01.15-c04fdfe10-Enums#access) | No | - |
| `hosts` | [HostAddress](Version-2026.01.15-c04fdfe10-Data-Types#hostaddress)[] | Yes | 4096000 |

**access** enum values:

- `0` = Private
- `1` = LAN
- `2` = Friend
- `3` = Open

---

## SetServerAccess

| Property | Value |
|----------|-------|
| Packet ID | `0xFC` (252) |
| Compressed | No |
| Fixed Block Size | 2 bytes |
| Variable Field Count | 1 |
| Max Size | 16.4 MB |
| Nullable Bit Field | 1 byte(s) |

### Fields

| Name | Type | Nullable | Max Length |
|------|------|----------|------------|
| `access` | [Access](Version-2026.01.15-c04fdfe10-Enums#access) | No | - |
| `password` | `String` | Yes | 4096000 |

**access** enum values:

- `0` = Private
- `1` = LAN
- `2` = Friend
- `3` = Open

---
[Back to Home](Version-2026.01.15-c04fdfe10-Home)