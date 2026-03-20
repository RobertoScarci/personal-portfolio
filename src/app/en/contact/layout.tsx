import type { Metadata } from 'next';
import { metadata as baseMetadata, siteConfig } from '@/app/metadata';

export const metadata: Metadata = {
  ...baseMetadata,
  title: 'Contact (EN)',
  description: 'Reach out for your next project. Email, form or book a call. Reply within 24 hours.',
  keywords: [
    ...(baseMetadata.keywords ?? []),
    'contact',
    'frontend developer',
    'web developer',
    'Next.js',
    'React',
    'AI',
    'portfolio',
  ],
  openGraph: {
    ...baseMetadata.openGraph,
    title: 'Contact | Roberto Scarci',
    description: 'Let’s talk about your frontend project. Email, form or schedule a call.',
    url: `${siteConfig.url}/en/contact`,
    locale: 'en_US',
  },
  twitter: {
    ...baseMetadata.twitter,
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

