import { SectionLabel } from "./SectionLabel";
import type { Dictionary } from "@/dictionaries/types";

export const ProblemSection = ({ dict }: { dict: Dictionary }) => {
  return (
    <section className="py-24 px-6 border-y border-white/5 bg-brand-gray/40 relative">
      <div className="max-w-3xl mx-auto text-center">
        <SectionLabel>{dict.problem.label}</SectionLabel>
        <h2 className="text-2xl md:text-4xl font-bold text-brand-white/95 leading-[1.3] tracking-tight mb-6">
          {dict.problem.title}
        </h2>
        <p className="text-brand-white/55 text-lg leading-relaxed">
          {dict.problem.subtitle}
        </p>
      </div>
    </section>
  );
};
