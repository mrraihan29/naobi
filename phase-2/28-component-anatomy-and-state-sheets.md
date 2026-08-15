# 28 — Component Anatomy and State Sheets

**Version:** 1.0  
**Status:** Accepted implementation blueprint  
**Gate:** 2.5 — High-Fidelity System

## 1. Shared anatomy rules

```text
COMPONENT
├─ accessible name
├─ visible label
├─ state indicator when applicable
├─ content or action region
├─ focus boundary
└─ optional description / limitation
```

All color assignments use semantic tokens. Spacing follows the approved rhythm.
No component introduces a new radius, type size, or signal color.

## 2. System Rail

```text
┌─────────────────────────────────────────────────────────────────────┐
│ [IDENTITY]  LOCATION → SUBLOCATION   ENV   SIGNAL   GLOBAL ACTIONS │
└─────────────────────────────────────────────────────────────────────┘
```

| Part | Token/role | Behavior |
|---|---|---|
| Chassis | `color.surface.chassis`, radius 2 | Persistent desktop structure |
| Location | Utility/Data | Always visible |
| Active trace | Current signal token | Shape plus label, not color alone |
| Actions | Action Control/quiet | Search, map, Collaboration, system |

Compact/mobile converts global actions to an explicit System control while
keeping location and environment visible.

## 3. Environment Gateway

```text
┌─ {ENVIRONMENT NAME} ────────────────────┐
│ {professional scope}                    │
│ {truthful latest status}                │
│ [ENTER/OPEN ENVIRONMENT]                │
└─────────────────────────────────────────┘
```

Two gateways share width, heading level, action emphasis, and evidence status.
Environment distinction comes from instrument vocabulary and supporting data.

## 4. Action Control

```text
PRIMARY     [ LABEL → ]
SECONDARY   [ LABEL   ]
QUIET         LABEL →
```

| State | Visual and behavioral requirement |
|---|---|
| Default | Label and boundary are legible |
| Hover | Border/signal reinforcement; no movement |
| Focus-visible | Independent high-contrast outline |
| Pressed | Immediate surface change, 180–260 ms maximum |
| Disabled | Label plus reason; no dead unexplained control |
| Loading | Label context retained; repeated action blocked |

## 5. Signal Selector

```text
SIGNAL PROFILE
(●) PHOSPHOR   ( ) AMBER   ( ) ICE
```

This is a single-select radio group. Arrow-key movement follows radio-group
behavior; Space selects. Selection is session-only. Each option includes a text
label and selected marker.

## 6. Evidence Depth Rail

```text
╱ <BRIEF>      document orientation
│  METHOD      method and design
│  EVIDENCE    results, uncertainty, validation
╲  ARTIFACT    source, report, model, or closed state
```

The shallow chamfer is unique to this component and active system state.

| Property | Contract |
|---|---|
| Selection | Exactly one state selected |
| Keyboard | All four states reachable; arrows allowed when implemented as tabs |
| Focus | Selection does not discard reading context |
| Content | Same canonical claims and sources across projections |
| Artifact unavailable | Show closed/unavailable reason; retain other depth states |
| Reduced motion | Immediate state replacement or short fade |

## 7. Command/Search Surface

```text
┌─ COMMAND / SEARCH ───────────────────────────────┐
│ [INPUT____________________________________] [×] │
├─ RESULTS / ACTIONS ──────────────────────────────┤
│ {result row}                                     │
│ {result row}                                     │
└──────────────────────────────────────────────────┘
```

Opening moves focus to Input. Escape closes and restores focus. Result Row
contains type, title, environment, status, and destination. Mobile is
visible-results-first and may occupy the viewport.

## 8. Instrument Panel

```text
┌─ ROLE LABEL ─────────── STATUS ─┐
│ {evidence/data/content}         │
│                                 │
│ {secondary action or source}    │
└─────────────────────────────────┘
```

Allowed roles: Navigation, Evidence, Source, Limitation, Figure, Calculation,
Operator Record, and Collaboration. Equal card repetition is rejected; size
and placement follow information priority.

## 9. Status Marker

```text
[shape/icon] STATUS LABEL
```

Required labels include `COMING SOON`, `UNAVAILABLE`, `CLOSED ARTIFACT`,
`IN PROGRESS`, and content-specific maturity. Color is supplementary. Status
markers do not reuse signal-profile meaning.

## 10. System Map Entry

```text
[node glyph] DESTINATION
             relationship or description
             STATUS                     →
```

Network nodes and directory rows share the same destination model. The
directory remains complete if the network is removed.

## 11. Collaboration Brief

```text
LABEL*                         REQUIRED/OPTIONAL
[input value__________________________________]
helper text or field-specific error
```

States: empty, valid, invalid, submitting, submitted, and service unavailable.
Error summary precedes fields after failed submission and links to each invalid
field. A privacy warning precedes the submit control.

## 12. Content Metadata Rail

```text
TYPE · ENVIRONMENT · STATUS · DATE · VERSION · LICENSE
```

Long metadata wraps by semantic group; it does not shrink below Micro Label.
Unknown values read `NOT ASSIGNED` or `NOT PROVIDED`, never realistic filler.

## 13. State coverage matrix

| Component | Hover | Focus | Pressed | Selected | Disabled | Loading | Error |
|---|:---:|:---:|:---:|:---:|:---:|:---:|:---:|
| System Rail action | Yes | Yes | Yes | When current | Yes | No | No |
| Gateway | Yes | Yes | Yes | Current env | No | Optional | No |
| Action Control | Yes | Yes | Yes | Optional | Yes | Yes | Optional |
| Signal Selector | Yes | Yes | Yes | Yes | No | No | No |
| Depth Rail | Yes | Yes | Yes | Yes | Conditional | Optional | Yes |
| Search Result | Yes | Yes | Yes | Current result | Conditional | Yes | Yes |
| Map Entry | Yes | Yes | Yes | Current route | Conditional | No | No |
| Collaboration Brief | No | Yes | Submit only | Route | Yes | Yes | Yes |

## 14. Implementation rejection tests

Reject a component implementation when it:

- contains an unexplained hardcoded color or spacing value;
- clips its focus indicator;
- reveals required information only on hover;
- uses signal color as status meaning;
- uses a pill merely as decoration;
- requires a terminal command for an otherwise global action; or
- loses its label or purpose on mobile.

