"use client";

import {
  Crown,
  Gauge,
  Search,
  Smartphone,
  ShieldCheck,
  MessageCircle,
  ClipboardList,
  Palette,
  Code2,
  Rocket,
  ChevronDown,
  Info,
} from "lucide-react";
import { useState } from "react";
import { ContactForm } from "@/components/ContactForm";
import { DiagnosticModal } from "@/components/DiagnosticModal";
import { Tooltip } from "@/components/Tooltip";

// ─── Constants ────────────────────────────────────────────────────────────────

const WA_BASE = "https://wa.me/5492612005950";

const waLink = (text: string) => `${WA_BASE}?text=${encodeURIComponent(text)}`;

const WA_GENERAL = waLink(
  "Hola Web Lab, me gustaría hablar sobre un proyecto web.",
);

const SOLUTION_CARDS = [
  {
    title: "Presencia profesional",
    desc: "Transmitís confianza y seriedad desde el primer clic. Tu negocio merece verse como lo que realmente es.",
    Icon: Crown,
  },
  {
    title: "Visibilidad en Google",
    desc: "Aparecés cuando alguien busca lo que ofrecés. SEO real, no promesas vacías.",
    Icon: Search,
  },
  {
    title: "Identidad coherente",
    desc: "Logo, colores, tipografía y web que forman un sistema unificado. Tu marca habla sola.",
    Icon: Palette,
  },
  {
    title: "Web rápida y confiable",
    desc: "Carga en segundos, funciona en cualquier celular y nunca te deja caído. Tecnología moderna.",
    Icon: Gauge,
  },
  {
    title: "Optimizada para móviles",
    desc: "Más del 80% de tus visitas llegan desde un teléfono. Diseñamos mobile-first, siempre.",
    Icon: Smartphone,
  },
  {
    title: "Genera consultas reales",
    desc: "Botones de WhatsApp, formularios y llamadas a la acción pensados para convertir visitas en contactos.",
    Icon: MessageCircle,
  },
] as const;

type Package = {
  id: string;
  featured: boolean;
  badge: string;
  badgeColor: string;
  borderHover: string;
  title: string;
  targetAudience: string;
  mainDiff: string;
  desc: string;
  price: string;
  delivery: string;
  includes: readonly { text: string; tooltip: string }[];
  excludes: readonly { text: string; tooltip: string }[];
  demoHref: string;
  waText: string;
};

const PACKAGES: Package[] = [
  {
    id: "start",
    featured: false,
    badge: "Pack Start",
    badgeColor: "bg-emerald-500/15 text-emerald-300",
    borderHover: "hover:border-emerald-300/50",
    title: "Presencia Start",
    targetAudience:
      "Emprendedores y negocios que recién arrancan y necesitan existir en internet sin complicarse.",
    mainDiff: "Existís online en menos de una semana",
    desc: "Una identidad mínima y una web simple pero profesional. El primer paso para que te encuentren.",
    price: "Desde $190.000",
    delivery: "Entrega estimada: 5–7 días hábiles",
    includes: [
      {
        text: "Logo minimalista (1 propuesta + 1 ajuste)",
        tooltip:
          "Diseño inicial del logo para tu marca, un formato rápido y simple.",
      },
      {
        text: "Paleta de colores y tipografía de marca",
        tooltip:
          "Colores y estilos de letra definidos para que tu marca se vea profesional y coherente.",
      },
      {
        text: "Landing de 1 página (hasta 5 secciones)",
        tooltip:
          "Una única página web estructurada con toda la información clave de tu negocio. Ideal para presentar servicios rápido.",
      },
      {
        text: "Responsive para celulares y tablets",
        tooltip:
          "Tu web se verá perfecta y será fácil de usar desde cualquier teléfono o dispositivo.",
      },
      {
        text: "Botón WhatsApp + mapa de ubicación",
        tooltip:
          "Tus clientes podrán contactarte directamente por WhatsApp a un clic de distancia.",
      },
      {
        text: "Hosting básico + deploy",
        tooltip:
          "Nos encargamos de subir tu web a internet para que esté visible para todos, sin dolores de cabeza técnicos.",
      },
      {
        text: "1 ronda de cambios",
        tooltip: "Una revisión para ajustar detalles antes de publicar.",
      },
    ],
    excludes: [
      {
        text: "SEO avanzado",
        tooltip:
          "Optimización técnica profunda para aparecer en los primeros resultados de Google.",
      },
      {
        text: "Integraciones complejas",
        tooltip:
          "Conexiones con sistemas de reservas, tiendas online o CRM empresariales.",
      },
      {
        text: "Copywriting estratégico",
        tooltip:
          "Redacción de textos persuasivos diseñados específicamente para vender a tu cliente ideal.",
      },
    ],
    demoHref: "/demo/start",
    waText:
      "Hola Web Lab, me interesa el Pack Start (desde $190.000). Quisiera más info.",
  },
  {
    id: "pro",
    badge: "Pack Pro",
    badgeColor: "bg-brand-accent text-white",
    borderHover: "",
    featured: true,
    title: "Presencia Pro",
    targetAudience:
      "Negocios que ya funcionan y quieren verse bien para atraer más clientes desde Google.",
    mainDiff: "Diseño a medida + aparecer en Google",
    desc: "La combinación justa de diseño profesional, SEO básico y herramientas para generar consultas desde el día uno.",
    price: "Desde $780.000",
    delivery: "Entrega estimada: 10–15 días hábiles",
    includes: [
      {
        text: "Branding completo (logo + sistema visual básico)",
        tooltip:
          "Diseño de logo y elementos visuales que le dan vida y personalidad a tu marca.",
      },
      {
        text: "Landing optimizada (hasta 6 secciones)",
        tooltip:
          "Página diseñada detalladamente no sólo para informar, sino para convertir visitantes en clientes.",
      },
      {
        text: "Diseño 100% personalizado (no templates)",
        tooltip:
          "Tu web tendrá un diseño único, pensado desde cero exclusivamente para tu negocio.",
      },
      {
        text: "Formulario de contacto funcional",
        tooltip:
          "Tus visitas podrán dejarte sus datos o consultas directamente desde la web para responderles al instante.",
      },
      {
        text: "SEO local básico (aparecer en Google)",
        tooltip:
          "Configuraciones iniciales para que las personas de tu zona te encuentren en las búsquedas de Google.",
      },
      {
        text: "Google Analytics (sabés de dónde llegan tus clientes)",
        tooltip:
          "Herramienta que te permite ver cuánta gente visita tu web, qué miran y desde dónde llegan.",
      },
      {
        text: "Configuración dominio + hosting",
        tooltip:
          "Te ayudamos a registrar el nombre de tu web (.com o .com.ar) y la subimos a internet sin estrés.",
      },
      {
        text: "2 rondas de ajustes",
        tooltip:
          "Dos instancias de revisión para dejar tu web exactamente como te gusta.",
      },
    ],
    excludes: [],
    demoHref: "/demo/pro",
    waText:
      "Hola Web Lab, me interesa el Pack Pro (desde $780.000). Quisiera más info.",
  },
  {
    id: "marca-web",
    featured: false,
    badge: "Pack Marca + Web",
    badgeColor: "bg-violet-500/15 text-violet-300",
    borderHover: "hover:border-violet-400/50",
    title: "Marca + Web Profesional",
    targetAudience:
      "Marcas que quieren escalar y necesitan una estrategia real: más páginas, más herramientas, más presencia.",
    mainDiff: "Estrategia completa para escalar tu negocio",
    desc: "No es solo una web. Es un sistema de presencia digital listo para crecer: branding, texto estratégico, integraciones y SEO técnico.",
    price: "Desde $1.480.000",
    delivery: "Entrega estimada: 15–25 días hábiles",
    includes: [
      {
        text: "Branding estratégico completo + mini guía de marca",
        tooltip:
          "Construimos la identidad visual completa de tu negocio, sumado a un manual de uso para el futuro.",
      },
      {
        text: "Web de 4–6 páginas (no solo una landing)",
        tooltip:
          "Un sitio web completo con páginas separadas para Inicio, Nosotros, Servicios, Contacto, Preguntas, etc.",
      },
      {
        text: "Copywriting estructurado (textos que venden)",
        tooltip:
          "Escribimos los textos de tu web con técnicas persuasivas para convencer y comunicar efectivamente a tus clientes.",
      },
      {
        text: "Optimización de performance (velocidad real)",
        tooltip:
          "Aseguramos que tu web cargue súper rápido, lo cual mejora la experiencia y ayuda significativamente en Google.",
      },
      {
        text: "SEO técnico inicial",
        tooltip:
          "Ajustes avanzados en código y semántica para ayudar a Google a entender mejor tu sitio e indexarlo eficientemente.",
      },
      {
        text: "Integraciones (CRM / Mail / Pixel)",
        tooltip:
          "Conectamos tu web con herramientas de marketing como Facebook Pixel, sistemas de email o herramientas de gestión de clientes.",
      },
      {
        text: "Analytics + Search Console",
        tooltip:
          "Te instalamos herramientas completas de Google para monitorear tu tráfico web, rendimiento en buscadores y salud del sitio.",
      },
      {
        text: "3 rondas de ajustes",
        tooltip: "Tres instancias de revisión y perfeccionamiento detallado.",
      },
    ],
    excludes: [],
    demoHref: "/demo/marca-web",
    waText:
      "Hola Web Lab, me interesa el Pack Marca + Web (desde $1.480.000). Quisiera más info.",
  },
];

type CompareRow = {
  label: string;
  start: string;
  pro: string;
  marcaWeb: string;
};

const COMPARE_ROWS: CompareRow[] = [
  {
    label: "Logo incluido",
    start: "Minimalista",
    pro: "Completo",
    marcaWeb: "Estratégico",
  },
  { label: "Diseño personalizado", start: "—", pro: "✓", marcaWeb: "✓" },
  {
    label: "Páginas",
    start: "1 (landing)",
    pro: "1 (landing completa)",
    marcaWeb: "4–6 páginas",
  },
  { label: "SEO Google", start: "—", pro: "Básico", marcaWeb: "Técnico" },
  { label: "Analytics", start: "—", pro: "✓", marcaWeb: "✓ + Search Console" },
  { label: "Copywriting", start: "—", pro: "—", marcaWeb: "✓" },
  {
    label: "Integraciones (CRM/Mail/Pixel)",
    start: "—",
    pro: "—",
    marcaWeb: "✓",
  },
  { label: "Rondas de ajuste", start: "1", pro: "2", marcaWeb: "3" },
];

const PROCESS_STEPS = [
  {
    number: "01",
    title: "Diagnóstico",
    desc: "Completás un formulario breve con datos de tu negocio. Nada kilométrico — 6 preguntas que nos permiten preparar una propuesta real.",
    cta: "Completar diagnóstico",
    Icon: ClipboardList,
  },
  {
    number: "02",
    title: "Propuesta visual",
    desc: "Diseñamos una propuesta de identidad y estructura web. La revisás antes de escribir una sola línea de código.",
    cta: null,
    Icon: Palette,
  },
  {
    number: "03",
    title: "Desarrollo",
    desc: "Construimos tu sitio con tecnología moderna, rápida y confiable. Te mantenemos al tanto en todo momento.",
    cta: null,
    Icon: Code2,
  },
  {
    number: "04",
    title: "Lanzamiento",
    desc: "Publicamos tu web, configuramos dominio y analytics. Te entregamos todo listo para recibir clientes.",
    cta: null,
    Icon: Rocket,
  },
] as const;

const FAQ_ITEMS = [
  {
    q: "¿Cuánto tiempo tarda en estar lista mi web?",
    a: "Depende del paquete: el Start está listo en 5-7 días, el Pro en 10-15 días y el Marca + Web en 15-25 días. Los plazos arrancan cuando recibimos toda la información de tu negocio.",
  },
  {
    q: "¿Qué necesito tener listo yo para empezar?",
    a: "Básicamente: datos de tu negocio, fotos (o te orientamos para conseguirlas), y una idea de lo que querés comunicar. El resto lo hacemos nosotros.",
  },
  {
    q: "¿El dominio (.com / .com.ar) está incluido?",
    a: "El registro del dominio es un costo adicional que se paga directamente al proveedor (aprox. USD 10–15/año). Te guiamos en el proceso.",
  },
  {
    q: "¿Puedo pagar en cuotas?",
    a: "Sí. Trabajamos con un adelanto del 50% para empezar y el resto al momento de la entrega. Para proyectos grandes podemos acordar un plan en 3 cuotas.",
  },
  {
    q: "¿Qué incluye exactamente una 'ronda de cambios'?",
    a: "Es una instancia de revisión donde podés pedir ajustes sobre el diseño o contenido existente (textos, colores, orden de secciones). No incluye rediseño total ni nuevas secciones.",
  },
  {
    q: "¿Qué pasa después del lanzamiento? ¿Quién mantiene la web?",
    a: "Ofrecemos un Plan de Mantenimiento Mensual desde $70.000/mes que incluye hosting, soporte técnico, cambios menores y monitoreo. Si preferís manejarlo solo, te entregamos todo documentado.",
  },
] as const;

// ─── Components ───────────────────────────────────────────────────────────────

const SectionLabel = ({ children }: { children: React.ReactNode }) => (
  <p className="text-brand-accent text-sm font-bold tracking-[0.2em] uppercase mb-4">
    {children}
  </p>
);

const CheckCell = ({ value }: { value: string }) => {
  const positive = value !== "—";
  return (
    <td
      className={`px-4 py-3.5 text-center text-sm ${positive ? "text-brand-white/80" : "text-brand-white/20"}`}
    >
      {value}
    </td>
  );
};

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function Home() {
  const [isDiagnosticOpen, setIsDiagnosticOpen] = useState(false);

  return (
    <div className="relative overflow-x-hidden">
      {/* Ambient orbs */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-brand-accent/8 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-[20%] right-[-10%] w-[30%] h-[30%] bg-brand-mint/5 rounded-full blur-[120px] pointer-events-none" />

      <DiagnosticModal
        isOpen={isDiagnosticOpen}
        onClose={() => setIsDiagnosticOpen(false)}
      />

      {/* ── 1. HERO ── */}
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
            quieren <strong className="text-brand-white/90">verse mejor</strong>{" "}
            y generar más consultas.
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

      {/* ── 2. PROBLEMA ── */}
      <section className="py-24 px-6 border-y border-white/5 bg-brand-gray/40 relative">
        <div className="max-w-3xl mx-auto text-center">
          <SectionLabel>El problema</SectionLabel>
          <h2 className="text-2xl md:text-4xl font-bold text-brand-white/95 leading-[1.3] tracking-tight mb-6">
            Hoy la mayoría de las personas busca servicios en Google. Si tu
            negocio no aparece, esas consultas se van a tu competencia.
          </h2>
          <p className="text-brand-white/55 text-lg leading-relaxed">
            Instagram atrae. La web valida. Una presencia propia eleva confianza
            y ayuda a captar consultas de personas que ya están buscando tu
            servicio.
          </p>
        </div>
      </section>

      {/* ── 3. SOLUCIÓN / SERVICIOS ── */}
      <section id="servicios" className="py-32 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="mb-16 max-w-xl">
            <SectionLabel>Qué hacemos</SectionLabel>
            <h2 className="text-3xl md:text-4xl font-bold text-brand-white tracking-tight">
              Presencia real. Resultados concretos.
            </h2>
            <p className="mt-4 text-brand-white/55 leading-relaxed">
              Cada proyecto incluye diseño, tecnología y estrategia orientada a
              que tu negocio genere más consultas.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SOLUTION_CARDS.map(({ title, desc, Icon }) => (
              <div
                key={title}
                className="group p-8 rounded-2xl bg-white/[0.02] border border-white/[0.05] hover:border-brand-accent/30 hover:bg-white/[0.04] transition-all duration-400"
              >
                <div className="w-11 h-11 rounded-xl bg-brand-accent/10 flex items-center justify-center mb-5 text-brand-accent group-hover:scale-110 group-hover:bg-brand-accent/20 transition-all duration-300">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-brand-white mb-2">
                  {title}
                </h3>
                <p className="text-brand-white/55 text-sm leading-relaxed">
                  {desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 4. PAQUETES ── */}
      <section
        id="paquetes"
        className="py-32 px-6 border-y border-white/5 bg-brand-gray/30 relative"
      >
        <div className="max-w-6xl mx-auto">
          <div className="mb-16 max-w-xl">
            <SectionLabel>Paquetes</SectionLabel>
            <h2 className="text-3xl md:text-4xl font-bold text-brand-white tracking-tight">
              Opciones claras para cada etapa
            </h2>
            <p className="mt-4 text-brand-white/55 leading-relaxed">
              Precios de referencia reales. Cada plan tiene un propósito claro —
              podés ver una demo antes de decidir.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch">
            {PACKAGES.map((pkg) => (
              <article
                key={pkg.id}
                className={`relative flex flex-col p-8 rounded-2xl border transition-all duration-400 ${
                  pkg.featured
                    ? "bg-brand-accent/10 border-brand-accent/50 shadow-[0_20px_60px_rgba(59,130,246,0.2)] z-10"
                    : `bg-white/[0.02] border-white/[0.06] ${pkg.borderHover}`
                }`}
              >
                {pkg.featured && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 text-[11px] font-bold text-white bg-brand-accent px-4 py-1 rounded-full uppercase tracking-wider">
                    Más elegido
                  </span>
                )}

                <span
                  className={`self-start inline-flex items-center rounded-full text-xs font-semibold px-4 py-1.5 mb-5 uppercase tracking-wide ${pkg.badgeColor}`}
                >
                  {pkg.badge}
                </span>

                <h3 className="text-xl font-bold text-brand-white mb-2">
                  {pkg.title}
                </h3>

                {/* Main differentiator pill */}
                <span className="self-start inline-flex items-center gap-1.5 text-xs font-semibold text-brand-mint bg-brand-mint/10 border border-brand-mint/20 rounded-full px-3 py-1 mb-3">
                  <span className="w-1 h-1 rounded-full bg-brand-mint" />
                  {pkg.mainDiff}
                </span>

                {/* Target audience */}
                <div className="mb-5 p-3.5 rounded-xl bg-white/[0.03] border border-white/[0.05]">
                  <p className="text-xs font-semibold text-brand-white/40 uppercase tracking-wider mb-1">
                    ¿Para quién?
                  </p>
                  <p className="text-sm text-brand-white/70 leading-relaxed">
                    {pkg.targetAudience}
                  </p>
                </div>

                <p className="text-3xl font-bold text-brand-white mb-1">
                  {pkg.price}
                </p>
                <p className="text-xs text-brand-white/40 mb-6">
                  {pkg.delivery}
                </p>

                <div className="flex-1 space-y-4 text-sm">
                  <ul className="space-y-2 text-brand-white/65">
                    {pkg.includes.map((item) => (
                      <li key={item.text} className="flex gap-2">
                        <span className="text-brand-mint shrink-0 mt-0.5">
                          ✓
                        </span>
                        <span>{item.text}</span>
                        {item.tooltip && (
                          <Tooltip text={item.tooltip}>
                            <Info className="w-4 h-4 text-brand-white/40 hover:text-brand-white/80 transition-colors mt-0.5 cursor-help" />
                          </Tooltip>
                        )}
                      </li>
                    ))}
                  </ul>

                  {pkg.excludes.length > 0 && (
                    <>
                      <p className="text-brand-white/30 text-xs uppercase tracking-widest pt-2">
                        No incluye
                      </p>
                      <ul className="space-y-1.5 text-brand-white/35 text-xs">
                        {pkg.excludes.map((item) => (
                          <li
                            key={item.text}
                            className="flex gap-2 text-brand-white/35"
                          >
                            <span className="shrink-0">–</span>
                            <span>{item.text}</span>
                            {item.tooltip && (
                              <Tooltip text={item.tooltip}>
                                <Info className="w-4 h-4 text-brand-white/40 hover:text-brand-white/80 transition-colors cursor-help" />
                              </Tooltip>
                            )}
                          </li>
                        ))}
                      </ul>
                    </>
                  )}
                </div>

                <div className="mt-6 flex flex-col gap-3">
                  <a
                    href={pkg.demoHref}
                    className="w-full inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl border border-white/10 bg-white/5 text-brand-white/80 font-medium text-sm hover:bg-white/10 hover:border-white/20 hover:text-brand-white transition-all"
                  >
                    Ver demo
                    <span className="text-brand-white/30">→</span>
                  </a>
                  <a
                    href={waLink(pkg.waText)}
                    target="_blank"
                    rel="noreferrer"
                    className={`w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl font-semibold text-sm transition-all ${
                      pkg.featured
                        ? "bg-brand-accent text-white hover:bg-brand-accent/90 hover:shadow-[0_0_20px_rgba(59,130,246,0.4)]"
                        : "border border-emerald-400/50 bg-emerald-400/10 text-emerald-200 hover:bg-emerald-400/20 hover:border-emerald-400"
                    }`}
                  >
                    Consultar por WhatsApp
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 shrink-0" />
                  </a>
                </div>
              </article>
            ))}
          </div>

          {/* ── Comparison Table ── */}
          <div className="mt-14">
            <p className="text-center text-xs font-bold text-brand-white/30 uppercase tracking-widest mb-6">
              Comparativa rápida
            </p>
            <div className="overflow-x-auto rounded-2xl border border-white/[0.06]">
              <table className="w-full min-w-[520px] text-sm">
                <thead>
                  <tr className="border-b border-white/[0.06]">
                    <th className="text-left px-4 py-3.5 text-brand-white/40 font-medium text-xs uppercase tracking-wider w-1/2">
                      Característica
                    </th>
                    <th className="px-4 py-3.5 text-center text-emerald-300 font-semibold text-xs uppercase tracking-wider">
                      Start
                    </th>
                    <th className="px-4 py-3.5 text-center text-brand-accent font-semibold text-xs uppercase tracking-wider">
                      Pro
                    </th>
                    <th className="px-4 py-3.5 text-center text-violet-300 font-semibold text-xs uppercase tracking-wider">
                      Marca + Web
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {COMPARE_ROWS.map((row, i) => (
                    <tr
                      key={row.label}
                      className={`border-b border-white/[0.04] ${i % 2 === 0 ? "bg-white/[0.01]" : ""}`}
                    >
                      <td className="px-4 py-3.5 text-brand-white/60 text-sm">
                        {row.label}
                      </td>
                      <CheckCell value={row.start} />
                      <CheckCell value={row.pro} />
                      <CheckCell value={row.marcaWeb} />
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Plan Mantenimiento */}
          <div className="mt-10 p-8 rounded-2xl border border-white/[0.06] bg-white/[0.02]">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <ShieldCheck className="w-4 h-4 text-brand-accent" />
                  <h3 className="font-semibold text-brand-white">
                    Plan de Mantenimiento Mensual
                  </h3>
                </div>
                <p className="text-2xl font-bold text-brand-white mb-1">
                  Desde $70.000{" "}
                  <span className="text-base font-normal text-brand-white/50">
                    / mes
                  </span>
                </p>
                <p className="text-xs text-brand-white/40">
                  Para mantener tu sitio estable, seguro y siempre actualizado.
                </p>
              </div>
              <ul className="grid grid-cols-2 gap-x-8 gap-y-2 text-sm text-brand-white/55 shrink-0">
                {[
                  "Hosting incluido",
                  "Soporte técnico (24–48 h)",
                  "Cambios menores (2 h/mes)",
                  "Monitoreo de performance",
                  "Seguridad y backups",
                ].map((item) => (
                  <li key={item} className="flex gap-2">
                    <span className="text-brand-accent shrink-0">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── 5. CÓMO TRABAJAMOS ── */}
      <section id="proceso" className="py-32 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="mb-16 max-w-xl">
            <SectionLabel>Proceso</SectionLabel>
            <h2 className="text-3xl md:text-4xl font-bold text-brand-white tracking-tight">
              Cómo trabajamos
            </h2>
            <p className="mt-4 text-brand-white/55 leading-relaxed">
              Simple, transparente y sin sorpresas. Sabés en qué etapa está tu
              proyecto en todo momento.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {PROCESS_STEPS.map(({ number, title, desc, cta, Icon }) => (
              <div key={number} className="relative">
                <div className="p-8 rounded-2xl bg-white/[0.02] border border-white/[0.05] h-full flex flex-col">
                  <p className="text-5xl font-black text-brand-accent/15 mb-4 leading-none">
                    {number}
                  </p>
                  <div className="w-10 h-10 rounded-xl bg-brand-accent/10 flex items-center justify-center mb-4 text-brand-accent">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-bold text-brand-white mb-2">
                    {title}
                  </h3>
                  <p className="text-brand-white/50 text-sm leading-relaxed flex-1">
                    {desc}
                  </p>
                  {cta && (
                    <button
                      id="open-diagnostic-modal"
                      onClick={() => setIsDiagnosticOpen(true)}
                      className="mt-5 w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-brand-accent/15 border border-brand-accent/30 text-brand-accent text-sm font-semibold hover:bg-brand-accent/25 hover:border-brand-accent/50 transition-all duration-200"
                    >
                      {cta}
                    </button>
                  )}
                </div>
                {/* Connector arrow (hidden on last) */}
                {number !== "04" && (
                  <div className="hidden lg:block absolute top-1/2 -right-3 -translate-y-1/2 text-brand-white/15 text-xl z-10">
                    →
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 6. CONTACTO ── */}
      <section
        id="contacto"
        className="py-32 px-6 border-y border-white/5 bg-brand-gray/40 relative"
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60%] h-[60%] bg-brand-accent/5 rounded-full blur-[140px] pointer-events-none" />
        <div className="max-w-6xl mx-auto relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* Left: copy */}
            <div className="lg:sticky lg:top-32">
              <SectionLabel>Contacto</SectionLabel>
              <h2 className="text-4xl md:text-5xl font-bold text-brand-white mb-6 tracking-tight leading-[1.1]">
                Tu negocio debería verse tan profesional como realmente es.
              </h2>
              <p className="text-lg text-brand-white/55 mb-10 leading-relaxed">
                Contanos sobre tu proyecto y te respondemos en menos de 24
                horas. Sin compromiso, sin vueltas.
              </p>
              <a
                href={WA_GENERAL}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2.5 px-8 py-4 rounded-xl bg-white/[0.04] border border-white/10 text-brand-white font-semibold hover:bg-white/[0.08] hover:border-white/20 transition-all duration-300"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-5 h-5 text-emerald-400 shrink-0"
                  aria-hidden="true"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347zm-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884zm8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Hablemos por WhatsApp
              </a>
              <p className="mt-5 text-xs text-brand-white/25">
                También podés completar el formulario →
              </p>
            </div>

            {/* Right: contact form */}
            <ContactForm />
          </div>
        </div>
      </section>

      {/* ── 7. FAQ ── */}
      <section id="faq" className="py-32 px-6">
        <div className="max-w-3xl mx-auto">
          <div className="mb-16 text-center">
            <SectionLabel>Preguntas frecuentes</SectionLabel>
            <h2 className="text-3xl md:text-4xl font-bold text-brand-white tracking-tight">
              Todo lo que querés saber
            </h2>
          </div>

          <div className="space-y-4">
            {FAQ_ITEMS.map(({ q, a }) => (
              <details
                key={q}
                className="group rounded-2xl border border-white/[0.06] bg-white/[0.02] hover:border-brand-accent/20 transition-colors"
              >
                <summary className="flex items-center justify-between gap-4 p-6 cursor-pointer list-none text-brand-white font-medium">
                  {q}
                  <ChevronDown className="w-4 h-4 text-brand-white/40 shrink-0 group-open:rotate-180 transition-transform duration-200" />
                </summary>
                <p className="px-6 pb-6 text-brand-white/55 text-sm leading-relaxed">
                  {a}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ── 8. FOOTER ── */}
      <footer className="py-16 px-6 border-t border-white/5">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">
            <div>
              <p className="text-brand-white font-bold text-lg mb-2">Web Lab</p>
              <p className="text-sm text-brand-white/40 leading-relaxed">
                Presencia web profesional para negocios de todo el país.
              </p>
              <p className="text-sm text-brand-white/40 mt-2">
                Mendoza, Argentina 🇦🇷
              </p>
            </div>
            <div>
              <p className="text-xs font-bold tracking-widest uppercase text-brand-white/30 mb-4">
                Navegación
              </p>
              <ul className="space-y-2 text-sm text-brand-white/50">
                {[
                  ["#servicios", "Servicios"],
                  ["#paquetes", "Paquetes"],
                  ["#proceso", "Cómo trabajamos"],
                  ["#faq", "FAQ"],
                ].map(([href, label]) => (
                  <li key={href}>
                    <a
                      href={href}
                      className="hover:text-brand-white transition-colors"
                    >
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="text-xs font-bold tracking-widest uppercase text-brand-white/30 mb-4">
                Contacto
              </p>
              <ul className="space-y-2 text-sm text-brand-white/50">
                <li>
                  <a
                    href={WA_GENERAL}
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-brand-white transition-colors"
                  >
                    WhatsApp
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:hola@mendozaweblab.com"
                    className="hover:text-brand-white transition-colors"
                  >
                    hola@mendozaweblab.com
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="pt-8 border-t border-white/5 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-brand-white/25">
            <p>
              © {new Date().getFullYear()} Web Lab. Todos los derechos
              reservados.
            </p>
            <p>Hecho con ❤ en Mendoza, Argentina.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
