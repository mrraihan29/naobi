# Contributing to NAOBI

NAOBI currently uses a single-owner, checkpoint-gated delivery model. External
contributions are not yet accepted unless Raihan explicitly invites them.

## Before starting

1. Confirm the active checkpoint and its acceptance contract.
2. Start from an up-to-date `main` branch.
3. Create a short-lived branch using one of these prefixes:
   `phase3/`, `feat/`, `fix/`, `docs/`, `chore/`, `security/`, or `hotfix/`.
4. Keep the change inside the approved scope.

## Commits

Use Conventional Commits:

```text
<type>(optional-scope): <imperative summary>
```

Allowed baseline types are `feat`, `fix`, `docs`, `test`, `refactor`, `perf`,
`build`, `ci`, `chore`, `security`, and `revert`.

Each commit must:

- represent one coherent change;
- leave the repository in a valid state;
- exclude secrets and unrelated files;
- include relevant tests or documentation; and
- explain non-obvious intent in the commit body.

## Pull requests

- Open one pull request per checkpoint unless an approved exception is recorded.
- Complete every applicable section of the pull-request template.
- Link the checkpoint contract and evidence.
- Resolve review comments and rerun invalidated checks.
- Merge only after required checks pass and Raihan approves.
- Use squash merge by default and delete the source branch after merge.

Direct pushes and force pushes to `main` are prohibited after the remote
repository is protected. Emergency changes use a `hotfix/` branch, retain full
evidence, and receive retrospective review.

## Verification

The exact required-check set evolves with the scaffold. The target baseline is:

- repository policy and secret checks;
- formatting, linting, and strict type checking;
- unit and integration tests;
- content-schema validation;
- production build;
- accessibility, E2E, visual-regression, and performance checks where affected;
- dependency, source, container, and configuration security checks; and
- release, rollback, and restore verification at their defined cadence.

Skipping a required check requires a documented, time-bounded exception
approved by Raihan. A green workflow is not sufficient when its required steps
did not run.

## Security and privacy

Never place sensitive findings in public issues or pull-request descriptions.
Do not commit client identities, confidential cost databases, access tokens,
private keys, production data, or environment files. Follow the repository
security policy once approved.
