"use server";

import { chatWithAgent } from "@/ai/flows/chat-flow";
import { z } from 'zod';
import { Resend } from 'resend';

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
  
  if (!process.env.RESEND_API_KEY) {
      console.error("Resend API key is not configured.");
      return {
          message: "The form is not configured to send emails. Please contact support.",
          success: false,
          errors: {},
      }
  }

  const { name, email, subject, message } = validatedFields.data;

  try {
    const resend = new Resend(process.env.RESEND_API_KEY);
    await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: 'ankitsundriyal0@gmail.com',
      reply_to: email,
      subject: `New Contact Form Submission: ${subject}`,
      html: `<p>You have a new message from <strong>${name}</strong> (${email}):</p><p>${message}</p>`,
    });


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
  email: z.string().email({ message: "Please enter a valid email." }).optional().or(z.literal('')),
  mobile: z.string().optional(),
}).refine(data => !!data.email || !!data.mobile, {
    message: "Either Email or Mobile Number must be provided.",
    path: ["email"], // This will show the error message under the email field
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
      message: "Validation failed. Please provide either an email or mobile number.",
      errors: validatedFields.error.flatten().fieldErrors,
      success: false,
    };
  }

  if (!process.env.RESEND_API_KEY) {
      console.error("Resend API key is not configured.");
      return {
          message: "The form is not configured to send emails. Please contact support.",
          success: false,
          errors: {},
      }
  }

  const { destination, startDate, endDate, adults, kids, email, mobile, otherInclusion, comments } = validatedFields.data;
  const selectedInclusions = validatedFields.data.inclusions;
  
  const resend = new Resend(process.env.RESEND_API_KEY);

  try {
    let to, cc, subject, emailHtml;

    const formDetailsHtml = `
      <p><strong>Destination:</strong> ${destination || 'Not provided'}</p>
      <p><strong>Start Date:</strong> ${startDate || 'Not provided'}</p>
      <p><strong>End Date:</strong> ${endDate || 'Not provided'}</p>
      <p><strong>Adults:</strong> ${adults || 'Not provided'}</p>
      <p><strong>Kids:</strong> ${kids || '0'}</p>
      <p><strong>Inclusions:</strong></p>
      <ul>
        ${selectedInclusions?.map(i => `<li>${i}</li>`).join('') || '<li>None selected</li>'}
        ${otherInclusion ? `<li><strong>Other:</strong> ${otherInclusion}</li>` : ''}
      </ul>
      <p><strong>Comments:</strong> ${comments || 'None'}</p>
      <hr>
      <p><strong>Contact Email:</strong> ${email || 'Not provided'}</p>
      <p><strong>Contact Mobile:</strong> ${mobile || 'Not provided'}</p>
    `;

    if (email) {
      to = email;
      cc = 'ankitsundriyal0@gmail.com';
      subject = 'Your Adbhut Travel Custom Trip Request';
      emailHtml = `
        <h1>Thank You for Your Custom Trip Request!</h1>
        <p>Hello,</p>
        <p>We've received your request and our travel experts are already looking into it. We will get back to you shortly with a personalized plan.</p>
        <p>Here's a summary of the details you provided:</p>
        <hr>
        ${formDetailsHtml}
        <br>
        <p>Best regards,</p>
        <p>The Adbhut Travel Team</p>
      `;
    } else {
      to = 'ankitsundriyal0@gmail.com';
      cc = undefined;
      subject = 'New Custom Trip Request (via Mobile)';
      emailHtml = `
        <h1>New Custom Trip Request</h1>
        <p>A new custom trip request has been submitted via the website. The user did not provide an email address.</p>
        <hr>
        ${formDetailsHtml}
      `;
    }


    await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: to,
      cc: cc,
      subject: subject,
      html: emailHtml
    });

    return {
      message: "Your request has been sent! We will contact you shortly.",
      success: true,
      errors: {},
    };

  } catch (error) {
    console.error("Failed to send email via Resend:", error);
    return {
      message: "Something went wrong and we couldn't send your request. Please try again later.",
      success: false,
      errors: {},
    };
  }
}
