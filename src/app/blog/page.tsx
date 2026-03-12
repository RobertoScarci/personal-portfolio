'use client';

import Layout from '@/components/Layout';
import Header from '@/components/Header';
import PageWatermark from '@/components/PageWatermark';
import ScrollRevealSection from '@/components/ScrollRevealSection';
import Link from 'next/link';
import type { Metadata } from 'next';
import { posts } from '@/lib/posts';
import { trackEvent } from '@/lib/analytics';

export const metadata: Metadata = {
  title: 'Blog',
  description: 'Note brevi su frontend, Next.js, AI e percorso personale di sviluppo.',
};

export default function BlogPage() {
  const sorted = [...posts].sort((a, b) => (a.date < b.date ? 1 : -1));

  return (
    <Layout>
      <PageWatermark label="BLOG" className="text-[200px] md:text-[240px]" />
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
              <section
                className="block"
                style={{ paddingBottom: 'clamp(2rem, 4vw, 2.75rem)' }}
                aria-labelledby="blog-title"
              >
                <h1 id="blog-title" className="text-3xl md:text-5xl font-bold tracking-[0.04em]">
                  Notes.
                </h1>
                <p className="mt-3 text-sm md:text-base text-foreground/70 max-w-xl">
                  Appunti veloci su quello che sto imparando: frontend, Next.js, AI e lezioni dai
                  progetti che costruisco.
                </p>
              </section>
            </ScrollRevealSection>

            <ScrollRevealSection delay={0.05}>
              <section className="block" aria-label="Elenco articoli">
                <ul className="space-y-5 md:space-y-6">
                  {sorted.map((post) => (
                    <li key={post.slug} className="border border-border/60 rounded-2xl bg-surface/20 px-5 py-4 md:px-6 md:py-5">
                      <Link
                        href={`/blog/${post.slug}`}
                        className="block group"
                        aria-labelledby={`post-${post.slug}`}
                        onClick={() =>
                          trackEvent('blog_post_open', {
                            slug: post.slug,
                            title: post.title,
                          })
                        }
                      >
                        <div className="flex items-baseline justify-between gap-4 mb-2">
                          <h2
                            id={`post-${post.slug}`}
                            className="text-base md:text-lg font-semibold group-hover:text-accent transition-colors"
                          >
                            {post.title}
                          </h2>
                          <span className="text-[11px] uppercase tracking-[0.16em] text-foreground/50">
                            {new Date(post.date).toLocaleDateString('it-IT', {
                              year: 'numeric',
                              month: 'short',
                              day: '2-digit',
                            })}
                          </span>
                        </div>
                        <p className="text-sm text-foreground/70 mb-2">{post.excerpt}</p>
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
                      </Link>
                    </li>
                  ))}
                </ul>
              </section>
            </ScrollRevealSection>
          </div>
        </div>
      </section>
    </Layout>
  );
}

