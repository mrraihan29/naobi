# 24 — High-Fidelity Prototype Coverage and QA

**Version:** 1.0  
**Status:** Accepted — specification-as-code complete; browser validation obligated  
**Gate:** 2.5 — High-Fidelity System

## 1. Purpose

This register prevents visual polish from being mistaken for coverage. A row is
complete only when its required states, responsive behavior, accessibility
annotations, and content fixture are verified.

## 2. Coverage matrix

| Surface | Desktop | Mobile | Required states | Fixture | Current evidence |
|---|---|---|---|---|---|
| Central OS | Required | Required | ready, first-session boot, reduced motion | Unassigned flagship + recent operations | ASCII: Document 27 §§1–2; browser validation: Phase 3 |
| Signal Lab overview | Required | Representative stack | default, Coming Soon, empty | Research/Experiment fixtures | ASCII: Document 27 §3; browser validation: Phase 3 |
| Operations Ledger overview | Required | Representative stack | default, sanitized/closed artifact | Engineering/Project fixtures | ASCII: Document 27 §4; browser validation: Phase 3 |
| Research depth | Required | Required | Brief, Method, Evidence, Artifact | Research fixture | ASCII: Document 27 §5; browser validation: Phase 3 |
| Engineering depth | Required | Covered by shared pattern plus one case screen | Brief, Method, Evidence, Artifact | Documents 27–29; browser validation: Phase 3 |
| Command/Search | Required | Required | idle, results, no results, command error, Coming Soon result | Global fixture index | ASCII: Document 27 §6; browser validation: Phase 3 |
| System Map | Network + directory | Directory first | current, available, Coming Soon, unavailable | Route fixture | ASCII: Document 27 §7; browser validation: Phase 3 |
| Direct-link shell | Required | Required | default, reading mode, reduced motion | Research or essay fixture | ASCII: Document 27 §8; browser validation: Phase 3 |
| Collaboration Center | Required | Required | empty, invalid, submitting, submitted | Synthetic project brief | ASCII: Document 27 §9; browser validation: Phase 3 |
| System states | Component board | Component board | empty, error, Coming Soon, unavailable, closed artifact, reduced motion | Structure-only labels | Documents 27–28; browser validation: Phase 3 |

No row may use invented research results, estimate values, client names,
flagship claims, or fabricated telemetry.

## 3. Visual evidence model

Documents 26–30 and `artifacts/design-tokens.json` are the normative source.
Figma is retained as supporting foundations evidence and may contain three
Starter-compatible pages if a targeted study later warrants them:

1. `Foundations` — identity, token, type, spacing, geometry, motion notes;
2. `Components & States` — reusable components, signal variants, and system
   states; and
3. `Flows & Review` — desktop/mobile frames, prototype links, annotations, and
   review status.

Within each page, Sections provide the grouping that an unrestricted plan
would otherwise express as separate pages.

## 4. Review sequence

Reviews occur in this blocking order:

1. information hierarchy;
2. keyboard operation and focus;
3. responsive behavior;
4. interaction, error, and static fallback;
5. visual identity and environment differentiation;
6. motion and reduced-motion equivalence; and
7. final polish.

A later stage cannot compensate for failure in an earlier stage.

## 5. QA cases

| ID | Check | Pass condition |
|---|---|---|
| HF-01 | Two-gateway comprehension | Both professional worlds are identified within the root without interaction |
| HF-02 | Non-generic identity | Chassis, instruments, evidence states, and spatial logic—not decorative genre cues—create the identity |
| HF-03 | Environment distinction | Signal Lab and Operations Ledger differ through instruments and information rhythm |
| HF-04 | Signal parity | Phosphor, Amber, and Ice preserve contrast, focus, and semantics |
| HF-05 | Search equivalence | Visible navigation and Command/Search reach the same destinations |
| HF-06 | Depth integrity | Four depth states preserve one canonical document and claim set |
| HF-07 | Direct entry | Shared URLs are complete without boot or Central OS entry |
| HF-08 | Mobile completeness | Gateways, recent work, search, signal, depth, and Collaboration remain reachable |
| HF-09 | State honesty | Empty, Coming Soon, unavailable, error, and closed artifact are explicit |
| HF-10 | Reduced motion | All essential changes work without spatial choreography |
| HF-11 | Content integrity | Synthetic fixtures contain no invented findings, cost results, or flagship |
| HF-12 | Density control | Interface is information-rich without clipped text or equal-card repetition |

## 6. Gate 2.5 QA result

### Passed

- token architecture: 5 collections, 53 variables;
- variable syntax and scope audit: pass;
- semantic aliases: 9 resolved, 0 broken;
- typography: 7 styles with approved font families;
- prohibited large-shadow system: no effect styles created;
- Figma file creation and authenticated write access; and
- Starter-compatible signal grouping decision.
- normative visual language and rejection tests in Document 26;
- twelve-surface desktop/mobile ASCII coverage in Document 27;
- reusable component anatomy and state sheets in Document 28;
- responsive transformation maps in Document 29;
- interaction, motion, focus, and fallback storyboards in Document 30;
- machine-readable design-token parse and count checks; and
- specification coverage, traceability, identity, and content-integrity QC.

### Carried into Phase 3 as blocking browser evidence

- rendered desktop and mobile captures;
- interactive browser flow evidence;
- visual contrast and focus measurements; and
- Product Owner visual walkthrough.

These are implementation-rendering checks that cannot be truthfully completed
in Markdown. They must be produced from the first browser vertical slice before
feature expansion; they are not waived or delegated to Figma.

## 7. Gate decision

Gate 2.5 is closed through ADR-0008 using the specification-as-code route.
Documents 21–30 and `artifacts/design-tokens.json` are normative. The Phase 3
browser evidence obligation is launch-blocking and must satisfy HF-01 through
HF-12 before feature expansion.
