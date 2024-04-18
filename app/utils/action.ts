"use server";
import OpenAI from "openai";

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

export const generateChatResponse: (
  chatMessages: OpenAI.Chat.Completions.ChatCompletionMessageParam[]
) => Promise<OpenAI.Chat.Completions.ChatCompletionMessage | null> = async (chatMessages) => {
  try {
    const response = await openai.chat.completions.create({
      messages: [{ role: "system", content: "you are a helpful assistant" }, ...chatMessages],
      model: "gpt-3.5-turbo",
      temperature: 1,
    });
    return response.choices[0].message;
  } catch (error) {
    return null;
  }
};
