"use client"

import { Button } from "@/components/ui/button"
import { FloatingElement } from "./css-animations"
import Image from "next/image"

export function HeroSection() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-muted/30 to-accent/10 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-32 h-32 bg-primary/10 rounded-full blur-xl"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-accent/10 rounded-full blur-xl"></div>
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-secondary/10 rounded-full blur-lg"></div>
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-8 fade-in-left">
            <div className="space-y-4">
              <h1 className="heading-hero">
                <span className="text-foreground">Hi, I'm</span>
                <br />
                <span className="text-primary">Oluwafemi</span>
                <br />
                <span className="text-foreground">Patrick</span>
              </h1>
              <div className="text-xl lg:text-2xl text-muted-foreground font-medium leading-snug">
                Community Growth Strategist & Web3 Leader
              </div>
            </div>

            <p className="text-description-secondary max-w-lg">
              Passionate about building thriving communities in the Web3 space. I specialize in community engagement,
              social media management, and driving growth for blockchain projects.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="text-lg px-8 py-6">
                View My Work
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-6 bg-transparent">
                Get In Touch
              </Button>
            </div>

            <div className="flex items-center gap-6 pt-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">5+</div>
                <div className="text-sm text-muted-foreground">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">10K+</div>
                <div className="text-sm text-muted-foreground">Community Members</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">50+</div>
                <div className="text-sm text-muted-foreground">Projects</div>
              </div>
            </div>
          </div>

          {/* Character Image */}
          <div className="flex justify-center fade-in-right">
            <FloatingElement className="relative">
              <div className="relative w-80 h-80 lg:w-96 lg:h-96">
                <Image
                  src="/images/character-2.jpeg"
                  alt="Oluwafemi Patrick - Community Growth Strategist"
                  fill
                  className="object-contain"
                  priority
                />
                {/* Decorative ring */}
                <div className="absolute inset-0 rounded-full border-4 border-primary/20 animate-pulse"></div>
                <div className="absolute inset-4 rounded-full border-2 border-accent/30"></div>
              </div>
            </FloatingElement>
          </div>
        </div>
      </div>
    </section>
  )
}
