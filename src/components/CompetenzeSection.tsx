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
  SiFigma,
  SiJest,
  SiRedux,
  SiExpress,
  SiNestjs,
  SiGraphql,
  SiGit,
} from 'react-icons/si';
import type { IconType } from 'react-icons';

type TechItem = { label: string; Icon: IconType };
type Category = { title: string; items: TechItem[] };

const categories: Category[] = [
  {
    title: 'Frontend',
    items: [
      { label: 'React', Icon: SiReact },
      { label: 'Next.js', Icon: SiNextdotjs },
      { label: 'TypeScript', Icon: SiTypescript },
      { label: 'Tailwind', Icon: SiTailwindcss },
      { label: 'Redux', Icon: SiRedux },
      { label: 'Jest', Icon: SiJest },
    ],
  },
  {
    title: 'Backend',
    items: [
      { label: 'Node.js', Icon: SiNodedotjs },
      { label: 'Express', Icon: SiExpress },
      { label: 'NestJS', Icon: SiNestjs },
      { label: 'PostgreSQL', Icon: SiPostgresql },
      { label: 'MongoDB', Icon: SiMongodb },
      { label: 'GraphQL', Icon: SiGraphql },
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
  {
    title: 'Design & Metodologie',
    items: [{ label: 'Figma', Icon: SiFigma }],
  },
];

const allLabels = categories.flatMap((c) => c.items.map((i) => i.label));

export default function CompetenzeSection() {
  return (
    <div className="rounded-2xl bg-surface/[0.06] border border-border/30 px-8 md:px-10 pt-10 md:pt-12 pb-20 md:pb-24 backdrop-blur-[2px]">
      <h2 id="competenze-heading" className="text-2xl md:text-3xl font-bold mb-12 md:mb-14">
        Competenze Tecniche
      </h2>

      {/* Marquee — linguaggi che scorrono (due copie per loop infinito) */}
      <div className="overflow-hidden mb-14 md:mb-16" aria-hidden="true">
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

      <div className="flex flex-col gap-16 md:gap-20">
        {categories.map((cat) => (
          <div key={cat.title} className="pt-1">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-foreground/70 mb-8 md:mb-10">
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
                  <Icon className="w-5 h-5 text-foreground flex-shrink-0 group-hover:text-accent transition-colors duration-200" aria-hidden />
                  <span className="text-sm text-foreground/85 group-hover:text-accent transition-colors duration-200">{label}</span>
                </motion.li>
              ))}
            </ul>
            {cat.title === 'Design & Metodologie' && (
              <p className="mt-5 text-sm text-foreground/70">Agile, Scrum, Problem Solving</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
