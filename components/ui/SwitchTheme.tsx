"use client"

import React, { useEffect, useState } from "react"
import { Sun, Moon } from "lucide-react"

const STORAGE_KEY = "theme"
const COOKIE_KEY = "theme"
const COOKIE_MAX_AGE = 60 * 60 * 24 * 365

export default function SwitchTheme() {
  const [isDark, setIsDark] = useState<boolean>(() => {
    try {
      const match = document.cookie.match(/(?:^|; )theme=([^;]+)/)
      if (match?.[1] === "dark") return true
      if (match?.[1] === "light") return false
      const v = localStorage.getItem(STORAGE_KEY)
      if (v === "dark") return true
      if (v === "light") return false
    } catch {
      /* noop */
    }
    return (
      typeof window !== "undefined" &&
      window.matchMedia?.("(prefers-color-scheme: dark)").matches
    )
  })

  useEffect(() => {
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
  }, [isDark])

  // sync if user changes system preference
  useEffect(() => {
    const mq = window.matchMedia?.("(prefers-color-scheme: dark)")
    if (!mq) return
    const handler = (e: MediaQueryListEvent) => {
      // only apply if user hasn't explicitly chosen (optional)
      try {
        const saved = localStorage.getItem(STORAGE_KEY)
        if (saved == null) setIsDark(e.matches)
      } catch {
        /* noop */
      }
    }
    mq.addEventListener?.("change", handler)
    return () => mq.removeEventListener?.("change", handler)
  }, [])

  return (
    <button
      aria-pressed={isDark}
      aria-label="Toggle theme"
      title="Toggle theme"
      onClick={() => setIsDark((s) => !s)}
      className="bg-primary/5 hover:bg-primary/20 dark:hover:bg-primary/10 dark:bg-background-dark/50 flex h-10 w-10 items-center justify-center rounded-full border border-slate-400/40 text-slate-700 transition-colors dark:text-slate-200"
    >
      {isDark ? <Sun size={16} /> : <Moon size={16} />}
    </button>
  )
}
