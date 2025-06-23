"use client"

import { useEffect, useRef, useState } from "react"
import { Mail, Phone, MapPin, Linkedin, Github } from "lucide-react"

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

  return (
    <section id="contact" ref={sectionRef} className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`scroll-reveal ${isVisible ? "revealed" : ""}`}>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#111111] mb-6 font-manrope">
              Get In Touch
            </h2>
            <div className="w-16 h-0.5 bg-[#111111] mx-auto mb-6" />
            <p className="text-xl text-[#525252] max-w-2xl mx-auto">
              Let's discuss opportunities in machine learning research, data analysis, or innovative tech projects.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="clean-card p-8 hover-lift text-center">
                <div className="w-12 h-12 border border-[#E5E5E5] flex items-center justify-center mx-auto mb-4">
                  <Mail className="h-6 w-6 text-[#111111]" />
                </div>
                <h3 className="text-xl font-bold text-[#111111] mb-2 font-manrope">Email</h3>
                <a
                  href="mailto:mohitpatni@csu.fullerton.edu"
                  className="text-[#525252] hover:text-[#111111] transition-colors duration-300"
                >
                  mohitpatni@csu.fullerton.edu
                </a>
              </div>

              <div className="clean-card p-8 hover-lift text-center">
                <div className="w-12 h-12 border border-[#E5E5E5] flex items-center justify-center mx-auto mb-4">
                  <Phone className="h-6 w-6 text-[#111111]" />
                </div>
                <h3 className="text-xl font-bold text-[#111111] mb-2 font-manrope">Phone</h3>
                <a
                  href="tel:+16577519138"
                  className="text-[#525252] hover:text-[#111111] transition-colors duration-300"
                >
                  +1 (657) 751-9138
                </a>
              </div>

              <div className="clean-card p-8 hover-lift text-center">
                <div className="w-12 h-12 border border-[#E5E5E5] flex items-center justify-center mx-auto mb-4">
                  <MapPin className="h-6 w-6 text-[#111111]" />
                </div>
                <h3 className="text-xl font-bold text-[#111111] mb-2 font-manrope">Location</h3>
                <p className="text-[#525252]">Fullerton, California, USA</p>
              </div>
            </div>

            <div className="flex justify-center space-x-6">
              <a
                href="https://www.linkedin.com/in/mohitpatni1/"
                target="_blank"
                className="clean-card p-6 hover-lift flex items-center space-x-3 hover:border-[#111111] group"
                rel="noreferrer"
              >
                <Linkedin className="h-5 w-5 text-[#111111]" />
                <span className="text-[#111111] font-medium">LinkedIn</span>
              </a>
              <a
                href="https://github.com/MohitPatni0731"
                target="_blank"
                className="clean-card p-6 hover-lift flex items-center space-x-3 hover:border-[#111111] group"
                rel="noreferrer"
              >
                <Github className="h-5 w-5 text-[#111111]" />
                <span className="text-[#111111] font-medium">GitHub</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
