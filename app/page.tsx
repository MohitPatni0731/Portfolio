import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Experience } from "@/components/experience"
import { Projects } from "@/components/projects"
import { Skills } from "@/components/skills"
import { ChatInterface } from "@/components/chat-interface"
import { Contact } from "@/components/contact"

export default function Home() {
  return (
    <>
      <Header />
      <main className="relative flex flex-col gap-[var(--section-padding)] pt-24">
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <section id="concierge" className="relative overflow-hidden py-[var(--section-padding)]">
          <ChatInterface />
        </section>
        <Contact />
      </main>
    </>
  )
}
