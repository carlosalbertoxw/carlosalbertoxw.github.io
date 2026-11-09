import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import { ogImage, siteUrl } from "@/site";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Carlos Alberto",
    template: "%s | Carlos Alberto",
  },
  description: "Portafolio personal y profesional de Carlos Alberto",
  metadataBase: new URL(siteUrl),
  // "./" se resuelve con la ruta de cada página: cada una se declara canónica a sí
  // misma y se comparte con su propia URL, no con la de la portada
  alternates: {
    canonical: "./",
  },
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    type: "website",
    locale: "es_MX",
    url: "./",
    siteName: "Carlos Alberto",
    images: [ogImage],
  },
  twitter: {
    card: "summary_large_image",
    images: [ogImage],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body className="bg-white text-neutral-900 antialiased">
        <Navbar />
        {children}
        {/* El año se fija al generar el sitio: se actualiza con el primer despliegue de cada año */}
        <footer className="border-t border-slate-200 bg-slate-50 py-6 text-center text-xs text-slate-500">
          &copy; {new Date().getFullYear()} Carlos Alberto ·{" "}
          <Link href="/privacy" className="hover:text-slate-700 underline underline-offset-2">
            Aviso de privacidad
          </Link>
        </footer>
      </body>
    </html>
  );
}
