import { defineCollection, z } from 'astro:content';

const reviews = defineCollection({
  type: 'content',
  schema: z.object({
    author: z.string(),
    rating: z.number().min(1).max(5),
    source: z.literal('google'),
    url: z.string(),
  }),
});

export const collections = {
  reviews,
};
