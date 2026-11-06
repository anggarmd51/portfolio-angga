import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import SkillsCertifications from "@/components/SkillsCertifications";
import WorkExperience from "@/components/WorkExperience";
import FeaturedProjects from "@/components/FeaturedProjects";
import ContactFooter from "@/components/ContactFooter";

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <HeroSection />
      <SkillsCertifications />
      <WorkExperience />
      <FeaturedProjects />
      <ContactFooter />
    </main>
  );
}
