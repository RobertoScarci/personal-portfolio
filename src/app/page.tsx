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
          {/* Main Heading */}
          <AnimatedSection>
            <div className="mb-12">
              <HeroTitle />
            </div>
          </AnimatedSection>

          {/* Introduction Text */}
          <AnimatedSection delay={0.3}>
            <div className="space-y-6 text-base md:text-lg text-foreground/80 mb-12 max-w-3xl">
              <p>
                Your friendly neighborhood frontend developer, UX architect, and JavaScript engineer. 
                I spend my days (and often nights) painting the Internet canvas with{' '}
                <Link href="/progetti" className="font-bold text-foreground hover:text-accent transition-colors">
                  PROJECTS
                </Link>{' '}
                and lines of code, turning zeroes and ones into immersive, interactive experiences.
              </p>
              <p>
                Bona fide photochromic{' '}
                <Link href="#" className="font-bold text-foreground hover:text-accent transition-colors">
                  LENS
                </Link>{' '}
                enthusiast - sunlight or indoors, I've got it covered. I tread the path of minimalism, 
                finding beauty in simplicity and order. When I'm not crafting beautiful web experiences, 
                you can find me reading{' '}
                <Link href="#" className="font-bold text-foreground hover:text-accent transition-colors">
                  ARTICLES
                </Link>{' '}
                or swaying to the rhythm of Pop Music & Jazz, losing myself in the captivating flow of melodies. 
                anyways you can{' '}
                <Link href="/contatti" className="font-bold text-foreground hover:text-accent transition-colors">
                  CONTACT ME
                </Link>
              </p>
            </div>
          </AnimatedSection>

          {/* See More About Me Link */}
          <AnimatedSection delay={0.4}>
            <div className="text-center md:text-left">
              <Link
                href="/carriera"
                className="inline-flex items-center gap-2 text-foreground/70 hover:text-foreground transition-colors group"
              >
                See More About Me
                <svg
                  className="w-5 h-5 transition-transform group-hover:translate-x-1"
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
            </div>
          </AnimatedSection>
        </div>
      </section>
    </Layout>
  );
}
