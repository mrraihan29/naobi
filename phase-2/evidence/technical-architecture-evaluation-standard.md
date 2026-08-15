# Technical Architecture Evaluation Standard — Gate 2.6

**Version:** 1.0  
**Status:** Mandatory evaluation protocol  
**Requested by:** Raihan  
**Intended reader level:** Software engineer

## Purpose

Gate 2.6 must produce a transparent, technically complete architecture decision
without assuming that the Product Owner is a beginner. Recommendations must be
precise enough to challenge, reproduce, and implement. Explanations must remain
clear, but may use professional software-engineering terminology where it is
the most accurate language.

The target is **minimum sufficient architecture**: the least complex system
that fully satisfies the approved product, quality, security, privacy,
publishing, and operational requirements with a credible growth path.

## Known deployment context

Raihan has access to a Hostinger KVM 4 VPS with Coolify. This is an available
deployment baseline, not an automatic architecture decision. Gate 2.6 must
verify current capacity, runtime support, storage, backup, networking, and
operational constraints before relying on it.

## Required evaluation sections

1. problem and workload definition;
2. functional and non-functional constraints;
3. current version-verified candidate stacks;
4. comparison matrix with weighted and veto criteria;
5. system-context and container diagrams;
6. frontend rendering and routing strategy;
7. content source, schema, validation, and publishing pipeline;
8. search architecture and indexing lifecycle;
9. interactive research/simulation execution model;
10. collaboration form and delivery path;
11. privacy and analytics data flows;
12. trust boundaries, threat model, secrets, and dependency risk;
13. build, test, preview, deploy, rollback, and promotion workflow;
14. observability, alerting, logs, backup, and disaster recovery;
15. performance budgets and caching strategy;
16. SEO, accessibility, and internationalization implications;
17. local developer experience and one-author maintenance workflow;
18. infrastructure and third-party cost model;
19. failure modes, graceful degradation, and external-service outages;
20. migration, portability, vendor lock-in, and exit strategy;
21. rejected alternatives with explicit reasons; and
22. ADRs for every costly-to-reverse selection.

## Evidence standard

- Verify current versions and material capabilities against primary/official
  documentation at decision time.
- Record research date, source URL, version, license, maintenance status, and
  relevant security or deprecation information.
- Separate verified fact, benchmark result, inference, assumption, and design
  preference.
- Use a proof of concept or focused benchmark for disputed high-impact claims.
- Do not select a technology because it is fashionable or familiar without
  connecting it to a requirement.
- Do not reject a simple solution without demonstrating the requirement it
  fails.

## Anti-overengineering gate

A new runtime service, database, queue, cache, search engine, CMS, analytics
platform, or cloud dependency may be added only when the architecture record
states:

1. the approved requirement it satisfies;
2. why the existing stack cannot satisfy that requirement adequately;
3. the failure mode it introduces;
4. who operates, updates, backs up, and monitors it;
5. its resource and monetary cost;
6. its local-development and deployment impact; and
7. how it can be removed or replaced.

If those answers are weak, the dependency is rejected.

## Required recommendation format

The final recommendation must include:

- one primary architecture;
- at least two credible alternatives when they exist;
- decision drivers and non-negotiable constraints;
- advantages and disadvantages stated symmetrically;
- a layer-by-layer stack table;
- diagrams and request/data-flow narratives;
- explicit implementation and operations consequences;
- unresolved risks and validation work;
- why the recommendation is sufficient without excess complexity; and
- Product Owner approval or bounded exception.

No framework, platform, database, CMS, hosting topology, or external service is
approved by this standard itself. Those decisions remain open until Gate 2.6.
