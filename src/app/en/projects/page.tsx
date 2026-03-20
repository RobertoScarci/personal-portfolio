import dynamic from 'next/dynamic';
import Layout from '@/components/Layout';
import ScrollRevealSection from '@/components/ScrollRevealSection';
import { projects } from '@/lib/projects';
import type { Metadata } from 'next';
import PageShell from '@/components/PageShell';
import { SectionHeader } from '@/components/ui';
import { metadata as baseMetadata, siteConfig } from '@/app/metadata';

const ProjectsFilterGrid = dynamic(() => import('@/components/ProjectsFilterGrid'), { ssr: true });

export const metadata: Metadata = {
  ...baseMetadata,
  title: 'Projects (EN)',
  description:
    'Selected projects: app replicas, responsive interfaces, API integrations. React, Next.js, Vue, Laravel.',
  keywords: [
    ...(baseMetadata.keywords ?? []),
    'frontend developer',
    'web applications',
    'case studies',
    'Next.js',
    'React',
    'AI',
    'portfolio',
  ],
  openGraph: {
    ...baseMetadata.openGraph,
    title: 'Projects | Roberto Scarci (EN)',
    description:
      'A few selected projects: frontend, responsive layouts, API work. Case studies are currently written in Italian.',
    url: `${siteConfig.url}/en/projects`,
    locale: 'en_US',
  },
  twitter: {
    ...baseMetadata.twitter,
    title: 'Projects | Roberto Scarci (EN)',
    description:
      'A few selected projects: frontend, responsive layouts, API work. Case studies are currently written in Italian.',
  },
};

export default function ProjectsEn() {
  return (
    <Layout>
      <PageShell
        watermarkLabel="PROJECTS"
        watermarkClassName="text-[160px] md:text-[180px]"
        watermarkVertical
        contentContainerClassName="w-full max-w-4xl mx-auto px-6 md:px-8 flex flex-col flex-shrink-0 pt-4 md:pt-6 pb-20 md:pb-28"
      >
            <ScrollRevealSection delay={0}>
              <section className="block pb-8 md:pb-10" aria-labelledby="projects-title-en">
                <SectionHeader
                  headingTag="h1"
                  titleId="projects-title-en"
                  title="Projects."
                  className="gap-3"
                  titleClassName="text-3xl md:text-5xl font-bold tracking-[0.04em]"
                  description="A small selection of projects I&apos;ve worked on recently. Detailed write-ups are in Italian, but the structure of the work and visuals should still be clear. Project cards open the Italian case study pages."
                  descriptionClassName="text-sm md:text-base text-foreground/70 max-w-xl"
                />
              </section>
            </ScrollRevealSection>

            <ScrollRevealSection delay={0.05}>
              <ProjectsFilterGrid projects={projects} />
            </ScrollRevealSection>
      </PageShell>
    </Layout>
  );
}

