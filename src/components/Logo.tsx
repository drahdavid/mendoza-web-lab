import React from "react";

interface LogoProps {
  className?: string;
}

/**
 * Mendoza Web Lab – Logo distintivo
 * Símbolo </> estilizado: web + tecnología, minimalista y reconocible
 */
export function Logo({ className = "h-9" }: LogoProps) {
  return (
    <svg
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden
    >
      {/* Background Glow */}
      <defs>
        <radialGradient
          id="logo-glow"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(20 20) rotate(90) scale(20)"
        >
          <stop stopColor="var(--brand-accent)" stopOpacity="0.15" />
          <stop offset="1" stopColor="var(--brand-accent)" stopOpacity="0" />
        </radialGradient>
      </defs>
      <circle cx="20" cy="20" r="20" fill="url(#logo-glow)" />

      {/* Modern MW Abstract Shape */}
      <path
        d="M8 28L14 12L20 20L26 12L32 28"
        stroke="var(--brand-accent)"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12 24L20 32L28 24"
        stroke="var(--brand-secondary)"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeOpacity="0.8"
      />
    </svg>
  );
}
