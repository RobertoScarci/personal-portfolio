import Layout from '@/components/Layout';
import AnimatedSection from '@/components/AnimatedSection';
import HeroTitle from '@/components/HeroTitle';
import HeroCTA from '@/components/HeroCTA';
import SocialIcons from '@/components/SocialIcons';
import HeroText from '@/components/HeroText';
import PageShell from '@/components/PageShell';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Home',
  description: 'Roberto Scarci — Sviluppatore frontend Next.js e React. Portfolio developer da Taranto, Puglia. Progetti, carriera e contatti.',
  openGraph: {
    title: 'Roberto Scarci · Portfolio',
    description: 'Sviluppatore frontend Next.js e React. Portfolio developer da Taranto. Progetti, carriera e contatti.',
  },
};

export default function Home() {
  return (
    <Layout>
      <PageShell
        watermarkLabel="RS"
        watermarkClassName="text-[280px] md:text-[320px]"
        background={
          <>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] bg-accent/[0.07] rounded-full blur-3xl" />
            <div className="absolute top-1/3 right-1/4 w-[500px] h-[500px] bg-accent/[0.04] rounded-full blur-2xl" />
          </>
        }
        headerReveal
        headerRevealDelay={0}
        headerSpacerClassName="h-0 flex-shrink-0"
        contentWrapperClassName="flex-1 w-full flex flex-col items-center justify-center relative z-10 min-h-0 overflow-y-auto"
        contentContainerClassName="w-full max-w-5xl mx-auto px-6 md:px-8 flex flex-col flex-shrink-0 pt-16 md:pt-20 pb-20 md:pb-28"
        includeScrollHint
      >
        {/* HeroTitle — delay dopo header (0.3s) */}
        <AnimatedSection delay={0.3} className="text-left flex-shrink-0">
          <HeroTitle />
        </AnimatedSection>
        <div className="h-4 md:h-5 flex-shrink-0" aria-hidden="true" />

        {/* Testi — delay dopo herotitle (0.7s = 0.3 + 0.4) con animazione barra di caricamento */}
        <HeroText delay={0.7} />

        <div className="h-3 md:h-4 flex-shrink-0" aria-hidden="true" />

        {/* CTA — delay dopo testi (1.1s = 0.7 + 0.4) */}
        <AnimatedSection delay={1.1} className="flex-shrink-0">
          <div className="mb-4 md:mb-6">
            <HeroCTA />
          </div>
        </AnimatedSection>

        <div className="h-4 md:h-6 flex-shrink-0" aria-hidden="true" />
        <div className="flex justify-start items-center gap-8 md:gap-10 flex-shrink-0">
          <SocialIcons />
        </div>
      </PageShell>
    </Layout>
  );
}
