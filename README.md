# Afrin Dange's research website

This site uses Astro. Most website content is stored in Markdown and YAML files, so routine updates do not require changes to page components.

## Run the website

The repository uses `mise` to select Node 22.20.0.

```sh
mise install
npm install
npm run dev
```

Open `http://localhost:4321` in a browser. Astro updates the page after you save a content file.

Run a production build before publishing:

```sh
npm run build
```

## Update the content

Edit these files:

| Section | File |
| --- | --- |
| Introduction and social links | `src/content/introduction/main.md` |
| Updates | `src/content/updates.yaml` |
| Publications | `src/content/publications.yaml` |
| Hidden blog drafts | `src/content/blog/*.md` |

The rules for these files are defined in `src/content.config.ts`. Astro reports a build error when a required field is missing or has the wrong type.

### Add an update

Add an item near the top of `src/content/updates.yaml`. The website sorts updates by date.

```yaml
- id: unique-update-name
  date: "2026-10-05"
  icon: book
  text: "Describe the update."
```

### Add a publication

Place the publication image in `public/images/publications/`. Then add a record to `src/content/publications.yaml`.

```yaml
- id: short-unique-name
  title: "Paper title"
  authors:
    - name: "Afrin Dange"
      me: true
    - name: "Coauthor Name"
  venue: "Conference 2026"
  year: 2026
  image: "/images/publications/paper-image.png"
  imageAlt: "Short description of the paper image"
  featured: true
  links:
    paper: "https://example.com/paper"
    code: "https://github.com/example/repository"
```

All links are optional. Remove a link line if it is not available.

### Add a blog post

Blog posts are currently hidden from the website. You can continue writing drafts under `src/content/blog`. The public Blog pages can be restored when you are ready to publish them.
