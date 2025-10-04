"use client";

import { BackLink } from "@/components/back-link";
import { useLanguage } from "@/lib/language-provider";
import { getTranslations } from "@/lib/i18n";
import { projects } from "@/lib/projects-data";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink } from "lucide-react";
import Image from "next/image";

export default function ProjectsPage() {
  const { language } = useLanguage();
  const t = getTranslations(language);

  return (
    <main className="container max-w-4xl mx-auto px-4 pt-12 pb-16 opacity-0 animate-slide-up">
      <BackLink />
      <h1 className="font-mono text-4xl md:text-4xl mb-12">
        {t.projects.title}
      </h1>

      <div className="space-y-8">
        {projects.map((project) => (
          <div
            key={project.id}
            className="glass rounded-lg overflow-hidden hover:shadow-xl transition-shadow"
          >
            <div className="flex flex-col md:flex-row">
              {/* Left side - Image (1:1 ratio) */}
              <div className="relative w-full md:w-80 h-80 flex-shrink-0 bg-muted">
                <Image
                  src={project.images[0] || "/placeholder.svg"}
                  alt={project.title}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Right side - Content */}
              <div className="flex-1 p-6 flex flex-col justify-between">
                {/* Title */}
                <h2 className="font-mono text-2xl font-bold mb-3">
                  {project.title}
                </h2>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <Badge
                      key={tech}
                      variant="secondary"
                      className="bg-accent/20 text-accent-foreground"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>

                {/* Description */}
                <p className="text-muted-foreground mb-6 flex-1">
                  {project.description}
                </p>

                {/* Links */}
                <div className="flex gap-3">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cursor-pointer"
                  >
                    <Button
                      variant="outline"
                      className="gap-2 hover:bg-accent/20 bg-transparent cursor-pointer"
                    >
                      <Github className="h-4 w-4" />
                      {t.projects.viewCode}
                    </Button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12 text-center">
        <a
          href="https://github.com/younes-khoubaz"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-accent hover:underline cursor-pointer font-medium"
        >
          <ExternalLink className="h-4 w-4" />
          Find out other projects
        </a>
      </div>
    </main>
  );
}
