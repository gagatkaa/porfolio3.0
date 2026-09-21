import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const projects = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: 'src/content/projects' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      category: z.enum(['design-motion', 'dev-web']),
      shortDescription: z.string(),
      role: z.string(),
      year: z.number(),
      tools: z.array(z.string()),
      coverImage: image().optional(),
      detailHero: image().optional(),
      heroVideo: z.string().optional(),
      galleryImages: z.array(image()).optional(),
      externalLink: z.string().url().optional(),
    }),
});

export const collections = { projects };
