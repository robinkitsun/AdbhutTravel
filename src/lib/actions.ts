"use server";

import { generateTravelItinerary } from "@/ai/flows/generate-travel-itinerary";
import { z } from "zod";

const formSchema = z.object({
  dates: z.string().min(5, "Please specify travel dates."),
  budget: z.string().min(3, "Please specify a budget."),
  preferences: z.string().min(10, "Please describe your preferences."),
  popularTouristDestinations: z.string().optional(),
});

type FormState = {
  message: string;
  itinerary: string | null;
  success: boolean;
};

export async function planTrip(
  prevState: FormState,
  formData: FormData
): Promise<FormState> {
  try {
    const validatedFields = formSchema.safeParse({
      dates: formData.get("dates"),
      budget: formData.get("budget"),
      preferences: formData.get("preferences"),
      popularTouristDestinations: formData.get("popularTouristDestinations"),
    });

    if (!validatedFields.success) {
      return {
        message: "Invalid form data. Please check your inputs.",
        itinerary: null,
        success: false,
      };
    }
    
    const result = await generateTravelItinerary(validatedFields.data);

    if (result.itinerary) {
      return {
        message: "Itinerary generated successfully.",
        itinerary: result.itinerary,
        success: true,
      };
    } else {
      return {
        message: "Failed to generate itinerary. Please try again.",
        itinerary: null,
        success: false,
      };
    }
  } catch (error) {
    console.error(error);
    return {
      message: "An unexpected error occurred. Please try again later.",
      itinerary: null,
      success: false,
    };
  }
}
