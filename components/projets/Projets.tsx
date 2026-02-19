"use client"

import React, { useCallback, useMemo } from "react"
import useEmblaCarousel from "embla-carousel-react"
import Autoplay from "embla-carousel-autoplay"
import { ChevronRight, ChevronLeft } from "lucide-react"
import Button from "../ui/Button"
import ProjectCard from "./parts/ProjectCard"
import { useTranslations } from "next-intl"

type ProjectBase = {
  id: string
  tags: string[]
  href?: string
  gradient?: [string, string]
}

const baseProjects: ProjectBase[] = [
  {
    id: "flotmax",
    tags: ["typescript", "react", "tailwindcss"],
    href: "projects/flotmax",
    gradient: ["#1e3a8a", "#3b0764"],
  },
  {
    id: "moodspace",
    tags: ["react", "typescript", "tailwindcss"],
    href: "projects/moodspace",
    gradient: ["#f97316", "#c2410c"],
  },
  {
    id: "portfolio-2",
    tags: ["nextjs", "typescript", "aws"],
    href: "projects/portfolio-2",
    gradient: ["#a7f3d0", "#f0fdf4"],
  },
  {
    id: "portfolio",
    tags: ["javascript", "nextjs", "tailwindcss"],
    href: "projects/portfolio",
    gradient: ["#2f4f4f", "#556b2f"],
  },
]

const Projets = () => {
  const t = useTranslations("Projets")
  const autoplay = useMemo(
    () =>
      Autoplay({
        delay: 10000,
        stopOnInteraction: true,
      }),
    []
  )

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

  const projects = baseProjects.map((project) => ({
    ...project,
    title: t(`projects.${project.id}.title`),
    desc: t(`projects.${project.id}.desc`),
  }))

  return (
    <section
      className="bg-background-light dark:bg-background-dark py-24"
      id="projects"
    >
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div className="space-y-4">
            <h2 className="text-primary text-sm font-bold tracking-widest uppercase">
              {t("sectionLabel")}
            </h2>
            <h3 className="text-foreground-light/90 dark:text-foreground-dark/90 text-3xl font-black md:text-5xl">
              {t("sectionTitle")}
            </h3>
          </div>

          <div className="flex gap-4">
            <Button
              aria-label={t("prevAria")}
              variant="ghost"
              onClick={scrollPrev}
              className="flex size-12 items-center justify-center rounded-full border border-slate-300 dark:border-slate-700 dark:hover:bg-slate-100/50 dark:hover:text-slate-200"
            >
              <ChevronLeft />
            </Button>

            <Button
              aria-label={t("nextAria")}
              variant="ghost"
              onClick={scrollNext}
              className="flex size-12 items-center justify-center rounded-full border border-slate-300 dark:border-slate-700 dark:hover:bg-slate-100/50 dark:hover:text-slate-200"
            >
              <ChevronRight />
            </Button>
          </div>
        </div>

        <div className="overflow-hidden active:cursor-grabbing" ref={emblaRef}>
          <div className="flex">
            {projects.map((project) => (
              <div
                key={project.id}
                className="min-w-0 flex-[0_0_100%] px-4 md:flex-[0_0_33.333%]"
              >
                <ProjectCard
                  project={project}
                  linkLabel={t("linkLabel")}
                  moreLabel={t("moreLabel")}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Projets
