'use client';

import { useState } from 'react';
import Link from 'next/link';
import ScrollRevealSection from '@/components/ScrollRevealSection';
import type { Project, ProjectCategory } from '@/lib/projects';

const TABS: Array<'All' | ProjectCategory> = ['All', 'Projects', 'Dev Tools', 'Open Source', 'Designs'];

export default function ProjectsFilterGrid({ projects }: { projects: Project[] }) {
  const [selectedTab, setSelectedTab] = useState<'All' | ProjectCategory>('All');

  const filtered =
    selectedTab === 'All' ? projects : projects.filter((p) => p.category === selectedTab);

  return (
    <div className="flex flex-col items-center w-full">
      <nav
        className="mt-6 flex flex-wrap items-center justify-center gap-5 md:gap-6"
        aria-label="Filtri progetti"
      >
        {TABS.map((tab) => (
          <button
            key={tab}
            type="button"
            onClick={() => setSelectedTab(tab)}
            className={
              tab === selectedTab
                ? 'rounded-lg bg-[#3e424b] px-6 py-3 text-sm font-semibold text-white'
                : 'text-sm text-[#a6acb7] hover:text-foreground/90 transition-colors'
            }
          >
            {tab}
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
              <article className="group relative flex flex-col overflow-hidden rounded-2xl border border-border/70 bg-surface/40 shadow-[0_20px_60px_rgba(0,0,0,0.5)] backdrop-blur-sm">
                <div className="relative aspect-[3/4] overflow-hidden">
                  <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                    style={{ backgroundImage: `url(${project.image})` }}
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
                              className="rounded-md bg-white/20 px-3 py-1.5 text-xs font-medium text-white"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                        <span className="inline-flex items-center rounded-full bg-white px-3 py-1.5 text-xs font-medium text-black">
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
