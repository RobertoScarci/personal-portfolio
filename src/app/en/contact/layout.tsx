import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact (EN)',
  description: 'Reach out for your next project. Email, form or book a call. Reply within 24 hours.',
  openGraph: {
    title: 'Contact | Roberto Scarci',
    description: 'Let’s talk about your frontend project. Email, form or schedule a call.',
  },
};

export default function ContactLayoutEn({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

