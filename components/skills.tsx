"use client"

import { useEffect, useRef, useState } from "react"
import { Code, Database, Cloud, BarChart3, Brain, Users } from "lucide-react"
import { gradientText, softGlowShadow } from "@/lib/utils"

const skillCategories = [
  {
    title: "Programming Languages",
    icon: Code,
    skills: ["Python", "C++", "JavaScript", "HTML", "CSS", "SQL"],
  },
  {
    title: "ML and AI Frameworks",
    icon: Brain,
    skills: ["PyTorch", "TensorFlow", "Scikit-learn", "Hugging Face", "OpenAI API", "LLMs"],
  },
  {
    title: "Cloud and DevOps",
    icon: Cloud,
    skills: ["Docker", "Kubernetes", "Git", "CI/CD", "Linux", "GCP", "AWS"],
  },
  {
    title: "Databases",
    icon: Database,
    skills: ["MySQL", "MongoDB", "SQL Server"],
  },
  {
    title: "Data and Analytics",
    icon: BarChart3,
    skills: ["Tableau", "PowerBI", "RShiny", "Data Structures", "Algorithms"],
  },
  {
    title: "Collaboration",
    icon: Users,
    skills: [
      "Analytical thinking",
      "Technical communication",
      "Team leadership",
      "Agile methodologies",
      "Cross-functional collaboration",
    ],
  },
]

export function Skills() {
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
      id="skills"
      ref={sectionRef}
      className="relative overflow-hidden py-[var(--section-padding)]"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-[-10%] h-96 w-96 -translate-x-1/2 rounded-full bg-primary/18 blur-[140px]" />
      </div>

      <div className="relative mx-auto max-w-6xl px-6 sm:px-8 lg:px-12">
        <div className={`scroll-reveal ${isVisible ? "revealed" : ""}`}>
          <div className="mx-auto mb-14 max-w-3xl text-center">
            <span className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/5 px-4 py-1 text-xs uppercase tracking-[0.3em] text-white/60">
              Skills
            </span>
            <h2 className={gradientText("mt-6 text-3xl font-semibold md:text-5xl")}>Tools I rely on to ship thoughtful systems</h2>
            <p className="mt-4 text-base text-white/65 md:text-lg">
              A toolkit spanning ML research, full-stack engineering, and data storytelling.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {skillCategories.map((category, index) => (
              <article
                key={index}
                className={`relative overflow-hidden rounded-[28px] border border-white/10 bg-white/6 p-8 text-white ${softGlowShadow(
                  isVisible ? "fade-in-up" : "opacity-0"
                )}`}
                style={{ animationDelay: `${index * 120}ms` }}
              >
                <div className="absolute inset-0 opacity-0 transition-opacity duration-500 hover:opacity-100"
                  style={{ background: "radial-gradient(120% 120% at 15% 0%, rgba(99,102,241,0.22), transparent 55%)" }}
                />
                <div className="relative">
                  <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl border border-white/15 bg-white/10 text-white">
                    <category.icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-semibold text-white">{category.title}</h3>
                  <div className="mt-6 space-y-3 text-sm text-white/70">
                    {category.skills.map((skill, skillIndex) => (
                      <div key={skillIndex} className="flex items-center justify-between">
                        <span>{skill}</span>
                        <span className="inline-flex h-1.5 w-1.5 rounded-full bg-white/50" />
                      </div>
                    ))}
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
