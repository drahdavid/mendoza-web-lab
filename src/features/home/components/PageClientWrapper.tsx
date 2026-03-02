"use client";

import { useState } from "react";
import { DiagnosticModal } from "@/components/DiagnosticModal";

export const PageClientWrapper = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [isDiagnosticOpen, setIsDiagnosticOpen] = useState(false);

  return (
    <>
      <div
        onClick={(e) => {
          // We intercept clicks on elements that have a specific data attribute
          const target = e.target as HTMLElement;
          const trigger = target.closest('[data-diagnostic-trigger="true"]');
          if (trigger) {
            setIsDiagnosticOpen(true);
          }
        }}
      >
        {children}
      </div>
      <DiagnosticModal
        isOpen={isDiagnosticOpen}
        onClose={() => setIsDiagnosticOpen(false)}
      />
    </>
  );
};
