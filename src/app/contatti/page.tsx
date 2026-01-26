'use client';

import Layout from '@/components/Layout';
import PageWatermark from '@/components/PageWatermark';
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
      <div className="container mx-auto px-6 py-20">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="mb-16 text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Contatti</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Hai un progetto in mente? Vuoi collaborare? Scrivimi pure, 
              sono sempre disponibile per nuove sfide.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-2xl font-bold mb-6">Invia un Messaggio</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium mb-2"
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
                    className="w-full px-4 py-3 rounded-lg bg-surface border border-border focus:outline-none focus:ring-2 focus:ring-accent transition-colors"
                    placeholder="Il tuo nome"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium mb-2"
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
                    className="w-full px-4 py-3 rounded-lg bg-surface border border-border focus:outline-none focus:ring-2 focus:ring-accent transition-colors"
                    placeholder="tua.email@esempio.com"
                  />
                </div>
                <div>
                  <label
                    htmlFor="subject"
                    className="block text-sm font-medium mb-2"
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
                    className="w-full px-4 py-3 rounded-lg bg-surface border border-border focus:outline-none focus:ring-2 focus:ring-accent transition-colors"
                    placeholder="Oggetto del messaggio"
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium mb-2"
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
                    className="w-full px-4 py-3 rounded-lg bg-surface border border-border focus:outline-none focus:ring-2 focus:ring-accent transition-colors resize-none"
                    placeholder="Raccontami del tuo progetto..."
                  />
                </div>
                <button
                  type="submit"
                  className="w-full px-8 py-4 bg-primary text-primary-foreground rounded-full font-medium hover:bg-primary/90 transition-colors"
                >
                  Invia Messaggio
                </button>
              </form>
            </div>

            {/* Contact Info & Calendar */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold mb-6">Informazioni di Contatto</h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    <strong className="text-foreground">Email:</strong> info@esempio.com
                  </p>
                  <p>
                    <strong className="text-foreground">LinkedIn:</strong>{' '}
                    <a
                      href="#"
                      className="text-accent hover:underline"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      linkedin.com/in/tuoprofilo
                    </a>
                  </p>
                  <p>
                    <strong className="text-foreground">GitHub:</strong>{' '}
                    <a
                      href="#"
                      className="text-accent hover:underline"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      github.com/tuoprofilo
                    </a>
                  </p>
                </div>
              </div>

              <div className="border-t border-border pt-8">
                <h2 className="text-2xl font-bold mb-4">Prenota un Appuntamento</h2>
                <p className="text-muted-foreground mb-6">
                  Preferisci parlare direttamente? Prenota una chiamata gratuita di 30 minuti 
                  per discutere del tuo progetto.
                </p>
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 border border-border rounded-full font-medium hover:bg-surface transition-colors"
                >
                  Apri Calendario
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </a>
              </div>

              <div className="border-t border-border pt-8">
                <h3 className="text-xl font-semibold mb-4">Tempi di Risposta</h3>
                <p className="text-muted-foreground">
                  Cerco di rispondere a tutte le email entro 24-48 ore. 
                  Per richieste urgenti, utilizza il calendario per prenotare una chiamata.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
