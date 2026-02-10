'use client';

import Layout from '@/components/Layout';
import PageWatermark from '@/components/PageWatermark';
import Header from '@/components/Header';
import AnimatedSection from '@/components/AnimatedSection';
import SocialIcons from '@/components/SocialIcons';
import { useState } from 'react';

export default function Contatti() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Messaggio inviato! (Funzionalità in sviluppo)');
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <Layout>
      <PageWatermark label="CONTACT" className="text-[220px] md:text-[260px]" />
      <section className="relative w-full min-h-screen flex flex-col">
        <div className="h-10 md:h-12 flex-shrink-0" aria-hidden="true" />

        <div className="w-full flex-shrink-0 flex flex-col items-center relative z-10">
          <div className="w-full max-w-6xl mx-auto px-6 md:px-8 flex flex-col">
            <Header />
          </div>
        </div>

        {/* Spacer tra header e Contact — stesso di About (contenitori separati) */}
        <div className="h-14 md:h-24 lg:h-32 flex-shrink-0" aria-hidden="true" />

        {/* Content — max-width come About (max-w-5xl), stesso pt */}
        <div className="flex-1 w-full flex flex-col items-center justify-start relative z-10 min-h-0 overflow-y-auto">
          <div className="w-full max-w-5xl mx-auto px-6 md:px-8 flex flex-col flex-shrink-0 pt-4 md:pt-6 pb-20 md:pb-28">
            {/* Sezione 1: Titolo */}
            <AnimatedSection delay={0.1}>
              <section
                className="block"
                style={{ paddingBottom: 'clamp(2rem, 4vw, 2.75rem)' }}
                aria-labelledby="contact-title"
              >
                <h1 id="contact-title" className="text-3xl md:text-5xl font-bold">
                  Contact.
                </h1>
              </section>
            </AnimatedSection>

            {/* Sezione 2: Intro e email */}
            <AnimatedSection delay={0.15}>
            <section
              className="block"
              style={{
                paddingTop: 'clamp(1.5rem, 3vw, 2rem)',
                paddingBottom: 'clamp(2rem, 4vw, 2.75rem)',
              }}
            >
              <p className="text-base md:text-lg text-foreground/80 leading-relaxed">
                Hai un&apos;idea, un progetto o una curiosità? Scrivimi o invia una mail direttamente a{' '}
                <a
                  href="mailto:hello@robertoscarci.dev"
                  className="font-semibold text-accent hover:text-foreground underline-offset-4 hover:underline"
                >
                  hello@robertoscarci.dev
                </a>
                .
              </p>
            </section>
            </AnimatedSection>

            {/* Sezione 3: Form — Name, Email, Message (come riferimento) */}
            <AnimatedSection delay={0.2}>
            <section
              className="block"
              style={{
                paddingTop: 'clamp(1.5rem, 3vw, 2rem)',
                paddingBottom: 'clamp(2.5rem, 5vw, 3.5rem)',
              }}
            >
              <form
                onSubmit={handleSubmit}
                className="flex flex-col gap-6"
              >
                <div>
                  <label htmlFor="name" className="sr-only">
                    Nome
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full py-6 md:py-8 pr-6 md:pr-8 pl-8 md:pl-10 rounded-none bg-surface/10 border border-border/50 focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent/50 focus:bg-surface/20 transition-colors duration-200 text-sm placeholder:text-foreground/40 min-h-[56px] md:min-h-[64px]"
                    placeholder="Name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="sr-only">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full py-6 md:py-8 pr-6 md:pr-8 pl-8 md:pl-10 rounded-none bg-surface/10 border border-border/50 focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent/50 focus:bg-surface/20 transition-colors duration-200 text-sm placeholder:text-foreground/40 min-h-[56px] md:min-h-[64px]"
                    placeholder="Email"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="sr-only">
                    Messaggio
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={9}
                    className="w-full min-h-[240px] md:min-h-[280px] py-6 md:py-8 pr-6 md:pr-8 pl-8 md:pl-10 rounded-none bg-surface/10 border border-border/50 focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent/50 focus:bg-surface/20 transition-colors duration-200 text-sm leading-relaxed resize-none placeholder:text-foreground/40"
                    placeholder="Message"
                  />
                </div>
                <button
                  type="submit"
                  className="mt-3 inline-flex items-center justify-center self-start w-auto max-w-fit px-2.5 py-1.5 rounded-md bg-foreground text-background text-[11px] font-medium hover:bg-accent hover:text-foreground transition-colors"
                >
                  Invia
                </button>
              </form>
            </section>
            </AnimatedSection>

            {/* Sezione 4: Social — stessi loghi e design della homepage */}
            <AnimatedSection delay={0.25}>
            <section
              className="block border-t border-border/60"
              style={{
                paddingTop: 'clamp(2rem, 4vw, 2.75rem)',
                paddingBottom: 'clamp(2rem, 4vw, 2.75rem)',
              }}
            >
              <div className="flex justify-start items-center gap-8 md:gap-10">
                <SocialIcons />
              </div>
            </section>
            </AnimatedSection>

            {/* Sezione 5: Calendario */}
            <AnimatedSection delay={0.3}>
            <section
              className="block"
              style={{
                paddingTop: 'clamp(3rem, 6vw, 4.25rem)',
                paddingBottom: 'clamp(5rem, 9vw, 6.25rem)',
              }}
            >
              <h2 className="text-lg md:text-xl font-semibold mb-5 md:mb-6">Prenota una call</h2>
              <p className="text-sm text-foreground/60 mb-10">
                Scegli uno slot nel calendario per una chiamata veloce (Calendly, ecc.).
              </p>
              <div className="w-full max-w-3xl rounded-2xl border border-border/40 bg-surface/40 p-7 md:p-9 shadow-[0_26px_80px_rgba(0,0,0,0.8)]">
                <div className="flex items-center justify-between mb-6">
                  <span className="text-xs font-medium text-foreground/80">Calendario</span>
                  <span className="text-[10px] text-foreground/50">Coming soon</span>
                </div>
                <div className="grid grid-cols-7 gap-2 text-[11px] md:text-xs text-center text-foreground/50 mb-5">
                  <span>L</span>
                  <span>M</span>
                  <span>M</span>
                  <span>G</span>
                  <span>V</span>
                  <span>S</span>
                  <span>D</span>
                </div>
                <div className="grid grid-cols-7 gap-2 text-xs md:text-sm">
                  {Array.from({ length: 28 }).map((_, i) => (
                    <button
                      key={i}
                      type="button"
                      className="h-9 md:h-11 rounded-lg bg-surface-elevated/50 hover:bg-accent/20 text-foreground/80 hover:text-foreground text-[11px] md:text-xs flex items-center justify-center transition-colors"
                    >
                      {i + 1}
                    </button>
                  ))}
                </div>
              </div>
            </section>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </Layout>
  );
}
