import { describe, expect, it } from 'vitest';

import { validateRelationships } from '../../src/content/relationships';
import { publicationSchema, type Publication } from '../../src/content/schema';

const comingSoon = {
  id: 'hermes-affective-core',
  type: 'coming-soon',
  intendedType: 'research',
  title: 'Hermes Affective Core',
  slug: 'hermes-affective-core',
  summary:
    'A planned research record that will be released only after its evidence is ready for external review.',
  domains: ['ai'],
  topics: ['affective-computing'],
  status: 'planned',
  language: 'en',
  author: 'Raihan',
  createdAt: '2026-08-16',
  updatedAt: '2026-08-16',
  version: '0.1.0',
  rights: 'all-rights-reserved',
  visibility: 'public',
  canonicalPath: '/coming-soon/hermes-affective-core/',
  confidentialityReview: 'not-applicable',
  availability: 'The public record will be released after evidence and reproducibility review.',
};

function parsePublication(input: unknown): Publication {
  return publicationSchema.parse(input);
}

describe('publication content contract', () => {
  it('accepts an evidence-safe Coming Soon record', () => {
    expect(parsePublication(comingSoon).type).toBe('coming-soon');
  });

  it('requires canonical routes to match the content type and slug', () => {
    const invalid = { ...comingSoon, canonicalPath: '/research/hermes-affective-core/' };

    expect(() => parsePublication(invalid)).toThrow(/Canonical path/);
  });

  it('does not permit public unpublished records outside Coming Soon', () => {
    const invalid = {
      ...comingSoon,
      type: 'research',
      canonicalPath: '/research/hermes-affective-core/',
      question: 'How can an affective research system represent state transitions transparently?',
      methodology: 'A documented research protocol will define the future evaluation method.',
      evidenceStatus: 'draft',
    };

    expect(() => parsePublication(invalid)).toThrow(/Only published records/);
  });

  it('requires published records to declare a publication date', () => {
    const invalid = { ...comingSoon, status: 'published' };

    expect(() => parsePublication(invalid)).toThrow(/publishedAt/);
  });

  it('requires explicit attribution rights for open artifacts', () => {
    const invalid = {
      ...comingSoon,
      artifacts: [
        { kind: 'code', label: 'Source', access: 'open', url: 'https://github.com/example/repo' },
      ],
    };

    expect(() => parsePublication(invalid)).toThrow(/Open artifacts/);
  });

  it('rejects promised artifacts from Coming Soon records', () => {
    const invalid = {
      ...comingSoon,
      artifacts: [
        {
          kind: 'code',
          label: 'Future source',
          access: 'unavailable',
        },
      ],
    };

    expect(() => parsePublication(invalid)).toThrow(/Coming Soon records cannot promise artifacts/);
  });
});

describe('cross-record relationship contract', () => {
  it('requires related records to be reciprocal', () => {
    const first = parsePublication({
      ...comingSoon,
      relationships: [{ id: 'mining-estimation-systems', kind: 'related' }],
    });
    const second = parsePublication({
      ...comingSoon,
      id: 'mining-estimation-systems',
      title: 'Mining Estimation Systems',
      slug: 'mining-estimation-systems',
      canonicalPath: '/coming-soon/mining-estimation-systems/',
    });

    expect(validateRelationships([first, second])).toContainEqual(
      expect.objectContaining({
        message: 'Related records must declare a reciprocal relationship.',
      }),
    );
  });

  it('rejects cycles in directional relationships', () => {
    const first = parsePublication({
      ...comingSoon,
      relationships: [{ id: 'mining-estimation-systems', kind: 'extends' }],
    });
    const second = parsePublication({
      ...comingSoon,
      id: 'mining-estimation-systems',
      title: 'Mining Estimation Systems',
      slug: 'mining-estimation-systems',
      canonicalPath: '/coming-soon/mining-estimation-systems/',
      relationships: [{ id: 'hermes-affective-core', kind: 'extends' }],
    });

    expect(validateRelationships([first, second])).toContainEqual(
      expect.objectContaining({ message: 'extends relationships cannot form a cycle.' }),
    );
  });
});
