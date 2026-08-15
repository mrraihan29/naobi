import { readFile } from 'node:fs/promises';
import { resolve } from 'node:path';
import { spawnSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';

const repositoryRoot = resolve(fileURLToPath(new URL('..', import.meta.url)));
const policyPath = resolve(repositoryRoot, 'config', 'license-policy.json');
const packageManagerPath = process.env.npm_execpath;

if (!packageManagerPath) {
  throw new Error('npm_execpath is required to inspect the pnpm production license graph.');
}

const policy = JSON.parse(await readFile(policyPath, 'utf8'));
const allowedLicenses = new Set(policy.allowedLicenses);
const reviewedExceptions = policy.reviewedExceptions.map((exception) => ({
  ...exception,
  packagePattern: new RegExp(exception.packagePattern, 'u'),
}));

const result = spawnSync(
  process.execPath,
  [packageManagerPath, 'licenses', 'list', '--prod', '--json'],
  {
    cwd: repositoryRoot,
    encoding: 'utf8',
    windowsHide: true,
  },
);

if (result.status !== 0) {
  throw new Error(`Unable to inspect production licenses:\n${result.stderr}`);
}

const inventory = JSON.parse(result.stdout);
const failures = [];
let packageCount = 0;

for (const [license, packages] of Object.entries(inventory)) {
  for (const packageEntry of packages) {
    packageCount += 1;

    if (allowedLicenses.has(license)) {
      continue;
    }

    const reviewed = reviewedExceptions.some(
      (exception) =>
        exception.license === license && exception.packagePattern.test(packageEntry.name),
    );

    if (!reviewed) {
      failures.push(`${packageEntry.name}@${packageEntry.versions.join(',')} (${license})`);
    }
  }
}

if (failures.length > 0) {
  throw new Error(`Unreviewed production licenses:\n- ${failures.join('\n- ')}`);
}

process.stdout.write(
  `Production license policy passed for ${packageCount} package entries across ${Object.keys(inventory).length} license expressions.\n`,
);
