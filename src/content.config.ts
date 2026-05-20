import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const projectSchema = z.object({
  title: z.string(),
  role: z.string(),
  year: z.number(),
  tools: z.array(z.string()),
  industry: z.string(),
  cover: z.string().optional(),
  order: z.number().default(99),
  draft: z.boolean().default(false),
});

const blogSchema = z.object({
  title: z.string(),
  date: z.coerce.date(),
  description: z.string(),
  tags: z.array(z.string()).default([]),
  cover: z.string().optional(),
  draft: z.boolean().default(false),
});

export const collections = {
  work: defineCollection({
    loader: glob({ pattern: '**/*.mdx', base: './src/content/work' }),
    schema: projectSchema,
  }),
  robotics: defineCollection({
    loader: glob({ pattern: '**/*.mdx', base: './src/content/robotics' }),
    schema: projectSchema,
  }),
  blog: defineCollection({
    loader: glob({ pattern: '**/*.mdx', base: './src/content/blog' }),
    schema: blogSchema,
  }),
};
