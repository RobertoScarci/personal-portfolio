import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contatti',
  description: 'Scrivimi per il tuo prossimo progetto. Email, form o prenota una call. Risposta entro 24 ore.',
  openGraph: {
    title: 'Contatti | Roberto Scarci',
    description: 'Scrivimi per collaborazioni. Email, form o prenota una call. Risposta entro 24 ore.',
  },
};

export default function ContattiLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
