import { CheckCircle2, Sparkles } from "lucide-react"
import type { DetailStat, ProjectDetailsContent } from "./types"

type Props = {
  content: ProjectDetailsContent
  stats: DetailStat[]
  overviewLabel: string
  challengeTitle: string
  solutionTitle: string
  featuresTitle: string
  statsLabel: string
}

const ProjectOverview = ({
  content,
  stats,
  overviewLabel,
  challengeTitle,
  solutionTitle,
  featuresTitle,
  statsLabel,
}: Props) => {
  return (
    <div className="space-y-16">
      <section>
        <h2 className="text-primary mb-4 text-sm font-bold tracking-widest uppercase">
          {overviewLabel}
        </h2>
        <h3 className="text-foreground-light dark:text-foreground-dark mb-6 text-3xl font-black">
          {challengeTitle}
        </h3>
        <p className="text-foreground-light/80 dark:text-foreground-dark/70 mb-6 text-lg leading-relaxed">
          {content.challenge}
        </p>

        <ul className="space-y-4">
          {content.challengePoints.map((point) => (
            <li key={point} className="flex items-start gap-3">
              <CheckCircle2 size={18} className="text-primary mt-1 shrink-0" />
              <span className="text-foreground-light/80 dark:text-foreground-dark/70">
                {point}
              </span>
            </li>
          ))}
        </ul>
      </section>

      <section className="border-y border-slate-200 py-12 dark:border-slate-800">
        <h3 className="text-foreground-light dark:text-foreground-dark mb-6 text-3xl font-black">
          {solutionTitle}
        </h3>
        <p className="text-foreground-light/80 dark:text-foreground-dark/70 mb-6 text-lg leading-relaxed">
          {content.solution}
        </p>
        <div className="bg-primary/5 border-primary/20 rounded-2xl border p-6">
          <p className="text-foreground-light/90 dark:text-foreground-dark/90 font-medium">
            {content.solutionHighlight}
          </p>
        </div>
      </section>

      <section>
        <h3 className="text-foreground-light dark:text-foreground-dark mb-8 text-3xl font-black">
          {statsLabel}
        </h3>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="bg-primary/5 border-primary/20 rounded-2xl border p-8 text-center"
            >
              <div className="text-primary mb-2 text-4xl font-black">{stat.value}</div>
              <p className="text-foreground-light/65 dark:text-foreground-dark/60 text-sm font-bold tracking-widest uppercase">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h3 className="text-foreground-light dark:text-foreground-dark mb-8 text-3xl font-black">
          {featuresTitle}
        </h3>

        <div className="grid gap-8 sm:grid-cols-2">
          {content.features.map((feature) => (
            <article key={feature.title} className="space-y-3">
              <div className="text-primary bg-primary/10 flex size-10 items-center justify-center rounded-xl">
                <Sparkles size={18} />
              </div>
              <h4 className="text-foreground-light dark:text-foreground-dark font-bold">
                {feature.title}
              </h4>
              <p className="text-foreground-light/75 dark:text-foreground-dark/65 text-sm">
                {feature.desc}
              </p>
            </article>
          ))}
        </div>
      </section>
    </div>
  )
}

export default ProjectOverview
