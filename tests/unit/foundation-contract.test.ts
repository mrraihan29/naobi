import { readFile } from 'node:fs/promises';
import { resolve } from 'node:path';

import { describe, expect, it } from 'vitest';

interface PackageManifest {
  private?: boolean;
  packageManager?: string;
  engines?: {
    node?: string;
    pnpm?: string;
  };
}

const repositoryRoot = resolve(import.meta.dirname, '..', '..');

async function readText(relativePath: string): Promise<string> {
  return readFile(resolve(repositoryRoot, relativePath), 'utf8');
}

describe('deterministic foundation contract', () => {
  it('keeps runtime and package-manager pins synchronized', async () => {
    const manifest = JSON.parse(await readText('package.json')) as PackageManifest;
    const nodeVersion = (await readText('.node-version')).trim();
    const nvmVersion = (await readText('.nvmrc')).trim();

    expect(manifest.private).toBe(true);
    expect(manifest.engines?.node).toBe(`=${nodeVersion}`);
    expect(nvmVersion).toBe(nodeVersion);
    expect(manifest.packageManager).toBe('pnpm@11.22.0');
    expect(manifest.engines?.pnpm).toBe('=11.22.0');
  });

  it('does not place real secrets in the environment template', async () => {
    const environmentTemplate = await readText('.env.example');
    const assignments = environmentTemplate
      .split(/\r?\n/u)
      .filter((line) => line.length > 0 && !line.startsWith('#'));

    expect(assignments).toEqual([
      'ASTRO_TELEMETRY_DISABLED=1',
      'COLLABORATION_RECIPIENT=',
      'RESEND_API_KEY=',
    ]);
  });
});
