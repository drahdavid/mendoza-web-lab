import { SectionLabel } from "./SectionLabel";
import { PROCESS_STEPS } from "../constants";

type ProcessSectionProps = {
  onOpenDiagnostic: () => void;
};

export const ProcessSection = ({ onOpenDiagnostic }: ProcessSectionProps) => {
  return (
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
                    onClick={onOpenDiagnostic}
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
  );
};
