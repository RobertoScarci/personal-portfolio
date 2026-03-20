'use client';

import Layout from '@/components/Layout';
import Link from 'next/link';
import ScrollRevealSection from '@/components/ScrollRevealSection';
import PageShell from '@/components/PageShell';
import ProgressiveTimelineSection from '@/components/ProgressiveTimelineSection';
import { FaGithub, FaBox, FaPalette } from 'react-icons/fa';
import { motion } from 'framer-motion';

// Note: Metadata cannot be exported from client components
// Consider creating a separate metadata file or using generateMetadata

interface Read {
  title: string;
  source: string;
  period: string;
  description: string;
}

interface Playlist {
  title: string;
  platform: string;
  link: string;
  description: string;
}

const reads: Read[] = [
  {
    title: 'Full-Stack Web Development',
    source: 'Boolean',
    period: 'Mar 2024',
    description: 'Certificazione in sviluppo web full stack: HTML, CSS, JavaScript, Laravel, Vue.js. Progetti reali in gruppo e in singolo (repliche Airbnb, Netflix, WhatsApp, Spotify).',
  },
  {
    title: 'Informatica e sviluppo informatico',
    source: 'Università Telematica Pegaso',
    period: '2024 - 2027',
    description: 'Laurea in corso. Percorso strutturato per approfondire programmazione e informatica e mettermi costantemente alla prova.',
  },
  {
    title: 'Grafica e Comunicazione',
    source: 'Istituto Tecnico',
    period: 'Diploma 2021',
    description: 'Cinque anni di formazione in grafica digitale: Photoshop, Illustrator, comunicazione visiva e layout.',
  },
  {
    title: 'Management e Diritto Sportivo',
    source: 'Università',
    period: 'Post-diploma',
    description: 'Esperienza universitaria che ha arricchito il bagaglio culturale prima della svolta verso la programmazione.',
  },
  {
    title: 'Learning Something Great 😉',
    source: 'Ogni giorno',
    period: 'Attualmente',
    description: 'Continuo ad apprendere e a mettere in pratica ciò che studio.',
  },
];

const playlists: Playlist[] = [
  {
    title: 'Codewonders',
    platform: 'Spotify',
    link: '#',
    description: 'Lista di canzoni intensa ed energizzante che mi aiuta durante la giornata e ispira idee innovative.',
  },
  {
    title: 'Chill Lofi Study Beats',
    platform: 'Spotify',
    link: '#',
    description: 'I beat perfetti per lo studio, ventiquattro sette. Con oltre 178 canzoni.',
  },
  {
    title: 'Mellow Drive',
    platform: 'Spotify',
    link: '#',
    description: 'Ascolto facile per una guida piacevole.',
  },
  {
    title: 'Rap UK',
    platform: 'Spotify',
    link: '#',
    description: 'Uno dei migliori rap del Regno Unito.',
  },
  {
    title: 'Mood Booster 🎅🏽',
    platform: 'Spotify',
    link: '#',
    description: 'Diventa felice con la dose di oggi di canzoni che fanno stare bene!',
  },
];

export default function About() {
  return (
    <Layout>
      <PageShell
        watermarkLabel="ABOUT"
        watermarkClassName="text-[240px] md:text-[280px]"
        contentContainerClassName="contents"
      >
        <div className="w-full max-w-5xl mx-auto px-6 md:px-8 flex flex-col flex-shrink-0 pt-4 md:pt-6 pb-20 md:pb-28">
            {/* Titolo About Me — spaziatura sotto ridotta */}
            <ScrollRevealSection delay={0}>
              <section
                className="block"
                style={{ paddingBottom: 'clamp(2.25rem, 4.5vw, 3rem)' }}
                aria-labelledby="about-me-title"
              >
                <div className="flex flex-col md:flex-row md:gap-0 gap-6">
                  <div className="hidden md:flex md:w-14 md:flex-shrink-0 md:justify-center md:relative">
                    <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-border -translate-x-1/2" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h1 id="about-me-title" className="text-3xl md:text-5xl font-bold tracking-[0.04em]">About Me.</h1>
                  </div>
                </div>
              </section>
            </ScrollRevealSection>

            {/* Sezione 2: Engineering — stessa struttura timeline progressiva della Carriera */}
            <section
              className="block"
              style={{ paddingTop: 'clamp(2rem, 4vw, 3rem)', paddingBottom: 'clamp(3.25rem, 6.5vw, 4.25rem)' }}
              aria-labelledby="engineering-heading"
            >
              <ProgressiveTimelineSection>
                <div className="flex flex-1 items-start justify-between gap-6 min-w-0">
                  <div className="flex-1 space-y-4 max-w-3xl">
                    <div className="flex items-center gap-2">
                      <h2 className="text-lg md:text-xl font-semibold tracking-[0.08em] uppercase">Engineering</h2>
                      <FaGithub className="w-3 h-3 md:w-3.5 md:h-3.5 text-foreground/60" />
                    </div>
                    <p className="text-xs md:text-sm text-foreground/60 font-extralight leading-[1.9]">
                      Formato come Full Stack Developer da Boolean, lavoro con HTML, CSS, JavaScript, Laravel, Vue.js e React per costruire interfacce e backend solidi. Ho replicato da zero progetti come Airbnb (in team), Netflix con Vue e API, WhatsApp e layout Spotify, curando design responsive e funzionalità reali. Punto a creare siti e app veloci, user-friendly e facili da mantenere.
                    </p>
                  </div>
                  <motion.div whileHover={{ x: 4 }} transition={{ type: 'spring', stiffness: 400, damping: 25 }}>
                    <Link href="https://github.com/RobertoScarci" target="_blank" rel="noopener noreferrer" className="text-xs md:text-sm font-medium text-foreground/70 hover:text-foreground transition-colors underline underline-offset-4 whitespace-nowrap">View Github →</Link>
                  </motion.div>
                </div>
                <div className="flex flex-1 items-start justify-between gap-6 min-w-0">
                  <div className="flex-1 space-y-4 max-w-3xl">
                    <div className="flex items-center gap-2">
                      <h2 className="text-lg md:text-xl font-semibold tracking-[0.08em] uppercase">Product</h2>
                      <FaBox className="w-3 h-3 md:w-3.5 md:h-3.5 text-foreground/60" />
                    </div>
                    <p className="text-xs md:text-sm text-foreground/60 font-extralight leading-[1.9]">
                      Anche se potrei non adattarmi allo stampo convenzionale di un product manager, il mio insieme di competenze diversificate nella ricerca, nel design del prodotto e nella coordinazione del prodotto mi consente di guidare la crescita di un prodotto dalla sua concezione. Come pensatore analitico eccezionale, possiedo la capacità di sostenere la visione del prodotto durante tutto il suo percorso, collegando efficacemente gli aspetti tecnici e del prodotto. Sfruttando la mia esperienza, posso navigare il percorso da 0 a 1, garantendo il successo del prodotto in ogni fase.
                    </p>
                  </div>
                  <motion.div whileHover={{ x: 4 }} transition={{ type: 'spring', stiffness: 400, damping: 25 }}>
                    <Link href="/progetti" className="text-xs md:text-sm font-medium text-foreground/70 hover:text-foreground transition-colors underline underline-offset-4 whitespace-nowrap">View Products →</Link>
                  </motion.div>
                </div>
                <div className="flex flex-1 items-start justify-between gap-6 min-w-0">
                  <div className="flex-1 space-y-4 max-w-3xl">
                    <div className="flex items-center gap-2">
                      <h2 className="text-lg md:text-xl font-semibold tracking-[0.08em] uppercase">Design</h2>
                      <FaPalette className="w-3 h-3 md:w-3.5 md:h-3.5 text-foreground/60" />
                    </div>
                    <p className="text-xs md:text-sm text-foreground/60 font-extralight leading-[1.9]">
                      Nonostante non mi adatti allo stereotipo tipico del designer, le mie eccezionali abilità visive mi permettono di eccellere come presentatore, trasmettendo efficacemente i concetti di design agli stakeholder e ai team di design. Possiedo una notevole attitudine per la concettualizzazione, permettendomi di immaginare e portare avanti creazioni sorprendenti. Inoltre, la mia competenza risiede nel perfezionare i fogli di stile e creare esperienze utente senza soluzione di continuità che fluiscono senza sforzo.
                    </p>
                  </div>
                  <motion.div whileHover={{ x: 4 }} transition={{ type: 'spring', stiffness: 400, damping: 25 }}>
                    <Link href="#" className="text-xs md:text-sm font-medium text-foreground/70 hover:text-foreground transition-colors underline underline-offset-4 whitespace-nowrap">View Dribbble →</Link>
                  </motion.div>
                </div>
              </ProgressiveTimelineSection>
            </section>

            {/* Sezione 3: Come lavoro / servizi */}
            <ScrollRevealSection delay={0.05}>
              <section
                className="block border-t border-border/60"
                style={{ paddingTop: 'clamp(2.5rem, 5vw, 3.5rem)', paddingBottom: 'clamp(3rem, 6vw, 4.25rem)' }}
                aria-labelledby="how-i-work-heading"
              >
                <div className="flex flex-col md:flex-row gap-8 md:gap-12">
                  <div className="flex-1 min-w-0 space-y-4">
                    <h2
                      id="how-i-work-heading"
                      className="text-lg md:text-xl font-semibold tracking-[0.08em] uppercase"
                    >
                      Come lavoro
                    </h2>
                    <p className="text-sm md:text-base text-foreground/70 leading-relaxed">
                      Ogni progetto parte da un confronto sincero su obiettivi, vincoli e pubblico. Da lì definisco una
                      roadmap leggera: prima un prototipo o layout condiviso, poi lo sviluppo vero e proprio, test e
                      ottimizzazioni. Preferisco rilasciare in piccoli step, così possiamo correggere la rotta in base
                      ai feedback reali.
                    </p>
                    <ol className="mt-3 space-y-2 text-sm text-foreground/70 list-decimal list-inside">
                      <li><span className="font-medium">Brief &amp; allineamento</span> — obiettivi, target, contenuti disponibili.</li>
                      <li><span className="font-medium">Design &amp; prototipo</span> — wireframe o layout ad alta fedeltà.</li>
                      <li><span className="font-medium">Sviluppo</span> — implementazione frontend (e backend se serve) con attenzione a performance e accessibilità.</li>
                      <li><span className="font-medium">Refine &amp; deploy</span> — correzioni finali, deploy e handoff.</li>
                    </ol>
                  </div>
                  <div className="w-full md:w-80 lg:w-96 space-y-3">
                    <h3 className="text-sm font-semibold uppercase tracking-[0.16em] text-foreground/60">
                      Cosa posso fare per te
                    </h3>
                    <ul className="space-y-2 text-sm text-foreground/80">
                      <li className="rounded-xl border border-border/60 bg-surface/20 px-4 py-3">
                        <span className="font-medium">Landing page focalizzata sulle conversioni</span>
                        <span className="block text-foreground/60 text-xs mt-1">
                          Ideale per lanciare un nuovo servizio o prodotto.
                        </span>
                      </li>
                      <li className="rounded-xl border border-border/60 bg-surface/20 px-4 py-3">
                        <span className="font-medium">Sito portfolio o vetrina</span>
                        <span className="block text-foreground/60 text-xs mt-1">
                          Struttura chiara, responsive e facile da mantenere.
                        </span>
                      </li>
                      <li className="rounded-xl border border-border/60 bg-surface/20 px-4 py-3">
                        <span className="font-medium">Consulenza frontend / Next.js</span>
                        <span className="block text-foreground/60 text-xs mt-1">
                          Supporto su performance, refactor o nuove feature.
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </section>
            </ScrollRevealSection>

            {/* Titolo My Reads — poco più spazio sopra (dopo Engineering) */}
            <ScrollRevealSection delay={0}>
              <section
                className="block"
                style={{ paddingTop: 'clamp(2.75rem, 5.5vw, 4.25rem)', paddingBottom: 'clamp(3rem, 6vw, 4rem)' }}
                aria-labelledby="my-reads-heading"
              >
                <div className="flex flex-col md:flex-row md:gap-0 gap-6">
                  <div className="hidden md:flex md:w-14 md:flex-shrink-0 md:justify-center md:relative overflow-hidden">
                    <div className="absolute left-1/2 top-0 bottom-0 w-0.5 -translate-x-1/2 rounded-full bg-gradient-to-b from-accent/90 via-accent/40 to-border" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h2 id="my-reads-heading" className="text-xl md:text-2xl font-bold">My Reads.</h2>
                  </div>
                </div>
              </section>
            </ScrollRevealSection>

            {/* Contenuto My Reads — stessa timeline progressiva della Carriera */}
            <section className="block" style={{ paddingBottom: 'clamp(2.75rem, 5.5vw, 4.25rem)' }}>
              <ProgressiveTimelineSection>
                {reads.map((read, index) => (
                  <div key={index} className="flex-1 min-w-0">
                    <div className="space-y-2">
                      <div className="flex items-baseline gap-2 flex-wrap">
                        <h3 className="text-base md:text-lg font-semibold">{read.title}.</h3>
                        <span className="text-xs text-foreground/50">{read.source}</span>
                        <span className="text-xs text-foreground/50">{read.period}</span>
                      </div>
                      <p className="text-xs md:text-sm text-foreground/60 font-extralight leading-[1.9]">
                        {read.description}
                      </p>
                    </div>
                  </div>
                ))}
              </ProgressiveTimelineSection>
            </section>

            {/* Titolo My Playlist — poco più spazio sopra (dopo My Reads) */}
            <ScrollRevealSection delay={0}>
              <section
                className="block"
                style={{ paddingTop: 'clamp(2.75rem, 5.5vw, 4.25rem)', paddingBottom: 'clamp(3rem, 6vw, 4rem)' }}
                aria-labelledby="my-playlist-heading"
              >
                <div className="flex flex-col md:flex-row md:gap-0 gap-6">
                  <div className="hidden md:flex md:w-14 md:flex-shrink-0 md:justify-center md:relative overflow-hidden">
                    <div className="absolute left-1/2 top-0 bottom-0 w-0.5 -translate-x-1/2 rounded-full bg-gradient-to-b from-accent/90 via-accent/40 to-border" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h2 id="my-playlist-heading" className="text-xl md:text-2xl font-bold">My Playlist.</h2>
                  </div>
                </div>
              </section>
            </ScrollRevealSection>

            {/* Contenuto My Playlist — stessa timeline progressiva della Carriera */}
            <section className="block" style={{ paddingBottom: 'clamp(2.25rem, 4.5vw, 3.25rem)' }}>
              <ProgressiveTimelineSection>
                {playlists.map((playlist, index) => (
                  <div key={index} className="flex flex-1 items-start justify-between gap-6 min-w-0">
                    <div className="flex-1 space-y-2 max-w-3xl">
                      <h3 className="text-base md:text-lg font-semibold">{playlist.title}.</h3>
                      <p className="text-xs md:text-sm text-foreground/60 font-extralight leading-[1.9]">
                        {playlist.description}
                      </p>
                    </div>
                    <motion.div whileHover={{ x: 4 }} transition={{ type: 'spring', stiffness: 400, damping: 25 }}>
                      <Link href={playlist.link} target="_blank" rel="noopener noreferrer" className="text-xs md:text-sm font-medium text-foreground/70 hover:text-foreground transition-colors underline underline-offset-4 whitespace-nowrap">
                        {playlist.platform} View Playlist →
                      </Link>
                    </motion.div>
                  </div>
                ))}
              </ProgressiveTimelineSection>
            </section>

            {/* CTA to Projects — poco più spazio sopra (dopo My Playlist) */}
            <ScrollRevealSection delay={0.1}>
              <div className="text-center pt-10">
                <Link
                  href="/progetti"
                  className="inline-flex items-center gap-2 text-base font-medium text-foreground/70 hover:text-foreground transition-colors"
                >
                  Lets Continue To Projects
                  <span className="text-accent">→</span>
                </Link>
              </div>
            </ScrollRevealSection>
          </div>
      </PageShell>
    </Layout>
  );
}
