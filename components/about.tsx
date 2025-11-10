"use client"

import { useEffect, useRef, useState } from "react"
import { GraduationCap, MapPin, Calendar } from "lucide-react"
import { gradientText, softGlowShadow } from "@/lib/utils"

export function About() {
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
    <section
      id="about"
      ref={sectionRef}
      className="relative overflow-hidden py-[var(--section-padding)]"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[-10%] top-5 h-80 w-80 rounded-full bg-primary/18 blur-3xl" />
        <div className="absolute right-[-15%] top-1/3 h-96 w-96 rounded-full bg-secondary/18 blur-[140px]" />
      </div>

      <div className="relative mx-auto max-w-6xl px-6 sm:px-8 lg:px-12">
        <div className={`scroll-reveal ${isVisible ? "revealed" : ""}`}>
          <div className="mx-auto mb-14 max-w-3xl text-center">
            <span className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/5 px-4 py-1 text-xs uppercase tracking-[0.3em] text-white/60">
              About
            </span>
            <h2 className={gradientText("mt-6 text-3xl font-semibold md:text-5xl")}>From Indore to California, building AI for humans</h2>
            <p className="mt-4 text-base text-white/65 md:text-lg">
              I design and deploy applied ML systems that connect storytelling, data, and delightful product moments.
            </p>
          </div>

          <div className="grid gap-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)]">
            <div className="space-y-6 text-base leading-relaxed text-white/70">
              <p>
                I'm a Machine Learning Research Scholar and data analyst based in Fullerton, California. My work bridges
                behavioral AI, environmental anthropology, and product design—translating complex datasets into
                intuitive, conversational experiences.
              </p>
              <p>
                I thrive in interdisciplinary teams, whether collaborating with researchers on geospatial ML pipelines or
                launching AI products that help people build personal knowledge ecosystems. Empathy, research rigor, and
                rapid experimentation shape every project I touch.
              </p>
              <p>
                When I'm not prototyping or analyzing data, you'll find me curating community workshops or scouting for
                new ideas at the intersection of culture and technology.
              </p>
            </div>

            <div className="space-y-6">
              {[{
                title: "Current Education",
                subtitle: "Master of Science in Computer Science",
                institution: "California State University Fullerton",
                period: "Aug 2024 - June 2026",
                location: "Fullerton, California"
              }, {
                title: "Previous Education",
                subtitle: "Bachelor of Technology in Information Technology",
                institution: "Indore Institute of Science and Technology",
                period: "Sep 2020 - June 2024",
                location: "Indore, India"
              }].map((item, idx) => (
                <div
                  key={idx}
                  className={`relative overflow-hidden rounded-[28px] border border-white/10 bg-white/6 p-8 text-white ${softGlowShadow("hover:-translate-y-1 transition-all duration-300")}`}
                >
                  <div className="absolute inset-0 opacity-0 transition-opacity duration-500 hover:opacity-100"
                    style={{ background: "radial-gradient(120% 120% at 20% 0%, rgba(99,102,241,0.22), transparent 55%)" }}
                  />
                  <div className="relative flex items-start gap-4">
                    <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-2xl border border-white/15 bg-white/10">
                      <GraduationCap className="h-6 w-6 text-white" />
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                      <p className="text-sm font-medium text-white/80">{item.subtitle}</p>
                      <p className="text-sm text-white/60">{item.institution}</p>
                      <div className="flex flex-wrap items-center gap-4 text-xs uppercase tracking-[0.2em] text-white/45">
                        <span className="inline-flex items-center gap-2">
                          <Calendar className="h-4 w-4" />
                          {item.period}
                        </span>
                        <span className="inline-flex items-center gap-2">
                          <MapPin className="h-4 w-4" />
                          {item.location}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
