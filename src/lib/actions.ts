
"use server";

import { z } from 'zod';
import { Resend } from 'resend';
import { contactFormSchema, miceFormSchema, tailoredTripFormSchema, termsOfServiceSchema } from "./schemas";

const RESEND_FROM_EMAIL = 'noreply@adbhuttravel.com';
const ADMIN_EMAIL = 'ankitsundriyal0@gmail.com';

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
      from: RESEND_FROM_EMAIL,
      to: ADMIN_EMAIL,
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
      from: RESEND_FROM_EMAIL,
      to: ADMIN_EMAIL,
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
            from: RESEND_FROM_EMAIL,
            to: email,
            cc: ADMIN_EMAIL,
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
          from: RESEND_FROM_EMAIL,
          to: ADMIN_EMAIL,
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

type TermsFormState = {
  message: string;
  success: boolean;
};

export async function submitTermsOfServiceForm(
  data: z.infer<typeof termsOfServiceSchema>
): Promise<TermsFormState> {
  if (!process.env.RESEND_API_KEY) {
    console.error("Resend API key is not configured.");
    return {
      message: "The form is not configured to send emails. Please contact support.",
      success: false,
    }
  }

  const resend = new Resend(process.env.RESEND_API_KEY);

  const documentHtml = `
    <div style="font-family: sans-serif; max-width: 800px; margin: auto; border: 1px solid #eee; padding: 20px;">
      <img src="https://www.adbhuttravel.com/wp-content/uploads/2025/07/adbhut_transparent.png" alt="Adbhut Travel Logo" style="max-width: 188px; margin-bottom: 20px;">
      <h1 style="text-align: center; font-size: 24px;">Terms & Conditions Agreement</h1>
      
      <h2>Client Information:</h2>
      <p><strong>Name:</strong> ${data.name}</p>
      <p><strong>Email:</strong> ${data.email}</p>
      <p><strong>Mobile:</strong> ${data.mobile}</p>
      <p><strong>Address:</strong> ${data.address}</p>
      <p><strong>ID Number:</strong> ${data.idNumber}</p>

      <hr style="margin: 20px 0;" />

      <h2>Form Responses:</h2>
      <p><strong>Q1. Service for self or other?:</strong> ${data.serviceFor}${data.serviceFor === 'other' ? ` (${data.relationship})` : ''}</p>
      <p><strong>Q2. Any pending legal case?:</strong> ${data.legalCase}${data.legalCase === 'yes' ? ` (${data.legalCaseDetails})` : ''}</p>
      <p><strong>Q3. Documents are genuine?:</strong> ${data.docsGenuine}</p>
      <p><strong>Q4. Original documents given?:</strong> ${data.originalDocsGiven}</p>
      
      <h3 style="margin-top: 20px;">Traveler Details:</h3>
      <div style="border: 1px solid #ddd; padding: 10px; border-radius: 5px;">
          <p><strong>Passenger and passport details:</strong><br>${data.passengerDetails.replace(/\n/g, '<br>')}</p>
          <p><strong>Description of travel service:</strong><br>${data.travelServiceDescription.replace(/\n/g, '<br>')}</p>
          <p><strong>Total fee per person:</strong> ${data.totalFee}</p>
      </div>

      <hr style="margin: 20px 0;" />

      <h2>Agreement Certification</h2>
      <p style="background-color: #f0f0f0; padding: 15px; border-left: 4px solid #1a73e8;">
        <strong>Certified and Agreed:</strong> I hereby certify that I have read the complete terms and conditions and we accept these terms and conditions and if any of my statements is false then legal action should be taken against me.
      </p>
      
      <div style="margin-top: 30px; border-top: 1px solid #eee; padding-top: 20px;">
          <p><strong>Signature:</strong> ${data.signature}</p>
          <p><strong>Place:</strong> ${data.place}</p>
          <p><strong>Date of Agreement:</strong> ${new Date(data.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
      </div>
    </div>
  `;

  try {
    // Send email to admin
    await resend.emails.send({
      from: RESEND_FROM_EMAIL,
      to: ADMIN_EMAIL,
      subject: `Terms & Conditions Signed by ${data.name}`,
      html: documentHtml,
    });

    // Send confirmation email to customer
    await resend.emails.send({
      from: RESEND_FROM_EMAIL,
      to: data.email,
      subject: 'Your Signed Terms & Conditions with Adbhut Travel',
      html: `
        <h1>Thank you for your submission</h1>
        <p>Dear ${data.name},</p>
        <p>Thank you for completing the Terms & Conditions agreement. A copy of your submitted document is attached below for your records.</p>
        <hr>
        ${documentHtml}
        <br>
        <p>Best regards,</p>
        <p>The Adbhut Travel Team</p>
      `,
    });

    return {
      message: "Agreement submitted successfully! A copy has been sent to your email.",
      success: true,
    };
  } catch (error) {
    console.error("Failed to send terms of service email:", error);
    return {
      message: "An error occurred while submitting the agreement. Please try again.",
      success: false,
    };
  }
}
