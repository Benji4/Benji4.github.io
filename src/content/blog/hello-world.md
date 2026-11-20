---
title: 'Hello, world'
description: 'A sample post showing how blog posts work on this site.'
pubDate: 2026-11-20
draft: true
---

This is a draft, so it only shows up when you run `npm run dev`. It is left out of the
published site and the RSS feed until you remove `draft: true` (or delete this file).

## Writing a post

1. Add a Markdown file to `src/content/blog/`. The file name becomes the URL,
   so `my-first-post.md` is published at `/blog/my-first-post/`.
2. Start it with the front matter block you see at the top of this file:
   `title`, `description` and `pubDate` are required.
3. Write the post in normal Markdown: headings, **bold**, [links](https://astro.build),
   lists, `code` and code blocks all work.

```python
print("Hello from a code block")
```

Push to the default branch and the site rebuilds by itself.
