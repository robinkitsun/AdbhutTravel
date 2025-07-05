"use server";

import { chatWithAgent } from "@/ai/flows/chat-flow";
import { z } from 'zod';

type ChatState = {
  messages: { role: 'user' | 'assistant', content: string }[];
  response: string;
}

export async function chatWithAgentAction(
  prevState: ChatState,
  formData: FormData
): Promise<ChatState> {
  const message = formData.get("message") as string;
  const historyRaw = formData.get("history") as string;
  let history = [];
  try {
    if (historyRaw) {
      history = JSON.parse(historyRaw);
    }
  } catch (e) {
    console.error("Failed to parse chat history", e);
  }
  
  if (!message) {
    return { ...prevState, response: "Please enter a message." };
  }

  try {
    const aiResponse = await chatWithAgent({ message, history });
    return {
      messages: [...history, { role: 'user', content: message }],
      response: aiResponse,
    };
  } catch (error) {
    console.error(error);
    return {
      ...prevState,
      response: "Sorry, I encountered an error. Please try again.",
    };
  }
}


const contactFormSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  subject: z.string().min(5, { message: "Subject must be at least 5 characters." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
});

type ContactFormState = {
  message: string;
  errors?: {
    name?: string[];
    email?: string[];
    subject?: string[];
    message?: string[];
  };
  success: boolean;
};

export async function submitContactForm(
  prevState: ContactFormState,
  formData: FormData
): Promise<ContactFormState> {
  const validatedFields = contactFormSchema.safeParse({
    name: formData.get('name'),
    email: formData.get('email'),
    subject: formData.get('subject'),
    message: formData.get('message'),
  });

  if (!validatedFields.success) {
    return {
      message: "Validation failed. Please check your input.",
      errors: validatedFields.error.flatten().fieldErrors,
      success: false,
    };
  }

  const { name, email, subject, message } = validatedFields.data;

  try {
    // In a real application, you would integrate an email service here.
    // For example, using Resend, Nodemailer, or SendGrid.
    //
    // Example with Resend (you would need to install the `resend` package):
    // const resend = new Resend(process.env.RESEND_API_KEY);
    // await resend.emails.send({
    //   from: 'onboarding@resend.dev',
    //   to: 'your-email@example.com',
    //   subject: `New Contact Form Submission: ${subject}`,
    //   html: `<p>You have a new message from ${name} (${email}):</p><p>${message}</p>`,
    // });

    console.log("Contact form submitted successfully:");
    console.log({ name, email, subject, message });

    return {
      message: "Your message has been sent successfully!",
      success: true,
      errors: {},
    };

  } catch (error) {
    console.error("Failed to send email:", error);
    return {
      message: "Something went wrong. Please try again later.",
      success: false,
      errors: {},
    };
  }
}
