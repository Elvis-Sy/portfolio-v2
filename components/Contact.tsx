"use client"

import Input from "./ui/Input"
import Button from "./ui/Button"
import { Mail, MapPin, Phone, SendHorizonal } from "lucide-react"
import Link from "next/link"
import { useTranslations } from "next-intl"

const Contact = () => {
  const t = useTranslations("Contact")

  return (
    <section
      className="bg-background-light dark:bg-background-dark py-24"
      id="contact"
    >
      <div className="mx-auto max-w-7xl">
        <div className="bg-primary/5 relative overflow-hidden rounded-[3rem] border border-slate-300 p-8 shadow-sm md:p-12 dark:border-slate-800">
          <div className="bg-primary/10 absolute top-0 right-0 -mt-48 -mr-48 h-96 w-96 rounded-full blur-[120px]"></div>
          <div className="relative z-10 grid items-center gap-16 md:grid-cols-2">
            <div className="space-y-8">
              <h2 className="text-primary text-sm font-bold tracking-widest uppercase">
                {t("sectionLabel")}
              </h2>

              <h3 className="text-foreground-light/90 dark:text-foreground-dark/90 text-4xl leading-tight font-black md:text-5xl">
                {t("sectionTitle")}
              </h3>

              <p className="text-foreground-light/80 dark:text-foreground-dark/80 text-lg">
                {t("sectionDesc")}
              </p>

              <div className="space-y-6">
                <div className="text-foreground-light/90 dark:text-foreground-dark/90 flex items-center gap-4">
                  <div className="text-primary flex size-12 items-center justify-center rounded-xl bg-slate-800">
                    <Mail />
                  </div>
                  <div>
                    <p className="text-foreground-light/70 dark:text-foreground-dark/50 text-xs font-bold tracking-widest uppercase">
                      {t("emailLabel")}
                    </p>
                    <p className="text-lg font-semibold">elvissy04@gmail.com</p>
                  </div>
                </div>
                <div className="text-foreground-light/90 dark:text-foreground-dark/90 flex items-center gap-4">
                  <div className="text-primary flex size-12 items-center justify-center rounded-xl bg-slate-800">
                    <Phone />
                  </div>
                  <div>
                    <p className="text-foreground-light/70 dark:text-foreground-dark/50 text-xs font-bold tracking-widest uppercase">
                      {t("phoneLabel")}
                    </p>
                    <p className="text-lg font-semibold">+261 34 67 658 16</p>
                  </div>
                </div>
                <div className="text-foreground-light/90 dark:text-foreground-dark/90 flex items-center gap-4">
                  <div className="text-primary flex size-12 items-center justify-center rounded-xl bg-slate-800">
                    <MapPin />
                  </div>
                  <div>
                    <p className="text-foreground-light/70 dark:text-foreground-dark/50 text-xs font-bold tracking-widest uppercase">
                      {t("locationLabel")}
                    </p>
                    <p className="text-lg font-semibold">
                      Fianarantsoa, Madagascar
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex gap-4">
                <Link
                  className="hover:bg-primary flex size-12 items-center justify-center rounded-full border border-slate-700/30 bg-slate-800 text-white transition-all"
                  href="#"
                >
                  <svg className="size-5 fill-current" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.041-1.416-4.041-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"></path>
                  </svg>
                </Link>
                <Link
                  className="hover:bg-primary flex size-12 items-center justify-center rounded-full border border-slate-700/30 bg-slate-800 text-white transition-all"
                  href="#"
                >
                  <svg className="size-5 fill-current" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"></path>
                  </svg>
                </Link>
                <Link
                  className="hover:bg-primary flex size-12 items-center justify-center rounded-full border border-slate-700/30 bg-slate-800 text-white transition-all"
                  href="#"
                >
                  <svg className="size-5 fill-current" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                  </svg>
                </Link>
              </div>
            </div>

            <form className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <Input
                  label={t("formFirstName")}
                  placeholder={t("placeholderFirstName")}
                  type="text"
                />
                <Input
                  label={t("formLastName")}
                  placeholder={t("placeholderLastName")}
                  type="text"
                />
              </div>

              <Input
                label={t("formEmail")}
                placeholder={t("placeholderEmail")}
                type="email"
              />

              <Input
                label={t("formMessage")}
                textarea
                rows={4}
                placeholder={t("placeholderMessage")}
              />

              <Button
                className="bg-primary shadow-primary/20 flex w-full items-center justify-center gap-2 rounded-xl py-4 font-bold text-white shadow-lg transition-all hover:brightness-110"
                type="submit"
              >
                {t("submitButton")}
                <SendHorizonal />
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
