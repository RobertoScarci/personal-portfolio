import Layout from '@/components/Layout';
import Header from '@/components/Header';
import PageWatermark from '@/components/PageWatermark';
import ScrollRevealSection from '@/components/ScrollRevealSection';
import Link from 'next/link';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getPostBySlug, posts } from '@/lib/posts';

interface Props {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return { title: 'Articolo non trovato' };

  return {
    title: post.title,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const paragraphs = post.content.split('\n\n');

  return (
    <Layout>
      <PageWatermark label="NOTE" className="text-[180px] md:text-[220px]" />
      <section className="relative w-full min-h-screen flex flex-col">
        <div className="h-10 md:h-12 flex-shrink-0" aria-hidden="true" />

        <div className="w-full flex-shrink-0 flex flex-col items-center relative z-10">
          <div className="w-full max-w-6xl mx-auto px-6 md:px-8 flex flex-col">
            <Header />
          </div>
        </div>

        <div className="h-14 md:h-24 lg:h-32 flex-shrink-0" aria-hidden="true" />

        <div className="flex-1 w-full flex flex-col items-center justify-start relative z-10 min-h-0 overflow-y-auto">
          <div className="w-full max-w-3xl mx-auto px-6 md:px-8 flex flex-col flex-shrink-0 pt-4 md:pt-6 pb-20 md:pb-28">
            <ScrollRevealSection delay={0}>
              <nav className="mb-6 md:mb-8" aria-label="Navigazione">
                <Link
                  href="/blog"
                  className="text-sm text-[#a6acb7] hover:text-foreground transition-colors inline-flex items-center gap-2"
                >
                  ← Torna alle note
                </Link>
              </nav>
            </ScrollRevealSection>

            <ScrollRevealSection delay={0.05}>
              <header className="mb-8 md:mb-10">
                <h1 className="text-2xl md:text-3xl font-bold tracking-[0.04em] mb-2">
                  {post.title}
                </h1>
                <p className="text-xs uppercase tracking-[0.16em] text-foreground/55 mb-3">
                  {new Date(post.date).toLocaleDateString('it-IT', {
                    year: 'numeric',
                    month: 'short',
                    day: '2-digit',
                  })}
                </p>
                {post.tags.length > 0 && (
                  <div className="flex flex-wrap gap-1.5 mt-1">
                    {post.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-border/60 px-2.5 py-1 text-[11px] uppercase tracking-[0.16em] text-foreground/55"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </header>
            </ScrollRevealSection>

            <ScrollRevealSection delay={0.1}>
              <article className="prose prose-invert prose-sm md:prose-base max-w-none">
                {paragraphs.map((block, index) => (
                  <p key={index} className="text-foreground/80 leading-relaxed mb-4 whitespace-pre-line">
                    {block}
                  </p>
                ))}
              </article>
            </ScrollRevealSection>
          </div>
        </div>
      </section>
    </Layout>
  );
}

