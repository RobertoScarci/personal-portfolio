import dynamic from 'next/dynamic';
import Layout from '@/components/Layout';
import ScrollRevealSection from '@/components/ScrollRevealSection';
import PageWatermark from '@/components/PageWatermark';
import Header from '@/components/Header';
import { projects } from '@/lib/projects';
import type { Metadata } from 'next';

const ProjectsFilterGrid = dynamic(() => import('@/components/ProjectsFilterGrid'), { ssr: true });

export const metadata: Metadata = {
  title: 'Projects (EN)',
  description:
    'Selected projects: app replicas, responsive interfaces, API integrations. React, Next.js, Vue, Laravel.',
  openGraph: {
    title: 'Projects | Roberto Scarci (EN)',
    description:
      'A few selected projects: frontend, responsive layouts, API work. Case studies are currently written in Italian.',
  },
};

export default function ProjectsEn() {
  return (
    <Layout>
      <PageWatermark label="PROJECTS" className="text-[160px] md:text-[180px]" vertical />
      <section className="relative w-full min-h-screen flex flex-col">
        <div className="h-10 md:h-12 flex-shrink-0" aria-hidden="true" />

        <div className="w-full flex-shrink-0 flex flex-col items-center relative z-10">
          <div className="w-full max-w-6xl mx-auto px-6 md:px-8 flex flex-col">
            <Header />
          </div>
        </div>

        <div className="h-14 md:h-24 lg:h-32 flex-shrink-0" aria-hidden="true" />

        <div className="flex-1 w-full flex flex-col items-center justify-start relative z-10 min-h-0 overflow-y-auto">
          <div className="w-full max-w-4xl mx-auto px-6 md:px-8 flex flex-col flex-shrink-0 pt-4 md:pt-6 pb-20 md:pb-28">
            <ScrollRevealSection delay={0}>
              <section className="block pb-8 md:pb-10" aria-labelledby="projects-title-en">
                <h1 id="projects-title-en" className="text-3xl md:text-5xl font-bold tracking-[0.04em]">
                  Projects.
                </h1>
                <p className="mt-3 text-sm md:text-base text-foreground/70 max-w-xl">
                  A small selection of projects I&apos;ve worked on. Detailed write-ups are in Italian, but the
                  structure of the work and visuals should still be clear.
                </p>
              </section>
            </ScrollRevealSection>

            <ScrollRevealSection delay={0.05}>
              <ProjectsFilterGrid projects={projects} />
            </ScrollRevealSection>
          </div>
        </div>
      </section>
    </Layout>
  );
}

