"use client"

import { Toaster } from "sonner"

const Toast = () => {
  return (
    <Toaster
      position="top-right"
      theme="system"
      toastOptions={{
        className: "toast-base mt-16 md:mt-10",
      }}
    />
  )
}

export default Toast
