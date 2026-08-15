# ADR-0013 — Adopt NAOBI Masterbrand and `naobi.dev` Domain Direction

**Status:** Accepted  
**Date:** 2026-08-15  
**Decision owner:** Raihan  
**Supersedes:** ADR-0002  
**Related documents:** 01, 39, 40, 41

## Context

ADR-0002 intentionally deferred the public nickname, masterbrand, attribution,
and domain until the experience, visual system, publishing contracts,
high-fidelity specification, and architecture were coherent. Gates 2.1–2.6 are
now locked. Gate 2.7 generated historically rooted callsigns, then focused on
Japanese mythology and ancient concepts at the Product Owner's direction.

Raihan selected **NAOBI**. Kokugakuin University's Encyclopedia of Shinto
describes `naobi` as correcting what is abnormal, bad, or distorted and
restoring it to its normal or original condition. This meaning aligns with
research iteration, evidence inspection, engineering reconciliation, and
quality control.

Current-use screening found that the string is not globally unique. The nearest
adjacent use is a small digital-transformation consultancy using `naobi.co`.
`naobi.com` is registered. Dated registry checks returned no record for several
alternatives, including `naobi.dev`, but registrar availability is not
guaranteed until purchase.

## Decision drivers

- authentic personal attachment and callsign usability;
- semantic fit with evidence, correction, and defensible technical work;
- equal ability to hold AI Research, Engineering/Mining, and personal writing;
- professional use in papers, CVs, GitHub, proposals, email, and speech;
- permanent, unambiguous human attribution to Raihan;
- respectful use of a living cultural and religious concept;
- a concise canonical domain with future namespace flexibility; and
- differentiation from adjacent current uses without pretending exclusivity.

## Considered options

### Keep `Raihan's OS`

Rejected as a public masterbrand. It describes the interface metaphor but is
generic, person-name dependent, and less durable as a publishing identity. It
remains a historical project codename.

### LIMNAR, NEMEQ, and SEMRION

Rejected by Product Owner preference after the first historically rooted
shortlist. They scored well but did not provide the desired Japanese cultural
and mythic connection.

### OMOIKANE, FUDOKI, MUSUHI, and KUEBIKO

Rejected as exact masterbrands despite strong meanings because current AI,
technology, research, or company uses created materially closer collisions.

### NAOBI with `naobi.id` or `naobi.me`

Viable alternatives. `naobi.id` provides Indonesian provenance and `naobi.me`
signals a personal identity, but the Product Owner preferred the technical and
subdomain-ready character of `.dev`.

### NAOBI with `naobi.dev` — selected

Provides an exact, concise domain direction that supports the current technical
identity and future independently deployable branded surfaces.

## Decision

Adopt:

```text
Masterbrand:       NAOBI
Pronunciation:     na-o-bi
Attribution:       NAOBI by Raihan [professional full-name form]
Interface label:   NAOBI OS
Canonical domain:  naobi.dev
```

The canonical product is one apex site using path-based environments. A
subdomain may be introduced only for a genuine deployment, security, ownership,
or operational boundary. `research.naobi.dev` and `engineering.naobi.dev` are
possibilities, not approved launch architecture.

Raihan remains the human author, rights holder, collaboration contact, and
structured-data Person. NAOBI must not imply a company, team, laboratory,
religious institution, or credential.

Domain acquisition is not performed by this ADR. Raihan must confirm registrar
availability, first-year and renewal pricing, transfer policy, privacy, DNSSEC,
and ownership controls before purchase.

## Consequences

### Positive

- one memorable identity spans research, engineering, and personal writing;
- the name encodes correction and restoration without depending on AI fashion;
- pronunciation is direct in Indonesian and English;
- `.dev` signals technical credibility and provides a coherent DNS namespace;
- the OS metaphor becomes a product descriptor rather than the only brand; and
- permanent attribution preserves trust, discoverability, and accountability.

### Negative

- the name and concept require a short explanation for new visitors;
- adjacent current uses mean the brand cannot claim global uniqueness;
- `.dev` may make non-technical writing appear secondary unless editorial
  architecture visibly protects Field Notes;
- `.dev` is HSTS-preloaded, so every surface requires valid HTTPS from first
  use; and
- future subdomains can fragment navigation, analytics, CSP, cookies, SEO, and
  operations if created without a real boundary.

## Risks and controls

| Risk | Control |
|---|---|
| Confusion with `naobi.co` or other uses | consistently use `NAOBI by Raihan`, distinct visual/verbal identity, full Person metadata, repeat launch screen |
| Cultural use becomes decorative or appropriative | explain inspiration accurately; no ornamental kanji, kami, shrine object, or institutional claim |
| `.dev` domain unavailable or premium at purchase | recheck before purchase; return to Product Owner with `naobi.id` and `naobi.me` as accepted alternatives, do not silently substitute |
| Subdomain sprawl | apex-first rule; require an ADR or bounded architecture note for each independently deployed public subdomain |
| Authorship becomes ambiguous | cite Raihan as author; NAOBI remains publisher/masterbrand |
| Future commercial use exceeds this screen | obtain jurisdiction-specific trademark advice before company formation, merchandise, or filing |

## Reversibility

Moderate before domain acquisition and public launch. High cost after search
indexing, citations, email use, public handles, or branded artifacts accumulate.
The architecture remains portable because canonical origins and brand strings
are configuration, not content identifiers.

## Implementation obligations

- integrate NAOBI into metadata, structured data, wordmark, browser titles,
  email signatures, and collaboration copy during Phase 3;
- preserve Raihan as the canonical human author;
- configure apex canonicalization, HTTPS, HSTS-safe staging, DNSSEC where
  supported, and renewal alerts;
- add domain ownership and recovery details to the private operations runbook;
- validate social-preview, citation, search-result, proposal, and mobile
  wordmark contexts; and
- repeat availability, collision, provider, and policy checks before launch.

## Acceptance record

Accepted by Raihan on 2026-08-15 through explicit selection of NAOBI followed by
explicit selection of `naobi.dev`. No domain purchase was authorized or
performed.
