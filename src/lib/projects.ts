export type ProjectCategory = 'Projects' | 'Dev Tools' | 'Open Source' | 'Designs';

export interface ProjectCaseStudy {
  problem: string;
  constraints?: string;
  solution: string;
  result?: string;
  technicalChallenge?: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  /** Descrizione estesa per la pagina dettaglio */
  longDescription?: string;
  /** Come è stato creato / processo / contesto */
  howItWasCreated?: string;
  technologies: string[];
  category: ProjectCategory;
  image: string;
  /** Link esterno al sito/demo (opzionale) */
  link?: string;
  github?: string;
  /** URL immagini del sito per la pagina dettaglio (da inserire successivamente) */
  screenshots?: string[];
  /** Dati extra per casi studio hero */
  caseStudy?: ProjectCaseStudy;
}

export const projects: Project[] = [
  {
    id: '1',
    title: 'Replica Airbnb',
    description:
      'Replica di Airbnb sviluppata in team durante il corso Boolean. Layout e design a scelta, rispettando linee guida e funzionalità richieste dal PM.',
    longDescription:
      'Progetto realizzato in team durante il corso Boolean. L’obiettivo era ricreare le funzionalità principali di Airbnb: ricerca alloggi, filtri, scheda dettaglio proprietà e gestione preferiti. Il design è stato scelto dal team nel rispetto delle linee guida del product manager.',
    howItWasCreated:
      'Sviluppo in squadra con divisione dei task (frontend, backend, database). Utilizzo di Git per il versioning e di Laravel per API e autenticazione. Il frontend è stato costruito con HTML, CSS e JavaScript vanilla per massima compatibilità con il brief.',
    caseStudy: {
      problem:
        'Durante il corso Boolean dovevamo dimostrare di saper lavorare in team su un progetto complesso, ricreando le funzionalità principali di una piattaforma reale come Airbnb.',
      constraints:
        'Tempo limitato, stack deciso a priori e necessità di coordinare più persone su Git senza rompere la codebase.',
      solution:
        'Abbiamo progettato l’architettura suddividendo responsabilità tra frontend, backend e database. Io mi sono concentrato soprattutto sulle pagine di listing e dettaglio dell’alloggio, sui filtri di ricerca e sull’allineamento tra design e requisiti funzionali.',
      result:
        'Il progetto ha superato la valutazione del corso: l’app permetteva di cercare, filtrare e visualizzare correttamente le proprietà. La gestione del lavoro in team e del versionamento è stata una delle lezioni più preziose.',
      technicalChallenge:
        'Gestire filtri multipli e paginazione mantenendo il codice leggibile. Ho imparato a spezzare la logica in funzioni riutilizzabili e a comunicare in modo chiaro con chi seguiva il backend Laravel.',
    },
    category: 'Projects',
    technologies: ['HTML', 'CSS', 'JavaScript', 'Laravel'],
    image:
      'https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&w=1600',
    link: '#',
    github: '#',
    screenshots: [],
  },
  {
    id: '2',
    title: 'Replica Netflix',
    description:
      'Replica di Netflix con Vue.js: chiamate API per film e serie TV, dettagli completi, barra di ricerca funzionante per i titoli.',
    longDescription:
      'Clone dell’interfaccia di Netflix con focus su film e serie TV. Integrazione con API esterne per recuperare titoli, locandine e descrizioni. La barra di ricerca permette di filtrare i contenuti in tempo reale.',
    howItWasCreated:
      'Progetto singolo con Vue.js per gestione reattiva dello stato e dei componenti. Le API sono state integrate tramite fetch/axios. Layout responsive e carousel per le categorie, ispirato all’originale.',
    caseStudy: {
      problem:
        'Volevo allenarmi a consumare API esterne e a gestire stati complessi sul frontend, partendo da un’interfaccia che tutti conoscono: Netflix.',
      constraints:
        'Solo frontend, nessun backend custom, ma necessità di dare una sensazione “vera” di catalogo film/serie con ricerca e liste dinamiche.',
      solution:
        'Ho strutturato l’app in componenti Vue riutilizzabili (hero, righe di contenuti, card) e centralizzato le chiamate API. La barra di ricerca filtra i risultati in tempo reale, mentre i carousel per categoria simulano l’esperienza originale.',
      result:
        'Il clone permette di esplorare film e serie, cercare per titolo e visualizzare schede dettagliate. È stato uno dei progetti che mi ha fatto sentire pronto a lavorare su interfacce reali con dati dinamici.',
      technicalChallenge:
        'Gestire loading, errori e debounce della ricerca senza rendere l’interfaccia scattosa. Ho imparato a separare la logica di fetch dal rendering e a pensare allo stato dell’app prima del layout.',
    },
    category: 'Projects',
    technologies: ['Vue.js', 'JavaScript', 'HTML', 'CSS', 'API'],
    image:
      'https://images.pexels.com/photos/3945317/pexels-photo-3945317.jpeg?auto=compress&cs=tinysrgb&w=1600',
    link: '#',
    github: '#',
    screenshots: [],
  },
  {
    id: '3',
    title: 'Replica WhatsApp',
    description:
      'Replica di WhatsApp con barra di ricerca per le chat e algoritmo di autorisposta ai messaggi. Sviluppo in singolo.',
    longDescription:
      'Interfaccia chat ispirata a WhatsApp con lista conversazioni, ricerca e vista singola chat. Incluso un sistema di risposta automatica ai messaggi per simulare una conversazione.',
    howItWasCreated:
      'Sviluppo in singolo con HTML, CSS e JavaScript. La logica di ricerca filtra le chat in base al nome, e l’autorisposta è gestita con timer e messaggi predefiniti per dimostrare l’interattività.',
    category: 'Projects',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    image:
      'https://images.pexels.com/photos/267399/pexels-photo-267399.jpeg?auto=compress&cs=tinysrgb&w=1600',
    link: '#',
    github: '#',
    screenshots: [],
  },
  {
    id: '4',
    title: 'Layout Spotify',
    description:
      'Replica del layout full responsive di Spotify realizzata con HTML, CSS e Bootstrap.',
    longDescription:
      'Ricostruzione fedele del layout di Spotify: sidebar, area contenuti e player. Completamente responsive grazie a Bootstrap e CSS custom per dettagli e breakpoint.',
    howItWasCreated:
      'Progetto focalizzato su layout e CSS: uso di Bootstrap per griglia e componenti, poi personalizzazione con CSS per avvicinarsi il più possibile al design originale su diverse risoluzioni.',
    category: 'Designs',
    technologies: ['HTML', 'CSS', 'Bootstrap'],
    image:
      'https://images.pexels.com/photos/1670926/pexels-photo-1670926.jpeg?auto=compress&cs=tinysrgb&w=1600',
    link: '#',
    github: '#',
    screenshots: [],
  },
  {
    id: '5',
    title: 'Landing Page Agency',
    description:
      'Landing ad alte conversioni per agenzia creativa con animazioni e form contatto.',
    longDescription:
      'Landing page pensata per conversioni: hero con CTA, sezioni servizi, portfolio e form di contatto. Animazioni fluide con Framer Motion per un’esperienza moderna.',
    howItWasCreated:
      'Realizzata con Next.js e Tailwind CSS. Le animazioni sono gestite con Framer Motion (scroll, hover, entrance). Il form è predisposto per l’integrazione con un backend o servizio di email.',
    caseStudy: {
      problem:
        'Creare una landing page che raccontasse un’agenzia creativa in modo chiaro e, soprattutto, portasse l’utente a compilare il form di contatto.',
      constraints:
        'Struttura semplice ma credibile, caricamento rapido e attenzione particolare alle animazioni per dare un feeling moderno senza appesantire la UX.',
      solution:
        'Ho organizzato la pagina in blocchi essenziali (hero con CTA, servizi, lavori, testimonianze, form) e usato Framer Motion per dare vita alle sezioni in ingresso e sugli hover. Il form è pensato per collegarsi facilmente a un backend o servizio di email.',
      result:
        'Una landing scorrevole, con una gerarchia chiara che accompagna l’utente verso il form finale. È diventata il mio riferimento quando devo spiegare come penso a conversioni, struttura e micro‑animazioni.',
      technicalChallenge:
        'Bilanciare animazioni e performance. Ho imparato a usare motion soltanto dove aggiunge davvero valore, evitando effetti inutili che rallentano la pagina.',
    },
    category: 'Projects',
    technologies: ['Next.js', 'Tailwind CSS', 'Framer Motion'],
    image:
      'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=1600',
    link: '#',
    github: '#',
    screenshots: [],
  },
  {
    id: '6',
    title: 'UI Kit Open Source',
    description:
      'Libreria di componenti React riutilizzabili e accessibili, documentata con Storybook.',
    longDescription:
      'Set di componenti React (bottoni, input, card, modal, ecc.) con focus su accessibilità e riutilizzabilità. Documentazione interattiva con Storybook per visualizzare varianti e props.',
    howItWasCreated:
      'Progetto strutturato con React e TypeScript. Ogni componente è sviluppato in isolamento e testato in Storybook. Styling con Tailwind CSS e attenzione a contrasti e navigazione da tastiera.',
    category: 'Open Source',
    technologies: ['React', 'TypeScript', 'Storybook', 'Tailwind CSS'],
    image:
      'https://images.pexels.com/photos/11035471/pexels-photo-11035471.jpeg?auto=compress&cs=tinysrgb&w=1600',
    link: '#',
    github: '#',
    screenshots: [],
  },
  {
    id: '7',
    title: 'Brand Identity',
    description:
      'Identità visiva e asset grafici per startup tech: logo, palette, tipografia.',
    longDescription:
      'Identità visiva completa per un brand tech: logo, palette colori, tipografia e linee guida per l’uso. Include esempi di applicazione su mockup e materiali.',
    howItWasCreated:
      'Lavoro di design in Figma e Illustrator. Definizione del design system (colori, font, spaziatura) e creazione degli asset in diversi formati e contesti d’uso.',
    category: 'Designs',
    technologies: ['Figma', 'Illustrator', 'Design system'],
    image:
      'https://images.pexels.com/photos/1591061/pexels-photo-1591061.jpeg?auto=compress&cs=tinysrgb&w=1600',
    link: '#',
    github: '#',
    screenshots: [],
  },
];

export function getProjectById(id: string): Project | undefined {
  return projects.find((p) => p.id === id);
}
