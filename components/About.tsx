"use client"

import React from "react"

const About = () => {
  return (
    <section
      className="bg-background-light dark:bg-background-dark py-24"
      id="about"
    >
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-16 md:grid-cols-2">
          <div className="space-y-6">
            <h2 className="text-primary text-sm font-bold tracking-widest uppercase">
              01. About Me
            </h2>
            <h3 className="text-foreground-light/90 dark:text-foreground-dark/90 text-3xl leading-tight font-black md:text-4xl">
              Bridging the gap between <br />
              design and technology
            </h3>
            <p className="text-foreground-light/80 dark:text-foreground-dark/80 text-lg leading-relaxed">
              I am a passionate web developer with a focus on building scalable
              and user-centric applications. With expertise in modern JavaScript
              frameworks and backend architecture, I bridge the gap between
              design and technology.
            </p>

            <div className="grid grid-cols-2 gap-6 pt-4">
              <div className="rounded-xl border border-slate-800 bg-slate-900/90 p-4">
                <span className="text-primary text-3xl font-black">50+</span>
                <p className="mt-1 text-sm font-medium text-slate-500">
                  Projects Completed
                </p>
              </div>
              <div className="rounded-xl border border-slate-800 bg-slate-900/90 p-4">
                <span className="text-primary text-3xl font-black">20+</span>
                <p className="mt-1 text-sm font-medium text-slate-500">
                  Happy Clients
                </p>
              </div>
            </div>
          </div>

          <div className="bg-primary/10 border-primary/10 relative rounded-3xl border p-8">
            <div className="bg-background-dark group relative aspect-video overflow-hidden rounded-xl shadow-2xl">
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
            <div className="absolute -top-4 -left-4 rounded-2xl bg-emerald-500 p-4 font-bold text-white shadow-lg">
              Innovation Focused
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
