/** The single source of truth for public, site-level identity and URLs. */
export const site = {
  author: 'Raihan',
  canonicalLanguage: 'en',
  description: 'Evidence-led AI research and engineering portfolio operating system.',
  name: 'NAOBI',
  url: new URL('https://naobi.dev'),
} as const;

/**
 * Resolves a validated site-relative path without allowing content metadata to
 * turn into an external canonical URL.
 */
export function absoluteUrl(path: `/${string}`): URL {
  if (!path.startsWith('/') || path.startsWith('//')) {
    throw new Error(`Expected a site-relative path, received: ${path}`);
  }

  return new URL(path, site.url);
}
