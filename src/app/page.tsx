import { Logo } from "@/components/Logo";

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
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-brand-white via-brand-white to-brand-accent/50">
              Desarrollo web moderno
            </span>
            <br />
            para negocios que escalan.
          </h1>
          <p className="text-xl text-brand-white/70 max-w-2xl mx-auto mb-12 leading-relaxed">
            Fusionamos diseño de vanguardia con ingeniería de precisión para
            crear experiencias digitales que cautivan y convierten.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#contacto"
              className="px-8 py-4 bg-brand-accent text-white font-semibold rounded-full hover:shadow-[0_0_20px_rgba(139,92,246,0.3)] transition-all duration-300 transform hover:-translate-y-1"
            >
              Iniciar un proyecto
            </a>
            <a
              href="#soluciones"
              className="px-8 py-4 bg-white/5 border border-white/10 text-brand-white font-semibold rounded-full hover:bg-white/10 transition-all backdrop-blur-sm"
            >
              Nuestra metodología
            </a>
          </div>
        </div>
      </section>

      {/* Problema/Statement */}
      <section className="py-32 px-6 border-y border-white/5 bg-brand-gray/30 relative">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl md:text-4xl font-medium text-brand-white/90 leading-[1.3] tracking-tight italic">
            &quot;En un mundo digital saturado, la mediocridad es invisible. Tu
            negocio merece una presencia que exija atención.&quot;
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
              },
              {
                title: "Performance Lab",
                desc: "Velocidad de carga instantánea optimizada para Core Web Vitals.",
              },
              {
                title: "Estrategia SEO",
                desc: "Visibilidad orgánica para que tus clientes ideales te encuentren primero.",
              },
              {
                title: "Mobile First",
                desc: "Experiencias fluidas y adaptativas en cualquier dispositivo.",
              },
              {
                title: "Conversión Lab",
                desc: "Psicología aplicada al diseño para maximizar el retorno de inversión.",
              },
              {
                title: "Soporte Continuo",
                desc: "Mantenimiento y evolución constante de tu activo digital.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="group p-8 rounded-3xl bg-white/[0.02] border border-white/[0.05] hover:border-brand-accent/30 transition-all duration-500 backdrop-blur-sm"
              >
                <div className="w-12 h-12 rounded-2xl bg-brand-accent/10 flex items-center justify-center mb-6 text-brand-accent group-hover:scale-110 transition-transform">
                  <span className="text-xl">0{i + 1}</span>
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
          <a
            href="mailto:hola@mendozaweblab.com"
            className="inline-flex items-center gap-3 px-10 py-5 bg-brand-white text-brand-black font-bold rounded-full hover:bg-brand-accent hover:text-white transition-all duration-300 group"
          >
            Agendar Consulta Gratuita
            <span className="group-hover:translate-x-1 transition-transform">
              →
            </span>
          </a>
        </div>
      </section>

      <footer className="py-12 px-6 border-t border-white/5 text-center text-brand-white/40 text-sm tracking-wide">
        Mendoza Web Lab &copy; {new Date().getFullYear()} — Engineering
        Excellence.
      </footer>
    </div>
  );
}
