# eyashi.github.io

Personal site and blog built with [Hugo](https://gohugo.io/) and the [PaperMod](https://github.com/adityatelange/hugo-PaperMod) theme. Deployed automatically to GitHub Pages via GitHub Actions.

---

## Prerequisites

- [Hugo extended](https://gohugo.io/installation/) (v0.128+)
- Git

## Local Development

Start the dev server (includes draft posts):

```bash
hugo server --buildDrafts
```

The site will be available at `http://localhost:1313/` with live reload.

## Creating a New Post

```bash
hugo new posts/my-post-title.md
```

This creates `content/posts/my-post-title.md` using the default archetype with frontmatter:

```yaml
---
title: "My Post Title"
date: 2026-03-13T14:00:00-07:00
description: ""
tags: []
categories: []
math: false
draft: true
---
```

- **`draft: true`** — The post won't appear in production builds until you set this to `false`.
- **`math: true`** — Enables KaTeX rendering. Use `$...$` for inline math and `$$...$$` for display equations.
- **`tags` / `categories`** — Used for filtering and organizing posts.

### Writing content

Posts are written in standard Markdown. Supported features:

| Feature | Syntax |
|---------|--------|
| Code blocks | ` ```python ... ``` ` (supports all major languages) |
| Inline math | `$E = mc^2$` |
| Display math | `$$\sum_{n=1}^{\infty} \frac{1}{n^2} = \frac{\pi^2}{6}$$` |
| Images | `![alt text](url)` |
| YouTube embed | `{{</* youtube VIDEO_ID */>}}` |
| Raw HTML | Supported (enabled in config) |

## Building for Production

To generate the static site locally:

```bash
hugo --gc --minify
```

Output goes to the `public/` directory (gitignored).

## Deployment

Deployment is **fully automatic** via GitHub Actions.

### Setup (one-time)

1. Go to your GitHub repo → **Settings** → **Pages**
2. Under **Build and deployment → Source**, select **GitHub Actions**

### Workflow

1. Write or edit posts in `content/posts/`
2. Set `draft: false` on posts you want published
3. Commit and push to `main` (or merge a PR into `main`)
4. GitHub Actions runs the workflow in `.github/workflows/hugo.yml`:
   - Installs Hugo
   - Checks out the repo with submodules (theme)
   - Builds the site with `hugo --gc --minify`
   - Deploys to GitHub Pages
5. Site is live at **https://eyashi.github.io/** within ~1 minute

### Checking deployment status

Go to the **Actions** tab in your GitHub repo to see build logs and status.

## Project Structure

```
.
├── archetypes/          # Templates for new content
│   └── default.md
├── assets/              # Hugo asset pipeline (SCSS, etc.)
├── content/
│   ├── about.md         # About page
│   ├── search.md        # Search page
│   └── posts/           # Blog posts go here
│       └── hello-world.md
├── layouts/
│   └── partials/
│       ├── extend_head.html   # KaTeX injection
│       └── home_info.html     # Homepage with Paper.js logo
├── static/
│   ├── favicon.png
│   └── js/              # Paper.js logo scripts
├── themes/
│   └── PaperMod/        # Theme (Git submodule)
├── hugo.toml            # Site configuration
└── .github/
    └── workflows/
        └── hugo.yml     # CI/CD workflow
```

## Quick Reference

| Task | Command |
|------|---------|
| New post | `hugo new posts/my-post.md` |
| Dev server | `hugo server --buildDrafts` |
| Production build | `hugo --gc --minify` |
| Deploy | Push/merge to `main` — automatic |
