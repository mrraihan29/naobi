# 17 — Decision Log and Rationale

**Document status:** Draft v0.1  
**Decision authority:** Raihan

| ID | Decision | Status | Rationale / consequence |
|---|---|---|---|
| DEC-001 | Build a personal research and engineering OS, not a generic portfolio. | Accepted | The product must embody Raihan's identity and host substantial research/blog content. |
| DEC-002 | Use one Central OS with two primary gateways. | Accepted | Visitors first meet Raihan, then choose AI Research or Engineering. |
| DEC-003 | Keep both worlds in one persistent shell. | Accepted on product recommendation | Allows easy switching and preserves one identity while environments remain distinct. |
| DEC-004 | Prioritize professionals site-wide. | Accepted | AI researchers and cost/engineering professionals anchor content rigor. |
| DEC-005 | Use progressive disclosure from simple summary to deep technical evidence. | Accepted | Serves professionals, general readers, students, and clients without separate duplicate articles. |
| DEC-006 | Canonical language is professional English. | Accepted | Supports international professional reach; translations follow later. |
| DEC-007 | Blog/Journal is shared across environments and accepts broad personal topics. | Accepted | Raihan may write about AI, engineering, philosophy, failure, and other interests. |
| DEC-008 | Publish completed work; use controlled Coming Soon status for unfinished topics. | Accepted | Avoids presenting work in progress as research results. |
| DEC-009 | Distinguish Research, Experiment, Project, Engineering Case Study, Essay, and Note. | Accepted on expert recommendation | Classification depends on question, method, evidence, and objective—not topic prestige. |
| DEC-010 | Client names and proprietary estimator database are confidential. | Accepted | Engineering cases require sanitization and final confidentiality approval. |
| DEC-011 | All suitable technical articles should use meaningful interactivity. | Accepted with tiering | Interaction tiers preserve maintainability and prevent decorative widgets. |
| DEC-012 | Raihan is the sole site author. | Accepted | No multi-author CMS accounts; contributor attribution remains supported. |
| DEC-013 | Provide a near-full browser application experience. | Accepted | Higher development effort is explicitly acceptable. |
| DEC-014 | Mandatory signature capabilities are terminal, boot, environment/theme switching, reading mode, and interactive flagship. | Accepted | All five are launch requirements. |
| DEC-015 | Desktop is the full-priority experience; mobile is simplified but functional. | Accepted | Mobile must preserve discovery, reading, evidence, and collaboration. |
| DEC-016 | Do not remember visitor preferences or reading history across visits. | Accepted | Reduces state, storage, and privacy scope. |
| DEC-017 | Collaboration uses multiple selectable channels. | Accepted | Supports different project and open-source contexts. |
| DEC-018 | No public comments. | Accepted | Discussion routes externally, reducing moderation and security burden. |
| DEC-019 | Use privacy-first analytics. | Accepted | No advertising, fingerprinting, cross-site behavior profiles, or form-content analytics. |
| DEC-020 | All published content is indexable. | Accepted | Draft/private work is not public; every published item receives crawlable URLs and metadata. |
| DEC-021 | Artifacts may be open or closed; open artifacts require attribution according to their selected license. | Accepted; supersedes earlier all-open preference | Requires per-artifact license matrix. |
| DEC-022 | There is no fixed date, but release should occur as soon as quality gates allow. | Accepted | Speed is lowest trade-off priority. |
| DEC-023 | Launch as a polished official release, not a public beta. | Accepted | Requires private staging and repeated comprehensive QC. |
| DEC-024 | External user testing is not required before initial launch. | Accepted risk | Raihan is primary observer; internal tests compensate but cannot remove representation risk. |
| DEC-025 | Existing Hostinger VPS KVM 4 with Coolify is the assumed hosting base. | Accepted constraint | Technical architecture must validate security, backup, monitoring, and suitability. |
| DEC-026 | External services may be used when they improve the product. | Accepted with privacy/security gate | No service is preapproved merely because it is convenient. |
| DEC-027 | Use content-as-code authoring as the baseline recommendation. | Proposed for Phase 2 validation | Fits code, LaTeX, interactivity, versioning, and single-author maintenance. |
| DEC-028 | Retain reduced-motion support despite the initial preference to omit it. | Product recommendation pending final sign-off | W3C identifies potential vestibular harm; design it into the motion system from the start. |
| DEC-029 | Separate private platform completion from public launch. | Accepted resolution of dependency conflict | The platform may finish before the flagship; launch remains blocked until flagship and content are ready. |
| DEC-030 | Quality hierarchy is rigor, visual experience, maintainability, originality, then speed. | Accepted | Governs future scope and design trade-offs. |

## Superseded decisions

- The initial preference for one open-source license across everything was
  superseded by DEC-021. Code, writing, diagrams, data, and closed artifacts
  require explicit independent rights decisions.

## Decision review triggers

Reopen a decision only when:

- new evidence changes the problem;
- a mandatory accessibility, security, privacy, legal, or confidentiality
  requirement conflicts with it;
- technical design demonstrates material infeasibility;
- change control shows a better option under the approved priority hierarchy;
- the Product Owner explicitly requests reconsideration.

