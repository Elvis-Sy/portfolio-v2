import createMiddleware from "next-intl/middleware";
import { locales, defaultLocale } from "./i18n/request";

export default createMiddleware({
  locales,
  defaultLocale,
  localeDetection: true,
});

export const config = {
  matcher: [
    // skip API, _next and static assets
    "/((?!api|_next|.*\\..*).*)"
  ]
};
