# 16 — Requirements Traceability Matrix

**Document status:** Draft v0.1

## Source tags

| Tag | Source |
|---|---|
| PO-V | Product Owner vision and identity interview |
| PO-A | Product Owner audience and value interview |
| PO-C | Product Owner content and evidence interview |
| PO-X | Product Owner experience and functionality interview |
| PO-Q | Product Owner constraints and quality interview |
| PO-P | Product Owner prioritization and validation interview |
| CTX | Earlier project conversation and concept history |
| BENCH | Interactive-publication and OS-portfolio benchmark |
| W3C | W3C accessibility and internationalization guidance |
| GSC | Google Search Central guidance |
| CWV | Core Web Vitals guidance |
| OWASP | OWASP security guidance |
| RQR | Rei Quantitative Research Protocol |
| SPDX | SPDX licensing guidance |

## Goal-to-requirement traceability

| Goals / needs | Requirements | Acceptance evidence | Source |
|---|---|---|---|
| G-001, UN-001 | FR-001–006 | AC-001–003 | PO-V, PO-X |
| G-002, UN-002–003 | FR-002–006, FR-058–060 | AC-002, AC-006, AC-036 | PO-V, PO-X |
| G-003, UN-004–005 | FR-021–030 | AC-011–017 | PO-V, PO-A, RQR |
| G-004, UN-006–007 | FR-031–036 | AC-018–023 | PO-C, BENCH, RQR |
| G-005, UN-005, UN-009–010 | FR-022–027, FR-034–036 | AC-012, AC-015, AC-018, AC-021–023 | PO-A, RQR |
| G-006, JTBD-008 | FR-021, FR-029, FR-042 | AC-011, AC-050–051 | PO-V, PO-C |
| G-007, UN-014 | FR-044–050 | AC-027–031 | PO-A, PO-X |
| G-008, UN-011 | FR-025–026, FR-054–055 | AC-024–026, AC-049 | PO-C, PO-P, SPDX |
| G-009, UN-018 | FR-037–043, NFR-MAIN-001–006 | AC-051 | PO-C, PO-Q |
| G-010 | All Must requirements, NFR-TEST-001–004 | AC-050–054 | PO-P |

## Functional requirement coverage

| Requirement group | User need / rationale | Acceptance criteria |
|---|---|---|
| FR-001–006 Central OS | Identity, two worlds, shared access | AC-001–003, AC-006 |
| FR-007–009 Boot | Memorable but non-blocking entry | AC-004–005 |
| FR-010–013 Terminal | OS must be functional and accessible | AC-007–009, AC-033 |
| FR-014–020 Discovery | Findable, shareable, multi-route content | AC-006, AC-009–010, AC-044–045 |
| FR-021–030 Content | Taxonomy, depth, reading, evidence, revision | AC-011–017 |
| FR-031–036 Interaction | Interactive flagship and honest evidence | AC-018–023, AC-038 |
| FR-037–043 Authoring | Single-author maintainability and governance | AC-011, AC-051 |
| FR-044–050 Collaboration | Multiple project and open-source routes | AC-027–031, AC-041 |
| FR-051–057 Language/license/privacy | English-first, future localization, rights clarity, no profiles | AC-046–049 |
| FR-058–060 Responsive | Desktop-first with functional mobile | AC-036–038 |

## Non-functional requirement coverage

| Requirement group | Source/rationale | Acceptance criteria |
|---|---|---|
| NFR-A11Y-001–008 | W3C; inclusive non-gimmick interaction | AC-032–036 |
| NFR-PERF-001–007 | CWV; visual ambition must not block content | AC-037–038 |
| NFR-REL-001–007 | Polished launch and self-hosted operations | AC-039–040, AC-053 |
| NFR-SEC-001–010 | OWASP; public form and external components | AC-041–043 |
| NFR-PRIV-001–006 | PO privacy-first decision | AC-047–048 |
| NFR-MAIN-001–006 | Single author, 16 maintenance hours/week | AC-051 |
| NFR-COMP-001–004 | Browser/mobile reach and portability | AC-020, AC-036–038 |
| NFR-TEST-001–004 | Repeated comprehensive QC | AC-052–054 |

## Critical decision-to-requirement traceability

| Decision | Implemented by |
|---|---|
| Dual environments inside one OS | FR-001–006 |
| Functional OS, not a skin | FR-007–020 |
| Professional-first progressive depth | FR-021–036 |
| All five signature capabilities at launch | FR-007–013, FR-024, FR-031 |
| Desktop-first, simpler mobile | FR-058–060 |
| English first | FR-051–053 |
| Privacy first | FR-056–057, NFR-PRIV-* |
| Mixed open and closed artifacts | FR-054–055 |
| No comments or accounts | FR-049, FR-057 |
| Polished release, no public beta | AC-050–054 |
| Internal-only validation | NFR-TEST-* plus accepted RSK-005 |
| Flagship created after platform foundation | Release Slices 2–3 and AC-050 |

## Orphan review

- All functional requirement ranges FR-001 through FR-060 are covered.
- All non-functional requirement groups have acceptance evidence.
- All product goals G-001 through G-010 map to requirements.
- Deferred decisions map to later design/content/launch gates and are not
  silently treated as approved.

