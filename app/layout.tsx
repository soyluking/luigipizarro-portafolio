import type { Metadata } from 'next';
import { Fira_Code } from 'next/font/google';
import { GoogleAnalytics } from '@next/third-parties/google';
import { SpeedInsights } from '@vercel/speed-insights/next';
import './globals.css';

const fira = Fira_Code({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Luigi Pizarro | Desarrollador de Software',
  description:
    'Desarrollador de software con más de 10 años de experiencia creando productos digitales que combinan funcionalidad y diseño impactante. Javascript, React, TypeScript, Next.js, Node, React Native, CSS, Performance, WordPress, Shopify.',
  robots: 'index, follow',
  alternates: { canonical: 'https://luigipizarro.com/' },
  openGraph: {
    type: 'website',
    url: 'https://luigipizarro.com/',
    title: 'Luigi Pizarro | Desarrollador de Software',
    description:
      'Más de 10 años de experiencia creando productos digitales que combinan funcionalidad y diseño impactante. Javascript, React, TypeScript, Next.js, Node, React Native, CSS, Performance, WordPress, Shopify.',
    siteName: 'Luigi Pizarro',
    images: [
      {
        url: 'https://luigipizarro.com/social-image.png',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@soyluking',
    creator: '@soyluking',
    images: 'https://luigipizarro.com/social-image.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={fira.className}>
        {children}

        <SpeedInsights />
      </body>

      {process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS && (
        <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS} />
      )}
    </html>
  );
}
