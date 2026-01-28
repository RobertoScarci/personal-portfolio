'use client';

import Layout from '@/components/Layout';
import PageWatermark from '@/components/PageWatermark';
import Header from '@/components/Header';
import AnimatedSection from '@/components/AnimatedSection';
import { useState } from 'react';
// Note: Metadata cannot be exported from client components
// Consider creating a separate metadata file or using generateMetadata

export default function Contatti() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement form submission
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
        {/* Spacer sopra header — altezza fissa, come per hero */}
        <div className="h-10 md:h-12 flex-shrink-0" aria-hidden="true" />

        {/* Header — stesso flex dell'hero, max-width leggermente più alta */}
        <div className="w-full flex-shrink-0 flex flex-col items-center relative z-10">
          <div className="w-full max-w-6xl mx-auto px-6 md:px-8 flex flex-col">
            <Header />
          </div>
        </div>

        {/* Content — centrato orizzontalmente e verticalmente, stessa max-width della home */}
        <div className="flex-1 w-full flex flex-col items-center justify-center relative z-10 min-h-0 overflow-y-auto">
          <div className="w-full max-w-5xl mx-auto px-6 md:px-8 flex flex-col flex-shrink-0 pt-16 md:pt-24 pb-20 md:pb-28">
            {/* Intro */}
            <AnimatedSection delay={0.1} className="flex-shrink-0">
              <div className="max-w-3xl">
                <h1 className="text-4xl md:text-6xl font-bold mb-6">Contact.</h1>
                <p className="text-lg md:text-xl text-foreground/70 leading-relaxed">
                  Hai un&apos;idea, un progetto o semplicemente una curiosità?  
                  Raccontami cosa hai in mente e vediamo insieme come trasformarlo in qualcosa di concreto.
                </p>
                <p className="mt-6 text-sm md:text-base text-foreground/60">
                  Preferisci scrivermi direttamente? Invia una mail a{' '}
                  <a
                    href="mailto:hello@robertoscarci.dev"
                    className="font-medium text-accent hover:text-foreground underline-offset-4 hover:underline"
                  >
                    hello@robertoscarci.dev
                  </a>
                  .
                </p>
              </div>
            </AnimatedSection>

            <div className="h-10 md:h-12 flex-shrink-0" aria-hidden="true" />

            {/* Form + Info */}
            <div className="grid md:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)] gap-12 items-start">
              {/* Contact Form */}
              <AnimatedSection delay={0.2} className="flex-shrink-0">
                <div className="bg-surface/60 border border-border/60 rounded-2xl p-6 md:p-8 shadow-[0_18px_60px_rgba(0,0,0,0.45)]">
                  <h2 className="text-2xl font-semibold mb-6">Parliamo del tuo progetto</h2>
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label
                          htmlFor="name"
                          className="block text-xs font-medium tracking-[0.12em] uppercase text-foreground/60 mb-2"
                        >
                          Nome
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 rounded-lg bg-surface border border-border focus:outline-none focus:ring-2 focus:ring-accent/70 focus:border-accent/70 transition-colors text-sm"
                          placeholder="Come ti chiami?"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="email"
                          className="block text-xs font-medium tracking-[0.12em] uppercase text-foreground/60 mb-2"
                        >
                          Email
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 rounded-lg bg-surface border border-border focus:outline-none focus:ring-2 focus:ring-accent/70 focus:border-accent/70 transition-colors text-sm"
                          placeholder="tua.email@esempio.com"
                        />
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor="subject"
                        className="block text-xs font-medium tracking-[0.12em] uppercase text-foreground/60 mb-2"
                      >
                        Oggetto
                      </label>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-lg bg-surface border border-border focus:outline-none focus:ring-2 focus:ring-accent/70 focus:border-accent/70 transition-colors text-sm"
                        placeholder="Di cosa vuoi parlarmi?"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="message"
                        className="block text-xs font-medium tracking-[0.12em] uppercase text-foreground/60 mb-2"
                      >
                        Messaggio
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={6}
                        className="w-full px-4 py-3 rounded-lg bg-surface border border-border focus:outline-none focus:ring-2 focus:ring-accent/70 focus:border-accent/70 transition-colors text-sm leading-relaxed resize-none"
                        placeholder="Parlami del tuo brand, dei tuoi obiettivi e di cosa ti aspetti dalla collaborazione."
                      />
                    </div>

                    <button
                      type="submit"
                      className="inline-flex items-center justify-center w-full md:w-auto px-8 py-3 rounded-full bg-foreground text-background font-medium text-sm tracking-[0.14em] uppercase hover:bg-accent hover:text-foreground transition-colors"
                    >
                      Invia Messaggio
                    </button>
                  </form>
                </div>
              </AnimatedSection>

              {/* Contact Info */}
              <AnimatedSection delay={0.3} className="flex-shrink-0">
                <div className="space-y-8 text-sm md:text-base">
                  <div className="space-y-3">
                    <p className="text-foreground/70 leading-relaxed">
                      Preferisci un approccio più diretto?  
                      Puoi contattarmi anche tramite i miei canali social o inviarmi un&apos;email
                      con i dettagli del tuo progetto.
                    </p>
                  </div>
                  <div className="space-y-3 text-foreground/60">
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
                  <div className="pt-4 border-t border-border/60">
                    <p className="text-xs uppercase tracking-[0.18em] text-foreground/50 mb-2">
                      tempi di risposta
                    </p>
                    <p className="text-foreground/60 leading-relaxed">
                      Rispondo solitamente entro <span className="text-foreground">24–48 ore</span> nei giorni
                      lavorativi. Se hai urgenza, utilizza il calendario qui sotto per prenotare
                      direttamente una chiamata.
                    </p>
                  </div>
                </div>
              </AnimatedSection>
            </div>

            {/* Calendario alternativo */}
            <AnimatedSection delay={0.45} className="mt-20">
              <div className="border border-border/60 rounded-2xl bg-surface/60 backdrop-blur-sm p-6 md:p-8 shadow-[0_18px_60px_rgba(0,0,0,0.45)]">
                <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
                  <div className="max-w-xl space-y-4">
                    <h2 className="text-2xl font-semibold">Prenota uno slot nel mio calendario</h2>
                    <p className="text-sm md:text-base text-foreground/60 leading-relaxed">
                      Immagina qui il tuo calendario preferito (Calendly, Google Calendar, ecc.).  
                      Scegli l&apos;orario che preferisci e organizziamo una call per parlare del tuo progetto.
                    </p>
                  </div>
                  <div className="w-full md:w-80">
                    <div className="rounded-2xl border border-border/60 bg-surface p-4">
                      <div className="flex items-center justify-between mb-4">
                        <div className="text-sm font-medium text-foreground/80">Calendario</div>
                        <div className="text-xs text-foreground/50">Coming soon</div>
                      </div>
                      <div className="grid grid-cols-7 gap-1 text-xs text-center text-foreground/50 mb-3">
                        <span>L</span>
                        <span>M</span>
                        <span>M</span>
                        <span>G</span>
                        <span>V</span>
                        <span>S</span>
                        <span>D</span>
                      </div>
                      <div className="grid grid-cols-7 gap-1 text-xs">
                        {Array.from({ length: 28 }).map((_, index) => (
                          <button
                            key={index}
                            type="button"
                            className="aspect-square rounded-lg bg-surface-elevated/40 hover:bg-accent/20 text-foreground/60 hover:text-foreground transition-colors"
                          >
                            {index + 1}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </Layout>
  );
}
