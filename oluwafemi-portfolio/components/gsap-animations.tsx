"use client"

import type React from "react"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}

export function useGSAPAnimation() {
  useEffect(() => {
    // Fade in up animation
    gsap.fromTo(
      ".fade-in-up",
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.2,
        scrollTrigger: {
          trigger: ".fade-in-up",
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      },
    )

    // Fade in left animation
    gsap.fromTo(
      ".fade-in-left",
      { opacity: 0, x: -30 },
      {
        opacity: 1,
        x: 0,
        duration: 0.8,
        stagger: 0.1,
        scrollTrigger: {
          trigger: ".fade-in-left",
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      },
    )

    // Fade in right animation
    gsap.fromTo(
      ".fade-in-right",
      { opacity: 0, x: 30 },
      {
        opacity: 1,
        x: 0,
        duration: 0.8,
        stagger: 0.1,
        scrollTrigger: {
          trigger: ".fade-in-right",
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      },
    )

    // Scale in animation
    gsap.fromTo(
      ".scale-in",
      { opacity: 0, scale: 0.8 },
      {
        opacity: 1,
        scale: 1,
        duration: 0.6,
        stagger: 0.1,
        scrollTrigger: {
          trigger: ".scale-in",
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      },
    )

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
    }
  }, [])
}

export function FloatingElement({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const elementRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (elementRef.current) {
      gsap.to(elementRef.current, {
        y: -20,
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: "power2.inOut",
      })
    }
  }, [])

  return (
    <div ref={elementRef} className={className}>
      {children}
    </div>
  )
}
