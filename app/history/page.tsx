"use client";

import { BackLink } from "@/components/back-link";
import { TimelineEvent } from "@/components/timeline-event";
import { useLanguage } from "@/lib/language-provider";
import { getTranslations } from "@/lib/i18n";

export default function HistoryPage() {
  const { language } = useLanguage();
  const t = getTranslations(language);

  return (
    <div className="container max-w-3xl mx-auto">
      <BackLink />
      <h1 className="font-mono text-4xl mb-12">{t.history.title}</h1>
      {/* Timeline */}
      <div className="relative opacity-0 animate-slide-up">
        {[...t.history.events].reverse().map((event) => (
          <TimelineEvent
            key={event.id}
            title={event.title}
            dateRange={event.dateRange}
            description={event.description}
            location={event.location}
            type={event.type}
          />
        ))}
      </div>
    </div>
  );
}
