import { WA_GENERAL } from "../constants";

export const Footer = () => {
  return (
    <footer className="py-16 px-6 border-t border-white/5">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">
          <div>
            <p className="text-brand-white font-bold text-lg mb-2">Web Lab</p>
            <p className="text-sm text-brand-white/40 leading-relaxed">
              Presencia web profesional para negocios de todo el país.
            </p>
            <p className="text-sm text-brand-white/40 mt-2">
              Mendoza, Argentina 🇦🇷
            </p>
          </div>
          <div>
            <p className="text-xs font-bold tracking-widest uppercase text-brand-white/30 mb-4">
              Navegación
            </p>
            <ul className="space-y-2 text-sm text-brand-white/50">
              {[
                ["#servicios", "Servicios"],
                ["#paquetes", "Paquetes"],
                ["#proceso", "Cómo trabajamos"],
                ["#faq", "FAQ"],
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
              Contacto
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
            © {new Date().getFullYear()} Web Lab. Todos los derechos reservados.
          </p>
          <p>Hecho con ❤ en Mendoza, Argentina.</p>
        </div>
      </div>
    </footer>
  );
};
