"use client";

import { DemoBanner } from "@/components/DemoBanner";
import {
  Brain,
  Heart,
  Users2,
  Calendar,
  CheckCircle2,
  MapPin,
  Star,
  Send,
  AlertCircle,
} from "lucide-react";
import { useState } from "react";

// ─── Types ───────────────────────────────────────────────────────────────────

type CareType = "individual" | "pareja" | "familia" | null;

interface FormState {
  name: string;
  email: string;
  phone: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
}

// ─── Data ────────────────────────────────────────────────────────────────────

const CARE_OPTIONS = [
  {
    id: "individual" as CareType,
    Icon: Brain,
    label: "Atención individual",
    short: "Para mí",
    description:
      "Acompañamiento psicológico personal. Trabajamos ansiedad, duelos, autoestima, límites y bienestar emocional.",
    recommendation:
      "Terapia individual · Sesiones de 50 min · Presencial u online",
  },
  {
    id: "pareja" as CareType,
    Icon: Heart,
    label: "Terapia de pareja",
    short: "Para nosotros",
    description:
      "Un espacio neutral para mejorar la comunicación y el vínculo. Para parejas en crisis o que quieren crecer juntos.",
    recommendation:
      "Terapia de pareja · Sesiones de 70 min · 1 o 2 veces por mes",
  },
  {
    id: "familia" as CareType,
    Icon: Users2,
    label: "Orientación familiar",
    short: "Para mi familia",
    description:
      "Trabajo con el sistema familiar para resolver conflictos, mejorar vínculos y acompañar en situaciones de cambio.",
    recommendation:
      "Terapia familiar · Sesiones de 80 min · A partir de 3 integrantes",
  },
];

const SERVICES = [
  {
    Icon: Brain,
    title: "Terapia individual",
    desc: "Espacio personal de escucha y trabajo emocional.",
  },
  {
    Icon: Heart,
    title: "Terapia de pareja",
    desc: "Herramientas para mejorar el vínculo desde la neutralidad.",
  },
  {
    Icon: Users2,
    title: "Orientación familiar",
    desc: "Resolución de conflictos y fortalecimiento de lazos.",
  },
  {
    Icon: Calendar,
    title: "Primera consulta",
    desc: "Sin compromiso. Para conocernos y ver si podemos trabajar juntos.",
  },
];

const REVIEWS = [
  {
    name: "M.R.",
    rating: 5,
    text: "Encontré un espacio donde sentirme realmente escuchada. Sofía tiene una forma de acompañar que transmite mucha calma.",
  },
  {
    name: "A.L.",
    rating: 5,
    text: "Nunca había ido a un psicólogo y tenía muchos miedos. Desde la primera sesión me sentí cómodo y seguro.",
  },
  {
    name: "C.V.",
    rating: 5,
    text: "Me ayudó a atravesar una separación muy difícil. Hoy me siento mucho más fuerte y con más herramientas.",
  },
];

const WA_TURNO =
  "https://wa.me/5492610000000?text=Hola%20Dra.%20Reyes%2C%20quisiera%20solicitar%20un%20turno.";

// ─── Care Selector Component ──────────────────────────────────────────────────

const CareSelector = () => {
  const [selected, setSelected] = useState<CareType>(null);
  const recommendation = CARE_OPTIONS.find((o) => o.id === selected);

  return (
    <div style={{ maxWidth: "800px", margin: "0 auto" }}>
      <p
        style={{
          textAlign: "center",
          fontSize: "0.72rem",
          fontWeight: 700,
          letterSpacing: "0.2em",
          textTransform: "uppercase",
          color: "#2D7A5E",
          marginBottom: "12px",
        }}
      >
        Orientación
      </p>
      <h2
        style={{
          fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif",
          fontSize: "2rem",
          fontWeight: 800,
          textAlign: "center",
          marginBottom: "12px",
          color: "#0F2B26",
        }}
      >
        ¿Qué tipo de apoyo estás buscando?
      </h2>
      <p
        style={{
          textAlign: "center",
          color: "rgba(15,43,38,0.5)",
          fontSize: "0.9rem",
          marginBottom: "36px",
        }}
      >
        Seleccioná una opción para ver la modalidad recomendada.
      </p>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "14px",
          marginBottom: "28px",
        }}
      >
        {CARE_OPTIONS.map(({ id, Icon, label, short, description }) => (
          <button
            key={id}
            onClick={() => setSelected(selected === id ? null : id)}
            style={{
              padding: "24px 20px",
              borderRadius: "16px",
              border: `2px solid ${selected === id ? "#2D7A5E" : "rgba(45,122,94,0.15)"}`,
              backgroundColor: selected === id ? "#2D7A5E" : "white",
              color: selected === id ? "white" : "#0F2B26",
              cursor: "pointer",
              textAlign: "left",
              transition: "all 0.2s",
              boxShadow:
                selected === id ? "0 8px 32px rgba(45,122,94,0.25)" : "none",
            }}
          >
            <Icon
              size={22}
              style={{
                marginBottom: "12px",
                opacity: selected === id ? 1 : 0.6,
              }}
            />
            <p
              style={{
                fontWeight: 800,
                fontSize: "0.9rem",
                marginBottom: "4px",
              }}
            >
              {short}
            </p>
            <p style={{ fontSize: "0.75rem", opacity: 0.7, lineHeight: 1.4 }}>
              {label}
            </p>
            {selected !== id && (
              <p
                style={{
                  fontSize: "0.72rem",
                  opacity: 0.45,
                  marginTop: "8px",
                  lineHeight: 1.4,
                }}
              >
                {description.substring(0, 60)}...
              </p>
            )}
          </button>
        ))}
      </div>

      {recommendation && (
        <div
          key={recommendation.id}
          style={{
            padding: "28px",
            borderRadius: "16px",
            backgroundColor: "#EFF8F4",
            border: "1.5px solid rgba(45,122,94,0.2)",
            animation: "slideDown 0.3s ease",
          }}
        >
          <div
            style={{ display: "flex", alignItems: "flex-start", gap: "16px" }}
          >
            <div
              style={{
                width: "40px",
                height: "40px",
                borderRadius: "10px",
                backgroundColor: "#2D7A5E",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexShrink: 0,
              }}
            >
              <recommendation.Icon size={20} color="white" />
            </div>
            <div style={{ flex: 1 }}>
              <p
                style={{
                  fontWeight: 700,
                  fontSize: "0.95rem",
                  color: "#0F2B26",
                  marginBottom: "6px",
                }}
              >
                Modalidad recomendada
              </p>
              <p
                style={{
                  fontSize: "0.88rem",
                  color: "rgba(15,43,38,0.65)",
                  lineHeight: 1.65,
                  marginBottom: "12px",
                }}
              >
                {recommendation.description}
              </p>
              <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                  padding: "7px 14px",
                  backgroundColor: "#2D7A5E",
                  borderRadius: "8px",
                  color: "white",
                  fontSize: "0.8rem",
                  fontWeight: 600,
                }}
              >
                <CheckCircle2 size={14} />
                {recommendation.recommendation}
              </div>
            </div>
          </div>
          <div
            style={{
              marginTop: "20px",
              paddingTop: "16px",
              borderTop: "1px solid rgba(45,122,94,0.15)",
              display: "flex",
              gap: "10px",
            }}
          >
            <a
              href={WA_TURNO}
              target="_blank"
              rel="noreferrer"
              style={{
                flex: 1,
                padding: "12px 20px",
                backgroundColor: "#2D7A5E",
                color: "white",
                borderRadius: "10px",
                fontWeight: 700,
                textDecoration: "none",
                textAlign: "center",
                fontSize: "0.88rem",
              }}
            >
              Pedir turno por este servicio
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

// ─── Contact Form ─────────────────────────────────────────────────────────────

const ContactForm = () => {
  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [touched, setTouched] = useState<
    Partial<Record<keyof FormState, boolean>>
  >({});
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const validate = (f: FormState): FormErrors => ({
    name: f.name.trim().length < 2 ? "Ingresá tu nombre completo" : undefined,
    email: !EMAIL_RE.test(f.email) ? "Email inválido" : undefined,
  });

  const handleBlur = (field: keyof FormState) => {
    setTouched((t) => ({ ...t, [field]: true }));
    setErrors(validate(form));
  };

  const handleChange = (field: keyof FormState, value: string) => {
    const next = { ...form, [field]: value };
    setForm(next);
    if (touched[field]) setErrors(validate(next));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const allTouched = { name: true, email: true, phone: true, message: true };
    setTouched(allTouched);
    const errs = validate(form);
    setErrors(errs);
    if (Object.values(errs).some(Boolean)) return;
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1200);
  };

  if (submitted) {
    return (
      <div
        style={{
          textAlign: "center",
          padding: "48px 32px",
          backgroundColor: "white",
          borderRadius: "20px",
          border: "1.5px solid rgba(45,122,94,0.2)",
        }}
      >
        <div style={{ fontSize: "3rem", marginBottom: "16px" }}>✅</div>
        <h3
          style={{
            fontSize: "1.3rem",
            fontWeight: 800,
            color: "#0F2B26",
            marginBottom: "10px",
          }}
        >
          ¡Consulta enviada!
        </h3>
        <p
          style={{
            color: "rgba(15,43,38,0.55)",
            lineHeight: 1.7,
            marginBottom: "24px",
          }}
        >
          Gracias, <strong>{form.name}</strong>. Te respondo en menos de 24
          horas a <strong>{form.email}</strong>.
        </p>
        <button
          onClick={() => {
            setSubmitted(false);
            setForm({ name: "", email: "", phone: "", message: "" });
            setTouched({});
          }}
          style={{
            background: "none",
            border: "none",
            color: "#2D7A5E",
            fontSize: "0.88rem",
            cursor: "pointer",
            textDecoration: "underline",
          }}
        >
          Enviar otra consulta
        </button>
      </div>
    );
  }

  const inputStyle = (field: keyof FormState): React.CSSProperties => ({
    width: "100%",
    padding: "11px 14px",
    borderRadius: "10px",
    border: `1.5px solid ${touched[field] && errors[field as keyof FormErrors] ? "#DC3545" : touched[field] && !errors[field as keyof FormErrors] ? "#2D7A5E" : "rgba(45,122,94,0.15)"}`,
    backgroundColor: "white",
    fontSize: "0.92rem",
    color: "#0F2B26",
    outline: "none",
    boxSizing: "border-box",
    transition: "border-color 0.2s",
  });

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "16px",
        backgroundColor: "white",
        padding: "36px",
        borderRadius: "20px",
        border: "1.5px solid rgba(45,122,94,0.15)",
        boxShadow: "0 8px 40px rgba(45,122,94,0.06)",
      }}
    >
      <div>
        <label
          style={{
            display: "block",
            fontSize: "0.78rem",
            fontWeight: 700,
            color: "rgba(15,43,38,0.6)",
            marginBottom: "6px",
            textTransform: "uppercase",
            letterSpacing: "0.1em",
          }}
        >
          Nombre completo *
        </label>
        <input
          type="text"
          value={form.name}
          onChange={(e) => handleChange("name", e.target.value)}
          onBlur={() => handleBlur("name")}
          placeholder="Tu nombre"
          style={inputStyle("name")}
        />
        {touched.name && errors.name && (
          <p
            style={{
              display: "flex",
              alignItems: "center",
              gap: "5px",
              fontSize: "0.75rem",
              color: "#DC3545",
              marginTop: "4px",
            }}
          >
            <AlertCircle size={12} />
            {errors.name}
          </p>
        )}
      </div>
      <div
        style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px" }}
      >
        <div>
          <label
            style={{
              display: "block",
              fontSize: "0.78rem",
              fontWeight: 700,
              color: "rgba(15,43,38,0.6)",
              marginBottom: "6px",
              textTransform: "uppercase",
              letterSpacing: "0.1em",
            }}
          >
            Email *
          </label>
          <input
            type="email"
            value={form.email}
            onChange={(e) => handleChange("email", e.target.value)}
            onBlur={() => handleBlur("email")}
            placeholder="tucorreo@mail.com"
            style={inputStyle("email")}
          />
          {touched.email && errors.email && (
            <p
              style={{
                display: "flex",
                alignItems: "center",
                gap: "5px",
                fontSize: "0.75rem",
                color: "#DC3545",
                marginTop: "4px",
              }}
            >
              <AlertCircle size={12} />
              {errors.email}
            </p>
          )}
        </div>
        <div>
          <label
            style={{
              display: "block",
              fontSize: "0.78rem",
              fontWeight: 700,
              color: "rgba(15,43,38,0.6)",
              marginBottom: "6px",
              textTransform: "uppercase",
              letterSpacing: "0.1em",
            }}
          >
            Teléfono
          </label>
          <input
            type="tel"
            value={form.phone}
            onChange={(e) => handleChange("phone", e.target.value)}
            placeholder="+54 261 000-0000"
            style={inputStyle("phone")}
          />
        </div>
      </div>
      <div>
        <label
          style={{
            display: "block",
            fontSize: "0.78rem",
            fontWeight: 700,
            color: "rgba(15,43,38,0.6)",
            marginBottom: "6px",
            textTransform: "uppercase",
            letterSpacing: "0.1em",
          }}
        >
          ¿Qué te trae? (opcional)
        </label>
        <textarea
          rows={3}
          value={form.message}
          onChange={(e) => handleChange("message", e.target.value)}
          placeholder="Contame brevemente por qué buscás atención psicológica..."
          style={{ ...inputStyle("message"), resize: "vertical" }}
        />
      </div>
      <button
        type="submit"
        disabled={loading}
        style={{
          padding: "13px 20px",
          backgroundColor: loading ? "#9ABFB5" : "#2D7A5E",
          color: "white",
          borderRadius: "10px",
          fontWeight: 700,
          fontSize: "0.95rem",
          border: "none",
          cursor: loading ? "not-allowed" : "pointer",
          transition: "all 0.2s",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "8px",
        }}
      >
        <Send size={16} />
        {loading ? "Enviando..." : "Enviar consulta"}
      </button>
      <p
        style={{
          fontSize: "0.72rem",
          color: "rgba(15,43,38,0.35)",
          textAlign: "center",
        }}
      >
        Tu información es confidencial. Nunca la compartimos con terceros.
      </p>
    </form>
  );
};

// ─── Page ────────────────────────────────────────────────────────────────────

export default function DemoPro() {
  return (
    <>
      <DemoBanner packName="Pack Presencia Pro" packHref="/#paquetes" />

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap');
        .sofia-body { background: #F8FBFA; color: #0F2B26; font-family: 'Plus Jakarta Sans', system-ui, sans-serif; }
        @keyframes slideDown { from { opacity: 0; transform: translateY(-8px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
      `}</style>

      <div className="sofia-body" style={{ minHeight: "100vh" }}>
        {/* ── HEADER ── */}
        <header
          style={{
            position: "fixed",
            top: "40px",
            left: 0,
            right: 0,
            zIndex: 50,
            backgroundColor: "rgba(248,251,250,0.96)",
            backdropFilter: "blur(12px)",
            borderBottom: "1px solid rgba(45,122,94,0.1)",
          }}
        >
          <div
            style={{
              maxWidth: "1100px",
              margin: "0 auto",
              padding: "0 24px",
              height: "64px",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <div>
              <p
                style={{
                  fontWeight: 800,
                  fontSize: "0.95rem",
                  color: "#0F2B26",
                  marginBottom: "0",
                }}
              >
                Dra. Sofía Reyes
              </p>
              <p
                style={{
                  fontSize: "0.7rem",
                  color: "rgba(15,43,38,0.45)",
                  marginTop: "1px",
                }}
              >
                Psicóloga clínica · M.N. 12.847
              </p>
            </div>
            <div style={{ display: "flex", gap: "20px", alignItems: "center" }}>
              {(
                [
                  ["#servicios", "Servicios"],
                  ["#orientacion", "¿Por dónde empezar?"],
                  ["#contacto", "Turnos"],
                ] as [string, string][]
              ).map(([href, label]) => (
                <a
                  key={href}
                  href={href}
                  style={{
                    fontSize: "0.84rem",
                    color: "rgba(15,43,38,0.5)",
                    textDecoration: "none",
                    fontWeight: 500,
                  }}
                >
                  {label}
                </a>
              ))}
              <a
                href={WA_TURNO}
                target="_blank"
                rel="noreferrer"
                style={{
                  padding: "8px 20px",
                  backgroundColor: "#2D7A5E",
                  color: "white",
                  borderRadius: "8px",
                  fontSize: "0.82rem",
                  fontWeight: 700,
                  textDecoration: "none",
                }}
              >
                Pedir turno
              </a>
            </div>
          </div>
        </header>

        {/* ── HERO ── */}
        <section
          style={{
            minHeight: "100vh",
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            alignItems: "center",
            gap: "80px",
            maxWidth: "1100px",
            margin: "0 auto",
            padding: "120px 24px 80px",
          }}
        >
          <div>
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                padding: "6px 14px 6px 8px",
                borderRadius: "100px",
                border: "1.5px solid rgba(45,122,94,0.2)",
                backgroundColor: "rgba(45,122,94,0.05)",
                marginBottom: "28px",
              }}
            >
              <span
                style={{
                  width: "7px",
                  height: "7px",
                  borderRadius: "50%",
                  backgroundColor: "#2D7A5E",
                  display: "inline-block",
                }}
              />
              <span
                style={{
                  fontSize: "0.75rem",
                  fontWeight: 700,
                  color: "#2D7A5E",
                }}
              >
                Turnos disponibles esta semana
              </span>
            </div>
            <h1
              style={{
                fontSize: "clamp(2.5rem, 4.5vw, 3.8rem)",
                fontWeight: 800,
                lineHeight: 1.1,
                letterSpacing: "-0.03em",
                marginBottom: "24px",
                color: "#0F2B26",
              }}
            >
              Un espacio para{" "}
              <span style={{ color: "#2D7A5E" }}>conocerte mejor.</span>
            </h1>
            <p
              style={{
                fontSize: "1rem",
                color: "rgba(15,43,38,0.55)",
                lineHeight: 1.75,
                marginBottom: "32px",
                maxWidth: "400px",
              }}
            >
              Acompañamiento psicológico individual, de pareja y familiar.
              Presencial en Mendoza y online para todo el país.
            </p>
            <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
              <a
                href="#orientacion"
                style={{
                  padding: "13px 24px",
                  backgroundColor: "#2D7A5E",
                  color: "white",
                  borderRadius: "10px",
                  fontWeight: 700,
                  textDecoration: "none",
                  fontSize: "0.92rem",
                }}
              >
                ¿Por dónde empezar?
              </a>
              <a
                href="#contacto"
                style={{
                  padding: "13px 22px",
                  border: "1.5px solid rgba(15,43,38,0.15)",
                  color: "#0F2B26",
                  borderRadius: "10px",
                  fontWeight: 600,
                  textDecoration: "none",
                  fontSize: "0.92rem",
                  backgroundColor: "white",
                }}
              >
                Ver turnos
              </a>
            </div>
          </div>

          <div style={{ position: "relative" }}>
            <div
              style={{
                aspectRatio: "3/4",
                borderRadius: "24px",
                overflow: "hidden",
                backgroundImage:
                  "url('https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=800&q=80')",
                backgroundSize: "cover",
                backgroundPosition: "center top",
                boxShadow: "0 24px 80px rgba(45,122,94,0.2)",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background:
                    "linear-gradient(to top, rgba(15,43,38,0.5) 0%, transparent 50%)",
                }}
              />
            </div>
            <div
              style={{
                position: "absolute",
                bottom: "20px",
                left: "20px",
                right: "20px",
                padding: "18px 22px",
                backgroundColor: "white",
                backdropFilter: "blur(8px)",
                borderRadius: "14px",
                boxShadow: "0 8px 40px rgba(0,0,0,0.1)",
              }}
            >
              <p
                style={{
                  fontWeight: 800,
                  fontSize: "0.95rem",
                  marginBottom: "2px",
                  color: "#0F2B26",
                }}
              >
                Dra. Sofía Reyes
              </p>
              <p style={{ fontSize: "0.78rem", color: "rgba(15,43,38,0.5)" }}>
                Lic. en Psicología · UNCuyo · M.N. 12.847
              </p>
            </div>
          </div>
        </section>

        {/* ── SERVICIOS ── */}
        <section
          id="servicios"
          style={{ padding: "96px 24px", backgroundColor: "white" }}
        >
          <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
            <p
              style={{
                fontSize: "0.72rem",
                fontWeight: 700,
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                color: "#2D7A5E",
                marginBottom: "12px",
                textAlign: "center",
              }}
            >
              Servicios
            </p>
            <h2
              style={{
                fontSize: "2rem",
                fontWeight: 800,
                letterSpacing: "-0.025em",
                textAlign: "center",
                marginBottom: "48px",
                color: "#0F2B26",
              }}
            >
              ¿En qué puedo acompañarte?
            </h2>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
                gap: "16px",
              }}
            >
              {SERVICES.map(({ Icon, title, desc }) => (
                <div
                  key={title}
                  style={{
                    padding: "28px",
                    borderRadius: "16px",
                    border: "1.5px solid rgba(45,122,94,0.1)",
                    backgroundColor: "#F8FBFA",
                  }}
                >
                  <div
                    style={{
                      width: "44px",
                      height: "44px",
                      borderRadius: "12px",
                      backgroundColor: "rgba(45,122,94,0.1)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      marginBottom: "16px",
                    }}
                  >
                    <Icon size={20} color="#2D7A5E" />
                  </div>
                  <h3
                    style={{
                      fontSize: "0.97rem",
                      fontWeight: 700,
                      marginBottom: "8px",
                      color: "#0F2B26",
                    }}
                  >
                    {title}
                  </h3>
                  <p
                    style={{
                      fontSize: "0.85rem",
                      color: "rgba(15,43,38,0.5)",
                      lineHeight: 1.65,
                    }}
                  >
                    {desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── ORIENTACIÓN (INTERACTIVE) ── */}
        <section id="orientacion" style={{ padding: "96px 24px" }}>
          <CareSelector />
        </section>

        {/* ── TESTIMONIOS ── */}
        <section style={{ padding: "80px 24px", backgroundColor: "white" }}>
          <div style={{ maxWidth: "1000px", margin: "0 auto" }}>
            <h2
              style={{
                fontSize: "2rem",
                fontWeight: 800,
                textAlign: "center",
                marginBottom: "40px",
                color: "#0F2B26",
              }}
            >
              Experiencias reales
            </h2>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
                gap: "16px",
              }}
            >
              {REVIEWS.map(({ name, rating, text }) => (
                <div
                  key={name}
                  style={{
                    padding: "28px",
                    borderRadius: "16px",
                    border: "1.5px solid rgba(45,122,94,0.1)",
                    backgroundColor: "#F8FBFA",
                    boxShadow: "0 4px 20px rgba(45,122,94,0.05)",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      gap: "3px",
                      marginBottom: "12px",
                    }}
                  >
                    {Array.from({ length: rating }).map((_, i) => (
                      <Star key={i} size={13} fill="#2D7A5E" color="#2D7A5E" />
                    ))}
                  </div>
                  <p
                    style={{
                      fontSize: "0.88rem",
                      color: "rgba(15,43,38,0.6)",
                      lineHeight: 1.7,
                      marginBottom: "14px",
                    }}
                  >
                    &ldquo;{text}&rdquo;
                  </p>
                  <p
                    style={{
                      fontSize: "0.78rem",
                      fontWeight: 700,
                      color: "rgba(15,43,38,0.35)",
                    }}
                  >
                    — {name}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CONTACTO ── */}
        <section id="contacto" style={{ padding: "96px 24px" }}>
          <div
            style={{
              maxWidth: "1000px",
              margin: "0 auto",
              display: "grid",
              gridTemplateColumns: "1fr 1.3fr",
              gap: "64px",
              alignItems: "start",
            }}
          >
            <div>
              <p
                style={{
                  fontSize: "0.72rem",
                  fontWeight: 700,
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                  color: "#2D7A5E",
                  marginBottom: "16px",
                }}
              >
                Turnos
              </p>
              <h2
                style={{
                  fontSize: "2rem",
                  fontWeight: 800,
                  lineHeight: 1.2,
                  marginBottom: "20px",
                  color: "#0F2B26",
                }}
              >
                Pedí tu primer turno
              </h2>
              <p
                style={{
                  color: "rgba(15,43,38,0.55)",
                  lineHeight: 1.75,
                  marginBottom: "28px",
                  fontSize: "0.95rem",
                }}
              >
                La primera consulta no implica compromiso de iniciar un proceso.
                Es un espacio para conocernos.
              </p>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "12px",
                }}
              >
                {[
                  { Icon: Calendar, text: "Turnos de lunes a viernes" },
                  { Icon: MapPin, text: "San Martín, Mendoza + Online" },
                ].map(({ Icon, text }) => (
                  <div
                    key={text}
                    style={{
                      display: "flex",
                      gap: "10px",
                      alignItems: "center",
                    }}
                  >
                    <Icon size={16} color="#2D7A5E" />
                    <span
                      style={{
                        fontSize: "0.88rem",
                        color: "rgba(15,43,38,0.55)",
                      }}
                    >
                      {text}
                    </span>
                  </div>
                ))}
              </div>
            </div>
            <ContactForm />
          </div>
        </section>

        {/* ── FOOTER ── */}
        <footer
          style={{
            padding: "32px 24px",
            borderTop: "1px solid rgba(45,122,94,0.1)",
            textAlign: "center",
            backgroundColor: "white",
          }}
        >
          <p style={{ fontSize: "0.8rem", color: "rgba(15,43,38,0.3)" }}>
            © {new Date().getFullYear()} Dra. Sofía Reyes · Psicóloga clínica ·
            Mendoza, Argentina
          </p>
        </footer>
      </div>
    </>
  );
}
