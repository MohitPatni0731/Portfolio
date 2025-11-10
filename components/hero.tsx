"use client"

import { useState, useEffect } from "react"
import { ArrowRight, Download, Github, Linkedin, Mail, Sparkles, Cpu, Globe } from "lucide-react"
import { Button } from "@/components/ui/button"
import { gradientText } from "@/lib/utils"

const highlights = [
  {
    icon: Sparkles,
    title: "Everloom Founder",
    description: "Designing an AI \"second brain\" that captures and replays digital memories with context"
  },
  {
    icon: Cpu,
    title: "30+ Years of Data",
    description: "Built Titan Bird Trails by blending geospatial ML, weather APIs, and Gemini"
  },
  {
    icon: Globe,
    title: "Global Collaboration",
    description: "From India to California, leading interdisciplinary teams across research & product"
  }
]

export function Hero() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 120)
    return () => clearTimeout(timer)
  }, [])

  return (
    <section className="relative overflow-hidden bg-radial-soft text-white">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 left-1/3 h-72 w-72 rounded-full bg-primary/20 blur-3xl" />
        <div className="absolute top-40 right-0 h-96 w-96 rounded-full bg-secondary/25 blur-[140px]" />
        <div className="absolute bottom-10 left-12 h-56 w-56 rounded-full bg-blue-500/15 blur-3xl" />
      </div>

      <div className="relative mx-auto flex min-h-screen max-w-6xl flex-col justify-center px-6 py-[var(--section-padding)]">
        <div className="glass-panel relative overflow-hidden rounded-[32px] border border-white/10 p-10 md:p-14">
          <div className="pointer-events-none absolute inset-0 opacity-40">
            <div className="absolute -top-20 right-10 h-44 w-44 rounded-full bg-purple-500/40 blur-3xl" />
            <div className="absolute bottom-0 left-0 h-32 w-32 rounded-full bg-cyan-500/40 blur-3xl" />
          </div>

          <div className="relative grid gap-12 md:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)]">
            <div className="space-y-10">
              <div className={`inline-flex items-center gap-3 rounded-full border border-white/15 bg-white/5 px-5 py-2 text-sm uppercase tracking-[0.3em] text-white/70 ${
                isVisible ? "fade-in-up" : "opacity-0"
              }`}
              >
                Mohit Patni
              </div>

              <div className="space-y-6">
                <h1
                  className={`${
                    isVisible ? "fade-in-up" : "opacity-0"
                  } text-balance font-manrope text-[var(--font-size-6xl)] leading-[1.05]`}
                >
                  <span className={gradientText("inline-block drop-shadow-[0_18px_45px_rgba(53,97,255,0.35)]")}>Crafting human-centered AI experiences that feel intuitive, personal, and alive.</span>
                </h1>
                <p
                  className={`${
                    isVisible ? "fade-in-up" : "opacity-0"
                  } delay-150 max-w-2xl text-lg leading-relaxed text-white/70`}
                >
                  I'm a Machine Learning Research Scholar, data analyst, and founder building products that merge
                  storytelling with machine intelligence. From behavioral AI companions to campus-scale geospatial
                  models, I'm obsessed with the moments where technology feels magical.
                </p>
              </div>

              <div className={`${isVisible ? "fade-in-up" : "opacity-0"} delay-300 space-y-6`}
              >
                <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
                  <Button
                    size="lg"
                    className="group relative inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-sky-500 px-8 py-4 text-base font-semibold text-white shadow-[0_18px_45px_rgba(88,82,197,0.45)] transition-transform duration-300 hover:scale-[1.02]"
                    asChild
                  >
                    <a href="#contact">
                      Let's Collaborate
                      <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </a>
                  </Button>
                  <Button
                    variant="outline"
                    size="lg"
                    className="inline-flex items-center justify-center gap-2 rounded-full border-white/30 bg-white/5 px-8 py-4 text-base font-semibold text-white transition-all duration-300 hover:border-white/60 hover:bg-white/10"
                    asChild
                  >
                    <a
                      href="https://drive.google.com/file/d/1H29IUqUObwMS7R22buXsEDwx_I_6pKNR/view?usp=sharing"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <Download className="h-4 w-4" />
                      Resume
                    </a>
                  </Button>
                </div>

                <div className="flex items-center gap-5">
                  {[
                    { href: "https://www.linkedin.com/in/mohitpatni1/", icon: Linkedin, label: "LinkedIn" },
                    { href: "https://github.com/MohitPatni0731", icon: Github, label: "GitHub" },
                    { href: "mailto:mohitpatni@csu.fullerton.edu", icon: Mail, label: "Email" },
                  ].map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      target={social.label !== "Email" ? "_blank" : undefined}
                      className="glow-border inline-flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/10 text-white transition duration-300 hover:bg-white/20"
                      rel={social.label !== "Email" ? "noreferrer" : undefined}
                      aria-label={social.label}
                    >
                      <social.icon className="h-5 w-5" />
                    </a>
                  ))}
                </div>
              </div>
            </div>

            <div className="relative space-y-5">
              <div className="pointer-events-none absolute -top-10 right-0 h-40 w-40 rounded-full bg-white/10 blur-3xl" />

              <div className="clean-card relative w-full overflow-hidden rounded-[28px] border border-white/10 p-8">
                <div className="absolute inset-0 bg-gradient-to-br from-white/2 via-white/4 to-white/1" />
                <div className="relative space-y-6">
                  <p className="text-sm uppercase tracking-[0.2em] text-white/60">What I’m focused on</p>
                  <ul className="space-y-5 text-sm text-white/80">
                    {highlights.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-4">
                        <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-2xl bg-white/10 text-white">
                          <item.icon className="h-5 w-5" />
                        </div>
                        <div className="space-y-1.5">
                          <p className="text-sm font-semibold text-white">{item.title}</p>
                          <p className="text-xs leading-relaxed text-white/70">{item.description}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-3">
                {[
                  { label: "AI Products", value: "8+", caption: "deployed across research & startups" },
                  { label: "Users Engaged", value: "100+", caption: "on Titan Bird Trails launch" },
                  { label: "Collaborations", value: "5", caption: "interdisciplinary teams led" }
                ].map((stat, idx) => (
                  <div key={idx} className="rounded-2xl border border-white/10 bg-white/5 px-5 py-5 text-white/80">
                    <p className="text-xs uppercase tracking-[0.25em] text-white/50">{stat.label}</p>
                    <p className="mt-2 text-2xl font-semibold text-white">{stat.value}</p>
                    <p className="text-xs text-white/60">{stat.caption}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
