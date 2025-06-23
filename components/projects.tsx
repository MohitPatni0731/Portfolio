"use client"

import { useEffect, useRef, useState } from "react"
import { ExternalLink, Github, TrendingUp, Bell, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"

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
      "A collaborative project with the Government of India - a web-based Python compiler and learning platform.",
    features: [
      "Web-based Python compiler using Pyodide",
      "Reduced loading size from 50MB to 15MB",
      "2-second improvement in page loading time",
      "25% increase in user engagement",
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
      "30% improvement in network security",
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
    <section id="projects" ref={sectionRef} className="py-24 gradient-bg">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`scroll-reveal ${isVisible ? "revealed" : ""}`}>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#111111] mb-6 font-manrope">Projects</h2>
            <div className="w-16 h-0.5 bg-[#111111] mx-auto" />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="clean-card p-8 hover-lift group"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="w-12 h-12 border border-[#E5E5E5] flex items-center justify-center mb-6 group-hover:border-[#111111] transition-colors duration-300">
                  <project.icon className="h-6 w-6 text-[#111111]" />
                </div>

                <h3 className="text-2xl font-bold text-[#111111] mb-4 font-manrope">{project.title}</h3>
                <p className="text-[#525252] mb-6 leading-relaxed">{project.description}</p>

                <div className="mb-6">
                  <h4 className="text-sm font-medium text-[#111111] mb-3 uppercase tracking-wide">Key Features</h4>
                  <ul className="space-y-2">
                    {project.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start">
                        <div className="w-1.5 h-1.5 bg-[#111111] rounded-full mt-2 mr-3 flex-shrink-0" />
                        <span className="text-sm text-[#525252]">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-6">
                  <h4 className="text-sm font-medium text-[#111111] mb-3 uppercase tracking-wide">Technologies</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-[#F5F5F5] text-xs text-[#525252] border border-[#E5E5E5] rounded-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex space-x-3">
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex-1 border-[#111111] text-[#111111] hover:bg-[#111111] hover:text-white"
                    asChild
                  >
                    <a href={project.github} target="_blank" rel="noreferrer">
                      <Github className="h-4 w-4 mr-2" />
                      Code
                    </a>
                  </Button>
                  <Button size="sm" className="flex-1 bg-[#111111] text-white hover:bg-[#111111]/90" asChild>
                    <a href={project.demo} target="_blank" rel="noreferrer">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Demo
                    </a>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
