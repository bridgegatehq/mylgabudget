"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { useEffect, useRef } from "react"

const coreSkills = [
  { name: "Community Engagement", level: 95, icon: "👥" },
  { name: "Social Media Management", level: 90, icon: "📱" },
  { name: "Content Creation & Strategy", level: 88, icon: "✍️" },
  { name: "Blockchain & Cryptocurrency", level: 92, icon: "⛓️" },
  { name: "Event Planning & Management", level: 85, icon: "🎯" },
  { name: "Public Speaking", level: 87, icon: "🎤" },
  { name: "Project Management", level: 89, icon: "📊" },
  { name: "Analytical Thinking", level: 91, icon: "🧠" },
]

const additionalSkills = [
  "Team Collaboration",
  "Graphic Design",
  "Basic Coding",
  "Data Analysis",
  "Cryptocurrency Trading",
  "Web Development",
  "Content Designing",
]

export function SkillsSection() {
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
    <section
      ref={sectionRef}
      id="skills"
      className="py-20 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950/20 dark:to-emerald-950/20"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="heading-section text-foreground">Skills & Expertise</h2>
          <p className="text-description-primary">
            Comprehensive skill set developed through years of community leadership and Web3 innovation
          </p>
        </div>

        {/* Core Skills with Progress Bars */}
        <div className="mb-16">
          <h3 className="heading-subsection text-foreground mb-8 text-center">Core Competencies</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {coreSkills.map((skill, index) => (
              <Card
                key={skill.name}
                className="animate-on-scroll hover:shadow-lg transition-all duration-300 border-green-200 dark:border-green-800"
              >
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <span className="text-2xl">{skill.icon}</span>
                      <h4 className="heading-card text-foreground">{skill.name}</h4>
                    </div>
                    <span className="text-small bg-muted px-2 py-1 rounded font-medium">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                    <div
                      className="bg-gradient-to-r from-green-500 to-emerald-500 h-2 rounded-full transition-all duration-1000 ease-out"
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Additional Skills */}
        <div className="text-center animate-on-scroll">
          <h3 className="heading-subsection text-foreground mb-8">Additional Skills</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {additionalSkills.map((skill) => (
              <Badge
                key={skill}
                variant="secondary"
                className="px-4 py-2 text-sm bg-green-100 text-green-800 dark:bg-green-900/50 dark:text-green-200 hover:bg-green-200 dark:hover:bg-green-800/50 transition-colors border border-green-200 dark:border-green-800"
              >
                {skill}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
