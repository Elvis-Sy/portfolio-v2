"use client"

import React, { useCallback } from "react"
import useEmblaCarousel from "embla-carousel-react"
import Autoplay from "embla-carousel-autoplay"
import { ChevronRight, ChevronLeft } from "lucide-react"
import Button from "../ui/Button"
import ProjectCard from "./parts/ProjectCard"

type Project = {
  id: string
  title: string
  tags: string[]
  desc: string
  img: string
  href?: string
}

const projects: Project[] = [
  {
    id: "quantum",
    title: "Quantum Analytics",
    tags: ["React", "Charts", "WebSockets", "D3.js"],
    desc: "A high-performance real-time data visualization platform for global logistics tracking.",
    img: "/me/profil.png",
  },
  {
    id: "luxe",
    title: "Luxe Market",
    tags: ["Next.js", "Stripe"],
    desc: "Luxury e-commerce experience with seamless checkout and AR product previews.",
    img: "/me/profil.png",
  },
  {
    id: "flow",
    title: "Flow Management",
    tags: ["Node.js", "AWS"],
    desc: "Enterprise project management tool with AI-driven resource allocation.",
    img: "/me/profil.png",
  },
  {
    id: "flowiiiii",
    title: "Elviiiiiiiiis",
    tags: ["Node.js", "AWS"],
    desc: "Enterprise project management tool with AI-driven resource allocation.",
    img: "/me/profil.png",
  },
]

const Projets = () => {
  const autoplay = Autoplay({
    delay: 10000,
    stopOnInteraction: true,
  })

  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
      align: "start",
      skipSnaps: true,
      containScroll: "trimSnaps",
    },
    [autoplay]
  )

  const scrollPrev = useCallback(() => {
    emblaApi?.scrollPrev()
  }, [emblaApi])

  const scrollNext = useCallback(() => {
    emblaApi?.scrollNext()
  }, [emblaApi])

  return (
    <section
      className="bg-background-light dark:bg-background-dark py-24"
      id="projects"
    >
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div className="space-y-4">
            <h2 className="text-primary text-sm font-bold tracking-widest uppercase">
              05. Projects
            </h2>
            <h3 className="text-foreground-light/90 dark:text-foreground-dark/90 text-3xl font-black md:text-5xl">
              Recent Work Showcase
            </h3>
          </div>

          <div className="flex gap-4">
            <Button
              aria-label="Previous project"
              variant="ghost"
              onClick={scrollPrev}
              className="flex size-12 items-center justify-center rounded-full border dark:hover:bg-slate-100/50 dark:hover:text-slate-200 border-slate-300 dark:border-slate-700"
            >
              <ChevronLeft />
            </Button>

            <Button
              aria-label="Next project"
              variant="ghost"
              onClick={scrollNext}
              className="flex size-12 items-center justify-center rounded-full border dark:hover:bg-slate-100/50 dark:hover:text-slate-200 border-slate-300 dark:border-slate-700"
            >
              <ChevronRight />
            </Button>
          </div>
        </div>

        {/* Embla */}
        <div className="overflow-hidden active:cursor-grabbing" ref={emblaRef}> 
          <div className="flex">
            {projects.map((project) => (
              <div
                key={project.id}
                className="min-w-0 flex-[0_0_100%] px-4 md:flex-[0_0_33.333%]"
              >
                <ProjectCard project={project} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Projets
