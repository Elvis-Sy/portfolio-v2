import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import LangageSwitcher from "@/components/ui/LangageSwitcher"
import SwitchTheme from "@/components/ui/SwitchTheme"

type Props = {
  backHref: string
  backLabel: string
}

const ProjectDetailsHeader = ({ backHref, backLabel }: Props) => {
  return (
    <header className="bg-background-light/70 dark:bg-background-dark/70 text-foreground-light dark:text-foreground-dark fixed top-0 right-0 left-0 z-50 border-b border-slate-200 backdrop-blur-sm dark:border-slate-800">
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <Link
          href={backHref}
          className="hover:text-primary inline-flex items-center gap-2 text-sm font-bold tracking-tight uppercase transition-colors"
        >
          <ArrowLeft size={16} />
          {backLabel}
        </Link>

        <div className="flex items-center gap-6">
          <LangageSwitcher />
          <SwitchTheme />
        </div>
      </nav>
    </header>
  )
}

export default ProjectDetailsHeader
