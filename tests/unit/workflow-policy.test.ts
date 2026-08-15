import { describe, expect, it } from 'vitest';
import { validateWorkflowPolicy } from '../../scripts/lib/workflow-policy.mjs';

const sha = 'a'.repeat(40);
const digest = 'b'.repeat(64);

function workflow(overrides: string) {
  return `
name: Policy fixture
on: pull_request
permissions:
  contents: read
jobs:
  verify:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@${sha}
${overrides}
`;
}

describe('workflow security policy', () => {
  it('accepts read-only permissions and immutable action references', () => {
    expect(validateWorkflowPolicy(workflow(''))).toEqual([]);
    expect(
      validateWorkflowPolicy(
        workflow(`      - uses: docker://registry.example/tool@sha256:${digest}`),
      ),
    ).toEqual([]);
  });

  it('rejects write-enabled top-level and job permissions', () => {
    expect(
      validateWorkflowPolicy(
        workflow('').replace('permissions:\n  contents: read', 'permissions: write-all'),
      ),
    ).toContain(
      'workflow.yml: top-level: permissions must be read-all or an explicit read/none map',
    );

    expect(validateWorkflowPolicy(workflow('    permissions:\n      contents: write'))).toContain(
      'workflow.yml: job verify: permission contents must be read or none',
    );
  });

  it('rejects mutable external and Docker action references', () => {
    expect(validateWorkflowPolicy(workflow('      - uses: actions/setup-node@v7'))).toContain(
      'workflow.yml: job verify step 2 uses: external actions and reusable workflows must use a full commit SHA',
    );
    expect(
      validateWorkflowPolicy(workflow('      - uses: docker://registry.example/tool:latest')),
    ).toContain(
      'workflow.yml: job verify step 2 uses: Docker actions must use an immutable sha256 digest',
    );
  });

  it('rejects pull_request_target and duplicate YAML keys', () => {
    expect(
      validateWorkflowPolicy(workflow('').replace('on: pull_request', 'on: pull_request_target')),
    ).toContain('workflow.yml: pull_request_target is prohibited');
    expect(validateWorkflowPolicy(`${workflow('')}\npermissions: read-all\n`)[0]).toMatch(
      /invalid YAML/u,
    );
  });
});
