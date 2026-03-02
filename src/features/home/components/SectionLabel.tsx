import React from "react";

export const SectionLabel = ({ children }: { children: React.ReactNode }) => (
  <p className="text-brand-accent text-sm font-bold tracking-[0.2em] uppercase mb-4">
    {children}
  </p>
);
