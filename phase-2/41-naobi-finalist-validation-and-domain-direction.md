# 41 — NAOBI Finalist Validation and Domain Direction

**Version:** 1.0  
**Status:** Accepted — NAOBI with `naobi.dev` domain direction  
**Gate:** 2.7 — Masterbrand and Phase 2 Lock  
**Product Owner:** Raihan  
**Facilitator:** Rei  
**Decision date:** 2026-08-15  
**Evidence snapshot:** 2026-08-15

## 1. Product Owner decision

Raihan selected **NAOBI** as the public masterbrand and personal callsign after
a Japan-focused second naming exploration.

The controlled form is:

```text
Display name:       NAOBI
Spoken form:        na-o-bi
Address form:       Naobi
Masterbrand line:   NAOBI by Raihan [professional full-name form]
Interface form:     NAOBI OS
Internal codename:  Raihan's OS (retained only in project history)
```

The selection does not authorize a domain purchase, assert trademark
exclusivity, create a company named NAOBI, or remove Raihan's human authorship.

## 2. Cultural and semantic basis

`Naobi` is an attested concept in Shinto vocabulary, also written in forms
including 直毘 and 直備. Kokugakuin University's Encyclopedia of Shinto defines
its central action as correcting something abnormal, bad, or distorted and
restoring it to its normal or original condition. It can also refer to the
wondrous spirit or working through which that correction occurs.

This meaning fits the established product without being retrofitted:

```text
observe the system
→ expose distortion or uncertainty
→ inspect evidence and method
→ correct what cannot withstand inspection
→ restore a defensible state
```

The name therefore connects:

- AI research iteration, evaluation, failure analysis, and correction;
- engineering estimating, reconciliation, auditability, and quality control;
- the Evidence Depth Rail and transparent limitation model;
- precise and direct language rather than decorative futurism; and
- the personal practice of turning failed or incomplete work into new inquiry.

The public identity must describe this as the **inspiration and operating
principle** of the callsign. It must not claim religious authority, represent a
kami visually, use shrine objects as decoration, or imply that the website is a
Shinto institution.

Primary semantic source:

- Kokugakuin University Digital Museum, Encyclopedia of Shinto, Basic Terms —
  Naobi:
  <https://d-museum.kokugakuin.ac.jp/eos/search/?contents_type=113&pageID=4>

## 3. Brand architecture

The accepted architecture to carry into the naming ADR is:

```text
NAOBI                              masterbrand and callsign
by Raihan [professional name]      permanent accountable authorship

NAOBI OS                           browser/interface descriptor
├── Signal Lab                     AI Research environment
├── Operations Ledger              Engineering/Mining environment
└── Field Notes                    shared journal and personal writing
```

Rules:

1. `NAOBI` may appear alone only where Raihan's identity is already explicit in
   the same context.
2. Research papers, case studies, metadata, structured data, and inquiry
   messages use Raihan's professional name as author; NAOBI is the publishing
   identity, not a substitute legal author.
3. The site must not use `Naobi Labs`, `Naobi Research Institute`, `Naobi
   Engineering`, or another organization-signalling suffix while it is a
   one-person platform.
4. The wordmark uses Latin characters. Japanese characters are not used as an
   ornamental pseudo-logo.
5. The name is not abbreviated to `NBI`, and `OS` remains a descriptor rather
   than part of the masterbrand.

## 4. Professional-use tests

| Context | Controlled expression | Result |
|---|---|---|
| Spoken introduction | “I’m Raihan. I publish my research and engineering work through NAOBI.” | Pass |
| Direct address | “You can call me Naobi.” | Pass |
| Research byline | “Raihan [full name] — published through NAOBI” | Pass |
| Engineering proposal | “Selected work and methodology: NAOBI by Raihan [full name]” | Pass |
| GitHub profile | “Raihan — AI research and engineering at NAOBI” | Pass |
| Email signature | “Raihan [full name] / NAOBI” | Pass |
| Browser title | “NAOBI — AI Research and Engineering by Raihan” | Pass |
| Citation | Cite Raihan as author; NAOBI may be the publisher/site title | Pass |

## 5. Current-use and confusing-similarity screen

The name is distinctive but not globally unique.

Observed current uses include:

- `Naobi co`, a small digital-transformation consulting business using
  `naobi.co`; this is the closest service-category collision and creates an
  **amber differentiation risk**;
- a Japanese legal entity named 株式会社NAOBI; the Japanese government record
  observed no listed patents, designs, or trademarks in that profile at the
  evidence date;
- NAOBI as the acronym for the National Alliance of Black Interpreters;
- personal names and a small music-artist identity; and
- an observed Spanish graphical mark associated with jewellery-class goods,
  which is not a direct service-category match but prevents any claim that the
  string is globally unused.

Representative sources:

- Naobi co: <https://www.linkedin.com/company/naobico>
- Japan gBizINFO legal-entity record:
  <https://info.gbiz.go.jp/hojin/ichiran?hojinBango=4020001153007>
- National Alliance of Black Interpreters:
  <https://www.specializedinterpreting.com/resources>
- Spanish graphical-mark aggregation sourced from OEPM publications:
  <https://www.empresia.es/distintivo/m1271131/oepm/m-1271131/>

This screen is not legal clearance. Before commercial expansion, registering a
company under the name, selling branded products, or filing a mark, qualified
trademark advice and jurisdiction-specific searches remain required.

## 6. Differentiation controls

The adjacent consulting collision is acceptable for a personal publishing
identity only if the following controls remain mandatory:

- lead with `NAOBI by Raihan`, not an anonymous corporate `NAOBI`;
- state `Personal research and engineering system` in metadata and About copy;
- use Raihan's full professional identity in structured Person data;
- avoid visual or verbal similarity to `Naobi co`;
- do not imply an incorporated consultancy, agency, or team;
- maintain a consistent canonical domain distinct from `naobi.co`; and
- repeat the collision screen before domain purchase and public launch.

Residual naming risk after these controls is **amber-low**, acceptable for Gate
2.7 as a personal masterbrand but not equivalent to trademark clearance.

## 7. Domain registry screen

Read-only RDAP registry checks were performed on 2026-08-15. Results describe
registry state at that moment, not a purchase guarantee or registrar price.

| Domain | RDAP result | Interpretation |
|---|---|---|
| `naobi.com` | Registered | Do not assume acquisition; no negotiation is in scope. |
| `naobi.dev` | Not found | Strong technical candidate; verify at registrar before purchase. |
| `naobi.io` | Not found | Viable technology candidate; renewal economics require checking. |
| `naobi.me` | Not found | Strong personal-identity candidate. |
| `naobi.id` | Not found | Strong Indonesian-rooted masterbrand candidate. |
| `naobi.systems` | Not found | Semantically aligned but longer and less natural in speech. |
| `naobi.world` | Not found | Experiential but less professionally precise. |
| `naobi.site` | Not found | Generic fallback only. |
| `naobi.research` | Not found | Research-specific and may underrepresent Engineering. |
| `naobios.com` | Resolves | Reject; occupied and incorrectly binds `OS` into the name. |

Registry endpoints used:

- Verisign RDAP for `.com`;
- Google Registry RDAP for `.dev`;
- Identity Digital RDAP for `.io` and `.systems`; and
- RDAP bootstrap routing for the remaining TLDs.

## 8. Domain recommendation

The design recommendation is:

1. **Primary: `naobi.id`** — best balance of exact name, personal provenance,
   professional credibility, and independence from a generic technology
   suffix.
2. **Alternative: `naobi.dev`** — strongest if Raihan wants the public identity
   to signal technical work immediately, but it narrows personal and
   philosophical writing slightly.
3. **Alternative: `naobi.me`** — clearest personal-brand posture, but less
   authoritative for research and engineering artifacts.
4. **Defensive optional registration: `naobi.io`** — useful only if renewal
   price is acceptable; it should redirect rather than create a second site.

No domain should be purchased by Rei. Registrar availability, first-year price,
renewal price, transfer policy, WHOIS/privacy support, and DNSSEC support must be
confirmed by Raihan at purchase time.

## 9. Final weighted assessment

| Criterion | Weight | NAOBI score | Rationale |
|---|---:|---:|---|
| Identity fit and truthfulness | 25 | 25 | Correction and restoration map directly to the operating philosophy. |
| Professional authority and trust | 20 | 17 | Strong in use tests; adjacent consulting use requires attribution. |
| Distinctiveness and memorability | 15 | 12 | Distinctive in context but not globally unique. |
| Holds both domains and future writing | 15 | 15 | Does not trap the identity in AI, Mining, or the OS metaphor. |
| Pronunciation, spelling, and verbal use | 10 | 10 | Three open syllables and direct spelling. |
| Domain, handle, and search viability | 10 | 8 | Exact alternatives appear viable; `.com` and `.co` are unavailable/occupied. |
| Ten-year durability | 5 | 5 | The principle survives technology and aesthetic changes. |
| **Total** | **100** | **92** | **Advance with attribution and domain controls.** |

## 10. Product Owner domain decision

Raihan selected **`naobi.dev`** on 2026-08-15. The decision values an exact,
short technical identity and the option to create brand-consistent subdomains
later.

The decision does not approve a subdomain-based information architecture.
NAOBI launches as one canonical apex site with path-based environments.
Subdomains require a real isolation boundary, such as an independently deployed
research application, private preview surface, or public status service.

Potential namespaces are reservations, not commitments:

```text
naobi.dev                  canonical public site
research.naobi.dev         future independent research application only
engineering.naobi.dev      future independent engineering application only
status.naobi.dev           future status surface only
preview.naobi.dev          protected non-public preview only
```

ADR-0013 accepts this decision. Domain purchase and registrar configuration
remain Product Owner actions and require a fresh availability and renewal-price
check.

## 11. Current status

**Masterbrand:** NAOBI — selected by Product Owner  
**Pronunciation:** `na-o-bi`  
**Human attribution:** NAOBI by Raihan [professional full-name form]  
**Cultural validation:** Pass with respectful-use controls  
**Current-use screen:** Pass with amber-low residual differentiation risk  
**Domain registry screen:** Complete as dated evidence  
**Domain direction:** `naobi.dev` — selected by Product Owner  
**Naming ADR:** ADR-0013 Accepted  
**Gate 2.7:** Naming complete; final Phase 2 cross-check active
