import { getCollection, type CollectionEntry } from 'astro:content';

import { sectionForContentType } from '../content/schema';

export type PublicationEntry = CollectionEntry<'publications'>;

export function publicationPath(entry: PublicationEntry): `/${string}` {
  return entry.data.canonicalPath as `/${string}`;
}

export function publicationSection(entry: PublicationEntry): string {
  return sectionForContentType(entry.data.type);
}

export function publicationTitle(entry: PublicationEntry): string {
  return `${entry.data.title} | NAOBI`;
}

export async function getPublications(): Promise<PublicationEntry[]> {
  return (await getCollection('publications')).sort((left, right) => {
    return right.data.updatedAt.getTime() - left.data.updatedAt.getTime();
  });
}
