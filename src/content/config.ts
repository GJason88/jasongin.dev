import { z, defineCollection } from 'astro:content';

const experienceCollection = defineCollection({
  type: 'content',
  schema: z.object({
    company: z.string(),
    title: z.string(),
    startDate: z.date(),
    endDate: z.date(),
    href: z.string(),
    tech: z
      .array(
        z.object({
          name: z.string(),
          href: z.string(),
        })
      )
      .optional(),
  }),
});

export const collections = {
  experience: experienceCollection,
};
