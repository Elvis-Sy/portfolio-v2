"use client"

import { StarsIcon, File } from "lucide-react"
import { useLocale, useTranslations } from "next-intl"

const badgeLayout = [
  {
    position: "-top-6 left-10",
    animation: "animate-float",
  },
  {
    position: "top-1/2 right-2 -translate-y-1/2 sm:-right-8",
    animation: "animate-float-delay",
  },
  {
    position: "right-4 bottom-2 sm:right-12 sm:-bottom-6",
    animation: "animate-float-slow",
  },
]

const About = () => {
  const t = useTranslations("About")
  const locale = useLocale()
  const badgeLabels = t.raw("badges") as string[]
  const badges = badgeLayout.map((badge, index) => ({
    ...badge,
    label: badgeLabels[index] ?? "",
  }))
  const cvHref = locale === "fr" ? "/me/Elvis-Resume-fr.pdf" : "/me/Elvis-Resume-en.pdf"

  return (
    <section
      className="bg-background-light dark:bg-background-dark py-24"
      id="about"
    >
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-26 md:grid-cols-2 md:gap-16">
          <div className="space-y-6">
            <h2 className="text-primary text-sm font-bold tracking-widest uppercase">
              {t("sectionLabel")}
            </h2>
            <h3 className="text-foreground-light/90 dark:text-foreground-dark/90 relative text-3xl leading-tight font-black md:text-4xl">
              {t("titlePrefix")}{" "}
              <span className="text-primary relative inline-block rotate-3 border bg-clip-text px-1 font-black shadow-[0_0_10px_rgba(34,197,94,0.7)]">
                {t("titleName")}
                <StarsIcon className="absolute -top-3 -right-3 h-7 w-7 text-amber-400" />
              </span>{" "}
              {t("titleSuffix")}
            </h3>
            <p className="text-foreground-light/80 dark:text-foreground-dark/80 text-lg leading-relaxed">
              {t("description")}
            </p>

            <div className="flex items-center gap-8 pt-4 md:gap-10">
              <div className="rounded-xl border border-slate-800 bg-slate-900/90 p-4">
                <span className="text-primary text-xl font-black md:text-2xl">
                  8+
                </span>
                <p className="mt-1 text-xs font-medium text-slate-500 md:text-sm">
                  {t("statsLabel")}
                </p>
              </div>
              <a
                className="border-primary text-primary hover:bg-primary/5 inline-flex cursor-pointer items-center justify-center space-x-2 rounded-lg border-2 p-4 text-xs font-bold transition-all active:scale-95 md:text-sm"
                href={cvHref}
                download
              >
                <File className="h-6 w-6" />
                <span>{t("cvButton")}</span>
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="bg-primary/10 border-primary/10 relative rounded-3xl border p-8">
              <div className="bg-background-dark aspect-video overflow-hidden rounded-xl shadow-2xl">
                <video
                  className="h-full w-full object-cover opacity-80"
                  src="https://www.w3schools.com/html/mov_bbb.mp4"
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="metadata"
                  poster="https://via.placeholder.com/800x450.png?text=Workspace+video"
                />
              </div>
            </div>

            {badges.map((badge, index) => (
              <div
                key={index}
                className={`absolute ${badge.position} ${badge.animation} rounded-2xl border border-slate-700 bg-slate-900/90 px-4 py-3 shadow-xl backdrop-blur-md`}
              >
                <p className="text-xs font-semibold text-white">
                  {badge.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
