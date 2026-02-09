import Layout from '@/components/Layout';
import AnimatedSection from '@/components/AnimatedSection';
import PageWatermark from '@/components/PageWatermark';
import Header from '@/components/Header';
import CareerTimeline, { type TimelineItem } from '@/components/CareerTimeline';
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
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Carriera',
  description: 'Il mio percorso di studi ed esperienze professionali, un viaggio continuo di crescita tecnica e personale.',
};

const timeline: TimelineItem[] = [
  {
    year: '2024',
    title: 'Full-Stack Developer Freelance',
    organization: 'Indipendente',
    description: 'Sviluppo di applicazioni web moderne per clienti internazionali, specializzandomi in React, Next.js e Node.js.',
    type: 'experience',
  },
  {
    year: '2022',
    title: 'Laurea in Informatica',
    organization: 'Università',
    description: 'Laurea con lode in Informatica, con focus su sviluppo software, architetture distribuite e user experience design.',
    type: 'education',
  },
  {
    year: '2020',
    title: 'Frontend Developer',
    organization: 'Azienda Tech',
    description: 'Sviluppo di interfacce utente moderne e responsive, collaborando con team di design e backend.',
    type: 'experience',
  },
  {
    year: '2018',
    title: 'Diploma di Maturità',
    organization: 'Istituto Tecnico',
    description: 'Diploma in Informatica e Telecomunicazioni con specializzazione in sviluppo software.',
    type: 'education',
  },
];

export default function Carriera() {
  return (
    <Layout>
      <PageWatermark label="CAREER" className="text-[240px] md:text-[280px]" />
      <section className="relative w-full min-h-screen flex flex-col">
        {/* Spacer sopra header — altezza fissa, come per hero */}
        <div className="h-10 md:h-12 flex-shrink-0" aria-hidden="true" />

        {/* Header — contenitore dedicato, distaccato dal contenuto */}
        <div className="w-full flex-shrink-0 flex flex-col items-center relative z-10">
          <div className="w-full max-w-6xl mx-auto px-6 md:px-8 flex flex-col">
            <Header />
          </div>
        </div>

        {/* Spacer tra header e contenuto — come About */}
        <div className="h-14 md:h-24 lg:h-32 flex-shrink-0" aria-hidden="true" />

        {/* Content — stesso schema di About: pt-4 md:pt-6, nessun mt */}
        <div className="flex-1 w-full flex flex-col items-center justify-start relative z-10 min-h-0 overflow-y-auto">
          <div className="w-full max-w-5xl mx-auto px-6 md:px-8 flex flex-col flex-shrink-0 pt-4 md:pt-6 pb-20 md:pb-28">
            {/* Intro — stessi margini della sezione titolo in About */}
            <AnimatedSection delay={0.1}>
              <section
                className="block"
                style={{ paddingBottom: 'clamp(2.25rem, 4.5vw, 3rem)' }}
                aria-labelledby="carriera-title"
              >
                <div className="flex flex-col md:flex-row md:gap-0 gap-6">
                  <div className="hidden md:flex md:w-14 md:flex-shrink-0 md:justify-center md:relative">
                    <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-border -translate-x-1/2" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h1 id="carriera-title" className="text-3xl md:text-5xl font-bold tracking-[0.04em]">
                      Carriera
                    </h1>
                    <p className="mt-4 text-base md:text-lg text-muted-foreground max-w-2xl">
                      Il mio percorso di studi ed esperienze professionali, un viaggio continuo
                      di crescita tecnica e personale.
                    </p>
                  </div>
                </div>
              </section>
            </AnimatedSection>

            {/* Timeline — linea animata, spaziatura come About (gap-24 md:gap-28), titoli distaccati */}
            <section
              className="block"
              style={{ paddingTop: 'clamp(2rem, 4vw, 3rem)', paddingBottom: 'clamp(3.25rem, 6.5vw, 4.25rem)' }}
              aria-label="Percorso"
            >
              <CareerTimeline items={timeline} />
            </section>

            {/* Competenze Tecniche — più sotto rispetto alla timeline */}
            <section
              className="block"
              style={{ paddingTop: 'clamp(3.5rem, 7vw, 5rem)' }}
              aria-labelledby="competenze-heading"
            >
            <div className="rounded-2xl bg-surface/40 border border-border/50 p-8 md:p-10 backdrop-blur-sm">
              <h2 id="competenze-heading" className="text-2xl md:text-3xl font-bold mb-8">Competenze Tecniche</h2>
              <div className="grid md:grid-cols-2 gap-10 md:gap-12">
                <div className="space-y-6">
                  <h3 className="text-lg font-semibold text-foreground/90">Frontend</h3>
                  <div className="flex flex-wrap gap-4 items-center">
                    <span className="flex items-center gap-2 text-sm text-foreground/80">
                      <SiReact className="w-6 h-6 text-foreground" aria-hidden />
                      React
                    </span>
                    <span className="flex items-center gap-2 text-sm text-foreground/80">
                      <SiNextdotjs className="w-6 h-6 text-foreground" aria-hidden />
                      Next.js
                    </span>
                    <span className="flex items-center gap-2 text-sm text-foreground/80">
                      <SiTypescript className="w-6 h-6 text-foreground" aria-hidden />
                      TypeScript
                    </span>
                    <span className="flex items-center gap-2 text-sm text-foreground/80">
                      <SiTailwindcss className="w-6 h-6 text-foreground" aria-hidden />
                      Tailwind
                    </span>
                    <span className="flex items-center gap-2 text-sm text-foreground/80">
                      <SiRedux className="w-6 h-6 text-foreground" aria-hidden />
                      Redux
                    </span>
                    <span className="flex items-center gap-2 text-sm text-foreground/80">
                      <SiJest className="w-6 h-6 text-foreground" aria-hidden />
                      Jest
                    </span>
                  </div>
                </div>
                <div className="space-y-6">
                  <h3 className="text-lg font-semibold text-foreground/90">Backend</h3>
                  <div className="flex flex-wrap gap-4 items-center">
                    <span className="flex items-center gap-2 text-sm text-foreground/80">
                      <SiNodedotjs className="w-6 h-6 text-foreground" aria-hidden />
                      Node.js
                    </span>
                    <span className="flex items-center gap-2 text-sm text-foreground/80">
                      <SiExpress className="w-6 h-6 text-foreground" aria-hidden />
                      Express
                    </span>
                    <span className="flex items-center gap-2 text-sm text-foreground/80">
                      <SiNestjs className="w-6 h-6 text-foreground" aria-hidden />
                      NestJS
                    </span>
                    <span className="flex items-center gap-2 text-sm text-foreground/80">
                      <SiPostgresql className="w-6 h-6 text-foreground" aria-hidden />
                      PostgreSQL
                    </span>
                    <span className="flex items-center gap-2 text-sm text-foreground/80">
                      <SiMongodb className="w-6 h-6 text-foreground" aria-hidden />
                      MongoDB
                    </span>
                    <span className="flex items-center gap-2 text-sm text-foreground/80">
                      <SiGraphql className="w-6 h-6 text-foreground" aria-hidden />
                      GraphQL
                    </span>
                  </div>
                </div>
                <div className="space-y-6">
                  <h3 className="text-lg font-semibold text-foreground/90">Tools & DevOps</h3>
                  <div className="flex flex-wrap gap-4 items-center">
                    <span className="flex items-center gap-2 text-sm text-foreground/80">
                      <SiGit className="w-6 h-6 text-foreground" aria-hidden />
                      Git
                    </span>
                    <span className="flex items-center gap-2 text-sm text-foreground/80">
                      <SiDocker className="w-6 h-6 text-foreground" aria-hidden />
                      Docker
                    </span>
                    <span className="flex items-center gap-2 text-sm text-foreground/80">
                      <SiAmazon className="w-6 h-6 text-foreground" aria-hidden />
                      AWS
                    </span>
                  </div>
                </div>
                <div className="space-y-6">
                  <h3 className="text-lg font-semibold text-foreground/90">Design</h3>
                  <div className="flex flex-wrap gap-4 items-center">
                    <span className="flex items-center gap-2 text-sm text-foreground/80">
                      <SiFigma className="w-6 h-6 text-foreground" aria-hidden />
                      Figma
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground pt-2">Agile, Scrum, Problem Solving</p>
                </div>
              </div>
            </div>
            </section>
          </div>
        </div>
      </section>
    </Layout>
  );
}
