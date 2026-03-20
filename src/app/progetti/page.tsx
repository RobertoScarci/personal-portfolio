import dynamic from 'next/dynamic';
import Layout from '@/components/Layout';
import ScrollRevealSection from '@/components/ScrollRevealSection';
import { projects } from '@/lib/projects';
import type { Metadata } from 'next';
import PageShell from '@/components/PageShell';

const ProjectsFilterGrid = dynamic(() => import('@/components/ProjectsFilterGrid'), { ssr: true });

export const metadata: Metadata = {
  title: 'Progetti',
  description: 'Selezione dei miei progetti: repliche di app famose, interfacce responsive, integrazioni API. React, Next.js, Vue, Laravel.',
  openGraph: {
    title: 'Progetti | Roberto Scarci',
    description: 'Progetti sviluppati: frontend, layout responsive, API. React, Next.js, Vue, Laravel.',
  },
};

export default function Progetti() {
  return (
    <Layout>
      <PageShell
        watermarkLabel="PROJECTS"
        watermarkClassName="text-[160px] md:text-[180px]"
        watermarkVertical
        contentContainerClassName="w-full max-w-4xl mx-auto px-6 md:px-8 flex flex-col flex-shrink-0 pt-4 md:pt-6 pb-20 md:pb-28"
      >
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
      </PageShell>
    </Layout>
  );
}
