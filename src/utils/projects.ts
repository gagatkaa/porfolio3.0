import type { CollectionEntry } from 'astro:content';

export function orderProjects(
  projects: CollectionEntry<'projects'>[]
): CollectionEntry<'projects'>[] {
  const devWeb = projects.filter(p => p.data.category === 'dev-web');
  const designMotion = projects.filter(p => p.data.category === 'design-motion');
  return [...devWeb, ...designMotion];
}