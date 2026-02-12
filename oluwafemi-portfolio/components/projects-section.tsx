"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { TrendingUp } from "lucide-react"
import { useEffect, useRef } from "react"
import Image from "next/image"

const projects = [
  {
    title: "Solana Naming Service Growth Campaign",
    description:
      "Led comprehensive community growth initiatives that increased engagement across X and Discord by 300%. Coordinated ambassador activities and created viral content including educational threads and memes.",
    achievements: [
      "300% increase in community engagement",
      "50+ educational content pieces created",
      "10K+ new community members acquired",
      "Strategic product feedback implementation",
    ],
    technologies: ["Community Management", "Content Strategy", "Social Media", "Discord"],
    metrics: { engagement: "300%", members: "10K+", content: "50+" },
    image: "/images/character-2.jpeg",
    period: "2025 - Present",
  },
  {
    title: "Ampleforth Ambassador Program",
    description:
      "Represented Ampleforth across digital communities, developing content creation and communication strategies that boosted community participation and project understanding.",
    achievements: [
      "Increased project awareness by 200%",
      "Delivered 25+ educational materials",
      "Organized 10+ community events",
      "Enhanced community understanding",
    ],
    technologies: ["Ambassador Relations", "Educational Content", "Event Management", "Community Building"],
    metrics: { awareness: "200%", materials: "25+", events: "10+" },
    image: "/images/character-3.png",
    period: "2024 - Present",
  },
  {
    title: "Darwinia Network Community Expansion",
    description:
      "Developed and executed community engagement strategies that significantly increased user interaction and project visibility within the Polkadot ecosystem.",
    achievements: [
      "Expanded network participation by 150%",
      "Built strong community relationships",
      "Promoted educational content adoption",
      "Maintained positive collaborative environment",
    ],
    technologies: ["Polkadot Ecosystem", "Network Growth", "Educational Strategy", "Relationship Building"],
    metrics: { participation: "150%", relationships: "Strong", environment: "Positive" },
    image: "/images/character-4.png",
    period: "2024 - 2025",
  },
]

export function ProjectsSection() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in")
          }
        })
      },
      { threshold: 0.1 },
    )

    const elements = sectionRef.current?.querySelectorAll(".animate-on-scroll")
    elements?.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} id="projects" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="heading-section text-foreground">Featured Projects & Case Studies</h2>
          <p className="text-description-primary">
            Real-world impact through strategic community building and growth initiatives
          </p>
        </div>

        <div className="space-y-12">
          {projects.map((project, index) => (
            <Card
              key={project.title}
              className={`animate-on-scroll hover:shadow-xl transition-all duration-300 border-green-200 dark:border-green-800 ${index % 2 === 1 ? "lg:flex-row-reverse" : ""}`}
            >
              <div className="lg:flex lg:items-center">
                <div className="lg:w-1/3 p-6">
                  <div className="relative h-64 lg:h-80 rounded-lg overflow-hidden">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      fill
                      className="object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                </div>
                <div className="lg:w-2/3 p-6">
                  <CardHeader className="p-0 mb-4">
                    <div className="flex items-center justify-between mb-2">
                      <CardTitle className="heading-subsection text-foreground">{project.title}</CardTitle>
                      <Badge variant="outline" className="text-green-600 border-green-600">
                        {project.period}
                      </Badge>
                    </div>
                    <p className="text-description-secondary">{project.description}</p>
                  </CardHeader>

                  <CardContent className="p-0">
                    {/* Key Metrics */}
                    <div className="grid grid-cols-3 gap-4 mb-6">
                      {Object.entries(project.metrics).map(([key, value]) => (
                        <div key={key} className="text-center p-3 bg-green-50 dark:bg-green-950/30 rounded-lg">
                          <div className="text-2xl font-bold text-green-600 dark:text-green-400">{value}</div>
                          <div className="text-sm text-gray-600 dark:text-gray-400 capitalize">
                            {key.replace(/([A-Z])/g, " $1").trim()}
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Achievements */}
                    <div className="mb-6">
                      <h4 className="heading-card text-foreground mb-3">Key Achievements:</h4>
                      <ul className="space-y-2">
                        {project.achievements.map((achievement, i) => (
                          <li key={i} className="flex items-start gap-2 text-body">
                            <TrendingUp className="h-4 w-4 text-green-500 mt-1 flex-shrink-0" />
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <Badge
                          key={tech}
                          variant="secondary"
                          className="bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-300"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
