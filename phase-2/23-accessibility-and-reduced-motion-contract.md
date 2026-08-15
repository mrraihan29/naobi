# 23 — Accessibility and Reduced-Motion Contract

**Version:** 1.0  
**Status:** Accepted design contract; implementation evidence pending  
**Gate:** 2.5 — High-Fidelity System

## 1. Baseline

The launch target is WCAG 2.2 Level AA for public content and critical
workflows. Accessibility is a release gate, not a preference or alternate
theme. Conformance claims may be made only after implementation testing.

## 2. Keyboard and focus

- All navigation, environment selection, search, depth selection, artifact
  access, and collaboration actions are keyboard operable.
- Focus order follows reading order at every responsive band.
- Focus-visible treatment passes against Void, Carbon, Alloy, and all three
  signal profiles.
- Focus is never hidden under sticky rails or overlays.
- Opening a modal surface moves focus inside it; closing restores focus to the
  invoker.
- Route changes place focus at a meaningful page heading when browser behavior
  alone would leave context ambiguous.
- Focus is not moved merely because Evidence Depth Rail recomposes content.

## 3. Color and status

- Normal text, large text, controls, focus indicators, and graphical objects
  are tested separately against their actual adjacent colors.
- Status meaning uses text plus shape or icon. Signal profile is never reused
  as an implicit success or warning system.
- Disabled content remains readable enough to explain why it is unavailable.
- Generated texture, wear, and overlays cannot reduce required contrast.

## 4. Typography, zoom, and reflow

- Body copy does not drop below the accepted roles in Document 06.
- Long-form reading targets 62–76 characters per line.
- Content remains usable at 200% zoom without loss of information or action.
- At narrow widths, overflow is isolated to tables, terminal output, or figures
  that genuinely require it.
- Uppercase is limited to short operational labels and identifiers.
- Recursive Mono is not used for long prose.

## 5. Structure and language

- Pages use one clear primary heading followed by logical heading levels.
- Landmarks and accessible names use visitor-recognizable English, not fictional
  OS jargon.
- The canonical launch language is professional English.
- Translation controls, when implemented, expose language state and do not
  silently replace canonical URLs or citations.
- Links describe destinations; repeated generic labels require additional
  accessible context.

## 6. Forms and errors

- Every field has a persistent label, purpose, and required/optional state.
- Error messages identify the field, problem, and correction.
- Submission failure produces an error summary linked to affected fields.
- Success and loading states are announced without relying on animation.
- Autofill, copy/paste, password managers, and browser validation are not
  obstructed without a documented security reason.

## 7. Figures, tables, and artifacts

- Every meaningful figure has concise alternative text, a caption, and nearby
  interpretation.
- Complex diagrams receive a structured textual explanation.
- Tables preserve headers and relationships at every band; mobile
  transformation cannot detach a value from its label.
- Interactive explanations provide an equivalent static claim and values.
- Download, external-link, closed-source, and unavailable states are announced
  in the visible label.

## 8. Terminal and OS metaphor

Terminal functions have visible equivalents. Command syntax is not required to
discover content. Output is structured as readable application feedback rather
than an inaccessible stream of decorative characters. ASCII imagery is hidden
from assistive technology when equivalent alt text and biography are present.

## 9. Reduced-motion contract

`prefers-reduced-motion: reduce` produces a bounded behavior change:

| Experience | Standard motion | Reduced motion |
|---|---|---|
| First-session boot | 2.0–2.6 s calibration → routes → ready | Skip choreography and render ready state immediately |
| Hover/focus | 120–180 ms, no layout movement | Immediate state or short opacity change |
| Control state | 180–260 ms | Immediate state or short opacity change |
| Environment switch | 320–480 ms instrument replacement | No spatial travel; immediate replacement or short fade |
| Evidence-depth change | 280–420 ms orchestrated recomposition | No spatial recomposition; immediate content state or short fade |
| Decorative motion | None continuously | None |

Reduced motion does not create a second layout or remove information. It also
does not disable functional progress feedback.

## 10. Audio and external media

The website has no autoplay audio or ambient sound. External music opens only
after explicit visitor action and must be identified as an external service.
No navigation or status depends on sound.

## 11. Test evidence required before release

1. Automated accessibility scan on representative routes.
2. Complete keyboard walkthrough for both environments and direct-entry flow.
3. Screen-reader smoke tests using at least one Windows and one mobile pairing.
4. Contrast results for every signal profile and semantic state.
5. 200% zoom and 320 CSS-pixel reflow checks.
6. Reduced-motion screenshots or recordings for boot, environment change, and
   Evidence Depth Rail.
7. Form error, loading, and success announcement evidence.
8. Figure, table, and interactive-fallback review.

## 12. Launch blockers

Missing keyboard access, invisible focus, color-only status, inaccessible
critical forms, content loss at zoom, unbounded motion, terminal-only
navigation, or missing evidence fallbacks block launch.

