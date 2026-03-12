export interface Post {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  tags: string[];
  content: string;
}

export const posts: Post[] = [
  {
    slug: 'nextjs-portfolio-evoluzione',
    title: 'Come ho evoluto questo portfolio con Next.js',
    excerpt:
      'Un racconto pratico delle scelte fatte per questo sito: layout, animazioni, performance e SEO.',
    date: '2026-03-01',
    tags: ['nextjs', 'frontend', 'portfolio'],
    content: [
      'In questo portfolio ho voluto combinare una UI fortemente personalizzata con una base tecnica solida.',
      '',
      '- App Router di Next.js per pagine e routing dinamico',
      '- Animazioni leggere con Framer Motion',
      '- Ottimizzazione immagini con next/image',
      '- Metadati SEO e Open Graph per una buona presenza sui social',
      '',
      'L’obiettivo è mostrare non solo i risultati finali, ma anche il modo in cui affronto struttura, performance e micro-dettagli di UX.',
    ].join('\n'),
  },
  {
    slug: 'usare-l-ai-nel-flusso-di-lavoro',
    title: 'Usare l’AI nel flusso di lavoro senza perdere controllo',
    excerpt:
      'Come integro gli strumenti AI nel mio processo di sviluppo, restando sempre in controllo delle decisioni tecniche.',
    date: '2026-02-20',
    tags: ['ai', 'workflow'],
    content: [
      'Utilizzo l’AI come acceleratore, non come sostituto.',
      '',
      'La sfrutto soprattutto per:',
      '',
      '- generare bozze di codice o di copy',
      '- confrontare approcci diversi a un problema',
      '- validare edge case che potrei aver trascurato',
      '',
      'La parte importante resta comunque la revisione: ogni proposta viene adattata al contesto del progetto, alle linee guida e alle esigenze reali del cliente.',
    ].join('\n'),
  },
  {
    slug: 'lezioni-dai-cloni-di-app-famose',
    title: 'Cosa ho imparato clonando app famose',
    excerpt:
      'Replica di Airbnb, Netflix, WhatsApp, Spotify: perché questi cloni sono stati fondamentali per crescere.',
    date: '2026-01-30',
    tags: ['learning', 'frontend'],
    content: [
      'Clonare interfacce e flussi famosi è stato uno dei modi più efficaci per crescere come developer.',
      '',
      'Mi ha aiutato a:',
      '',
      '- capire meglio gerarchie visive e pattern di navigazione',
      '- ragionare su stati complessi (filtri, ricerca, liste dinamiche)',
      '- confrontare le mie soluzioni con prodotti che la gente usa ogni giorno',
      '',
      'Oggi sfrutto quello che ho imparato in quei progetti quando devo progettare flussi nuovi per clienti o progetti personali.',
    ].join('\n'),
  },
];

export function getPostBySlug(slug: string): Post | undefined {
  return posts.find((p) => p.slug === slug);
}

