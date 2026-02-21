import React from "react"

type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  label?: string
  textarea?: boolean
  rows?: number
  className?: string
  error?: string
}

const baseClass =
  "focus:border-primary focus:ring-primary w-full rounded-xl border-slate-700 bg-slate-800 px-4 py-3 text-white transition-all outline-none focus:ring-3"

const Input = ({
  label,
  textarea = false,
  rows = 4,
  className,
  error,
  ...props
}: InputProps) => {
  const inputId = props.id ?? props.name
  const errorId = inputId ? `${inputId}-error` : undefined
  const cls = `${baseClass} ${error ? "border-red-500 focus:border-red-400 focus:ring-red-400" : ""} ${
    className ?? ""
  }`.trim()
  return (
    <div className="space-y-2">
      {label && (
        <label
          className="text-xs font-bold tracking-widest text-slate-500 uppercase"
          htmlFor={inputId}
        >
          {label}
        </label>
      )}

      {textarea ? (
        <textarea
          {...(props as any)}
          rows={rows}
          className={cls}
          aria-invalid={error ? "true" : undefined}
          aria-describedby={errorId}
          id={inputId}
        />
      ) : (
        <input
          {...props}
          className={cls}
          aria-invalid={error ? "true" : undefined}
          aria-describedby={errorId}
          id={inputId}
        />
      )}

      {error && (
        <p className="text-xs font-semibold text-red-400" id={errorId} role="alert">
          {error}
        </p>
      )}
    </div>
  )
}

export default Input
