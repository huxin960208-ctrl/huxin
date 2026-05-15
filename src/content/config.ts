import { defineCollection, z } from 'astro:content';

const articlesCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string().max(70),
    description: z.string().max(160),
    pubDate: z.date(),
    updatedDate: z.date().optional(),
    category: z.enum([
      'car-accidents',
      'slip-and-fall',
      'medical-malpractice',
      'workplace-injuries',
      'wrongful-death',
    ]),
    tags: z.array(z.string()).max(5).default([]),
    featuredImage: z.string().optional(),
    featuredImageAlt: z.string().optional(),
    author: z.string().default('Injury Rights Guide Editorial Team'),
    authorBio: z.string().optional(),
    keyTakeaways: z.array(z.string()).max(5).optional(),
    faq: z
      .array(
        z.object({
          question: z.string(),
          answer: z.string(),
        })
      )
      .max(10)
      .optional(),
    isFeatured: z.boolean().default(false),
    draft: z.boolean().default(false),
  }),
});

const pagesCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.date().optional(),
    updatedDate: z.date().optional(),
  }),
});

export const collections = {
  articles: articlesCollection,
  pages: pagesCollection,
};
