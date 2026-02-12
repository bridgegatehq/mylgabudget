"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"

export function AboutSection() {
  const skills = [
    "Community Engagement",
    "Social Media Management",
    "Content Creation",
    "Blockchain Knowledge",
    "Event Planning",
    "Public Speaking",
    "Project Management",
    "Data Analysis",
  ]

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 fade-in-up">
          <h2 className="heading-section">
            About <span className="text-primary">Me</span>
          </h2>
          <p className="text-description-primary">
            A highly motivated professional with a passion for community growth, Web3 technologies, and strategic
            engagement in the blockchain ecosystem.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Character Images Grid */}
          <div className="grid grid-cols-2 gap-6 fade-in-left">
            <div className="space-y-6">
              <Card className="overflow-hidden scale-in">
                <CardContent className="p-0">
                  <Image
                    src="/images/character-1.png"
                    alt="Character illustration 1"
                    width={200}
                    height={200}
                    className="w-full h-48 object-contain bg-gradient-to-br from-primary/5 to-accent/5"
                  />
                </CardContent>
              </Card>
              <Card className="overflow-hidden scale-in">
                <CardContent className="p-0">
                  <Image
                    src="/images/character-4.png"
                    alt="Character illustration 4"
                    width={200}
                    height={200}
                    className="w-full h-48 object-contain bg-gradient-to-br from-accent/5 to-secondary/5"
                  />
                </CardContent>
              </Card>
            </div>
            <div className="space-y-6 pt-12">
              <Card className="overflow-hidden scale-in">
                <CardContent className="p-0">
                  <Image
                    src="/images/character-3.png"
                    alt="Character illustration 3"
                    width={200}
                    height={200}
                    className="w-full h-48 object-contain bg-gradient-to-br from-secondary/5 to-primary/5"
                  />
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Content */}
          <div className="space-y-8 fade-in-right">
            <div className="space-y-6">
              <h3 className="heading-subsection">Professional Profile</h3>
              <p className="text-body text-pretty">
                Skilled in building online communities, creating compelling content, and driving user participation in
                digital ecosystems. Adept at identifying trends, developing tailored strategies, and cultivating strong,
                sustainable relationships.
              </p>
              <p className="text-body text-pretty">
                Known for a collaborative approach, strong communication, and the ability to thrive in dynamic,
                fast-paced environments. Continuously seeking opportunities to expand knowledge and refine skills.
              </p>
            </div>

            <div className="space-y-4">
              <h4 className="heading-card">Core Skills</h4>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill, index) => (
                  <Badge
                    key={index}
                    variant="secondary"
                    className="text-sm py-2 px-4 scale-in"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6 pt-4">
              <Card className="scale-in">
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold text-primary mb-2">BTech</div>
                  <div className="text-sm text-muted-foreground">Remote Sensing & Geoscience</div>
                </CardContent>
              </Card>
              <Card className="scale-in">
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold text-primary mb-2">Web3</div>
                  <div className="text-sm text-muted-foreground">Blockchain Expert</div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
