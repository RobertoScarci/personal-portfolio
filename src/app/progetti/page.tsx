import Layout from '@/components/Layout';
import Link from 'next/link';
import AnimatedSection from '@/components/AnimatedSection';
import PageWatermark from '@/components/PageWatermark';
import Header from '@/components/Header';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Progetti',
  description: 'Una selezione dei progetti che ho sviluppato, mostrando problemi risolti, soluzioni implementate e risultati ottenuti.',
};

interface Project {
  id: string;
  title: string;
  description: string;
  problem: string;
  solution: string;
  technologies: string[];
  result: string;
  link?: string;
  github?: string;
  image?: string;
}

const projects: Project[] = [
  {
    id: '1',
    title: 'E-Commerce Platform',
    description: 'Piattaforma e-commerce completa con gestione prodotti, carrello e checkout.',
    problem: 'I clienti necessitavano di una soluzione e-commerce scalabile e performante per vendere i loro prodotti online.',
    solution: 'Ho sviluppato una piattaforma full-stack con Next.js, integrando sistema di pagamento, gestione inventario e dashboard admin.',
    technologies: ['Next.js', 'TypeScript', 'PostgreSQL', 'Stripe', 'Tailwind CSS'],
    result: 'Aumento del 40% delle vendite online e riduzione del 60% del tempo di caricamento rispetto alla soluzione precedente.',
    link: '#',
    github: '#',
  },
  {
    id: '2',
    title: 'SaaS Dashboard',
    description: 'Dashboard analytics per startup con visualizzazioni dati in tempo reale.',
    problem: 'L\'azienda aveva bisogno di monitorare metriche chiave e performance in tempo reale.',
    solution: 'Ho creato una dashboard interattiva con grafici dinamici, filtri avanzati e export dati, utilizzando React e librerie di visualizzazione.',
    technologies: ['React', 'TypeScript', 'Chart.js', 'Node.js', 'MongoDB'],
    result: 'Miglioramento del 50% nella velocità di analisi dei dati e feedback positivi da parte degli utenti.',
    link: '#',
    github: '#',
  },
  {
    id: '3',
    title: 'Portfolio Website',
    description: 'Sito portfolio moderno e responsive per un designer freelance.',
    problem: 'Il designer aveva bisogno di un portfolio professionale che mostrasse il suo lavoro in modo efficace.',
    solution: 'Ho progettato e sviluppato un sito minimale e performante, ottimizzato per SEO e con animazioni fluide.',
    technologies: ['Next.js', 'Framer Motion', 'Tailwind CSS', 'TypeScript'],
    result: 'Aumento del 200% delle richieste di contatto e miglioramento significativo della presenza online.',
    link: '#',
    github: '#',
  },
];

export default function Progetti() {
  return (
    <Layout>
      <PageWatermark label="PROJECTS" className="text-[200px] md:text-[240px]" vertical />
      <section className="relative w-full min-h-screen flex flex-col">
        {/* Spacer sopra header — altezza fissa, come per hero */}
        <div className="h-10 md:h-12 flex-shrink-0" aria-hidden="true" />

        {/* Header — stesso flex dell'hero, max-width leggermente più alta */}
        <div className="w-full flex-shrink-0 flex flex-col items-center relative z-10">
          <div className="w-full max-w-6xl mx-auto px-6 md:px-8 flex flex-col">
            <Header />
          </div>
        </div>

        {/* Content — centrato orizzontalmente e verticalmente, stessa max-width della home */}
        <div className="flex-1 w-full flex flex-col items-center justify-center relative z-10 min-h-0 overflow-y-auto">
          <div className="w-full max-w-5xl mx-auto px-6 md:px-8 flex flex-col flex-shrink-0 pt-12 md:pt-16 pb-20 md:pb-28">
            {/* Header */}
            <div className="mb-16 text-center flex-shrink-0">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">Progetti</h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Una selezione dei progetti che ho sviluppato, mostrando problemi risolti, 
                soluzioni implementate e risultati ottenuti.
              </p>
            </div>

            {/* Projects Grid */}
            <div className="space-y-24">
            {projects.map((project, index) => (
              <AnimatedSection key={project.id} delay={index * 0.2}>
                <article
                  className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-12 items-center`}
                >
                {/* Project Image Placeholder */}
                <div className="flex-1 w-full">
                  <div className="aspect-video bg-surface-elevated rounded-lg border border-border flex items-center justify-center">
                    <span className="text-muted-foreground">Immagine Progetto</span>
                  </div>
                </div>

                {/* Project Content */}
                <div className="flex-1 space-y-6">
                  <div>
                    <h2 className="text-3xl md:text-4xl font-bold mb-3">{project.title}</h2>
                    <p className="text-lg text-muted-foreground">{project.description}</p>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <h3 className="font-semibold mb-2 text-accent">Problema</h3>
                      <p className="text-muted-foreground">{project.problem}</p>
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2 text-accent">Soluzione</h3>
                      <p className="text-muted-foreground">{project.solution}</p>
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2 text-accent">Tecnologie</h3>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1 bg-surface rounded-full text-sm border border-border"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2 text-accent">Risultato</h3>
                      <p className="text-muted-foreground">{project.result}</p>
                    </div>
                  </div>

                  {/* Links */}
                  <div className="flex gap-4 pt-4">
                    {project.link && (
                      <Link
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-6 py-2 bg-primary text-primary-foreground rounded-full font-medium hover:bg-primary/90 transition-colors"
                      >
                        Vedi Progetto
                      </Link>
                    )}
                    {project.github && (
                      <Link
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-6 py-2 border border-border rounded-full font-medium hover:bg-surface transition-colors"
                      >
                        GitHub
                      </Link>
                    )}
                  </div>
                </div>
                </article>
              </AnimatedSection>
            ))}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
