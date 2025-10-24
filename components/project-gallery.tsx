"use client";

import Image from "next/image";
import { BsImages } from "react-icons/bs";
import { Fancybox } from "@fancyapps/ui/dist/fancybox/";
import "@fancyapps/ui/dist/fancybox/fancybox.css";
import type { Project } from "@/lib/projects-images";

type Props = {
  projectId: number;
  thumbnail: string;
  title: string;
  images: Project[];
};

export function ProjectGallery({ projectId, thumbnail, title, images }: Props) {
  const openGallery = () => {
    Fancybox.show(images, {
      Carousel: {
        Thumbs: {
          showOnStart: false,
        },
      },
    });
  };

  return (
    <div className="relative w-full md:w-2/5 lg:w-1/3 flex items-center justify-center p-4">
      <div className="project-thumbnail aspect-square" onClick={openGallery}>
        <Image src={thumbnail} alt={title} fill className="object-cover" />
        <div className="project-thumbnail-overlay">
          <BsImages className="text-white h-12 w-12" />
        </div>
      </div>
    </div>
  );
}
