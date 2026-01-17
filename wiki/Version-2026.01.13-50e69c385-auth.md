# Auth Packets

**Version:** 2026.01.13-50e69c385

This category contains 9 packet(s).

## Packet Index

| ID | Name | Compressed | Max Size |
|----|------|------------|----------|
| `0x0A` | [Status](#status) | No | 2.6 KB |
| `0x0B` | [AuthGrant](#authgrant) | No | 49.2 KB |
| `0x0C` | [AuthToken](#authtoken) | No | 49.2 KB |
| `0x0D` | [ServerAuthToken](#serverauthtoken) | No | 32.9 KB |
| `0x0E` | [ConnectAccept](#connectaccept) | No | 70 bytes |
| `0x0F` | [PasswordResponse](#passwordresponse) | No | 70 bytes |
| `0x10` | [PasswordAccepted](#passwordaccepted) | No | 0 bytes |
| `0x11` | [PasswordRejected](#passwordrejected) | No | 74 bytes |
| `0x12` | [ClientReferral](#clientreferral) | No | 5.1 KB |

---

## Status

| Property | Value |
|----------|-------|
| Packet ID | `0x0A` (10) |
| Compressed | No |
| Fixed Block Size | 9 bytes |
| Variable Field Count | 2 |
| Max Size | 2.6 KB |
| Nullable Bit Field | 1 byte(s) |

### Fields

| Name | Type | Nullable | Max Length |
|------|------|----------|------------|
| `name` | `String` | Yes | 128 |
| `motd` | `String` | Yes | 512 |
| `playerCount` | `int` | No | - |
| `maxPlayers` | `int` | No | - |

---

## AuthGrant

| Property | Value |
|----------|-------|
| Packet ID | `0x0B` (11) |
| Compressed | No |
| Fixed Block Size | 1 bytes |
| Variable Field Count | 2 |
| Max Size | 49.2 KB |
| Nullable Bit Field | 1 byte(s) |

### Fields

| Name | Type | Nullable | Max Length |
|------|------|----------|------------|
| `authorizationGrant` | `String` | Yes | 4096 |
| `serverIdentityToken` | `String` | Yes | 8192 |

---

## AuthToken

| Property | Value |
|----------|-------|
| Packet ID | `0x0C` (12) |
| Compressed | No |
| Fixed Block Size | 1 bytes |
| Variable Field Count | 2 |
| Max Size | 49.2 KB |
| Nullable Bit Field | 1 byte(s) |

### Fields

| Name | Type | Nullable | Max Length |
|------|------|----------|------------|
| `accessToken` | `String` | Yes | 8192 |
| `serverAuthorizationGrant` | `String` | Yes | 4096 |

---

## ServerAuthToken

| Property | Value |
|----------|-------|
| Packet ID | `0x0D` (13) |
| Compressed | No |
| Fixed Block Size | 1 bytes |
| Variable Field Count | 2 |
| Max Size | 32.9 KB |
| Nullable Bit Field | 1 byte(s) |

### Fields

| Name | Type | Nullable | Max Length |
|------|------|----------|------------|
| `serverAccessToken` | `String` | Yes | 8192 |
| `passwordChallenge` | `byte[]` | Yes | 64 |

---

## ConnectAccept

| Property | Value |
|----------|-------|
| Packet ID | `0x0E` (14) |
| Compressed | No |
| Fixed Block Size | 1 bytes |
| Variable Field Count | 1 |
| Max Size | 70 bytes |
| Nullable Bit Field | 1 byte(s) |

### Fields

| Name | Type | Nullable | Max Length |
|------|------|----------|------------|
| `passwordChallenge` | `byte[]` | Yes | 64 |

---

## PasswordResponse

| Property | Value |
|----------|-------|
| Packet ID | `0x0F` (15) |
| Compressed | No |
| Fixed Block Size | 1 bytes |
| Variable Field Count | 1 |
| Max Size | 70 bytes |
| Nullable Bit Field | 1 byte(s) |

### Fields

| Name | Type | Nullable | Max Length |
|------|------|----------|------------|
| `hash` | `byte[]` | Yes | 64 |

---

## PasswordAccepted

| Property | Value |
|----------|-------|
| Packet ID | `0x10` (16) |
| Compressed | No |
| Fixed Block Size | 0 bytes |
| Variable Field Count | 0 |
| Max Size | 0 bytes |

---

## PasswordRejected

| Property | Value |
|----------|-------|
| Packet ID | `0x11` (17) |
| Compressed | No |
| Fixed Block Size | 5 bytes |
| Variable Field Count | 1 |
| Max Size | 74 bytes |
| Nullable Bit Field | 1 byte(s) |

### Fields

| Name | Type | Nullable | Max Length |
|------|------|----------|------------|
| `newChallenge` | `byte[]` | Yes | 64 |
| `attemptsRemaining` | `int` | No | - |

---

## ClientReferral

| Property | Value |
|----------|-------|
| Packet ID | `0x12` (18) |
| Compressed | No |
| Fixed Block Size | 1 bytes |
| Variable Field Count | 2 |
| Max Size | 5.1 KB |
| Nullable Bit Field | 1 byte(s) |

### Fields

| Name | Type | Nullable | Max Length |
|------|------|----------|------------|
| `hostTo` | [HostAddress](Version-2026.01.13-50e69c385-Data-Types#hostaddress) | Yes | - |
| `data` | `byte[]` | Yes | 4096 |

---
[Back to Home](Version-2026.01.13-50e69c385-Home)