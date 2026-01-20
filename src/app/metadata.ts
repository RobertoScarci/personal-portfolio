import type { Metadata } from 'next';

export const siteConfig = {
  name: 'Personal Portfolio',
  description: 'Portfolio personale di uno sviluppatore full-stack freelance',
  url: 'https://tuosito.com',
  ogImage: '/og-image.jpg',
  links: {
    github: 'https://github.com/tuoprofilo',
    linkedin: 'https://linkedin.com/in/tuoprofilo',
    instagram: 'https://instagram.com/tuoprofilo',
  },
};

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    'full-stack developer',
    'freelance developer',
    'web developer',
    'React',
    'Next.js',
    'TypeScript',
    'JavaScript',
    'portfolio',
  ],
  authors: [
    {
      name: 'Il Tuo Nome',
    },
  ],
  creator: 'Il Tuo Nome',
  openGraph: {
    type: 'website',
    locale: 'it_IT',
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
  },
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.name,
    description: siteConfig.description,
    creator: '@tuousername',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    // google: 'your-google-verification-code',
    // yandex: 'your-yandex-verification-code',
  },
};
