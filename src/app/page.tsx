import Layout from '@/components/Layout';
import Link from 'next/link';
import AnimatedSection from '@/components/AnimatedSection';
import HeroTitle from '@/components/HeroTitle';
import Header from '@/components/Header';
import HeroCTA from '@/components/HeroCTA';
import SocialIcons from '@/components/SocialIcons';
import { motion } from 'framer-motion';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Home',
  description: 'Sviluppatore full-stack freelance, architetto UX e ingegnere JavaScript. Trasformo idee in esperienze digitali immersive.',
};

export default function Home() {
  return (
    <Layout>
      {/* Hero Section */}
      <section 
        className="container mx-auto px-6 flex flex-col items-center justify-center relative"
        style={{
          minHeight: '100vh',
          paddingTop: 'clamp(8rem, 12vh, 14rem)',
          paddingBottom: 'clamp(4rem, 8vh, 8rem)',
        }}
      >
        {/* Subtle glow effect behind content */}
        <div className="absolute inset-0 -z-10 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/5 rounded-full blur-3xl"></div>
        </div>
        
        {/* Decorative Initials */}
        <div className="absolute inset-0 -z-10 pointer-events-none select-none overflow-hidden">
          <div 
            className="absolute text-[600px] font-black text-foreground leading-none"
            style={{
              left: '-15%',
              bottom: '10%',
              opacity: 0.03,
              filter: 'blur(80px)',
              fontFamily: 'var(--font-geist-sans)',
              letterSpacing: '-0.05em',
            }}
          >
            RS
          </div>
        </div>
        
        <div className="max-w-[900px] w-full mx-auto relative z-10">
          {/* Header - Above Hero Title */}
          <AnimatedSection delay={0}>
            <div className="mb-24 md:mb-32">
              <Header />
            </div>
          </AnimatedSection>
          
          {/* Main Heading - Centered */}
          <div className="text-center mb-16 md:mb-20">
            <HeroTitle />
          </div>

          {/* Introduction Text - Centered container */}
          <AnimatedSection delay={0.4}>
            <div className="text-sm md:text-base text-foreground/75 mb-16 md:mb-20 leading-[2.1] text-center font-light max-w-[700px] mx-auto">
              <p className="mb-8 md:mb-10">
                Il tuo sviluppatore full-stack di fiducia, architetto UX e ingegnere JavaScript.
                Passo le mie giornate (e spesso le notti) dipingendo la tela di Internet con{' '}
                <Link 
                  href="/progetti" 
                  className="font-semibold text-foreground hover:text-accent transition-colors duration-300"
                >
                  PROGETTI
                </Link>{' '}
                e righe di codice, trasformando zeri e uno in esperienze immersive e interattive.
              </p>
              <p>
                Appassionato di fotografia e design minimale, trovo bellezza nella semplicità e nell'ordine.
                Quando non sto creando esperienze web curate, puoi trovarmi a leggere{' '}
                <Link 
                  href="#" 
                  className="font-semibold text-foreground hover:text-accent transition-colors duration-300"
                >
                  ARTICOLI
                </Link>{' '}
                o ad ascoltare musica, perdendomi nel flusso delle melodie. In ogni caso puoi sempre{' '}
                <Link 
                  href="/contatti" 
                  className="font-semibold text-foreground hover:text-accent transition-colors duration-300"
                >
                  CONTATTARMI
                </Link>
                .
              </p>
            </div>
          </AnimatedSection>

          {/* CTA - Centered */}
          <AnimatedSection delay={0.5}>
            <div className="flex justify-center mb-12 md:mb-16">
              <HeroCTA />
            </div>
          </AnimatedSection>

          {/* Social Icons - Centered below CTA */}
          <AnimatedSection delay={0.6}>
            <div className="flex justify-center items-center gap-6">
              <SocialIcons />
            </div>
          </AnimatedSection>
        </div>
      </section>
    </Layout>
  );
}
