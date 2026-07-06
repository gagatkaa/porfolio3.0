import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const projects = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: 'src/content/projects' }),
  schema: z.object({
    title: z.string(),
    shortDescription: z.string(),
    role: z.string(),
    year: z.number(),
    tools: z.array(z.string()),
    coverImage: z.string().optional(),
    galleryImages: z.array(z.string()).optional(),
    externalLink: z.string().url().optional(),
  }),
});

export const collections = { projects };
