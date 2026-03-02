import { WA_GENERAL } from "../constants";
import type { Dictionary } from "@/dictionaries/types";

export const Footer = ({ dict }: { dict: Dictionary }) => {
  return (
    <footer className="py-16 px-6 border-t border-white/5">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">
          <div>
            <p className="text-brand-white font-bold text-lg mb-2">
              {dict.footer.brand}
            </p>
            <p className="text-sm text-brand-white/40 leading-relaxed">
              {dict.footer.description}
            </p>
            <p className="text-sm text-brand-white/40 mt-2">
              {dict.footer.location}
            </p>
          </div>
          <div>
            <p className="text-xs font-bold tracking-widest uppercase text-brand-white/30 mb-4">
              {dict.footer.navigation.title}
            </p>
            <ul className="space-y-2 text-sm text-brand-white/50">
              {[
                ["#servicios", dict.footer.navigation.links.services],
                ["#paquetes", dict.footer.navigation.links.packages],
                ["#proceso", dict.footer.navigation.links.process],
                ["#faq", dict.footer.navigation.links.faq],
              ].map(([href, label]) => (
                <li key={href}>
                  <a
                    href={href}
                    className="hover:text-brand-white transition-colors"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-xs font-bold tracking-widest uppercase text-brand-white/30 mb-4">
              {dict.footer.contact.title}
            </p>
            <ul className="space-y-2 text-sm text-brand-white/50">
              <li>
                <a
                  href={WA_GENERAL}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-brand-white transition-colors"
                >
                  WhatsApp
                </a>
              </li>
              <li>
                <a
                  href="mailto:hola@mendozaweblab.com"
                  className="hover:text-brand-white transition-colors"
                >
                  hola@mendozaweblab.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-brand-white/25">
          <p>
            © {new Date().getFullYear()} {dict.footer.rights}
          </p>
          <p>{dict.footer.madeWith}</p>
        </div>
      </div>
    </footer>
  );
};
