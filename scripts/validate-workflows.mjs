import { readdir, readFile } from 'node:fs/promises';
import { extname, join, relative, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const repositoryRoot = resolve(fileURLToPath(new URL('..', import.meta.url)));
const workflowDirectory = join(repositoryRoot, '.github', 'workflows');
const immutableReference = /^[a-f0-9]{40}$/u;
const externalAction = /^\s*-?\s*uses:\s*([^@\s]+)@([^\s#]+)/gmu;

const entries = await readdir(workflowDirectory, { withFileTypes: true });
const workflowFiles = entries
  .filter((entry) => entry.isFile() && ['.yaml', '.yml'].includes(extname(entry.name)))
  .map((entry) => join(workflowDirectory, entry.name));

if (workflowFiles.length === 0) {
  throw new Error('At least one GitHub Actions workflow is required.');
}

const failures = [];

for (const workflowFile of workflowFiles) {
  const workflow = await readFile(workflowFile, 'utf8');
  const workflowPath = relative(repositoryRoot, workflowFile).replaceAll('\\', '/');

  if (!/^permissions:/mu.test(workflow)) {
    failures.push(`${workflowPath}: explicit top-level permissions are required`);
  }

  if (/^\s*pull_request_target\s*:/mu.test(workflow)) {
    failures.push(`${workflowPath}: pull_request_target is prohibited`);
  }

  for (const match of workflow.matchAll(externalAction)) {
    const action = match[1];
    const reference = match[2];

    if (action?.startsWith('./') || action?.startsWith('docker://')) {
      continue;
    }

    if (!reference || !immutableReference.test(reference)) {
      failures.push(`${workflowPath}: ${action ?? 'unknown action'} must use a full commit SHA`);
    }
  }
}

if (failures.length > 0) {
  throw new Error(`Workflow policy validation failed:\n- ${failures.join('\n- ')}`);
}

process.stdout.write(
  `Workflow policy validation passed for ${workflowFiles.length} workflow(s).\n`,
);
