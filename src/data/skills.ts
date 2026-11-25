// DRAFT CONTENT: replace with the tools you really use.
// `icon` is the file name in public/assets/icons. To add a tool, fetch its real logo with
//   node <taste-skill>/scripts/icons.mjs fetch <id> --colour --out public/assets/icons
// (find ids with `icons.mjs find <name>`). The logo picture shows the first 14 tools; keep each group at five or fewer.
// `note` is for your own reference; the page shows the names.

export type Tool = { name: string; icon: string; note: string };
export type SkillGroup = { label: string; tools: Tool[] };

export const skills: SkillGroup[] = [
  {
    label: 'Languages',
    tools: [
      { name: 'HTML', icon: 'html-5', note: 'Semantic, accessible markup' },
      { name: 'CSS', icon: 'css', note: 'Grid, container queries' },
      { name: 'JavaScript', icon: 'javascript', note: 'Browser and Node' },
      { name: 'TypeScript', icon: 'typescript', note: 'Typed front ends and APIs' },
      { name: 'SQL', icon: 'postgres', note: 'PostgreSQL schemas, queries' },
    ],
  },
  {
    label: 'Frameworks',
    tools: [
      { name: 'React', icon: 'react', note: 'Components and state' },
      { name: 'Next.js', icon: 'nextjs', note: 'Server rendering, routing' },
      { name: 'Astro', icon: 'astro', note: 'Content sites, this one too' },
      { name: 'Node.js', icon: 'nodejs', note: 'APIs and build scripts' },
      { name: 'Tailwind CSS', icon: 'tailwindcss', note: 'Utility styling' },
    ],
  },
  {
    label: 'Tools',
    tools: [
      { name: 'Git', icon: 'git', note: 'Branches, reviews, history' },
      { name: 'GitHub', icon: 'github', note: 'Pull requests, Actions' },
      { name: 'VS Code', icon: 'visual-studio-code', note: 'Daily editor' },
      { name: 'Figma', icon: 'figma', note: 'Reading and making designs' },
      { name: 'Vercel', icon: 'vercel', note: 'Deploys and previews' },
    ],
  },
];
