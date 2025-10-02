"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Github, Linkedin, Twitter } from "lucide-react"
import { AnimatedLogo } from "./animated-logo"
import { ThemeToggle } from "./theme-toggle"
import { LanguageToggle } from "./language-toggle"
import { useLanguage } from "@/lib/language-provider"
import { getTranslations } from "@/lib/i18n"

const socialLinks = [
  { icon: Github, href: "https://github.com", label: "GitHub" },
  { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
  { icon: Twitter, href: "https://x.com/VirtuoMind", label: "X (Twitter)" },
]

export function Header() {
  const pathname = usePathname()
  const { language } = useLanguage()
  const t = getTranslations(language)

  const navLinks = [
    { href: "/about", label: t.nav.about },
    { href: "/projects", label: t.nav.projects },
    { href: "/resume", label: t.nav.resume },
    { href: "/history", label: t.nav.history },
  ]

  return (
    <>
      <header className="border-b border-border/40">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link href="/about" className="flex items-center">
              <AnimatedLogo />
            </Link>

            {/* Navigation and Controls */}
            <div className="flex items-center gap-6">
              <nav className="hidden md:flex items-center gap-1">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`px-3 py-2 cursor-pointer relative group transition-colors ${
                      pathname === link.href ? "text-accent" : "hover:text-accent"
                    }`}
                  >
                    {link.label}
                    <span
                      className={`absolute bottom-1 left-1/2 -translate-x-1/2 h-0.5 bg-accent transition-all ${
                        pathname === link.href ? "w-0" : "w-0 group-hover:w-3/4"
                      }`}
                    />
                  </Link>
                ))}
              </nav>

              <div className="hidden md:flex items-center gap-1">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="p-2 cursor-pointer transition-colors hover:text-accent"
                  >
                    <social.icon className="h-5 w-5" />
                  </a>
                ))}
              </div>

              <div className="flex items-center gap-2 ml-2 pl-2 border-l border-border">
                <LanguageToggle />
                <ThemeToggle />
              </div>
            </div>
          </div>
        </div>
      </header>

      <nav className="md:hidden fixed bottom-4 left-4 right-4 z-50 glass rounded-2xl shadow-lg">
        <div className="flex items-center justify-around h-16 px-2">
          {navLinks.map((link) => {
            const Icon =
              link.href === "/about"
                ? () => (
                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                      />
                    </svg>
                  )
                : link.href === "/projects"
                  ? () => (
                      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
                        />
                      </svg>
                    )
                  : link.href === "/resume"
                    ? () => (
                        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                          />
                        </svg>
                      )
                    : () => (
                        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                      )

            return (
              <Link
                key={link.href}
                href={link.href}
                className={`p-3 cursor-pointer transition-colors rounded-xl ${
                  pathname === link.href ? "text-accent bg-accent/10" : "hover:text-accent"
                }`}
                aria-label={link.label}
              >
                <Icon />
              </Link>
            )
          })}
        </div>
      </nav>
    </>
  )
}
