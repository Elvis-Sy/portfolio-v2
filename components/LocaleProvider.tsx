"use client"

import { NextIntlClientProvider } from "next-intl";
import React from "react";

type Props = {
  locale: string;
  messages: Record<string, any>;
  children: React.ReactNode;
};

export default function LocaleProvider({ locale, messages, children }: Props) {
  return (
    <NextIntlClientProvider key={locale} locale={locale} messages={messages}>
      {children}
    </NextIntlClientProvider>
  );
}
