"use client"

import Link from "next/link"
import { ArrowRight } from "lucide-react"
import Typewriter from "typewriter-effect"
import Image from "next/image"

const Hero = () => {
  return (
    <section
      className="pattern-section relative flex min-h-screen items-center py-24 pt-20"
      id="home"
    >
      <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-12 px-6 md:grid-cols-2">
        {/* LEFT */}
        <div className="order-2 space-y-8 md:order-1">
          {/* STATUS */}
          <div className="bg-primary/10 border-primary/20 text-primary inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs font-bold tracking-widest uppercase">
            <span className="relative flex h-2 w-2">
              <span className="bg-primary absolute inline-flex h-full w-full animate-ping rounded-full opacity-75"></span>
              <span className="bg-primary relative inline-flex h-2 w-2 rounded-full"></span>
            </span>
            Disponible pour nouveaux projets
          </div>

          {/* TITLE */}
          <h1 className="text-foreground-light/90 dark:text-foreground-dark text-4xl leading-[1.1] font-black tracking-tight md:text-5xl">
            Transformer la{" "}
            <span className="from-primary bg-linear-to-r to-emerald-500 bg-clip-text text-transparent">
              technologie
            </span>{" "}
            en solutions efficaces
          </h1>

          {/* TYPEWRITER MIS EN AVANT */}
          <div className="relative">
            <div className="bg-primary/10 absolute inset-0 -z-10 rounded-xl blur-xl"></div>

            <div className="border-primary/20 bg-background-light/60 dark:bg-background-dark/60 rounded-xl border px-6 py-4 text-xl font-bold backdrop-blur-md md:text-2xl">
              <div className="from-primary bg-linear-to-r to-emerald-500 bg-clip-text text-transparent">
                <Typewriter
                  options={{
                    strings: [
                      "Développeur web Full-Stack",
                      "Ingénieur DevOps Junior",
                    ],
                    autoStart: true,
                    loop: true,
                    cursor: " <",
                    delay: 120,
                    cursorClassName: "text-primary",
                    deleteSpeed: 70,
                  }}
                />
              </div>
            </div>
          </div>

          {/* BUTTONS */}
          <div className="flex flex-wrap gap-6">
            <Link
              className="bg-primary shadow-primary/30 flex items-center gap-2 rounded-xl px-8 py-4 font-bold text-white shadow-sm transition-all hover:scale-105"
              href="#projects"
            >
              Voir mes projets
              <ArrowRight />
            </Link>

            <Link
              className="rounded-xl border border-slate-700 bg-slate-800 px-8 py-4 font-bold text-white backdrop-blur-sm transition-all hover:bg-slate-700"
              href="#contact"
            >
              Contactez-moi
            </Link>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="relative order-1 md:order-2">
          <div className="relative mx-auto aspect-square w-full max-w-md">
            <div className="bg-primary/20 absolute inset-0 rotate-6 rounded-4xl opacity-10"></div>

            <div className="bg-background-light dark:bg-background-dark absolute inset-0 -rotate-3 overflow-hidden rounded-4xl border border-slate-200 shadow-2xl dark:border-slate-800">
              <Image
                alt="Portrait Elvis Sylvano"
                fill
                className="object-cover grayscale transition-all duration-700 hover:grayscale-0"
                src="/me/profil.png"
                priority
              />
            </div>

            <div className="absolute -right-6 -bottom-6 rounded-2xl border border-slate-800 bg-slate-900 p-4 shadow-2xl">
              <div className="flex items-center gap-4">
                <div className="bg-primary/10 text-primary rounded-lg p-2">
                  <span className="material-symbols-outlined">Vérifié</span>
                </div>
                <div>
                  <p className="text-xs font-medium text-slate-500">
                    Expérience
                  </p>
                  <p className="text-sm font-bold text-white">+4 ans</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="from-background-light dark:from-background-dark absolute right-0 bottom-0 left-0 h-32 bg-linear-to-t to-transparent"></div>
    </section>
  )
}

export default Hero
