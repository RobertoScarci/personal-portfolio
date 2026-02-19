import Layout from '@/components/Layout';
import Link from 'next/link';
import PageWatermark from '@/components/PageWatermark';
import Header from '@/components/Header';
import { getProjectById, projects } from '@/lib/projects';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';

interface Props {
  params: Promise<{ id: string }>;
}

export function generateStaticParams() {
  return projects.map((p) => ({ id: p.id }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const project = getProjectById(id);
  if (!project) return { title: 'Progetto non trovato' };
  return {
    title: project.title,
    description: project.longDescription ?? project.description,
  };
}

export default async function ProgettoDetailPage({ params }: Props) {
  const { id } = await params;
  const project = getProjectById(id);

  if (!project) {
    notFound();
  }

  const description = project.longDescription ?? project.description;
  const howCreated = project.howItWasCreated;
  const screenshots = project.screenshots ?? [];

  return (
    <Layout>
      <PageWatermark label="PROJECT" className="text-[120px] md:text-[140px]" vertical />
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
            {/* Breadcrumb / back */}
            <nav className="mb-6 md:mb-8" aria-label="Navigazione">
              <Link
                href="/progetti"
                className="text-sm text-[#a6acb7] hover:text-foreground transition-colors inline-flex items-center gap-2"
              >
                ← Torna ai progetti
              </Link>
            </nav>

            {/* Hero: titolo + immagine principale */}
            <header className="mb-10 md:mb-14">
              <h1 className="text-3xl md:text-5xl font-bold tracking-[0.04em] mb-4">
                {project.title}
              </h1>
              <p className="text-lg text-[#a6acb7] mb-6">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-lg bg-[#3e424b] px-4 py-2 text-sm font-medium text-white"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </header>

            {/* Immagine principale / copertina */}
            <div className="rounded-2xl overflow-hidden border border-border/70 bg-surface/40 shadow-xl mb-10 md:mb-14">
              <div
                className="aspect-video w-full bg-cover bg-center"
                style={{ backgroundImage: `url(${project.image})` }}
              />
            </div>

            {/* Descrizione */}
            <section className="mb-10 md:mb-14" aria-labelledby="desc-heading">
              <h2 id="desc-heading" className="text-xl md:text-2xl font-bold mb-4">
                Il progetto
              </h2>
              <p className="text-[#a6acb7] leading-relaxed whitespace-pre-line">
                {description}
              </p>
            </section>

            {/* Come è stato creato */}
            {howCreated && (
              <section className="mb-10 md:mb-14" aria-labelledby="how-heading">
                <h2 id="how-heading" className="text-xl md:text-2xl font-bold mb-4">
                  Come è stato creato
                </h2>
                <p className="text-[#a6acb7] leading-relaxed whitespace-pre-line">
                  {howCreated}
                </p>
              </section>
            )}

            {/* Linguaggi e tecnologie (riepilogo) */}
            <section className="mb-10 md:mb-14" aria-labelledby="tech-heading">
              <h2 id="tech-heading" className="text-xl md:text-2xl font-bold mb-4">
                Linguaggi e tecnologie
              </h2>
              <ul className="flex flex-wrap gap-3">
                {project.technologies.map((tech) => (
                  <li
                    key={tech}
                    className="rounded-lg border border-border/70 bg-surface/40 px-4 py-2 text-sm text-foreground"
                  >
                    {tech}
                  </li>
                ))}
              </ul>
            </section>

            {/* Galleria screenshot del sito (placeholder se vuota) */}
            <section className="mb-10" aria-labelledby="screens-heading">
              <h2 id="screens-heading" className="text-xl md:text-2xl font-bold mb-6">
                Immagini del sito
              </h2>
              {screenshots.length > 0 ? (
                <div className="grid gap-4 sm:grid-cols-2">
                  {screenshots.map((src, i) => (
                    <div
                      key={i}
                      className="rounded-xl overflow-hidden border border-border/70 bg-surface/40"
                    >
                      <img
                        src={src}
                        alt={`Screenshot ${i + 1} di ${project.title}`}
                        className="w-full h-auto object-cover"
                      />
                    </div>
                  ))}
                </div>
              ) : (
                <div className="rounded-2xl border border-dashed border-border/70 bg-surface/20 flex flex-col items-center justify-center py-16 px-6 text-center">
                  <p className="text-[#a6acb7] text-sm">
                    Le immagini del progetto saranno inserite qui.
                  </p>
                </div>
              )}
            </section>

            {/* Link esterni */}
            <div className="flex flex-wrap gap-3 pt-4">
              {project.link && project.link !== '#' && (
                <Link
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center rounded-full bg-[#3e424b] px-5 py-2.5 text-sm font-medium text-white hover:bg-[#4a4f5a] transition-colors"
                >
                  Vai al sito
                </Link>
              )}
              {project.github && project.github !== '#' && (
                <Link
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center rounded-full border border-border/70 px-5 py-2.5 text-sm font-medium text-foreground hover:bg-surface/40 transition-colors"
                >
                  Codice su GitHub
                </Link>
              )}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
