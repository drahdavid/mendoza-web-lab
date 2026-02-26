import { Logo } from "@/components/Logo";
import {
  Crown,
  Gauge,
  Search,
  Smartphone,
  FlaskConical,
  LifeBuoy,
} from "lucide-react";

export default function Home() {
  return (
    <div className="relative overflow-hidden">
      {/* Background Orbs */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-brand-accent/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[20%] right-[-10%] w-[30%] h-[30%] bg-brand-secondary/10 rounded-full blur-[100px] pointer-events-none" />

      {/* Hero */}
      <section className="min-h-[90vh] flex flex-col justify-center relative pt-20 px-6 pb-24">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-brand-white leading-[1.05] tracking-tight mb-8">
            <span className="block text-brand-accent text-sm md:text-base font-bold tracking-[0.2em] uppercase mb-4">
              Mendoza Web Lab
            </span>
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-brand-white via-brand-white to-brand-accent/50">
              Desarrollo web moderno
            </span>
            <br />
            para negocios que escalan.
          </h1>
          <p className="text-xl text-brand-white/70 max-w-2xl mx-auto mb-12 leading-relaxed">
            Fusionamos <strong>diseño de vanguardia</strong> con{" "}
            <strong>ingeniería de precisión</strong> para crear experiencias
            digitales que cautivan y convierten.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="https://wa.me/5492612005950?text=Hola%20Mendoza%20Web%20Lab%2C%20me%20gustar%C3%ADa%20hablar%20sobre%20un%20proyecto%20web."
              target="_blank"
              rel="noreferrer"
              className="flex-1 min-w-0 sm:flex-initial inline-flex items-center justify-center gap-2 px-10 py-4 rounded-full bg-emerald-500/20 border border-emerald-400/60 text-emerald-200 font-semibold hover:bg-emerald-500/30 hover:border-emerald-300 transition-all duration-300 backdrop-blur-sm hover:shadow-[0_0_20px_rgba(52,211,153,0.2)] transform hover:-translate-y-0.5"
            >
              <span>Consultar por WhatsApp</span>
              <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.8)] shrink-0" />
            </a>
            <a
              href="#paquetes"
              className="flex-1 min-w-0 sm:flex-initial inline-flex items-center justify-center px-8 py-4 rounded-full bg-white/5 border border-white/10 text-brand-white font-semibold hover:bg-white/10 transition-all backdrop-blur-sm"
            >
              Ver paquetes
            </a>
          </div>
        </div>
      </section>

      {/* Problema/Statement */}
      <section className="py-32 px-6 border-y border-white/5 bg-brand-gray/30 relative">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl md:text-4xl font-medium text-brand-white/90 leading-[1.3] tracking-tight italic">
            &quot;En un mundo digital saturado, la{" "}
            <strong>mediocridad es invisible</strong>. Tu negocio merece una
            presencia que exija atención.&quot;
          </h2>
        </div>
      </section>

      {/* Solución - Cards */}
      <section id="soluciones" className="py-32 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-4">
            <div className="max-w-xl">
              <h2 className="text-brand-accent text-sm font-bold tracking-widest uppercase mb-4">
                Soluciones
              </h2>
              <h3 className="text-3xl md:text-4xl font-bold text-brand-white tracking-tight">
                Arquitectura Digital de Alto Rendimiento
              </h3>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: "Diseño Premium",
                desc: "Interfaces que respiran exclusividad y refuerzan la autoridad de tu marca.",
                Icon: Crown,
              },
              {
                title: "Performance Lab",
                desc: "Velocidad de carga instantánea optimizada para Core Web Vitals.",
                Icon: Gauge,
              },
              {
                title: "Estrategia SEO",
                desc: "Visibilidad orgánica para que tus clientes ideales te encuentren primero.",
                Icon: Search,
              },
              {
                title: "Mobile First",
                desc: "Experiencias fluidas y adaptativas en cualquier dispositivo.",
                Icon: Smartphone,
              },
              {
                title: "Conversión Lab",
                desc: "Psicología aplicada al diseño para maximizar el retorno de inversión.",
                Icon: FlaskConical,
              },
              {
                title: "Soporte Continuo",
                desc: "Mantenimiento y evolución constante de tu activo digital.",
                Icon: LifeBuoy,
              },
            ].map((item, i) => (
              <div
                key={i}
                className="group p-8 rounded-3xl bg-white/[0.02] border border-white/[0.05] hover:border-brand-accent/30 transition-all duration-500 backdrop-blur-sm"
              >
                <div className="w-12 h-12 rounded-2xl bg-brand-accent/10 flex items-center justify-center mb-6 text-brand-accent group-hover:scale-110 transition-transform">
                  <item.Icon className="w-6 h-6" />
                </div>
                <h4 className="text-xl font-bold text-brand-white mb-3">
                  {item.title}
                </h4>
                <p className="text-brand-white/60 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Paquetes */}
      <section
        id="paquetes"
        className="py-32 px-6 border-y border-white/5 bg-brand-gray/40 relative"
      >
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-4">
            <div className="max-w-xl">
              <h2 className="text-brand-accent text-sm font-bold tracking-widest uppercase mb-4">
                Paquetes oficiales
              </h2>
              <h3 className="text-3xl md:text-4xl font-bold text-brand-white tracking-tight">
                Opciones claras para diferentes etapas de tu negocio
              </h3>
              <p className="mt-4 text-brand-white/60">
                Estos paquetes están pensados para darte una referencia realista
                de inversión. La mayoría de los clientes termina eligiendo el
                plan intermedio.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
            {/* Pack Start */}
            <article className="relative flex flex-col p-8 rounded-3xl bg-white/[0.03] border border-white/[0.06] hover:border-emerald-300/60 transition-all duration-500 backdrop-blur-sm">
              <span className="inline-flex items-center rounded-full bg-emerald-500/15 text-emerald-300 text-xs font-semibold px-3 py-1 mb-4 uppercase tracking-wide">
                Pack presencia Start
              </span>
              <h4 className="text-2xl font-bold text-brand-white mb-2">
                Ideal para empezar rápido
              </h4>
              <p className="text-sm text-brand-white/60 mb-6">
                Para negocios que necesitan una identidad mínima viable y una
                web simple pero profesional.
              </p>
              <p className="text-3xl font-bold text-brand-white mb-1">
                Desde $130.000
              </p>
              <p className="text-xs text-brand-white/50 mb-6">
                Entrega estimada: 5–7 días
              </p>
              <div className="flex-1 flex flex-col space-y-3 text-sm">
                <p className="text-brand-white/70 font-medium">Incluye:</p>
                <ul className="space-y-2 text-brand-white/60">
                  <li>✔ Logo minimalista (1 propuesta + 1 ajuste)</li>
                  <li>✔ Paleta de colores y tipografía</li>
                  <li>✔ Landing de 1 página (hasta 5 secciones)</li>
                  <li>✔ Diseño responsive</li>
                  <li>✔ Botón de WhatsApp</li>
                  <li>✔ Mapa integrado</li>
                  <li>✔ Hosting básico + SSL (sitio seguro)</li>
                  <li>✔ 1 ronda de cambios</li>
                </ul>
                <p className="pt-6 text-brand-white/50 text-xs uppercase tracking-wide">
                  No incluye:
                </p>
                <ul className="space-y-3 text-brand-white/50 text-xs">
                  <li>– Registro de dominio</li>
                  <li>– SEO avanzado</li>
                  <li>– Integraciones complejas</li>
                  <li>– Copywriting estratégico</li>
                  <li>– Animaciones personalizadas</li>
                </ul>
              </div>
              <a
                href="https://wa.me/5492612005950?text=Hola%20Mendoza%20Web%20Lab%2C%20me%20interesa%20el%20Pack%20Presencia%20Start%20(desde%20%24130.000).%20Quisiera%20recibir%20m%C3%A1s%20informaci%C3%B3n."
                target="_blank"
                rel="noreferrer"
                className="mt-6 w-full inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl border border-emerald-400/60 bg-emerald-400/10 text-emerald-200 font-semibold text-sm hover:bg-emerald-400/20 hover:border-emerald-300 transition-all shrink-0"
              >
                Consultar por WhatsApp
                <span className="h-2 w-2 rounded-full bg-emerald-400" />
              </a>
            </article>

            {/* Pack Pro (destacado) */}
            <article className="relative flex flex-col p-8 rounded-3xl bg-brand-accent/10 border border-brand-accent/60 shadow-[0_20px_60px_rgba(139,92,246,0.35)] z-10">
              <div className="flex items-center justify-between mb-4">
                <span className="inline-flex items-center rounded-full bg-brand-accent text-white text-xs font-semibold px-3 py-1 uppercase tracking-wide">
                  Pack presencia Pro
                </span>
                <span className="text-[11px] font-semibold text-emerald-200 uppercase tracking-wide">
                  Más elegido
                </span>
              </div>
              <h4 className="text-2xl font-bold text-brand-white mb-2">
                Salto profesional real
              </h4>
              <p className="text-sm text-brand-white/70 mb-6">
                Perfecto para negocios que quieren verse profesionales y generar
                más consultas desde el día uno.
              </p>
              <p className="text-3xl font-bold text-brand-white mb-1">
                Desde $420.000
              </p>
              <p className="text-xs text-brand-white/60 mb-6">
                Entrega estimada: 10–15 días
              </p>
              <div className="flex-1 flex flex-col space-y-3 text-sm">
                <p className="text-brand-white/70 font-medium">Incluye:</p>
                <ul className="space-y-2 text-brand-white/70">
                  <li>✔ Branding completo (logo + sistema visual básico)</li>
                  <li>✔ Landing optimizada para conversión</li>
                  <li>✔ Diseño personalizado</li>
                  <li>✔ Hasta 6 secciones</li>
                  <li>✔ Optimización mobile avanzada</li>
                  <li>✔ SEO local básico</li>
                  <li>✔ Formulario funcional</li>
                  <li>✔ Google Analytics + Meta Pixel / GTM</li>
                  <li>✔ Velocidad optimizada (Core Web Vitals)</li>
                  <li>✔ Configuración dominio + hosting</li>
                  <li>✔ 2 rondas de ajustes</li>
                </ul>
              </div>
              <a
                href="https://wa.me/5492612005950?text=Hola%20Mendoza%20Web%20Lab%2C%20me%20interesa%20el%20Pack%20Presencia%20Pro%20(desde%20%24420.000).%20Quisiera%20recibir%20m%C3%A1s%20informaci%C3%B3n."
                target="_blank"
                rel="noreferrer"
                className="mt-auto  w-full inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl border border-emerald-400/60 bg-emerald-400/10 text-emerald-200 font-semibold text-sm hover:bg-emerald-400/20 hover:border-emerald-300 transition-all shrink-0"
              >
                Consultar por WhatsApp
                <span className="h-2 w-2 rounded-full bg-emerald-400" />
              </a>
            </article>

            {/* Pack Marca + Web Profesional */}
            <article className="relative flex flex-col p-8 rounded-3xl bg-white/[0.02] border border-white/[0.06] hover:border-brand-secondary/60 transition-all duration-500 backdrop-blur-sm">
              <span className="inline-flex items-center rounded-full bg-brand-secondary/15 text-brand-secondary text-xs font-semibold px-3 py-1 mb-4 uppercase tracking-wide">
                Marca + web profesional
              </span>
              <h4 className="text-2xl font-bold text-brand-white mb-2">
                Preparado para crecer
              </h4>
              <p className="text-sm text-brand-white/60 mb-6">
                Para marcas que quieren una presencia sólida, estratégica y
                lista para escalar en el mediano plazo.
              </p>
              <p className="text-3xl font-bold text-brand-white mb-1">
                Desde $980.000
              </p>
              <p className="text-xs text-brand-white/50 mb-6">
                Entrega estimada: 15–25 días
              </p>
              <div className="flex-1 flex flex-col space-y-3 text-sm">
                <p className="text-brand-white/70 font-medium">Incluye:</p>
                <ul className="space-y-2 text-brand-white/60">
                  <li>✔ Branding estratégico completo</li>
                  <li>✔ Manual visual básico</li>
                  <li>✔ Web de 4–6 páginas (no solo landing)</li>
                  <li>✔ Copy estructurado</li>
                  <li>✔ Optimización de performance</li>
                  <li>✔ SEO técnico inicial</li>
                  <li>✔ Configuración inicial (CRM / Mail / Pixel Meta)</li>
                  <li>✔ Analytics + Search Console</li>
                  <li>✔ Sesión de handover (entrega y uso)</li>
                  <li>✔ 3 rondas de ajustes</li>
                </ul>
              </div>
              <a
                href="https://wa.me/5492612005950?text=Hola%20Mendoza%20Web%20Lab%2C%20me%20interesa%20el%20pack%20Marca%20%2B%20Web%20Profesional%20(desde%20%24980.000).%20Quisiera%20recibir%20m%C3%A1s%20informaci%C3%B3n."
                target="_blank"
                rel="noreferrer"
                className="mt-auto  w-full inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl border border-emerald-400/60 bg-emerald-400/10 text-emerald-200 font-semibold text-sm hover:bg-emerald-400/20 hover:border-emerald-300 transition-all shrink-0"
              >
                Consultar por WhatsApp
                <span className="h-2 w-2 rounded-full bg-emerald-400" />
              </a>
            </article>
          </div>

          {/* Mantenimiento mensual */}
          <div className="mt-16 grid grid-cols-1 lg:grid-cols-[2fr,1fr] gap-8 items-start">
            <div>
              <h4 className="text-lg font-semibold text-brand-white mb-2">
                Plan de mantenimiento mensual
              </h4>
              <p className="text-2xl font-bold text-brand-white mb-1">
                Desde $48.000 / mes
              </p>
              <p className="text-xs text-brand-white/60 mb-6">
                Ideal para mantener tu sitio estable, seguro y siempre
                actualizado.
              </p>
              <ul className="grid sm:grid-cols-2 gap-2 text-sm text-brand-white/65">
                <li>✔ Hosting</li>
                <li>✔ Soporte técnico (respuesta 24–48 h)</li>
                <li>✔ Cambios menores (hasta 2 h/mes)</li>
                <li>✔ Monitoreo de performance</li>
                <li>✔ Seguridad y backups</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA final */}
      <section id="contacto" className="py-40 px-6 relative">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60%] h-[60%] bg-brand-accent/5 rounded-full blur-[140px] pointer-events-none" />
        <div className="max-w-4xl mx-auto text-center relative">
          <h2 className="text-4xl md:text-6xl font-bold text-brand-white mb-8 tracking-tight italic">
            ¿Listo para elevar tu estándar digital?
          </h2>
          <p className="text-xl text-brand-white/60 mb-12 max-w-xl mx-auto">
            Hablemos sobre cómo Mendoza Web Lab puede transformar tu presencia
            en la web.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://wa.me/5492612005950?text=Hola%20Mendoza%20Web%20Lab%2C%20me%20gustar%C3%ADa%20hablar%20sobre%20un%20proyecto%20web."
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 px-10 py-5 rounded-full border border-emerald-400/60 bg-emerald-400/10 text-emerald-200 font-semibold hover:bg-emerald-400/20 hover:border-emerald-300 transition-all duration-300 backdrop-blur-sm"
            >
              <span>Hablar por WhatsApp</span>
              <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.8)] shrink-0" />
            </a>
            <a
              href="#paquetes"
              className="inline-flex items-center justify-center px-8 py-5 rounded-full bg-white/5 border border-white/10 text-brand-white font-semibold hover:bg-white/10 transition-all backdrop-blur-sm"
            >
              Ver paquetes
            </a>
          </div>
        </div>
      </section>

      <footer className="py-12 px-6 border-t border-white/5 text-center text-brand-white/40 text-sm tracking-wide">
        Mendoza Web Lab &copy; {new Date().getFullYear()} — Engineering
        Excellence.
      </footer>
    </div>
  );
}
