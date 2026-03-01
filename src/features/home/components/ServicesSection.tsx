import { SectionLabel } from "./SectionLabel";
import { SOLUTION_CARDS } from "../constants";

export const ServicesSection = () => {
  return (
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
  );
};
