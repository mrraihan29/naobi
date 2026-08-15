import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';

import { publicationSchema } from './content/schema';

const publications = defineCollection({
  loader: glob({ base: './src/content/publications', pattern: '**/*.{md,mdx}' }),
  schema: publicationSchema,
});

export const collections = { publications };
