import { BackLink } from "@/components/back-link";
import { TimelineEvent } from "@/components/timeline-event";
import { getLanguage } from "@/lib/cookies";
import { getTranslations } from "@/lib/translations";

export default async function HistoryPage() {
  const language = await getLanguage();
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
