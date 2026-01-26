import Layout from '@/components/Layout';
import Link from 'next/link';
import AnimatedSection from '@/components/AnimatedSection';
import HeroTitle from '@/components/HeroTitle';
import Header from '@/components/Header';
import HeroCTA from '@/components/HeroCTA';
import SocialIcons from '@/components/SocialIcons';
import PageWatermark from '@/components/PageWatermark';
import HeroText from '@/components/HeroText';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Home',
  description: 'Sviluppatore full-stack freelance, architetto UX e ingegnere JavaScript. Trasformo idee in esperienze digitali immersive.',
};

export default function Home() {
  return (
    <Layout>
      <PageWatermark label="RS" className="text-[280px] md:text-[320px]" />
      <section className="relative w-full min-h-screen flex flex-col">
        {/* Background */}
        <div className="absolute inset-0 -z-10 pointer-events-none overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] bg-accent/[0.07] rounded-full blur-3xl" />
          <div className="absolute top-1/3 right-1/4 w-[500px] h-[500px] bg-accent/[0.04] rounded-full blur-2xl" />
        </div>

        {/* Spacer sopra header — altezza fissa, come per hero */}
        <div className="h-10 md:h-12 flex-shrink-0" aria-hidden="true" />

        {/* Header — stesso flex dell'hero, max-width leggermente più alta */}
        <AnimatedSection delay={0} className="w-full flex-shrink-0 flex flex-col items-center relative z-10">
          <div className="w-full max-w-6xl mx-auto px-6 md:px-8 flex flex-col">
            <Header />
          </div>
        </AnimatedSection>

        {/* Hero content — centrato orizzontalmente e verticalmente */}
        <div className="flex-1 w-full flex flex-col items-center justify-center relative z-10 min-h-0 overflow-y-auto">
          <div className="w-full max-w-5xl mx-auto px-6 md:px-8 flex flex-col flex-shrink-0 pt-12 md:pt-16 pb-20 md:pb-28">
            {/* HeroTitle — delay dopo header (0.3s) */}
            <AnimatedSection delay={0.3} className="text-left flex-shrink-0">
              <HeroTitle />
            </AnimatedSection>
            <div className="h-6 md:h-8 flex-shrink-0" aria-hidden="true" />

            {/* Testi — delay dopo herotitle (0.7s = 0.3 + 0.4) con animazione barra di caricamento */}
            <HeroText delay={0.7} />

            <div className="h-8 md:h-10 flex-shrink-0" aria-hidden="true" />

            {/* CTA — delay dopo testi (1.1s = 0.7 + 0.4) */}
            <AnimatedSection delay={1.1} className="flex-shrink-0">
              <div className="mb-16 md:mb-20">
                <HeroCTA />
              </div>
            </AnimatedSection>

            <div className="h-10 md:h-14 flex-shrink-0" aria-hidden="true" />
            <div className="flex justify-start items-center gap-8 md:gap-10 flex-shrink-0">
              <SocialIcons />
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
