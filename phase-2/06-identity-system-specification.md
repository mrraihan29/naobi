# 06 — Identity System Specification

**Version:** 1.1  
**Status:** Accepted baseline; prototype verification required  
**Gate:** 2.2 — Identity System  
**Governing decisions:** ADR-0003, ADR-0004  
**Product Owner:** Raihan  
**Design lead:** Rei

## 1. System definition

Adaptive Signal Chassis is a dark-base identity system for one personal
cognitive field console. It supports three orthogonal forms of variation:

- signal profile changes the active accent;
- environment changes information instruments; and
- evidence depth changes content composition.

No variation may replace the core navigation, alter semantic meaning, or make
the product appear to be a separate brand.

## 2. Token architecture

Tokens must follow four layers:

1. **Primitive:** raw color, space, type, radius, and duration values.
2. **Semantic:** canvas, surface, text, focus, verified, warning, error, and
   unavailable roles.
3. **Environment:** Signal Lab and Operations Ledger presentation roles.
4. **Component:** terminal, system rail, depth rail, panel, table, figure, and
   control assignments.

Components may consume semantic or environment tokens. They must not consume
raw color values directly. Signal-profile substitution happens at the semantic
`signal.active` level.

## 3. Color baseline

### Fixed chassis

| Token | Value | Usage |
|---|---:|---|
| `chassis.void` | `#070A0B` | root canvas |
| `chassis.carbon` | `#111618` | persistent shell and primary surface |
| `chassis.alloy` | `#263033` | raised surface, divider, disabled outline |
| `text.primary` | `#D8E2DC` | body and critical labels |
| `text.muted` | `#81908A` | metadata and supporting labels |

### Selectable signal profiles

| Profile | `signal.active` | Use |
|---|---:|---|
| Phosphor | `#A5E36D` | field-instrument signal |
| Amber | `#F0A34A` | warm archival/engineering signal |
| Ice | `#63C7C9` | analytical signal |

Only one signal profile is active. Selection may last for the browser session
but must not persist across visits in the initial release.

### Semantic states

Status remains independent from signal profile. Verified, warning, error,
confidential, unavailable, and in-progress states require a text label plus a
shape or icon. Color is supplementary. Exact status values remain subject to
component-level contrast testing in Gate 2.5.

### Prohibited color behavior

- do not make the entire interface monochrome in the signal color;
- do not apply glow to body text;
- do not use active signal as error or success solely because it is green or
  amber;
- do not encode Signal Lab versus Operations Ledger only through color; and
- do not introduce environment-exclusive palettes.

## 4. Typography

### Roles

| Role | Family/configuration | Initial desktop setting |
|---|---|---|
| System display | Recursive Linear, proportional, 650–750 | 40/44 px |
| Page title | Recursive Linear, proportional, 650 | 32/38 px |
| Section heading | Recursive Linear, proportional, 600 | 24/30 px |
| Interface/body | Recursive Linear, proportional, 400–500 | 16/25 px |
| Utility/data | Recursive Linear, Mono axis, 450–600 | 13/18 px |
| Micro label | Recursive Linear, Mono axis, 600 | 12/16 px |
| Editorial reading | Source Serif 4 Text | 18/30 px |

The Recursive Casual axis remains disabled. Uppercase is reserved for short
system states, identifiers, and operational labels; it is not used for body
copy. Long identifiers may use Mono; long prose must not.

Font files will be self-hosted as version-pinned WOFF2 subsets with license
files. Fallback stacks and final loading strategy are decided in Gate 2.6.

## 5. Spacing and grid

- base rhythm: 8 px;
- allowed supporting increments: 4, 8, 12, 16, 24, 32, 48, and 64 px;
- desktop workspace: 12-column responsive grid inside the chassis;
- compact data surfaces may use nested 4- or 6-column grids;
- reading measure target: 62–76 characters;
- terminal and tables may exceed reading measure but require independent
  overflow behavior;
- density comes from grouping and alignment, not reduced text below legible
  sizes.

Breakpoint behavior is deliberately deferred to Gate 2.5 after the desktop
experience architecture is validated.

## 6. Geometry and elevation

- structural panels: 2 px radius;
- primary touch targets: up to 6 px radius;
- one shallow chamfer reserved for active system state and Evidence Depth Rail;
- 1 px dividers and registration marks use Alloy or semantic boundaries;
- elevation is communicated by adjacency, border strength, and controlled
  surface change, not large shadows;
- floating panels are limited to command, help, search, and critical dialogs;
- avoid repeated pills, glass panes, ornamental corner brackets, and excessive
  nested borders.

## 7. Component character

### System rail

Persistent desktop structure showing location, active environment, signal
profile, evidence depth when applicable, and globally available actions.

### Controls

Tactile-digital hybrid. Default, hover, focus, active, selected, disabled,
loading, and error states must be specified. A control must not visually imply
rotation, drag, or multiple detents unless it supports that interaction.

### Panels

Panels are functional regions, not generic cards. Each panel requires a named
role such as navigation, evidence, source, limitation, figure, calculation, or
operator record.

### Evidence Depth Rail

The only dominant chamfered component. It exposes Brief, Method, Evidence, and
Artifact as visible, keyboard-operable states. Page recomposition must preserve
reading position or clearly communicate where focus moved.

### Terminal

Terminal typography uses Recursive Mono but remains part of the same chassis.
It is not styled as a Unix shell unless the command grammar genuinely matches
one. Commands must have visible-navigation equivalents.

## 8. Iconography

- design on a 24-unit grid with a 20-unit optical drawing area;
- default 1.5-unit stroke, squared or minimally rounded terminals;
- filled icons reserved for selected or critical states;
- custom system glyphs may represent evidence depth, research state, estimate
  maturity, source lineage, and confidentiality;
- familiar actions such as search, close, download, external link, and menu
  retain familiar shapes;
- icons accompany text on first use and never carry critical meaning alone;
- no radioactive, military-faction, anime-organization, or generic hacker
  symbols.

No icon library is adopted in Phase 2.6 until coverage, visual fit, license,
bundle size, and customization needs are assessed.

## 9. Imagery and data graphics

Use first-party artifacts wherever possible. Generated atmosphere must never
be presented as research or engineering evidence.

### Signal Lab

Prefer plots, uncertainty bands, model diagrams, evaluation tables, experiment
timelines, ablations, and explicit negative results.

### Operations Ledger

Prefer estimate structures, quantity-rate lineage, revision states, source
registers, sanitized drawings, and assumption/exclusion blocks.

### Field Notes and Listening Archive

Use dates, citation fragments, diagrams, and listening metadata. Do not simulate
radio noise, frequency data, or transmission state that has no real source.

### Operator Record

Use a theme-reactive ASCII or restrained dither treatment derived from Raihan's
own photograph. Provide descriptive alt text and a readable biography. Do not
copy another property's character illustration or pose.

## 10. Motion and silence

| Motion | Duration | Rule |
|---|---:|---|
| First-session boot | 2.0–2.6 s | skippable; calibration → routes → ready |
| Hover/focus feedback | 120–180 ms | no layout movement |
| Control state | 180–260 ms | communicate cause and result |
| Environment transition | 320–480 ms | chassis persists; instruments change |
| Evidence-depth recomposition | 280–420 ms | one orchestrated transformation |

No continuous scanline, glow pulse, particle field, glitch, or ambient motion.
Reduced-motion mode uses immediate transitions or short opacity changes. The
website has no sound; external music requires explicit visitor action.

## 11. Voice

Interface voice is precise and direct.

- `Open methodology` rather than `Discover how it works`.
- `No artifact is published` rather than `Nothing exciting here yet`.
- `Source unavailable. Read the limitation.` rather than `Oops! Something went
  wrong.`
- `Send project brief` rather than `Let's build something amazing`.

Labels name visitor-recognizable actions. Fictional operating-system jargon is
prohibited when it makes navigation harder.

## 12. Accessibility and verification gates

- keyboard focus must remain visible under all three signal profiles;
- status meaning requires text and shape/icon redundancy;
- primary content targets WCAG AA contrast at minimum;
- the system must remain usable with motion reduction enabled;
- terminal functions require visible control equivalents;
- ASCII portrait requires equivalent alt text;
- diagrams require captions and textual interpretation;
- font rendering, glyph coverage, zoom behavior, and long-form readability must
  be tested before final adoption.

## 13. Rejection tests

Reject an implementation if:

- changing the signal profile makes it feel like another website;
- the AI and Engineering worlds differ only by accent color;
- visual wear reduces legibility;
- most content appears as equal floating cards;
- decorative telemetry cannot be tied to real information;
- terminal navigation is faster only because visible navigation is incomplete;
- Evidence Depth Rail behaves as four unrelated pages; or
- the interface resembles a fan recreation, hacker template, or generic dark
  AI portfolio.

## 14. Gate status

This specification closes the identity-system definition for Gate 2.2. Gate
2.5 will test and refine component tokens through high-fidelity prototypes.
Evidence-driven refinements do not require a new identity direction; material
changes to the adopted system require a superseding ADR.

## 15. Gate 2.5 refinements

The following refinements are accepted through ADR-0007:

- full console at 1280 px and above, compact console at 1024–1279 px,
  simplified/tablet at 768–1023 px, and mobile below 768 px are provisional
  validation bands;
- mobile uses a complete vertical instrument stack rather than a reduced visual
  copy of the desktop control room;
- the full boot is restricted to a fresh desktop root entry once per session;
- reduced motion explicitly skips boot choreography and spatial
  recomposition; and
- Phosphor, Amber, and Ice remain one identity. Figma Starter represents them
  through grouped variables and component variants; this tooling compromise
  does not constrain the production theme architecture.

Exact breakpoint changes and final semantic-state colors require visual or
browser evidence. No untested status palette is added by this revision.
