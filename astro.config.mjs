// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';

// https://astro.build/config
export default defineConfig({
  site: 'https://gagatkaa.github.io',
  base: '/porfolio3.0',
  integrations: [mdx()],
});
