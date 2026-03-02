"use client";

import { useState } from "react";
import emailjs from "@emailjs/browser";
import type { Dictionary } from "@/dictionaries/types";

type FormState = "idle" | "loading" | "success" | "error";

type FormData = {
  nombre: string;
  negocio: string;
  email: string;
  whatsapp: string;
  mensaje: string;
};

const INITIAL_FORM: FormData = {
  nombre: "",
  negocio: "",
  email: "",
  whatsapp: "",
  mensaje: "",
};

const SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID ?? "";
const TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID ?? "";
const PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY ?? "";

export const ContactForm = ({ dict }: { dict: Dictionary }) => {
  const [formData, setFormData] = useState<FormData>(INITIAL_FORM);
  const [state, setState] = useState<FormState>("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setState("loading");

    try {
      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          from_name: formData.nombre,
          business_name: formData.negocio,
          from_email: formData.email,
          whatsapp: formData.whatsapp,
          message: formData.mensaje,
        },
        PUBLIC_KEY,
      );
      setState("success");
      setFormData(INITIAL_FORM);
    } catch {
      setState("error");
    }
  };

  const inputClass =
    "w-full bg-white/[0.04] border border-white/[0.08] rounded-xl px-4 py-3 text-sm text-brand-white placeholder:text-brand-white/30 focus:outline-none focus:border-brand-accent/50 focus:bg-white/[0.06] transition-all duration-200";

  if (state === "success") {
    return (
      <div className="flex flex-col items-center justify-center text-center gap-4 py-12 px-6 rounded-2xl bg-white/[0.02] border border-white/[0.06]">
        <div className="w-14 h-14 rounded-full bg-brand-mint/10 flex items-center justify-center text-brand-mint text-2xl">
          ✓
        </div>
        <h3 className="text-xl font-bold text-brand-white">
          {dict.contact.form.success}
        </h3>
        <p className="text-brand-white/55 text-sm max-w-xs leading-relaxed">
          Nos ponemos en contacto dentro de las próximas 24 horas hábiles.
        </p>
        <button
          onClick={() => setState("idle")}
          className="mt-2 text-xs text-brand-accent hover:underline"
        >
          Enviar otro mensaje
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-4 p-7 rounded-2xl bg-white/[0.02] border border-white/[0.06]"
    >
      <h3 className="text-lg font-bold text-brand-white mb-1">
        {dict.contact.form.messagePlaceholder}
      </h3>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="flex flex-col gap-1.5">
          <label className="text-xs font-medium text-brand-white/50 uppercase tracking-wider">
            {dict.contact.form.name}
          </label>
          <input
            id="contact-nombre"
            type="text"
            name="nombre"
            required
            placeholder={dict.contact.form.namePlaceholder}
            value={formData.nombre}
            onChange={handleChange}
            className={inputClass}
          />
        </div>
        <div className="flex flex-col gap-1.5">
          <label className="text-xs font-medium text-brand-white/50 uppercase tracking-wider">
            Tu negocio / empresa
          </label>
          <input
            id="contact-negocio"
            type="text"
            name="negocio"
            required
            placeholder="Mi Empresa SRL"
            value={formData.negocio}
            onChange={handleChange}
            className={inputClass}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="flex flex-col gap-1.5">
          <label className="text-xs font-medium text-brand-white/50 uppercase tracking-wider">
            {dict.contact.form.email}
          </label>
          <input
            id="contact-email"
            type="email"
            name="email"
            required
            placeholder={dict.contact.form.emailPlaceholder}
            value={formData.email}
            onChange={handleChange}
            className={inputClass}
          />
        </div>
        <div className="flex flex-col gap-1.5">
          <label className="text-xs font-medium text-brand-white/50 uppercase tracking-wider">
            {dict.contact.form.phone}{" "}
            <span className="normal-case font-normal text-brand-white/30">
              {dict.contact.form.phoneOptional}
            </span>
          </label>
          <input
            id="contact-whatsapp"
            type="tel"
            name="whatsapp"
            placeholder={dict.contact.form.phonePlaceholder}
            value={formData.whatsapp}
            onChange={handleChange}
            className={inputClass}
          />
        </div>
      </div>

      <div className="flex flex-col gap-1.5">
        <label className="text-xs font-medium text-brand-white/50 uppercase tracking-wider">
          {dict.contact.form.message}
        </label>
        <textarea
          id="contact-mensaje"
          name="mensaje"
          required
          rows={4}
          placeholder={dict.contact.form.messagePlaceholder}
          value={formData.mensaje}
          onChange={handleChange}
          className={`${inputClass} resize-none`}
        />
      </div>

      {state === "error" && (
        <p className="text-red-400 text-xs text-center">
          {dict.contact.form.error}
        </p>
      )}

      <button
        id="contact-submit"
        type="submit"
        disabled={state === "loading"}
        className="w-full py-3.5 rounded-xl bg-brand-accent text-white font-semibold text-sm hover:bg-brand-accent/90 hover:shadow-[0_0_24px_rgba(59,130,246,0.4)] transition-all duration-300 transform hover:-translate-y-0.5 disabled:opacity-60 disabled:cursor-not-allowed disabled:transform-none"
      >
        {state === "loading"
          ? dict.contact.form.sending
          : dict.contact.form.submit}
      </button>

      <p className="text-center text-xs text-brand-white/25">
        {dict.contact.form.footnote}
      </p>
    </form>
  );
};
