"use client"

import React, { useState, useEffect, useRef } from "react"

interface TerminalLine {
  id: string
  type: "input" | "output" | "error"
  content: string | React.ReactNode
}

interface QueueItem {
  id: string
  type: "input" | "output" | "error"
  content: string | React.ReactNode
  delay?: number
}

const BOOT_LINES: string[] = [
  "Initializing portfolio...   [████████████████████] 100%",
  "",
  "Welcome to Mohit Patni's Interactive Portfolio Terminal v1.0.0",
  "Type 'help' to see available commands.",
  ""
]

export default function Home() {
  const [lines, setLines] = useState<TerminalLine[]>([])
  const [queue, setQueue] = useState<QueueItem[]>([])
  const [inputVal, setInputVal] = useState("")
  const [history, setHistory] = useState<string[]>([])
  const [historyIndex, setHistoryIndex] = useState(-1)
  const [isTyping, setIsTyping] = useState(false)

  const terminalBodyRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  // Auto-focus input on load
  useEffect(() => {
    focusInput()
  }, [])

  // Focus utility
  const focusInput = () => {
    inputRef.current?.focus()
  }

  // Trigger boot sequence on load
  useEffect(() => {
    const bootQueue = BOOT_LINES.map((content, idx) => ({
      id: `boot-${idx}-${Date.now()}`,
      type: "output" as const,
      content,
      delay: 40
    }))
    setQueue(bootQueue)
  }, [])

  // Auto-scroll to bottom on new line
  useEffect(() => {
    if (terminalBodyRef.current) {
      terminalBodyRef.current.scrollTop = terminalBodyRef.current.scrollHeight
    }
  }, [lines, queue])

  // Queue Typist System
  useEffect(() => {
    if (queue.length === 0) {
      setIsTyping(false)
      return
    }

    setIsTyping(true)
    const nextItem = queue[0]
    const delay = nextItem.delay !== undefined ? nextItem.delay : 20

    const timer = setTimeout(() => {
      setLines(prev => [
        ...prev,
        {
          id: nextItem.id,
          type: nextItem.type,
          content: nextItem.content
        }
      ])
      setQueue(prev => prev.slice(1))
    }, delay)

    return () => clearTimeout(timer)
  }, [queue])

  // Command handlers
  const getCommandOutput = (lowerCommand: string, originalCommand: string): QueueItem[] => {
    const createItem = (content: string | React.ReactNode, delay = 20): QueueItem => ({
      id: `line-${Math.random()}-${Date.now()}`,
      type: "output",
      content,
      delay
    })

    switch (lowerCommand) {
      case "help": {
        const helpText = [
          "Available Commands:",
          "  about          Learn about me",
          "  skills         View my technical skills",
          "  experience     View my work experience",
          "  education      View my education background",
          "  projects       View my featured projects",
          "  certifications View my certifications & achievements",
          "  contact        Get my contact information",
          "  clear          Clear the terminal",
          "  banner         Show the welcome banner again",
          "  history        View your command history",
          "  whoami         A quick one-liner about me",
          "",
          "Tip: Use Up/Down arrows to navigate command history."
        ]
        return helpText.map(line => createItem(line, 20))
      }

      case "whoami": {
        const whoami = [
          "Mohit Patni - Software Engineer & ML Researcher",
          "MS Computer Science @ CSUF | Building AI-powered products that ship to real users."
        ]
        return whoami.map(line => createItem(line, 20))
      }

      case "about": {
        const about = [
          "About Mohit Patni:",
          "Hey! I'm Mohit - a Software Engineer and ML Researcher based in Milpitas, CA.",
          "",
          "I'm currently pursuing my Master of Science in Computer Science at California State University, Fullerton (graduating May 2026), where I also work as a Teaching Associate for CPSC 323 (Compilers & Languages), mentoring 50+ students in compiler design, algorithms, and software engineering fundamentals.",
          "",
          "I love building full-stack, AI-powered products that go from idea to production - from LLM-backed platforms to real-time wildfire prediction systems. I'm currently a Founding Software Engineer at everloom, architecting a dual-surface AI platform.",
          "",
          "I'm driven by curiosity, ownership, and the belief that great software should feel effortless to users, even when it's deeply complex underneath."
        ]
        return about.map(line => createItem(line, 20))
      }

      case "skills": {
        const skills = [
          "Technical Skills:",
          "",
          "Languages & Frameworks:",
          "  Python, Java, TypeScript, JavaScript, SQL",
          "  React, Node.js, Express, REST APIs",
          "",
          "Machine Learning & Data:",
          "  PyTorch, TensorFlow, scikit-learn, NLP",
          "  Classification, Feature Engineering, ETL Pipelines",
          "",
          "Cloud, Tools & DevOps:",
          "  AWS, GCP, Docker, Kubernetes, CI/CD",
          "  Git, Hugging Face, Mapbox",
          "",
          "Data & Visualization:",
          "  Pandas, BeautifulSoup, Power BI"
        ]
        return skills.map(line => createItem(line, 20))
      }

      case "experience": {
        const experience = [
          "Work Experience:",
          "",
          "Founding Software Engineer @ everloom (Jul 2025 - Present)",
          "  - Architected a dual-surface AI platform (Chrome extension + web app) using React/TypeScript with Node.js REST APIs.",
          "  - Built LLM-backed semantic search with context-aware metadata indexing over user knowledge bases.",
          "  - Designed behavior-driven AI persona, raising session duration 30% in testing.",
          "  - Deployed on cloud-native infra with CI/CD, feature flags, and zero-downtime release strategies.",
          "",
          "Machine Learning Researcher @ CSUF (Jan 2025 - Aug 2025)",
          "  - Built & deployed Titan Bird Trails - a production ML web app used by 500+ CSUF students.",
          "  - Trained PyTorch classification model on 30 years of eBird data; achieved 92% accuracy.",
          "  - Integrated real-time species prediction, AI-powered chat (Gemini API), and geolocation-guided tours.",
          "",
          "Data Engineer @ California State University, Fullerton (Jan 2025 - Aug 2025)",
          "  - Automated Python ETL pipelines processing 50 GB of Fortune 500 annual reports.",
          "  - Reduced manual data prep time by 80%.",
          "  - Designed Power BI dashboards for 15-year AI investment trend analysis.",
          "",
          "Data Analyst @ IIIT Bangalore (May 2023 - Jul 2023)",
          "  - Simulated and analyzed 5G networks (Open5GS + UERANSIM/gNodeB).",
          "  - Identified architectural vulnerabilities; drove ~30% security improvement.",
          "  - Used Wireshark for packet-level traffic analysis.",
          "",
          "Software Engineer Intern @ IIIT Hyderabad (Oct 2022 - Mar 2023)",
          "  - Optimized Govt. of India Python Virtual Lab - restructured Pyodide compiler bundle.",
          "  - Cut payload 70% and load time 40%.",
          "  - Drove 25% higher user engagement through performance improvements."
        ]
        return experience.map(line => createItem(line, 20))
      }

      case "education": {
        const education = [
          "Education:",
          "",
          "Master of Science, Computer Science",
          "California State University, Fullerton (Aug 2024 - May 2026)",
          "",
          "Bachelor of Technology, Information Technology",
          "Indore Institute of Science and Technology (Sep 2020 - Jun 2024)"
        ]
        return education.map(line => createItem(line, 20))
      }

      case "projects": {
        const projects = [
          "Featured Projects:",
          "",
          "Titan Bird Trails",
          "  Production ML web app (500+ active users)",
          "  Stack: React, Vite, Tailwind, PyTorch, Gemini API, Geo/Weather APIs",
          "  - 92% species accuracy from 30 years of eBird training data",
          "  - Real-time species prediction + AI-powered chat + geolocation tours",
          "  Live: https://birding-csuf.vercel.app/",
          "  GitHub: https://github.com/MohitPatni0731",
          "",
          "AI Fire Prediction System",
          "  Real-time wildfire monitoring & spread prediction",
          "  Stack: React, Node.js/Express, MongoDB, scikit-learn, TensorFlow, Mapbox",
          "  - NASA FIRMS + Weather API integration with geospatial visualization",
          "  - Predictive ML model for wildfire spread pattern analysis",
          "  Live: https://ignis-ai-frontend.onrender.com/",
          "  GitHub: https://github.com/MohitPatni0731"
        ]
        return projects.map(line => {
          if (typeof line === "string" && (line.includes("Live:") || line.includes("GitHub:"))) {
            const parts = line.split(": ")
            const label = parts[0]
            const url = parts[1]
            return createItem(
              <span>
                {label}: <a href={url} target="_blank" rel="noreferrer" className="underline hover:opacity-80">{url}</a>
              </span>,
              20
            )
          }
          return createItem(line, 20)
        })
      }

      case "certifications": {
        const certifications = [
          "Certifications & Achievements:",
          "",
          "Certifications:",
          "  - Oracle Cloud Infrastructure - Generative AI Professional (2025)",
          "  - Oracle Cloud Infrastructure - AI Foundations Associate (2025)",
          "  - Oracle Data Platform - Foundations Associate (2025)",
          "",
          "Scholarships & Awards:",
          "  - Total: $11,000+ in competitive scholarships",
          "  - EG-RSCA Research Scholar: $7,500 (govt.-funded)",
          "  - CS Research Excellence Scholar: $2,500",
          "  - ASI Graduate Scholar: $1,000",
          "  - Awarded university-wide for academic and research merit."
        ]
        return certifications.map(line => createItem(line, 20))
      }

      case "contact": {
        const contact = [
          "Get In Touch:",
          "  Email: mohitpatni@csu.fullerton.edu",
          "  Phone: +1 (657) 751-9138",
          "  LinkedIn: https://linkedin.com/in/mohitpatni1",
          "  GitHub: https://github.com/MohitPatni0731",
          "  Portfolio: https://mohitpatni.me",
          "  Location: Milpitas, CA"
        ]
        return contact.map(line => {
          if (line.includes("Email:")) {
            const email = "mohitpatni@csu.fullerton.edu"
            return createItem(
              <span>
                {"  Email: "}<a href={`mailto:${email}`} className="underline hover:opacity-80">{email}</a>
              </span>,
              20
            )
          }
          if (line.includes("Phone:")) {
            const phone = "+1 (657) 751-9138"
            return createItem(
              <span>
                {"  Phone: "}<a href={`tel:${phone.replace(/\D/g, "")}`} className="underline hover:opacity-80">{phone}</a>
              </span>,
              20
            )
          }
          if (line.includes("LinkedIn:") || line.includes("GitHub:") || line.includes("Portfolio:")) {
            const parts = line.split(": ")
            const label = parts[0]
            const url = parts.slice(1).join(": ")
            return createItem(
              <span>
                {label}: <a href={url} target="_blank" rel="noreferrer" className="underline hover:opacity-80">{url}</a>
              </span>,
              20
            )
          }
          return createItem(line, 20)
        })
      }

      case "banner": {
        return BOOT_LINES.map((content, idx) => ({
          id: `banner-${idx}-${Date.now()}`,
          type: "output" as const,
          content,
          delay: 40
        }))
      }

      case "history": {
        return history.map((cmd, idx) =>
          createItem(`  ${idx + 1}  ${cmd}`, 20)
        )
      }

      default: {
        return [
          createItem(`bash: '${originalCommand}': command not found`, 20),
          createItem("Type 'help' to see available commands.", 20)
        ]
      }
    }
  }

  const handleCommandSubmit = (commandText: string) => {
    const cleanCommand = commandText.trim()
    const lowerCommand = cleanCommand.toLowerCase()

    // 1. Append the command prompt row to lines immediately
    const promptId = `prompt-${Date.now()}`
    setLines(prev => [
      ...prev,
      {
        id: promptId,
        type: "input",
        content: `mohit@portfolio:~$ ${cleanCommand}`
      }
    ])

    // 2. Clear input state
    setInputVal("")

    // 3. Add command to history if not empty
    if (cleanCommand) {
      setHistory(prev => {
        const updated = [...prev, cleanCommand]
        if (updated.length > 50) {
          return updated.slice(updated.length - 50)
        }
        return updated
      })
      setHistoryIndex(-1)
    }

    // 4. Handle state-based actions like clear or resume
    if (lowerCommand === "clear") {
      setLines([])
      setQueue([])
      return
    }

    if (lowerCommand === "resume") {
      const resumeLines = [
        {
          id: `resume-1-${Date.now()}`,
          type: "output" as const,
          content: "Opening resume...",
          delay: 20
        },
        {
          id: `resume-2-${Date.now()}`,
          type: "output" as const,
          content: "  → Launching resume in a new tab...",
          delay: 20
        },
        {
          id: `resume-3-${Date.now()}`,
          type: "output" as const,
          content: (
            <span>
              {"  → URL: "}<a
                href="https://drive.google.com/file/d/1H29IUqUObwMS7R22buXsEDwx_I_6pKNR/view?usp=sharing"
                target="_blank"
                rel="noreferrer"
                className="underline hover:opacity-80"
              >
                mohitpatni.me/resume
              </a>
            </span>
          ),
          delay: 20
        }
      ]
      setQueue(prev => [...prev, ...resumeLines])

      setTimeout(() => {
        window.open(
          "https://drive.google.com/file/d/1H29IUqUObwMS7R22buXsEDwx_I_6pKNR/view?usp=sharing",
          "_blank"
        )
      }, 600)
      return
    }

    // 5. Generate other command outputs and queue them
    const outputs = getCommandOutput(lowerCommand, cleanCommand)
    setQueue(prev => [...prev, ...outputs])
  }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (isTyping) {
      if (e.key === "Enter" || e.key === "ArrowUp" || e.key === "ArrowDown") {
        e.preventDefault()
      }
      return
    }

    if (e.key === "Enter") {
      handleCommandSubmit(inputVal)
    } else if (e.key === "ArrowUp") {
      e.preventDefault()
      if (history.length === 0) return

      let nextIndex = historyIndex === -1 ? history.length - 1 : historyIndex - 1
      if (nextIndex < 0) {
        nextIndex = 0
      }
      setHistoryIndex(nextIndex)
      setInputVal(history[nextIndex])
    } else if (e.key === "ArrowDown") {
      e.preventDefault()
      if (history.length === 0) return

      let nextIndex = historyIndex + 1
      if (nextIndex >= history.length) {
        setHistoryIndex(-1)
        setInputVal("")
      } else {
        setHistoryIndex(nextIndex)
        setInputVal(history[nextIndex])
      }
    }
  }

  return (
    <main
      onClick={focusInput}
      className="min-h-screen w-full bg-[#0a0a0a] flex items-center justify-center p-4 md:p-8 font-mono select-none overflow-hidden relative"
    >
      {/* JetBrains Mono Font Injected */}
      <style
        dangerouslySetInnerHTML={{
          __html: `
            @import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;700&display=swap');
            
            body {
              font-family: 'JetBrains Mono', monospace !important;
              background-color: #0a0a0a !important;
              margin: 0;
              padding: 0;
              overflow: hidden;
            }

            .scanlines {
              position: absolute;
              top: 0;
              left: 0;
              width: 100%;
              height: 100%;
              background: repeating-linear-gradient(
                rgba(0, 0, 0, 0) 0px,
                rgba(0, 0, 0, 0) 1px,
                rgba(0, 255, 136, 0.02) 2px,
                rgba(0, 255, 136, 0.02) 3px
              );
              pointer-events: none;
              z-index: 10;
            }

            .crt-glow {
              position: absolute;
              top: 0;
              left: 0;
              width: 100%;
              height: 100%;
              box-shadow: inset 0 0 60px rgba(0, 255, 136, 0.04);
              background: radial-gradient(
                circle at center,
                transparent 55%,
                rgba(0, 0, 0, 0.3) 100%
              );
              pointer-events: none;
              z-index: 11;
            }

            .terminal-scrollbar::-webkit-scrollbar {
              width: 6px;
              height: 6px;
            }

            .terminal-scrollbar::-webkit-scrollbar-track {
              background: #0d0d0d;
            }

            .terminal-scrollbar::-webkit-scrollbar-thumb {
              background: #2a2a2a;
              border-radius: 3px;
            }

            .terminal-scrollbar::-webkit-scrollbar-thumb:hover {
              background: #00ff88;
            }
          `
        }}
      />

      {/* Center Terminal Window */}
      <div className="relative w-full max-w-[860px] h-[calc(100vh-2rem)] md:h-[calc(100vh-4rem)] flex flex-col rounded-lg border border-[#2a2a2a] bg-[#0d0d0d] shadow-[0_0_50px_rgba(0,255,100,0.07)] overflow-hidden">
        {/* CRT Scanline and Vignette overlays */}
        <div className="scanlines" />
        <div className="crt-glow" />

        {/* Fake macOS Title Bar */}
        <div className="flex items-center h-10 px-4 border-b border-[#2a2a2a] bg-[#161616] select-none shrink-0 relative z-20">
          <div className="flex gap-2">
            <div className="w-3.5 h-3.5 rounded-full bg-[#2a2a2a]" />
            <div className="w-3.5 h-3.5 rounded-full bg-[#2a2a2a]" />
            <div className="w-3.5 h-3.5 rounded-full bg-[#2a2a2a]" />
          </div>
          <div className="absolute inset-0 flex items-center justify-center text-xs text-[#00ff88] font-semibold font-mono pointer-events-none">
            mohit@portfolio ~ 
          </div>
        </div>

        {/* Terminal Body Container */}
        <div
          ref={terminalBodyRef}
          className="flex-1 p-4 md:p-6 overflow-y-auto terminal-scrollbar font-mono text-sm leading-relaxed text-[#00ff88] select-text relative z-10"
        >
          {/* Output Lines */}
          <div className="space-y-1 whitespace-pre-wrap">
            {lines.map(line => (
              <div key={line.id} className="min-h-[1.25rem]">
                {line.content}
              </div>
            ))}
          </div>

          {/* Active Input Line */}
          <div className="flex items-center text-sm font-mono mt-2 w-full">
            <span className="shrink-0 select-none">mohit@portfolio:~$</span>
            <input
              ref={inputRef}
              type="text"
              value={inputVal}
              onChange={e => setInputVal(e.target.value)}
              onKeyDown={handleKeyDown}
              className="flex-1 bg-transparent text-[#00ff88] font-mono outline-none border-none p-0 ml-2 focus:ring-0 select-text"
              autoFocus
              style={{ caretColor: "#00ff88" }}
            />
          </div>
        </div>
      </div>
    </main>
  )
}
