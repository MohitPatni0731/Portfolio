"use client"

import { useEffect, useRef, useState } from "react"
import { Mail, Phone, MapPin, Linkedin, Github } from "lucide-react"
import { gradientText, softGlowShadow } from "@/lib/utils"

export function Contact() {
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

  const contactMethods = [
    {
      icon: Mail,
      title: "Email",
      value: "mohitpatni@csu.fullerton.edu",
      href: "mailto:mohitpatni@csu.fullerton.edu",
    },
    {
      icon: Phone,
      title: "Phone",
      value: "+1 (657) 751-9138",
      href: "tel:+16577519138",
    },
    {
      icon: MapPin,
      title: "Location",
      value: "Fullerton, California, USA",
    },
  ]

  const socials = [
    { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/mohitpatni1/" },
    { icon: Github, label: "GitHub", href: "https://github.com/MohitPatni0731" },
  ]

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="relative overflow-hidden py-[var(--section-padding)]"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[10%] top-[20%] h-96 w-96 rounded-full bg-secondary/25 blur-[160px]" />
        <div className="absolute right-[-10%] bottom-[15%] h-80 w-80 rounded-full bg-primary/25 blur-[140px]" />
      </div>

      <div className="relative mx-auto max-w-5xl px-6 sm:px-8 lg:px-12">
        <div className={`scroll-reveal ${isVisible ? "revealed" : ""}`}>
          <div className="text-center">
            <span className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/5 px-4 py-1 text-xs uppercase tracking-[0.3em] text-white/60">
              Contact
            </span>
            <h2 className={gradientText("mt-6 text-3xl font-semibold md:text-5xl")}>Let's work on your next intelligent product</h2>
            <p className="mx-auto mt-4 max-w-2xl text-base text-white/65 md:text-lg">
              Reach out for collaborations, speaking, or just to swap notes on human-centered machine learning.
            </p>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {contactMethods.map((item, index) => (
              <div
                key={index}
                className={`relative overflow-hidden rounded-[28px] border border-white/10 bg-white/6 p-8 text-center text-white ${softGlowShadow(
                  "hover:-translate-y-1 transition-all duration-300"
                )}`}
              >
                <div className="absolute inset-0 opacity-0 transition-opacity duration-500 hover:opacity-100"
                  style={{ background: "radial-gradient(130% 120% at 15% 0%, rgba(99,102,241,0.18), transparent 55%)" }}
                />
                <div className="relative space-y-3">
                  <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl border border-white/15 bg-white/10 text-white">
                    <item.icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                  {item.href ? (
                    <a
                      href={item.href}
                      className="block text-sm text-white/70 transition hover:text-white"
                    >
                      {item.value}
                    </a>
                  ) : (
                    <p className="text-sm text-white/70">{item.value}</p>
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            {socials.map((item, index) => (
              <a
                key={index}
                href={item.href}
                target="_blank"
                rel="noreferrer"
                className={`inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm font-medium text-white/70 transition hover:border-white/30 hover:text-white ${softGlowShadow()}`}
              >
                <item.icon className="h-4 w-4" />
                {item.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
