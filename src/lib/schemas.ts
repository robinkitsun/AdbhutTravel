
import { z } from 'zod';

export const contactFormSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  subject: z.string().min(5, { message: "Subject must be at least 5 characters." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
});

export const miceFormSchema = z.object({
  firstName: z.string().min(1, { message: "First name is required." }),
  lastName: z.string().min(1, { message: "Last name is required." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  countryCode: z.string(),
  phone: z.string().min(10, { message: "Please enter a valid phone number." }),
  monthOfTravel: z.string().optional(),
  guests: z.string().min(1, { message: "Number of guests is required." }),
  destinations: z.string().optional(),
  hotelCategory: z.string().optional(),
  hotelType: z.string().optional(),
  serviceRequired: z.string().optional(),
  additionalInfo: z.string().optional(),
});

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
  mobile: z.string().trim().min(10, { message: "Mobile number must be at least 10 digits." })
    .refine(val => /^\d{10,15}$/.test(val), { message: "Please enter a valid mobile number." }),
});
