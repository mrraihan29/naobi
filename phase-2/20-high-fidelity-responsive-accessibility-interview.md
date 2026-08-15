# 20 — High-Fidelity, Responsive, and Accessibility Interview

**Version:** 1.0  
**Status:** Recommendations accepted; implementation evidence tracked separately  
**Gate:** 2.5 — High-Fidelity System  
**Product Owner:** Raihan  
**Facilitator:** Rei

## Purpose

Interview 2E decides how the accepted identity, experience architecture, and
content contracts become testable high-fidelity desktop and simplified mobile
prototypes. It does not choose the production framework.

## Questions and recommendations

### 1. Responsive bands

**Recommendation:** design by content pressure rather than device names, using
provisional validation bands: full console at 1280 px and above, compact console
from 1024–1279 px, simplified/tablet structure from 768–1023 px, and mobile
reading/navigation below 768 px. Exact breakpoints may move after prototype
testing.

Approve?

### 2. Mobile root experience

**Recommendation:** mobile keeps both gateways, Recent Operations, search,
signal profile, and Collaboration, but uses a vertical instrument stack. Replace
the 2–3 second boot with a sub-second ready-state transition; do not simulate
the full desktop chassis.

Approve?

### 3. Mobile Command/Search

**Recommendation:** keep the combined Command/Search interface and documented
commands, but lead with visible search results/actions because long typed
commands are not the primary mobile behavior.

Approve?

### 4. Mobile Evidence Depth Rail

**Recommendation:** use a sticky compact four-step control. Selecting a depth
recomposes the same page; it does not horizontally scroll the entire content or
open separate screens.

Approve?

### 5. System Map reduction

**Recommendation:** desktop shows network plus directory. Tablet/mobile make the
directory primary and omit the network visualization when space or performance
would reduce clarity.

Approve?

### 6. Boot frequency

**Recommendation:** full boot runs only on intentional fresh desktop root entry
once per browser session. Internal navigation and direct links never replay it.
Session state disappears when the session ends.

Approve?

### 7. Signal-profile behavior

**Recommendation:** selector remains visible in the System Rail on desktop and
inside system controls on mobile. Selection is session-only. All three profiles
must pass the same focus, contrast, semantic-state, and interaction tests.

Approve?

### 8. Reduced motion clarification

An earlier Phase 1 answer preferred not adding reduced motion because of
development complexity. The accepted Phase 1/2 baseline nevertheless treats
accessibility as a mandatory gate.

**Recommendation:** implement a deliberately small `prefers-reduced-motion`
contract: skip boot choreography, remove spatial travel/recomposition, stop
nonessential animation, and use immediate state changes or short fades. This is
not a second design system and should have bounded implementation cost.

Approve this explicit resolution?

### 9. Initial high-fidelity prototype set

**Recommendation:** prototype these critical surfaces before secondary pages:

1. Central OS desktop;
2. Signal Lab and Operations Ledger overview states;
3. Research/Engineering Evidence Depth Rail;
4. unified Command/Search;
5. System Map;
6. direct-link reduced shell and reading mode;
7. Collaboration Center;
8. mobile Central OS, content, search, and collaboration; and
9. empty, error, Coming Soon, closed-artifact, and reduced-motion states.

Approve?

### 10. Prototype content

**Recommendation:** use Document 19 fixtures until Raihan supplies approved real
content. No visual prototype may invent a flagship, case result, or quantitative
claim for realism.

Approve?

### 11. Design review order

**Recommendation:** review in this order: information hierarchy → keyboard and
focus → responsive behavior → interaction/fallback → visual identity → motion →
polish. A visually attractive surface cannot advance while earlier checks fail.

Approve?

### 12. Figma deliverable strategy

**Recommendation:** create one controlled Figma file containing foundations,
components/states, desktop flows, mobile flows, prototype links, annotation,
and review status. Do not split the system into multiple files until scale or
permissions provide a concrete reason.

Approve?

## Outputs after approval

Rei will produce:

1. responsive behavior specification;
2. component/state inventory and interaction annotations;
3. accessibility and reduced-motion contract;
4. high-fidelity prototype coverage matrix;
5. Figma file and review evidence when the connected tool is available;
6. visual, keyboard, responsive, and motion QA findings;
7. accepted refinements to the identity specification; and
8. Gate 2.5 ADR and Product Owner sign-off package.

## Approval record

Raihan approved all twelve recommendations. When Figma Starter prevented native
multi-mode organization, Raihan approved keeping one controlled file and using
grouping, Sections, signal variables, and component variants. Raihan also
confirmed that Figma is supporting work rather than the center of the project.

Normative outputs are recorded in Documents 21–24 and ADR-0007. Visual evidence
status and the remaining closure decision are recorded in Document 25.
