import { cn } from "@/lib/cn" // Importe ton utilitaire
import React from "react"

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "outline" | "ghost"
  isLoading?: boolean
}

const Button = ({
  children,
  variant = "primary",
  className,
  ...props
}: ButtonProps) => {
  return (
    <button
      className={cn(
        "inline-flex items-center justify-center rounded-lg font-bold transition-all",
        "active:scale-95 disabled:opacity-50",

        variant === "primary" &&
          "bg-primary shadow-primary/20 text-white shadow-lg hover:brightness-110",
        variant === "outline" &&
          "border-primary text-primary hover:bg-primary/5 border-2",
        variant === "ghost" &&
          "text-slate-600 hover:bg-slate-100 dark:text-slate-400",

        className
      )}
      {...props}
    >
      {children}
    </button>
  )
}

export default Button
