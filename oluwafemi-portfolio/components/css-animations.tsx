"use client"

import type React from "react"
import { useEffect } from "react"

export function useCSSAnimation() {
  useEffect(() => {
    // Add intersection observer for scroll animations
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-in")
          }
        })
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" },
    )

    // Observe all animation elements
    const elements = document.querySelectorAll(".fade-in-up, .fade-in-left, .fade-in-right, .scale-in")
    elements.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])
}

export function FloatingElement({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return <div className={`animate-float ${className}`}>{children}</div>
}
