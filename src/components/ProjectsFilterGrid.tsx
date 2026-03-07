'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import ScrollRevealSection from '@/components/ScrollRevealSection';
import type { Project, ProjectCategory } from '@/lib/projects';

const TABS: Array<'All' | ProjectCategory> = ['All', 'Projects', 'Dev Tools', 'Open Source', 'Designs'];

const TAB_LABELS: Record<'All' | ProjectCategory, string> = {
  All: 'Tutti',
  Projects: 'Progetti client & personali',
  'Dev Tools': 'Dev tools',
  'Open Source': 'Open source',
  Designs: 'Design & UI',
};

export default function ProjectsFilterGrid({ projects }: { projects: Project[] }) {
  const [selectedTab, setSelectedTab] = useState<'All' | ProjectCategory>('All');

  const filtered =
    selectedTab === 'All' ? projects : projects.filter((p) => p.category === selectedTab);

  return (
    <div className="flex flex-col items-center w-full">
      <p className="text-xs uppercase tracking-[0.18em] text-foreground/55 mb-2">
        Filtra per tipo di progetto
      </p>
      <nav className="flex flex-wrap items-center justify-center gap-3 md:gap-4" aria-label="Filtri progetti">
        {TABS.map((tab) => (
          <button
            key={tab}
            type="button"
            onClick={() => setSelectedTab(tab)}
            aria-pressed={tab === selectedTab}
            className={`relative inline-flex items-center rounded-full px-5 py-2.5 text-sm font-medium transition-all duration-300 ${
              tab === selectedTab
                ? 'bg-accent text-accent-foreground shadow-[0_0_24px_rgba(236,72,153,0.45)]'
                : 'border border-border/60 text-foreground/70 hover:text-foreground hover:border-accent/80 hover:shadow-[0_0_18px_rgba(236,72,153,0.35)] bg-surface/40'
            }`}
          >
            {TAB_LABELS[tab]}
          </button>
        ))}
      </nav>

      <section
        className="block w-full"
        style={{ paddingTop: 'clamp(2rem, 4vw, 2.75rem)' }}
        aria-label="Elenco progetti"
      >
        <div className="grid gap-6 md:gap-8 lg:grid-cols-2">
          {filtered.map((project, index) => (
            <ScrollRevealSection key={project.id} delay={index * 0.06}>
              <article className="group relative flex flex-col overflow-hidden rounded-2xl border border-border/70 bg-surface/40 shadow-[0_16px_40px_rgba(0,0,0,0.55)] backdrop-blur-sm transition-all duration-300 hover:border-accent/80 hover:shadow-[0_0_32px_rgba(236,72,153,0.55)]">
                <div className="relative aspect-[3/4] overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 flex flex-col justify-end opacity-0 transition-opacity duration-300 group-hover:opacity-100 cursor-pointer">
                    <Link
                      href={`/progetti/${project.id}`}
                      className="absolute inset-0 z-0 flex flex-col justify-end"
                      aria-label={`Apri progetto: ${project.title}`}
                    >
                      <div className="h-1/2 flex flex-col items-center justify-center gap-2 bg-gradient-to-b from-transparent via-black/18 to-black/42 p-5 text-center">
                        <h2 className="text-xl md:text-2xl font-bold text-white">
                          {project.title}
                        </h2>
                        <p className="text-sm text-white/90 max-w-md line-clamp-2">
                          {project.description}
                        </p>
                        <div className="flex flex-wrap justify-center gap-2">
                          {project.technologies.slice(0, 4).map((tech) => (
                            <span
                              key={tech}
                              className="rounded-md bg-white/20 px-3 py-1.5 text-xs font-medium text-white/95"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                        <span className="inline-flex items-center rounded-full bg-white px-3 py-1.5 text-xs font-medium text-black shadow-[0_0_14px_rgba(255,255,255,0.65)]">
                          Apri progetto
                        </span>
                      </div>
                    </Link>
                    {project.github && project.github !== '#' && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="absolute bottom-5 left-1/2 translate-x-2 z-10 inline-flex items-center rounded-full border border-white/60 px-3 py-1.5 text-xs font-medium text-white hover:bg-white/20 transition-colors"
                      >
                        Codice
                      </a>
                    )}
                  </div>
                </div>
              </article>
            </ScrollRevealSection>
          ))}
        </div>
      </section>
    </div>
  );
}
