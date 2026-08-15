# 22 — Component State and Interaction Inventory

**Version:** 1.0  
**Status:** Accepted specification; visual verification pending  
**Gate:** 2.5 — High-Fidelity System

## 1. Component model

Components consume semantic or environment tokens, never primitive colors.
Because the current Figma Starter plan supports one variable mode, Phosphor,
Amber, and Ice are represented as grouped `Signal` variants over one shared
chassis. This is a tooling representation, not three brands.

## 2. Required component families

| Component | Purpose | Required variants or properties |
|---|---|---|
| System Rail | Global location and actions | density, environment, signal, depth-visible |
| Environment Gateway | Equal entry to the two professional worlds | Signal Lab, Operations Ledger; default/hover/focus/active |
| Action Control | Buttons and compact actions | primary, secondary, quiet; default/hover/focus/pressed/disabled/loading |
| Signal Selector | Session-only visual profile | Phosphor, Amber, Ice; selected and unselected |
| Evidence Depth Rail | Brief/Method/Evidence/Artifact recomposition | four selected states; desktop and compact presentation |
| Command/Search Surface | Combined command and discovery interface | idle, query, results, no-results, command-error |
| Result Row | Search destination or command suggestion | content type, environment, Coming Soon, unavailable |
| Instrument Panel | Named functional region | navigation, evidence, source, limitation, figure, calculation, operator record |
| Status Marker | Redundant state communication | text plus shape/icon; no color-only meaning |
| System Map Entry | Network node or directory row | current, available, Coming Soon, unavailable |
| Content Metadata Rail | Type, status, date, evidence state, license | compact and reading presentation |
| Collaboration Brief | Project intake | empty, valid, invalid, submitting, submitted, unavailable |

## 3. Universal interactive states

| State | Required behavior |
|---|---|
| Default | Clear affordance, label, and available action |
| Hover | Pointer-only reinforcement; no information exclusive to hover |
| Focus-visible | High-contrast outline independent from hover and not clipped |
| Pressed/active | Immediate cause-and-result feedback without layout movement |
| Selected | Persistent label, indicator shape, and programmatic state |
| Disabled | Reason exposed in adjacent text or description; not merely reduced opacity |
| Loading | Original label retained or announced; repeated submission prevented |
| Error | Specific correction guidance; focus behavior follows Document 23 |

## 4. Geometry and visual character

- Structural panels use 2 px radius.
- Primary controls may use up to 6 px radius.
- The shallow chamfer is reserved for active system state and Evidence Depth
  Rail.
- Dividers use the 1 px hairline token.
- Repeated pills, glass panes, ornamental brackets, large shadows, glow, and
  fake telemetry are prohibited.
- Controlled wear may appear only as a restrained, nonsemantic texture that
  does not reduce contrast or imply false device state.

## 5. Signal-profile implementation

Fixed chassis, text, spacing, geometry, and status semantics do not change.
Only profile-aware accent assignments vary:

| Variant | Accent token |
|---|---|
| `Signal=Phosphor` | `color/signal/phosphor` |
| `Signal=Amber` | `color/signal/amber` |
| `Signal=Ice` | `color/signal/ice` |

Every signal variant must pass the same focus, contrast, and semantic tests.
Amber is not automatically warning; Phosphor is not automatically success.

## 6. Keyboard contracts

- `Tab` and `Shift+Tab` follow visual and reading order.
- `Enter` activates links and primary actions.
- `Space` activates buttons, selectors, and toggle-like controls.
- Arrow keys move within composite controls only when the control follows a
  documented radio, tab, listbox, menu, or toolbar pattern.
- `Escape` closes Command/Search and dialogs and restores invoking focus.
- `Ctrl/Cmd+K` opens Command/Search; no other global shortcut is required.
- Evidence Depth Rail exposes all four states to keyboard and assistive
  technology without requiring horizontal gestures.

## 7. Component-specific contracts

### System Rail

The rail always names the current location. Environment and signal are
separate properties. When space collapses, labels move into an explicit system
menu only after the current environment and location remain visible.

### Environment Gateway

Gateways are peers. Neither may be styled as a primary CTA while the other is
secondary. Each provides a one-sentence scope and an explicit entry action.

### Evidence Depth Rail

The selected depth has text, shape, and programmatic state. Recomposition
preserves canonical claims, sources, and limitations. Artifact may show closed
or unavailable without hiding the remaining document.

### Command/Search

Opening the surface moves focus to its input. Results expose type,
environment, status, and destination. No-results and command errors provide
valid alternatives instead of fictional terminal output.

### Collaboration Brief

Labels remain visible after input. Required fields are identified in text.
Submission status is announced. Sensitive information receives a concise
privacy warning before submission.

## 8. Static and degraded states

Interactive figures and simulations require a static fallback containing the
same claim, key values, assumptions, and interpretation. If JavaScript or an
external artifact is unavailable, the page remains readable and states the
limitation. A dead placeholder is not an accepted fallback.

## 9. Annotation requirements

Every high-fidelity component or screen annotation records:

- component/state name;
- trigger and resulting state;
- keyboard behavior;
- focus destination and restoration;
- responsive transformation;
- reduced-motion equivalent;
- data/content dependency;
- static fallback; and
- unresolved implementation note, if any.

## 10. Acceptance conditions

- No critical control exists only as an OS metaphor or terminal command.
- All universal states are specified for every applicable component.
- Profile variants alter accent, not structure or meaning.
- Loading, error, unavailable, Coming Soon, and closed-artifact states are
  distinguishable in words.
- Component behavior remains compatible with Documents 08, 09, 16, and 21.

