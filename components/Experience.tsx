"use client"

import { useTranslations } from "next-intl"

type ExperienceItem = {
  id: string
  title: string
  company: string
  date: string
  bullets: string[]
}

const Experience = () => {
  const t = useTranslations("Experience")
  const experiences = t.raw("items") as ExperienceItem[]

  return (
    <section
      className="pattern-section relative overflow-hidden py-24"
      id="experience"
    >
      <div className="from-background-light dark:from-background-dark absolute top-0 right-0 left-0 z-10 h-32 bg-linear-to-b to-transparent"></div>
      <div className="relative z-20 mx-auto max-w-4xl px-6">
        <div className="mb-16 space-y-4 text-center">
          <h2 className="text-primary text-sm font-bold tracking-widest uppercase">
            {t("sectionLabel")}
          </h2>
          <h3 className="text-foreground-light/90 dark:text-foreground-dark/90 text-3xl font-black md:text-5xl">
            {t("sectionTitle")}
          </h3>
        </div>

        <div className="before:via-primary relative space-y-12 before:absolute before:inset-0 before:ml-5 before:h-full before:w-0.5 before:-translate-x-px before:bg-linear-to-b before:from-transparent before:to-transparent md:before:mx-auto md:before:translate-x-0">
          {experiences.map((exp) => (
            <div
              key={exp.id}
              className="group relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse"
            >
              <div className="border-primary/40 bg-charcoal text-primary z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-2 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                <span className="bg-primary/60 size-3 rounded-full"></span>
              </div>
              <div className="group-hover:border-primary/50 w-[calc(100%-4rem)] rounded-2xl border border-slate-700/50 bg-slate-900/80 p-6 shadow-xl backdrop-blur-md transition-colors md:w-[45.3%]">
                <div className="mb-2 flex flex-col justify-between gap-2 md:flex-row md:items-center">
                  <h4 className="text-lg font-bold text-white">{exp.title}</h4>
                  <time className="text-primary bg-primary/10 rounded px-2 py-1 text-xs font-bold tracking-wider uppercase">
                    {exp.date}
                  </time>
                </div>
                <p className="mb-4 text-sm font-semibold text-emerald-400">
                  {exp.company}
                </p>
                <ul className="space-y-2 text-sm text-slate-300">
                  {exp.bullets.map((b, i) => (
                    <li key={i} className="flex gap-2">
                      <span className="text-primary">•</span> {b}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="from-background-light dark:from-background-dark absolute right-0 bottom-0 left-0 z-10 h-32 bg-linear-to-t to-transparent"></div>
    </section>
  )
}

export default Experience
