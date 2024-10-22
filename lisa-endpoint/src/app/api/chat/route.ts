import { openai } from "@ai-sdk/openai";
import { streamText, convertToCoreMessages } from "ai";

// Allow streaming responses up to 30 seconds
export const maxDuration = 30;

export async function OPTIONS(req: Request) {
  console.log(req);
  return new Response(null, {
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type",
    },
  });
}

export async function POST(req: Request) {
  const { messages } = await req.json();
  console.log(messages);
  const result = await streamText({
    model: openai("gpt-4-turbo"),
    messages: convertToCoreMessages(messages),
  });

  return result.toDataStreamResponse();
}
