import { getRequestConfig } from "next-intl/server";

export const locales = ["en", "fr"];
export const defaultLocale = "fr";

export default getRequestConfig(async ({ locale, requestLocale }) => {
  const resolvedLocale = locale ?? (await requestLocale) ?? defaultLocale;
  const safeLocale = locales.includes(resolvedLocale) ? resolvedLocale : defaultLocale;
  const messages = (await import(`../messages/${safeLocale}.json`)).default;

  return { locale: safeLocale, messages };
});
