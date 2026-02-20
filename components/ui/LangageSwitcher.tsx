"use client"

import { useLocale } from "next-intl"
import { usePathname, useRouter, useSearchParams } from "next/navigation"
import { useEffect, useRef, useState } from "react"

const LangageSwitcher = () => {
  const locale = useLocale()
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const router = useRouter()
  const [open, setOpen] = useState(false)
  const menuRef = useRef<HTMLDivElement>(null)

  const getLocaleHref = (targetLocale: string) => {
    const safePath = pathname ?? "/"
    const segments = safePath.split("/")
    if (segments.length > 1) {
      segments[1] = targetLocale
    }
    const basePath = segments.join("/") || `/${targetLocale}`
    const query = searchParams?.toString()
    const hash = typeof window !== "undefined" ? window.location.hash : ""
    const withQuery = query ? `${basePath}?${query}` : basePath
    return `${withQuery}${hash}`
  }

  const onChange = (value: string) => {
    if (typeof window !== "undefined") {
      sessionStorage.setItem("locale-switch-scroll-y", String(window.scrollY))
    }
    router.push(getLocaleHref(value), { scroll: false })
    setOpen(false)
  }

  useEffect(() => {
    const onDocClick = (e: MouseEvent) => {
      const target = e.target as Node
      if (menuRef.current && !menuRef.current.contains(target)) {
        setOpen(false)
      }
    }
    document.addEventListener("mousedown", onDocClick)
    return () => document.removeEventListener("mousedown", onDocClick)
  }, [])

  return (
    <div className="relative" ref={menuRef}>
      <button
        type="button"
        aria-haspopup="menu"
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
        className="bg-background-light/80 dark:bg-background-dark border border-slate-300 dark:border-slate-700 text-sm font-semibold uppercase px-3 py-1.5 rounded-md transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary/60 flex items-center gap-2"
      >
        {locale.toUpperCase()}
        <span className="text-xs">▾</span>
      </button>

      {open && (
        <div className="absolute right-0 z-50 mt-2 w-28 rounded-md border border-slate-200 bg-background-light shadow-lg dark:border-slate-700 dark:bg-background-dark">
          <button
            type="button"
            role="menuitem"
            onClick={() => onChange("fr")}
            className="w-full px-3 py-2 text-left text-sm font-semibold uppercase hover:bg-slate-100 dark:hover:bg-slate-800"
          >
            FR
          </button>
          <button
            type="button"
            role="menuitem"
            onClick={() => onChange("en")}
            className="w-full px-3 py-2 text-left text-sm font-semibold uppercase hover:bg-slate-100 dark:hover:bg-slate-800"
          >
            EN
          </button>
        </div>
      )}
    </div>
  )
}

export default LangageSwitcher
