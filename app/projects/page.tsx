"use client";

import { BackLink } from "@/components/back-link";
import { useLanguage } from "@/lib/language-provider";
import { getTranslations } from "@/lib/translations";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { FiExternalLink } from "react-icons/fi";
import { BsImages } from "react-icons/bs";
import { FaCode } from "react-icons/fa6";
import { MdLiveTv } from "react-icons/md";

import Image from "next/image";
import { Fancybox } from "@fancyapps/ui/dist/fancybox/";
import "@fancyapps/ui/dist/fancybox/fancybox.css";
import {
  coursifyImages,
  otasImages,
  graduationProjectImages,
  courtProjectImages,
  type Project,
} from "@/lib/projects-images";

export default function ProjectsPage() {
  const { language } = useLanguage();
  const t = getTranslations(language);

  const buttonIcons: Record<string, JSX.Element> = {
    Frontend: <FaCode className="h-4 w-4" />,
    Backend: <FaCode className="h-4 w-4" />,
    "Source Code": <FaCode className="h-4 w-4" />,
    Demo: <MdLiveTv className="h-4 w-4" />,
  };

  const projectImagesMap: Record<number, Project[]> = {
    1: coursifyImages,
    2: otasImages,
    3: graduationProjectImages,
    4: courtProjectImages,
  };

  const openGallery = (projectId: number) => {
    const images = projectImagesMap[projectId] || [];

    Fancybox.show(images, {
      Carousel: {
        Thumbs: {
          showOnStart: false,
        },
      },
    });
  };

  return (
    <div className="container max-w-5xl mx-auto">
      <BackLink />
      <h1 className="font-mono text-4xl mb-12">{t.projects.title}</h1>

      <div className="space-y-12 opacity-0 animate-slide-up">
        {t.projects.works.map((project) => (
          <div
            key={project.id}
            className="group relative rounded-2xl border pt-6 md:border-0 md:pt-0"
          >
            <div className="flex flex-col md:flex-row gap-4">
              {/* Image Section with Gallery Effect */}
              <div className="relative w-full md:w-2/5 lg:w-1/3 flex items-center justify-center p-4 ">
                <div
                  className="project-thumbnail aspect-square"
                  onClick={() => openGallery(project.id)}
                >
                  <Image
                    src={project.thumbnail}
                    alt={project.title}
                    fill
                    className="object-cover"
                  />
                  <div className="project-thumbnail-overlay">
                    <BsImages className="text-white h-12 w-12" />
                  </div>
                </div>
              </div>

              {/* Content Section */}
              <div className="flex-1 p-4 flex flex-col justify-between">
                {/* Header */}
                <div>
                  <h2 className="font-mono text-2xl font-bold mb-4 text-center md:text-left">
                    {project.title}
                  </h2>

                  {/* Description */}
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech) => (
                      <Badge
                        key={tech}
                        variant="outline"
                        className="border-primary/30 bg-primary/5 text-primary hover:bg-primary/10 transition-colors font-medium px-3 py-1"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}

                <div className="flex flex-wrap gap-2 mt-4">
                  {project.links.map((link) => (
                    <a
                      key={link.type}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 md:flex-none min-w-[120px]"
                    >
                      <Button className="w-full text-sm gap-1 bg-primary hover:bg-primary/90 text-primary-foreground transition-all duration-300">
                        {buttonIcons[link.type]}
                        {link.type}
                      </Button>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Footer Link */}
      <div className="mt-16 text-center">
        <a
          href="https://github.com/VirtuMind"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-medium group transition-colors"
        >
          <FiExternalLink className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
          <span className="relative">
            {t.projects.findMore}
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300" />
          </span>
        </a>
      </div>
    </div>
  );
}
