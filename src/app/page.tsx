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
} from "lucide-react";

// ─── Constants ────────────────────────────────────────────────────────────────

const WA_BASE = "https://wa.me/5492612005950";

const waLink = (text: string) => `${WA_BASE}?text=${encodeURIComponent(text)}`;

const WA_GENERAL = waLink(
  "Hola Mendoza Web Lab, me gustaría hablar sobre un proyecto web.",
);

const SOLUTION_CARDS = [
  {
    title: "Presencia profesional",
    desc: "Transmitís confianza y seriedad desde el primer clic. Tu negocio merece verse como lo que realmente es.",
    Icon: Crown,
  },
  {
    title: "Visibilidad en Google",
    desc: "Aparecés cuando alguien en Mendoza busca lo que ofrecés. SEO local real, no promesas vacías.",
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

const PACKAGES = [
  {
    id: "start",
    featured: false,
    badge: "Pack Presencia Start",
    badgeColor: "bg-emerald-500/15 text-emerald-300",
    borderHover: "hover:border-emerald-300/50",
    title: "Ideal para empezar rápido",
    desc: "Para negocios que necesitan una identidad mínima y una web simple pero profesional.",
    price: "Desde $190.000",
    delivery: "Entrega estimada: 5–7 días hábiles",
    includes: [
      "Logo minimalista (1 propuesta + 1 ajuste)",
      "Paleta de colores y tipografía de marca",
      "Landing de 1 página (hasta 5 secciones)",
      "Responsive para celulares y tablets",
      "Botón WhatsApp + mapa de ubicación",
      "Hosting básico + deploy",
      "1 ronda de cambios",
    ],
    excludes: [
      "SEO avanzado",
      "Integraciones complejas",
      "Copywriting estratégico",
    ],
    demoHref: "/demo/start",
    waText:
      "Hola Mendoza Web Lab, me interesa el Pack Presencia Start (desde $190.000). Quisiera recibir más información.",
  },
  {
    id: "pro",
    badge: "Pack Presencia Pro",
    badgeColor: "bg-brand-accent text-white",
    borderHover: "",
    featured: true,
    title: "Salto profesional real",
    desc: "Perfecto para negocios que quieren verse profesionales y generar más consultas desde el día uno.",
    price: "Desde $780.000",
    delivery: "Entrega estimada: 10–15 días hábiles",
    includes: [
      "Branding completo (logo + sistema visual básico)",
      "Landing optimizada (hasta 6 secciones)",
      "Diseño 100% personalizado",
      "Formulario de contacto funcional",
      "SEO local básico",
      "Google Analytics",
      "Configuración dominio + hosting",
      "2 rondas de ajustes",
    ],
    excludes: [],
    demoHref: "/demo/pro",
    waText:
      "Hola Mendoza Web Lab, me interesa el Pack Presencia Pro (desde $780.000). Quisiera recibir más información.",
  },
  {
    id: "marca-web",
    featured: false,
    badge: "Marca + Web Profesional",
    badgeColor: "bg-violet-500/15 text-violet-300",
    borderHover: "hover:border-violet-400/50",
    title: "Preparado para escalar",
    desc: "Para marcas que quieren una presencia sólida, estratégica y lista para crecer.",
    price: "Desde $1.480.000",
    delivery: "Entrega estimada: 15–25 días hábiles",
    includes: [
      "Branding estratégico completo + mini guía de marca",
      "Web de 4–6 páginas (no solo una landing)",
      "Copywriting estructurado",
      "Optimización de performance",
      "SEO técnico inicial",
      "Integraciones (CRM / Mail / Pixel)",
      "Analytics + Search Console",
      "3 rondas de ajustes",
    ],
    excludes: [],
    demoHref: "/demo/marca-web",
    waText:
      "Hola Mendoza Web Lab, me interesa el Pack Marca + Web Profesional (desde $1.480.000). Quisiera recibir más información.",
  },
] as const;

const PROCESS_STEPS = [
  {
    number: "01",
    title: "Diagnóstico",
    desc: "Entendemos tu negocio, público y objetivos. Sin formularios kilométricos — una charla de 30 minutos alcanza.",
    Icon: ClipboardList,
  },
  {
    number: "02",
    title: "Propuesta visual",
    desc: "Diseñamos una propuesta de identidad y estructura web. La revisás antes de escribir una sola línea de código.",
    Icon: Palette,
  },
  {
    number: "03",
    title: "Desarrollo",
    desc: "Construimos tu sitio con tecnología moderna, rápida y confiable. Te mantenemos al tanto en todo momento.",
    Icon: Code2,
  },
  {
    number: "04",
    title: "Lanzamiento",
    desc: "Publicamos tu web, configuramos dominio y analytics. Te entregamos todo listo para recibir clientes.",
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

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function Home() {
  return (
    <div className="relative overflow-x-hidden">
      {/* Ambient orbs */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-brand-accent/8 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-[20%] right-[-10%] w-[30%] h-[30%] bg-brand-mint/5 rounded-full blur-[120px] pointer-events-none" />

      {/* ── 1. HERO ── */}
      <section className="min-h-screen flex flex-col justify-center relative pt-24 px-6 pb-24">
        <div className="max-w-4xl mx-auto text-center">
          <p className="inline-flex items-center gap-2 text-brand-accent text-xs font-bold tracking-[0.25em] uppercase mb-8 border border-brand-accent/20 rounded-full px-4 py-1.5 bg-brand-accent/5">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-accent inline-block" />
            Mendoza, Argentina
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
            Creamos identidad y presencia web profesional para negocios de
            Mendoza que quieren{" "}
            <strong className="text-brand-white/90">verse mejor</strong> y
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
            Negocios de Mendoza que ya tienen presencia profesional
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
              Precios de referencia reales. La mayoría de los clientes elige el
              plan intermedio. Todos incluyen acceso a una demo para que veas el
              resultado antes de decidir.
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
                <p className="text-sm text-brand-white/55 mb-5 leading-relaxed">
                  {pkg.desc}
                </p>

                <p className="text-3xl font-bold text-brand-white mb-1">
                  {pkg.price}
                </p>
                <p className="text-xs text-brand-white/40 mb-6">
                  {pkg.delivery}
                </p>

                <div className="flex-1 space-y-4 text-sm">
                  <ul className="space-y-2 text-brand-white/65">
                    {pkg.includes.map((item) => (
                      <li key={item} className="flex gap-2">
                        <span className="text-brand-mint shrink-0 mt-0.5">
                          ✓
                        </span>
                        {item}
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
                          <li key={item}>– {item}</li>
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
            {PROCESS_STEPS.map(({ number, title, desc, Icon }) => (
              <div key={number} className="relative">
                <div className="p-8 rounded-2xl bg-white/[0.02] border border-white/[0.05] h-full">
                  <p className="text-5xl font-black text-brand-accent/15 mb-4 leading-none">
                    {number}
                  </p>
                  <div className="w-10 h-10 rounded-xl bg-brand-accent/10 flex items-center justify-center mb-4 text-brand-accent">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-bold text-brand-white mb-2">
                    {title}
                  </h3>
                  <p className="text-brand-white/50 text-sm leading-relaxed">
                    {desc}
                  </p>
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

      {/* ── 6. CTA FINAL ── */}
      <section
        id="contacto"
        className="py-40 px-6 border-y border-white/5 bg-brand-gray/40 relative"
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60%] h-[60%] bg-brand-accent/5 rounded-full blur-[140px] pointer-events-none" />
        <div className="max-w-4xl mx-auto text-center relative">
          <SectionLabel>Contacto</SectionLabel>
          <h2 className="text-4xl md:text-6xl font-bold text-brand-white mb-6 tracking-tight leading-[1.1]">
            Tu negocio debería verse tan profesional como realmente es.
          </h2>
          <p className="text-xl text-brand-white/55 mb-12 max-w-xl mx-auto leading-relaxed">
            Hablemos. Sin compromiso, sin formularios kilométricos. Una charla
            de 30 minutos y te damos una propuesta real.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={WA_GENERAL}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2.5 px-10 py-5 rounded-xl bg-brand-accent text-white font-semibold hover:bg-brand-accent/90 hover:shadow-[0_0_30px_rgba(59,130,246,0.4)] transition-all duration-300 transform hover:-translate-y-0.5"
            >
              Hablemos por WhatsApp
            </a>
            <a
              href="#paquetes"
              className="inline-flex items-center justify-center px-8 py-5 rounded-xl bg-white/5 border border-white/10 text-brand-white font-semibold hover:bg-white/10 hover:border-white/20 transition-all duration-300 transform hover:-translate-y-0.5"
            >
              Ver paquetes
            </a>
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
              <p className="text-brand-white font-bold text-lg mb-2">
                Mendoza Web Lab
              </p>
              <p className="text-sm text-brand-white/40 leading-relaxed">
                Presencia web profesional para negocios de Mendoza.
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
              © {new Date().getFullYear()} Mendoza Web Lab. Todos los derechos
              reservados.
            </p>
            <p>Hecho con ❤ en Mendoza, Argentina.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
