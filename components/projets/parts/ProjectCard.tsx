import React, { useMemo } from "react"
import { ArrowUpRightFromSquare } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

type Project = {
  id: string
  title: string
  tags: string[]
  desc: string
  img: string
  href?: string
}

const MAX_VISIBLE_TAGS = 3

const ProjectCard = React.memo(({ project }: { project: Project }) => {
  // Optimisation : évite recalcul à chaque render
  const { visibleTags, hiddenCount, hiddenTagsLabel } = useMemo(() => {
    const visible = project.tags.slice(0, MAX_VISIBLE_TAGS)
    const hidden = project.tags.slice(MAX_VISIBLE_TAGS)

    return {
      visibleTags: visible,
      hiddenCount: hidden.length,
      hiddenTagsLabel: hidden.join(", "),
    }
  }, [project.tags])

  return (
    <article className="group relative aspect-square overflow-hidden rounded-3xl bg-slate-900 shadow-xl">
      <Image
        alt={project.title}
        src={project.img}
        fill
        sizes="(max-width: 768px) 100vw, 33vw"
        className="object-cover opacity-60 transition-transform duration-700 group-hover:scale-110"
        priority={false}
      />

      <div className="absolute inset-0 flex flex-col justify-end bg-linear-to-t from-slate-950 via-slate-950/20 to-transparent p-8">
        <div className="translate-y-2 space-y-4 transition-transform duration-500 group-hover:translate-y-0">

          {/* TAGS */}
          <div className="flex flex-wrap gap-2">
            {visibleTags.map((tag) => (
              <span
                key={tag}
                className="border-primary bg-slate-900/70 flex max-w-full items-center gap-2 rounded-full border px-3 py-1.5 text-xs font-medium text-slate-300"
              >
                <span className="bg-primary h-1.5 w-1.5 shrink-0 rounded-full"></span>
                <span className="truncate">{tag}</span>
              </span>
            ))}

            {hiddenCount > 0 && (
              <span
                title={hiddenTagsLabel}
                className="bg-gray-900/40 border border-primary text-primary cursor-pointer rounded-full px-3 py-1.5 text-xs font-semibold"
              >
                +{hiddenCount} more
              </span>
            )}
          </div>

          {/* TITLE */}
          <h4 className="text-2xl font-bold text-white">
            {project.title}
          </h4>

          {/* DESCRIPTION */}
          <p className="line-clamp-2 text-sm text-slate-300 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
            {project.desc}
          </p>

          {/* LINK */}
          <Link
            href={project.href ?? "#"}
            className="text-primary inline-flex items-center gap-2 font-bold hover:underline"
          >
            View Case Study
            <ArrowUpRightFromSquare size={18} />
          </Link>
        </div>
      </div>
    </article>
  )
})

ProjectCard.displayName = "ProjectCard"

export default ProjectCard
