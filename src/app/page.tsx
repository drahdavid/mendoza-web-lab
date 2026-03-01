"use client";

import { useState } from "react";
import { DiagnosticModal } from "@/components/DiagnosticModal";
import { HeroSection } from "@/features/home/components/HeroSection";
import { ProblemSection } from "@/features/home/components/ProblemSection";
import { ServicesSection } from "@/features/home/components/ServicesSection";
import { PackagesSection } from "@/features/home/components/PackagesSection";
import { ProcessSection } from "@/features/home/components/ProcessSection";
import { ContactSection } from "@/features/home/components/ContactSection";
import { FaqSection } from "@/features/home/components/FaqSection";
import { Footer } from "@/features/home/components/Footer";

export default function Home() {
  const [isDiagnosticOpen, setIsDiagnosticOpen] = useState(false);

  return (
    <div className="relative overflow-x-hidden">
      {/* Ambient orbs */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-brand-accent/8 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-[20%] right-[-10%] w-[30%] h-[30%] bg-brand-mint/5 rounded-full blur-[120px] pointer-events-none" />

      <DiagnosticModal
        isOpen={isDiagnosticOpen}
        onClose={() => setIsDiagnosticOpen(false)}
      />

      {/* Sections */}
      <HeroSection />
      <ProblemSection />
      <ServicesSection />
      <PackagesSection />
      <ProcessSection onOpenDiagnostic={() => setIsDiagnosticOpen(true)} />
      <ContactSection />
      <FaqSection />

      <Footer />
    </div>
  );
}
