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
      <section className="container mx-auto px-6 py-20 md:py-32">
        <div className="max-w-4xl mx-auto">
          {/* Main Heading with Glitch Effect */}
          <AnimatedSection>
            <HeroTitle />
          </AnimatedSection>

          {/* Introduction Text */}
          <AnimatedSection delay={0.3}>
            <div className="space-y-6 text-lg md:text-xl text-muted-foreground mb-12 max-w-3xl">
            <p>
              Il tuo sviluppatore full-stack di fiducia, architetto UX e ingegnere JavaScript. 
              Passo le mie giornate (e spesso le notti) dipingendo la tela di Internet con 
              <strong className="text-foreground font-semibold"> PROGETTI</strong> e righe di codice, 
              trasformando zeri e uno in esperienze immersive e interattive.
            </p>
            <p>
              Appassionato di <strong className="text-foreground font-semibold">TECNOLOGIA</strong> e 
              design minimale, trovo bellezza nella semplicità e nell'ordine. Quando non sto creando 
              esperienze web straordinarie, puoi trovarmi a leggere <strong className="text-foreground font-semibold">ARTICOLI</strong> 
              o a seguire le ultime tendenze del settore. In ogni caso, puoi sempre 
              <strong className="text-foreground font-semibold"> CONTATTARMI</strong>.
            </p>
            </div>
          </AnimatedSection>

          {/* Call to Action */}
          <AnimatedSection delay={0.4}>
            <div className="flex flex-col sm:flex-row gap-4 mb-16">
            <Link
              href="/progetti"
              className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-full font-medium hover:bg-primary/90 transition-colors"
            >
              Vedi i Miei Progetti
              <svg
                className="w-5 h-5"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
            <Link
              href="/contatti"
              className="inline-flex items-center gap-2 px-8 py-4 border border-border rounded-full font-medium hover:bg-surface transition-colors"
            >
              Contattami
            </Link>
            </div>
          </AnimatedSection>

          {/* What I Do Section */}
          <AnimatedSection delay={0.5}>
            <div className="border-t border-border pt-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-8">Cosa faccio e per chi</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-3">Sviluppo Full-Stack</h3>
                <p className="text-muted-foreground">
                  Creo applicazioni web complete, dal frontend al backend, utilizzando le tecnologie 
                  più moderne e performanti.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3">Architettura UX</h3>
                <p className="text-muted-foreground">
                  Progetto esperienze utente intuitive e coinvolgenti, mettendo sempre l'utente al centro.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3">Per Startup</h3>
                <p className="text-muted-foreground">
                  Aiuto le startup a trasformare le loro idee in prodotti digitali scalabili e performanti.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3">Per Aziende</h3>
                <p className="text-muted-foreground">
                  Collaboro con aziende per modernizzare i loro sistemi e migliorare l'esperienza digitale.
                </p>
              </div>
            </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </Layout>
  );
}
