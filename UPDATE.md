# How to update the website

You can edit most website content in the Markdown and YAML files under `src/content`. Routine content updates do not require changes to the Astro components.

## Preview your changes

Install the required tools when you set up the project for the first time.

```sh
mise install
npm install
```

Start the development website.

```sh
npm run dev
```

Open `http://localhost:4321` in a browser. Astro refreshes the page after you save a content file.

Run a full build before you publish your changes.

```sh
npm run build
```

Astro reports an error if a required field is missing or has the wrong format.

## Update the introduction

Edit `src/content/introduction/main.md`.

The text between the opening `---` lines contains the introduction settings.

1. `greeting` sets the large heading beside the cat.
2. `note` sets the highlighted note above the biography. Use it for a temporary message, such as a PhD application, internship search, or job market status. Set it to `null` to hide the note.
3. `researchAreas` sets the research interests shown below the biography. Set it to `null` to hide the research interests line.
4. `photo` contains the public path to the profile image.
5. `photoAlt` describes the profile image for screen readers.
6. `socials` contains the social links and their icons.

```yaml
note: "I am applying to PhD programs for Fall 2027."
```

Hide the note when it is no longer needed.

```yaml
note: null
```

The supported social icon names are `google-scholar`, `linkedin`, `github`, and `x`.

Write the biography below the second `---` line. You can use normal Markdown links.

```md
I worked with [Researcher Name](https://example.com/) on this project.
```

To replace the profile picture, add the new image under `public/images` and update the `photo` value. A file at `public/images/profile.png` uses the path `/images/profile.png`.

## Add an update

Edit `src/content/updates.yaml`.

Add a new item with a unique `id`, a date, an icon, and the update text.

```yaml
- id: paper-accepted-2026
  date: "2026-10-05"
  icon: book
  text: "Our paper was accepted at Conference 2026."
```

Use the date format `YYYY-MM-DD`. The website sorts the updates by date, so the most recent update appears first. The homepage shows every update in one scrolling list.

You can use these icon names:

1. `book` for a publication or acceptance.
2. `book-open` for teaching or reading.
3. `graduation-cap` for a degree or thesis milestone.
4. `map-pin` for an event or visit.
5. `mic` for a talk.
6. `pen-line` for reviewing or writing.

## Add a publication

Edit `src/content/publications.yaml`.

Place the publication image under `public/images/publications`. Then add a publication record.

```yaml
- id: short-paper-name
  title: "Paper title"
  authors:
    - name: "Afrin Dange"
      me: true
    - name: "Coauthor Name"
  venue: "Conference 2026"
  year: 2026
  image: "/images/publications/paper-image.png"
  imageAlt: "Diagram that explains the paper method"
  featured: true
  links:
    code: "https://github.com/example/project"
    paper: "https://example.com/manuscript"
    bibtex: "https://example.com/citation.bib"
```

The `id` must be unique. Set `me: true` for your name so the website shows it in bold.

Set `featured: true` to show the publication on the homepage. Every publication appears on the Publications page.

The publication row always shows Code, Manuscript, and BibTeX icons. The `code` link enables Code. The `paper` link enables Manuscript. The `bibtex` link enables BibTeX. Clicking BibTeX copies the citation. An icon stays disabled when its link is missing.

Code and manuscript links should use a full web address that starts with `https://`. You can save a BibTeX file under `public/bibtex` and use a path such as `/bibtex/paper-name.bib`.

## Add a blog post

Blog posts are currently hidden from the website. You can still create and edit drafts under `src/content/blog`.

Create a Markdown file under `src/content/blog`. Use a short file name because the file name becomes part of the page address.

```md
---
title: "Post title"
date: "2026-10-05"
teaser: "A short description of the post."
draft: true
---

Write the post here using Markdown.
```

Keep `draft: true` while you work on the post. The Blog pages and profile link must be restored before a post can appear publicly.

## Replace the CV

Replace `public/assets/afrin_dange_cv.pdf` with the new PDF. Keep the same file name so the profile and CV page continue to use it.

## Replace the favicon

Replace `public/favicon.svg`. The same favicon is used in light mode and dark mode.

## Check your work

Review the introduction, publication links, updates list, and CV page in the development website.

Run the build after the review.

```sh
npm run build
```

Do not edit files under `dist` or `.astro`. Astro creates those files during development and builds.

When the build passes, publish the site with:

```sh
npm run deploy
```
