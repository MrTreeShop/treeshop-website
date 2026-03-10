import { defineCollection, z } from 'astro:content';

const guides = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    relatedServices: z.array(z.string()).default([]),
    relatedGuides: z.array(z.string()).default([]),
    tableOfContents: z.boolean().default(true),
    draft: z.boolean().default(false),
  }),
});

export const collections = { guides };
