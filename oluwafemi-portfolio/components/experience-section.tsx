"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CalendarDays, MapPin } from "lucide-react"

export function ExperienceSection() {
  const experiences = [
    {
      title: "Lead Ambassador",
      company: "Solana Naming Service (SNS)",
      period: "2025 - Present",
      location: "Remote",
      achievements: [
        "Led community growth initiatives, increasing engagement across X and Discord",
        "Managed and coordinated ambassador activities to drive SNS adoption",
        "Created high-impact content, including educational threads and viral memes",
        "Provided strategic feedback to the team, influencing product and community strategies",
      ],
      color: "primary",
    },
    {
      title: "Ambassador",
      company: "Ampleforth",
      period: "2024 - Present",
      location: "Remote",
      achievements: [
        "Represented Ampleforth in various digital communities",
        "Contributed to content creation and communication strategies",
        "Engaged with community members to increase awareness and adoption",
        "Delivered educational materials and event support",
      ],
      color: "accent",
    },
    {
      title: "Community Growth Marshall",
      company: "Darwinia Network",
      period: "2024 - 2025",
      location: "Remote",
      achievements: [
        "Developed and executed community engagement strategies",
        "Coordinated initiatives to expand network participation",
        "Promoted educational content about the project",
        "Built strong relationships within the community",
      ],
      color: "secondary",
    },
    {
      title: "Community Moderator",
      company: "Penguin Finance",
      period: "2022 - 2023",
      location: "Remote",
      achievements: [
        "Enhanced user engagement and retention through social media content",
        "Created educational campaigns and onboarding materials",
        "Facilitated discussions and interactions within the community",
        "Fostered trust and knowledge-sharing among members",
      ],
      color: "primary",
    },
  ]

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 fade-in-up">
          <h2 className="heading-section">
            Professional <span className="text-primary">Experience</span>
          </h2>
          <p className="text-description-primary">
            Building and growing communities across leading Web3 and blockchain projects
          </p>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <Card key={index} className="fade-in-up hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                  <div>
                    <CardTitle className="heading-card text-2xl mb-2">{exp.title}</CardTitle>
                    <div className="text-xl font-semibold text-primary mb-2 leading-snug">{exp.company}</div>
                  </div>
                  <div className="flex flex-col sm:flex-row gap-2">
                    <Badge variant="outline" className="flex items-center gap-1">
                      <CalendarDays className="w-4 h-4" />
                      {exp.period}
                    </Badge>
                    <Badge variant="outline" className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      {exp.location}
                    </Badge>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <h4 className="heading-card">Key Achievements:</h4>
                  <ul className="space-y-2">
                    {exp.achievements.map((achievement, achievementIndex) => (
                      <li key={achievementIndex} className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-body">{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
