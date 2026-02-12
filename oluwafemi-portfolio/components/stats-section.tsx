"use client"

import { Card, CardContent } from "@/components/ui/card"
import { TrendingUp, Users, MessageSquare, Award, Globe, Calendar } from "lucide-react"
import { useEffect, useRef, useState } from "react"

const stats = [
  {
    icon: Calendar,
    value: "5+",
    label: "Years Experience",
    description: "In Web3 & Community Building",
    color: "text-green-600",
  },
  {
    icon: Users,
    value: "50K+",
    label: "Community Members",
    description: "Engaged Across Platforms",
    color: "text-blue-600",
  },
  {
    icon: Globe,
    value: "15+",
    label: "Projects Completed",
    description: "Successful Community Initiatives",
    color: "text-purple-600",
  },
  {
    icon: TrendingUp,
    value: "300%",
    label: "Average Growth",
    description: "Community Engagement Increase",
    color: "text-emerald-600",
  },
  {
    icon: MessageSquare,
    value: "1000+",
    label: "Content Pieces",
    description: "Educational & Viral Content",
    color: "text-orange-600",
  },
  {
    icon: Award,
    value: "4",
    label: "Leadership Roles",
    description: "Ambassador & Growth Positions",
    color: "text-red-600",
  },
]

function CountUpAnimation({ end, duration = 2000 }: { end: number; duration?: number }) {
  const [count, setCount] = useState(0)
  const [hasStarted, setHasStarted] = useState(false)

  useEffect(() => {
    if (!hasStarted) return

    let startTime: number
    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime
      const progress = Math.min((currentTime - startTime) / duration, 1)

      setCount(Math.floor(progress * end))

      if (progress < 1) {
        requestAnimationFrame(animate)
      }
    }

    requestAnimationFrame(animate)
  }, [end, duration, hasStarted])

  const startAnimation = () => setHasStarted(true)

  return { count, startAnimation }
}

export function StatsSection() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in")
            // Trigger count animations
            const countElements = entry.target.querySelectorAll("[data-count]")
            countElements.forEach((el) => {
              const event = new CustomEvent("startCount")
              el.dispatchEvent(event)
            })
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
    <section ref={sectionRef} className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="heading-section text-foreground">Impact by Numbers</h2>
          <p className="text-description-primary">Measurable results from community building and growth initiatives</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {stats.map((stat, index) => (
            <Card
              key={stat.label}
              className="animate-on-scroll hover:shadow-lg transition-all duration-300 border-green-200 dark:border-green-800 text-center"
            >
              <CardContent className="p-6">
                <div
                  className={`inline-flex items-center justify-center w-12 h-12 rounded-full bg-gray-100 dark:bg-gray-800 mb-4`}
                >
                  <stat.icon className={`h-6 w-6 ${stat.color}`} />
                </div>
                <div className="text-3xl font-bold text-foreground mb-2 leading-none">{stat.value}</div>
                <div className="heading-card text-foreground mb-1">{stat.label}</div>
                <div className="text-small">{stat.description}</div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
