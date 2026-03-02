import { HeroSection } from "@/features/home/components/HeroSection";
import { ProblemSection } from "@/features/home/components/ProblemSection";
import { ServicesSection } from "@/features/home/components/ServicesSection";
import { PackagesSection } from "@/features/home/components/PackagesSection";
import { ProcessSection } from "@/features/home/components/ProcessSection";
import { ContactSection } from "@/features/home/components/ContactSection";
import { FaqSection } from "@/features/home/components/FaqSection";
import { Footer } from "@/features/home/components/Footer";
import { getDictionary } from "@/dictionaries";
import { PageClientWrapper } from "@/features/home/components/PageClientWrapper";
import type { Dictionary } from "@/dictionaries/types";

export default async function Home({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const dict = await getDictionary(lang);

  return (
    <PageClientWrapper>
      <div className="relative overflow-x-hidden">
        {/* Ambient orbs */}
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-brand-accent/8 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute bottom-[20%] right-[-10%] w-[30%] h-[30%] bg-brand-mint/5 rounded-full blur-[120px] pointer-events-none" />

        {/* Sections */}
        <HeroSection dict={dict} />
        <ProblemSection dict={dict} />
        <ServicesSection dict={dict} />
        <PackagesSection dict={dict} />
        <ProcessSection dict={dict} />
        <ContactSection dict={dict} />
        <FaqSection dict={dict} />

        <Footer dict={dict} />
      </div>
    </PageClientWrapper>
  );
}
