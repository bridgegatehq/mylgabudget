"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, Linkedin, MessageCircle } from "lucide-react"
import Image from "next/image"

export function ContactSection() {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 fade-in-up">
          <h2 className="heading-section">
            Let's <span className="text-primary">Connect</span>
          </h2>
          <p className="text-description-primary">
            Ready to build amazing communities together? Let's discuss your next project!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Info */}
          <div className="space-y-8 fade-in-left">
            <div className="flex justify-center lg:justify-start">
              <div className="relative w-64 h-64">
                <Image src="/images/character-4.png" alt="Contact illustration" fill className="object-contain" />
              </div>
            </div>

            <div className="space-y-6">
              <Card className="scale-in">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                      <Mail className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <div className="heading-card">Email</div>
                      <div className="text-body">omosuyioluwafemi1@gmail.com</div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="scale-in">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                      <Phone className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <div className="heading-card">Phone</div>
                      <div className="text-body">+2347066159582</div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="scale-in">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                      <Linkedin className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <div className="heading-card">LinkedIn</div>
                      <div className="text-small">linkedin.com/in/oluwafemi-patrick-omosuyi-396381210</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Contact Form */}
          <Card className="fade-in-right">
            <CardHeader>
              <CardTitle className="heading-subsection flex items-center gap-2">
                <MessageCircle className="w-6 h-6 text-primary" />
                Send a Message
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-label">First Name</label>
                  <Input placeholder="Your first name" />
                </div>
                <div className="space-y-2">
                  <label className="text-label">Last Name</label>
                  <Input placeholder="Your last name" />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-label">Email</label>
                <Input type="email" placeholder="your.email@example.com" />
              </div>

              <div className="space-y-2">
                <label className="text-label">Subject</label>
                <Input placeholder="What's this about?" />
              </div>

              <div className="space-y-2">
                <label className="text-label">Message</label>
                <Textarea placeholder="Tell me about your project or how we can work together..." rows={6} />
              </div>

              <Button className="w-full" size="lg">
                Send Message
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
