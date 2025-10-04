"use client";

import { Calendar, MapPin } from "lucide-react";
import { Badge } from "@/components/ui/badge";

interface TimelineEventProps {
  title: string;
  dateRange: string;
  location: string;
  description: string;
  type: string;
}

export function TimelineEvent({
  title,
  dateRange,
  description,
  location,
  type,
}: TimelineEventProps) {
  return (
    <div className="relative pl-8 pb-12 last:pb-0 group">
      {/* Timeline Line */}
      <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary to-primary/20 group-last:hidden" />

      {/* Timeline Dot with glow effect */}
      <div className="absolute left-0 top-2 -translate-x-1/2 z-10">
        <div className="w-4 h-4 rounded-full bg-primary border-4 border-background shadow-lg shadow-primary/50 group-hover:shadow-primary group-hover:scale-125 transition-all duration-300" />
      </div>

      {/* Content Card */}
      <div className="relative glass rounded-xl p-6 border border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:shadow-primary/20 group-hover:translate-x-1">
        {/* Header with title and badge */}
        <div className="mb-4">
          {/* Title and Badge Row */}
          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-3">
            <h3 className="font-mono text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
              {title}
            </h3>

            {/* Badge - appears below title on mobile, next to it on desktop */}
            <Badge
              variant="outline"
              className="shrink-0 self-start sm:self-auto border-primary/30 bg-primary/5 text-primary font-semibold px-3 py-1 hover:bg-primary/10 transition-colors"
            >
              {type}
            </Badge>
          </div>

          {/* Date and Location with icons - full width */}
          <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-sm">
            <div className="flex items-center gap-2 text-muted-foreground">
              <Calendar className="h-4 w-4 text-primary/70" />
              <span className="font-medium">{dateRange}</span>
            </div>
            <div className="hidden sm:block w-1 h-1 rounded-full bg-muted-foreground/30" />
            <div className="flex items-center gap-2 text-muted-foreground">
              <MapPin className="h-4 w-4 text-primary/70" />
              <span className="font-medium">{location}</span>
            </div>
          </div>
        </div>

        {/* Description */}
        <p className="text-muted-foreground leading-relaxed text-base">
          {description}
        </p>
      </div>
    </div>
  );
}
