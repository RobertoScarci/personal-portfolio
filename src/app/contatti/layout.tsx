import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contatti',
  description: 'Hai un progetto in mente? Vuoi collaborare? Contattami per discutere del tuo progetto.',
};

export default function ContattiLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
