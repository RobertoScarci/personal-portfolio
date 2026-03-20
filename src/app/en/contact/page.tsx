'use client';

import Layout from '@/components/Layout';
import ScrollRevealSection from '@/components/ScrollRevealSection';
import { siteConfig } from '@/app/metadata';
import Link from 'next/link';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { trackEvent } from '@/lib/analytics';
import PageShell from '@/components/PageShell';
import { SectionHeader } from '@/components/ui';

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function ContactEn() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [errors, setErrors] = useState<{ name?: string; email?: string; message?: string }>({});
  const [submitted, setSubmitted] = useState(false);

  const validate = (): boolean => {
    const next: typeof errors = {};
    if (!formData.name.trim()) next.name = 'Please enter your name.';
    if (!formData.email.trim()) next.email = 'Please enter your email.';
    else if (!EMAIL_REGEX.test(formData.email)) next.email = 'Please enter a valid email address.';
    if (!formData.message.trim()) next.message = 'Please enter a short message.';
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    trackEvent('contact_form_submit_en');
    setSubmitted(true);
    // eslint-disable-next-line no-console
    console.log('Form submitted (EN):', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
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
      >
        <ScrollRevealSection delay={0.05}>
          <section
            className="block pb-8 md:pb-11"
            aria-labelledby="contact-title-en"
          >
            <SectionHeader
              headingTag="h1"
              titleId="contact-title-en"
              title="Contact."
              description="Tell me a bit about your project, collaboration or idea. I usually reply within 24 hours."
              className="gap-4"
              titleClassName="text-3xl md:text-5xl font-bold tracking-[0.04em]"
              descriptionClassName="text-lg md:text-xl text-foreground/80 max-w-2xl mb-6"
            />
            <div className="flex flex-wrap gap-4">
              <Link
                href="mailto:hello@robertoscarci.dev"
                onClick={() => trackEvent('contact_email_click_en')}
                className="inline-flex items-center rounded-full bg-accent px-6 py-3 text-sm font-semibold text-accent-foreground shadow-[0_0_24px_rgba(236,72,153,0.4)] hover:shadow-[0_0_32px_rgba(236,72,153,0.55)] transition-all duration-300"
              >
                Email me
              </Link>
              <Link
                href={siteConfig.links.calendly}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackEvent('contact_calendly_click_en')}
                className="inline-flex items-center rounded-full border border-accent/80 px-6 py-3 text-sm font-semibold text-foreground hover:bg-accent/10 hover:border-accent transition-all duration-300"
              >
                Book a call
              </Link>
            </div>
          </section>
        </ScrollRevealSection>

        <ScrollRevealSection delay={0.1}>
          <section className="block pt-6 md:pt-8 pb-8 md:pb-10">
            <p className="text-base md:text-lg text-foreground/80 leading-relaxed mb-2">
              Or use the form below. I&apos;ll get back to you as soon as possible.
            </p>
          </section>
        </ScrollRevealSection>

        <ScrollRevealSection delay={0.15}>
          <section className="block pt-6 md:pt-8 pb-10 md:pb-14">
            <form onSubmit={handleSubmit} className="flex flex-col gap-6">
              <div>
                <label htmlFor="name-en" className="sr-only">
                  Name
                </label>
                <input
                  type="text"
                  id="name-en"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className={`w-full rounded-none bg-surface/10 border focus:outline-none focus:ring-2 focus:ring-accent/50 focus:bg-surface/20 transition-colors duration-200 text-sm placeholder:text-foreground/40 px-8 py-5 ${
                    errors.name ? 'border-accent/80' : 'border-border/50 focus:border-accent/50'
                  }`}
                  placeholder="Name"
                  aria-describedby={errors.name ? 'name-error-en' : undefined}
                  {...(errors.name ? { 'aria-invalid': true } : {})}
                />
                {errors.name && (
                  <p id="name-error-en" className="mt-1.5 text-xs text-accent" role="alert">
                    {errors.name}
                  </p>
                )}
              </div>
              <div>
                <label htmlFor="email-en" className="sr-only">
                  Email
                </label>
                <input
                  type="email"
                  id="email-en"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className={`w-full rounded-none bg-surface/10 border focus:outline-none focus:ring-2 focus:ring-accent/50 focus:bg-surface/20 transition-colors duration-200 text-sm placeholder:text-foreground/40 px-8 py-5 ${
                    errors.email ? 'border-accent/80' : 'border-border/50 focus:border-accent/50'
                  }`}
                  placeholder="Email"
                  aria-invalid={Boolean(errors.email)}
                  aria-describedby={errors.email ? 'email-error-en' : undefined}
                />
                {errors.email && (
                  <p id="email-error-en" className="mt-1.5 text-xs text-accent" role="alert">
                    {errors.email}
                  </p>
                )}
              </div>
              <div>
                <label htmlFor="message-en" className="sr-only">
                  Message
                </label>
                <textarea
                  id="message-en"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={9}
                  className={`w-full min-h-[260px] md:min-h-[300px] rounded-none bg-surface/10 border focus:outline-none focus:ring-2 focus:ring-accent/50 focus:bg-surface/20 transition-colors duration-200 text-sm leading-relaxed resize-none placeholder:text-foreground/40 px-8 py-5 ${
                    errors.message ? 'border-accent/80' : 'border-border/50 focus:border-accent/50'
                  }`}
                  placeholder="Message"
                  aria-invalid={Boolean(errors.message)}
                  aria-describedby={errors.message ? 'message-error-en' : undefined}
                />
                {errors.message && (
                  <p id="message-error-en" className="mt-1.5 text-xs text-accent" role="alert">
                    {errors.message}
                  </p>
                )}
              </div>
              <motion.button
                type="submit"
                className="mt-3 inline-flex items-center justify-center self-start w-auto rounded-md bg-foreground text-background text-sm font-medium tracking-wide hover:bg-accent hover:text-foreground transition-colors px-6 py-2"
                whileHover={{ scale: 1.05, y: -1 }}
                whileTap={{ scale: 0.96, y: 0 }}
                transition={{ type: 'spring', stiffness: 380, damping: 26 }}
              >
                Send
              </motion.button>
              {submitted && (
                <p className="mt-2 text-xs text-foreground/70" role="status" aria-live="polite">
                  Message sent (demo). I&apos;ll get back to you soon.
                </p>
              )}
            </form>
          </section>
        </ScrollRevealSection>

        <ScrollRevealSection delay={0.25}>
          <section className="block rounded-2xl border border-border/50 bg-surface/20 px-6 py-6 md:px-8 md:py-8">
            <h2 className="text-base md:text-lg font-semibold mb-2">Availability</h2>
            <p className="text-sm text-foreground/70 max-w-2xl">
              Open to frontend projects, longer-term collaborations and technical consulting. If you prefer,
              you can send a longer brief via email and we&apos;ll schedule a call.
            </p>
          </section>
        </ScrollRevealSection>
      </PageShell>
    </Layout>
  );
}

