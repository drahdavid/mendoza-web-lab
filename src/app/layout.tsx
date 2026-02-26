import type { Metadata } from "next";
import "./globals.css";
import { Logo } from "@/components/Logo";

export const metadata: Metadata = {
  metadataBase: new URL("https://mendozaweblab.com"),
  title: "Mendoza Web Lab | Tecnología que convierte.",
  description:
    "Desarrollo web moderno para negocios que quieren crecer. Creamos landing pages rápidas, optimizadas y diseñadas para generar más consultas.",
  keywords: [
    "desarrollo web",
    "landing pages",
    "mendoza",
    "diseño web",
    "seo",
    "sitios web",
    "agencia web",
  ],
  authors: [{ name: "Mendoza Web Lab" }],
  openGraph: {
    title: "Mendoza Web Lab | Tecnología que convierte.",
    description:
      "Desarrollo web moderno para negocios que quieren crecer. Creamos landing pages rápidas, optimizadas y diseñadas para generar más consultas.",
    url: "https://mendozaweblab.com",
    siteName: "Mendoza Web Lab",
    locale: "es_AR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mendoza Web Lab | Tecnología que convierte.",
    description:
      "Desarrollo web moderno para negocios que quieren crecer. Creamos landing pages rápidas, optimizadas y diseñadas para generar más consultas.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className="min-h-screen antialiased font-sans bg-brand-black text-brand-white selection:bg-brand-accent/30">
        <header className="fixed top-0 left-0 right-0 z-50 bg-brand-black/80 backdrop-blur-md border-b border-white/5">
          <nav className="max-w-7xl mx-auto px-6 py-1 flex items-center justify-between">
            <a
              href="#"
              className="flex items-center group"
              aria-label="Mendoza Web Lab - Ir al inicio"
            >
              <Logo className="h-20 w-56 group-hover:scale-105 transition-transform duration-300" />
            </a>
            <div className="hidden md:flex items-center gap-8">
              <a
                href="#soluciones"
                className="text-sm font-medium text-brand-white/60 hover:text-brand-white transition-colors"
              >
                Soluciones
              </a>
              <a
                href="#contacto"
                className="px-6 py-2.5 bg-brand-accent text-white rounded-full font-semibold hover:shadow-[0_0_15px_rgba(139,92,246,0.3)] transition-all transform hover:-translate-y-0.5"
              >
                Solicitar propuesta
              </a>
            </div>
          </nav>
        </header>
        <main className="pt-0">{children}</main>

        {/* Botón flotante de WhatsApp */}
        <a
          href="https://wa.me/5492612005950?text=Hola%20Mendoza%20Web%20Lab%2C%20me%20gustar%C3%ADa%20hablar%20sobre%20un%20proyecto%20web."
          target="_blank"
          rel="noreferrer"
          className="fixed bottom-6 right-6 z-40 inline-flex items-center justify-center gap-2 rounded-full bg-emerald-500 text-white px-5 py-3 shadow-[0_15px_40px_rgba(16,185,129,0.5)] hover:bg-emerald-400 hover:shadow-[0_20px_50px_rgba(16,185,129,0.7)] transition-all duration-300 group"
        >
          <span className="hidden md:inline text-sm font-semibold tracking-wide">
            Chatear por WhatsApp
          </span>
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-emerald-600 group-hover:bg-emerald-500 transition-colors">
            <span className="h-2 w-2 rounded-full bg-white shadow-[0_0_10px_rgba(255,255,255,0.9)]" />
          </span>
        </a>
      </body>
    </html>
  );
}
