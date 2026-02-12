"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, Download, MessageSquare } from "lucide-react"
import { useEffect, useRef } from "react"
import Image from "next/image"

export function CTASection() {
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
    <section ref={sectionRef} className="py-20 bg-gradient-to-br from-green-600 to-emerald-600 text-white">
      <div className="container mx-auto px-4">
        <Card className="bg-white/10 backdrop-blur-sm border-white/20 animate-on-scroll">
          <CardContent className="p-12 text-center">
            <div className="flex justify-center mb-6">
              <div className="relative w-24 h-24">
                <Image
                  src="/images/character-1.png"
                  alt="Oluwafemi Patrick"
                  fill
                  className="object-cover rounded-full border-4 border-white/30"
                />
              </div>
            </div>

            <h2 className="heading-section text-white">Ready to Build Something Amazing Together?</h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed">
              Let's discuss how I can help grow your Web3 community, create engaging content, and drive meaningful user
              engagement for your project.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button
                size="lg"
                className="bg-white text-green-600 hover:bg-gray-100 font-semibold px-8"
                onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
              >
                <MessageSquare className="mr-2 h-5 w-5" />
                Start a Conversation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>

              <Button
                size="lg"
                variant="outline"
                className="border-white/30 text-white hover:bg-white/10 font-semibold px-8 bg-transparent"
              >
                <Download className="mr-2 h-5 w-5" />
                Download Resume
              </Button>
            </div>

            <div className="mt-8 pt-8 border-t border-white/20">
              <p className="text-white/80 text-small">
                Currently available for new opportunities • Response within 24 hours
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
