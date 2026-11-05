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
    <>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-5 focus:left-6 focus:z-[60] focus:px-4 focus:py-2 focus:rounded-full focus:bg-[#84b8ad] focus:text-[#11151b] focus:text-xs focus:font-semibold focus:shadow-2xl focus:shadow-black/50 focus:outline-none focus:ring-2 focus:ring-[#84b8ad] focus:ring-offset-2 focus:ring-offset-[#101820]"
      >
        Skip to main content
      </a>
      <Navbar />
      <main id="main-content" className="min-h-screen bg-[var(--canvas)] text-[var(--ink)] relative selection:bg-[#5e6ad2] selection:text-white transition-colors duration-200 outline-none">
        <Hero />
      <FeaturedProjects />
      <About />
      <SkillsMatrix />
      <ExperienceTimeline />
      <ServicesSection />
      <ContactSection />
      </main>
      <Footer />
      <ScrollReveal />
    </>
  );
}
