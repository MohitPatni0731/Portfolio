"use client"

import { useEffect, useRef, useState } from "react"
import { ExternalLink, Github, TrendingUp, Bell, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn, softGlowShadow } from "@/lib/utils"

const projects = [
  {
    title: "Crypto Price Tracker",
    description:
      "A real-time cryptocurrency price tracking application that fetches live data from coindesk.com and provides intelligent notifications.",
    features: [
      "Real-time price fetching from coindesk.com API",
      "Daily price change analysis and trend detection",
      "Automated Discord notifications for price movements",
      "Clean, responsive interface for price monitoring",
    ],
    technologies: ["Python", "Discord API", "REST APIs", "Data Analysis"],
    icon: TrendingUp,
    github: "https://github.com/MohitPatni0731/Crypto-Info",
    demo: "https://github.com/MohitPatni0731/Crypto-Info",
  },
  {
    title: "Python Virtual Lab",
    description:
      "A collaborative project with the Government of India: a web-based Python compiler and learning platform.",
    features: [
      "Web-based Python compiler using Pyodide",
      "Reduced loading size from 50 MB to 15 MB",
      "Two second improvement in page loading time",
      "Twenty five percent increase in user engagement",
    ],
    technologies: ["JavaScript", "Pyodide", "Web Assembly", "Python", "Performance Optimization"],
    icon: Zap,
    github: "https://python-iiith.vlabs.ac.in/List%20of%20experiments.html",
    demo: "https://python-iiith.vlabs.ac.in/List%20of%20experiments.html",
  },
  {
    title: "5G Network Security Analysis",
    description:
      "Research project analyzing vulnerabilities in 5G network infrastructure using advanced simulation tools.",
    features: [
      "5G network simulation using Open5GS",
      "gNodeB and UERANSIM integration for testing",
      "Network packet analysis with Wireshark",
      "Thirty percent improvement in network security",
    ],
    technologies: ["Open5GS", "UERANSIM", "Wireshark", "Network Security", "5G Technology"],
    icon: Bell,
    github: "#",
    demo: "#",
  },
]

export function Projects() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section id="projects" ref={sectionRef} className="relative overflow-hidden py-[var(--section-padding)]">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/4 top-[-10%] h-72 w-72 rounded-full bg-primary/20 blur-3xl" />
        <div className="absolute right-[-10%] top-1/3 h-96 w-96 rounded-full bg-secondary/20 blur-[140px]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(148,187,255,0.12),_transparent_45%)]" />
      </div>

      <div className="relative mx-auto max-w-6xl px-6 sm:px-8 lg:px-12">
        <div className={cn("scroll-reveal", isVisible && "revealed")}
        >
          <div className="mx-auto mb-16 max-w-3xl text-center">
            <span className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/5 px-4 py-1 text-xs uppercase tracking-[0.3em] text-white/60">
              Featured Projects
            </span>
            <h2 className="mt-6 text-3xl font-semibold text-white md:text-5xl">Where research meets shippable product</h2>
            <p className="mt-4 text-base text-white/60 md:text-lg">
              Explorations that blend applied machine learning, thoughtful UX, and real-world impact.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project, index) => (
              <article
                key={index}
                className={cn(
                  "group relative overflow-hidden rounded-[28px] border border-white/10 bg-white/6 p-8 text-white backdrop-blur transition-all duration-500 hover:-translate-y-3 hover:border-white/25 hover:shadow-[0_34px_80px_rgba(4,7,17,0.6)]",
                  softGlowShadow()
                )}
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                  style={{
                    background:
                      "radial-gradient(120% 120% at 20% 0%, rgba(99,102,241,0.25), transparent 55%), radial-gradient(140% 140% at 80% 20%, rgba(45,212,191,0.25), transparent 60%)"
                  }}
                />
                <div className="relative flex h-full flex-col">
                  <div className="flex items-start justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/15 bg-white/10 text-white shadow-inner">
                      <project.icon className="h-6 w-6" />
                    </div>
                    <span className="text-xs font-semibold uppercase tracking-[0.3em] text-white/50">0{index + 1}</span>
                  </div>

                  <h3 className="mt-6 text-2xl font-semibold text-white">{project.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-white/70">{project.description}</p>

                  <div className="mt-6 space-y-3">
                    <h4 className="text-xs font-semibold uppercase tracking-[0.25em] text-white/60">Highlights</h4>
                    <ul className="space-y-2 text-sm text-white/70">
                      {project.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start gap-3">
                          <span className="mt-1 inline-flex h-1.5 w-1.5 rounded-full bg-white/60" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-6 space-y-3">
                    <h4 className="text-xs font-semibold uppercase tracking-[0.25em] text-white/60">Stack</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs text-white/70"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                    <Button
                      variant="outline"
                      size="sm"
                      className="flex-1 rounded-full border-white/25 bg-white/5 text-white transition hover:border-white/40 hover:bg-white/15"
                      asChild
                    >
                      <a href={project.github} target="_blank" rel="noreferrer">
                        <Github className="mr-2 h-4 w-4" />
                        Code
                      </a>
                    </Button>
                    <Button
                      size="sm"
                      className="flex-1 rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-sky-500 text-white shadow-[0_12px_35px_rgba(88,82,197,0.45)] transition hover:scale-[1.02]"
                      asChild
                    >
                      <a href={project.demo} target="_blank" rel="noreferrer">
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Demo
                      </a>
                    </Button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
