import { ChevronDown } from "lucide-react";
import { SectionLabel } from "./SectionLabel";
import { getFaqItems } from "../constants";
import type { Dictionary } from "@/dictionaries/types";

export const FaqSection = ({ dict }: { dict: Dictionary }) => {
  const items = getFaqItems(dict);
  return (
    <section id="faq" className="py-32 px-6">
      <div className="max-w-3xl mx-auto">
        <div className="mb-16 text-center">
          <SectionLabel>{dict.faq.label}</SectionLabel>
          <h2 className="text-3xl md:text-4xl font-bold text-brand-white tracking-tight">
            {dict.faq.title}
          </h2>
        </div>

        <div className="space-y-4">
          {items.map(({ q, a }) => (
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
  );
};
