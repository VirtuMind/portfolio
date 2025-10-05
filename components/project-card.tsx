"use client"

import { useState } from "react"
import { Github } from "lucide-react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ImageLightbox } from "./image-lightbox"
import Image from "next/image"

interface ProjectCardProps {
  title: string
  description: string
  images: string[]
  githubUrl: string
  technologies: string[]
  viewCodeLabel: string
}

export function ProjectCard({ title, description, images, githubUrl, technologies, viewCodeLabel }: ProjectCardProps) {
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [lightboxIndex, setLightboxIndex] = useState(0)

  const openLightbox = (index: number) => {
    setLightboxIndex(index)
    setLightboxOpen(true)
  }

  return (
    <>
      <Card className="glass overflow-hidden hover:shadow-xl transition-shadow duration-300 group">
        {/* Project Image */}
        <div className="relative h-48 overflow-hidden cursor-pointer bg-muted" onClick={() => openLightbox(0)}>
          <Image
            src={images[0] || "/placeholder.svg"}
            alt={title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
            <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 font-medium">
              View Gallery
            </span>
          </div>
        </div>

        <CardHeader>
          <CardTitle className="font-mono">{title}</CardTitle>
          <CardDescription>{description}</CardDescription>
        </CardHeader>

        <CardContent>
          {/* Technologies */}
          <div className="flex flex-wrap gap-2">
            {technologies.map((tech) => (
              <Badge key={tech} variant="secondary" className="bg-accent/20 text-accent-foreground">
                {tech}
              </Badge>
            ))}
          </div>
        </CardContent>

        <CardFooter>
          <a href={githubUrl} target="_blank" rel="noopener noreferrer" className="w-full">
            <Button variant="outline" className="w-full gap-2 hover:bg-accent/20 bg-transparent">
              <Github className="h-4 w-4" />
              {viewCodeLabel}
            </Button>
          </a>
        </CardFooter>
      </Card>

      {/* Lightbox */}
      {lightboxOpen && (
        <ImageLightbox images={images} initialIndex={lightboxIndex} onClose={() => setLightboxOpen(false)} />
      )}
    </>
  )
}
