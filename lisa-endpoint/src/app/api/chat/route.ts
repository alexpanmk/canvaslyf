import { openai } from "@ai-sdk/openai";
import { streamText, convertToCoreMessages } from "ai";

// import { ChatOpenAI } from "@langchain/openai";
// import { PromptTemplate } from "@langchain/core/prompts";
// import { HttpResponseOutputParser } from "langchain/output_parsers";

// Allow streaming responses up to 30 seconds
export const maxDuration = 30;

// export async function OPTIONS(req: Request) {
export async function OPTIONS() {
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
  const result = await streamText({
    model: openai("gpt-3.5-turbo"),
    messages: convertToCoreMessages(messages),
  });

  return result.toDataStreamResponse();
}
