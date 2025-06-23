"use client"

import { useEffect, useRef, useState } from "react"
import { Calendar, MapPin, ExternalLink } from "lucide-react"

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
      "Building interactive dashboards with Power BI & Tableau to visualize insights on leadership trends & business outcomes.",
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
      "Used Wireshark to perform file transfer tests and network packet analysis, identifying and mitigating security holes, resulting in a 30% increase in network security.",
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
      'Collaborated on the "Python Virtual Lab" project, a joint initiative with the Government of India.',
      "Created a web-based Python compiler with Pyodide, reducing the loading size from 50 Mb to 15 Mb by removing unnecessary dependencies, which sped up page loading time by 2 seconds.",
      "Implemented features leading to a 25% increase in user engagement and 15% faster execution times.",
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
      "Conducted extensive literature surveys in emerging fields like Internet of Things (IoT), Software-defined networks, 6G networks, federated learning algorithms, and edge computing.",
      'Learnings during my internship were reported back to my university as an internship report and later compiled in a survey article titled "How Software-Defined Networks can reduce the latency of 6G Networks."',
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
    <section id="experience" ref={sectionRef} className="py-24 gradient-bg">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`scroll-reveal ${isVisible ? "revealed" : ""}`}>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#111111] mb-6 font-manrope">Experience</h2>
            <div className="w-16 h-0.5 bg-[#111111] mx-auto" />
          </div>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className={`clean-card p-8 hover-lift ${isVisible ? "fade-in-up" : "opacity-0"}`}
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-[#111111] mb-2 font-manrope">{exp.title}</h3>
                    <div className="flex items-center space-x-4 text-[#525252] mb-2">
                      <span className="font-medium">{exp.company}</span>
                      {exp.supervisor && (
                        <a
                          href={exp.supervisorUrl}
                          target="_blank"
                          className="flex items-center hover:text-[#111111] transition-colors duration-300"
                          rel="noreferrer"
                        >
                          {exp.supervisor}
                          <ExternalLink className="h-3 w-3 ml-1" />
                        </a>
                      )}
                    </div>
                    <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-6 text-sm text-[#525252]">
                      <span className="flex items-center">
                        <MapPin className="h-4 w-4 mr-1" />
                        {exp.location}
                      </span>
                      <span className="flex items-center px-3 py-1 bg-[#F5F5F5] rounded-full">
                        <Calendar className="h-4 w-4 mr-1" />
                        {exp.period}
                      </span>
                    </div>
                  </div>
                </div>

                <ul className="space-y-3">
                  {exp.description.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start">
                      <div className="w-2 h-2 bg-[#111111] rounded-full mt-2 mr-4 flex-shrink-0" />
                      <span className="text-[#525252] leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
