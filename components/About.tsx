"use client"

import React from "react"
import { StarsIcon, File } from "lucide-react"
import Button from "./ui/Button"

const badges = [
  {
    label: "Autonome",
    position: "-top-6 left-10",
    animation: "animate-float",
  },
  {
    label: "Curieux",
    position: "top-1/2 -right-8 -translate-y-1/2",
    animation: "animate-float-delay",
  },
  {
    label: "Methodique",
    position: "right-12 -bottom-6",
    animation: "animate-float-slow",
  },
]

const About = () => {
  return (
    <section
      className="bg-background-light dark:bg-background-dark py-24"
      id="about"
    >
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-26 md:grid-cols-2 md:gap-16">
          <div className="space-y-6">
            <h2 className="text-primary text-sm font-bold tracking-widest uppercase">
              01. A propos de moi
            </h2>
            <h3 className="text-foreground-light/90 dark:text-foreground-dark/90 relative text-3xl leading-tight font-black md:text-4xl">
              Bonjour — Je m'appelle{" "}
              <span className="text-primary relative inline-block rotate-3 border bg-clip-text px-1 font-black shadow-[0_0_10px_rgba(34,197,94,0.7)]">
                Elvis
                <StarsIcon className="absolute -top-3 -right-3 h-7 w-7 text-amber-400" />
              </span>{" "}
              Sylvano
            </h3>
            <p className="text-foreground-light/80 dark:text-foreground-dark/80 text-lg leading-relaxed">
              Je suis un développeur dévoué qui adore relever les défis et
              étendre ses compétences sur différents projets. Ma curiosité me
              permet de m'adapter rapidement aux nouvelles tendances pour
              optimiser mes développements. Ainsi, je m'efforce de créer des
              solutions performantes, évolutives et adaptées aux utilisateurs.
            </p>

            <div className="flex items-center gap-8 pt-4 md:gap-10">
              <div className="rounded-xl border border-slate-800 bg-slate-900/90 p-4">
                <span className="text-primary text-xl font-black md:text-2xl">
                  8+
                </span>
                <p className="mt-1 text-xs font-medium text-slate-500 md:text-sm">
                  Projets réalisés
                </p>
              </div>
              <Button
                variant="outline"
                className="cursor-pointer space-x-2 p-4 text-xs md:text-sm"
              >
                <File className="h-6 w-6" />
                <span>Télécharger CV</span>
              </Button>
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
                  preload="auto"
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
