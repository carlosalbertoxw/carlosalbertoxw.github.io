import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
import Navbar from "@/components/Navbar";
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
  metadataBase: new URL("https://carlosalbertoxw.com"),
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    type: "website",
    locale: "es_MX",
    url: "https://carlosalbertoxw.com",
    siteName: "Carlos Alberto",
    // La imagen la genera src/app/opengraph-image.tsx en el build
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
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
