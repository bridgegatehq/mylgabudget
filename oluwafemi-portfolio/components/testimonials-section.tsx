"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Star } from "lucide-react"
import { useEffect, useRef } from "react"

const testimonials = [
  {
    name: "Sarah Chen",
    role: "Community Director at Solana Labs",
    company: "Solana",
    content:
      "Oluwafemi's leadership as Lead Ambassador has been exceptional. His strategic approach to community growth and content creation has significantly boosted our engagement metrics. His ability to create viral educational content while maintaining authenticity is remarkable.",
    rating: 5,
    avatar: "/professional-asian-woman.png",
  },
  {
    name: "Marcus Rodriguez",
    role: "Head of Growth",
    company: "Ampleforth",
    content:
      "Working with Oluwafemi has been a game-changer for our community initiatives. His deep understanding of Web3 ecosystems and ability to translate complex concepts into engaging content has helped us reach new audiences effectively.",
    rating: 5,
    avatar: "/professional-hispanic-man.png",
  },
  {
    name: "Emily Thompson",
    role: "Product Manager",
    company: "Darwinia Network",
    content:
      "Oluwafemi's strategic feedback and community insights have directly influenced our product development. His collaborative approach and ability to foster positive community relationships made him an invaluable team member.",
    rating: 5,
    avatar: "/professional-blonde-woman.png",
  },
  {
    name: "David Kim",
    role: "Co-founder",
    company: "Penguin Finance",
    content:
      "As our Community Moderator, Oluwafemi demonstrated exceptional skills in user engagement and retention. His educational campaigns and onboarding materials significantly improved our new user experience and community trust.",
    rating: 5,
    avatar: "/professional-korean-man.png",
  },
]

export function TestimonialsSection() {
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
      id="testimonials"
      className="py-20 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950/20 dark:to-emerald-950/20"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="heading-section text-foreground">What Colleagues Say</h2>
          <p className="text-description-primary">
            Testimonials from industry leaders and team members I've collaborated with
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card
              key={testimonial.name}
              className="animate-on-scroll hover:shadow-lg transition-all duration-300 border-green-200 dark:border-green-800"
            >
              <CardContent className="p-6">
                {/* Rating Stars */}
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                {/* Testimonial Content */}
                <blockquote className="text-body mb-6 italic">"{testimonial.content}"</blockquote>

                {/* Author Info */}
                <div className="flex items-center gap-4">
                  <Avatar className="h-12 w-12">
                    <AvatarImage src={testimonial.avatar || "/placeholder.svg"} alt={testimonial.name} />
                    <AvatarFallback className="bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300">
                      {testimonial.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="heading-card text-foreground">{testimonial.name}</div>
                    <div className="text-small">{testimonial.role}</div>
                    <div className="text-small text-green-600 dark:text-green-400 font-medium">
                      {testimonial.company}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
