import type { Metadata } from 'next';

export const siteConfig = {
  name: 'Roberto Scarci · Portfolio',
  description: 'Portfolio di Roberto Scarci — Web Developer, Building Faster Products with AI. Full Stack Developer da Taranto.',
  url: 'https://robertoscarci.dev',
  ogImage: '/og-image.jpg',
  links: {
    github: 'https://github.com/RobertoScarci',
    linkedin: 'https://www.linkedin.com/in/roberto-scarci-0625ab2a6/',
    instagram: 'https://www.instagram.com/robertoscarci_/',
    facebook: 'https://www.facebook.com/roberto.scarci',
    tiktok: 'https://www.tiktok.com/@robertoscarci?lang=en',
    twitter: '#',
    dribbble: '#',
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
    'web developer',
    'React',
    'Next.js',
    'TypeScript',
    'JavaScript',
    'Laravel',
    'Vue.js',
    'Boolean',
    'Taranto',
    'AI',
    'consulenza',
    'portfolio',
  ],
  authors: [
    {
      name: 'Roberto Scarci',
    },
  ],
  creator: 'Roberto Scarci',
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
    creator: '@robertoscarci',
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
