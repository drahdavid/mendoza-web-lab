"use client";

import { useState } from "react";

type NavLink = {
  readonly href: string;
  readonly label: string;
};

type Props = {
  links: readonly NavLink[];
  waUrl: string;
};

export const MobileMenu = ({ links, waUrl }: Props) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleLinkClick = () => setIsOpen(false);

  return (
    <>
      {/* Hamburger button */}
      <button
        id="mobile-menu-toggle"
        onClick={() => setIsOpen((v) => !v)}
        aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
        aria-expanded={isOpen}
        className="md:hidden flex flex-col justify-center items-center w-10 h-10 rounded-xl bg-white/[0.04] border border-white/[0.07] gap-1.5 hover:bg-white/[0.08] transition-all"
      >
        <span
          className={`block h-0.5 bg-brand-white/70 transition-all duration-300 ${isOpen ? "w-5 rotate-45 translate-y-2" : "w-5"}`}
        />
        <span
          className={`block h-0.5 bg-brand-white/70 transition-all duration-300 ${isOpen ? "w-0 opacity-0" : "w-4"}`}
        />
        <span
          className={`block h-0.5 bg-brand-white/70 transition-all duration-300 ${isOpen ? "w-5 -rotate-45 -translate-y-2" : "w-5"}`}
        />
      </button>

      {/* Backdrop */}
      {isOpen && (
        <div
          className="md:hidden fixed inset-0 z-40 bg-black/50 backdrop-blur-sm"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Drawer */}
      <div
        className={`md:hidden fixed top-0 right-0 z-50 h-full w-72 bg-[#0f0f14] border-l border-white/[0.07] transform transition-transform duration-300 ease-in-out shadow-2xl ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between px-6 py-5 border-b border-white/[0.07]">
          <p className="text-xs font-bold tracking-[0.2em] uppercase text-brand-accent">
            Menú
          </p>
          <button
            onClick={() => setIsOpen(false)}
            aria-label="Cerrar menú"
            className="w-8 h-8 rounded-full bg-white/[0.05] hover:bg-white/10 flex items-center justify-center text-brand-white/50 hover:text-brand-white transition-all"
          >
            ✕
          </button>
        </div>

        <nav className="flex flex-col px-4 pt-6 gap-1">
          {links.map(({ href, label }) => (
            <a
              key={href}
              href={href}
              onClick={handleLinkClick}
              className="px-4 py-3.5 rounded-xl text-brand-white/65 font-medium hover:bg-white/[0.05] hover:text-brand-white transition-all duration-200 text-sm"
            >
              {label}
            </a>
          ))}
        </nav>

        <div className="absolute bottom-0 left-0 right-0 px-4 pb-8 pt-4 border-t border-white/[0.07]">
          <a
            id="mobile-menu-wa-cta"
            href={waUrl}
            target="_blank"
            rel="noreferrer"
            onClick={handleLinkClick}
            className="w-full inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-brand-accent text-white font-semibold text-sm hover:bg-brand-accent/90 hover:shadow-[0_0_20px_rgba(59,130,246,0.4)] transition-all"
          >
            Solicitar propuesta
          </a>
        </div>
      </div>
    </>
  );
};
