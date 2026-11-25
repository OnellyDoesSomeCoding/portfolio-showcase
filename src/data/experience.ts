// DRAFT CONTENT: every role below is a stand-in. Replace with your own, newest first.
// Keep it to four roles or fewer so the section fits one screen; link older ones from your CV.

export type Role = {
  title: string;
  org: string;
  /** One line on what you did, with one concrete detail. */
  line: string;
  start: number;
  /** Leave out for a role you still hold. */
  end?: number;
};

export const experience: Role[] = [
  {
    title: 'Web developer',
    org: 'Freelance',
    line: 'Sites and small web apps for local businesses, from design files to deploy.',
    start: 2025,
  },
  {
    title: 'Front-end developer intern',
    org: 'Product studio',
    line: 'Built React components and fixed accessibility issues across a client dashboard.',
    start: 2024,
    end: 2025,
  },
  {
    title: 'Teaching assistant, web basics',
    org: 'University course',
    line: 'Ran weekly labs on HTML, CSS and Git for first-year students.',
    start: 2023,
    end: 2024,
  },
];

export const yearRange = (r: Role) => (r.end ? `${r.start} to ${r.end}` : `${r.start} to now`);
