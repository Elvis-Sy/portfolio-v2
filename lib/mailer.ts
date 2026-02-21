import emailjs from "@emailjs/browser"

type MailPayload = {
  name: string
  email: string
  message: string
}

let isInitialized = false

const requireEnv = (key: string) => {
  const value = process.env[key]
  if (!value) {
    throw new Error(`Missing environment variable: ${key}`)
  }
  return value
}

const initEmailJs = () => {
  if (isInitialized) return
  const publicKey = requireEnv("NEXT_PUBLIC_USER_ID")
  emailjs.init({
    publicKey,
    limitRate: {
      throttle: 10000,
    },
  })
  isInitialized = true
}

const sendContactMail = async ({ name, email, message }: MailPayload) => {
  const serviceId = requireEnv("NEXT_PUBLIC_SERVICE_ID")
  const templateId = requireEnv("NEXT_PUBLIC_TEMPLATE_ID")
  initEmailJs()
  return emailjs.send(serviceId, templateId, {
    name,
    email,
    message,
    subject: "Demande de contact depuis le portfolio",
  })
}

export default sendContactMail
