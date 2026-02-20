import Image from "next/image"
import Link from "next/link"
import { Code2, ExternalLink } from "lucide-react"

type Props = {
  badgeLabel: string
  title: string
  summary: string
  tags: string[]
  image: string
  gradient: [string, string]
  liveUrl: string
  sourceUrl: string
  liveLabel: string
  sourceLabel: string
  techLabel: string
}

const ProjectHero = ({
  badgeLabel,
  title,
  summary,
  tags,
  image,
  gradient,
  liveUrl,
  sourceUrl,
  liveLabel,
  sourceLabel,
  techLabel,
}: Props) => {
  const words = title.split(" ")
  const highlighted = words.pop() ?? ""
  const prefix = words.join(" ")

  return (
    <section className="pattern-section bg-white/50 dark:border-slate-800 dark:bg-slate-900/50">
      <div className="mx-auto grid max-w-7xl items-center gap-16 px-6 py-20 lg:grid-cols-2">
        <div className="order-2 space-y-8 lg:order-1">
          <div className="space-y-4">
            <div className="text-primary bg-primary/10 border-primary/20 inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs font-bold tracking-widest uppercase">
              {badgeLabel}
            </div>

            <h1 className="text-foreground-light dark:text-foreground-dark text-5xl leading-tight font-black md:text-7xl">
              {prefix}{" "}
              <span
                className="bg-clip-text text-transparent"
                style={{
                  backgroundImage: `linear-gradient(90deg, ${gradient[0]}, ${gradient[1]})`,
                }}
              >
                {highlighted}
              </span>
            </h1>

            <p className="text-foreground-light/80 dark:text-foreground-dark/70 max-w-xl text-lg leading-relaxed">
              {summary}
            </p>
          </div>

          <div className="flex flex-wrap gap-4">
            <Link
              href={liveUrl}
              className="bg-primary shadow-primary/20 inline-flex items-center gap-2 rounded-xl px-6 py-3 font-bold text-white shadow-lg transition-all hover:brightness-110"
            >
              {liveLabel}
              <ExternalLink size={16} />
            </Link>

            <Link
              href={sourceUrl}
              className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-6 py-3 font-bold text-slate-900 transition-all hover:bg-slate-50 dark:border-slate-700 dark:bg-slate-800 dark:text-white dark:hover:bg-slate-700"
            >
              {sourceLabel}
              <Code2 size={16} />
            </Link>
          </div>

          <div className="space-y-4 pt-4">
            <h3 className="text-foreground-light/60 dark:text-foreground-dark/60 text-sm font-bold tracking-widest uppercase">
              {techLabel}
            </h3>
            <div className="flex flex-wrap gap-2">
              {tags.map((tag) => (
                <span
                  key={tag}
                  className="text-primary bg-primary/5 border-primary/20 rounded-lg border px-3 py-1 text-xs font-bold"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="order-1 lg:order-2">
          <div className="relative">
            <div className="bg-primary absolute inset-0 rounded-full opacity-10 blur-[120px]"></div>
              <div className="overflow-hidden rounded-xl border border-slate-800/80 bg-background-dark/80 p-2">
                <Image
                  src={image}
                  alt={title}
                  width={1280}
                  height={800}
                  className="h-full w-full object-contain rounded-lg"
                  priority
                />
              </div>
          </div>
        </div>
      </div>

      <div className="from-background-light dark:from-background-dark absolute right-0 bottom-0 left-0 h-32 bg-linear-to-t to-transparent"></div>
    </section>
  )
}

export default ProjectHero
