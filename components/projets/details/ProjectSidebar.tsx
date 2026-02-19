import Link from "next/link"
import type { ProjectDetailsContent, ProjectDetailMeta } from "./types"

type Props = {
  meta: ProjectDetailMeta
  content: ProjectDetailsContent
  timelineLabel: string
  roleLabel: string
  industryLabel: string
  ctaLabel: string
  ctaHref: string
}

const ProjectSidebar = ({
  meta,
  content,
  timelineLabel,
  roleLabel,
  industryLabel,
  ctaLabel,
  ctaHref,
}: Props) => {
  return (
    <aside className="space-y-8">
      <div className="rounded-3xl border border-slate-200 bg-white p-8 dark:border-slate-800 dark:bg-slate-900 lg:sticky lg:top-24">
        <div className="mb-8 space-y-4">
          <p className="text-foreground-light/60 dark:text-foreground-dark/60 text-xs font-bold tracking-widest uppercase">
            Frontend
          </p>
          <div className="flex flex-wrap gap-2 text-foreground-light dark:text-foreground-dark">
            {meta.stack.frontend.map((item) => (
              <span
                key={item}
                className="border-primary/30 bg-primary/5 inline-flex items-center gap-2 rounded-lg border px-3 py-1.5 text-sm font-medium"
              >
                <span className="bg-primary size-1.5 rounded-full"></span>
                {item}
              </span>
            ))}
          </div>

          <p className="text-foreground-light/60 dark:text-foreground-dark/60 mt-6 text-xs font-bold tracking-widest uppercase">
            Backend & Infrastructure
          </p>
          <div className="flex flex-wrap gap-2 text-foreground-light dark:text-foreground-dark">
            {meta.stack.backend.map((item) => (
              <span
                key={item}
                className="border-primary/30 bg-primary/5 inline-flex items-center gap-2 rounded-lg border px-3 py-1.5 text-sm font-medium"
              >
                <span className="bg-primary size-1.5 rounded-full"></span>
                {item}
              </span>
            ))}
          </div>
        </div>

        <div className="space-y-4">
          <div className="flex items-center justify-between gap-3">
            <span className="text-foreground-light/65 dark:text-foreground-dark/60 text-sm font-medium">
              {timelineLabel}
            </span>
            <span className="text-foreground-light dark:text-foreground-dark text-sm font-bold">
              {content.timeline}
            </span>
          </div>

          <div className="flex items-center justify-between gap-3">
            <span className="text-foreground-light/65 dark:text-foreground-dark/60 text-sm font-medium">
              {roleLabel}
            </span>
            <span className="text-foreground-light dark:text-foreground-dark text-sm font-bold">
              {content.role}
            </span>
          </div>

          <div className="flex items-center justify-between gap-3">
            <span className="text-foreground-light/65 dark:text-foreground-dark/60 text-sm font-medium">
              {industryLabel}
            </span>
            <span className="text-foreground-light dark:text-foreground-dark text-sm font-bold">
              {content.industry}
            </span>
          </div>
        </div>

        <Link
          href={ctaHref}
          className="bg-primary mt-8 inline-flex w-full items-center justify-center rounded-xl px-6 py-4 text-center font-bold text-white transition-all hover:brightness-110"
        >
          {ctaLabel}
        </Link>
      </div>
    </aside>
  )
}

export default ProjectSidebar
