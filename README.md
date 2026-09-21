# Agata Tomaszewska — Portfolio 3.0

An interactive, desktop-style portfolio built with [Astro](https://astro.build). Instead of a classic landing page, the site boots up like an operating system: a loading sequence, a terminal intro, a desktop with shortcuts and a taskbar, and projects that open in draggable windows — with full case-study pages.

> 🔗 **Live demo:** [gagatkaa.github.io/porfolio3.0](https://gagatkaa.github.io/porfolio3.0)

---

## ✨ Features

- **Boot experience** — an animated loading screen that "boots up" into the site.
- **Terminal hero** — a typed welcome message that hands off to the desktop.
- **Desktop metaphor** — desktop shortcuts, a taskbar with a live clock, dark/light theme toggle and a **boot** button that returns to the start (or back home from detail pages).
- **Case-study windows** — clicking a project opens a draggable window with a summary, meta and a link to the full case study.
- **Full detail pages** — every project is also a dedicated route rendered from an MDX case study.
- **Project grid** — projects grouped into two categories: `dev / web` and `design & motion`.
- **Optimized imagery** — all images run through Astro's image pipeline (WebP, responsive, lazy loaded).
- **Click-to-unveil boards** — tall brandboards/full-page previews are collapsed by default and smoothly reveal in place on click.
- **Extras gallery** — 3D renders and drawings linking out to ArtStation.
- **Motion** — [GSAP](https://gsap.com) scroll reveals, stagger animations, a custom mouse-reveal cursor glow and reduced-motion support.
- **No client framework** — plain Astro components with vanilla JS islands; only GSAP as a runtime dependency.

## 🧰 Tech stack

| Layer | Tech |
|---|---|
| Framework | [Astro 7](https://astro.build) |
| Content | MDX + Content Collections (`@astrojs/mdx`) |
| Schema | TypeScript + Zod (`zod` via `astro:content`) |
| Animation | [GSAP](https://gsap.com) |
| Assets | Astro Image (Sharp, WebP) |
| Fonts | JetBrains Mono, Source Code Pro |

## 📁 Project structure

```text
├── astro.config.mjs             # Astro config (MDX integration)
├── src/
│   ├── content.config.ts        # Content-collection schema for projects
│   ├── assets/                  # Source images (processed/optimized by Astro)
│   │   └── projects/<slug>/     # One folder per project
│   ├── components/              # Astro components (.astro)
│   │   ├── HeroTerminal.astro   # Boot + terminal hero
│   │   ├── DesktopIcons.astro   # Desktop shortcuts
│   │   ├── TaskBar.astro        # Taskbar: clock, theme, boot button
│   │   ├── ProjectsDesktop.astro# Desktop + project grid (GSAP)
│   │   ├── ProjectCard.astro    # Grid card
│   │   ├── ProjectWindow.astro  # Draggable case-study window
│   │   ├── ExtrasGallery.astro  # 3D/drawing gallery → ArtStation
│   │   ├── ImageUnveil.astro    # Click-to-unveil tall image
│   │   └── …                    # about, contact, callout, mouse reveal…
│   ├── content/
│   │   └── projects/*.mdx       # Case studies (frontmatter + MDX body)
│   ├── data/                    # extras.ts · skills.ts · social.ts · desktopIcons.ts
│   ├── layouts/
│   │   └── BaseLayout.astro     # Shared HTML shell (theme, fonts, taskbar)
│   ├── pages/
│   │   ├── index.astro          # Homepage (desktop)
│   │   └── projects/[slug].astro# Per-project detail page
│   └── styles/
│       └── global.css           # Design tokens, themes, base styles
└── public/                      # Static assets (documents, favicons)
```

## 🚀 Getting started

Requires **Node.js ≥ 22.12**.

```sh
npm install
```

**Background dev workflow** (per `AGENTS.md`):

```sh
astro dev --background   # start a managed dev server
astro dev status         # check it is running
astro dev logs           # follow server logs
astro dev stop           # stop the server
```

Or the standard foreground commands:

```sh
npm run dev        # Start the dev server at localhost:4321
npm run build      # Build the production site into ./dist/
npm run preview    # Preview the production build locally
```

## ✍️ Adding a project

1. **Add images** — create a folder `src/assets/projects/<slug>/` and drop your assets in (any raster format; Astro optimizes them).
2. **Create the case study** — add `src/content/projects/<slug>.mdx`:

   ```mdx
   ---
   title: 'Project Title'
   category: 'design-motion'          # design-motion | dev-web
   shortDescription: 'One-line card hook.'
   role: 'Designer'
   year: 2026
   tools:
     - 'Figma'
   coverImage: '../../assets/projects/<slug>/cover.png'
   # detailHero: '../../assets/projects/<slug>/hero.png'   # optional, detail-page hero
   # galleryImages:
   #   - '../../assets/projects/<slug>/mockup-01.png'
   # externalLink: 'https://…'             # renders “[ view live ]”
   # externalLinkMobile: 'https://…'       # optional second “[ view mobile ]” link
   ---

   import { Image } from 'astro:assets';
   import shot from '../../assets/projects/<slug>/shot.png';

   <div class="case-section">## Overview…</div>
   ```

   Notes:
   - `coverImage` / `detailHero` / `galleryImages` are **string paths relative to the MDX file** (do not import them in the frontmatter).
   - Body images are real ESM imports rendered with `<Image />`.
   - Image paths are validated by the content schema — broken references fail the build.
   - Wrap sections in `<div class="case-section">` for consistent pacing.

3. **Big/tall previews** — use `<ImageUnveil src={…} alt="…" label="unveil …" />` (import `ImageUnveil` from `../../components/ImageUnveil.astro`) for full-page screenshots, brandboards, etc.

## 🖼️ Extras gallery

Extras (3D renders and drawings) combine a data file and source images:

- Items live in `src/data/extras.ts` — `title`, `type` (`3d` | `drawing`), optional ArtStation `link` and `note`.
- Preview images live in `src/assets/projects/extras/` and must be named exactly after the item title (e.g. `vintagecar.png`, `colorstudy.png`).
- `ExtrasGallery.astro` globs the folder, matches images by filename and renders whole tiles as links when a `link` is present.

## 🎨 Customization

| What | Where |
|---|---|
| Social links / handles | `src/data/social.ts` |
| Skill list | `src/data/skills.ts` |
| Extras items | `src/data/extras.ts` |
| Colors, themes, fonts | `src/styles/global.css` (CSS custom properties, `--accent-*`, `light-mode`) |
| Page metadata | `src/layouts/BaseLayout.astro` |

## ☁️ Deployment

`npm run build` outputs a fully static site to `./dist/` — deploy it to any static host (Netlify, Vercel, Cloudflare Pages, GitHub Pages, S3…).

Example `gh-pages` flow:

```sh
npm run build
npx gh-pages -d dist
```

## © Copyright

© 2026 Agata Tomaszewska. All rights reserved.