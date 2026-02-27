import React from "react";

interface DemoBannerProps {
  packName: string;
  packHref: string;
}

const WA_URL =
  "https://wa.me/5492612005950?text=Hola%20Mendoza%20Web%20Lab%2C%20vi%20el%20sitio%20demo%20y%20me%20gustar%C3%ADa%20solicitar%20una%20propuesta.";

/**
 * Sticky top banner shown on all /demo/* pages.
 * Informs visitors this is a demo site by Mendoza Web Lab.
 */
export const DemoBanner = ({ packName, packHref }: DemoBannerProps) => (
  <div className="fixed top-0 left-0 right-0 z-[100] bg-[#0B0B0F]/95 backdrop-blur-md border-b border-[#3B82F6]/30">
    <div className="max-w-7xl mx-auto px-4 py-2.5 flex flex-col sm:flex-row items-center justify-between gap-2 text-center sm:text-left">
      <p className="text-xs sm:text-sm text-white/70">
        <span className="text-[#3B82F6] font-semibold">Demo</span>
        {" · "}
        Este sitio es un ejemplo del{" "}
        <span className="font-semibold text-white/90">{packName}</span> de{" "}
        <a
          href="/"
          className="underline underline-offset-2 text-[#3B82F6] hover:text-[#60a5fa] transition-colors"
        >
          Mendoza Web Lab
        </a>
        .
      </p>
      <div className="flex items-center gap-3 shrink-0">
        <a
          href={packHref}
          className="text-xs font-medium text-white/60 hover:text-white transition-colors underline underline-offset-2"
        >
          Ver paquetes
        </a>
        <a
          href={WA_URL}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-[#3B82F6] text-white text-xs font-semibold hover:bg-[#2563eb] transition-colors"
        >
          Solicitar propuesta
        </a>
      </div>
    </div>
  </div>
);
