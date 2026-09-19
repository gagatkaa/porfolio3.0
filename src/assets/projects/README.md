# Project images

One folder per project inside `src/assets/`. Images here are processed/optimized by Astro (this Astro version uses the `image()` schema field, which expects **relative string paths**, and the `<Image />` component).

## Folder map

| Folder | Project | MDX file |
|---|---|---|
| `sounds-like-antwerp` | Sounds Like Antwerp | `algorave.mdx` |
| `craft-in-motion` | Craft in Motion | `craft-in-motion.mdx` |
| `kickstarter` | Kickstarter | `kickstarter.mdx` |
| `miles-meals` | Miles & Meals | `miles-meals.mdx` |
| `portfolio-10` | Portfolio 1.0 | `portfolio-10.mdx` |
| `soundwaveclock` | Soundwaveclock | `soundwaveclock.mdx` |
| `thrive` | Thrive | `thrive.mdx` |
| `type01` | Type01 | `type01.mdx` |
| `workshopbooking` | Workshopbooking | `workshopbooking.mdx` |

Naming: lowercase, dash-separated, no spaces. Recommended files: `cover.jpg`/`cover.png` (card/modal cover), `mockup-01.jpg`, … (gallery), anything else for the case-study body.

## Add a cover / gallery image

In the MDX **frontmatter**, set `coverImage`/`galleryImages` to the path **relative to that MDX file**:

```yaml
---
title: 'Sounds Like Antwerp'
coverImage: '../../assets/projects/sounds-like-antwerp/hero-image.png'
galleryImages:
  - '../../assets/projects/sounds-like-antwerp/laptop-mockup.png'
  - '../../assets/projects/sounds-like-antwerp/no-code-tool.png'
---
```

## Add an image inside the case-study body

Import at the **top of the body** (after the closing `---`), then render with `<Image />`:

```mdx
import { Image } from 'astro:assets';
import architecture from '../../assets/projects/sounds-like-antwerp/architecture.png';

<Image src={architecture} alt="Sounds Like Antwerp technical architecture" />
```

Notes:
- `coverImage`/`galleryImages` are string paths relative to the MDX file — do **not** `import` them in the frontmatter.
- Body images use real ESM imports + `<Image />` (imports must be at the top of the file, before the content).
- The card, modal, and detail page already render `coverImage` with `<Image />`.
- Remove the `.gitkeep` from a folder once it contains real images.