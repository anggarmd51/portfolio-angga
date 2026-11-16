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
import SectionNavigation from "@/components/SectionNavigation";

export default function HomePage() {
  return (
    <div className="relative flex min-h-screen flex-col overflow-x-clip bg-page-background text-soft-white selection:bg-signature-teal/20 selection:text-soft-white">
      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 z-0 bg-subtle-grid [mask-image:radial-gradient(ellipse_at_center,black_55%,transparent_90%)]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none fixed -top-40 left-1/2 z-0 h-[450px] w-[900px] -translate-x-1/2 rounded-full bg-signature-teal/[0.025] blur-[140px]"
      />
      <svg aria-hidden="true" focusable="false" className="paper-noise-overlay pointer-events-none fixed inset-0 z-50 h-full w-full">
        <filter id="portfolio-paper-noise">
          <feTurbulence type="fractalNoise" baseFrequency="0.78" numOctaves="3" stitchTiles="stitch" />
        </filter>
        <rect width="100%" height="100%" filter="url(#portfolio-paper-noise)" />
      </svg>

      <SectionNavigation />
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
