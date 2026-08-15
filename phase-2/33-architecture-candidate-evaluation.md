# 33 — Architecture Candidate Evaluation

**Version:** 0.9  
**Status:** Proposed — Product Owner decision required  
**Gate:** 2.6 — Architecture and Verification Design

## 1. Decision statement

Select the minimum sufficient architecture for a private-repository,
content-first professional publication with an application-like OS interface,
two equal knowledge environments, progressive evidence depth, public search,
moderate browser simulations, one author, and one small collaboration endpoint.

## 2. Non-negotiable veto screen

| Veto criterion | Astro static-default/selective on-demand | Next.js Node | Django + frontend islands |
|---|:---:|:---:|:---:|
| Meaningful pre-rendered or server-rendered HTML | Pass | Pass | Pass |
| Stable canonical URLs and crawlable links | Pass | Pass | Pass |
| Git content without production CMS database | Pass | Pass | Pass |
| Core reading survives optional JavaScript failure | Pass | Pass with discipline | Pass with custom integration |
| No visitor identity or cross-site tracking required | Pass | Pass | Pass |
| Separate staging, immutable deployment, rollback | Pass | Pass | Pass |
| Exportable content and portable container | Pass | Pass | Pass |
| Accessibility/security/privacy gates feasible | Pass | Pass | Pass |
| Sustainable within one-author maintenance budget | Pass | Pass with higher runtime complexity | Pass with higher integration burden |

No candidate is eliminated by capability. Selection therefore proceeds to the
weighted comparison. “Pass with discipline” is not a defect claim; it means
the candidate exposes more mechanisms than this product needs and requires
additional conventions to preserve the target simplicity.

## 3. Weighted scoring method

Scores use a 1–5 scale: 1 materially poor, 2 weak, 3 adequate, 4 strong, 5
excellent for this specific product. Weighted points equal `weight × score`.
The maximum is 500. Familiarity is included inside maintainability rather than
allowed to override requirements.

| Criterion | Weight | Astro | Next.js | Django |
|---|---:|---:|---:|---:|
| Content, SEO, and rendering fit | 18 | 5 / 90 | 4 / 72 | 3 / 54 |
| Performance and progressive enhancement | 15 | 5 / 75 | 3 / 45 | 3 / 45 |
| One-author maintainability and authoring | 15 | 5 / 75 | 3 / 45 | 3 / 45 |
| Custom OS interaction capacity | 13 | 4 / 52 | 5 / 65 | 3 / 39 |
| Accessibility and testability | 10 | 4 / 40 | 4 / 40 | 4 / 40 |
| Security/privacy and attack-surface economy | 10 | 5 / 50 | 3 / 30 | 4 / 40 |
| Coolify deployment and portability | 8 | 5 / 40 | 4 / 32 | 4 / 32 |
| Ecosystem and future growth | 7 | 4 / 28 | 5 / 35 | 4 / 28 |
| Direct and operational cost | 4 | 5 / 20 | 4 / 16 | 3 / 12 |
| **Total** | **100** | **470 / 500 (94)** | **380 / 500 (76)** | **335 / 500 (67)** |

## 4. Symmetric candidate analysis

### A. Astro static-default with selective on-demand routes — recommended

**Advantages**

- Pre-rendering is the default rather than a convention imposed on a broad
  application runtime.
- MDX/content collections, generated HTML search, and route-level opt-in to
  server execution align directly with the workload.
- Interactive components can use React without hydrating the global shell.
- Failure and performance isolation are natural: an optional simulation may
  fail without taking down the document.
- A small Node container keeps Coolify deployment portable.

**Disadvantages**

- The team must understand Astro's island boundary in addition to React.
- Highly stateful cross-page application behavior is less natural than in a
  full React application; this product intentionally avoids that state.
- Some advanced widgets require selecting and integrating React-specific
  libraries rather than relying on one framework-wide component model.

### B. Next.js Node — credible alternative

**Advantages**

- Deep React ecosystem and excellent capacity for a highly stateful command
  interface.
- Broad full-stack primitives and a mature self-hosting path.
- Future authenticated or database-backed capabilities could live in the same
  framework.

**Disadvantages**

- The product would inherit server-component, cache, and runtime semantics
  beyond its approved needs.
- It is easier to hydrate or execute more code than the reading experience
  requires, so performance discipline becomes a continuing policy burden.
- Recent framework security advisories increase the value of rapid patching on
  a surface that Astro can avoid for most routes.

**Selection condition:** choose Next.js if Phase 3 proves that the approved OS
shell requires persistent, application-wide state that cannot be cleanly
expressed as Astro islands and URL state.

### C. Django LTS plus frontend islands — credible alternative

**Advantages**

- Raihan's familiarity lowers basic backend learning cost.
- Mature security defaults, templating, routing, and long-term support.
- A future private admin/database workflow would be well served.

**Disadvantages**

- The launch does not need the ORM, admin, user system, or application
  database that make Django distinctive.
- MDX, TypeScript islands, asset bundling, and build-time search would need a
  custom cross-language toolchain.
- Two runtimes and dependency ecosystems increase upgrades, container size,
  local setup, and debugging for no approved user value.

**Selection condition:** choose Django if a browser CMS, authenticated service,
or relational workflow becomes a launch requirement before implementation.

## 5. Other alternatives screened out before full scoring

| Alternative | Reason not advanced | Reconsider when |
|---|---|---|
| Fully static HTML with no server endpoint | Cannot deliver the structured collaboration form with secret-held transactional email and abuse controls. | The form is replaced entirely by `mailto:` or an external hosted form. |
| SvelteKit | Technically credible but adds a component language Raihan does not know without demonstrating a requirement advantage over Astro plus React. | A prototype shows materially better interaction performance or maintainability. |
| Headless CMS | Violates the accepted Git-first/no-CMS launch workflow and adds identity, database, webhook, backup, and migration surfaces. | Multi-author browser editing becomes an approved requirement. |
| Search server/database | Pagefind satisfies the public-only corpus at this scale without runtime state. | Search quality, corpus scale, or private indexing is measured to fail. |
| Separate simulation service | Moderate approved simulations fit browser workers and precomputation. | A named flagship has confidential, heavy, or non-browser computation. |
| Microservices, Redis, or queue | No independent scale, consistency, or asynchronous workload requires them. | Production evidence identifies a specific bottleneck or reliability boundary. |

## 6. Primary recommendation

Adopt Astro 7.2 in its default static output with per-route opt-out for the two
on-demand endpoints, strict TypeScript,
React 19.2 only for interactive islands, and Node 24 LTS for the one server
boundary. Keep all normal content routes pre-rendered. The only launch-time
on-demand routes are a minimal collaboration submission endpoint and a health
endpoint. This recommendation is deliberately future-compatible without making
experimental Astro features, WebAssembly, a database, or distributed services
launch-critical.

## 7. Decision sensitivity and validation

The recommendation remains preferred if traffic increases by two orders of
magnitude because public output is cacheable. Traffic alone does not justify a
framework change. The decision changes only if one of these product facts
changes:

1. authenticated or personalized visitor state becomes required;
2. a browser CMS or multi-author editorial workflow becomes required;
3. server-side research computation becomes a launch-critical flagship;
4. public search must index private or very large non-HTML material; or
5. the Phase 3 vertical slice fails HF-01 through HF-12 due to an intrinsic
   Astro/islands limitation rather than implementation quality.

## 8. Product Owner decision requested

Approve, revise, or reject:

- Astro static-default output plus React islands and selective on-demand routes
  as the primary architecture;
- Next.js and Django as the documented fallback paths; and
- the anti-overengineering exclusions in Section 5.
