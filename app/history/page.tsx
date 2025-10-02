"use client"

import { Header } from "@/components/header"
import { BackLink } from "@/components/back-link"
import { TimelineEvent } from "@/components/timeline-event"
import { useLanguage } from "@/lib/language-provider"
import { getTranslations } from "@/lib/i18n"
import { historyEvents } from "@/lib/history-data"

export default function HistoryPage() {
  const { language } = useLanguage()
  const t = getTranslations(language)

  const getTypeLabel = (type: string) => {
    switch (type) {
      case "work":
        return t.history.work
      case "education":
        return t.history.education
      case "certification":
        return t.history.certification
      default:
        return type
    }
  }

  return (
    <div className="min-h-screen">
      <Header />
      <main className="container mx-auto px-4 pt-32 pb-16">
        <div className="max-w-4xl mx-auto">
          <BackLink />

          <h1 className="font-mono text-4xl md:text-5xl font-bold mb-12">{t.history.title}</h1>

          {/* Timeline */}
          <div className="relative">
            {historyEvents.map((event) => (
              <TimelineEvent
                key={event.id}
                title={event.title}
                dateRange={event.dateRange}
                description={event.description}
                type={event.type}
                typeLabel={getTypeLabel(event.type)}
              />
            ))}
          </div>
        </div>
      </main>
    </div>
  )
}
