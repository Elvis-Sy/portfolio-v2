import emailjs from "@emailjs/browser"

type MailPayload = {
  name: string
  email: string
  message: string
}

let isInitialized = false

const requireEnvValue = (value: string | undefined, key: string) => {
  if (!value) {
    throw new Error(`Missing environment variable: ${key}`)
  }
  return value
}

const SERVICE_ID = process.env.NEXT_PUBLIC_SERVICE_ID
const TEMPLATE_ID = process.env.NEXT_PUBLIC_TEMPLATE_ID
const PUBLIC_KEY = process.env.NEXT_PUBLIC_USER_ID

const initEmailJs = () => {
  if (isInitialized) return
  const publicKey = requireEnvValue(PUBLIC_KEY, "NEXT_PUBLIC_USER_ID")
  emailjs.init({
    publicKey,
    limitRate: {
      throttle: 10000,
    },
  })
  isInitialized = true
}

const sendContactMail = async ({ name, email, message }: MailPayload) => {
  const serviceId = requireEnvValue(SERVICE_ID, "NEXT_PUBLIC_SERVICE_ID")
  const templateId = requireEnvValue(TEMPLATE_ID, "NEXT_PUBLIC_TEMPLATE_ID")
  const publicKey = requireEnvValue(PUBLIC_KEY, "NEXT_PUBLIC_USER_ID")
  initEmailJs()
  return emailjs.send(
    serviceId,
    templateId,
    {
      name,
      email,
      message,
      subject: "Demande de contact depuis le portfolio",
    },
    { publicKey },
  )
}

export default sendContactMail
