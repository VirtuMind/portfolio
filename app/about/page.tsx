"use client"

import { useEffect, useRef } from "react"
import { Header } from "@/components/header"
import { BackLink } from "@/components/back-link"
import { useLanguage } from "@/lib/language-provider"
import { getTranslations } from "@/lib/i18n"

export default function AboutPage() {
  const { language } = useLanguage()
  const t = getTranslations(language)
  const contentRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-slide-up")
          }
        })
      },
      { threshold: 0.1 },
    )

    if (contentRef.current) {
      observer.observe(contentRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <div className="min-h-screen">
      <Header />
      <main className="container mx-auto px-4 pt-32 pb-16">
        <div className="max-w-3xl mx-auto">
          <BackLink />

          {/* Name */}
          <h1 className="font-mono text-5xl md:text-6xl font-bold mb-12 text-balance">Younes Khoubaz</h1>

          {/* About Content with Animation */}
          <div ref={contentRef} className="opacity-0 translate-y-8 transition-all duration-1000 ease-out space-y-6">
            <div className="space-y-6 text-lg leading-relaxed">
              <p className="font-medium text-xl">{t.about.greeting}</p>

              <p>{t.about.paragraph1}</p>

              <p>{t.about.paragraph2}</p>
            </div>

            {/* Contact Information */}
            <div className="mt-12 space-y-4 text-lg">
              <p>
                {t.about.findMe}{" "}
                <a
                  href="https://x.com/VirtuoMind"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent hover:underline font-medium transition-colors cursor-pointer"
                >
                  @VirtuoMind
                </a>
              </p>

              <p>
                {t.about.email}{" "}
                <a
                  href="mailto:younes.khoubaz@gmail.com"
                  className="text-accent hover:underline font-medium transition-colors cursor-pointer"
                >
                  younes.khoubaz@gmail.com
                </a>
              </p>
            </div>
          </div>
        </div>
      </main>

      <style jsx>{`
        @keyframes slideUp {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-slide-up {
          animation: slideUp 1s ease-out forwards;
        }
      `}</style>
    </div>
  )
}
