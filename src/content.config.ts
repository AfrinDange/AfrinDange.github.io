import { defineCollection, z } from "astro:content";
import { file, glob } from "astro/loaders";

const contentLink = z.union([
  z.string().url(),
  z.string().regex(/^\/\S+$/, "Use a full URL or a public path that starts with /."),
]);

const introduction = defineCollection({
  loader: glob({
    pattern: "**/*.md",
    base: "./src/content/introduction",
  }),
  schema: z.object({
    greeting: z.string(),
    note: z.string().nullable(),
    researchAreas: z.array(z.string()).nullable(),
    photo: z.string(),
    photoAlt: z.string(),
    socials: z.array(
      z.object({
        label: z.string(),
        url: z.string().url(),
        icon: z.enum(["google-scholar", "linkedin", "github", "x"]),
      }),
    ),
  }),
});

const updates = defineCollection({
  loader: file("./src/content/updates.yaml"),
  schema: z.object({
    date: z.string().regex(/^\d{4}-\d{2}-\d{2}$/),
    icon: z.enum([
      "graduation-cap",
      "pen-line",
      "map-pin",
      "book-open",
      "book",
      "mic",
    ]),
    text: z.string(),
  }),
});

const publications = defineCollection({
  loader: file("./src/content/publications.yaml"),
  schema: z.object({
    title: z.string(),
    authors: z.array(
      z.object({
        name: z.string(),
        me: z.boolean().default(false),
      }),
    ),
    venue: z.string(),
    year: z.number().int(),
    highlight: z.string().optional(),
    image: z.string(),
    imageAlt: z.string(),
    featured: z.boolean().default(false),
    links: z
      .object({
        paper: contentLink.optional(),
        code: contentLink.optional(),
        bibtex: contentLink.optional(),
        project: contentLink.optional(),
      })
      .default({}),
  }),
});

const blog = defineCollection({
  loader: glob({
    pattern: "**/*.md",
    base: "./src/content/blog",
  }),
  schema: z.object({
    title: z.string(),
    date: z.string().regex(/^\d{4}-\d{2}-\d{2}$/),
    teaser: z.string(),
    draft: z.boolean().default(false),
  }),
});

export const collections = {
  introduction,
  updates,
  publications,
  blog,
};
