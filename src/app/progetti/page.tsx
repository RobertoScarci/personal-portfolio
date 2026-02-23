import Layout from '@/components/Layout';
import ScrollRevealSection from '@/components/ScrollRevealSection';
import ProjectsFilterGrid from '@/components/ProjectsFilterGrid';
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

            {/* Filtri e griglia progetti (client: stato tab) */}
            <ScrollRevealSection delay={0.05}>
              <ProjectsFilterGrid projects={projects} />
            </ScrollRevealSection>
          </div>
        </div>
      </section>
    </Layout>
  );
}
