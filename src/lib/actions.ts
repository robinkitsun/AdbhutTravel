
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
  
  const footerHtml = `
    <table width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color: #f8f9fa; color: #343a40; padding: 32px 16px; border-top: 1px solid #dee2e6; margin-top: 32px;">
      <tr>
        <td align="center">
          <table width="100%" cellpadding="0" cellspacing="0" border="0" style="max-width: 1200px;">
            <tr>
              <td align="center" style="padding-bottom: 32px;">
                <img src="https://www.adbhuttravel.com/wp-content/uploads/2025/07/Adbhut-Affilications-Cetifications.png" alt="Certifications" style="max-width: 100%; height: auto;" />
              </td>
            </tr>
            <tr>
              <td valign="top">
                <table width="100%" cellpadding="0" cellspacing="0" border="0">
                  <tr>
                    <td width="25%" valign="top" style="padding-right: 16px;">
                      <img src="https://www.adbhuttravel.com/wp-content/uploads/2025/07/adbhut_transparent.png" alt="Adbhut Logo" style="width: 150px; height: auto; margin-bottom: 1rem;" />
                      <p style="font-weight: 600; margin: 0;">Adbhut Travel And Event Pvt. Ltd.</p>
                      <p style="font-size: 0.875rem; color: #6c757d; margin: 0;">Our Effort Your Comfort<br>CIN: U63090HR2020PTC086874</p>
                    </td>
                    <td width="25%" valign="top" style="padding-right: 16px;">
                      <h3 style="font-weight: 600; margin: 0 0 1rem 0;">Quick Links</h3>
                      <ul style="list-style: none; padding: 0; margin:0; font-size: 0.875rem;">
                        <li style="margin-bottom: 8px;"><a href="https://adbhuttravel.com/about" style="color: #6c757d; text-decoration: none;">About Us</a></li>
                        <li style="margin-bottom: 8px;"><a href="https://adbhuttravel.com/services" style="color: #6c757d; text-decoration: none;">Services</a></li>
                        <li style="margin-bottom: 8px;"><a href="https://adbhuttravel.com/mice" style="color: #6c757d; text-decoration: none;">MICE</a></li>
                        <li><a href="https://adbhuttravel.com/contact" style="color: #6c757d; text-decoration: none;">Contact Us</a></li>
                      </ul>
                    </td>
                    <td width="25%" valign="top" style="padding-right: 16px;">
                      <h3 style="font-weight: 600; margin: 0 0 1rem 0;">Legal</h3>
                      <ul style="list-style: none; padding: 0; margin:0; font-size: 0.875rem;">
                        <li style="margin-bottom: 8px;"><a href="https://adbhuttravel.com/terms-of-service" style="color: #6c757d; text-decoration: none;">Policy & Terms of Service</a></li>
                        <li style="margin-bottom: 8px;"><a href="https://adbhuttravel.com/cancellation-policy" style="color: #6c757d; text-decoration: none;">Refund Policy</a></li>
                        <li style="margin-bottom: 8px;"><a href="https://adbhuttravel.com/legal" style="color: #6c757d; text-decoration: none;">Legal Information</a></li>
                        <li><a href="https://adbhuttravel.com/career" style="color: #6c757d; text-decoration: none;">Careers</a></li>
                      </ul>
                    </td>
                    <td width="25%" valign="top">
                      <h3 style="font-weight: 600; margin: 0 0 1rem 0;">Contact</h3>
                      <ul style="list-style: none; padding: 0; margin:0; font-size: 0.875rem; color: #6c757d;">
                        <li style="margin-bottom: 12px;">
                          📍 SCF 61, 1st Floor, Near Anaj Mandi Gate, Pehowa, Kurukshetra, Haryana-136128
                        </li>
                        <li style="margin-bottom: 12px;">
                           📞 <a href="tel:18008905147" style="color: #6c757d; text-decoration: none;">Toll Free: 1800 890 5147</a><br>
                           &nbsp;&nbsp;&nbsp; <a href="tel:+919671825147" style="color: #6c757d; text-decoration: none;">Mobile: +91-9671825147</a>
                        </li>
                        <li>
                          ✉️ <a href="mailto:info@adbhuttravel.in" style="color: #6c757d; text-decoration: none;">info@adbhuttravel.in</a>
                        </li>
                      </ul>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
             <tr>
              <td align="center" style="padding-top: 32px; border-top: 1px solid #dee2e6; margin-top: 32px;">
                <p style="font-size: 0.875rem; color: #6c757d; margin: 0;">&copy; ${new Date().getFullYear()} Adbhut Travel And Event Pvt. Ltd. All Rights Reserved.</p>
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>`;

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
      ${footerHtml}
    </div>
  `;

  try {
    // Send confirmation email to customer, CC admin
    await resend.emails.send({
      from: RESEND_FROM_EMAIL,
      to: data.email,
      cc: ADMIN_EMAIL,
      subject: `Your Signed Terms & Conditions with Adbhut Travel - ${data.name}`,
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
