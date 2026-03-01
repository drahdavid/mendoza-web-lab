import { ChevronDown } from "lucide-react";
import { WA_GENERAL } from "../constants";

export const HeroSection = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center relative pt-24 px-6 pb-24">
      <div className="max-w-4xl mx-auto text-center">
        <p className="inline-flex items-center gap-2 text-brand-accent text-xs font-bold tracking-[0.25em] uppercase mb-8 border border-brand-accent/20 rounded-full px-4 py-1.5 bg-brand-accent/5">
          <span className="w-1.5 h-1.5 rounded-full bg-brand-accent inline-block" />
          Diseño · Branding · SEO
        </p>

        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-brand-white leading-[1.05] tracking-tight mb-8">
          <span className="block">Más clientes empiezan</span>
          <span className="inline-block whitespace-nowrap bg-clip-text bg-gradient-to-r from-brand-accent via-brand-white to-brand-white">
            en Google.
          </span>
          <span className="block">Nosotros hacemos que</span>
          <span className="inline-block bg-clip-text text-transparent bg-gradient-to-r from-brand-white to-brand-accent/70">
            te encuentren.
          </span>
        </h1>

        <p className="text-lg md:text-xl text-brand-white/65 max-w-2xl mx-auto mb-12 leading-relaxed">
          Creamos identidad y presencia web profesional para negocios que
          quieren <strong className="text-brand-white/90">verse mejor</strong> y
          generar más consultas.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-stretch sm:items-center">
          <a
            href={WA_GENERAL}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl bg-brand-accent text-white font-semibold hover:bg-brand-accent/90 hover:shadow-[0_0_30px_rgba(59,130,246,0.4)] transition-all duration-300 transform hover:-translate-y-0.5"
          >
            Solicitar propuesta
          </a>
          <a
            href="#servicios"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-white/5 border border-white/10 text-brand-white font-semibold hover:bg-white/10 hover:border-white/20 transition-all duration-300 transform hover:-translate-y-0.5"
          >
            Ver servicios
            <ChevronDown className="w-4 h-4" />
          </a>
        </div>

        {/* Social proof placeholder */}
        <p className="mt-12 text-brand-white/30 text-xs tracking-wider uppercase">
          Negocios que ya tienen presencia profesional
        </p>
      </div>
    </section>
  );
};
