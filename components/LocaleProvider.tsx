"use client"

import { NextIntlClientProvider } from "next-intl"
import React from "react"

type Props = {
  locale: string
  messages: Record<string, unknown>
  children: React.ReactNode
}

export default function LocaleProvider({ locale, messages, children }: Props) {
  return (
    <NextIntlClientProvider
      key={locale}
      locale={locale}
      messages={messages}
      timeZone="UTC"
    >
      {children}
    </NextIntlClientProvider>
  )
}
