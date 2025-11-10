"use client"

import { useState } from "react"
import { Message } from "./message"
import { cn } from "@/lib/utils"

interface ChatMessage {
  id: string
  content: string
  isUser: boolean
  timestamp: Date
}

interface Prompt {
  id: string
  label: string
  question: string
  answer: string
}

const PROMPTS: Prompt[] = [
  {
    id: "about",
    label: "Know about me",
    question: "Can you introduce yourself?",
    answer: `Absolutely! I'm Mohit Patni, a Machine Learning Research Scholar at California State University, Fullerton where I blend data science with environmental anthropology to build thoughtful AI experiences. I previously completed my B.Tech in Information Technology in India before heading to the US for my master's.

Right now I split my time between:
- Everloom, the AI "second brain" startup I'm building to capture and replay your digital memories with context.
- ML research with Prof. Sarah G. Grant, where we launched Titan Bird Trails, an AI birding platform powered by 30+ years of eBird data.
- A data analyst role at CSUF studying how CEO traits influence company outcomes using Python, SQL, and BI tooling.

Across roles I'm focused on turning messy, real-world data into intuitive, human experiences.`
  },
  {
    id: "fit",
    label: "Why I'm a good fit",
    question: "Why would you be a great fit for our team?",
    answer: `Three reasons stand out for me:
1. Full-stack execution: I design, ship, and iterate fast, whether it's a live AI product (Everloom) or a research-backed web app (Titan Bird Trails).
2. Applied ML craft: I work end-to-end, from data pipelines to model deployment. Recent projects mix Gemini, TensorFlow, geospatial APIs, and behavioral analytics.
3. Collaborative energy: I've led cross-functional efforts with researchers, designers, and founders. I love turning ambiguous ideas into tangible results and communicating insights clearly.

If you're building products at the intersection of AI, UX, and data storytelling, I'm already thinking about the roadmap.`
  },
  {
    id: "projects",
    label: "Signature projects",
    question: "What projects should I explore?",
    answer: `Here are the two you'll enjoy exploring first:
- Titan Bird Trails -> https://birding-csuf.vercel.app/
  * AI-guided campus birding with species predictions using weather, location, and historical sightings.
  * Built with React, Tailwind, Gemini API, and Python ML pipelines.

- AI Fire Prediction System -> https://ignis-ai-frontend.onrender.com/
  * Full-stack platform predicting wildfire spread using satellite feeds, weather data, and advanced ML models.
  * Built with React, Express, MongoDB, TensorFlow, and Mapbox visualizations.

Both highlight how I design delightful interfaces around complex models.`
  },
  {
    id: "contact",
    label: "How to reach me",
    question: "How can people get in touch with you?",
    answer: `Here is the simplest way to connect:
- Email: mohitpatni@csu.fullerton.edu
- LinkedIn: https://www.linkedin.com/in/mohitpatni1/
- GitHub: https://github.com/MohitPatni0731

Ping me anytime if you want to jam on ML, product strategy, or new collaborations.`
  }
]

export function ChatArea() {
  const [messages, setMessages] = useState<ChatMessage[]>([{
    id: "intro",
    content: "Hi, I'm Mohit. Choose any quick question below and I'll open up a tailored response right inside this chat.",
    isUser: false,
    timestamp: new Date()
  }])
  const [answeredPrompts, setAnsweredPrompts] = useState<string[]>([])

  const handlePromptClick = (prompt: Prompt) => {
    if (answeredPrompts.includes(prompt.id)) return

    const now = new Date()
    const userMessage: ChatMessage = {
      id: `user-${prompt.id}-${now.getTime()}`,
      content: prompt.question,
      isUser: true,
      timestamp: now
    }

    const responseMessage: ChatMessage = {
      id: `response-${prompt.id}-${now.getTime()}`,
      content: prompt.answer,
      isUser: false,
      timestamp: new Date(now.getTime() + 1)
    }

    setMessages(prev => [...prev, userMessage, responseMessage])
    setAnsweredPrompts(prev => [...prev, prompt.id])
  }

  return (
    <div className="relative mx-auto flex w-full max-w-5xl flex-col gap-10">
      <header className="text-center">
        <span className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/5 px-4 py-1 text-xs uppercase tracking-[0.3em] text-white/60">
          Portfolio Concierge
        </span>
        <h2 className="mt-6 text-balance text-3xl font-semibold text-white md:text-4xl">
          Ask me anything about my journey and I will respond instantly.
        </h2>
        <p className="mt-4 text-base text-white/60 md:text-lg">
          These prompts highlight how I build, collaborate, and communicate. Tap one or stack a few to explore the story.
        </p>
      </header>

      <div className="glass-panel relative flex min-h-[540px] flex-col overflow-hidden rounded-[32px] border border-white/10">
        <div className="pointer-events-none absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-white/10 via-white/0 to-transparent" />

        <div className="relative flex-1 overflow-y-auto px-5 py-7 sm:px-10 sm:py-10">
          <div className="space-y-6">
            {messages.map((message) => (
              <Message key={message.id} message={message} />
            ))}
          </div>
        </div>

        <div className="relative border-t border-white/10 bg-white/5 px-5 py-6 sm:px-10">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-white/60">Quick questions</p>
          <div className="mt-4 flex flex-wrap gap-3">
            {PROMPTS.map(prompt => {
              const isAnswered = answeredPrompts.includes(prompt.id)
              return (
                <button
                  key={prompt.id}
                  onClick={() => handlePromptClick(prompt)}
                  disabled={isAnswered}
                  className={cn(
                    "group relative overflow-hidden rounded-full border px-5 py-2.5 text-sm font-medium transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-[rgba(139,92,246,0.45)] focus-visible:ring-offset-2 focus-visible:ring-offset-transparent",
                    isAnswered
                      ? "cursor-default border-white/15 bg-white/10 text-white/45"
                      : "border-white/15 bg-white/10 text-white hover:scale-[1.03] hover:border-white/25 hover:text-white"
                  )}
                >
                  {!isAnswered && (
                    <span
                      className="absolute inset-0 -z-10 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                      style={{
                        background:
                          "linear-gradient(120deg, rgba(139,92,246,0.35) 0%, rgba(56,189,248,0.25) 50%, rgba(255,255,255,0.12) 100%)"
                      }}
                    />
                  )}
                  {prompt.label}
                </button>
              )
            })}
          </div>
          <p className="mt-4 text-xs text-white/60">
            Each bubble expands the conversation right above, perfect for sharing with recruiters or collaborators.
          </p>
        </div>
      </div>
    </div>
  )
} 