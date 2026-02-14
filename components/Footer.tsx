import React from "react"
import { Terminal } from "lucide-react"

const Footer = () => {
  return (
    <footer className="bg-[#f0f3f3] dark:bg-background-dark border-t border-slate-200 dark:border-slate-800 py-12">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-6 md:flex-row">
        <div className="flex items-center gap-2">
          <div className="bg-primary flex size-6 items-center justify-center rounded text-white">
            <Terminal/>
          </div>
          <span className="font-bold tracking-tight text-foreground-light dark:text-foreground-dark uppercase">
            ES
          </span>
        </div>
        <p className="text-sm text-foreground-light/80 dark:text-foreground-dark/80">
          © 2026 Portfolio - Elvis Sylvano.
        </p>
      </div>
    </footer>
  )
}

export default Footer
