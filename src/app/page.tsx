import Layout from '@/components/Layout';
import Link from 'next/link';
import AnimatedSection from '@/components/AnimatedSection';
import HeroTitle from '@/components/HeroTitle';
import Header from '@/components/Header';
import HeroCTA from '@/components/HeroCTA';
import SocialIcons from '@/components/SocialIcons';
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
        className="relative w-full min-h-screen flex flex-col"
      >
        {/* Subtle glow effect behind content - Enhanced depth */}
        <div className="absolute inset-0 -z-10 pointer-events-none overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent/6 rounded-full blur-3xl opacity-60"></div>
          <div className="absolute top-1/3 right-1/4 w-[400px] h-[400px] bg-accent/3 rounded-full blur-2xl opacity-40"></div>
        </div>
        
        {/* Decorative Initials - More subtle */}
        <div className="absolute inset-0 -z-10 pointer-events-none select-none overflow-hidden">
          <div 
            className="absolute text-[700px] font-black text-foreground leading-none"
            style={{
              left: '-12%',
              bottom: '8%',
              opacity: 0.025,
              filter: 'blur(100px)',
              fontFamily: 'var(--font-geist-sans)',
              letterSpacing: '-0.05em',
            }}
          >
            RS
          </div>
        </div>
        
        {/* Header - Top section with consistent max-width */}
        <div className="w-full relative z-50 flex-shrink-0">
          <Header />
        </div>

        {/* Main Content - Centered vertically and horizontally with increased max-width */}
        <div className="flex-1 flex items-center justify-center relative z-10">
          <div className="w-full max-w-7xl mx-auto px-6 md:px-8">
            <div className="flex flex-col w-full">
              {/* Main Heading - Enhanced spacing and typography */}
              <div className="text-left mb-20 md:mb-24">
                <HeroTitle />
              </div>

              {/* Introduction Text - Improved line-height and spacing with increased width */}
              <AnimatedSection delay={0.3}>
                <div className="text-sm md:text-base lg:text-lg text-foreground/80 mb-16 md:mb-20 leading-[1.85] text-left font-light max-w-4xl">
                  <p className="mb-10 md:mb-12">
                    Il tuo sviluppatore full-stack di fiducia, architetto UX e ingegnere JavaScript.
                    Passo le mie giornate (e spesso le notti) dipingendo la tela di Internet con{' '}
                    <Link 
                      href="/progetti" 
                      className="font-semibold text-foreground hover:text-accent transition-colors duration-300 underline-offset-4 hover:underline"
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
                      className="font-semibold text-foreground hover:text-accent transition-colors duration-300 underline-offset-4 hover:underline"
                    >
                      ARTICOLI
                    </Link>{' '}
                    o ad ascoltare musica, perdendomi nel flusso delle melodie. In ogni caso puoi sempre{' '}
                    <Link 
                      href="/contatti" 
                      className="font-semibold text-foreground hover:text-accent transition-colors duration-300 underline-offset-4 hover:underline"
                    >
                      CONTATTARMI
                    </Link>
                    .
                  </p>
                </div>
              </AnimatedSection>

              {/* CTA - Enhanced spacing and visual hierarchy */}
              <AnimatedSection delay={0.4}>
                <div className="flex justify-start mb-16 md:mb-20">
                  <HeroCTA />
                </div>
              </AnimatedSection>

              {/* Social Icons - Better spacing */}
              <AnimatedSection delay={0.5}>
                <div className="flex justify-start items-center gap-6 md:gap-8">
                  <SocialIcons />
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
