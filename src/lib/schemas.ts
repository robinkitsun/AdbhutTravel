
import { z } from 'zod';

export const contactFormSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  subject: z.string().min(5, { message: "Subject must be at least 5 characters." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
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
