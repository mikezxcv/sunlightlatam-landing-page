import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const blog = defineCollection({
  loader: glob({ pattern: "*/index.md", base: "./blog", generateId: ({ entry }) => entry.replaceAll("\\", "/").split("/")[0] }),
  schema: ({ image }) => z.object({
    hero: image(),
    heroAlt: z.string().trim().min(1),
    heroCaption: z.string().optional(),
    title: z.string(),
    description: z.string(),
    order: z.number().int(),
  }),
});

export const collections = { blog };
