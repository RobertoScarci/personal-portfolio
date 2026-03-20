'use client';

import Layout from '@/components/Layout';
import ScrollRevealSection from '@/components/ScrollRevealSection';
import SocialIcons from '@/components/SocialIcons';
import { siteConfig } from '@/app/metadata';
import Link from 'next/link';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { trackEvent } from '@/lib/analytics';
import PageShell from '@/components/PageShell';
import { SectionHeader } from '@/components/ui';

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function Contatti() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [errors, setErrors] = useState<{ name?: string; email?: string; message?: string }>({});
  const [submitted, setSubmitted] = useState(false);

  const validate = (): boolean => {
    const next: typeof errors = {};
    if (!formData.name.trim()) next.name = 'Inserisci il tuo nome.';
    if (!formData.email.trim()) next.email = 'Inserisci la tua email.';
    else if (!EMAIL_REGEX.test(formData.email)) next.email = 'Inserisci un indirizzo email valido.';
    if (!formData.message.trim()) next.message = 'Inserisci un messaggio.';
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    trackEvent('contact_form_submit');
    setSubmitted(true);
    // eslint-disable-next-line no-console
    console.log('Form submitted:', formData);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (submitted) setSubmitted(false);
    if (errors[name as keyof typeof errors]) setErrors((prev) => ({ ...prev, [name]: undefined }));
  };

  return (
    <Layout>
      <PageShell
        watermarkLabel="CONTACT"
        watermarkClassName="text-[220px] md:text-[260px]"
        contentContainerClassName="contents"
      >
        <div className="w-full max-w-5xl mx-auto px-6 md:px-8 flex flex-col flex-shrink-0 pt-4 md:pt-6 pb-20 md:pb-28">
            {/* Sezione 1: Titolo + CTA principale */}
            <ScrollRevealSection delay={0.05}>
              <section
                className="block"
                style={{ paddingBottom: 'clamp(2rem, 4vw, 2.75rem)' }}
                aria-labelledby="contact-title"
              >
                <SectionHeader
                  headingTag="h1"
                  titleId="contact-title"
                  title="Contact."
                  description="Scrivimi per il tuo prossimo progetto: idee, collaborazioni o semplici curiosità. Risposta entro 24 ore."
                  className="gap-4"
                  titleClassName="text-3xl md:text-5xl font-bold tracking-[0.04em]"
                  descriptionClassName="text-lg md:text-xl text-foreground/80 max-w-2xl mb-6"
                />
                <div className="flex flex-wrap gap-4">
                  <Link
                    href="mailto:hello@robertoscarci.dev"
                    onClick={() => trackEvent('contact_email_click')}
                    className="inline-flex items-center rounded-full bg-accent px-6 py-3 text-sm font-semibold text-accent-foreground shadow-[0_0_24px_rgba(236,72,153,0.4)] hover:shadow-[0_0_32px_rgba(236,72,153,0.55)] transition-all duration-300"
                  >
                    Scrivimi via email
                  </Link>
                  <Link
                    href={siteConfig.links.calendly}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => trackEvent('contact_calendly_click')}
                    className="inline-flex items-center rounded-full border border-accent/80 px-6 py-3 text-sm font-semibold text-foreground hover:bg-accent/10 hover:border-accent transition-all duration-300"
                  >
                    Prenota una call
                  </Link>
                </div>
              </section>
            </ScrollRevealSection>

            {/* Sezione 2: Intro e form */}
            <ScrollRevealSection delay={0.1}>
            <section
              className="block"
              style={{
                paddingTop: 'clamp(1.5rem, 3vw, 2rem)',
                paddingBottom: 'clamp(2rem, 4vw, 2.75rem)',
              }}
            >
              <p className="text-base md:text-lg text-foreground/80 leading-relaxed mb-2">
                Oppure compila il form e ti risponderò al più presto.
              </p>
            </section>
            </ScrollRevealSection>

            {/* Sezione 3: Form — Name, Email, Message (come riferimento) */}
            <ScrollRevealSection delay={0.15}>
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
                    style={{ padding: '1.4rem 2rem' }}
                    className={`w-full rounded-none bg-surface/10 border focus:outline-none focus:ring-2 focus:ring-accent/50 focus:bg-surface/20 transition-colors duration-200 text-sm placeholder:text-foreground/40 ${errors.name ? 'border-accent/80' : 'border-border/50 focus:border-accent/50'}`}
                    placeholder="Name"
                    aria-describedby={errors.name ? 'name-error' : undefined}
                    {...(errors.name ? { 'aria-invalid': true } : {})}
                  />
                  {errors.name && (
                    <p id="name-error" className="mt-1.5 text-xs text-accent" role="alert">
                      {errors.name}
                    </p>
                  )}
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
                    style={{ padding: '1.4rem 2rem' }}
                    className={`w-full rounded-none bg-surface/10 border focus:outline-none focus:ring-2 focus:ring-accent/50 focus:bg-surface/20 transition-colors duration-200 text-sm placeholder:text-foreground/40 ${errors.email ? 'border-accent/80' : 'border-border/50 focus:border-accent/50'}`}
                    placeholder="Email"
                    aria-invalid={Boolean(errors.email)}
                    aria-describedby={errors.email ? 'email-error' : undefined}
                  />
                  {errors.email && (
                    <p id="email-error" className="mt-1.5 text-xs text-accent" role="alert">
                      {errors.email}
                    </p>
                  )}
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
                    style={{ padding: '1.4rem 2rem' }}
                    className={`w-full min-h-[260px] md:min-h-[300px] rounded-none bg-surface/10 border focus:outline-none focus:ring-2 focus:ring-accent/50 focus:bg-surface/20 transition-colors duration-200 text-sm leading-relaxed resize-none placeholder:text-foreground/40 ${errors.message ? 'border-accent/80' : 'border-border/50 focus:border-accent/50'}`}
                    placeholder="Message"
                    aria-invalid={Boolean(errors.message)}
                    aria-describedby={errors.message ? 'message-error' : undefined}
                  />
                  {errors.message && (
                    <p id="message-error" className="mt-1.5 text-xs text-accent" role="alert">
                      {errors.message}
                    </p>
                  )}
                </div>
                <motion.button
                  type="submit"
                  style={{ padding: '0.6rem 1.5rem' }}
                  className="mt-3 inline-flex items-center justify-center self-start w-auto rounded-md bg-foreground text-background text-sm font-medium tracking-wide hover:bg-accent hover:text-foreground transition-colors"
                  whileHover={{ scale: 1.05, y: -1 }}
                  whileTap={{ scale: 0.96, y: 0 }}
                  transition={{ type: 'spring', stiffness: 380, damping: 26 }}
                >
                  Invia
                </motion.button>
                {submitted && (
                  <p className="mt-2 text-xs text-foreground/70" role="status" aria-live="polite">
                    Messaggio inviato (demo). Ti risponderò al più presto.
                  </p>
                )}
              </form>
            </section>
            </ScrollRevealSection>

            {/* Sezione 4: Social — stessi loghi e design della homepage */}
            <ScrollRevealSection delay={0.2}>
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
            </ScrollRevealSection>

            {/* Sezione 5: Trust */}
            <ScrollRevealSection delay={0.25}>
            <section
              className="block rounded-2xl border border-border/50 bg-surface/20 px-6 py-6 md:px-8 md:py-8"
              style={{
                paddingTop: 'clamp(2rem, 4vw, 2.75rem)',
                paddingBottom: 'clamp(2rem, 4vw, 2.75rem)',
              }}
              aria-label="Disponibilità"
            >
              <h2 className="text-base md:text-lg font-semibold mb-2">Disponibile per</h2>
              <p className="text-sm text-foreground/70 max-w-2xl">
                Progetti frontend, consulenza tecnica e collaborazioni. Puoi prenotare una call
                diretta o scrivermi via email per progetti più complessi.
              </p>
            </section>
            </ScrollRevealSection>
          </div>
      </PageShell>
    </Layout>
  );
}
