import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { FeaturedProjects } from "@/components/FeaturedProjects";
import { About } from "@/components/About";
import { SkillsMatrix } from "@/components/SkillsMatrix";
import { ExperienceTimeline } from "@/components/ExperienceTimeline";
import { ServicesSection } from "@/components/ServicesSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";
import { ScrollReveal } from "@/components/ScrollReveal";

export default function Home() {
  return (
    <main className="min-h-screen bg-[var(--canvas)] text-[var(--ink)] relative selection:bg-[#5e6ad2] selection:text-white transition-colors duration-200">
      <Navbar />
      <Hero />
      <FeaturedProjects />
      <About />
      <SkillsMatrix />
      <ExperienceTimeline />
      <ServicesSection />
      <ContactSection />
      <Footer />
      <ScrollReveal />
    </main>
  );
}
