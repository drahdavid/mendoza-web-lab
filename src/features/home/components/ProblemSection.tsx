import { SectionLabel } from "./SectionLabel";

export const ProblemSection = () => {
  return (
    <section className="py-24 px-6 border-y border-white/5 bg-brand-gray/40 relative">
      <div className="max-w-3xl mx-auto text-center">
        <SectionLabel>El problema</SectionLabel>
        <h2 className="text-2xl md:text-4xl font-bold text-brand-white/95 leading-[1.3] tracking-tight mb-6">
          Hoy la mayoría de las personas busca servicios en Google. Si tu
          negocio no aparece, esas consultas se van a tu competencia.
        </h2>
        <p className="text-brand-white/55 text-lg leading-relaxed">
          Instagram atrae. La web valida. Una presencia propia eleva confianza y
          ayuda a captar consultas de personas que ya están buscando tu
          servicio.
        </p>
      </div>
    </section>
  );
};
