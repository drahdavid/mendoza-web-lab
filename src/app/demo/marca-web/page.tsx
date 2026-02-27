"use client";

import { DemoBanner } from "@/components/DemoBanner";
import {
  BarChart3,
  Globe,
  Zap,
  Shield,
  TrendingUp,
  Users2,
  ArrowUpRight,
  CheckCircle2,
  Calculator,
} from "lucide-react";
import { useState, useEffect, useRef } from "react";

// ─── Types ───────────────────────────────────────────────────────────────────

interface RoiState {
  visits: number;
  convRate: number;
  avgTicket: number;
}

// ─── Data ────────────────────────────────────────────────────────────────────

const SERVICES = [
  {
    Icon: Globe,
    title: "Estrategia digital",
    desc: "El camino más directo entre donde estás y donde querés llegar.",
    tag: "Consultoría",
  },
  {
    Icon: BarChart3,
    title: "Analítica y datos",
    desc: "Dashboards claros para tomar mejores decisiones, siempre.",
    tag: "Analytics",
  },
  {
    Icon: Zap,
    title: "Automatización",
    desc: "Escalá sin contratar: automatizamos los flujos que te consumen tiempo.",
    tag: "Operaciones",
  },
  {
    Icon: Shield,
    title: "Branding estratégico",
    desc: "Una identidad que genera confianza antes de abrir la boca.",
    tag: "Identidad",
  },
  {
    Icon: TrendingUp,
    title: "Growth & adquisición",
    desc: "SEO, paid, email y contenido. Todo medido, todo optimizado.",
    tag: "Marketing",
  },
  {
    Icon: Users2,
    title: "Retención y fidelización",
    desc: "El cliente que ya te compró es tu activo más valioso.",
    tag: "CRM",
  },
] as const;

const STATS = [
  { value: 120, suffix: "+", label: "Proyectos" },
  { value: 3.4, suffix: "x", label: "ROI promedio" },
  { value: 94, suffix: "%", label: "Retención" },
] as const;

const CASES = [
  {
    category: "E-commerce",
    brand: "Lúnea Studio",
    metric: "+210%",
    detail: "ventas online en 4 meses",
    color: "#F0A500",
  },
  {
    category: "B2B / SaaS",
    brand: "Stackly",
    metric: "0→300",
    detail: "clientes en 6 meses",
    color: "#9333EA",
  },
  {
    category: "Servicios",
    brand: "Grupo Andina Legal",
    metric: "+65%",
    detail: "consultas calificadas",
    color: "#22D3EE",
  },
] as const;

const WA_NEXO =
  "https://wa.me/5492615000000?text=Hola%20Nexo%2C%20quer%C3%ADa%20hablar%20sobre%20una%20consultor%C3%ADa.";

// ─── Animated Counter ─────────────────────────────────────────────────────────

const AnimatedCounter = ({
  value,
  suffix,
}: {
  value: number;
  suffix: string;
}) => {
  const [display, setDisplay] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const animated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !animated.current) {
          animated.current = true;
          const start = Date.now();
          const duration = 1800;
          const tick = () => {
            const elapsed = Date.now() - start;
            const progress = Math.min(elapsed / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setDisplay(parseFloat((eased * value).toFixed(1)));
            if (progress < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
        }
      },
      { threshold: 0.5 },
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [value]);

  return (
    <span ref={ref}>
      {Number.isInteger(value) ? Math.round(display) : display.toFixed(1)}
      {suffix}
    </span>
  );
};

// ─── ROI Calculator ────────────────────────────────────────────────────────────

const ROICalculator = () => {
  const [roi, setRoi] = useState<RoiState>({
    visits: 1500,
    convRate: 1.2,
    avgTicket: 45000,
  });

  const currentLeads = Math.round((roi.visits * roi.convRate) / 100);
  const currentRevenue = currentLeads * roi.avgTicket;

  const MULTIPLIER = 2.8;
  const projectedVisits = Math.round(roi.visits * 1.6);
  const projectedConv = Math.min(roi.convRate * MULTIPLIER, 12);
  const projectedLeads = Math.round((projectedVisits * projectedConv) / 100);
  const projectedRevenue = projectedLeads * roi.avgTicket;
  const extraRevenue = projectedRevenue - currentRevenue;

  const fmt = (n: number) =>
    n >= 1_000_000
      ? `$${(n / 1_000_000).toFixed(1)}M`
      : `$${(n / 1000).toFixed(0)}k`;

  const SliderField = ({
    label,
    value,
    min,
    max,
    step,
    format,
    field,
  }: {
    label: string;
    value: number;
    min: number;
    max: number;
    step: number;
    format: (v: number) => string;
    field: keyof RoiState;
  }) => (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginBottom: "8px",
        }}
      >
        <label
          style={{
            fontSize: "0.8rem",
            fontWeight: 600,
            color: "rgba(241,236,255,0.6)",
            textTransform: "uppercase",
            letterSpacing: "0.08em",
          }}
        >
          {label}
        </label>
        <span
          style={{ fontSize: "0.95rem", fontWeight: 800, color: "#F0A500" }}
        >
          {format(value)}
        </span>
      </div>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) =>
          setRoi((r) => ({ ...r, [field]: parseFloat(e.target.value) }))
        }
        style={{ width: "100%", accentColor: "#F0A500", cursor: "pointer" }}
      />
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          fontSize: "0.65rem",
          color: "rgba(241,236,255,0.25)",
          marginTop: "3px",
        }}
      >
        <span>{format(min)}</span>
        <span>{format(max)}</span>
      </div>
    </div>
  );

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: "32px",
        alignItems: "start",
      }}
    >
      {/* Inputs */}
      <div
        style={{
          padding: "36px",
          borderRadius: "20px",
          backgroundColor: "rgba(255,255,255,0.03)",
          border: "1px solid rgba(240,165,0,0.12)",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
            marginBottom: "28px",
          }}
        >
          <div
            style={{
              width: "36px",
              height: "36px",
              borderRadius: "10px",
              backgroundColor: "rgba(240,165,0,0.12)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Calculator size={18} color="#F0A500" />
          </div>
          <div>
            <p
              style={{ fontWeight: 700, fontSize: "0.92rem", color: "#F1ECFF" }}
            >
              Calculá tu potencial
            </p>
            <p style={{ fontSize: "0.72rem", color: "rgba(241,236,255,0.4)" }}>
              Ajustá los valores de tu negocio
            </p>
          </div>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: "28px" }}>
          <SliderField
            label="Visitas/mes al sitio actual"
            value={roi.visits}
            min={200}
            max={10000}
            step={100}
            format={(v) => `${v.toLocaleString("es-AR")}`}
            field="visits"
          />
          <SliderField
            label="Tasa de conversión actual"
            value={roi.convRate}
            min={0.1}
            max={6}
            step={0.1}
            format={(v) => `${v.toFixed(1)}%`}
            field="convRate"
          />
          <SliderField
            label="Ticket promedio"
            value={roi.avgTicket}
            min={5000}
            max={500000}
            step={5000}
            format={(v) => `$${(v / 1000).toFixed(0)}k`}
            field="avgTicket"
          />
        </div>
      </div>

      {/* Results */}
      <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
        {/* Current */}
        <div
          style={{
            padding: "24px 28px",
            borderRadius: "16px",
            backgroundColor: "rgba(255,255,255,0.02)",
            border: "1px solid rgba(255,255,255,0.06)",
          }}
        >
          <p
            style={{
              fontSize: "0.72rem",
              fontWeight: 700,
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              color: "rgba(241,236,255,0.35)",
              marginBottom: "14px",
            }}
          >
            🔴 Situación actual
          </p>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "16px",
            }}
          >
            <div>
              <p
                style={{
                  fontSize: "1.8rem",
                  fontWeight: 900,
                  color: "#F1ECFF",
                  letterSpacing: "-0.04em",
                }}
              >
                {currentLeads}
              </p>
              <p
                style={{ fontSize: "0.75rem", color: "rgba(241,236,255,0.4)" }}
              >
                consultas / mes
              </p>
            </div>
            <div>
              <p
                style={{
                  fontSize: "1.8rem",
                  fontWeight: 900,
                  color: "#F1ECFF",
                  letterSpacing: "-0.04em",
                }}
              >
                {fmt(currentRevenue)}
              </p>
              <p
                style={{ fontSize: "0.75rem", color: "rgba(241,236,255,0.4)" }}
              >
                revenue / mes
              </p>
            </div>
          </div>
        </div>

        {/* Projected */}
        <div
          style={{
            padding: "24px 28px",
            borderRadius: "16px",
            backgroundColor: "rgba(240,165,0,0.06)",
            border: "1.5px solid rgba(240,165,0,0.25)",
            position: "relative",
            overflow: "hidden",
          }}
        >
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              height: "2px",
              background: "linear-gradient(90deg, #F0A500, transparent)",
            }}
          />
          <p
            style={{
              fontSize: "0.72rem",
              fontWeight: 700,
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              color: "#F0A500",
              marginBottom: "14px",
            }}
          >
            🟢 Con Nexo (proyección)
          </p>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "16px",
              marginBottom: "16px",
            }}
          >
            <div>
              <p
                style={{
                  fontSize: "1.8rem",
                  fontWeight: 900,
                  color: "#F0A500",
                  letterSpacing: "-0.04em",
                }}
              >
                {projectedLeads}
              </p>
              <p style={{ fontSize: "0.75rem", color: "rgba(240,165,0,0.6)" }}>
                consultas / mes
              </p>
            </div>
            <div>
              <p
                style={{
                  fontSize: "1.8rem",
                  fontWeight: 900,
                  color: "#F0A500",
                  letterSpacing: "-0.04em",
                }}
              >
                {fmt(projectedRevenue)}
              </p>
              <p style={{ fontSize: "0.75rem", color: "rgba(240,165,0,0.6)" }}>
                revenue / mes
              </p>
            </div>
          </div>
          <div
            style={{
              padding: "12px 16px",
              borderRadius: "10px",
              backgroundColor: "rgba(240,165,0,0.1)",
              display: "flex",
              alignItems: "center",
              gap: "10px",
            }}
          >
            <TrendingUp size={18} color="#F0A500" />
            <div>
              <p
                style={{
                  fontWeight: 800,
                  fontSize: "0.95rem",
                  color: "#F0A500",
                }}
              >
                +{fmt(extraRevenue)} / mes
              </p>
              <p style={{ fontSize: "0.72rem", color: "rgba(240,165,0,0.6)" }}>
                revenue adicional estimado
              </p>
            </div>
          </div>
        </div>

        <p
          style={{
            fontSize: "0.72rem",
            color: "rgba(241,236,255,0.25)",
            lineHeight: 1.5,
            textAlign: "center",
          }}
        >
          Proyección basada en resultados promedio de clientes. Los resultados
          varían según industria y ejecución.
        </p>

        <a
          href={WA_NEXO}
          target="_blank"
          rel="noreferrer"
          style={{
            padding: "13px 20px",
            background: "linear-gradient(135deg, #9333EA, #F0A500)",
            color: "white",
            borderRadius: "12px",
            fontWeight: 700,
            textDecoration: "none",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "8px",
            fontSize: "0.92rem",
          }}
        >
          Quiero estos resultados <ArrowUpRight size={16} />
        </a>
      </div>
    </div>
  );
};

// ─── Page ────────────────────────────────────────────────────────────────────

export default function DemoMarcaWeb() {
  return (
    <>
      <DemoBanner
        packName="Pack Marca + Web Profesional"
        packHref="/#paquetes"
      />

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700;800&display=swap');
        .nexo-body { background: #0D0717; color: #F1ECFF; font-family: 'Space Grotesk', system-ui, sans-serif; }
        @keyframes fadeUp { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
      `}</style>

      <div className="nexo-body" style={{ minHeight: "100vh" }}>
        {/* ── HEADER ── */}
        <header
          style={{
            position: "fixed",
            top: "40px",
            left: 0,
            right: 0,
            zIndex: 50,
            backgroundColor: "rgba(13,7,23,0.92)",
            backdropFilter: "blur(12px)",
            borderBottom: "1px solid rgba(147,51,234,0.12)",
          }}
        >
          <div
            style={{
              maxWidth: "1200px",
              margin: "0 auto",
              padding: "0 32px",
              height: "64px",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
              <div
                style={{
                  width: "30px",
                  height: "30px",
                  borderRadius: "8px",
                  background: "linear-gradient(135deg, #9333EA, #F0A500)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "0.68rem",
                  fontWeight: 900,
                  color: "white",
                  letterSpacing: "-0.02em",
                }}
              >
                NX
              </div>
              <span
                style={{
                  fontWeight: 800,
                  fontSize: "1.05rem",
                  letterSpacing: "-0.03em",
                }}
              >
                Nexo
              </span>
            </div>
            <nav style={{ display: "flex", gap: "28px", alignItems: "center" }}>
              {(
                [
                  ["#servicios", "Servicios"],
                  ["#roi", "Calculadora"],
                  ["#casos", "Casos"],
                  ["#contacto", "Contacto"],
                ] as [string, string][]
              ).map(([href, label]) => (
                <a
                  key={href}
                  href={href}
                  style={{
                    fontSize: "0.84rem",
                    color: "rgba(241,236,255,0.45)",
                    textDecoration: "none",
                    fontWeight: 500,
                  }}
                >
                  {label}
                </a>
              ))}
              <a
                href={WA_NEXO}
                target="_blank"
                rel="noreferrer"
                style={{
                  padding: "8px 22px",
                  background: "linear-gradient(135deg, #9333EA, #7C3AED)",
                  color: "white",
                  borderRadius: "8px",
                  fontSize: "0.82rem",
                  fontWeight: 700,
                  textDecoration: "none",
                }}
              >
                Hablar con el equipo
              </a>
            </nav>
          </div>
        </header>

        {/* ── HERO ── */}
        <section
          style={{
            minHeight: "100vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "140px 32px 80px",
            position: "relative",
            overflow: "hidden",
          }}
        >
          <div
            style={{
              position: "absolute",
              top: "-20%",
              right: "-10%",
              width: "50%",
              height: "80%",
              background:
                "radial-gradient(ellipse, rgba(147,51,234,0.12) 0%, transparent 70%)",
              pointerEvents: "none",
            }}
          />
          <div
            style={{
              position: "absolute",
              bottom: "0",
              left: "-5%",
              width: "40%",
              height: "60%",
              background:
                "radial-gradient(ellipse, rgba(240,165,0,0.07) 0%, transparent 70%)",
              pointerEvents: "none",
            }}
          />

          <div
            style={{
              maxWidth: "900px",
              margin: "0 auto",
              textAlign: "center",
              position: "relative",
            }}
          >
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                padding: "5px 14px 5px 7px",
                borderRadius: "100px",
                border: "1px solid rgba(240,165,0,0.2)",
                backgroundColor: "rgba(240,165,0,0.05)",
                marginBottom: "32px",
              }}
            >
              <span
                style={{
                  padding: "2px 9px",
                  borderRadius: "100px",
                  backgroundColor: "rgba(240,165,0,0.15)",
                  fontSize: "0.62rem",
                  fontWeight: 800,
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  color: "#F0A500",
                }}
              >
                Nuevo
              </span>
              <span
                style={{ fontSize: "0.78rem", color: "rgba(241,236,255,0.45)" }}
              >
                Abrimos agenda para Q2 2025
              </span>
            </div>

            <h1
              style={{
                fontSize: "clamp(3rem, 6vw, 5.5rem)",
                fontWeight: 900,
                lineHeight: 1.05,
                letterSpacing: "-0.04em",
                marginBottom: "28px",
              }}
            >
              Estrategia digital
              <br />
              <span
                style={{
                  background:
                    "linear-gradient(90deg, #9333EA 0%, #F0A500 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                sin rodeos.
              </span>
            </h1>

            <p
              style={{
                fontSize: "1.1rem",
                color: "rgba(241,236,255,0.5)",
                lineHeight: 1.75,
                marginBottom: "48px",
                maxWidth: "560px",
                margin: "0 auto 48px",
              }}
            >
              Ayudamos a empresas a crecer en digital con estrategia, datos y
              ejecución. Sin agencias gigantes, sin dilación.
            </p>

            <div
              style={{
                display: "flex",
                gap: "14px",
                justifyContent: "center",
                flexWrap: "wrap",
              }}
            >
              <a
                href="#roi"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                  padding: "14px 32px",
                  background: "linear-gradient(135deg, #9333EA, #F0A500)",
                  color: "white",
                  borderRadius: "10px",
                  fontWeight: 700,
                  textDecoration: "none",
                  fontSize: "0.95rem",
                }}
              >
                Calculá tu ROI <Calculator size={16} />
              </a>
              <a
                href="#servicios"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                  padding: "14px 24px",
                  border: "1px solid rgba(241,236,255,0.08)",
                  color: "rgba(241,236,255,0.7)",
                  borderRadius: "10px",
                  fontWeight: 600,
                  textDecoration: "none",
                  fontSize: "0.95rem",
                  backgroundColor: "rgba(255,255,255,0.02)",
                }}
              >
                Ver servicios
              </a>
            </div>
          </div>
        </section>

        {/* ── STATS (animated) ── */}
        <section
          style={{
            padding: "56px 32px",
            borderTop: "1px solid rgba(255,255,255,0.04)",
            borderBottom: "1px solid rgba(255,255,255,0.04)",
            backgroundColor: "rgba(255,255,255,0.015)",
          }}
        >
          <div
            style={{
              maxWidth: "900px",
              margin: "0 auto",
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: "32px",
              textAlign: "center",
            }}
          >
            {STATS.map(({ value, suffix, label }) => (
              <div key={label}>
                <p
                  style={{
                    fontSize: "2.4rem",
                    fontWeight: 900,
                    letterSpacing: "-0.04em",
                    background: "linear-gradient(135deg, #9333EA, #F0A500)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                    marginBottom: "6px",
                  }}
                >
                  <AnimatedCounter value={value} suffix={suffix} />
                </p>
                <p
                  style={{
                    fontSize: "0.82rem",
                    color: "rgba(241,236,255,0.4)",
                    fontWeight: 500,
                  }}
                >
                  {label}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* ── SERVICIOS ── */}
        <section id="servicios" style={{ padding: "112px 32px" }}>
          <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
            <p
              style={{
                fontSize: "0.7rem",
                fontWeight: 700,
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                color: "#9333EA",
                marginBottom: "12px",
              }}
            >
              Servicios
            </p>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "flex-end",
                marginBottom: "56px",
                gap: "32px",
                flexWrap: "wrap",
              }}
            >
              <h2
                style={{
                  fontSize: "2.2rem",
                  fontWeight: 900,
                  letterSpacing: "-0.03em",
                  maxWidth: "500px",
                  margin: 0,
                }}
              >
                Lo que hacemos, y lo que no.
              </h2>
              <p
                style={{
                  fontSize: "0.9rem",
                  color: "rgba(241,236,255,0.4)",
                  maxWidth: "300px",
                  lineHeight: 1.65,
                }}
              >
                Pocas cosas, hechas excepcionalmente bien. Sin dispersión.
              </p>
            </div>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
                gap: "18px",
              }}
            >
              {SERVICES.map(({ Icon, title, desc, tag }) => (
                <div
                  key={title}
                  style={{
                    padding: "32px",
                    borderRadius: "16px",
                    border: "1px solid rgba(255,255,255,0.04)",
                    backgroundColor: "rgba(255,255,255,0.015)",
                    position: "relative",
                  }}
                >
                  <span
                    style={{
                      position: "absolute",
                      top: "18px",
                      right: "18px",
                      fontSize: "0.62rem",
                      fontWeight: 700,
                      letterSpacing: "0.08em",
                      textTransform: "uppercase",
                      color: "rgba(147,51,234,0.7)",
                      padding: "3px 10px",
                      borderRadius: "100px",
                      border: "1px solid rgba(147,51,234,0.2)",
                      backgroundColor: "rgba(147,51,234,0.05)",
                    }}
                  >
                    {tag}
                  </span>
                  <div
                    style={{
                      width: "44px",
                      height: "44px",
                      borderRadius: "12px",
                      backgroundColor: "rgba(147,51,234,0.1)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      marginBottom: "20px",
                    }}
                  >
                    <Icon size={20} color="#9333EA" />
                  </div>
                  <h3
                    style={{
                      fontSize: "1rem",
                      fontWeight: 800,
                      marginBottom: "10px",
                      letterSpacing: "-0.02em",
                    }}
                  >
                    {title}
                  </h3>
                  <p
                    style={{
                      fontSize: "0.87rem",
                      color: "rgba(241,236,255,0.45)",
                      lineHeight: 1.7,
                    }}
                  >
                    {desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── ROI CALCULATOR ── */}
        <section
          id="roi"
          style={{
            padding: "112px 32px",
            backgroundColor: "rgba(147,51,234,0.03)",
            borderTop: "1px solid rgba(147,51,234,0.08)",
            borderBottom: "1px solid rgba(147,51,234,0.08)",
          }}
        >
          <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
            <p
              style={{
                fontSize: "0.7rem",
                fontWeight: 700,
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                color: "#F0A500",
                marginBottom: "12px",
                textAlign: "center",
              }}
            >
              Herramienta
            </p>
            <h2
              style={{
                fontSize: "2.2rem",
                fontWeight: 900,
                letterSpacing: "-0.03em",
                marginBottom: "12px",
                textAlign: "center",
              }}
            >
              Calculá el impacto de una web optimizada
            </h2>
            <p
              style={{
                textAlign: "center",
                color: "rgba(241,236,255,0.4)",
                marginBottom: "56px",
                fontSize: "0.92rem",
              }}
            >
              Mové los sliders con los datos de tu negocio y ve cuánto podrías
              crecer.
            </p>
            <ROICalculator />
          </div>
        </section>

        {/* ── CASOS ── */}
        <section id="casos" style={{ padding: "112px 32px" }}>
          <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
            <p
              style={{
                fontSize: "0.7rem",
                fontWeight: 700,
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                color: "#9333EA",
                marginBottom: "12px",
              }}
            >
              Casos
            </p>
            <h2
              style={{
                fontSize: "2.2rem",
                fontWeight: 900,
                letterSpacing: "-0.03em",
                marginBottom: "56px",
              }}
            >
              Resultados reales.
            </h2>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
                gap: "20px",
              }}
            >
              {CASES.map(({ category, brand, metric, detail, color }) => (
                <div
                  key={brand}
                  style={{
                    padding: "36px",
                    borderRadius: "16px",
                    border: `1px solid ${color}20`,
                    backgroundColor: `${color}08`,
                    position: "relative",
                    overflow: "hidden",
                  }}
                >
                  <div
                    style={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      right: 0,
                      height: "2px",
                      background: `linear-gradient(90deg, ${color}, transparent)`,
                    }}
                  />
                  <p
                    style={{
                      fontSize: "0.68rem",
                      fontWeight: 700,
                      letterSpacing: "0.15em",
                      textTransform: "uppercase",
                      color: `${color}99`,
                      marginBottom: "10px",
                    }}
                  >
                    {category}
                  </p>
                  <p
                    style={{
                      fontSize: "1.1rem",
                      fontWeight: 800,
                      letterSpacing: "-0.02em",
                      marginBottom: "14px",
                    }}
                  >
                    {brand}
                  </p>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "8px",
                      marginBottom: "12px",
                    }}
                  >
                    <CheckCircle2 size={16} color={color} />
                    <span
                      style={{ fontSize: "1.1rem", fontWeight: 800, color }}
                    >
                      {metric}
                    </span>
                  </div>
                  <p
                    style={{
                      fontSize: "0.85rem",
                      color: "rgba(241,236,255,0.45)",
                    }}
                  >
                    {detail}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA FINAL ── */}
        <section
          id="contacto"
          style={{
            padding: "112px 32px",
            backgroundColor: "rgba(147,51,234,0.04)",
            borderTop: "1px solid rgba(147,51,234,0.08)",
          }}
        >
          <div
            style={{ maxWidth: "700px", margin: "0 auto", textAlign: "center" }}
          >
            <h2
              style={{
                fontSize: "2.8rem",
                fontWeight: 900,
                letterSpacing: "-0.04em",
                marginBottom: "20px",
                lineHeight: 1.1,
              }}
            >
              ¿Listo para crecer{" "}
              <span
                style={{
                  background: "linear-gradient(90deg, #9333EA, #F0A500)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                en serio?
              </span>
            </h2>
            <p
              style={{
                fontSize: "1rem",
                color: "rgba(241,236,255,0.45)",
                lineHeight: 1.75,
                marginBottom: "40px",
              }}
            >
              Una propuesta concreta con pasos, plazos y costos. En 48 horas.
            </p>
            <div
              style={{
                display: "flex",
                gap: "12px",
                justifyContent: "center",
                flexWrap: "wrap",
              }}
            >
              <a
                href={WA_NEXO}
                target="_blank"
                rel="noreferrer"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                  padding: "15px 32px",
                  background: "linear-gradient(135deg, #9333EA, #F0A500)",
                  color: "white",
                  borderRadius: "10px",
                  fontWeight: 700,
                  textDecoration: "none",
                  fontSize: "0.95rem",
                }}
              >
                Hablar por WhatsApp <ArrowUpRight size={16} />
              </a>
              <a
                href="mailto:hola@nexo.digital"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                  padding: "15px 24px",
                  border: "1px solid rgba(241,236,255,0.08)",
                  color: "rgba(241,236,255,0.65)",
                  borderRadius: "10px",
                  fontWeight: 600,
                  textDecoration: "none",
                  fontSize: "0.95rem",
                  backgroundColor: "rgba(255,255,255,0.02)",
                }}
              >
                hola@nexo.digital
              </a>
            </div>
          </div>
        </section>

        {/* ── FOOTER ── */}
        <footer
          style={{
            padding: "32px",
            borderTop: "1px solid rgba(255,255,255,0.04)",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "12px",
          }}
        >
          <p style={{ fontSize: "0.8rem", color: "rgba(241,236,255,0.2)" }}>
            © {new Date().getFullYear()} Nexo Consultoría & Estrategia Digital
          </p>
          <p style={{ fontSize: "0.8rem", color: "rgba(241,236,255,0.2)" }}>
            Mendoza, Argentina
          </p>
        </footer>
      </div>
    </>
  );
}
