# 05 — Adaptive Visual System Studies

**Version:** 1.0  
**Status:** Accepted — Study A selected  
**Gate:** 2.2 — Identity System  
**Evidence:** Accepted Experience Foundation and Interview 2B  
**Product Owner:** Raihan  
**Design lead:** Rei  
**Approval date:** 2026-08-15  
**Decision record:** ADR-0004

## 1. Design objective

Create a distinctive, silent, dark-base operating environment that can change
signal character without losing identity. The system must support dense
research and engineering evidence, long-form reading, terminal interaction,
and a memorable Evidence Depth Rail while remaining maintainable.

The subject is Raihan's professional and intellectual work. The primary
audience is an AI or engineering professional. The interface's single job is
to move that visitor from immediate orientation to defensible evidence and a
clear collaboration route.

## 2. Interpretation of “adaptive”

Adaptive does not mean unlimited skins. The identity uses three independent
axes:

1. **Signal profile:** changes the active instrument accent.
2. **Environment:** changes information structures and instrument behavior
   between Signal Lab and Operations Ledger.
3. **Evidence depth:** changes content composition across Brief, Method,
   Evidence, and Artifact.

The chassis, core geometry, command grammar, semantic states, typography
system, and navigation remain invariant. This prevents a combinatorial theme
system that would be difficult to design, test, and maintain.

Signal-profile choice is session-scoped at most and is not persisted across
visits, preserving the Phase 1 decision not to remember visitor preferences.

## 3. Design-lead decisions from delegated questions

### Geometry

- use a continuous asymmetric instrument frame rather than a grid of floating
  application windows;
- use angular structural panels and compact controls with restrained rounding;
- reserve one shallow chamfer for active system states and the Evidence Depth
  Rail; it must not decorate every card;
- align dense information to an 8-unit spatial rhythm;
- use 2 px corner radii for registers and data surfaces, and 6 px only for
  primary touch targets or handheld-instrument controls;
- avoid glassmorphism, pill-heavy navigation, neumorphism, and ornamental HUD
  brackets.

### Control character

Controls are **tactile-digital hybrids**. Their shape suggests mechanical
detents and deliberate operation, while their response remains immediate,
flat, and digitally legible. No control imitates a real knob or switch unless
its input behavior requires rotation or discrete positions.

### Controlled wear

- allow very low-opacity edge abrasion, registration drift, or panel stamping
  on the chassis only;
- keep text, charts, tables, reading surfaces, and focus indicators clean;
- never place random scratches over content; and
- use wear to suggest an operated instrument, not post-apocalyptic damage.

### Authentic artifacts

| Context | Preferred artifacts | Purpose |
|---|---|---|
| AI Research | evaluation plots, uncertainty bands, model diagrams, experiment logs, ablations, failure notes | expose reasoning, uncertainty, and reproducibility |
| Engineering | estimate breakdowns, WBS trees, quantity-rate lineage, revision records, source registers, sanitized calculations or drawings | expose scope, derivation, maturity, and accountability |
| Field Notes | dated notes, citations, diagrams, reading/listening context | show intellectual continuity without pretending to be formal research |
| Operator Record | theme-reactive ASCII or dithered portrait derived from Raihan's own photograph | establish human identity without turning the landing screen into a conventional personal hero |

The portrait must include equivalent alt text. A copyrighted character pose,
Pip-Boy avatar, Vault Boy treatment, or copied illustration style is prohibited.

## 4. Study A — Adaptive Signal Chassis — recommended

### Concept

A near-black precision instrument whose active signal spectrum can change while
its chassis and information logic remain stable. Visual character comes from
calibration marks, evidence states, typography behavior, and the structural
transformation of the Evidence Depth Rail—not from faux terminal noise.

### Active palette

Five chassis tokens remain fixed. Exactly one signal token is active, producing
a six-color runtime palette.

| Token | Value | Role |
|---|---:|---|
| Void | `#070A0B` | primary canvas |
| Carbon | `#111618` | structural chassis |
| Alloy | `#263033` | elevated panel and divider |
| Instrument text | `#D8E2DC` | primary readable content |
| Muted telemetry | `#81908A` | secondary labels and metadata |
| Active signal | profile-dependent | focus, active control, selected trace, and identity accent |

Signal profiles:

| Profile | Signal value | Intended character |
|---|---:|---|
| Phosphor | `#A5E36D` | field-instrument clarity |
| Amber | `#F0A34A` | archival and engineering warmth |
| Ice | `#63C7C9` | analytical and computational clarity |

On Void, the proposed primary text has approximately 15:1 contrast; Muted
Telemetry approximately 6:1; Phosphor approximately 13:1; Amber approximately
9.5:1; and Ice approximately 10:1. Final contrast must be verified per
component and state rather than inferred from palette values alone.

Signal profile is not semantic state. Error, warning, verified, unavailable,
and confidentiality states retain their own labels, shapes, and icons and must
never rely on color alone.

### Typography

- **System, interface, and utility:** Recursive, kept on its Linear axis. Use
  proportional widths for navigation and short prose; use the Mono axis for
  terminal, identifiers, data, and aligned metadata.
- **Editorial and long-form:** Source Serif 4 for essays, philosophical writing,
  and selected research narrative—not for controls or dense tables.
- **Equations:** use the eventual math-rendering font stack rather than forcing
  equations into either interface family.

Recursive is chosen because its Sans-to-Mono variable axis can provide multiple
technical roles with consistent metrics and without layout reflow. Its Casual
axis remains off to preserve the precise and direct voice. Source Serif 4 adds
an archival reading mode without changing the OS shell.

### Layout concept

```text
┌ SYSTEM / LOCATION ─────────────── SIGNAL ┐
│                                           │
│ PRIMARY WORKSPACE              CONTEXT    │
│ research, case study, map      rail       │
│                                           │
├ DEPTH: BRIEF | METHOD | EVIDENCE | FILE ──┤
│ command / visible actions / current state │
└───────────────────────────────────────────┘
```

The frame reads as one instrument. Content does not appear as a collection of
independent SaaS cards.

### Motion

- 2.0–2.6 second skippable first-session boot;
- short calibration, route availability, and final ready state;
- 180–260 ms control-state transitions;
- 280–420 ms Evidence Depth Rail recomposition;
- no continuous scanline, glow pulse, particle field, or ambient movement;
- reduced-motion equivalent uses immediate state change or a short opacity
  transition without spatial travel; and
- no sound.

### Signature

Evidence Depth Rail changes the spatial priority of the same canonical content:
Brief foregrounds orientation, Method exposes process, Evidence expands plots
and traceability, and Artifact docks source material and external records. The
visitor sees how Raihan moves from claim to proof.

### Strengths and risks

- **Strength:** best match for adaptive color, one chassis, structured density,
  silent operation, and the selected creative risk.
- **Risk:** a black chassis with Phosphor or Amber may invite a superficial
  Pip-Boy comparison.
- **Control:** no scanline simulation, copied mono-screen layout, fictional
  device silhouette, mascot, lore, or single-color raster treatment. Ice and
  neutral states demonstrate that the system is broader than one reference.

## 5. Study B — Technical Archive Console

### Concept

A dark operating shell opens precise document surfaces resembling controlled
reports, archive records, and revision packages. It gives the 1950s–1960s
listening influence and long-form writing more presence.

### Palette

| Token | Value | Role |
|---|---:|---|
| Night ink | `#0D0E0E` | shell |
| Warm alloy | `#1A1D1C` | chassis |
| Archive sheet | `#EEE9DA` | reading surface |
| Graphite type | `#1E2423` | document text |
| Oxidized signal | `#7EA58D` | research trace |
| Broadcast amber | `#E8A455` | active archive state |

### Typography

- Barlow Condensed for system headings and compact operational labels;
- Source Serif 4 for reading and archival material; and
- IBM Plex Mono for terminal, tables, identifiers, and revision metadata.

### Layout concept

```text
┌ DARK SYSTEM SHELL ────────────────────────┐
│ CHANNELS │ ┌ CONTROLLED DOCUMENT ──────┐  │
│          │ │ title / abstract / body   │  │
│          │ │ citations / figures       │  │
│          │ └────────────────────────────┘  │
├ REVISION / PROVENANCE / DEPTH ────────────┤
└───────────────────────────────────────────┘
```

### Strengths and risks

- **Strength:** strongest reading experience and natural home for essays,
  technical reports, revision history, and the Listening Archive.
- **Risk:** can become a retro editorial website inside a decorative shell;
  three font families increase loading and typographic governance.
- **Control:** operational actions and evidence states must remain more
  prominent than paper texture or broadcast styling.

## 6. Study C — Dense Operations Matrix

### Concept

A modular, high-density system where content areas behave like connected
infrastructure. Signal Lab and Operations Ledger become districts on a global
operational map.

### Palette

| Token | Value | Role |
|---|---:|---|
| Deep grid | `#080D11` | canvas |
| Module | `#101A21` | primary panels |
| Structural steel | `#23323A` | grid and elevation |
| Data white | `#D6E2E5` | primary text |
| Transit cyan | `#5FC2C8` | routing and research |
| Revision orange | `#F2994A` | active engineering state |

### Typography

Use the IBM Plex family as one coordinated system: Sans Condensed for system
labels, Sans for UI, Serif for selected reading, and Mono for terminal and data.

### Layout concept

```text
┌ GLOBAL OPERATIONS MAP ────────────────────┐
│ [AI]──experiment──evidence                │
│  │                     ┌ detail module ┐  │
│ [OS]──notes────────────│ current node  │  │
│  │                     └───────────────┘  │
│ [ENG]─estimate──source──revision          │
├ ROUTE / DEPTH / COMMAND ──────────────────┤
└───────────────────────────────────────────┘
```

### Strengths and risks

- **Strength:** highest spectacle and strongest sense that all work belongs to
  an interconnected knowledge infrastructure.
- **Risk:** most likely to become cyberpunk, a dashboard, or a complex map that
  delays reading; also highest responsive and maintenance cost.
- **Control:** reserve the matrix for navigation and relationships, not every
  page; avoid ornamental routes and live-looking data that is not actually live.

## 7. Comparative review

| Criterion | Study A | Study B | Study C |
|---|---:|---:|---:|
| Experience-foundation fit | High | Medium–high | Medium |
| Adaptive signal profiles | High | Medium | Medium |
| Research/engineering balance | High | Medium | Medium–high |
| Long-form reading | High | Highest | Medium |
| Originality potential | High | Medium–high | High |
| Imitation/pastiche risk | Medium, controllable | Medium | High |
| Responsive complexity | Medium–high | Medium | Highest |
| Maintenance burden | Medium | Medium–high | High |

## 8. Self-critique and generic-pattern test

### Generic dark AI portfolio test

Study A initially risks the familiar near-black page with one acid accent. It
is acceptable only if the identity is carried by the continuous instrument
composition, Evidence Depth Rail, real evidence states, adaptive signal logic,
and subject-specific artifacts. A glow-heavy card grid would invalidate it.

### Fallout imitation test

Green or amber alone cannot define the product. The system must remain coherent
in Ice and neutral states. It must not use scanlines, a rounded device bezel,
retro mascot illustration, radiation motifs, copied tab structures, or
fictional telemetry.

### Cyberpunk test

Density must describe real information relationships. Neon, foreign scripts,
glitches, warning tape, and constant motion are prohibited when they do not
communicate actual state.

### Corporate-dashboard test

Repeated equal cards, generic metric tiles, pill tabs, and a hero followed by a
stack of feature sections are prohibited. The composition must behave as one
operable field console.

### Revision made after critique

The first concept considered multiple environment-specific palettes. That was
rejected because it would make color carry too much of the AI/Engineering
distinction and create excessive combinations. The revised system separates
signal profile, environment behavior, and evidence depth into independent axes
on one invariant chassis.

## 9. Design-lead recommendation

Adopt **Study A — Adaptive Signal Chassis** as the Gate 2.2 baseline with:

- a fixed near-black chassis;
- Phosphor, Amber, and Ice selectable signal profiles;
- Recursive for system/UI/utility roles with the Casual axis disabled;
- Source Serif 4 for intentional editorial and long-form contexts;
- angular modular structure with restrained rounding and a single chamfer
  signature;
- tactile-digital controls;
- content-specific research and engineering artifacts;
- a theme-reactive ASCII/dithered Operator Record portrait;
- a silent, skippable 2–3 second first-session boot; and
- Evidence Depth Rail recomposition as the dominant visual gesture.

Do not merge the three studies. Study B may inform the Listening Archive and
selected reading surfaces; Study C may inform the global system map. Their
visual systems are not additional themes.

## 10. Font sourcing and privacy direction

Candidate fonts should be self-hosted as subset WOFF2 assets. This avoids
runtime font requests to third-party services and supports the privacy-first
requirement. License files and upstream versions must be recorded when assets
are added.

Verified upstream candidates:

- [Recursive](https://github.com/arrowtype/recursive) — SIL Open Font License
  1.1; variable Sans/Mono design for code and UI.
- [Source Serif 4](https://github.com/adobe-fonts/source-serif) — SIL Open Font
  License 1.1; optical sizes and long-form text support.
- [Barlow](https://github.com/jpt/barlow) — SIL Open Font License 1.1; three
  widths and multiple weights.
- [IBM Plex](https://github.com/IBM/plex) — SIL Open Font License 1.1; Sans,
  Sans Condensed, Serif, Mono, and Math families.

Font adoption remains provisional until browser rendering, glyph coverage,
performance, and accessibility are tested in the prototype.

## 11. Gate 2.2 approval record

On 2026-08-15, Raihan approved Study A and all stated design-lead decisions.
Adaptive Signal Chassis is the identity-system baseline. The normative token,
component, imagery, iconography, motion, and usage rules are recorded in
`06-identity-system-specification.md`.

Gate 2.2 is closed through ADR-0004. Material changes require a superseding
decision record or evidence from prototype validation.
