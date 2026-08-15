# ADR-0003: Adopt Typed Content Contracts

## Status

Accepted — 2026-08-16

## Context

NAOBI will publish research, experiments, engineering cases, projects, essays,
notes, and deliberately limited Coming Soon records. The portfolio must support
deep technical work while preventing accidental publication of unvalidated,
confidential, or misleading material. Its content must remain maintainable by a
single author through Git and MDX rather than a browser CMS.

## Decision Drivers

- Preserve Phase 2 evidence, rights, and confidentiality contracts.
- Make invalid public metadata fail before a static build.
- Keep canonical paths, page metadata, and content taxonomy consistent.
- Let future interactive and visual layers consume one stable model.
- Avoid fabricating research claims while flagship content is still in progress.

## Considered Options

1. Untyped Markdown frontmatter with conventions only.
2. An external headless CMS and runtime API.
3. Astro content collections backed by MDX and a shared typed schema.

## Decision

Use Astro content collections with MDX and a discriminated, runtime-validated
publication schema. The schema governs common metadata, type-specific required
fields, canonical route construction, rights, artifacts, visibility, and
publication state. A separate cross-record validator governs reciprocal and
acyclic relationships.

The accepted Phase 2 token artifact is imported only through
`src/config/design-tokens.ts`. Visual CSS and the full OS shell remain out of
scope until their dedicated checkpoints.

## Consequences

### Positive

- Content errors fail during type-check/build rather than at publication time.
- Public Coming Soon entries communicate intent without claiming outcomes.
- A future page can render canonical metadata and route information from the
  same typed entry.
- The Phase 2 design system remains a controlled source rather than copied
  constants scattered through UI code.

### Negative

- Each new publication type or relationship rule requires a schema change and
  review.
- MDX authors must supply more metadata than a conventional blog post.
- Relationship integrity needs an explicit collection-level validation step.

## Reversibility

The content is static and data-local. Revert this checkpoint or migrate the
schema with a versioned compatibility adapter; no published database migration
or external service state is involved.

## Related Decisions

- Phase 2 ADR-0006: evidence-led publishing contracts.
- Phase 2 ADR-0009: content-first Astro hybrid architecture.
- Phase 3 ADR-0002: deterministic Astro toolchain.
