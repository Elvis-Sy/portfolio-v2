"use client"

import { useEffect } from "react"

const STORAGE_KEY = "locale-switch-scroll-y"

export default function RestoreScroll() {
  useEffect(() => {
    const saved = sessionStorage.getItem(STORAGE_KEY)
    if (saved) {
      const y = Number(saved)
      if (!Number.isNaN(y)) {
        window.scrollTo({ top: y, left: 0, behavior: "auto" })
      }
      sessionStorage.removeItem(STORAGE_KEY)
    }
  }, [])

  return null
}
