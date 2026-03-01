import {
  Crown,
  Gauge,
  Search,
  Smartphone,
  MessageCircle,
  ClipboardList,
  Palette,
  Code2,
  Rocket,
} from "lucide-react";
import { Package, CompareRow } from "./types";

export const WA_BASE = "https://wa.me/5492612005950";

export const waLink = (text: string) =>
  `${WA_BASE}?text=${encodeURIComponent(text)}`;

export const WA_GENERAL = waLink(
  "Hola Web Lab, me gustaría hablar sobre un proyecto web.",
);

export const SOLUTION_CARDS = [
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

export const PACKAGES: Package[] = [
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

export const COMPARE_ROWS: CompareRow[] = [
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

export const PROCESS_STEPS = [
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

export const FAQ_ITEMS = [
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
