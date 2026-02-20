"use client"

import React, { useEffect, useState } from "react"
import { Sun, Moon } from "lucide-react"

const STORAGE_KEY = "theme"
const COOKIE_KEY = "theme"
const COOKIE_MAX_AGE = 60 * 60 * 24 * 365

export default function SwitchTheme() {
  const [isDark, setIsDark] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    try {
      const match = document.cookie.match(/(?:^|; )theme=([^;]+)/)

      if (match?.[1] === "dark") {
        setIsDark(true)
      } else if (match?.[1] === "light") {
        setIsDark(false)
      } else {
        const v = localStorage.getItem(STORAGE_KEY)
        if (v === "dark") setIsDark(true)
        else setIsDark(false)
      }
    } catch {
      /* noop */
    }
    setMounted(true)
  }, [])

  useEffect(() => {
    if (!mounted) return
    const el = document.documentElement
    if (isDark) {
      el.classList.add("dark")
      try {
        localStorage.setItem(STORAGE_KEY, "dark")
      } catch {}
      document.cookie = `${COOKIE_KEY}=dark; path=/; max-age=${COOKIE_MAX_AGE}; samesite=lax`
    } else {
      el.classList.remove("dark")
      try {
        localStorage.setItem(STORAGE_KEY, "light")
      } catch {}
      document.cookie = `${COOKIE_KEY}=light; path=/; max-age=${COOKIE_MAX_AGE}; samesite=lax`
    }
  }, [isDark, mounted])

  return (
    <button
      aria-pressed={mounted ? isDark : false}
      aria-label="Toggle theme"
      title="Toggle theme"
      onClick={() => setIsDark((s) => !s)}
      suppressHydrationWarning
      className="bg-primary/5 hover:bg-primary/20 dark:hover:bg-primary/10 dark:bg-background-dark/50 flex h-10 w-10 items-center justify-center rounded-full border border-slate-400/40 text-slate-700 transition-colors dark:text-slate-200"
    >
      {mounted && isDark ? <Sun size={16} /> : <Moon size={16} />}
    </button>
  )
}
