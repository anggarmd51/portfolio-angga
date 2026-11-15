import HeroSection from "@/components/HeroSection";
import ExecutiveProfileSection from "@/components/ExecutiveProfileSection";
import CoreCompetenciesSection from "@/components/CoreCompetenciesSection";
import CareerSection from "@/components/CareerSection";
import ProjectShowcase from "@/components/ProjectShowcase";
import SalesMethodologySection from "@/components/SalesMethodologySection";
import DigitalEcosystemSection from "@/components/DigitalEcosystemSection";
import CredentialsSection from "@/components/CredentialsSection";
import ContactSection from "@/components/ContactSection";
import FloatingCTA from "@/components/FloatingCTA";

export default function HomePage() {
  return (
    <div className="relative flex min-h-screen flex-col overflow-x-hidden bg-obsidian text-soft-white selection:bg-signature-teal/20 selection:text-soft-white">
      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 z-0 bg-subtle-grid [mask-image:radial-gradient(ellipse_at_center,black_55%,transparent_90%)]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none fixed -top-40 left-1/2 z-0 h-[450px] w-[900px] -translate-x-1/2 rounded-full bg-signature-teal/[0.025] blur-[140px]"
      />

      <main className="relative z-10 w-full flex-1 pb-28 md:pb-12">
        <HeroSection />
        <ExecutiveProfileSection />
        <CoreCompetenciesSection />
        <CareerSection />
        <ProjectShowcase />
        <SalesMethodologySection />
        <DigitalEcosystemSection />
        <CredentialsSection />
        <ContactSection />
      </main>
      <FloatingCTA />
    </div>
  );
}
