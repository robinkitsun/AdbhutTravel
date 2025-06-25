"use server";

import { generateTravelItinerary } from "@/ai/flows/generate-travel-itinerary";
import { chatWithAgent } from "@/ai/flows/chat-flow";
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

export async function getTripOutline(packageName: string, duration: string): Promise<string> {
    try {
        const result = await generateTravelItinerary({
            dates: duration,
            budget: 'Varies based on selection',
            preferences: `A standard tour package including popular sights and activities for ${packageName}. Please provide a detailed, day-by-day plan.`,
            popularTouristDestinations: packageName,
        });
        
        return result.itinerary || "Could not generate an itinerary at this time. Please contact us for details.";
    } catch (error) {
        console.error("Error generating trip outline:", error);
        return "There was an error generating the itinerary. Please try again later.";
    }
}
