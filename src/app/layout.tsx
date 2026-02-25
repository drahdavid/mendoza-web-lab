import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import "./globals.css";
import { Logo } from "@/components/Logo";

export const metadata: Metadata = {
  title: "Mendoza Web Lab | Tecnología que convierte.",
  description:
    "Desarrollo web moderno para negocios que quieren crecer. Creamos landing pages rápidas, optimizadas y diseñadas para generar más consultas.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className={`${GeistSans.variable} ${GeistMono.variable}`}>
      <body className="min-h-screen antialiased font-sans bg-brand-black text-brand-white selection:bg-brand-accent/30">
        <header className="fixed top-0 left-0 right-0 z-50 bg-brand-black/80 backdrop-blur-md border-b border-white/5">
          <nav className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
            <a href="#" className="flex items-center gap-3 group">
              <Logo className="h-10 w-auto group-hover:scale-110 transition-transform duration-300" />
              <span className="font-bold text-brand-white tracking-tighter text-xl">
                Mendoza<span className="text-brand-accent">WebLab</span>
              </span>
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
      </body>
    </html>
  );
}
