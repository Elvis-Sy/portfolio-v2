"use client"

import React, { useMemo, useRef, useEffect } from "react"
import { ArrowUpRightFromSquare } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import VanillaTilt from "vanilla-tilt"

type Project = {
  id: string
  title: string
  tags: string[]
  desc: string
  gradient?: [string, string]
  href?: string
}

type Props = {
  project: Project
  linkLabel: string
  moreLabel: string
}

const MAX_VISIBLE_TAGS = 3

const ProjectCard = React.memo(({ project, linkLabel, moreLabel }: Props) => {
  const cardRef = useRef<HTMLDivElement>(null)

  const { visibleTags, hiddenCount, hiddenTagsLabel } = useMemo(() => {
    const visible = project.tags.slice(0, MAX_VISIBLE_TAGS)
    const hidden = project.tags.slice(MAX_VISIBLE_TAGS)

    return {
      visibleTags: visible,
      hiddenCount: hidden.length,
      hiddenTagsLabel: hidden.join(", "),
    }
  }, [project.tags])

  useEffect(() => {
    const currentNode = cardRef.current

    if (currentNode) {
      if (
        typeof window !== "undefined" &&
        (window.matchMedia("(prefers-reduced-motion: reduce)").matches ||
          !window.matchMedia("(pointer: fine)").matches)
      ) {
        return
      }

      VanillaTilt.init(currentNode, {
        max: 10,
        speed: 400,
        glare: true,
        "max-glare": 0.15,
        gyroscope: false,
      })
    }

    return () => {
      const anyCard = currentNode as HTMLElement & {
        vanillaTilt?: { destroy?: () => void }
      }
      anyCard?.vanillaTilt?.destroy?.()
    }
  }, [])

  return (
    <article
      ref={cardRef}
      className="group overflow-hidden rounded-3xl"
      style={{
        transformStyle: "preserve-3d",
        transform: "perspective(1000px)",
      }}
    >
      <div
        className="relative flex h-100 w-full max-w-148 flex-col justify-end rounded-3xl p-8"
        style={{
          background: `linear-gradient(120deg, ${project.gradient?.[0]}, ${project.gradient?.[1]})`,
        }}
      >
        <Image
          src="/projects/project-bg.svg"
          alt="background"
          fill
          className="pointer-events-none absolute inset-0 object-cover opacity-20"
        />

        <Image
          src={`/projects/${project.id}.png`}
          alt={project.title}
          width={500}
          height={300}
          className="absolute top-8 -right-4 rounded-xl shadow-2xl"
          style={{
            transform: "rotate(-18deg) translateZ(50px)",
            objectFit: "contain",
          }}
        />

        <div
          className="absolute bottom-0 left-0 h-32 w-full"
          style={{
            background: "linear-gradient(0deg, #000, transparent)",
          }}
        />

        <div className="absolute inset-0 flex flex-col justify-end bg-linear-to-t from-slate-950 via-slate-950/20 to-transparent p-8">
          <div className="translate-y-2 space-y-4 transition-transform duration-500 group-hover:translate-y-0">
            <div className="flex flex-wrap gap-2 text-xs">
              {visibleTags.map((tag) => (
                <span
                  key={tag}
                  className="border-primary flex max-w-full items-center gap-2 rounded-full border-2 bg-slate-900 px-3 py-1.5 font-medium text-slate-300"
                >
                  <span className="bg-primary h-1.5 w-1.5 shrink-0 rounded-full"></span>
                  <span className="truncate">{tag}</span>
                </span>
              ))}

              {hiddenCount > 0 && (
                <span
                  title={hiddenTagsLabel}
                  className="border-primary cursor-pointer flex max-w-full items-center gap-2 rounded-full border-2 bg-slate-900 px-3 py-1.5 font-medium text-slate-300"
                >
                  +{hiddenCount} {moreLabel}
                </span>
              )}
            </div>

            <h4 className="text-2xl font-bold text-white transition-transform duration-500 md:translate-y-10 md:group-hover:translate-y-0">
              {project.title}
            </h4>

            <p className="line-clamp-2 text-sm text-slate-300 transition-opacity duration-500 md:opacity-0 md:group-hover:opacity-100">
              {project.desc}
            </p>

            <Link
              href={project.href ?? "#"}
              className="text-primary inline-flex items-center gap-2 font-bold hover:underline"
            >
              {linkLabel}
              <ArrowUpRightFromSquare size={18} />
            </Link>
          </div>
        </div>
      </div>
    </article>
  )
})

ProjectCard.displayName = "ProjectCard"

export default ProjectCard
