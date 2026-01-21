import Layout from '@/components/Layout';
import Link from 'next/link';
import AnimatedSection from '@/components/AnimatedSection';
import HeroTitle from '@/components/HeroTitle';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Home',
  description: 'Sviluppatore full-stack freelance, architetto UX e ingegnere JavaScript. Trasformo idee in esperienze digitali immersive.',
};

export default function Home() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="container mx-auto px-6 py-8">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main Heading */}
          <AnimatedSection>
            <HeroTitle />
          </AnimatedSection>

          {/* Introduction Text */}
          <AnimatedSection delay={0.3}>
            <div className="text-base md:text-lg text-foreground/90 mb-6 leading-relaxed">
              <p className="mb-5">
                Il tuo sviluppatore full-stack di fiducia, architetto UX e ingegnere JavaScript.
                Passo le mie giornate (e spesso le notti) dipingendo la tela di Internet con{' '}
                <Link href="/progetti" className="font-bold text-foreground hover:text-accent transition-colors">
                  PROGETTI
                </Link>{' '}
                e righe di codice, trasformando zeri e uno in esperienze immersive e interattive.
              </p>
              <p>
                Appassionato di fotografia e design minimale, trovo bellezza nella semplicità e nell'ordine.
                Quando non sto creando esperienze web curate, puoi trovarmi a leggere{' '}
                <Link href="#" className="font-bold text-foreground hover:text-accent transition-colors">
                  ARTICOLI
                </Link>{' '}
                o ad ascoltare musica, perdendomi nel flusso delle melodie. In ogni caso puoi sempre{' '}
                <Link href="/contatti" className="font-bold text-foreground hover:text-accent transition-colors">
                  CONTATTARMI
                </Link>
                .
              </p>
            </div>
          </AnimatedSection>

          {/* See More About Me Link */}
          <AnimatedSection delay={0.4}>
            <Link
              href="/carriera"
              className="text-foreground/60 hover:text-foreground transition-colors"
            >
              Scopri di più su di me →
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </Layout>
  );
}
