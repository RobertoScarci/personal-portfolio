import Layout from '@/components/Layout';
import Link from 'next/link';
import AnimatedSection from '@/components/AnimatedSection';
import HeroTitle from '@/components/HeroTitle';
import Header from '@/components/Header';
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
      <section className="container mx-auto px-6 py-8 min-h-[calc(100vh-120px)] flex flex-col items-center justify-center relative">
        {/* Subtle glow effect behind content */}
        <div className="absolute inset-0 -z-10 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/5 rounded-full blur-3xl"></div>
        </div>
        <div className="max-w-4xl w-full mx-auto relative z-10">
          {/* Header - Above Hero Title */}
          <AnimatedSection delay={0}>
            <div className="mb-32 md:mb-40">
              <Header />
            </div>
          </AnimatedSection>
          
          {/* Main Heading - Left aligned */}
          <AnimatedSection>
            <HeroTitle />
          </AnimatedSection>

          {/* Introduction Text - Left aligned but centered container */}
          <AnimatedSection delay={0.3}>
            <div className="text-sm md:text-base text-foreground/75 mt-16 md:mt-20 mb-12 leading-[1.85] text-left font-light">
              <p className="mb-10 md:mb-12">
                Il tuo sviluppatore full-stack di fiducia, architetto UX e ingegnere JavaScript.
                Passo le mie giornate (e spesso le notti) dipingendo la tela di Internet con{' '}
                <Link href="/progetti" className="font-semibold text-foreground hover:text-accent transition-all duration-300 relative group">
                  <span className="relative z-10">PROGETTI</span>
                  <span className="absolute inset-0 bg-accent/10 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
                </Link>{' '}
                e righe di codice, trasformando zeri e uno in esperienze immersive e interattive.
              </p>
              <p>
                Appassionato di fotografia e design minimale, trovo bellezza nella semplicità e nell'ordine.
                Quando non sto creando esperienze web curate, puoi trovarmi a leggere{' '}
                <Link href="#" className="font-semibold text-foreground hover:text-accent transition-all duration-300 relative group">
                  <span className="relative z-10">ARTICOLI</span>
                  <span className="absolute inset-0 bg-accent/10 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
                </Link>{' '}
                o ad ascoltare musica, perdendomi nel flusso delle melodie. In ogni caso puoi sempre{' '}
                <Link href="/contatti" className="font-semibold text-foreground hover:text-accent transition-all duration-300 relative group">
                  <span className="relative z-10">CONTATTARMI</span>
                  <span className="absolute inset-0 bg-accent/10 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
                </Link>
                .
              </p>
            </div>
          </AnimatedSection>

          {/* CTA - Left aligned */}
          <AnimatedSection delay={0.4}>
            <div className="text-left mt-12 md:mt-16">
              <Link
                href="/carriera"
                className="group inline-flex items-center gap-2 text-foreground/70 hover:text-foreground transition-all duration-300 font-medium"
              >
                <span className="relative">
                  Scopri la mia storia
                  <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-accent group-hover:w-full transition-all duration-300"></span>
                </span>
                <motion.span
                  className="inline-block"
                  initial={{ x: 0 }}
                  whileHover={{ x: 4 }}
                  transition={{ type: 'spring', stiffness: 400, damping: 25 }}
                >
                  →
                </motion.span>
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </Layout>
  );
}
