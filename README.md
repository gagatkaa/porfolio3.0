# Agata Tomaszewska — Portfolio

A desktop-inspired portfolio built with Astro. Case studies live in a content
collection, the homepage is a faux terminal desktop, and the site is deployed as
a static build to GitHub Pages.

**Live:** https://gagatkaa.github.io/porfolio3.0/

## Stack

- [Astro](https://docs.astro.build) (static output)
- [@astrojs/mdx](https://docs.astro.build/en/guides/integrations-guide/mdx/) for case studies
- [GSAP](https://gsap.com) for animations
- Vanilla JS in `.astro` scripts (no UI framework)

## Commands

All commands are run from the project root:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts the dev server at `localhost:4321`        |
| `npm run build`           | Builds the production site to `./dist/`          |
| `npm run preview`         | Previews the build locally before deploying      |
| `npm run astro ...`       | Runs CLI commands like `astro check`             |

Background dev server workflow:

```sh
astro dev --background
astro dev status
astro dev logs
astro dev stop
```

## Project structure

```text
/
├── .github/workflows/deploy.yml   # GitHub Pages deployment
├── public/                        # static assets served as-is
├── src/
│   ├── assets/projects/           # project images (optimized at build)
│   ├── components/                # UI components
│   ├── content/projects/          # case studies (.mdx)
│   ├── content.config.ts          # content collection schema
│   ├── data/                      # social links, extras, icons
│   ├── layouts/BaseLayout.astro
│   ├── pages/
│   │   ├── index.astro            # homepage
│   │   └── projects/[slug].astro  # case-study detail pages
│   └── utils/url.ts               # base-aware link helper
└── astro.config.mjs               # site + base config
```

## Adding a project

Create `src/content/projects/<slug>.mdx`. Frontmatter fields are validated in
`src/content.config.ts`:

```yaml
---
title: Project name
category: design-motion        # 'design-motion' | 'dev-web'
shortDescription: One-line summary
role: Your role
year: 2025
tools: [Figma, Blender]
coverImage: '../../assets/projects/<slug>/cover.png'
detailHero: '../../assets/projects/<slug>/hero.png'   # optional
galleryImages:                                        # optional
  - '../../assets/projects/<slug>/one.png'
externalLink: https://example.com                     # optional
externalLinkMobile: https://example.com/mobile        # optional
---
```

Image paths are relative to the MDX file. In the body, import images and render
them with Astro's `<Image />` component for optimization.

## Deployment (GitHub Pages)

Deployment is automated by `.github/workflows/deploy.yml` using the official
[Astro GitHub Action](https://github.com/withastro/action).

1. In the repository, go to **Settings → Pages** and set **Source** to
   **GitHub Actions**.
2. Push to the `master` branch (or run the workflow manually from the **Actions**
   tab via `workflow_dispatch`).
3. The workflow builds the site and publishes it to
   `https://gagatkaa.github.io/porfolio3.0/`.

The site is served from a repository subpath, so `astro.config.mjs` sets:

```js
site: 'https://gagatkaa.github.io',
base: '/porfolio3.0',
```

All internal links are built with `withBase()` from `src/utils/url.ts` so they
resolve correctly under the `/porfolio3.0/` prefix. If you switch to a custom
domain, update `site` and remove `base`.

## Want to learn more?

Check the [Astro documentation](https://docs.astro.build).
