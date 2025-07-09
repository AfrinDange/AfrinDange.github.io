import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  schema: z.object({
    title: z.string(),
    date: z.string(),
    teaser: z.string(),
  }),
});

export const collections = {
  blog,
};
