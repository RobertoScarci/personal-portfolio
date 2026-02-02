'use client';

import Layout from '@/components/Layout';
import Link from 'next/link';
import AnimatedSection from '@/components/AnimatedSection';
import PageWatermark from '@/components/PageWatermark';
import Header from '@/components/Header';
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
    title: 'Human Centered Design 101',
    source: 'Acumen',
    period: '2017 - 2018',
    description: 'Esperienza intensiva e pratica che ti sfida a uscire dalla sedia e andare nel mondo reale per parlare con le persone e testare le tue idee.',
  },
  {
    title: 'Data Structure And Algorithm',
    source: 'Udemy',
    period: '2019',
    description: 'Molti sviluppatori autodidatti sentono che uno dei principali svantaggi rispetto ai laureati in informatica è la mancanza di conoscenza su algoritmi, strutture dati e la notazione Big-O.',
  },
  {
    title: 'Adaptive Leadership',
    source: 'edX',
    period: '2019',
    description: 'Corso introduttivo che aiuta a identificare e progredire su una sfida di leadership nella propria vita, team o comunità.',
  },
  {
    title: 'Learning to Learn [Efficient Learning]',
    source: 'Udemy',
    period: '2020',
    description: 'Migliora memoria e produttività usando le competenze dei migliori performer mondiali e strategie di apprendimento provate dalla ricerca.',
  },
  {
    title: 'Learning Something Great 😉',
    source: 'Currently',
    period: 'Attualmente',
    description: 'Continuiamo ad apprendere ogni giorno.',
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
      <PageWatermark label="ABOUT" className="text-[240px] md:text-[280px]" />
      <section className="relative w-full min-h-screen flex flex-col">
        {/* Spacer sopra header — altezza fissa, come per hero */}
        <div className="h-10 md:h-12 flex-shrink-0" aria-hidden="true" />

        {/* Header — contenitore dedicato */}
        <div className="w-full flex-shrink-0 flex flex-col items-center relative z-10">
          <div className="w-full max-w-6xl mx-auto px-6 md:px-8 flex flex-col">
            <Header />
          </div>
        </div>

        {/* Spacer tra header e About Me — un po' meno per portare il titolo poco più sopra */}
        <div className="h-14 md:h-24 lg:h-32 flex-shrink-0" aria-hidden="true" />

        {/* Content — contenitori separati per sezione: spacing con padding (niente margin collapse) */}
        <div className="flex-1 w-full flex flex-col items-center justify-start relative z-10 min-h-0 overflow-y-auto">
          <div className="w-full max-w-5xl mx-auto px-6 md:px-8 flex flex-col flex-shrink-0 pt-4 md:pt-6 pb-20 md:pb-28">
            {/* Titolo About Me — spaziatura sotto ridotta */}
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

            {/* Sezione 2: Engineering — poco più spazio sotto prima di My Reads */}
            <section
              className="block"
              style={{ paddingTop: 'clamp(2rem, 4vw, 3rem)', paddingBottom: 'clamp(3.25rem, 6.5vw, 4.25rem)' }}
              aria-labelledby="engineering-heading"
            >
            <div className="relative">
              <div className="flex flex-col md:flex-row md:gap-0 gap-6">
                {/* Colonna timeline: più stretta per avvicinare il testo alla linea */}
                <div className="hidden md:flex md:w-14 md:flex-shrink-0 md:justify-center md:relative">
                  <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-border -translate-x-1/2" />
                </div>

                {/* Colonna contenuto: gap invece di space-y così il reset CSS non annulla lo spazio */}
                <div className="flex-1 min-w-0 flex flex-col gap-24 md:gap-28">
                <AnimatedSection delay={0.1}>
                  <div className="relative flex items-start gap-6">
                    {/* Pallino timeline — centrato sulla linea (colonna w-14 = 56px, centro 28px) */}
                    <div className="hidden md:block absolute -left-7 top-1.5 w-3.5 h-3.5 rounded-full bg-foreground border-2 border-background -translate-x-1/2 flex-shrink-0" />
                    
                    <div className="flex flex-1 items-start justify-between gap-6 min-w-0 pl-0 md:pl-0">
                      <div className="flex-1 space-y-4 max-w-3xl">
                        <div className="flex items-center gap-2">
                          <h2 className="text-lg md:text-xl font-semibold tracking-[0.08em] uppercase">
                            Engineering
                          </h2>
                          <FaGithub className="w-3 h-3 md:w-3.5 md:h-3.5 text-foreground/60" />
                        </div>
                        <p className="text-xs md:text-sm text-foreground/60 font-extralight leading-[1.9]">
                          Il potere delle prime impressioni non può essere sottovalutato, e la porta d'accesso per sfruttarle risiede in un design eccezionale del sito web. Un sito web eccezionale trascende la mera estetica e estende la sua influenza per comprendere funzionalità senza soluzione di continuità e navigazione user-friendly. Attingendo alla mia esperienza come programmatore esperto, possiedo l'abilità unica di affrontare sfide tecniche intricate mentre creo siti web che emanano eleganza e fascino visivo. Inoltre, la mia vasta conoscenza degli standard tecnici riconosciuti è completata dalla mia competenza nelle pratiche di costruzione moderne, garantendo che ogni aspetto del tuo sito web sia perfettamente ottimizzato.
                        </p>
                      </div>
                      <motion.div
                        whileHover={{ x: 4 }}
                        transition={{ type: 'spring', stiffness: 400, damping: 25 }}
                      >
                        <Link
                          href="https://github.com"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-xs md:text-sm font-medium text-foreground/70 hover:text-foreground transition-colors underline underline-offset-4 whitespace-nowrap"
                        >
                          View Github →
                        </Link>
                      </motion.div>
                    </div>
                  </div>
                </AnimatedSection>

                <AnimatedSection delay={0.2}>
                  <div className="relative flex items-start gap-6">
                    <div className="hidden md:block absolute -left-7 top-1.5 w-3.5 h-3.5 rounded-full bg-foreground border-2 border-background -translate-x-1/2 flex-shrink-0" />
                    
                    <div className="flex flex-1 items-start justify-between gap-6 min-w-0 pl-0 md:pl-0">
                      <div className="flex-1 space-y-4 max-w-3xl">
                        <div className="flex items-center gap-2">
                          <h2 className="text-lg md:text-xl font-semibold tracking-[0.08em] uppercase">
                            Product
                          </h2>
                          <FaBox className="w-3 h-3 md:w-3.5 md:h-3.5 text-foreground/60" />
                        </div>
                        <p className="text-xs md:text-sm text-foreground/60 font-extralight leading-[1.9]">
                          Anche se potrei non adattarmi allo stampo convenzionale di un product manager, il mio insieme di competenze diversificate nella ricerca, nel design del prodotto e nella coordinazione del prodotto mi consente di guidare la crescita di un prodotto dalla sua concezione. Come pensatore analitico eccezionale, possiedo la capacità di sostenere la visione del prodotto durante tutto il suo percorso, collegando efficacemente gli aspetti tecnici e del prodotto. Sfruttando la mia esperienza, posso navigare il percorso da 0 a 1, garantendo il successo del prodotto in ogni fase.
                        </p>
                      </div>
                      <motion.div
                        whileHover={{ x: 4 }}
                        transition={{ type: 'spring', stiffness: 400, damping: 25 }}
                      >
                        <Link
                          href="/progetti"
                          className="text-xs md:text-sm font-medium text-foreground/70 hover:text-foreground transition-colors underline underline-offset-4 whitespace-nowrap"
                        >
                          View Products →
                        </Link>
                      </motion.div>
                    </div>
                  </div>
                </AnimatedSection>

                <AnimatedSection delay={0.3}>
                  <div className="relative flex items-start gap-6">
                    <div className="hidden md:block absolute -left-7 top-1.5 w-3.5 h-3.5 rounded-full bg-foreground border-2 border-background -translate-x-1/2 flex-shrink-0" />
                    
                    <div className="flex flex-1 items-start justify-between gap-6 min-w-0 pl-0 md:pl-0">
                      <div className="flex-1 space-y-4 max-w-3xl">
                        <div className="flex items-center gap-2">
                          <h2 className="text-lg md:text-xl font-semibold tracking-[0.08em] uppercase">
                            Design
                          </h2>
                          <FaPalette className="w-3 h-3 md:w-3.5 md:h-3.5 text-foreground/60" />
                        </div>
                        <p className="text-xs md:text-sm text-foreground/60 font-extralight leading-[1.9]">
                          Nonostante non mi adatti allo stereotipo tipico del designer, le mie eccezionali abilità visive mi permettono di eccellere come presentatore, trasmettendo efficacemente i concetti di design agli stakeholder e ai team di design. Possiedo una notevole attitudine per la concettualizzazione, permettendomi di immaginare e portare avanti creazioni sorprendenti. Inoltre, la mia competenza risiede nel perfezionare i fogli di stile e creare esperienze utente senza soluzione di continuità che fluiscono senza sforzo.
                        </p>
                      </div>
                      <motion.div
                        whileHover={{ x: 4 }}
                        transition={{ type: 'spring', stiffness: 400, damping: 25 }}
                      >
                        <Link
                          href="#"
                          className="text-xs md:text-sm font-medium text-foreground/70 hover:text-foreground transition-colors underline underline-offset-4 whitespace-nowrap"
                        >
                          View Dribbble →
                        </Link>
                      </motion.div>
                    </div>
                  </div>
                </AnimatedSection>
                </div>
              </div>
            </div>
            </section>

            {/* Titolo My Reads — poco più spazio sopra (dopo Engineering) */}
            <section
              className="block"
              style={{ paddingTop: 'clamp(2.75rem, 5.5vw, 4.25rem)', paddingBottom: 'clamp(3rem, 6vw, 4rem)' }}
              aria-labelledby="my-reads-heading"
            >
              <div className="flex flex-col md:flex-row md:gap-0 gap-6">
                <div className="hidden md:flex md:w-14 md:flex-shrink-0 md:justify-center md:relative">
                  <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-border -translate-x-1/2" />
                </div>
                <div className="flex-1 min-w-0">
                  <h2 id="my-reads-heading" className="text-xl md:text-2xl font-bold">My Reads.</h2>
                </div>
              </div>
            </section>

            {/* Contenuto My Reads — gap come in My Playlist, spacing visibile tra voci */}
            <section className="block" style={{ paddingBottom: 'clamp(2.75rem, 5.5vw, 4.25rem)' }}>
              <div className="flex flex-col md:flex-row md:gap-0 gap-6">
                <div className="hidden md:flex md:w-14 md:flex-shrink-0 md:justify-center md:relative">
                  <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-border -translate-x-1/2" />
                </div>
                <div className="flex-1 min-w-0 flex flex-col gap-16 md:gap-20">
                  {reads.map((read, index) => (
                    <AnimatedSection key={index} delay={0.1 + index * 0.1}>
                      <div className="relative flex items-start gap-6">
                        <div className="hidden md:block absolute -left-7 top-1.5 w-3.5 h-3.5 rounded-full bg-foreground border-2 border-background -translate-x-1/2 flex-shrink-0" />
                        <div className="flex-1 min-w-0 pl-0 md:pl-0">
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
                      </div>
                    </AnimatedSection>
                  ))}
                </div>
              </div>
            </section>

            {/* Titolo My Playlist — poco più spazio sopra (dopo My Reads) */}
            <section
              className="block"
              style={{ paddingTop: 'clamp(2.75rem, 5.5vw, 4.25rem)', paddingBottom: 'clamp(3rem, 6vw, 4rem)' }}
              aria-labelledby="my-playlist-heading"
            >
              <div className="flex flex-col md:flex-row md:gap-0 gap-6">
                <div className="hidden md:flex md:w-14 md:flex-shrink-0 md:justify-center md:relative">
                  <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-border -translate-x-1/2" />
                </div>
                <div className="flex-1 min-w-0">
                  <h2 id="my-playlist-heading" className="text-xl md:text-2xl font-bold">My Playlist.</h2>
                </div>
              </div>
            </section>

            {/* Contenuto My Playlist — gap come in riferimento: spazio chiaro tra una voce e la successiva */}
            <section className="block" style={{ paddingBottom: 'clamp(2.25rem, 4.5vw, 3.25rem)' }}>
              <div className="flex flex-col md:flex-row md:gap-0 gap-6">
                <div className="hidden md:flex md:w-14 md:flex-shrink-0 md:justify-center md:relative">
                  <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-border -translate-x-1/2" />
                </div>
                <div className="flex-1 min-w-0 flex flex-col gap-16 md:gap-20">
                  {playlists.map((playlist, index) => (
                    <AnimatedSection key={index} delay={0.1 + index * 0.1}>
                      <div className="relative flex items-start gap-6">
                        <div className="hidden md:block absolute -left-7 top-1.5 w-3.5 h-3.5 rounded-full bg-foreground border-2 border-background -translate-x-1/2 flex-shrink-0" />
                        <div className="flex flex-1 items-start justify-between gap-6 min-w-0 pl-0 md:pl-0">
                          <div className="flex-1 space-y-2 max-w-3xl">
                            <h3 className="text-base md:text-lg font-semibold">{playlist.title}.</h3>
                            <p className="text-xs md:text-sm text-foreground/60 font-extralight leading-[1.9]">
                              {playlist.description}
                            </p>
                          </div>
                          <motion.div
                            whileHover={{ x: 4 }}
                            transition={{ type: 'spring', stiffness: 400, damping: 25 }}
                          >
                            <Link
                              href={playlist.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-xs md:text-sm font-medium text-foreground/70 hover:text-foreground transition-colors underline underline-offset-4 whitespace-nowrap"
                            >
                              {playlist.platform} View Playlist →
                            </Link>
                          </motion.div>
                        </div>
                      </div>
                    </AnimatedSection>
                  ))}
                </div>
              </div>
            </section>

            {/* CTA to Projects — poco più spazio sopra (dopo My Playlist) */}
            <AnimatedSection delay={0.4}>
              <div className="text-center pt-10">
                <Link
                  href="/progetti"
                  className="inline-flex items-center gap-2 text-base font-medium text-foreground/70 hover:text-foreground transition-colors"
                >
                  Lets Continue To Projects
                  <span className="text-accent">→</span>
                </Link>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </Layout>
  );
}
