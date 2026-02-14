import React from "react"

type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  label?: string
  textarea?: boolean
  rows?: number
  className?: string
}

const baseClass =
  "focus:border-primary focus:ring-primary w-full rounded-xl border-slate-700 bg-slate-800 px-4 py-3 text-white transition-all outline-none focus:ring-3"

const Input = ({
  label,
  textarea = false,
  rows = 4,
  className,
  ...props
}: InputProps) => {
  const cls = `${baseClass} ${className ?? ""}`.trim()
  return (
    <div className="space-y-2">
      {label && (
        <label className="text-xs font-bold tracking-widest text-slate-500 uppercase">
          {label}
        </label>
      )}

      {textarea ? (
        <textarea {...(props as any)} rows={rows} className={cls} />
      ) : (
        <input {...props} className={cls} />
      )}
    </div>
  )
}

export default Input
