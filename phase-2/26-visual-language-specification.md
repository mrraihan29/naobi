# 26 — Normative Visual Language Specification

**Version:** 1.0  
**Status:** Accepted  
**Gate:** 2.5 — High-Fidelity System  
**Normative companions:** Documents 06, 21–23 and `artifacts/design-tokens.json`

## 1. Design thesis

Raihan's OS is a personal cognitive field console for professionals evaluating
AI research and quantitative engineering work. Its first job is to establish
Raihan as a precise researcher and engineer; its second is to let evidence be
inspected without flattening the work into portfolio cards.

The design feels like a maintained instrument with a small amount of field
history: quiet, dense, exact, and personal. Fallout-era field equipment,
Evangelion control systems, mid-century broadcast equipment, and Neo-Tokyo are
references for material intelligence—not assets, symbols, layouts, or costumes
to copy.

## 2. Memorability strategy

The single dominant signature is the **Evidence Depth Rail**. Brief, Method,
Evidence, and Artifact are not tabs to four pages; they alter the spatial
priority of one canonical document. This is where the system spends its visual
boldness.

Everything around it remains restrained:

- a fixed dark chassis;
- operational rather than decorative labels;
- one active signal profile;
- named functional panels instead of generic cards;
- real source, limitation, and maturity states; and
- no ambient spectacle.

## 3. Palette

| Role | Token | Value | Rule |
|---|---|---:|---|
| Root canvas | `color.canvas.root` | `#070A0B` | Dominant negative field |
| Chassis surface | `color.surface.chassis` | `#111618` | Persistent shell and primary panels |
| Raised/alloy surface | `color.surface.raised` | `#263033` | Dividers, selected structure, unavailable outline |
| Primary text | `color.text.primary` | `#D8E2DC` | Body and critical labels |
| Muted telemetry | `color.text.muted` | `#81908A` | Metadata and secondary labels |
| Phosphor signal | `color.signal.phosphor` | `#A5E36D` | Field-instrument profile |
| Amber signal | `color.signal.amber` | `#F0A34A` | Archival/engineering profile |
| Ice signal | `color.signal.ice` | `#63C7C9` | Analytical profile |

Only one signal profile is active. Signal color may mark focus, selection,
current route, active depth, and a small number of high-priority traces. It does
not flood panels, glow behind body copy, or replace semantic status.

Exact success, warning, error, confidential, and in-progress colors remain
unassigned until browser contrast testing. Their states use text plus a shape
or familiar icon in the meantime.

## 4. Typography

| Role | Family and style | Size/line | Use |
|---|---|---:|---|
| System display | Recursive Sans Linear Bold | `40/44` | Central thesis and major system state |
| Page title | Recursive Sans Linear SemiBold | `32/38` | Canonical page title |
| Section heading | Recursive Sans Linear SemiBold | `24/30` | Named functional region |
| Interface/body | Recursive Sans Linear | `16/25` | Navigation and explanatory prose |
| Utility/data | Recursive Mono Linear Medium | `13/18` | Metadata, identifiers, commands, numeric labels |
| Micro label | Recursive Mono Linear SemiBold | `12/16` | Short operational labels and states |
| Editorial reading | Source Serif 4 Regular | `18/30` | Essays and intentional long-form reading |

The Recursive Casual axis is always off. Mono is reserved for data and utility,
not personality theatre. Uppercase is limited to short identifiers and system
states. Reading measure targets 62–76 characters.

## 5. Spacing, grid, and density

- Base rhythm: 8 px.
- Supporting values: 4, 8, 12, 16, 24, 32, 48, and 64 px.
- Full desktop workspace: 12 columns inside the chassis.
- Compact instrument groups: nested 4- or 6-column grids.
- Full-console outer gutter: 32 px; compact console: 24 px; mobile: 16 px.
- Primary region gap: 24–32 px; internal control gap: 8–12 px.
- Density comes from alignment, grouping, and shared baselines—not smaller body
  text or indiscriminate card grids.

## 6. Geometry and material

- Structural panels use 2 px radius.
- Primary touch controls use at most 6 px radius.
- Dividers and registration marks use a 1 px hairline.
- The shallow chamfer is reserved for active system state and the Evidence
  Depth Rail.
- Elevation uses adjacency, border strength, and controlled surface change.
- Command/Search and critical dialogs are the only routine floating surfaces.

Permitted wear is limited to very low-contrast edge variation or restrained
dither derived from a real operator image. Scratches, noise, scanlines, tape,
glitches, bloom, and ornamental corner brackets are rejected.

## 7. Layout grammar

### Central OS

The opening is a system thesis, not a marketing hero. Operator identity,
professional scope, two equal gateways, Recent Operations, search, map, and
Collaboration form one connected workspace.

### Signal Lab

Uses experiment status, model diagrams, uncertainty, evaluation tables,
ablations, failure states, and source lineage. Rhythm may be more exploratory
but remains measured.

### Operations Ledger

Uses estimate structures, quantity-rate lineage, revision states, source
registers, assumptions, exclusions, and maturity. Rhythm is more tabular and
checkpoint-driven.

The environments share one chassis and navigation. They differ through the
shape and ordering of their instruments—not exclusive palettes.

## 8. Panels and controls

Every panel is named by function: Navigation, Evidence, Source, Limitation,
Figure, Calculation, Operator Record, or Collaboration. A surface without a
functional role is removed.

Controls use direct labels: `Open methodology`, `View sources`, `Send project
brief`, and `Open Central OS`. Labels such as `Discover`, `Explore the future`,
or fictional machine jargon are not accepted when a plain action exists.

## 9. Iconography and graphics

- Icons use a 24-unit grid and approximately 20-unit optical area.
- Default stroke is 1.5 units with squared or minimally rounded terminals.
- Familiar actions retain familiar shapes.
- Custom glyphs may represent evidence depth, maturity, lineage, and
  confidentiality.
- Critical meaning always includes text.
- Radioactive, military-faction, anime-organization, and hacker symbols are
  prohibited.

Data graphics show real relationships. Decorative gauges, frequencies, and
telemetry without a source are prohibited.

## 10. Motion

| Event | Standard | Reduced motion |
|---|---:|---|
| Fresh desktop boot | 2.0–2.6 s | Ready state immediately |
| Hover/focus | 120–180 ms | Immediate or short opacity change |
| Control result | 180–260 ms | Immediate or short opacity change |
| Environment switch | 320–480 ms | No travel; replace or fade |
| Evidence depth | 280–420 ms | No spatial recomposition |

No continuous scanline, glow pulse, particle field, glitch, or ambient motion
is permitted. The website has no sound.

## 11. Responsive composition

- `>=1280`: full console, persistent rail, network plus directory.
- `1024–1279`: compact console, compressed rail, controlled stacking.
- `768–1023`: simplified shell, directory first, stacked instruments.
- `<768`: vertical reading/navigation system with compact depth control.

Responsive changes remove spectacle before information. Direct links never
replay boot.

## 12. Authenticity rejection tests

Reject a design when:

- replacing Raihan's content would make it a generic AI portfolio;
- green text and a dark background carry the entire identity;
- Fallout, Evangelion, or Akira recognition is required to understand it;
- all content becomes equally weighted floating cards;
- AI and Engineering differ only by color;
- the terminal hides incomplete visible navigation;
- decorative telemetry cannot be traced to real information; or
- visual wear, motion, or density reduces reading and focus clarity.

## 13. Handoff rule

Markdown and `artifacts/design-tokens.json` are normative. ASCII blueprints
define hierarchy and relationship, not pixel-perfect rendering. The first
browser prototype must prove font rendering, contrast, responsive pressure,
focus, motion, and the Evidence Depth Rail before feature expansion.

