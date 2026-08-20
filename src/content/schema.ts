import { z } from 'astro/zod';

export const contentTypes = [
  'research',
  'experiment',
  'project',
  'engineering-case',
  'essay',
  'note',
  'coming-soon',
] as const;

const slug = z.string().regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/, 'Use a lowercase kebab-case slug.');
const canonicalPath = z
  .string()
  .regex(/^\/(?:[a-z0-9-]+\/)*$/, 'Use a trailing-slash, site-relative canonical path.');
const url = z.url();

const relationship = z.object({
  id: z.string().min(1),
  kind: z.enum(['extends', 'related', 'supersedes']),
});

const artifact = z
  .object({
    kind: z.enum(['code', 'dataset', 'model', 'notebook', 'paper', 'report', 'simulation']),
    label: z.string().min(1),
    access: z.enum(['open', 'restricted', 'unavailable']),
    url: url.optional(),
    rights: z.enum(['all-rights-reserved', 'open-source-attribution']).optional(),
  })
  .superRefine((value, context) => {
    if (value.access === 'open' && (!value.url || value.rights !== 'open-source-attribution')) {
      context.addIssue({
        code: 'custom',
        message: 'Open artifacts require a URL and explicit open-source attribution rights.',
      });
    }

    if (value.access === 'restricted' && value.url) {
      context.addIssue({
        code: 'custom',
        message: 'Restricted artifacts must not expose a public URL.',
      });
    }
  });

const common = z.object({
  id: z.string().regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/, 'Use a stable lowercase identifier.'),
  title: z.string().min(8).max(120),
  slug,
  summary: z.string().min(24).max(360),
  domains: z
    .array(z.enum(['ai', 'engineering', 'general']))
    .min(1)
    .max(3),
  topics: z.array(z.string().min(2).max(48)).min(1).max(8),
  status: z.enum(['planned', 'in-progress', 'published', 'archived']),
  language: z.literal('en'),
  author: z.literal('Raihan'),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
  publishedAt: z.coerce.date().optional(),
  version: z.string().regex(/^\d+\.\d+\.\d+$/, 'Use semantic versioning.'),
  rights: z.enum(['all-rights-reserved', 'open-source-attribution']),
  visibility: z.enum(['public', 'unlisted']),
  canonicalPath,
  confidentialityReview: z.enum(['not-applicable', 'cleared', 'redacted']),
  relationships: z.array(relationship).default([]),
  artifacts: z.array(artifact).default([]),
});

const research = common.extend({
  type: z.literal('research'),
  question: z.string().min(16),
  methodology: z.string().min(16),
  evidenceStatus: z.enum(['draft', 'reviewed', 'reproducible']),
});

const experiment = common.extend({
  type: z.literal('experiment'),
  objective: z.string().min(16),
  protocol: z.string().min(16),
});

const project = common.extend({
  type: z.literal('project'),
  role: z.string().min(3),
  scope: z.string().min(16),
});

const engineeringCase = common.extend({
  type: z.literal('engineering-case'),
  discipline: z.string().min(3),
  scope: z.string().min(16),
  sanitization: z.enum(['not-applicable', 'cleared', 'redacted']),
});

const essay = common.extend({
  type: z.literal('essay'),
  thesis: z.string().min(16),
});

const note = common.extend({
  type: z.literal('note'),
  subject: z.string().min(3),
});

const comingSoon = common.extend({
  type: z.literal('coming-soon'),
  intendedType: z.enum(['research', 'experiment', 'project', 'engineering-case', 'essay', 'note']),
  availability: z.string().min(16),
});

export const publicationSchema = z
  .discriminatedUnion('type', [
    research,
    experiment,
    project,
    engineeringCase,
    essay,
    note,
    comingSoon,
  ])
  .superRefine((value, context) => {
    const expectedPath = `/${sectionForContentType(value.type)}/${value.slug}/`;

    if (value.canonicalPath !== expectedPath) {
      context.addIssue({
        code: 'custom',
        path: ['canonicalPath'],
        message: `Canonical path must be ${expectedPath}`,
      });
    }

    if (value.status === 'published' && !value.publishedAt) {
      context.addIssue({
        code: 'custom',
        path: ['publishedAt'],
        message: 'Published content requires publishedAt.',
      });
    }

    if (value.status !== 'published' && value.publishedAt) {
      context.addIssue({
        code: 'custom',
        path: ['publishedAt'],
        message: 'Unpublished content cannot declare publishedAt.',
      });
    }

    if (
      value.type !== 'coming-soon' &&
      value.visibility === 'public' &&
      value.status !== 'published'
    ) {
      context.addIssue({
        code: 'custom',
        path: ['visibility'],
        message: 'Only published records may be public, except a Coming Soon record.',
      });
    }

    if (value.type === 'coming-soon' && value.artifacts.length > 0) {
      context.addIssue({
        code: 'custom',
        path: ['artifacts'],
        message: 'Coming Soon records cannot promise artifacts.',
      });
    }

    if (value.updatedAt < value.createdAt) {
      context.addIssue({
        code: 'custom',
        path: ['updatedAt'],
        message: 'updatedAt cannot precede createdAt.',
      });
    }
  });

export type Publication = z.infer<typeof publicationSchema>;

export function sectionForContentType(type: Publication['type']): string {
  return type === 'engineering-case' ? 'engineering' : type;
}
