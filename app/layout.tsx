/*
 * Geovanedd Portfolio
 * Copyright (C) 2024 Geovanedd
 * Licensed under GNU GPL v3
 */
import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
config.autoAddCss = false;

// ─── LAYOUT & METADATA ────────────────────────────────────────────────────────

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

const siteUrl  = 'https://geovanedd.me';
const siteName = 'GeovaneDD';
const defaultTitle       = 'Geovanedd — Developer · Open-Source · Privacy-First';
const defaultDescription = 'Geovanedd is a web developer crafting open-source tools and self-hosted applications with TypeScript, React and Next.js. Explore projects built for privacy, security and performance.';

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: [{ color: '#080810' }],
  colorScheme: 'dark',
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title:       { default: defaultTitle, template: `%s · ${siteName}` },
  description: defaultDescription,
  keywords: [
    'full-stack developer','web developer','open-source','self-hosted',
    'TypeScript','React','Next.js','Node.js','privacy','API','portfolio','Brazil',
  ],
  authors:   [{ name: 'Geovanedd', url: 'https://github.com/geovane2dd' }],
  creator:   'Geovanedd',
  publisher: 'Geovanedd',
  robots:    { index: true, follow: true, googleBot: { index: true, follow: true, 'max-snippet': -1 } },
  alternates:{ canonical: siteUrl },
  openGraph: {
    type: 'website', locale: 'en_US', url: siteUrl,
    siteName: `${siteName} Portfolio`,
    title: defaultTitle, description: defaultDescription,
    images: [{ url: `${siteUrl}/og-image.png`, width: 1200, height: 630, alt: `${siteName} — Developer Portfolio` }],
  },
  twitter: {
    card: 'summary_large_image', site: '@Geovanedd', creator: '@Geovanedd',
    title: defaultTitle, description: defaultDescription,
    images: [`${siteUrl}/og-image.png`],
  },
  other: {
    'apple-mobile-web-app-capable':          'yes',
    'apple-mobile-web-app-status-bar-style': 'black-translucent',
    'apple-mobile-web-app-title':            siteName,
  },
};

export const dynamic   = 'force-static';
export const revalidate = 3600;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" dir="ltr">
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-Content-Type-Options" content="nosniff" />
        <meta httpEquiv="X-Frame-Options"        content="DENY" />
        <meta httpEquiv="X-XSS-Protection"       content="1; mode=block" />
        <meta name="referrer"                    content="strict-origin-when-cross-origin" />
        <link rel="icon"            href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest"        href="/manifest.json" />
        <link rel="canonical"       href={siteUrl} />
        {/* Structured Data */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          "name": "Geovanedd",
          "url": siteUrl,
          "sameAs": ["https://github.com/geovane2dd"],
          "jobTitle": "Full-Stack Web Developer",
          "knowsAbout": ["TypeScript","React","Next.js","Node.js","Open-Source","Privacy"],
          "description": defaultDescription,
        })}} />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} bg-[#080810] text-[#e2e2f0] min-h-screen antialiased`}
        suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}