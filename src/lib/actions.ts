
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


export const contactFormSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  subject: z.string().min(5, { message: "Subject must be at least 5 characters." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
});

type ContactFormState = {
  message: string;
  success: boolean;
};

export async function submitContactForm(
  data: z.infer<typeof contactFormSchema>
): Promise<ContactFormState> {
  
  if (!process.env.RESEND_API_KEY) {
      console.error("Resend API key is not configured.");
      return {
          message: "The form is not configured to send emails. Please contact support.",
          success: false,
      }
  }

  const { name, email, subject, message } = data;

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
    };

  } catch (error) {
    console.error("Failed to send email:", error);
    return {
      message: "Something went wrong. Please try again later.",
      success: false,
    };
  }
}

export const tailoredTripFormSchema = z.object({
  destination: z.string().optional(),
  startDate: z.date().optional(),
  endDate: z.date().optional(),
  adults: z.string().optional(),
  kids: z.string().optional(),
  inclusions: z.array(z.string()).optional(),
  otherInclusion: z.string().optional(),
  comments: z.string().optional(),
  email: z.string().email({ message: "Please enter a valid email." }).optional().or(z.literal('')),
  mobile: z.string({required_error: "Mobile number is required."})
    .min(10, { message: "Mobile number must be at least 10 digits." })
    .regex(/^\d{10,15}$/, { message: "Please enter a valid mobile number." }),
});

type TailoredTripFormState = {
  message: string;
  success: boolean;
};

export async function submitTailoredTripForm(
  data: z.infer<typeof tailoredTripFormSchema>
): Promise<TailoredTripFormState> {

  if (!process.env.RESEND_API_KEY) {
      console.error("Resend API key is not configured.");
      return {
          message: "The form is not configured to send emails. Please contact support.",
          success: false,
      }
  }

  const { destination, startDate, endDate, adults, kids, email, mobile, otherInclusion, comments, inclusions } = data;
  
  const resend = new Resend(process.env.RESEND_API_KEY);

  try {
    const formDetailsHtml = `
      <p><strong>Destination:</strong> ${destination || 'Not provided'}</p>
      <p><strong>Start Date:</strong> ${startDate ? startDate.toDateString() : 'Not provided'}</p>
      <p><strong>End Date:</strong> ${endDate ? endDate.toDateString() : 'Not provided'}</p>
      <p><strong>Adults:</strong> ${adults || 'Not provided'}</p>
      <p><strong>Kids:</strong> ${kids || '0'}</p>
      <p><strong>Inclusions:</strong></p>
      <ul>
        ${inclusions?.map(i => `<li>${i}</li>`).join('') || '<li>None selected</li>'}
        ${otherInclusion ? `<li><strong>Other:</strong> ${otherInclusion}</li>` : ''}
      </ul>
      <p><strong>Comments:</strong> ${comments || 'None'}</p>
      <hr>
      <p><strong>Contact Email:</strong> ${email || 'Not provided'}</p>
      <p><strong>Contact Mobile:</strong> ${mobile || 'Not provided'}</p>
    `;

    // Send confirmation to customer if email is provided
    if (email) {
        await resend.emails.send({
            from: 'onboarding@resend.dev',
            to: email,
            cc: 'ankitsundriyal0@gmail.com',
            subject: 'Your Adbhut Travel Custom Trip Request',
            html: `
              <h1>Thank You for Your Custom Trip Request!</h1>
              <p>Hello,</p>
              <p>We've received your request and our travel experts are already looking into it. We will get back to you shortly with a personalized plan.</p>
              <p>Here's a summary of the details you provided:</p>
              <hr>
              ${formDetailsHtml}
              <br>
              <p>Best regards,</p>
              <p>The Adbhut Travel Team</p>
            `,
        });
    } else {
         // Send notification to the admin if no customer email
        await resend.emails.send({
          from: 'onboarding@resend.dev',
          to: 'ankitsundriyal0@gmail.com',
          subject: 'New Custom Trip Request (No Customer Email)',
          html: `
            <h1>New Custom Trip Request</h1>
            <p>A new custom trip request has been submitted via the website.</p>
            <hr>
            ${formDetailsHtml}
          `
        });
    }

    return {
      message: "Your request has been sent! We will contact you shortly.",
      success: true,
    };

  } catch (error) {
    console.error("Failed to send email via Resend:", error);
    return {
      message: "Something went wrong and we couldn't send your request. Please try again later.",
      success: false,
    };
  }
}
