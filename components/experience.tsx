"use client"

import { useEffect, useRef, useState } from "react"
import { Calendar, MapPin, ExternalLink } from "lucide-react"
import { cn, softGlowShadow } from "@/lib/utils"

const experiences = [
  {
    title: "Machine Learning Research Scholar (EG-RSCA)",
    company: "California State University Fullerton",
    location: "Fullerton, California",
    period: "Jan 2025 - Present",
    supervisor: "Prof. Sarah G. Grant",
    supervisorUrl: "https://sarahggrant.com/",
    description: [
      "Working with Prof. Sarah G. Grant on research applying machine learning to identify bird species from their sounds using spectrograms and audio datasets.",
      "Analyzing and contextualizing data science methodologies, including spectrograms and machine learning algorithms, to analyze the sound of a bird.",
    ],
  },
  {
    title: "Data Analyst",
    company: "California State University Fullerton",
    location: "Fullerton, California",
    period: "Jan 2025 - Present",
    description: [
      "Analyzing datasets using Python to uncover patterns in CEO characteristics, compensation, and firm performance.",
      "Building interactive dashboards with Power BI and Tableau to visualize insights on leadership trends and business outcomes.",
      "Collaborating with Dr. Weng to define research goals, automate data collection from public filings and databases, and apply statistical analysis to support academic publications.",
    ],
  },
  {
    title: "Research and Development Intern",
    company: "International Institute of Information Technology, Bangalore",
    location: "Bangalore, India",
    period: "May 2023 - July 2023",
    supervisor: "Prof. Jyotsana Bapat",
    supervisorUrl: "https://www.iiitb.ac.in/faculty/jyotsna-bapat",
    description: [
      "Analyzed and identified vulnerabilities in the infrastructure of the 5G network.",
      "Utilized Open5GS tool to simulate a 5G network, connecting gNodeB with UERANSIM for testing.",
      "Used Wireshark to perform file transfer tests and network packet analysis, identifying and mitigating security holes, resulting in a thirty percent increase in network security.",
    ],
  },
  {
    title: "Full Stack Product Developer Intern",
    company: "International Institute of Information Technology, Hyderabad",
    location: "Hyderabad, India",
    period: "October 2022 - March 2023",
    supervisor: "Prof. Karthik Vaidyanathan",
    supervisorUrl: "https://karthikvaidhyanathan.com/",
    description: [
      "Collaborated on the \"Python Virtual Lab\" project, a joint initiative with the Government of India.",
      "Created a web-based Python compiler with Pyodide, reducing the loading size from 50 MB to 15 MB by removing unnecessary dependencies, which sped up page loading time by two seconds.",
      "Implemented features leading to a twenty five percent increase in user engagement and fifteen percent faster execution times.",
    ],
  },
  {
    title: "Research Intern",
    company: "Indian Institute of Technology, Indore",
    location: "Indore, India",
    period: "August 2021 - Jan 2022",
    supervisor: "Prof. Ayan Mondal",
    supervisorUrl: "https://people.iiti.ac.in/~ayanm/",
    description: [
      "Conducted extensive literature surveys in emerging fields like Internet of Things, software-defined networks, sixth generation networks, federated learning algorithms, and edge computing.",
      "Learnings during my internship were reported back to my university as an internship report and later compiled in a survey article titled \"How Software-Defined Networks can reduce the latency of 6G Networks.\"",
    ],
  },
]

export function Experience() {
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
    <section id="experience" ref={sectionRef} className="relative overflow-hidden py-[var(--section-padding)]">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[-10%] top-[15%] h-72 w-72 rounded-full bg-primary/15 blur-3xl" />
        <div className="absolute right-[-5%] bottom-[10%] h-80 w-80 rounded-full bg-secondary/20 blur-[140px]" />
      </div>

      <div className="relative mx-auto max-w-6xl px-6 sm:px-8 lg:px-12">
        <div className={cn("scroll-reveal", isVisible && "revealed")}
        >
          <div className="mx-auto mb-16 max-w-3xl text-center">
            <span className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/5 px-4 py-1 text-xs uppercase tracking-[0.3em] text-white/60">
              Experience
            </span>
            <h2 className="mt-6 text-3xl font-semibold text-white md:text-5xl">Building teams, products, and research outcomes</h2>
            <p className="mt-4 text-base text-white/60 md:text-lg">
              A snapshot of collaborations where I took ideas from exploration to measurable impact.
            </p>
          </div>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <article
                key={index}
                className={cn(
                  "group relative overflow-hidden rounded-[28px] border border-white/10 bg-white/6 p-8 text-white transition-all duration-500 hover:-translate-y-2 hover:border-white/25 hover:shadow-[0_32px_80px_rgba(4,7,17,0.6)]",
                  softGlowShadow(),
                  isVisible ? "fade-in-up" : "opacity-0"
                )}
                style={{ animationDelay: `${index * 160}ms` }}
              >
                <div className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                  style={{
                    background:
                      "radial-gradient(120% 120% at 10% 0%, rgba(99,102,241,0.22), transparent 55%), radial-gradient(160% 120% at 80% 40%, rgba(45,212,191,0.22), transparent 60%)"
                  }}
                />
                <div className="relative flex flex-col gap-6">
                  <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
                    <div className="space-y-3">
                      <h3 className="text-2xl font-semibold text-white">{exp.title}</h3>
                      <div className="flex flex-wrap items-center gap-3 text-sm text-white/65">
                        <span className="font-medium text-white/80">{exp.company}</span>
                        {exp.supervisor && (
                          <a
                            href={exp.supervisorUrl}
                            target="_blank"
                            className="inline-flex items-center gap-1 rounded-full border border-white/10 bg-white/5 px-3 py-1 transition hover:border-white/25 hover:bg-white/15"
                            rel="noreferrer"
                          >
                            {exp.supervisor}
                            <ExternalLink className="h-3 w-3" />
                          </a>
                        )}
                      </div>
                      <div className="flex flex-wrap items-center gap-4 text-xs uppercase tracking-[0.2em] text-white/50">
                        <span className="inline-flex items-center gap-2">
                          <MapPin className="h-4 w-4" />
                          {exp.location}
                        </span>
                        <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1">
                          <Calendar className="h-4 w-4" />
                          {exp.period}
                        </span>
                      </div>
                    </div>
                    <span className="text-xs font-semibold uppercase tracking-[0.3em] text-white/45">0{index + 1}</span>
                  </div>

                  <ul className="space-y-3 text-sm text-white/70">
                    {exp.description.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start gap-3">
                        <span className="mt-2 inline-flex h-1.5 w-1.5 rounded-full bg-white/60" />
                        <span className="leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
