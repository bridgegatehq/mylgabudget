"use client"
import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { StatsSection } from "@/components/stats-section"
import { SkillsSection } from "@/components/skills-section"
import { ExperienceSection } from "@/components/experience-section"
import { ProjectsSection } from "@/components/projects-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { ContactSection } from "@/components/contact-section"
import { useCSSAnimation } from "@/components/css-animations"

export default function Home() {
  useCSSAnimation()

  return (
    <main className="min-h-screen">
      <Navigation />

      <section id="home">
        <HeroSection />
      </section>

      <StatsSection />

      <section id="about">
        <AboutSection />
      </section>

      <section id="skills">
        <SkillsSection />
      </section>

      <section id="experience">
        <ExperienceSection />
      </section>

      <section id="projects">
        <ProjectsSection />
      </section>

      <section id="testimonials">
        <TestimonialsSection />
      </section>

      <section id="contact">
        <ContactSection />
      </section>

      <footer className="bg-gray-900 dark:bg-black text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-bold mb-4 text-green-400">Oluwafemi Patrick</h3>
              <p className="text-gray-300 mb-4">
                Community Growth Strategist & Web3 Leader building the future of decentralized communities.
              </p>
              <div className="flex space-x-4">
                <a
                  href="https://linkedin.com/in/oluwafemi-patrick-omosuyi-396381210"
                  className="text-green-400 hover:text-green-300 transition-colors"
                >
                  LinkedIn
                </a>
                <a
                  href="mailto:omosuyioluwafemi1@gmail.com"
                  className="text-green-400 hover:text-green-300 transition-colors"
                >
                  Email
                </a>
              </div>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Expertise</h4>
              <ul className="text-gray-300 space-y-2">
                <li>Community Building</li>
                <li>Web3 Strategy</li>
                <li>Content Creation</li>
                <li>Social Media Management</li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Current Roles</h4>
              <ul className="text-gray-300 space-y-2">
                <li>Lead Ambassador - Solana Naming Service</li>
                <li>Ambassador - Ampleforth</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center">
            <p className="text-gray-400">© 2025 Oluwafemi Patrick. Building communities, one connection at a time.</p>
          </div>
        </div>
      </footer>
    </main>
  )
}
