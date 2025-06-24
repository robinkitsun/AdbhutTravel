// src/ai/flows/generate-travel-itinerary.ts
'use server';
/**
 * @fileOverview AI-powered tool that generates a personalized travel itinerary based on user input.
 *
 * - generateTravelItinerary - A function that handles the travel itinerary generation process.
 * - TravelItineraryInput - The input type for the generateTravelItinerary function.
 * - TravelItineraryOutput - The return type for the generateTravelItinerary function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const TravelItineraryInputSchema = z.object({
  dates: z
    .string()
    .describe('The desired travel dates, e.g., MM/DD/YYYY-MM/DD/YYYY.'),
  budget: z.string().describe('The budget for the trip, e.g., $1000-2000.'),
  preferences: z
    .string()
    .describe(
      'The preferences for the trip, e.g., beaches, mountains, adventure, relaxation, cuisine, historical sites.'
    ),
  popularTouristDestinations: z
    .string()
    .describe(
      'The popular tourist destinations the user is interested in, e.g., Paris, Rome, Tokyo, New York.'
    )
    .optional(),
});

export type TravelItineraryInput = z.infer<typeof TravelItineraryInputSchema>;

const TravelItineraryOutputSchema = z.object({
  itinerary: z.string().describe('The personalized travel itinerary.'),
});

export type TravelItineraryOutput = z.infer<typeof TravelItineraryOutputSchema>;

export async function generateTravelItinerary(
  input: TravelItineraryInput
): Promise<TravelItineraryOutput> {
  return generateTravelItineraryFlow(input);
}

const prompt = ai.definePrompt({
  name: 'generateTravelItineraryPrompt',
  input: {schema: TravelItineraryInputSchema},
  output: {schema: TravelItineraryOutputSchema},
  prompt: `You are a travel agent specializing in creating personalized travel itineraries.

You will use the information provided to generate a detailed travel itinerary with suggestions for destinations, activities, and accommodations.

Desired Travel Dates: {{{dates}}}
Budget: {{{budget}}}
Preferences: {{{preferences}}}
Popular Tourist Destinations: {{{popularTouristDestinations}}}

Generate a detailed travel itinerary:
`,
});

const generateTravelItineraryFlow = ai.defineFlow(
  {
    name: 'generateTravelItineraryFlow',
    inputSchema: TravelItineraryInputSchema,
    outputSchema: TravelItineraryOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
