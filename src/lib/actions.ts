
"use server";

import { z } from 'zod';
import { Resend } from 'resend';
import { contactFormSchema, miceFormSchema, tailoredTripFormSchema } from "./schemas";

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
      to: 'info@adbhuttravel.in',
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

type MiceFormState = {
    message: string;
    success: boolean;
};

export async function submitMiceForm(
  data: z.infer<typeof miceFormSchema>
): Promise<MiceFormState> {

  if (!process.env.RESEND_API_KEY) {
      console.error("Resend API key is not configured.");
      return {
          message: "The form is not configured to send emails. Please contact support.",
          success: false,
      }
  }

  try {
    const resend = new Resend(process.env.RESEND_API_KEY);
    const formDetailsHtml = `
      <h2>MICE Inquiry Details</h2>
      <p><strong>Name:</strong> ${data.firstName} ${data.lastName}</p>
      <p><strong>Email:</strong> ${data.email}</p>
      <p><strong>Phone:</strong> ${data.countryCode} ${data.phone}</p>
      <p><strong>Month of Travel:</strong> ${data.monthOfTravel}</p>
      <p><strong>Number of Guests:</strong> ${data.guests}</p>
      <p><strong>Destinations:</strong> ${data.destinations || 'N/A'}</p>
      <p><strong>Hotel Category:</strong> ${data.hotelCategory}</p>
      <p><strong>Hotel Type:</strong> ${data.hotelType}</p>
      <p><strong>Service Required:</strong> ${data.serviceRequired || 'N/A'}</p>
      <p><strong>Additional Info:</strong> ${data.additionalInfo || 'N/A'}</p>
    `;

    await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: 'info@adbhuttravel.in',
      reply_to: data.email,
      subject: 'New MICE Corporate Travel Inquiry',
      html: formDetailsHtml,
    });


    return {
      message: "Your message has been sent successfully! We will get back to you shortly.",
      success: true,
    };

  } catch (error) {
    console.error("Failed to send MICE email:", error);
    return {
      message: "Something went wrong. Please try again later.",
      success: false,
    };
  }
}


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
            cc: 'info@adbhuttravel.in',
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
          to: 'info@adbhuttravel.in',
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
