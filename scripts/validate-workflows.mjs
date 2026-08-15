import { readdir, readFile } from 'node:fs/promises';
import { extname, join, relative, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { validateWorkflowPolicy } from './lib/workflow-policy.mjs';

const repositoryRoot = resolve(fileURLToPath(new URL('..', import.meta.url)));
const workflowDirectory = join(repositoryRoot, '.github', 'workflows');

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
  failures.push(...validateWorkflowPolicy(workflow, workflowPath));
}

if (failures.length > 0) {
  throw new Error(`Workflow policy validation failed:\n- ${failures.join('\n- ')}`);
}

process.stdout.write(
  `Workflow policy validation passed for ${workflowFiles.length} workflow(s).\n`,
);
