import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';

config.autoAddCss = false;

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
  display: "block",
  preload: true,
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
  display: "block",
  preload: true,
});

const siteUrl = 'https://geovanedd.me';
const siteName = 'GeovaneDD';
const defaultTitle = 'GeovaneDD - Web Developer Portfolio | Open-Source & Self-Hosted Solutions';
const defaultDescription = 'Professional portfolio showcasing open-source projects and self-hosted solutions by GeovaneDD. Discover web development projects built with TypeScript, React, Next.js, and modern technologies. Explore tools for privacy, security, and efficient web experiences.';

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#0a0a0a' },
    { media: '(prefers-color-scheme: dark)', color: '#0a0a0a' }
  ],
  colorScheme: 'dark',
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: defaultTitle,
    template: `%s | ${siteName}`
  },
  description: defaultDescription,
  keywords: [
    'web developer',
    'frontend developer',
    'backend developer',
    'full stack developer',
    'self-hosted',
    'open-source',
    'portfolio',
    'programming',
    'software development',
    'web development',
    'security',
    'DevOps',
    'cybersecurity',
    'TypeScript',
    'React',
    'Next.js',
    'Node.js',
    'API development',
    'Brazil',
    'Brasil'
  ],
  authors: [
    { 
      name: 'GeovaneDD', 
      url: 'https://github.com/geovane2dd' 
    }
  ],
  creator: 'GeovaneDD',
  publisher: 'GeovaneDD',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
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
    // Note: Bingbot configuration is handled in app/robots.ts
  },
  alternates: {
    canonical: siteUrl,
    languages: {
      'en-US': siteUrl,
      'pt-BR': siteUrl,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    alternateLocale: ['pt_BR'],
    url: siteUrl,
    siteName: `${siteName} Portfolio`,
    title: defaultTitle,
    description: defaultDescription,
    images: [
      {
        url: `${siteUrl}/og-image.png`,
        width: 1200,
        height: 630,
        alt: `${siteName} - Web Developer Portfolio`,
        type: 'image/png',
      },
      {
        url: `${siteUrl}/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: `${siteName} - Web Developer Portfolio`,
        type: 'image/jpeg',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@Geovanedd',
    creator: '@Geovanedd',
    title: defaultTitle,
    description: defaultDescription,
    images: [`${siteUrl}/og-image.png`],
  },
  verification: {
    // google: 'your-google-verification-code',
    // yandex: 'your-yandex-verification-code',
    // yahoo: 'your-yahoo-verification-code',
  },
  category: 'Portfolio',
  classification: 'Portfolio Website',
  other: {
    'apple-mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-status-bar-style': 'black-translucent',
    'apple-mobile-web-app-title': siteName,
  },
};

// Ensure static generation for SEO
export const dynamic = 'force-static';
export const revalidate = 3600;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'GeovaneDD',
    url: siteUrl,
    image: `${siteUrl}/og-image.png`,
    sameAs: [
      'https://github.com/geovane2dd'
    ],
    jobTitle: 'Web Developer',
    worksFor: {
      '@type': 'Organization',
      name: 'Freelance',
    },
    description: defaultDescription,
    knowsAbout: [
      'Web Development',
      'Open Source',
      'Self-Hosted Solutions',
      'TypeScript',
      'React',
      'Next.js',
      'API Development',
      'Security'
    ],
  };

  const websiteJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: siteName,
    url: siteUrl,
    description: defaultDescription,
    publisher: {
      '@type': 'Person',
      name: 'GeovaneDD',
    },
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: `${siteUrl}/?q={search_term_string}`,
      },
      'query-input': 'required name=search_term_string',
    },
  };

  const portfolioJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'CreativeWork',
    '@id': `${siteUrl}/#portfolio`,
    name: `${siteName} Portfolio`,
    description: 'Collection of open-source and self-hosted projects by GeovaneDD',
    creator: {
      '@type': 'Person',
      name: 'GeovaneDD',
    },
  };

  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: siteUrl,
      },
    ],
  };

  return (
    <html lang="en" dir="ltr">
      <head>
        <meta charSet="utf-8" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="google" content="notranslate" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="canonical" href={siteUrl} />
        
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(portfolioJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
        />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} bg-[#0a0a0a] text-[#e5e5e5] min-h-screen flex flex-col antialiased`} suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
