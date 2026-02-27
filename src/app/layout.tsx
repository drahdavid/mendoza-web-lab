import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import { Logo } from "@/components/Logo";

export const metadata: Metadata = {
  metadataBase: new URL("https://mendozaweblab.com"),
  title: "Mendoza Web Lab | Hacemos que te encuentren.",
  description:
    "Creamos identidad y presencia web profesional para negocios de Mendoza que quieren verse mejor y generar más consultas. Diseño web, SEO local y branding.",
  keywords: [
    "diseño web mendoza",
    "páginas web mendoza",
    "presencia web mendoza",
    "seo local mendoza",
    "branding mendoza",
    "landing page mendoza",
    "agencia web mendoza argentina",
  ],
  authors: [{ name: "Mendoza Web Lab" }],
  openGraph: {
    title: "Mendoza Web Lab | Hacemos que te encuentren.",
    description:
      "Creamos identidad y presencia web profesional para negocios de Mendoza que quieren verse mejor y generar más consultas.",
    url: "https://mendozaweblab.com",
    siteName: "Mendoza Web Lab",
    locale: "es_AR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mendoza Web Lab | Hacemos que te encuentren.",
    description:
      "Creamos identidad y presencia web profesional para negocios de Mendoza que quieren verse mejor y generar más consultas.",
  },
  icons: {
    icon: "/favicon.png",
    apple: "/favicon.png",
  },
};

const NAV_LINKS = [
  { href: "#servicios", label: "Servicios" },
  { href: "#paquetes", label: "Paquetes" },
  { href: "#proceso", label: "Cómo trabajamos" },
  { href: "#faq", label: "FAQ" },
  { href: "#contacto", label: "Contacto" },
] as const;

const WA_URL =
  "https://wa.me/5492612005950?text=Hola%20Mendoza%20Web%20Lab%2C%20me%20gustar%C3%ADa%20hablar%20sobre%20un%20proyecto%20web.";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <head>
        <link rel="icon" href="/favicon.png" type="image/png" />
        <link rel="apple-touch-icon" href="/favicon.png" />
      </head>
      <body className="min-h-screen antialiased font-sans bg-brand-black text-brand-white selection:bg-brand-accent/30">
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-RNXYDDNMKP"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-RNXYDDNMKP');
          `}
        </Script>
        <header className="fixed top-0 left-0 right-0 z-50 bg-brand-black/80 backdrop-blur-md border-b border-white/5">
          <nav className="max-w-7xl mx-auto px-6 py-1 flex items-center justify-between">
            <a
              href="/"
              className="flex items-center group"
              aria-label="Mendoza Web Lab - Ir al inicio"
            >
              <Logo className="h-20 w-56 group-hover:scale-105 transition-transform duration-300" />
            </a>

            <div className="hidden md:flex items-center gap-6">
              {NAV_LINKS.map(({ href, label }) => (
                <a
                  key={href}
                  href={href}
                  className="text-sm font-medium text-brand-white/60 hover:text-brand-white transition-colors"
                >
                  {label}
                </a>
              ))}
              <a
                href={WA_URL}
                target="_blank"
                rel="noreferrer"
                className="px-6 py-2.5 bg-brand-accent text-white rounded-full font-semibold hover:bg-brand-accent/90 hover:shadow-[0_0_20px_rgba(59,130,246,0.4)] transition-all transform hover:-translate-y-0.5"
              >
                Solicitar propuesta
              </a>
            </div>

            {/* Mobile CTA */}
            <a
              href={WA_URL}
              target="_blank"
              rel="noreferrer"
              className="md:hidden px-4 py-2 bg-brand-accent text-white text-sm rounded-full font-semibold"
            >
              Propuesta
            </a>
          </nav>
        </header>

        <main className="pt-0">{children}</main>

        {/* WhatsApp floating button */}
        <a
          href={WA_URL}
          target="_blank"
          rel="noreferrer"
          aria-label="Chatear por WhatsApp"
          className="fixed bottom-6 right-6 z-40 inline-flex items-center justify-center gap-2.5 rounded-full bg-emerald-500 text-white px-5 py-3 shadow-[0_15px_40px_rgba(16,185,129,0.5)] hover:bg-emerald-400 hover:shadow-[0_20px_50px_rgba(16,185,129,0.7)] transition-all duration-300 group"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-5 h-5 shrink-0"
            aria-hidden="true"
          >
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347zm-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884zm8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
          </svg>
          <span className="hidden md:inline text-sm font-semibold tracking-wide">
            Chatear por WhatsApp
          </span>
        </a>
      </body>
    </html>
  );
}
