import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { getMessages } from "next-intl/server";
import { notFound } from "next/navigation";
import { cookies } from "next/headers";
import { locales } from "@/i18n/request";
import LocaleProvider from "@/components/LocaleProvider";
import RestoreScroll from "@/components/RestoreScroll";
import "../globals.css";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export default async function LocaleLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  const { locale } = params;

  if (!locales.includes(locale)) notFound();

  const messages = await getMessages({ locale });
  const cookieStore = await cookies();
  const themeCookie = cookieStore.get("theme")?.value;
  const isDark = themeCookie === "dark";

  return (
    <html lang={locale} className={isDark ? "dark" : ""} suppressHydrationWarning>
      <body className={`${geistSans.className} ${geistMono.className} antialiased overflow-x-hidden`}>
        <RestoreScroll />
        <LocaleProvider locale={locale} messages={messages}>
          {children}
        </LocaleProvider>
      </body>
    </html>
  );
}


export async function generateMetadata({
  params
}: {
  params: { locale: string };
}): Promise<Metadata> {
  const { locale } = params;

  if (!locales.includes(locale)) {
    return { title: "Not Found" };
  }

  return {
    title: "ES Portfolio",
    description:
      locale === "fr"
        ? "Mon site portfolio personnel construit avec Next.js et Tailwind CSS."
        : "My personal portfolio website built with Next.js and Tailwind CSS.",
  };
}
