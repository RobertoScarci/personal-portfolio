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
  technologies: string[];
  category: 'Projects' | 'Dev Tools' | 'Open Source' | 'Designs';
  image: string;
  link?: string;
  github?: string;
}

const projects: Project[] = [
  {
    id: '1',
    title: 'E-Commerce Platform',
    description: 'Piattaforma e-commerce completa con gestione prodotti, carrello e checkout.',
    category: 'Projects',
    technologies: ['Next.js', 'TypeScript', 'PostgreSQL', 'Stripe', 'Tailwind CSS'],
    image:
      'https://images.pexels.com/photos/7947719/pexels-photo-7947719.jpeg?auto=compress&cs=tinysrgb&w=1600',
    link: '#',
    github: '#',
  },
  {
    id: '2',
    title: 'SaaS Dashboard',
    description: 'Dashboard analytics per startup con visualizzazioni dati in tempo reale.',
    category: 'Dev Tools',
    technologies: ['React', 'TypeScript', 'Chart.js', 'Node.js', 'MongoDB'],
    image:
      'https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=1600',
    link: '#',
    github: '#',
  },
  {
    id: '3',
    title: 'Portfolio Website',
    description: 'Sito portfolio moderno e responsive per un designer freelance.',
    category: 'Designs',
    technologies: ['Next.js', 'Framer Motion', 'Tailwind CSS', 'TypeScript'],
    image:
      'https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=1600',
    link: '#',
    github: '#',
  },
];

export default function Progetti() {
  return (
    <Layout>
      <PageWatermark label="PROJECTS" className="text-[160px] md:text-[180px]" vertical />
      <section className="relative w-full min-h-screen flex flex-col">
        {/* Spacer sopra header — altezza fissa, come per hero */}
        <div className="h-10 md:h-12 flex-shrink-0" aria-hidden="true" />

        {/* Header — contenitore dedicato (stessa struttura di About) */}
        <div className="w-full flex-shrink-0 flex flex-col items-center relative z-10">
          <div className="w-full max-w-6xl mx-auto px-6 md:px-8 flex flex-col">
            <Header />
          </div>
        </div>

        {/* Spacer tra header e contenuto — come About */}
        <div className="h-14 md:h-24 lg:h-32 flex-shrink-0" aria-hidden="true" />

        {/* Content — max-w-4xl (più stretto), padding come About */}
        <div className="flex-1 w-full flex flex-col items-center justify-start relative z-10 min-h-0 overflow-y-auto">
          <div className="w-full max-w-4xl mx-auto px-6 md:px-8 flex flex-col flex-shrink-0 pt-4 md:pt-6 pb-20 md:pb-28">
            {/* Solo il titolo "Projects." — left-aligned */}
            <section
              className="block"
              style={{ paddingBottom: 'clamp(2rem, 4vw, 2.75rem)' }}
              aria-labelledby="projects-title"
            >
              <h1 id="projects-title" className="text-3xl md:text-5xl font-bold tracking-[0.04em]">
                Projects.
              </h1>
            </section>

            {/* Resto della sezione centrato: sottotitolo, filtri, griglia */}
            <div className="flex flex-col items-center w-full">
              <p className="text-center text-base md:text-lg text-muted-foreground max-w-2xl">
                Una selezione di progetti e sperimentazioni. Al passaggio del mouse ogni card
                mostra una mini anteprima.
              </p>

              {/* Navbar sezioni: grafica reference — barra scura, All = pill attiva, altri = testo grigio */}
              <nav
                className="mt-6 flex flex-wrap items-center justify-center gap-5 md:gap-6 rounded-full bg-[#252830] px-4 py-2 border border-border/40"
                aria-label="Filtri progetti"
              >
                {['All', 'Projects', 'Dev Tools', 'Open Source', 'Designs'].map((tab) => (
                  <button
                    key={tab}
                    type="button"
                    className={
                      tab === 'All'
                        ? 'rounded-full bg-[#3e424b] px-4 py-2 text-sm font-semibold text-white'
                        : 'text-sm text-[#a6acb7] hover:text-foreground/90 transition-colors'
                    }
                  >
                    {tab}
                  </button>
                ))}
              </nav>

              {/* Griglia progetti — card più compatte, centrata */}
              <section
                className="block w-full"
                style={{ paddingTop: 'clamp(2rem, 4vw, 2.75rem)' }}
                aria-label="Elenco progetti"
              >
                <div className="grid gap-6 md:gap-8 lg:grid-cols-2">
                {projects.map((project, index) => (
                  <AnimatedSection key={project.id} delay={index * 0.12}>
                    <article className="group relative flex flex-col overflow-hidden rounded-2xl border border-border/70 bg-surface/40 shadow-[0_20px_60px_rgba(0,0,0,0.5)] backdrop-blur-sm">
                      {/* Preview image con animazione hover */}
                      <div className="relative aspect-[16/9] overflow-hidden">
                        <div
                          className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110 group-hover:translate-y-[-4%]"
                          style={{ backgroundImage: `url(${project.image})` }}
                        />
                        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/80 via-background/10 to-transparent opacity-90" />
                      </div>

                      <div className="relative flex flex-col gap-3 p-4 md:p-5">
                        <div className="flex items-center justify-between gap-2">
                          <span className="text-[10px] uppercase tracking-[0.12em] text-foreground/60">
                            {project.category}
                          </span>
                          {project.link && (
                            <span className="text-[10px] text-foreground/50">Preview</span>
                          )}
                        </div>

                        <div>
                          <h2 className="text-lg md:text-xl font-semibold mb-0.5">{project.title}</h2>
                          <p className="text-xs md:text-sm text-muted-foreground leading-relaxed line-clamp-2">
                            {project.description}
                          </p>
                        </div>

                        <div className="flex flex-wrap gap-1.5">
                          {project.technologies.slice(0, 3).map((tech) => (
                            <span
                              key={tech}
                              className="px-2.5 py-0.5 rounded-full border border-border/80 bg-surface/60 text-[11px] text-foreground/80"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>

                        <div className="flex gap-2 pt-1">
                          {project.link && (
                            <Link
                              href={project.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center rounded-full bg-foreground px-3 py-1.5 text-xs font-medium text-background hover:bg-accent hover:text-foreground transition-colors"
                            >
                              Apri progetto
                            </Link>
                          )}
                          {project.github && (
                            <Link
                              href={project.github}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center rounded-full border border-border px-3 py-1.5 text-xs font-medium text-foreground/80 hover:bg-surface/70 transition-colors"
                            >
                              Codice
                            </Link>
                          )}
                        </div>
                      </div>
                    </article>
                  </AnimatedSection>
                ))}
              </div>
            </section>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
