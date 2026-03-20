import Layout from '@/components/Layout';
import Link from 'next/link';
import Image from 'next/image';
import { getProjectById, projects } from '@/lib/projects';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import PageShell from '@/components/PageShell';

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
      <PageShell
        watermarkLabel="PROJECT"
        watermarkClassName="text-[120px] md:text-[140px]"
        watermarkVertical
        contentContainerClassName="contents"
      >
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

            {/* Hero: titolo + caption sintetica */}
            <header className="mb-10 md:mb-14">
              <h1 className="text-3xl md:text-5xl font-bold tracking-[0.04em] mb-3">
                {project.title}
              </h1>
              <p className="text-sm uppercase tracking-[0.18em] text-foreground/55 mb-3">
                {project.category === 'Projects' && 'Progetto web'}
                {project.category === 'Dev Tools' && 'Dev tool'}
                {project.category === 'Open Source' && 'Open source'}
                {project.category === 'Designs' && 'Design & UI'}
              </p>
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
            <div className="relative aspect-video w-full rounded-2xl overflow-hidden border border-border/70 bg-surface/40 shadow-xl mb-10 md:mb-14">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 896px"
                priority
              />
            </div>

            {/* Case study layout (se disponibile) oppure struttura standard */}
            {project.caseStudy ? (
              <>
                <section className="mb-8 md:mb-10" aria-labelledby="cs-problem-heading">
                  <h2 id="cs-problem-heading" className="text-xl md:text-2xl font-bold mb-3">
                    Problema e contesto
                  </h2>
                  <p className="text-[#a6acb7] leading-relaxed whitespace-pre-line">
                    {project.caseStudy.problem}
                  </p>
                </section>
                {project.caseStudy.constraints && (
                  <section className="mb-8 md:mb-10" aria-labelledby="cs-constraints-heading">
                    <h2 id="cs-constraints-heading" className="text-xl md:text-2xl font-bold mb-3">
                      Vincoli e scelte
                    </h2>
                    <p className="text-[#a6acb7] leading-relaxed whitespace-pre-line">
                      {project.caseStudy.constraints}
                    </p>
                  </section>
                )}
                <section className="mb-8 md:mb-10" aria-labelledby="cs-solution-heading">
                  <h2 id="cs-solution-heading" className="text-xl md:text-2xl font-bold mb-3">
                    Soluzione
                  </h2>
                  <p className="text-[#a6acb7] leading-relaxed whitespace-pre-line">
                    {project.caseStudy.solution}
                  </p>
                </section>
                {project.caseStudy.result && (
                  <section className="mb-8 md:mb-10" aria-labelledby="cs-result-heading">
                    <h2 id="cs-result-heading" className="text-xl md:text-2xl font-bold mb-3">
                      Risultato
                    </h2>
                    <p className="text-[#a6acb7] leading-relaxed whitespace-pre-line">
                      {project.caseStudy.result}
                    </p>
                  </section>
                )}
                {project.caseStudy.technicalChallenge && (
                  <section
                    className="mb-10 md:mb-14 rounded-2xl border border-border/70 bg-surface/30 px-5 py-4"
                    aria-labelledby="cs-challenge-heading"
                  >
                    <h2 id="cs-challenge-heading" className="text-sm md:text-base font-semibold mb-2">
                      Sfida tecnica
                    </h2>
                    <p className="text-[#a6acb7] text-sm leading-relaxed whitespace-pre-line">
                      {project.caseStudy.technicalChallenge}
                    </p>
                  </section>
                )}
              </>
            ) : (
              <>
                {/* Contesto & obiettivo (descrizione principale) */}
                <section className="mb-10 md:mb-14" aria-labelledby="desc-heading">
                  <h2 id="desc-heading" className="text-xl md:text-2xl font-bold mb-4">
                    Contesto e obiettivo
                  </h2>
                  <p className="text-[#a6acb7] leading-relaxed whitespace-pre-line">
                    {description}
                  </p>
                </section>

                {/* Processo & soluzione tecnica */}
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
              </>
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
                      className="relative aspect-video rounded-xl overflow-hidden border border-border/70 bg-surface/40"
                    >
                      <Image
                        src={src}
                        alt={`Screenshot ${i + 1} di ${project.title}`}
                        fill
                        className="object-cover"
                        sizes="(max-width: 640px) 100vw, 50vw"
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
      </PageShell>
    </Layout>
  );
}
