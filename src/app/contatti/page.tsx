'use client';

import Layout from '@/components/Layout';
import PageWatermark from '@/components/PageWatermark';
import Header from '@/components/Header';
import AnimatedSection from '@/components/AnimatedSection';
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
                className="flex flex-col gap-5"
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
                    className="w-full px-4 py-3 rounded-lg bg-surface border border-border focus:outline-none focus:ring-2 focus:ring-accent/70 focus:border-accent/70 transition-colors text-sm placeholder:text-foreground/40"
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
                    className="w-full px-4 py-3 rounded-lg bg-surface border border-border focus:outline-none focus:ring-2 focus:ring-accent/70 focus:border-accent/70 transition-colors text-sm placeholder:text-foreground/40"
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
                    rows={5}
                    className="w-full px-4 py-3 rounded-lg bg-surface border border-border focus:outline-none focus:ring-2 focus:ring-accent/70 focus:border-accent/70 transition-colors text-sm leading-relaxed resize-none placeholder:text-foreground/40"
                    placeholder="Message"
                  />
                </div>
                <button
                  type="submit"
                  className="mt-2 w-full md:w-auto px-8 py-3 rounded-full bg-foreground text-background font-medium text-sm tracking-wide hover:bg-accent hover:text-foreground transition-colors"
                >
                  Invia
                </button>
              </form>
            </section>
            </AnimatedSection>

            {/* Sezione 4: Info di contatto */}
            <AnimatedSection delay={0.25}>
            <section
              className="block border-t border-border/60"
              style={{
                paddingTop: 'clamp(2rem, 4vw, 2.75rem)',
                paddingBottom: 'clamp(2rem, 4vw, 2.75rem)',
              }}
            >
              <p className="text-xs uppercase tracking-widest text-foreground/50 mb-3">
                Altri modi per contattarmi
              </p>
              <div className="flex flex-col gap-2 text-sm text-foreground/70">
                <p>
                  <span className="font-semibold text-foreground">Email</span>{' '}
                  <a
                    href="mailto:hello@robertoscarci.dev"
                    className="text-accent hover:text-foreground underline-offset-4 hover:underline"
                  >
                    hello@robertoscarci.dev
                  </a>
                </p>
                <p>
                  <span className="font-semibold text-foreground">LinkedIn</span>{' '}
                  <a
                    href="https://www.linkedin.com/in/roberto-scarci-0625ab2a6/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-accent hover:text-foreground underline-offset-4 hover:underline"
                  >
                    /roberto-scarci
                  </a>
                </p>
                <p>
                  <span className="font-semibold text-foreground">GitHub</span>{' '}
                  <a
                    href="https://github.com/RobertoScarci"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-accent hover:text-foreground underline-offset-4 hover:underline"
                  >
                    /RobertoScarci
                  </a>
                </p>
              </div>
              <p className="mt-4 text-xs text-foreground/50">
                Rispondo di solito entro 24–48 ore nei giorni lavorativi.
              </p>
            </section>
            </AnimatedSection>

            {/* Sezione 5: Calendario */}
            <AnimatedSection delay={0.3}>
            <section
              className="block"
              style={{
                paddingTop: 'clamp(2rem, 4vw, 2.75rem)',
              }}
            >
              <h2 className="text-lg font-semibold mb-2">Prenota una call</h2>
              <p className="text-sm text-foreground/60 mb-4">
                Scegli uno slot nel calendario per una chiamata veloce (Calendly, ecc.).
              </p>
              <div className="rounded-xl border border-border/40 bg-surface/30 p-4 max-w-xs">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-medium text-foreground/80">Calendario</span>
                  <span className="text-[10px] text-foreground/50">Coming soon</span>
                </div>
                <div className="grid grid-cols-7 gap-1 text-[10px] text-center text-foreground/50 mb-2">
                  <span>L</span>
                  <span>M</span>
                  <span>M</span>
                  <span>G</span>
                  <span>V</span>
                  <span>S</span>
                  <span>D</span>
                </div>
                <div className="grid grid-cols-7 gap-1 text-xs">
                  {Array.from({ length: 28 }).map((_, i) => (
                    <button
                      key={i}
                      type="button"
                      className="aspect-square rounded-md bg-surface-elevated/40 hover:bg-accent/20 text-foreground/60 hover:text-foreground transition-colors"
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
