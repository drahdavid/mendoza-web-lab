import React from "react";
import Image from "next/image";

interface LogoProps {
  className?: string;
}

/**
 * Mendoza Web Lab – Logo distintivo
 * Ahora utiliza el asset oficial en PNG
 */
export const Logo = ({ className = "h-16 w-auto" }: LogoProps) => {
  return (
    <div
      className={`overflow-hidden flex items-center justify-center ${className}`}
    >
      ```tsx
      <Image
        src="/logo.png"
        alt="Mendoza Web Lab"
        width={300}
        height={300}
        className="mt-5 object-contain w-full h-full scale-[2.5] translate-y-[-2%] translate-x-[-1%]"
        priority
      />
      ```
    </div>
  );
};
