"use server"

import { Resend } from "resend"
import { validateString } from "@/lib/utils"

const resend = new Resend(process.env.RESEND_API_KEY)

export const sendEmail = async (formData: FormData) => {
    const senderEmail = formData.get('senderEmail')
    const message = formData.get('message')

    if (!validateString(senderEmail, 150)) {
        return {
            error: "invalid sender email"
        }
    }

    if (!validateString(message, 5000)) {
        return {
            error: "invalid message"
        }
    }


    await resend.emails.send({
        from: 'Contact Form<onboarding@resend.dev>',
        to: "joulworking@gmail.com",
        subject: "Message from contact form",
        reply_to: senderEmail as string,
        text: message as string,
    })
}