"use client"

import { useState, useEffect } from "react"
import { ArrowRight, Download, Github, Linkedin, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Hero() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100)
    return () => clearTimeout(timer)
  }, [])

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#FAFAFA] to-[#F5F5F5] relative overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 subtle-grid opacity-40" />

      {/* Floating geometric shapes */}
      <div className="absolute top-20 left-10 w-2 h-2 bg-[#111111] opacity-20 rounded-full" />
      <div className="absolute bottom-32 right-16 w-3 h-3 border border-[#111111] opacity-15" />
      <div className="absolute top-1/2 left-20 w-1 h-12 bg-[#111111] opacity-10" />
      <div className="absolute top-1/4 right-1/4 w-2 h-2 bg-[#525252] opacity-15 rounded-full" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-32 relative z-10">
        <div className="text-center space-y-8">
          {/* Name with clean animation */}
          <div className={`${isVisible ? "fade-in-up" : "opacity-0"}`}>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-[#111111] mb-4 font-manrope tracking-tight">
              Mohit Patni
            </h1>

            {/* Animated underline */}
            <div className="flex justify-center mb-6">
              <div
                className={`h-0.5 bg-[#111111] ${isVisible ? "draw-line" : "w-0"}`}
                style={{ width: isVisible ? "80px" : "0px" }}
              />
            </div>
          </div>

          {/* Subtitle */}
          <div className={`${isVisible ? "fade-in-up" : "opacity-0"} delay-300`}>
            <p className="text-xl md:text-2xl lg:text-3xl text-[#525252] mb-4 font-light">
              Machine Learning Research Scholar
            </p>
            <p className="text-lg md:text-xl text-[#525252] mb-8 opacity-80">Data Analyst & AI Researcher</p>
            <p className="text-base md:text-lg text-[#525252] max-w-2xl mx-auto leading-relaxed opacity-70">
              Transforming complex data into actionable insights through advanced machine learning algorithms and
              statistical analysis
            </p>
          </div>

          {/* Clean CTA buttons */}
          <div className={`${isVisible ? "fade-in-up" : "opacity-0"} delay-500`}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
              <Button
                size="lg"
                className="bg-[#111111] text-white hover:bg-[#111111]/90 px-8 py-4 group transition-all duration-300 hover-lift"
                asChild
              >
                <a href="#contact">
                  Get In Touch
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                </a>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-[#111111] text-[#111111] hover:bg-[#111111] hover:text-white px-8 py-4 transition-all duration-300"
                asChild
              >
                <a
                  href="https://drive.google.com/file/d/1H29IUqUObwMS7R22buXsEDwx_I_6pKNR/view?usp=sharing"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Download className="mr-2 h-4 w-4" />
                  Resume
                </a>
              </Button>
            </div>

            {/* Clean social links */}
            <div className="flex items-center justify-center space-x-6">
              {[
                { href: "https://www.linkedin.com/in/mohitpatni1/", icon: Linkedin, label: "LinkedIn" },
                { href: "https://github.com/MohitPatni0731", icon: Github, label: "GitHub" },
                { href: "mailto:mohitpatni@csu.fullerton.edu", icon: Mail, label: "Email" },
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target={social.label !== "Email" ? "_blank" : undefined}
                  className="w-12 h-12 border border-[#E5E5E5] flex items-center justify-center hover:border-[#111111] hover:bg-[#111111] hover:text-white transition-all duration-300 group"
                  rel={social.label !== "Email" ? "noreferrer" : undefined}
                  aria-label={social.label}
                >
                  <social.icon className="h-5 w-5 group-hover:scale-110 transition-transform duration-200" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
