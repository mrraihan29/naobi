# NAOBI

NAOBI is Raihan's evidence-led portfolio and publishing system for AI research,
engineering, and professional project-estimation work. The product is designed
as a precise browser-based operating environment rather than a conventional
portfolio.

## Repository status

This private repository is in **Phase 3 — implementation**. Checkpoint 3.1A is
locked. Checkpoint 3.1B establishes the deterministic application foundation;
the product experience remains intentionally out of scope until later pitstops.

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

See [`CONTRIBUTING.md`](CONTRIBUTING.md), the
[3.1A governance contract](phase-3/04-checkpoint-3.1a-repository-governance.md),
and the [3.1B foundation contract](phase-3/05-checkpoint-3.1b-deterministic-application-foundation.md).

## Local development

Required versions are pinned rather than implied:

- Node.js `24.19.0` LTS;
- pnpm `11.22.0`;
- Astro `7.2.2` with React `19.2.8` islands; and
- TypeScript `6.0.3` until the lint ecosystem supports TypeScript 7.

```shell
pnpm install --frozen-lockfile
pnpm verify
pnpm dev
```

Copy `.env.example` only when local server configuration is needed. Never
commit `.env` or real credentials. The root `package.json`, `.node-version`,
`pnpm-workspace.yaml`, and `pnpm-lock.yaml` form the deterministic toolchain
contract.

## Licensing and disclosure

No repository-wide open-source license is granted. The repository and its
unpublished content remain private unless a file or separately published
artifact states a specific license. Research repositories may use their own
explicit licenses after Raihan classifies them for publication.

## Security

Do not report vulnerabilities through public issues. Follow the active
[`SECURITY.md`](SECURITY.md) policy and use its private reporting channel.
