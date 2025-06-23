"use client"

import { useEffect, useRef, useState } from "react"
import { Code, Database, Cloud, BarChart3, Brain, Users } from "lucide-react"

const skillCategories = [
  {
    title: "Programming Languages",
    icon: Code,
    skills: ["Python", "C++", "JavaScript", "HTML", "CSS", "SQL"],
  },
  {
    title: "ML/AI Frameworks",
    icon: Brain,
    skills: ["PyTorch", "TensorFlow", "Scikit-learn", "Hugging Face", "OpenAI API", "LLMs"],
  },
  {
    title: "Cloud & DevOps",
    icon: Cloud,
    skills: ["Docker", "Kubernetes", "Git", "CI/CD", "Linux", "GCP", "AWS"],
  },
  {
    title: "Databases",
    icon: Database,
    skills: ["MySQL", "MongoDB", "SQL Server"],
  },
  {
    title: "Data & Analytics",
    icon: BarChart3,
    skills: ["Tableau", "PowerBI", "RShiny", "Data Structures", "Algorithms"],
  },
  {
    title: "Soft Skills",
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
    <section id="skills" ref={sectionRef} className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`scroll-reveal ${isVisible ? "revealed" : ""}`}>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#111111] mb-6 font-manrope">Skills</h2>
            <div className="w-16 h-0.5 bg-[#111111] mx-auto" />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategories.map((category, index) => (
              <div
                key={index}
                className={`clean-card p-8 hover-lift ${isVisible ? "fade-in-up" : "opacity-0"}`}
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="w-12 h-12 border border-[#E5E5E5] flex items-center justify-center mb-6">
                  <category.icon className="h-6 w-6 text-[#111111]" />
                </div>

                <h3 className="text-xl font-bold text-[#111111] mb-6 font-manrope">{category.title}</h3>

                <div className="space-y-3">
                  {category.skills.map((skill, skillIndex) => (
                    <div
                      key={skillIndex}
                      className="flex items-center justify-between py-2 border-b border-[#F5F5F5] last:border-b-0"
                    >
                      <span className="text-[#525252] font-medium">{skill}</span>
                      <div className="w-2 h-2 bg-[#111111] rounded-full" />
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
