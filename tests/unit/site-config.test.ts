import { describe, expect, it } from 'vitest';

import { absoluteUrl, site } from '../../src/config/site';
import { designTokens, evidenceDepthStates, signalProfiles } from '../../src/config/design-tokens';

describe('public-site configuration', () => {
  it('resolves canonical paths against the locked NAOBI domain', () => {
    expect(absoluteUrl('/coming-soon/hermes-affective-core/').toString()).toBe(
      'https://naobi.dev/coming-soon/hermes-affective-core/',
    );
    expect(site.canonicalLanguage).toBe('en');
  });

  it('rejects protocol-relative canonical paths', () => {
    expect(() => absoluteUrl('//untrusted.example/' as `/${string}`)).toThrow(/site-relative/);
  });
});

describe('accepted design-token boundary', () => {
  it('exposes the accepted signal profiles and evidence states through one module', () => {
    expect(Object.keys(signalProfiles)).toEqual(['phosphor.active', 'amber.active', 'ice.active']);
    expect(evidenceDepthStates).toEqual(['Brief', 'Method', 'Evidence', 'Artifact']);
    expect(designTokens.metadata.status).toBe('accepted-gate-2.5');
  });
});
