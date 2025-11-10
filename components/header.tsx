"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X, ArrowUpRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { gradientText } from "@/lib/utils"

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 60)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = [
    { href: "#about", label: "About" },
    { href: "#experience", label: "Experience" },
    { href: "#projects", label: "Projects" },
    { href: "#skills", label: "Skills" },
    { href: "#concierge", label: "Concierge" },
    { href: "#contact", label: "Contact" },
  ]

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        isScrolled
          ? "border-b border-white/10 bg-[rgba(10,16,32,0.85)] shadow-[0_18px_45px_rgba(4,7,17,0.45)] backdrop-blur-xl"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 sm:px-8 lg:px-12">
        <Link href="/" className="flex items-center gap-3">
          <span className="relative inline-flex items-center justify-center rounded-2xl border border-white/15 bg-white/10 px-3 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-white/70">
            MP
          </span>
          <span className={gradientText("hidden text-sm font-semibold text-white/90 sm:inline")}>Mohit Patni</span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-xs font-semibold uppercase tracking-[0.25em] text-white/60 transition hover:text-white"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:block">
          <Button
            asChild
            size="sm"
            className="rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-sky-500 px-5 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-white shadow-[0_14px_30px_rgba(88,82,197,0.4)] hover:scale-[1.03]"
          >
            <a
              href="https://drive.google.com/file/d/1H29IUqUObwMS7R22buXsEDwx_I_6pKNR/view?usp=sharing"
              target="_blank"
              rel="noreferrer"
            >
              Resume
              <ArrowUpRight className="ml-2 h-3 w-3" />
            </a>
          </Button>
        </div>

        <Button
          variant="ghost"
          size="icon"
          className="text-white md:hidden"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle navigation"
        >
          {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </Button>
      </div>

      {isMobileMenuOpen && (
        <div className="border-t border-white/10 bg-[rgba(10,16,32,0.95)] backdrop-blur-xl md:hidden">
          <nav className="flex flex-col space-y-2 px-6 py-4 text-sm">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-full px-4 py-2 text-white/70 transition hover:bg-white/10 hover:text-white"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Button
              asChild
              size="sm"
              className="mt-2 rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-sky-500 text-xs font-semibold uppercase tracking-[0.3em] text-white"
            >
              <a
                href="https://drive.google.com/file/d/1H29IUqUObwMS7R22buXsEDwx_I_6pKNR/view?usp=sharing"
                target="_blank"
                rel="noreferrer"
              >
                Resume
                <ArrowUpRight className="ml-2 h-3 w-3" />
              </a>
            </Button>
          </nav>
        </div>
      )}
    </header>
  )
}
