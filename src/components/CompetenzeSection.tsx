'use client';

import { motion } from 'framer-motion';
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiNodedotjs,
  SiPostgresql,
  SiMongodb,
  SiTailwindcss,
  SiDocker,
  SiAmazon,
  SiJest,
  SiRedux,
  SiExpress,
  SiNestjs,
  SiGraphql,
  SiGit,
  SiLaravel,
  SiVuedotjs,
  SiDotnet,
} from 'react-icons/si';
import type { IconType } from 'react-icons';

type TechItem = { label: string; Icon: IconType };
type Category = { title: string; items: TechItem[] };

const categories: Category[] = [
  {
    title: 'Frontend',
    items: [
      { label: 'React', Icon: SiReact },
      { label: 'Vue.js', Icon: SiVuedotjs },
      { label: 'Next.js', Icon: SiNextdotjs },
      { label: 'TypeScript', Icon: SiTypescript },
      { label: 'Tailwind', Icon: SiTailwindcss },
      { label: 'Jest', Icon: SiJest },
    ],
  },
  {
    title: 'Backend',
    items: [
      { label: 'Node.js', Icon: SiNodedotjs },
      { label: 'Laravel', Icon: SiLaravel },
      { label: 'Express', Icon: SiExpress },
      { label: 'PostgreSQL', Icon: SiPostgresql },
      { label: 'MongoDB', Icon: SiMongodb },
      { label: '.NET', Icon: SiDotnet },
    ],
  },
  {
    title: 'Tools & DevOps',
    items: [
      { label: 'Git', Icon: SiGit },
      { label: 'Docker', Icon: SiDocker },
      { label: 'AWS', Icon: SiAmazon },
    ],
  },
];

const allLabels = categories.flatMap((c) => c.items.map((i) => i.label));

export default function CompetenzeSection() {
  return (
    <div className="rounded-2xl bg-surface/[0.06] border border-border/30 px-8 md:px-10 backdrop-blur-[2px]">
      {/* Contenitore titolo principale — padding sotto ben visibile */}
      <div style={{ paddingTop: '2.5rem', paddingBottom: '2.5rem' }}>
        <h2 id="competenze-heading" className="text-2xl md:text-3xl font-bold">
          Competenze Tecniche
        </h2>
      </div>

      {/* Contenitore marquee — poco padding sopra e sotto */}
      <div
        className="overflow-hidden"
        style={{ paddingTop: '0.5rem', paddingBottom: '0.5rem', marginBottom: '2rem' }}
        aria-hidden="true"
      >
        <div className="flex gap-10 md:gap-14 whitespace-nowrap marquee-scroll">
          {[...allLabels, ...allLabels].map((label, i) => (
            <span
              key={`${label}-${i}`}
              className="text-sm text-foreground/40 font-medium px-2 inline-block"
            >
              {label}
            </span>
          ))}
        </div>
      </div>

      {/* Contenitori per ogni categoria — padding esplicito tra titolo e loghi */}
      {categories.map((cat) => (
        <div
          key={cat.title}
          className="border-t border-border/20"
          style={{
            paddingTop: '2rem',
            paddingBottom: '2rem',
          }}
        >
          <h3
            className="text-sm font-semibold uppercase tracking-wider text-foreground/70"
            style={{ marginBottom: '1.75rem' }}
          >
            {cat.title}
          </h3>
          <ul
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-x-6 gap-y-5 md:gap-y-6"
            aria-label={`Tecnologie ${cat.title.toLowerCase()}`}
          >
            {cat.items.map(({ label, Icon }) => (
              <motion.li
                key={label}
                className="group flex items-center gap-3 min-w-0 cursor-default"
                initial={false}
                whileHover={{ scale: 1.05, x: 4 }}
                transition={{ type: 'spring', stiffness: 400, damping: 24 }}
              >
                <Icon className="w-6 h-6 md:w-7 md:h-7 text-foreground flex-shrink-0 group-hover:text-accent transition-colors duration-200" aria-hidden />
                <span className="text-sm text-foreground/85 group-hover:text-accent transition-colors duration-200">{label}</span>
              </motion.li>
            ))}
          </ul>
        </div>
      ))}

      {/* Spazio finale sotto l'ultima sezione */}
      <div style={{ height: '2.5rem' }} aria-hidden="true" />
    </div>
  );
}
