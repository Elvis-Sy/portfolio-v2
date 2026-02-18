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
  href?: string
  gradient?: [string, string]
}

const projects: Project[] = [
  {
    id: "flotmax",
    title: "FlotMax",
    tags: ["typescript", "react", "tailwindcss"],
    desc: "Application aidant pour les problèmes de flot maximal ✍🏻",
    gradient: ["#1e3a8a", "#3b0764"]
  },
  {
    id: "moodspace",
    title: "MoodSpace",
    tags: ["react", "typescript", "tailwindcss"],
    desc: "Plateforme de gestion et de suivi des congés des employés 📝",
    gradient: ["#f97316", "#c2410c"]
  },
  {
    id: "portfolio-2",
    title: "Portfolio V2",
    tags: ["Node.js", "AWS"],
    desc: "Enterprise project management tool with AI-driven resource allocation.",
    gradient: ["#a7f3d0", "#f0fdf4"]
  },
  {
    id: "portfolio",
    title: "Ancien portfolio",
    tags: ["javascript", "nextjs", "tailwindcss"],
    desc: "Mon ancien portfolio tiré du template de Shubh Porwal 🌐",
    gradient: ["#2f4f4f", "#556b2f"]
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
              05. Projets
            </h2>
            <h3 className="text-foreground-light/90 dark:text-foreground-dark/90 text-3xl font-black md:text-5xl">
              Projets récents
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
