"use client";

import { DemoBanner } from "@/components/DemoBanner";
import {
  MapPin,
  Clock,
  Star,
  UtensilsCrossed,
  CalendarDays,
  Users,
  CheckCircle2,
  ChevronRight,
} from "lucide-react";
import { useState } from "react";

// ─── Types ───────────────────────────────────────────────────────────────────

interface MenuItem {
  name: string;
  price: string;
  tag?: string;
}

interface MenuCategory {
  category: string;
  emoji: string;
  items: MenuItem[];
}

// ─── Data ────────────────────────────────────────────────────────────────────

const MENU_HIGHLIGHTS: MenuCategory[] = [
  {
    category: "Entradas",
    emoji: "🥗",
    items: [
      {
        name: "Tabla de fiambres artesanales",
        price: "$4.500",
        tag: "Popular",
      },
      { name: "Empanadas mendocinas (x6)", price: "$3.800" },
      { name: "Provoleta a la parrilla", price: "$3.200" },
    ],
  },
  {
    category: "Principales",
    emoji: "🥩",
    items: [
      {
        name: "Bife de chorizo con papas rústicas",
        price: "$9.800",
        tag: "Estrella",
      },
      { name: "Cazuela de trucha patagónica", price: "$8.500" },
      { name: "Pasta fresca al ragú de cordero", price: "$7.200" },
    ],
  },
  {
    category: "Postres",
    emoji: "🍮",
    items: [
      {
        name: "Volcán de chocolate con helado",
        price: "$3.500",
        tag: "Popular",
      },
      { name: "Flan casero con dulce de leche", price: "$2.800" },
      { name: "Tabla de quesos de campo", price: "$4.200" },
    ],
  },
];

const REVIEWS = [
  {
    name: "Valeria M.",
    rating: 5,
    text: "Ambiente increíble y una vista al jardín que vale por todo. El bife de chorizo, perfecto.",
  },
  {
    name: "Rodrigo P.",
    rating: 5,
    text: "Reservamos para el aniversario y superó todas las expectativas. Trataron a mi señora divinamente.",
  },
  {
    name: "Lucía G.",
    rating: 5,
    text: "La cazuela de trucha fue una revelación. Ya volvemos el próximo fin de semana.",
  },
];

const WA_RESERVA =
  "https://wa.me/5492614000000?text=Hola%20La%20Terraza%2C%20quer%C3%ADa%20hacer%20una%20reserva.";

// ─── Reservation Component ────────────────────────────────────────────────────

const ReservationWidget = () => {
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("20:00");
  const [guests, setGuests] = useState(2);
  const [confirmed, setConfirmed] = useState(false);
  const [loading, setLoading] = useState(false);

  const TIMES = [
    "12:00",
    "12:30",
    "13:00",
    "13:30",
    "20:00",
    "20:30",
    "21:00",
    "21:30",
    "22:00",
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !date) return;
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setConfirmed(true);
    }, 1200);
  };

  const formatDate = (d: string) => {
    if (!d) return "";
    const [y, m, day] = d.split("-");
    const months = [
      "ene",
      "feb",
      "mar",
      "abr",
      "may",
      "jun",
      "jul",
      "ago",
      "sep",
      "oct",
      "nov",
      "dic",
    ];
    return `${day} de ${months[parseInt(m) - 1]} ${y}`;
  };

  if (confirmed) {
    return (
      <div
        style={{
          padding: "36px",
          borderRadius: "20px",
          backgroundColor: "#FFF8F2",
          border: "2px solid #C45B3C",
          textAlign: "center",
          animation: "fadeIn 0.4s ease",
        }}
      >
        <div style={{ fontSize: "3rem", marginBottom: "16px" }}>🎉</div>
        <h3
          style={{
            fontSize: "1.4rem",
            fontWeight: 800,
            color: "#1A1008",
            marginBottom: "8px",
          }}
        >
          ¡Reserva confirmada!
        </h3>
        <p style={{ color: "#6B4226", marginBottom: "24px", lineHeight: 1.6 }}>
          Te esperamos el <strong>{formatDate(date)}</strong> a las{" "}
          <strong>{time}h</strong> para{" "}
          <strong>
            {guests} {guests === 1 ? "persona" : "personas"}
          </strong>
          .
        </p>
        <div
          style={{
            display: "inline-flex",
            flexDirection: "column",
            gap: "8px",
            padding: "20px 28px",
            backgroundColor: "#C45B3C",
            borderRadius: "14px",
            color: "white",
            fontSize: "0.85rem",
          }}
        >
          <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
            <CalendarDays size={15} />
            <span>
              {formatDate(date)} · {time}h
            </span>
          </div>
          <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
            <Users size={15} />
            <span>
              {guests} {guests === 1 ? "persona" : "personas"}
            </span>
          </div>
          <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
            <CheckCircle2 size={15} />
            <span>A nombre de {name}</span>
          </div>
        </div>
        <p style={{ marginTop: "20px", fontSize: "0.8rem", color: "#9B7463" }}>
          Recibirás una confirmación por WhatsApp.
        </p>
        <button
          onClick={() => {
            setConfirmed(false);
            setName("");
            setDate("");
          }}
          style={{
            marginTop: "16px",
            background: "none",
            border: "none",
            color: "#C45B3C",
            fontSize: "0.85rem",
            cursor: "pointer",
            textDecoration: "underline",
          }}
        >
          Hacer otra reserva
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        padding: "36px",
        borderRadius: "20px",
        backgroundColor: "#FFF8F2",
        border: "1px solid rgba(196,91,60,0.15)",
        display: "flex",
        flexDirection: "column",
        gap: "20px",
      }}
    >
      <div>
        <label
          style={{
            display: "block",
            fontSize: "0.78rem",
            fontWeight: 700,
            color: "#6B4226",
            marginBottom: "6px",
            textTransform: "uppercase",
            letterSpacing: "0.1em",
          }}
        >
          Tu nombre
        </label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Ej: María García"
          required
          style={{
            width: "100%",
            padding: "11px 14px",
            borderRadius: "10px",
            border: `1.5px solid ${name ? "#C45B3C" : "rgba(196,91,60,0.2)"}`,
            backgroundColor: "#FFFAF7",
            fontSize: "0.95rem",
            color: "#1A1008",
            outline: "none",
            boxSizing: "border-box",
            transition: "border-color 0.2s",
          }}
        />
      </div>

      <div
        style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "14px" }}
      >
        <div>
          <label
            style={{
              display: "block",
              fontSize: "0.78rem",
              fontWeight: 700,
              color: "#6B4226",
              marginBottom: "6px",
              textTransform: "uppercase",
              letterSpacing: "0.1em",
            }}
          >
            Fecha
          </label>
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            required
            min={new Date().toISOString().split("T")[0]}
            style={{
              width: "100%",
              padding: "11px 14px",
              borderRadius: "10px",
              border: `1.5px solid ${date ? "#C45B3C" : "rgba(196,91,60,0.2)"}`,
              backgroundColor: "#FFFAF7",
              fontSize: "0.9rem",
              color: "#1A1008",
              outline: "none",
              boxSizing: "border-box",
            }}
          />
        </div>
        <div>
          <label
            style={{
              display: "block",
              fontSize: "0.78rem",
              fontWeight: 700,
              color: "#6B4226",
              marginBottom: "6px",
              textTransform: "uppercase",
              letterSpacing: "0.1em",
            }}
          >
            Horario
          </label>
          <select
            value={time}
            onChange={(e) => setTime(e.target.value)}
            style={{
              width: "100%",
              padding: "11px 14px",
              borderRadius: "10px",
              border: "1.5px solid #C45B3C",
              backgroundColor: "#FFFAF7",
              fontSize: "0.9rem",
              color: "#1A1008",
              outline: "none",
              boxSizing: "border-box",
              cursor: "pointer",
            }}
          >
            {TIMES.map((t) => (
              <option key={t} value={t}>
                {t}h
              </option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label
          style={{
            display: "block",
            fontSize: "0.78rem",
            fontWeight: 700,
            color: "#6B4226",
            marginBottom: "10px",
            textTransform: "uppercase",
            letterSpacing: "0.1em",
          }}
        >
          Cantidad de personas
        </label>
        <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
          {[1, 2, 3, 4, 5, 6, 7, 8].map((n) => (
            <button
              key={n}
              type="button"
              onClick={() => setGuests(n)}
              style={{
                width: "44px",
                height: "44px",
                borderRadius: "10px",
                border: `1.5px solid ${guests === n ? "#C45B3C" : "rgba(196,91,60,0.15)"}`,
                backgroundColor: guests === n ? "#C45B3C" : "#FFFAF7",
                color: guests === n ? "white" : "#6B4226",
                fontWeight: 700,
                fontSize: "0.9rem",
                cursor: "pointer",
                transition: "all 0.15s",
              }}
            >
              {n}
            </button>
          ))}
        </div>
      </div>

      {name && date && (
        <div
          style={{
            padding: "14px 18px",
            borderRadius: "12px",
            backgroundColor: "rgba(196,91,60,0.06)",
            border: "1px solid rgba(196,91,60,0.2)",
            fontSize: "0.85rem",
            color: "#6B4226",
          }}
        >
          <strong>{name}</strong> · {formatDate(date)} · {time}h · {guests}{" "}
          {guests === 1 ? "persona" : "personas"}
        </div>
      )}

      <button
        type="submit"
        disabled={loading || !name || !date}
        style={{
          padding: "14px",
          borderRadius: "12px",
          backgroundColor:
            loading || !name || !date ? "rgba(196,91,60,0.3)" : "#C45B3C",
          color: "white",
          fontWeight: 700,
          fontSize: "1rem",
          border: "none",
          cursor: loading || !name || !date ? "not-allowed" : "pointer",
          transition: "all 0.2s",
        }}
      >
        {loading ? "Confirmando..." : "Confirmar reserva"}
      </button>
    </form>
  );
};

// ─── Page ────────────────────────────────────────────────────────────────────

export default function DemoStart() {
  const [activeMenu, setActiveMenu] = useState(0);

  return (
    <>
      <DemoBanner packName="Pack Presencia Start" packHref="/#paquetes" />

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Lora:ital,wght@0,400;0,600;0,700;1,400;1,600&family=Inter:wght@400;500;600;700&display=swap');
        .terraza-body { background: #FAF7F2; color: #1A1008; font-family: 'Inter', system-ui, sans-serif; }
        @keyframes fadeIn { from { opacity: 0; transform: translateY(12px); } to { opacity: 1; transform: translateY(0); } }
      `}</style>

      <div className="terraza-body" style={{ minHeight: "100vh" }}>
        {/* ── HEADER ── */}
        <header
          style={{
            position: "fixed",
            top: "40px",
            left: 0,
            right: 0,
            zIndex: 50,
            backgroundColor: "rgba(250,247,242,0.95)",
            backdropFilter: "blur(12px)",
            borderBottom: "1px solid rgba(196,91,60,0.1)",
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
            <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
              <UtensilsCrossed size={20} style={{ color: "#C45B3C" }} />
              <span
                style={{
                  fontFamily: "'Lora', serif",
                  fontWeight: 700,
                  fontSize: "1.15rem",
                  color: "#1A1008",
                  letterSpacing: "-0.01em",
                }}
              >
                La Terraza
              </span>
            </div>
            <nav style={{ display: "flex", gap: "24px", alignItems: "center" }}>
              {(
                [
                  ["#menu", "Menú"],
                  ["#nosotros", "Nosotros"],
                  ["#reservar", "Horarios"],
                ] as [string, string][]
              ).map(([href, label]) => (
                <a
                  key={href}
                  href={href}
                  style={{
                    fontSize: "0.85rem",
                    color: "rgba(26,16,8,0.55)",
                    textDecoration: "none",
                    fontWeight: 500,
                  }}
                >
                  {label}
                </a>
              ))}
              <a
                href={WA_RESERVA}
                target="_blank"
                rel="noreferrer"
                style={{
                  padding: "9px 22px",
                  backgroundColor: "#C45B3C",
                  color: "white",
                  borderRadius: "8px",
                  fontSize: "0.82rem",
                  fontWeight: 700,
                  textDecoration: "none",
                }}
              >
                Reservar
              </a>
            </nav>
          </div>
        </header>

        {/* ── HERO ── */}
        <section
          style={{
            minHeight: "100vh",
            display: "flex",
            alignItems: "flex-end",
            paddingTop: "104px",
            paddingBottom: "80px",
            paddingLeft: "24px",
            paddingRight: "24px",
            backgroundImage:
              "linear-gradient(to bottom, rgba(15,8,3,0.15) 0%, rgba(15,8,3,0.5) 55%, rgba(15,8,3,0.85) 100%), url('https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1600&q=80')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div
            style={{
              maxWidth: "700px",
              margin: "0 auto",
              textAlign: "center",
              width: "100%",
            }}
          >
            <p
              style={{
                fontSize: "0.72rem",
                fontWeight: 700,
                letterSpacing: "0.25em",
                textTransform: "uppercase",
                color: "#E8B48C",
                marginBottom: "16px",
              }}
            >
              Restaurante · Chacras de Coria, Mendoza
            </p>
            <h1
              style={{
                fontFamily: "'Lora', serif",
                fontSize: "clamp(2.8rem, 6vw, 5rem)",
                fontWeight: 700,
                fontStyle: "italic",
                lineHeight: 1.1,
                marginBottom: "20px",
                color: "#FAF7F2",
              }}
            >
              Sabores que se quedan.
            </h1>
            <p
              style={{
                fontSize: "1.05rem",
                color: "rgba(250,247,242,0.7)",
                lineHeight: 1.6,
                marginBottom: "36px",
                maxWidth: "420px",
                margin: "0 auto 36px",
              }}
            >
              Cocina de autor, productos locales, terraza con jardín. Desde
              2014.
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
                href="#reservar"
                style={{
                  padding: "13px 28px",
                  backgroundColor: "#C45B3C",
                  color: "white",
                  borderRadius: "10px",
                  fontWeight: 700,
                  textDecoration: "none",
                  fontSize: "0.95rem",
                }}
              >
                Reservar mesa
              </a>
              <a
                href="#menu"
                style={{
                  padding: "13px 24px",
                  border: "1.5px solid rgba(250,247,242,0.35)",
                  color: "rgba(250,247,242,0.9)",
                  borderRadius: "10px",
                  fontWeight: 600,
                  textDecoration: "none",
                  fontSize: "0.95rem",
                  backgroundColor: "rgba(255,255,255,0.06)",
                  backdropFilter: "blur(6px)",
                }}
              >
                Ver menú
              </a>
            </div>
          </div>
        </section>

        {/* ── NOSOTROS ── */}
        <section
          id="nosotros"
          style={{
            padding: "96px 24px",
            maxWidth: "1000px",
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "72px",
            alignItems: "center",
          }}
        >
          <div
            style={{
              aspectRatio: "4/5",
              borderRadius: "20px",
              overflow: "hidden",
              backgroundImage:
                "url('https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800&q=80')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              boxShadow: "0 20px 60px rgba(196,91,60,0.15)",
            }}
          />
          <div>
            <p
              style={{
                fontSize: "0.72rem",
                fontWeight: 700,
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                color: "#C45B3C",
                marginBottom: "16px",
              }}
            >
              Nuestra historia
            </p>
            <h2
              style={{
                fontFamily: "'Lora', serif",
                fontSize: "2.2rem",
                fontWeight: 700,
                fontStyle: "italic",
                lineHeight: 1.2,
                marginBottom: "20px",
                color: "#1A1008",
              }}
            >
              Más de 10 años cocinando con pasión
            </h2>
            <p
              style={{
                color: "rgba(26,16,8,0.6)",
                lineHeight: 1.8,
                fontSize: "0.95rem",
                marginBottom: "20px",
              }}
            >
              La Terraza nació en 2014 con una misión simple: traer a la mesa
              los mejores productos de la tierra mendocina, con técnica y
              creatividad.
            </p>
            <p
              style={{
                color: "rgba(26,16,8,0.6)",
                lineHeight: 1.8,
                fontSize: "0.95rem",
              }}
            >
              Trabajamos con productores locales y vinos de bodegas de la zona.
              Carta que cambia con las estaciones.
            </p>
          </div>
        </section>

        {/* ── MENÚ ── */}
        <section
          id="menu"
          style={{ padding: "96px 24px", backgroundColor: "#F5EFE7" }}
        >
          <div style={{ maxWidth: "900px", margin: "0 auto" }}>
            <p
              style={{
                fontSize: "0.72rem",
                fontWeight: 700,
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                color: "#C45B3C",
                marginBottom: "12px",
                textAlign: "center",
              }}
            >
              Carta
            </p>
            <h2
              style={{
                fontFamily: "'Lora', serif",
                fontSize: "2.2rem",
                fontWeight: 700,
                fontStyle: "italic",
                textAlign: "center",
                marginBottom: "36px",
                color: "#1A1008",
              }}
            >
              Nuestro menú
            </h2>

            {/* Tab selector */}
            <div
              style={{
                display: "flex",
                gap: "8px",
                justifyContent: "center",
                marginBottom: "36px",
                flexWrap: "wrap",
              }}
            >
              {MENU_HIGHLIGHTS.map((cat, i) => (
                <button
                  key={cat.category}
                  onClick={() => setActiveMenu(i)}
                  style={{
                    padding: "9px 22px",
                    borderRadius: "100px",
                    border: `1.5px solid ${activeMenu === i ? "#C45B3C" : "rgba(196,91,60,0.2)"}`,
                    backgroundColor:
                      activeMenu === i ? "#C45B3C" : "transparent",
                    color: activeMenu === i ? "white" : "#6B4226",
                    fontWeight: 600,
                    fontSize: "0.88rem",
                    cursor: "pointer",
                    transition: "all 0.2s",
                  }}
                >
                  {cat.emoji} {cat.category}
                </button>
              ))}
            </div>

            <div
              key={activeMenu}
              style={{
                animation: "fadeIn 0.3s ease",
                display: "flex",
                flexDirection: "column",
                gap: "0",
              }}
            >
              {MENU_HIGHLIGHTS[activeMenu].items.map((item, i) => (
                <div
                  key={item.name}
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    padding: "20px 24px",
                    borderBottom:
                      i < MENU_HIGHLIGHTS[activeMenu].items.length - 1
                        ? "1px solid rgba(196,91,60,0.1)"
                        : "none",
                    backgroundColor: "white",
                    borderRadius:
                      i === 0
                        ? "14px 14px 0 0"
                        : i === MENU_HIGHLIGHTS[activeMenu].items.length - 1
                          ? "0 0 14px 14px"
                          : "0",
                  }}
                >
                  <div>
                    <span
                      style={{
                        fontWeight: 600,
                        fontSize: "1rem",
                        color: "#1A1008",
                      }}
                    >
                      {item.name}
                    </span>
                    {item.tag && (
                      <span
                        style={{
                          marginLeft: "10px",
                          fontSize: "0.65rem",
                          fontWeight: 700,
                          color: "#C45B3C",
                          textTransform: "uppercase",
                          letterSpacing: "0.08em",
                          padding: "2px 8px",
                          backgroundColor: "rgba(196,91,60,0.08)",
                          borderRadius: "100px",
                        }}
                      >
                        {item.tag}
                      </span>
                    )}
                  </div>
                  <span
                    style={{
                      fontWeight: 700,
                      color: "#C45B3C",
                      fontSize: "1rem",
                    }}
                  >
                    {item.price}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── RESERVAR ── */}
        <section id="reservar" style={{ padding: "96px 24px" }}>
          <div
            style={{
              maxWidth: "900px",
              margin: "0 auto",
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
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
                  color: "#C45B3C",
                  marginBottom: "16px",
                }}
              >
                Reservas
              </p>
              <h2
                style={{
                  fontFamily: "'Lora', serif",
                  fontSize: "2.2rem",
                  fontWeight: 700,
                  fontStyle: "italic",
                  lineHeight: 1.2,
                  marginBottom: "24px",
                  color: "#1A1008",
                }}
              >
                Reservá tu mesa
              </h2>
              <p
                style={{
                  color: "rgba(26,16,8,0.55)",
                  lineHeight: 1.75,
                  marginBottom: "32px",
                }}
              >
                Elegí día, horario y cantidad de personas. Recibís una
                confirmación inmediata.
              </p>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "14px",
                }}
              >
                {[
                  { Icon: Clock, text: "Servicio de mediodía: 12:00 a 15:30" },
                  { Icon: Clock, text: "Servicio de noche: 20:00 a 23:30" },
                  {
                    Icon: MapPin,
                    text: "Av. Videla Aranda 1240, Chacras de Coria",
                  },
                ].map(({ Icon, text }) => (
                  <div
                    key={text}
                    style={{
                      display: "flex",
                      gap: "10px",
                      alignItems: "flex-start",
                    }}
                  >
                    <Icon
                      size={16}
                      style={{
                        color: "#C45B3C",
                        marginTop: "3px",
                        flexShrink: 0,
                      }}
                    />
                    <span
                      style={{
                        fontSize: "0.88rem",
                        color: "rgba(26,16,8,0.55)",
                      }}
                    >
                      {text}
                    </span>
                  </div>
                ))}
              </div>
            </div>
            <ReservationWidget />
          </div>
        </section>

        {/* ── RESEÑAS ── */}
        <section style={{ padding: "80px 24px", backgroundColor: "#F5EFE7" }}>
          <div style={{ maxWidth: "900px", margin: "0 auto" }}>
            <h2
              style={{
                fontFamily: "'Lora', serif",
                fontSize: "2rem",
                fontWeight: 700,
                fontStyle: "italic",
                textAlign: "center",
                marginBottom: "40px",
                color: "#1A1008",
              }}
            >
              Lo que dicen nuestros clientes
            </h2>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
                gap: "20px",
              }}
            >
              {REVIEWS.map(({ name, rating, text }) => (
                <div
                  key={name}
                  style={{
                    padding: "28px",
                    borderRadius: "16px",
                    backgroundColor: "white",
                    boxShadow: "0 4px 20px rgba(196,91,60,0.07)",
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
                      <Star key={i} size={14} fill="#C45B3C" color="#C45B3C" />
                    ))}
                  </div>
                  <p
                    style={{
                      fontSize: "0.88rem",
                      color: "rgba(26,16,8,0.6)",
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
                      color: "rgba(26,16,8,0.35)",
                    }}
                  >
                    — {name}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA + LOCATION ── */}
        <section style={{ padding: "80px 24px", textAlign: "center" }}>
          <h2
            style={{
              fontFamily: "'Lora', serif",
              fontSize: "2rem",
              fontWeight: 700,
              fontStyle: "italic",
              marginBottom: "16px",
              color: "#1A1008",
            }}
          >
            ¿Venís a cenar?
          </h2>
          <p style={{ color: "rgba(26,16,8,0.55)", marginBottom: "28px" }}>
            Hacé tu reserva ahora o escribinos por WhatsApp.
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
              href="#reservar"
              style={{
                padding: "13px 28px",
                backgroundColor: "#C45B3C",
                color: "white",
                borderRadius: "10px",
                fontWeight: 700,
                textDecoration: "none",
                fontSize: "0.95rem",
              }}
            >
              Reservar mesa
            </a>
            <a
              href={WA_RESERVA}
              target="_blank"
              rel="noreferrer"
              style={{
                padding: "13px 24px",
                border: "1.5px solid rgba(196,91,60,0.25)",
                color: "#6B4226",
                borderRadius: "10px",
                fontWeight: 600,
                textDecoration: "none",
                fontSize: "0.95rem",
                display: "flex",
                alignItems: "center",
                gap: "6px",
              }}
            >
              WhatsApp <ChevronRight size={15} />
            </a>
          </div>
        </section>

        {/* ── FOOTER ── */}
        <footer
          style={{
            padding: "32px 24px",
            borderTop: "1px solid rgba(196,91,60,0.12)",
            textAlign: "center",
            backgroundColor: "#F5EFE7",
          }}
        >
          <p style={{ fontSize: "0.8rem", color: "rgba(26,16,8,0.3)" }}>
            © {new Date().getFullYear()} La Terraza Restaurante · Chacras de
            Coria, Mendoza
          </p>
        </footer>
      </div>
    </>
  );
}
