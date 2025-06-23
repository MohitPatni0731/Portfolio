"use client"

import { useEffect, useRef, useState } from "react"
import { GraduationCap, MapPin, Calendar } from "lucide-react"

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
    <section id="about" ref={sectionRef} className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`scroll-reveal ${isVisible ? "revealed" : ""}`}>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#111111] mb-6 font-manrope">About Me</h2>
            <div className="w-16 h-0.5 bg-[#111111] mx-auto" />
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <p className="text-lg text-[#525252] leading-relaxed">
                I'm a passionate Machine Learning Research Scholar and Data Analyst currently pursuing my Master's in
                Computer Science at California State University Fullerton.
              </p>
              <p className="text-lg text-[#525252] leading-relaxed">
                My research focuses on applying advanced machine learning algorithms to real-world problems, from
                identifying bird species through audio analysis to analyzing CEO characteristics and firm performance
                patterns.
              </p>
              <p className="text-lg text-[#525252] leading-relaxed">
                With experience spanning network security, full-stack development, and data visualization, I bring a
                comprehensive approach to solving complex technical challenges.
              </p>
            </div>

            <div className="space-y-6">
              <div className="clean-card p-8 hover-lift">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 border border-[#E5E5E5] flex items-center justify-center">
                    <GraduationCap className="h-6 w-6 text-[#111111]" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[#111111] mb-2 font-manrope">Current Education</h3>
                    <p className="text-[#525252] font-medium">Master of Science in Computer Science</p>
                    <p className="text-[#525252]">California State University Fullerton</p>
                    <div className="flex items-center space-x-4 mt-2 text-sm text-[#525252]">
                      <span className="flex items-center">
                        <Calendar className="h-4 w-4 mr-1" />
                        Aug 2024 - June 2026
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="clean-card p-8 hover-lift">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 border border-[#E5E5E5] flex items-center justify-center">
                    <GraduationCap className="h-6 w-6 text-[#111111]" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[#111111] mb-2 font-manrope">Previous Education</h3>
                    <p className="text-[#525252] font-medium">Bachelor of Technology in Information Technology</p>
                    <p className="text-[#525252]">Indore Institute of Science and Technology</p>
                    <div className="flex items-center space-x-4 mt-2 text-sm text-[#525252]">
                      <span className="flex items-center">
                        <Calendar className="h-4 w-4 mr-1" />
                        Sep 2020 - June 2024
                      </span>
                      <span className="flex items-center">
                        <MapPin className="h-4 w-4 mr-1" />
                        Indore, India
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
