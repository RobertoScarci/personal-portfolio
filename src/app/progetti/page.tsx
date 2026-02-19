import Layout from '@/components/Layout';
import Link from 'next/link';
import ScrollRevealSection from '@/components/ScrollRevealSection';
import PageWatermark from '@/components/PageWatermark';
import Header from '@/components/Header';
import { projects } from '@/lib/projects';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Progetti',
  description: 'Una selezione dei progetti che ho sviluppato, mostrando problemi risolti, soluzioni implementate e risultati ottenuti.',
};

export default function Progetti() {
  return (
    <Layout>
      <PageWatermark label="PROJECTS" className="text-[160px] md:text-[180px]" vertical />
      <section className="relative w-full min-h-screen flex flex-col">
        {/* Spacer sopra header — altezza fissa, come per hero */}
        <div className="h-10 md:h-12 flex-shrink-0" aria-hidden="true" />

        {/* Header — contenitore dedicato (stessa struttura di About) */}
        <div className="w-full flex-shrink-0 flex flex-col items-center relative z-10">
          <div className="w-full max-w-6xl mx-auto px-6 md:px-8 flex flex-col">
            <Header />
          </div>
        </div>

        {/* Spacer tra header e contenuto — come About */}
        <div className="h-14 md:h-24 lg:h-32 flex-shrink-0" aria-hidden="true" />

        {/* Content — max-w-4xl (più stretto), padding come About */}
        <div className="flex-1 w-full flex flex-col items-center justify-start relative z-10 min-h-0 overflow-y-auto">
          <div className="w-full max-w-4xl mx-auto px-6 md:px-8 flex flex-col flex-shrink-0 pt-4 md:pt-6 pb-20 md:pb-28">
            {/* Solo il titolo "Projects." — left-aligned, reveal on scroll */}
            <ScrollRevealSection delay={0}>
              <section
                className="block"
                style={{ paddingBottom: 'clamp(2rem, 4vw, 2.75rem)' }}
                aria-labelledby="projects-title"
              >
                <h1 id="projects-title" className="text-3xl md:text-5xl font-bold tracking-[0.04em]">
                  Projects.
                </h1>
              </section>
            </ScrollRevealSection>

            {/* Resto della sezione centrato: filtri, griglia */}
            <ScrollRevealSection delay={0.05}>
            <div className="flex flex-col items-center w-full">
              {/* Navbar: nessun background sulla barra, solo la tab attiva ha un mini background con padding generoso */}
              <nav
                className="mt-6 flex flex-wrap items-center justify-center gap-5 md:gap-6"
                aria-label="Filtri progetti"
              >
                {['All', 'Projects', 'Dev Tools', 'Open Source', 'Designs'].map((tab) => (
                  <button
                    key={tab}
                    type="button"
                    className={
                      tab === 'All'
                        ? 'rounded-lg bg-[#3e424b] px-6 py-3 text-sm font-semibold text-white'
                        : 'text-sm text-[#a6acb7] hover:text-foreground/90 transition-colors'
                    }
                  >
                    {tab}
                  </button>
                ))}
              </nav>

              {/* Griglia progetti — card più compatte, centrata */}
              <section
                className="block w-full"
                style={{ paddingTop: 'clamp(2rem, 4vw, 2.75rem)' }}
                aria-label="Elenco progetti"
              >
                <div className="grid gap-6 md:gap-8 lg:grid-cols-2">
                {projects.map((project, index) => (
                  <ScrollRevealSection key={project.id} delay={index * 0.06}>
                    <article className="group relative flex flex-col overflow-hidden rounded-2xl border border-border/70 bg-surface/40 shadow-[0_20px_60px_rgba(0,0,0,0.5)] backdrop-blur-sm">
                      {/* Card ancora più alta; in hover overlay quasi trasparente nella metà inferiore */}
                      <div className="relative aspect-[3/4] overflow-hidden">
                        <div
                          className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                          style={{ backgroundImage: `url(${project.image})` }}
                        />
                        {/* Overlay: Link nativo a /progetti/[id]; "Codice" è un link sibling (no link annidati) */}
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
            </ScrollRevealSection>
          </div>
        </div>
      </section>
    </Layout>
  );
}
