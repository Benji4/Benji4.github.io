# benji4.github.io

Personal site of Bennet Breier: CV and blog, built with [Astro](https://astro.build) and
published to GitHub Pages at <https://benji4.github.io>.

## Run it locally

Requires Node.js 22 or newer.

```sh
npm install
npm run dev      # http://localhost:4321, reloads on save
npm run build    # writes the static site to dist/
npm run preview  # serves dist/ to check the build
```

## Where things live

| What | File |
| --- | --- |
| CV content (jobs, education, skills, …) | `src/data/cv.ts` |
| CV page layout and print styles | `src/pages/index.astro`, `src/components/CvEntry.astro` |
| Blog posts | `src/content/blog/*.md` |
| Site-wide layout, header, footer | `src/layouts/Base.astro` |
| Colours and shared styles | `src/styles/global.css` |
| Static files (photo, favicon) | `public/` |

## Updating the CV

Edit `src/data/cv.ts` and push. To get a PDF, open the CV page and click **Save as PDF**
(or use the browser's print dialog and choose "Save as PDF"). The print styles produce a
clean A4 layout without the site navigation.

## Writing a blog post

Add a Markdown file to `src/content/blog/`, for example `my-post.md`, which is published at
`/blog/my-post/`:

```md
---
title: 'My post'
description: 'One sentence for the post list and RSS feed.'
pubDate: 2026-11-20
draft: false   # true keeps it out of the published site
---

Post text in Markdown.
```

New posts appear on `/blog/`, in the RSS feed at `/rss.xml` and in the sitemap.

## Deployment

`.github/workflows/deploy.yml` builds and deploys the site on every push to `master`.
In the repository settings, Pages → Build and deployment → Source must be set to
**GitHub Actions**.
