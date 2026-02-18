"use server";

import { Resend } from "resend";
import { z } from "zod";

const contactFormSchema = z.object({
    name: z.string().min(2, { message: "Name must be at least 2 characters." }),
    email: z.string().email({ message: "Please enter a valid email address." }),
    phone: z.string().optional(),
    company: z.string().optional(),
    message: z.string().min(10, { message: "Message must be at least 10 characters." }),
});

export type ContactFormState = {
    success: boolean;
    message: string;
    errors?: {
        [K in keyof z.infer<typeof contactFormSchema>]?: string[];
    };
};

export async function sendContactEmail(
    prevState: ContactFormState,
    formData: FormData
): Promise<ContactFormState> {
    const resend = new Resend(process.env.RESEND_API_KEY);

    const validatedFields = contactFormSchema.safeParse({
        name: formData.get("name"),
        email: formData.get("email"),
        phone: formData.get("phone"),
        company: formData.get("company"),
        message: formData.get("message"),
    });

    if (!validatedFields.success) {
        return {
            success: false,
            message: "Please fix the errors in the form.",
            errors: validatedFields.error.flatten().fieldErrors,
        };
    }

    const { name, email, phone, company, message } = validatedFields.data;

    try {
        const data = await resend.emails.send({
            from: "Ananta Systems <contact@email.anantasystems.com.au>",
            to: ["aryan@anantasystems.com.au"],
            // Ideally this should be an env var like CONTACT_EMAIL_TO
            // But for now hardcoding to a placeholder or the user's email if I knew it.
            // I'll use a placeholder or ask the user.
            // Actually, I'll use the user's email from the contact page mailto link: systemsananta@gmail.com
            subject: `New Contact Form Submission from ${name}`,
            text: `
        Name: ${name}
        Email: ${email}
        Phone: ${phone || "Not provided"}
        Company: ${company || "Not provided"}
        
        Message:
        ${message}
      `,
        });

        if (data.error) {
            return {
                success: false,
                message: `Resend Error: ${data.error.message}`,
            };
        }

        return {
            success: true,
            message: "Message sent! We'll get back to you shortly.",
        };
    } catch (error) {
        return {
            success: false,
            message: `Server Error: ${error instanceof Error ? error.message : JSON.stringify(error)}`,
        };
    }
}
