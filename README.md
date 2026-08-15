# NAOBI

NAOBI is Raihan's evidence-led portfolio and publishing system for AI research,
engineering, and professional project-estimation work. The product is designed
as a precise browser-based operating environment rather than a conventional
portfolio.

## Repository status

This private repository is in **Phase 3 — implementation**. Checkpoint 3.1A
establishes repository governance only; application scaffolding begins in 3.1B.

The accepted decision hierarchy is:

1. [`phase-1/`](phase-1/README.md) — product requirements and scope;
2. [`phase-2/`](phase-2/README.md) — experience, content, architecture, security,
   delivery, and recovery contracts;
3. [`phase-3/`](phase-3/README.md) — controlled implementation checkpoints and
   evidence.

When documents conflict, a later formally accepted decision supersedes an
earlier one only when the supersession is explicit and traceable.

## Delivery model

- `main` is the protected integration and release branch.
- Every checkpoint is developed on a short-lived branch and reviewed through a
  pull request.
- Commits follow Conventional Commits and remain atomic.
- Required verification must pass before merge.
- Releases build one immutable OCI image and promote the same digest from
  staging to production.
- A checkpoint does not unlock its successor until Raihan records the hold
  decision.

See [`CONTRIBUTING.md`](CONTRIBUTING.md) and the
[3.1A governance contract](phase-3/04-checkpoint-3.1a-repository-governance.md).

## Licensing and disclosure

No repository-wide open-source license is granted. The repository and its
unpublished content remain private unless a file or separately published
artifact states a specific license. Research repositories may use their own
explicit licenses after Raihan classifies them for publication.

## Security

Do not report vulnerabilities through public issues. A root security policy is
prepared as an approval-gated change in
[`phase-3/security-policy-preview.md`](phase-3/security-policy-preview.md).
