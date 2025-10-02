"use client"

import { Briefcase, GraduationCap, Award } from "lucide-react"
import type { EventType } from "@/lib/history-data"
import { Badge } from "@/components/ui/badge"

interface TimelineEventProps {
  title: string
  dateRange: string
  description: string
  type: EventType
  typeLabel: string
}

const eventIcons = {
  work: Briefcase,
  education: GraduationCap,
  certification: Award,
}

const eventColors = {
  work: "bg-accent",
  education: "bg-secondary",
  certification: "bg-primary",
}

export function TimelineEvent({ title, dateRange, description, type, typeLabel }: TimelineEventProps) {
  const Icon = eventIcons[type]

  return (
    <div className="relative pl-8 pb-12 group">
      {/* Timeline Line */}
      <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-border group-last:hidden" />

      {/* Timeline Dot */}
      <div
        className={`absolute left-0 top-0 -translate-x-1/2 w-4 h-4 rounded-full ${eventColors[type]} border-4 border-background`}
      />

      {/* Content */}
      <div className="glass p-6 rounded-lg hover:shadow-lg transition-shadow duration-300">
        <div className="flex items-start justify-between gap-4 mb-2">
          <div className="flex items-center gap-3">
            <div className={`p-2 rounded-lg ${eventColors[type]}/20`}>
              <Icon className="h-5 w-5 text-accent-foreground" />
            </div>
            <div>
              <h3 className="font-mono text-xl font-bold">{title}</h3>
              <p className="text-sm text-muted-foreground">{dateRange}</p>
            </div>
          </div>
          <Badge variant="outline" className="shrink-0">
            {typeLabel}
          </Badge>
        </div>
        <p className="text-muted-foreground leading-relaxed mt-4">{description}</p>
      </div>
    </div>
  )
}
