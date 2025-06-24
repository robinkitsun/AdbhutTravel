'use server';
/**
 * @fileOverview A conversational AI travel agent.
 *
 * - chatWithAgent - A function that handles the conversation with the user.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const ChatHistorySchema = z.array(
    z.object({
      role: z.enum(['user', 'assistant']),
      content: z.string(),
    })
);

const ChatInputSchema = z.object({
    message: z.string(),
    history: ChatHistorySchema,
});

export async function chatWithAgent(input: z.infer<typeof ChatInputSchema>): Promise<string> {
    const { message, history } = input;
    
    const systemPrompt = `You are a friendly and expert travel agent for 'Adbhut Explorer'. Your goal is to help users plan their dream vacation by gathering information to create a travel itinerary.
    
    Engage in a natural conversation. Ask clarifying questions one by one to understand their needs for:
    1. Destination(s)
    2. Travel Dates
    3. Budget
    4. Preferences (e.g., relaxation, adventure, cuisine)
    
    Keep your responses concise and friendly.
    
    Start by greeting the user and asking how you can help them plan their trip. Once you have gathered all necessary information, tell the user you have everything you need and can generate an itinerary for them on the AI Planner page. Do not generate the itinerary yourself. Guide them to the planner page.`;

    const historyForModel = history.map(h => ({
        role: h.role === 'assistant' ? 'model' : 'user',
        parts: [{ text: h.content }],
    }));

    const {output} = await ai.generate({
        prompt: message,
        history: historyForModel,
        system: systemPrompt,
    });
    
    return output.text;
}
