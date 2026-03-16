import Layout from '@/components/Layout';
import Link from 'next/link';
import AnimatedSection from '@/components/AnimatedSection';
import Header from '@/components/Header';
import PageWatermark from '@/components/PageWatermark';
import HeroCTA from '@/components/HeroCTA';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Home (EN)',
  description:
    'Roberto Scarci — Frontend developer focused on fast products built with Next.js, React and AI.',
  openGraph: {
    title: 'Roberto Scarci · Portfolio (EN)',
    description:
      'Frontend developer building fast web products with Next.js, React and AI. Selected projects and contact.',
  },
};

export default function HomeEn() {
  return (
    <Layout>
      <PageWatermark label="RS" className="text-[260px] md:text-[300px]" />
      <section className="relative w-full min-h-screen flex flex-col">
        <div className="absolute inset-0 -z-10 pointer-events-none overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] bg-accent/[0.07] rounded-full blur-3xl" />
          <div className="absolute top-1/3 right-1/4 w-[500px] h-[500px] bg-accent/[0.04] rounded-full blur-2xl" />
        </div>

        <div className="h-10 md:h-12 flex-shrink-0" aria-hidden="true" />

        <AnimatedSection delay={0} className="w-full flex-shrink-0 flex flex-col items-center relative z-10">
          <div className="w-full max-w-6xl mx-auto px-6 md:px-8 flex flex-col">
            <Header />
          </div>
        </AnimatedSection>

        <div className="flex-1 w-full flex flex-col items-center justify-center relative z-10 min-h-0 overflow-y-auto">
          <div className="w-full max-w-5xl mx-auto px-6 md:px-8 flex flex-col flex-shrink-0 pt-16 md:pt-20 pb-20 md:pb-28">
            <AnimatedSection delay={0.3} className="text-left flex-shrink-0">
              <p className="text-sm uppercase tracking-[0.32em] text-foreground/60 mb-4">
                Frontend · Next.js · AI
              </p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight leading-tight">
                I help you ship fast
                <br />
                web products that feel sharp.
              </h1>
            </AnimatedSection>

            <div className="h-4 md:h-5 flex-shrink-0" aria-hidden="true" />

            <AnimatedSection delay={0.7}>
              <p className="text-base md:text-lg text-foreground/80 max-w-xl leading-relaxed">
                I&apos;m a frontend developer from Italy, working with React, Next.js and a bit of AI to help
                you move faster without sacrificing quality. Below you can find a few selected projects and how
                I work.
              </p>
            </AnimatedSection>

            <div className="h-3 md:h-4 flex-shrink-0" aria-hidden="true" />

            <AnimatedSection delay={1.1} className="flex-shrink-0">
              <div className="mb-4 md:mb-6">
                <HeroCTA primaryHref="/en/contact" secondaryHref="/en/projects" />
              </div>
            </AnimatedSection>

            <div className="h-4 md:h-6 flex-shrink-0" aria-hidden="true" />

            <AnimatedSection delay={1.3} className="flex-shrink-0">
              <div className="space-y-3 text-sm md:text-base text-foreground/70">
                <p className="font-medium text-foreground">
                  A few highlighted projects (case studies in Italian):
                </p>
                <ul className="space-y-1">
                  <li>
                    <Link
                      href="/progetti/1"
                      className="underline decoration-accent/70 underline-offset-4 hover:decoration-accent transition-colors"
                    >
                      Airbnb replica — team project (Boolean)
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/progetti/2"
                      className="underline decoration-accent/70 underline-offset-4 hover:decoration-accent transition-colors"
                    >
                      Netflix clone — Vue & API integration
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/progetti/5"
                      className="underline decoration-accent/70 underline-offset-4 hover:decoration-accent transition-colors"
                    >
                      Agency landing page — UI & conversions
                    </Link>
                  </li>
                </ul>
                <p className="text-xs md:text-sm text-foreground/60">
                  Full case studies are written in Italian, but the structure of the work and screenshots are
                  easy to follow.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </Layout>
  );
}

