import dynamic from 'next/dynamic';
import Layout from '@/components/Layout';
import ScrollRevealSection from '@/components/ScrollRevealSection';
import PageWatermark from '@/components/PageWatermark';
import Header from '@/components/Header';
import CareerTimeline, { type TimelineItem } from '@/components/CareerTimeline';
import type { Metadata } from 'next';

const CompetenzeSection = dynamic(() => import('@/components/CompetenzeSection'), { ssr: true });

export const metadata: Metadata = {
  title: 'Carriera',
  description: 'Il mio percorso di studi ed esperienze professionali: Morfeus, Boolean, laurea in Informatica. Competenze frontend, backend e AI.',
  openGraph: {
    title: 'Carriera | Roberto Scarci',
    description: 'Percorso di studi ed esperienze professionali. Competenze frontend, backend e AI.',
  },
};

const timeline: TimelineItem[] = [
  {
    year: 'Mar 2025 - oggi',
    title: 'Sviluppatore frontend & AI',
    organization: 'Morfeus',
    description:
      'Azienda di consulenza AI. Sviluppo di interfacce e feature per prodotti interni, creazione di assistenti AI e progettazione di prompt efficaci per automatizzare parti del lavoro di team e clienti.',
    type: 'experience',
  },
  {
    year: '2024 - 2027',
    title: 'Laurea in Informatica',
    organization: 'Università Telematica Pegaso',
    description: 'Corso in Informatica e sviluppo informatico. Percorso strutturato per approfondire programmazione e informatica e crescere nel settore.',
    type: 'education',
  },
  {
    year: 'Set 2023 - Ott 2024',
    title: 'Jr. Full Stack Web Developer Trainee',
    organization: 'Boolean',
    description:
      'Sviluppo di progetti in gruppo (replica Airbnb) e in singolo: Netflix con Vue.js e API, WhatsApp con ricerca chat e autorisposta, layout Spotify responsive. Focus su lavoro in team, Git workflow e consegna di progetti completi lato frontend e backend.',
    type: 'experience',
  },
  {
    year: 'Mag 2022 - Mag 2023',
    title: 'Servizio Civile Universale',
    organization: 'Istituto Maria Ausiliatrice',
    description: 'Lavoro con bambini delle scuole primarie di primo e secondo grado a Taranto. Competenze interpersonali e gestione del tempo.',
    type: 'experience',
  },
  {
    year: '2021',
    title: 'Diploma in Grafica e Comunicazione',
    organization: 'Istituto Tecnico',
    description: 'Cinque anni di formazione in grafica digitale: Photoshop, Illustrator e comunicazione visiva.',
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
            <ScrollRevealSection delay={0.05}>
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
            </ScrollRevealSection>

            {/* Timeline — linea animata, spaziatura come About (gap-24 md:gap-28), titoli distaccati */}
            <section
              className="block"
              style={{ paddingTop: 'clamp(2rem, 4vw, 3rem)', paddingBottom: 'clamp(3.25rem, 6.5vw, 4.25rem)' }}
              aria-label="Percorso"
            >
              <CareerTimeline items={timeline} />
            </section>

            {/* Competenze Tecniche — più sotto, padding sotto per non attaccare al fondo */}
            <ScrollRevealSection delay={0.05}>
              <section
                className="block"
                style={{
                  paddingTop: 'clamp(3.5rem, 7vw, 5rem)',
                  paddingBottom: 'clamp(4rem, 10vw, 6rem)',
                }}
                aria-labelledby="competenze-heading"
              >
                <CompetenzeSection />
              </section>
            </ScrollRevealSection>
          </div>
        </div>
      </section>
    </Layout>
  );
}
