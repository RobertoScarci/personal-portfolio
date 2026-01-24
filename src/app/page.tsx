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
      <section className="relative w-full min-h-screen flex flex-col">
        {/* Background */}
        <div className="absolute inset-0 -z-10 pointer-events-none overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] bg-accent/[0.07] rounded-full blur-3xl" />
          <div className="absolute top-1/3 right-1/4 w-[500px] h-[500px] bg-accent/[0.04] rounded-full blur-2xl" />
        </div>
        <div className="absolute inset-0 -z-10 pointer-events-none select-none overflow-hidden">
          <div className="hero-watermark absolute text-[700px] font-black text-foreground leading-none">
            RS
          </div>
        </div>

        {/* Header — stesso flex dell'hero, max-width leggermente più alta */}
        <div className="w-full flex-shrink-0 flex flex-col items-center relative z-10 pt-6 md:pt-8">
          <div className="w-full max-w-6xl mx-auto px-6 md:px-8 flex flex-col">
            <Header />
          </div>
        </div>

        {/* Hero content — centrato orizzontalmente e verticalmente */}
        <div className="flex-1 w-full flex flex-col items-center justify-center relative z-10 min-h-0 overflow-y-auto">
          <div className="w-full max-w-5xl mx-auto px-6 md:px-8 flex flex-col flex-shrink-0 pt-12 md:pt-16 pb-20 md:pb-28">
            <div className="text-left mb-20 md:mb-24 pb-8 md:pb-10">
              <HeroTitle />
            </div>

            <AnimatedSection delay={0.15}>
              <div className="text-sm md:text-base text-foreground/80 text-left font-extralight max-w-5xl mb-14 md:mb-20 leading-[2.25]">
                <p className="mb-12 md:mb-16">
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
                <p className="pt-2 md:pt-3">
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

            <AnimatedSection delay={0.25}>
              <div className="mb-16 md:mb-20">
                <HeroCTA />
              </div>
            </AnimatedSection>

            <div className="flex justify-start items-center gap-8 md:gap-10 mt-36 md:mt-48">
              <SocialIcons />
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
