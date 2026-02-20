"use client"

import { Terminal, Database, Cloud, PencilRulerIcon } from "lucide-react"
import { useTranslations } from "next-intl"
import type { ComponentType } from "react"

type Expertise = {
  id: string
  title: string
  desc: string
}

const iconById: Record<string, ComponentType<any>> = {
  frontend: Terminal,
  backend: Database,
  cloud: Cloud,
  design: PencilRulerIcon,
}

const Expertises = () => {
  const t = useTranslations("Expertises")
  const expertises = t.raw("items") as Expertise[]

  return (
    <div className="bg-background-light dark:bg-background-dark">
      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <div className="mb-10 space-y-4 text-center">
          <h3 className="text-foreground-light/90 dark:text-foreground-dark text-3xl font-black md:text-5xl">
            {t("sectionTitle")}
          </h3>
          <p className="text-foreground-light/80 dark:text-foreground-dark/80 mx-auto max-w-2xl text-lg leading-relaxed">
            {t("sectionDesc")}
          </p>
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-4">
          {expertises.map((e) => {
            const Icon = iconById[e.id] ?? Terminal
            return (
              <div
                key={e.id}
                className="group hover:border-primary hover:shadow-primary/10 rounded-2xl border shadow-sm border-slate-300 p-8 text-center transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
              >
                <div className="group-hover:bg-primary mx-auto mb-6 flex size-16 items-center justify-center rounded-xl bg-slate-800 transition-colors text-white">
                  <Icon />
                </div>
                <h4 className="mb-2 text-lg font-bold text-foreground-light/90 dark:text-foreground-dark/90">
                  {e.title}
                </h4>
                <p className="text-sm text-foreground-light/80 dark:text-foreground-dark/80">
                  {e.desc}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Expertises
