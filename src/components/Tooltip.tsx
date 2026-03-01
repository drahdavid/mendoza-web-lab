"use client";

import { useState } from "react";

type TooltipProps = {
  text: string;
  children: React.ReactNode;
};

export const Tooltip = ({ text, children }: TooltipProps) => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div
      className="relative flex items-center"
      onMouseEnter={() => setIsVisible(true)}
      onMouseLeave={() => setIsVisible(false)}
      onFocus={() => setIsVisible(true)}
      onBlur={() => setIsVisible(false)}
    >
      {children}
      {isVisible && (
        <div className="absolute z-50 w-64 p-3 text-xs leading-relaxed text-brand-white bg-[#1a1a24] border border-white/10 rounded-xl shadow-xl -top-2 left-full ml-3 pointer-events-none animate-in fade-in zoom-in-95 duration-200">
          {/* Arrow */}
          <div className="absolute top-4 -left-1.5 w-3 h-3 bg-[#1a1a24] border-l border-b border-white/10 rotate-45" />
          <span className="relative z-10">{text}</span>
        </div>
      )}
    </div>
  );
};
