"use client";

import { useState } from "react";
import emailjs from "@emailjs/browser";

type FormState = "idle" | "loading" | "success" | "error";

type DiagnosticData = {
  nombre: string;
  negocio: string;
  servicio: string;
  presenciaActual: string;
  objetivo: string;
  presupuesto: string;
  contacto: string;
};

const INITIAL_DATA: DiagnosticData = {
  nombre: "",
  negocio: "",
  servicio: "",
  presenciaActual: "",
  objetivo: "",
  presupuesto: "",
  contacto: "",
};

const OBJETIVOS = [
  "Generar más consultas / clientes",
  "Renovar mi imagen de marca",
  "Empezar desde cero con presencia web",
  "Aparecer en Google (SEO)",
  "Otro",
] as const;

const PRESUPUESTOS = [
  "Hasta $250.000",
  "$250.000 – $800.000",
  "$800.000 – $1.500.000",
  "Más de $1.500.000",
  "Prefiero no decirlo",
] as const;

const SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID ?? "";
const TEMPLATE_ID =
  process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_DIAGNOSTIC_ID ?? "";
const PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY ?? "";

type Props = {
  isOpen: boolean;
  onClose: () => void;
};

export const DiagnosticModal = ({ isOpen, onClose }: Props) => {
  const [data, setData] = useState<DiagnosticData>(INITIAL_DATA);
  const [state, setState] = useState<FormState>("idle");
  const [step, setStep] = useState(0);

  if (!isOpen) return null;

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >,
  ) => {
    setData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setState("loading");
    try {
      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          nombre: data.nombre,
          negocio: data.negocio,
          servicio: data.servicio,
          presencia_actual: data.presenciaActual,
          objetivo: data.objetivo,
          presupuesto: data.presupuesto,
          contacto: data.contacto,
        },
        PUBLIC_KEY,
      );
      setState("success");
    } catch {
      setState("error");
    }
  };

  const handleClose = () => {
    setData(INITIAL_DATA);
    setState("idle");
    setStep(0);
    onClose();
  };

  const inputClass =
    "w-full bg-white/[0.04] border border-white/[0.08] rounded-xl px-4 py-3 text-sm text-brand-white placeholder:text-brand-white/30 focus:outline-none focus:border-brand-accent/50 focus:bg-white/[0.06] transition-all duration-200";

  const steps = [
    // Step 0: Datos básicos
    <div key="step-0" className="flex flex-col gap-5">
      <div className="flex flex-col gap-1.5">
        <label className="text-xs font-medium text-brand-white/50 uppercase tracking-wider">
          Tu nombre completo
        </label>
        <input
          id="diag-nombre"
          type="text"
          name="nombre"
          required
          placeholder="Juan García"
          value={data.nombre}
          onChange={handleChange}
          className={inputClass}
        />
      </div>
      <div className="flex flex-col gap-1.5">
        <label className="text-xs font-medium text-brand-white/50 uppercase tracking-wider">
          Nombre de tu negocio / empresa
        </label>
        <input
          id="diag-negocio"
          type="text"
          name="negocio"
          required
          placeholder="Mi Empresa"
          value={data.negocio}
          onChange={handleChange}
          className={inputClass}
        />
      </div>
      <div className="flex flex-col gap-1.5">
        <label className="text-xs font-medium text-brand-white/50 uppercase tracking-wider">
          ¿Qué servicio o producto ofrecés?
        </label>
        <textarea
          id="diag-servicio"
          name="servicio"
          required
          rows={3}
          placeholder="Ej: Soy nutricionista y doy consultas online y presenciales..."
          value={data.servicio}
          onChange={handleChange}
          className={`${inputClass} resize-none`}
        />
      </div>
    </div>,

    // Step 1: Presencia y objetivo
    <div key="step-1" className="flex flex-col gap-5">
      <div className="flex flex-col gap-1.5">
        <label className="text-xs font-medium text-brand-white/50 uppercase tracking-wider">
          ¿Tenés web o redes actualmente?
        </label>
        <input
          id="diag-presencia"
          type="text"
          name="presenciaActual"
          placeholder="Ej: Solo Instagram / Web desactualizada en Wix / Ninguna"
          value={data.presenciaActual}
          onChange={handleChange}
          className={inputClass}
        />
      </div>
      <div className="flex flex-col gap-1.5">
        <label className="text-xs font-medium text-brand-white/50 uppercase tracking-wider">
          Objetivo principal
        </label>
        <div className="flex flex-col gap-2">
          {OBJETIVOS.map((obj) => (
            <label
              key={obj}
              className={`flex items-center gap-3 px-4 py-3 rounded-xl border cursor-pointer transition-all duration-200 text-sm ${
                data.objetivo === obj
                  ? "border-brand-accent/50 bg-brand-accent/10 text-brand-white"
                  : "border-white/[0.08] bg-white/[0.02] text-brand-white/60 hover:border-white/20 hover:text-brand-white/80"
              }`}
            >
              <input
                type="radio"
                name="objetivo"
                value={obj}
                checked={data.objetivo === obj}
                onChange={handleChange}
                className="hidden"
              />
              <span
                className={`w-4 h-4 rounded-full border-2 flex items-center justify-center shrink-0 ${
                  data.objetivo === obj
                    ? "border-brand-accent bg-brand-accent"
                    : "border-white/30"
                }`}
              >
                {data.objetivo === obj && (
                  <span className="w-1.5 h-1.5 rounded-full bg-white" />
                )}
              </span>
              {obj}
            </label>
          ))}
        </div>
      </div>
    </div>,

    // Step 2: Presupuesto y contacto
    <div key="step-2" className="flex flex-col gap-5">
      <div className="flex flex-col gap-1.5">
        <label className="text-xs font-medium text-brand-white/50 uppercase tracking-wider">
          Presupuesto estimado{" "}
          <span className="normal-case font-normal text-brand-white/30">
            (opcional)
          </span>
        </label>
        <div className="flex flex-col gap-2">
          {PRESUPUESTOS.map((p) => (
            <label
              key={p}
              className={`flex items-center gap-3 px-4 py-3 rounded-xl border cursor-pointer transition-all duration-200 text-sm ${
                data.presupuesto === p
                  ? "border-brand-accent/50 bg-brand-accent/10 text-brand-white"
                  : "border-white/[0.08] bg-white/[0.02] text-brand-white/60 hover:border-white/20 hover:text-brand-white/80"
              }`}
            >
              <input
                type="radio"
                name="presupuesto"
                value={p}
                checked={data.presupuesto === p}
                onChange={handleChange}
                className="hidden"
              />
              <span
                className={`w-4 h-4 rounded-full border-2 flex items-center justify-center shrink-0 ${
                  data.presupuesto === p
                    ? "border-brand-accent bg-brand-accent"
                    : "border-white/30"
                }`}
              >
                {data.presupuesto === p && (
                  <span className="w-1.5 h-1.5 rounded-full bg-white" />
                )}
              </span>
              {p}
            </label>
          ))}
        </div>
      </div>
      <div className="flex flex-col gap-1.5">
        <label className="text-xs font-medium text-brand-white/50 uppercase tracking-wider">
          Tu WhatsApp o email de contacto
        </label>
        <input
          id="diag-contacto"
          type="text"
          name="contacto"
          required
          placeholder="+54 9 261 000 0000 o juan@email.com"
          value={data.contacto}
          onChange={handleChange}
          className={inputClass}
        />
      </div>
    </div>,
  ];

  const totalSteps = steps.length;
  const isLastStep = step === totalSteps - 1;

  const handleNext = () => {
    if (isLastStep) return;
    setStep((s) => s + 1);
  };

  const handleBack = () => {
    if (step === 0) return;
    setStep((s) => s - 1);
  };

  return (
    <div
      className="fixed inset-0 z-[100] flex items-end sm:items-center justify-center p-0 sm:p-4"
      role="dialog"
      aria-modal="true"
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/70 backdrop-blur-sm"
        onClick={handleClose}
      />

      {/* Modal */}
      <div className="relative w-full sm:max-w-lg bg-[#0f0f14] border border-white/[0.08] rounded-t-3xl sm:rounded-2xl overflow-hidden shadow-2xl">
        {/* Header */}
        <div className="flex items-center justify-between px-7 py-5 border-b border-white/[0.06]">
          <div>
            <p className="text-brand-accent text-xs font-bold tracking-[0.2em] uppercase mb-0.5">
              Diagnóstico
            </p>
            <h2 className="text-lg font-bold text-brand-white">
              Contanos sobre tu negocio
            </h2>
          </div>
          <button
            onClick={handleClose}
            className="w-8 h-8 rounded-full bg-white/[0.05] hover:bg-white/10 flex items-center justify-center text-brand-white/50 hover:text-brand-white transition-all"
            aria-label="Cerrar"
          >
            ✕
          </button>
        </div>

        {/* Progress */}
        <div className="flex gap-1.5 px-7 pt-5">
          {steps.map((_, i) => (
            <div
              key={i}
              className={`h-1 flex-1 rounded-full transition-all duration-300 ${
                i <= step ? "bg-brand-accent" : "bg-white/10"
              }`}
            />
          ))}
        </div>
        <p className="px-7 pt-2 text-xs text-brand-white/30">
          Paso {step + 1} de {totalSteps}
        </p>

        {/* Form body */}
        <div className="px-7 py-5 max-h-[60vh] overflow-y-auto">
          {state === "success" ? (
            <div className="flex flex-col items-center text-center gap-4 py-8">
              <div className="w-16 h-16 rounded-full bg-brand-mint/10 flex items-center justify-center text-brand-mint text-3xl">
                ✓
              </div>
              <h3 className="text-xl font-bold text-brand-white">
                ¡Formulario enviado!
              </h3>
              <p className="text-brand-white/55 text-sm leading-relaxed max-w-xs">
                Recibimos tu diagnóstico. Te contactamos en las próximas 24
                horas hábiles con una propuesta personalizada.
              </p>
            </div>
          ) : (
            <form id="diagnostic-form" onSubmit={handleSubmit}>
              {steps[step]}
            </form>
          )}
          {state === "error" && (
            <p className="text-red-400 text-xs text-center mt-3">
              Hubo un error. Intentá de nuevo o escribinos por WhatsApp.
            </p>
          )}
        </div>

        {/* Footer buttons */}
        {state !== "success" && (
          <div className="flex gap-3 px-7 pb-6 pt-2 border-t border-white/[0.06]">
            {step > 0 && (
              <button
                type="button"
                onClick={handleBack}
                className="flex-1 py-3 rounded-xl border border-white/10 bg-white/[0.03] text-brand-white/70 font-medium text-sm hover:bg-white/[0.06] transition-all"
              >
                Atrás
              </button>
            )}
            {isLastStep ? (
              <button
                type="submit"
                form="diagnostic-form"
                disabled={state === "loading"}
                className="flex-1 py-3 rounded-xl bg-brand-accent text-white font-semibold text-sm hover:bg-brand-accent/90 hover:shadow-[0_0_20px_rgba(59,130,246,0.35)] transition-all disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {state === "loading" ? "Enviando..." : "Enviar diagnóstico"}
              </button>
            ) : (
              <button
                type="button"
                onClick={handleNext}
                className="flex-1 py-3 rounded-xl bg-brand-accent text-white font-semibold text-sm hover:bg-brand-accent/90 transition-all"
              >
                Continuar
              </button>
            )}
          </div>
        )}
        {state === "success" && (
          <div className="px-7 pb-6 pt-2">
            <button
              onClick={handleClose}
              className="w-full py-3 rounded-xl bg-white/[0.05] border border-white/10 text-brand-white/70 font-medium text-sm hover:bg-white/10 transition-all"
            >
              Cerrar
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
