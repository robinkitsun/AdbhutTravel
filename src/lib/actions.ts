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

const tailoredTripFormSchema = z.object({
  destination: z.string().optional(),
  startDate: z.string().optional(),
  endDate: z.string().optional(),
  adults: z.string().optional(),
  kids: z.string().default('0'),
  inclusions: z.array(z.string()).optional(),
  otherInclusion: z.string().optional(),
  comments: z.string().optional(),
  email: z.string().email({ message: "Please enter a valid email address." }).optional().or(z.literal('')),
  mobile: z.string().min(10, { message: "Please enter a valid mobile number." }),
});

type TailoredTripFormState = {
  message: string;
  errors?: {
    destination?: string[];
    startDate?: string[];
    endDate?: string[];
    adults?: string[];
    kids?: string[];
    inclusions?: string[];
    otherInclusion?: string[];
    comments?: string[];
    email?: string[];
    mobile?: string[];
  };
  success: boolean;
};

export async function submitTailoredTripForm(
  prevState: TailoredTripFormState,
  formData: FormData
): Promise<TailoredTripFormState> {
  const inclusions = formData.getAll('inclusions');
  const validatedFields = tailoredTripFormSchema.safeParse({
    destination: formData.get('destination'),
    startDate: formData.get('startDate'),
    endDate: formData.get('endDate'),
    adults: formData.get('adults'),
    kids: formData.get('kids'),
    inclusions: inclusions,
    otherInclusion: formData.get('otherInclusion'),
    comments: formData.get('comments'),
    email: formData.get('email'),
    mobile: formData.get('mobile'),
  });

  if (!validatedFields.success) {
    return {
      message: "Validation failed. Please check your input.",
      errors: validatedFields.error.flatten().fieldErrors,
      success: false,
    };
  }

  const { destination, startDate, endDate, adults, kids, email, mobile, otherInclusion, comments } = validatedFields.data;
  const selectedInclusions = validatedFields.data.inclusions;

  try {
    // In a real application, you would integrate an email service here.
    // The email should be sent to: ankitsundriyal0@gmail.com
    console.log("Tailored Trip form submitted successfully:");
    console.log({
      to: "ankitsundriyal0@gmail.com",
      destination,
      startDate,
      endDate,
      adults,
      kids,
      inclusions: selectedInclusions,
      otherInclusion,
      comments,
      email,
      mobile,
    });

    return {
      message: "Your request has been sent! We will contact you shortly.",
      success: true,
      errors: {},
    };

  } catch (error) {
    console.error("Failed to process tailored trip form:", error);
    return {
      message: "Something went wrong. Please try again later.",
      success: false,
      errors: {},
    };
  }
}
