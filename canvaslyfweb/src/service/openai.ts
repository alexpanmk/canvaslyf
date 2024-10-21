import { generateText } from 'ai';
import { openai } from '@ai-sdk/openai';

export async function generateCompletion(prompt: string): Promise<string> {
  try {
    const response = await openai.createCompletion({
      model: 'text-davinci-003',
      prompt,
      max_tokens: 150,
    });
    return response.data.choices[0].text.trim();
  } catch (error) {
    console.error('Error generating completion:', error);
    throw error;
  }
}

export async function generateImage(prompt: string): Promise<string> {
  try {
    const response = await openai.createImage({
      prompt,
      n: 1,
      size: '512x512',
    });
    return response.data.data[0].url;
  } catch (error) {
    console.error('Error generating image:', error);
    throw error;
  }
}