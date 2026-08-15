# 21 — Responsive Behavior Specification

**Version:** 1.0  
**Status:** Accepted behavioral baseline; prototype verification pending  
**Gate:** 2.5 — High-Fidelity System  
**Product Owner:** Raihan  
**Design lead:** Rei

## 1. Purpose

This specification defines how Raihan's OS changes under content pressure. It
does not define framework breakpoints or authorize device-specific product
forks. All bands preserve one information architecture, one canonical content
model, and equivalent access to every critical action.

## 2. Invariants

At every supported width:

- Signal Lab and Operations Ledger remain equally prominent;
- canonical routes and direct links remain complete without the boot flow;
- search, environment switching, Collaboration, and system identity remain
  reachable through visible controls;
- command-only behavior is prohibited;
- eligible Research and Engineering Case Study content remains one document
  with Brief, Method, Evidence, and Artifact projections;
- Coming Soon, unavailable, confidential, and error states remain explicit;
- status meaning never depends on color alone; and
- decorative network views, animation, and density may be reduced before
  content or navigation is removed.

## 3. Provisional validation bands

| Band | Width | Product behavior | Validation intent |
|---|---:|---|---|
| Full console | `>=1280 px` | Complete desktop chassis, network map, two-column gateways, persistent System Rail | Primary launch experience |
| Compact console | `1024–1279 px` | Same capabilities with compressed rail, reduced gutters, and controlled panel stacking | Verify density without loss |
| Simplified/tablet | `768–1023 px` | Directory-first navigation, stacked instruments, reduced map spectacle | Preserve comprehension and touch access |
| Mobile reading/navigation | `<768 px` | Vertical instrument stack, compact controls, reading-first content | Complete but deliberately simpler experience |

Exact breakpoint values may move only when prototype or browser evidence shows
content collision, unusable measure, or excessive unused space. A device name
alone is not sufficient reason to move a breakpoint.

## 4. Shared shell behavior

### Full console

- System Rail remains persistent and shows current location, environment,
  signal profile, global search, System Map, and Collaboration.
- Primary content uses the 12-column workspace defined in Document 06.
- Floating surfaces are limited to Command/Search, Help, and critical dialogs.

### Compact console

- The rail may shorten labels after icons and accessible names are established.
- Secondary telemetry may move into an expandable system-details region.
- Functional panels may stack; they must not become horizontally clipped cards.

### Simplified/tablet

- The persistent rail becomes a compact header plus an explicit system menu.
- The active environment and current location remain visible outside the menu.
- Network visualization becomes optional; its directory remains primary.

### Mobile

- The shell is a compact header and vertical content flow.
- Search and Collaboration remain first-level actions.
- Signal profile moves into system controls but is not hidden behind terminal
  syntax.
- No horizontal page scrolling is permitted. Tables, terminal output, and wide
  figures receive their own bounded overflow or alternative presentation.

## 5. Central OS

### Full and compact console

Central OS shows a short operator/system identity, two equal gateways, recent
operations, visible Command/Search, current signal profile, System Map, and
Collaboration. The page must be useful before a gateway is selected.

### Simplified and mobile

- Gateways stack vertically and retain equal visual weight.
- Recent Operations follows the gateways.
- Search is visible before the first long content region.
- The full 2.0–2.6 second boot is replaced by a ready-state transition shorter
  than one second.
- Mobile does not imitate a shrunken desktop control room.

## 6. Environment overviews

Signal Lab and Operations Ledger share composition but use different
instruments. Desktop may use a denser multi-column arrangement; tablet and
mobile stack instruments in priority order. Environment identity must remain
recognizable through instrument type, terminology, data shape, and rhythm—not
only through the active signal color.

## 7. Command/Search

- `Ctrl/Cmd+K` remains the only global shortcut.
- Desktop opens the combined Command/Search floating surface with focus placed
  in its input.
- Mobile opens a full-width or full-screen surface led by visible results and
  actions. Typed commands remain supported but are not the primary affordance.
- Results use one global index and include Coming Soon entries with an explicit
  label and lower evidence expectation.
- Escape closes the surface and restores focus to the invoking control.
- Every command has an equivalent visible navigation action.

## 8. Evidence Depth Rail

| Band | Presentation |
|---|---|
| Full/compact | Persistent rail adjacent to eligible content; recomposition may change spatial priority |
| Simplified/mobile | Sticky compact four-step control above the active projection |

Selecting Brief, Method, Evidence, or Artifact recomposes the same canonical
page. It must not open four unrelated routes, scroll the entire page
horizontally, or discard the reader's context. Focus moves only when needed and
the destination receives a clear heading.

## 9. System Map

- Full console combines an operational network with a complete directory.
- Compact console may reduce edge labels or decorative connections.
- Tablet and mobile make the directory authoritative and may omit the network.
- Removing the network must not remove destinations, status, or relationship
  descriptions.

## 10. Direct entry and reading mode

Direct links never replay boot. They open canonical content in a reduced shell
with identity, location, environment, applicable depth control, sources,
license, Collaboration, and an optional `Open Central OS` action.

Reading mode narrows the measure to approximately 62–76 characters, preserves
headings and evidence navigation, and removes nonessential chassis density.
Editorial content may use Source Serif 4; interface and evidence metadata remain
Recursive.

## 11. Collaboration Center

- Desktop may use a two-region layout: route selection plus project brief.
- Tablet/mobile use a single vertical form.
- Contact method, project type, scope summary, desired outcome, timing, and
  privacy notice remain explicit.
- Prefilled context from a research, engineering, or Coming Soon entry remains
  editable and must not imply prior consent.
- Errors appear next to the field and in a summary; focus moves to the summary
  only after submission fails.

## 12. Content surfaces

- Figures include a caption and textual interpretation.
- Data tables expose a compact summary before independent horizontal overflow.
- Engineering line items preserve quantity, unit, rate-source, maturity, and
  assumption relationships; mobile may transform rows into labeled records.
- Source registers and limitations remain visible at all widths.
- Artifact actions show unavailable or closed-source states without producing
  dead controls.

## 13. Boot and session behavior

- Full boot runs only on an intentional fresh full-console root entry and at
  most once per browser session.
- Internal navigation, history navigation, direct links, tablet, and mobile do
  not replay the full boot.
- Signal selection lasts for the current session only in the initial release.
- No navigation, language, theme, or reading-position preference is persisted
  across visits.

## 14. Responsive verification matrix

Each critical flow must be checked at minimum at 1440, 1280, 1024, 768, 390,
and 320 CSS pixels, plus 200% browser zoom on a 1280-wide viewport.

For every check record:

1. visible destination and environment;
2. focus order and focus restoration;
3. text wrapping, reading measure, and clipping;
4. touch target separation;
5. local overflow behavior;
6. status-label preservation;
7. static fallback availability; and
8. motion and reduced-motion result.

## 15. Acceptance conditions

This contract passes only when:

- all critical routes work without a terminal;
- no band hides evidence or Collaboration behind decorative interaction;
- both professional worlds remain equally legible;
- mobile is complete without replicating desktop density;
- Evidence Depth Rail remains one-document recomposition;
- direct-link reading remains complete without Central OS entry; and
- breakpoint changes are backed by prototype or browser evidence.

