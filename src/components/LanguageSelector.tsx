"use client";

import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";
import { Globe } from "lucide-react";

export function LanguageSelector() {
  const pathname = usePathname();
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);

  // Determine current language from pathname
  const currentLang = pathname.startsWith("/en") ? "en" : "es";

  const toggleLanguage = (lang: "es" | "en") => {
    if (lang === currentLang) return;

    // Replace the current language in the pathname with the new one
    const segments = pathname.split("/");
    if (segments[1] === "es" || segments[1] === "en") {
      segments[1] = lang;
    } else {
      segments.splice(1, 0, lang);
    }
    const newPath = segments.join("/");

    router.push(newPath);
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-3 py-2 text-sm font-medium text-brand-white/80 hover:text-brand-white bg-white/5 hover:bg-white/10 rounded-lg border border-white/5 transition-colors"
        aria-expanded={isOpen}
      >
        <Globe className="w-4 h-4" />
        <span className="uppercase">{currentLang}</span>
        {currentLang === "es" ? "🇪🇸" : "🇬🇧"}
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-32 origin-top-right rounded-xl bg-brand-black border border-white/10 shadow-xl ring-1 ring-black ring-opacity-5 focus:outline-none z-50 overflow-hidden">
          <div className="py-1">
            <button
              onClick={() => toggleLanguage("es")}
              className={`flex items-center gap-3 w-full px-4 py-2.5 text-sm ${
                currentLang === "es"
                  ? "bg-brand-accent/20 text-brand-accent font-semibold"
                  : "text-brand-white/80 hover:bg-white/5 hover:text-brand-white"
              } transition-colors`}
            >
              <span>🇪🇸</span>
              <span>Español</span>
            </button>
            <button
              onClick={() => toggleLanguage("en")}
              className={`flex items-center gap-3 w-full px-4 py-2.5 text-sm ${
                currentLang === "en"
                  ? "bg-brand-accent/20 text-brand-accent font-semibold"
                  : "text-brand-white/80 hover:bg-white/5 hover:text-brand-white"
              } transition-colors`}
            >
              <span>🇬🇧</span>
              <span>English</span>
            </button>
          </div>
        </div>
      )}

      {/* Backdrop for closing dropdown */}
      {isOpen && (
        <div className="fixed inset-0 z-40" onClick={() => setIsOpen(false)} />
      )}
    </div>
  );
}
