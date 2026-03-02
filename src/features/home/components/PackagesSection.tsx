import { Info, ShieldCheck } from "lucide-react";
import { Tooltip } from "@/components/Tooltip";
import { SectionLabel } from "./SectionLabel";
import { getPackages, getCompareRows, waLink } from "../constants";
import type { Dictionary } from "@/dictionaries/types";

const CheckCell = ({ value }: { value: string }) => {
  const positive = value !== "—";
  return (
    <td
      className={`px-4 py-3.5 text-center text-sm ${
        positive ? "text-brand-white/80" : "text-brand-white/20"
      }`}
    >
      {value}
    </td>
  );
};

export const PackagesSection = ({ dict }: { dict: Dictionary }) => {
  const packages = getPackages(dict);
  const compareRows = getCompareRows(dict);

  return (
    <section
      id="paquetes"
      className="py-32 px-6 border-y border-white/5 bg-brand-gray/30 relative"
    >
      <div className="max-w-6xl mx-auto">
        <div className="mb-16 max-w-xl">
          <SectionLabel>{dict.packages.label}</SectionLabel>
          <h2 className="text-3xl md:text-4xl font-bold text-brand-white tracking-tight">
            {dict.packages.title}
          </h2>
          <p className="mt-4 text-brand-white/55 leading-relaxed">
            {dict.packages.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch">
          {packages.map((pkg) => (
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
                  {dict.packages.mostPopular}
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
                  {dict.packages.forWhom}
                </p>
                <p className="text-sm text-brand-white/70 leading-relaxed">
                  {pkg.targetAudience}
                </p>
              </div>

              <p className="text-3xl font-bold text-brand-white mb-1">
                {pkg.price}
              </p>
              <p className="text-xs text-brand-white/40 mb-6">{pkg.delivery}</p>

              <div className="flex-1 space-y-4 text-sm">
                <ul className="space-y-2 text-brand-white/65">
                  {pkg.includes.map((item) => (
                    <li key={item.text} className="flex gap-2">
                      <span className="text-brand-mint shrink-0 mt-0.5">✓</span>
                      <span className="flex-1">{item.text}</span>
                      {item.tooltip && (
                        <div className="shrink-0">
                          <Tooltip text={item.tooltip}>
                            <Info className="w-4 h-4 text-brand-white/40 hover:text-brand-white/80 transition-colors mt-0.5 cursor-help" />
                          </Tooltip>
                        </div>
                      )}
                    </li>
                  ))}
                </ul>

                {pkg.excludes.length > 0 && (
                  <>
                    <p className="text-brand-white/30 text-xs uppercase tracking-widest pt-2">
                      -
                    </p>
                    <ul className="space-y-1.5 text-brand-white/35 text-xs">
                      {pkg.excludes.map((item) => (
                        <li
                          key={item.text}
                          className="flex gap-2 text-brand-white/35"
                        >
                          <span className="shrink-0">–</span>
                          <span className="flex-1">{item.text}</span>
                          {item.tooltip && (
                            <div className="shrink-0">
                              <Tooltip text={item.tooltip}>
                                <Info className="w-4 h-4 text-brand-white/40 hover:text-brand-white/80 transition-colors cursor-help" />
                              </Tooltip>
                            </div>
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
                  {dict.packages.viewDemo}
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
                  {dict.common.chatWhatsApp}
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 shrink-0" />
                </a>
              </div>
            </article>
          ))}
        </div>

        {/* ── Comparison Table ── */}
        <div className="mt-14">
          <p className="text-center text-xs font-bold text-brand-white/30 uppercase tracking-widest mb-6">
            {dict.packages.compareTitle}
          </p>
          <div className="overflow-x-auto rounded-2xl border border-white/[0.06]">
            <table className="w-full min-w-[520px] text-sm">
              <thead>
                <tr className="border-b border-white/[0.06]">
                  <th className="text-left px-4 py-3.5 text-brand-white/40 font-medium text-xs uppercase tracking-wider w-1/2">
                    {dict.packages.compare.headers.feature}
                  </th>
                  <th className="px-4 py-3.5 text-center text-emerald-300 font-semibold text-xs uppercase tracking-wider">
                    {dict.packages.compare.headers.start}
                  </th>
                  <th className="px-4 py-3.5 text-center text-brand-accent font-semibold text-xs uppercase tracking-wider">
                    {dict.packages.compare.headers.pro}
                  </th>
                  <th className="px-4 py-3.5 text-center text-violet-300 font-semibold text-xs uppercase tracking-wider">
                    {dict.packages.compare.headers.marcaWeb}
                  </th>
                </tr>
              </thead>
              <tbody>
                {compareRows.map((row, i) => (
                  <tr
                    key={row.label}
                    className={`border-b border-white/[0.04] ${
                      i % 2 === 0 ? "bg-white/[0.01]" : ""
                    }`}
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

        {/* Plan Mantenimiento / Disabled for now as missing from dict map */}
      </div>
    </section>
  );
};
