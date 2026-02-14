"use client"

import { useState } from "react"
import { Terminal, Menu, X } from "lucide-react"
import Button from "./ui/Button"
import Link from "next/link"
import SwitchTheme from "./ui/SwitchTheme"

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  const links = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Experience", href: "#experience" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
  ]

  return (
    <header className="bg-background-light/70 dark:bg-background-dark/70 text-foreground-light dark:text-foreground-dark fixed top-0 right-0 left-0 z-50 border-b border-slate-200/50 backdrop-blur-sm dark:border-slate-800">
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <Link href="#home" className="group flex cursor-pointer items-center gap-2">
          <div className="bg-primary flex size-8 items-center justify-center rounded text-white">
            <Terminal size={18} />
          </div>
          <span className="text-xl font-bold tracking-tight">ES</span>
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <Link
              key={link.name}
              className="hover:text-primary text-sm font-medium transition-colors"
              href={link.href}
            >
              {link.name}
            </Link>
          ))}
          <SwitchTheme />
          <Button
            variant="primary"
            className="bg-primary shadow-primary/20 rounded-lg px-5 py-2 text-sm font-bold text-white shadow-lg transition-all hover:brightness-110"
          >
            <Link href="#contact">Hire Me</Link>
          </Button>
        </div>

        {/* Burger Button (Mobile) */}
        <button
          className="p-2 text-slate-600 transition-colors md:hidden dark:text-slate-300"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`bg-background-light dark:bg-background-dark fixed inset-x-0 top-16 border-b border-slate-200 p-6 transition-all duration-300 md:hidden dark:border-slate-800 ${isOpen ? "translate-y-0 opacity-100" : "pointer-events-none -translate-y-5 opacity-0"} `}
      >
        <div className="flex flex-col gap-5">
          {links.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="hover:text-primary text-base font-medium transition-colors"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <Link
            className="bg-primary shadow-primary/20 w-full rounded-lg py-3 text-center font-bold text-white shadow-lg"
            href="#contact"
            onClick={() => setIsOpen(false)}
          >
            Hire Me
          </Link>
        </div>
      </div>
    </header>
  )
}

export default Navbar
