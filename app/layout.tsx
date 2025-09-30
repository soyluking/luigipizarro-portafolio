import type { Metadata } from "next";
import { Fira_Code } from "next/font/google";
import { GoogleAnalytics } from "@next/third-parties/google";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";

const fira = Fira_Code({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Luigi Pizarro | Líder Técnico e Ingeniero de Software",
  description:
    "Líder técnico con 10 años de experiencia. Especializado en AI, productividad y desarrollo de productos digitales. Fundador de Extasiados.",
  robots: "index, follow",
  alternates: { canonical: process.env.NEXT_PUBLIC_BASE_URL },
  openGraph: {
    type: "website",
    url: process.env.NEXT_PUBLIC_BASE_URL,
    title: "Luigi Pizarro | Líder Técnico e Ingeniero de Software",
    description:
      "Líder técnico con 10 años de experiencia. Especializado en AI, productividad y desarrollo de productos digitales. Fundador de Extasiados.",
    siteName: "Luigi Pizarro",
    images: [
      {
        url: `${process.env.NEXT_PUBLIC_BASE_URL}/social-image.png`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@soyluking",
    creator: "@soyluking",
    images: `${process.env.NEXT_PUBLIC_BASE_URL}/social-image.png`,
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
        <Analytics />
      </body>

      {process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS && (
        <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS} />
      )}
    </html>
  );
}
