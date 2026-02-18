"use client"

import Link from "next/link"
import { useLocale } from "next-intl"
import { usePathname, useSearchParams } from "next/navigation"

const LangageSwitcher = () => {
  const locale = useLocale()
  const pathname = usePathname()
  const searchParams = useSearchParams()

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

  return (
    <div className="flex gap-2">
      {["fr", "en"].map((lang) => (
        <Link
          key={lang}
          href={getLocaleHref(lang)}
          scroll={false}
          onClick={() => {
            if (typeof window !== "undefined") {
              sessionStorage.setItem("locale-switch-scroll-y", String(window.scrollY))
            }
          }}
          className={`px-3 py-1 rounded-md transition-all duration-300 ${
            locale === lang
              ? "bg-primary text-white scale-105"
              : "hover:bg-slate-200 dark:hover:bg-slate-800"
          }`}
        >
          {lang.toUpperCase()}
        </Link>
      ))}
    </div>
  )
}

export default LangageSwitcher
