import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// One Markdown file per project in src/content/projects. The file name is the page's address:
// src/content/projects/booking-site.md -> /projects/booking-site/
const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: z.object({
    title: z.string().max(40),
    /** One or two sentences for the card, 25 words at most. */
    summary: z.string(),
    /** Finished or last shipped; the newest project is shown in the hero. */
    date: z.coerce.date(),
    role: z.string(),
    stack: z.array(z.string()).min(1),
    /** What the project took, in plain words: "6 weeks", "a weekend". */
    timeline: z.string(),
    live: z.string().url().optional(),
    repo: z.string().url().optional(),
    /** Your screenshot (public/assets/img/...), 16:10, 1600x1000 or larger. Replaces `visual` once set. */
    cover: z
      .object({ src: z.string(), alt: z.string(), width: z.number(), height: z.number() })
      .optional(),
    /** Until you add a screenshot, the card shows one of the kit's UI panels. */
    visual: z.enum(['calendar', 'code', 'stat', 'checklist', 'search', 'notify']),
    /** Lower comes first on the home page. */
    order: z.number(),
  }),
});

export const collections = { projects };
