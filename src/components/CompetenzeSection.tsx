'use client';

import Link from 'next/link';
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
  SiExpress,
  SiGit,
  SiLaravel,
  SiVuedotjs,
  SiDotnet,
} from 'react-icons/si';
import type { IconType } from 'react-icons';

type TechItem = { label: string; Icon: IconType; href?: string };
type Category = { title: string; items: TechItem[] };

const categories: Category[] = [
  {
    title: 'Core stack',
    items: [
      { label: 'React', Icon: SiReact, href: 'https://react.dev' },
      { label: 'Next.js', Icon: SiNextdotjs, href: 'https://nextjs.org' },
      { label: 'TypeScript', Icon: SiTypescript, href: 'https://www.typescriptlang.org' },
      { label: 'Tailwind', Icon: SiTailwindcss, href: 'https://tailwindcss.com' },
    ],
  },
  {
    title: 'Frontend & UI',
    items: [
      { label: 'Vue.js', Icon: SiVuedotjs, href: 'https://vuejs.org' },
      { label: 'Jest', Icon: SiJest, href: 'https://jestjs.io' },
    ],
  },
  {
    title: 'Backend & Data',
    items: [
      { label: 'Node.js', Icon: SiNodedotjs, href: 'https://nodejs.org' },
      { label: 'Laravel', Icon: SiLaravel, href: 'https://laravel.com' },
      { label: 'Express', Icon: SiExpress, href: 'https://expressjs.com' },
      { label: 'PostgreSQL', Icon: SiPostgresql, href: 'https://www.postgresql.org' },
      { label: 'MongoDB', Icon: SiMongodb, href: 'https://www.mongodb.com' },
      { label: '.NET', Icon: SiDotnet, href: 'https://dotnet.microsoft.com' },
    ],
  },
  {
    title: 'Tools & DevOps',
    items: [
      { label: 'Git', Icon: SiGit, href: 'https://git-scm.com' },
      { label: 'Docker', Icon: SiDocker, href: 'https://www.docker.com' },
      { label: 'AWS', Icon: SiAmazon, href: 'https://aws.amazon.com' },
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
        <p className="mt-3 text-sm md:text-base text-foreground/70 max-w-3xl">
          Oggi il mio stack principale è React, Next.js, TypeScript e Tailwind. A supporto uso tecnologie backend,
          database e strumenti DevOps per seguire il ciclo completo di sviluppo, dal prototipo al deploy.
        </p>
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
            {cat.items.map(({ label, Icon, href }) => {
              const content = (
                <>
                  <Icon className="w-6 h-6 md:w-7 md:h-7 text-foreground flex-shrink-0 group-hover:text-accent transition-colors duration-200" aria-hidden />
                  <span className="text-sm text-foreground/85 group-hover:text-accent transition-colors duration-200">{label}</span>
                </>
              );
              return (
                <motion.li
                  key={label}
                  className="group flex items-center gap-3 min-w-0"
                  initial={false}
                  whileHover={{ scale: 1.05, x: 4 }}
                  transition={{ type: 'spring', stiffness: 400, damping: 24 }}
                >
                  {href ? (
                    <Link
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 min-w-0 cursor-pointer outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 rounded-md"
                      aria-label={`${label} (sito ufficiale)`}
                    >
                      {content}
                    </Link>
                  ) : (
                    <span className="flex items-center gap-3 min-w-0 cursor-default">{content}</span>
                  )}
                </motion.li>
              );
            })}
          </ul>
        </div>
      ))}

      {/* Spazio finale sotto l'ultima sezione */}
      <div style={{ height: '2.5rem' }} aria-hidden="true" />
    </div>
  );
}
