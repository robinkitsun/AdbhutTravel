"use server";

import { chatWithAgent } from "@/ai/flows/chat-flow";

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
