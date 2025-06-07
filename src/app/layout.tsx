import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geist = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Dockit - Accesorios Tecnológicos Modulares para tu Escritorio",
  description: "Transforma tu espacio de trabajo con accesorios tecnológicos modulares. BaseHub, VoltBar, FlexArm, PocketDock y GlowBar. Diseño premium, funcionalidad y estética para Latinoamérica.",
  keywords: ["accesorios escritorio", "tecnología modular", "hub USB", "soporte laptop", "organización escritorio", "estación trabajo", "accesorios tecnológicos", "BaseHub", "VoltBar", "FlexArm"],
  authors: [{ name: "Dockit" }],
  creator: "Dockit",
  publisher: "Dockit",
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "es_ES",
    url: "https://dockit.com",
    siteName: "Dockit",
    title: "Dockit - Accesorios Tecnológicos Modulares",
    description: "Transforma tu espacio de trabajo con accesorios tecnológicos modulares que combinan funcionalidad, diseño y estética premium.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Dockit - Accesorios Tecnológicos Modulares",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dockit - Accesorios Tecnológicos Modulares",
    description: "Transforma tu espacio de trabajo con productos modulares que funcionan solos o en conjunto.",
    images: ["/og-image.jpg"],
  },
  viewport: "width=device-width, initial-scale=1",
  themeColor: "#2563eb",
  other: {
    "application-name": "Dockit",
    "msapplication-TileColor": "#2563eb",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="scroll-smooth">
      <head>
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="google-site-verification" content="your-google-site-verification-code" />
      </head>
      <body
        className={`${geist.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
