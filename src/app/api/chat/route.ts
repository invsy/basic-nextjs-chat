import {createOpenAI, openai} from '@ai-sdk/openai';
import { convertToCoreMessages, streamText } from 'ai';
import {invsy} from "@/lib/invsy-client";

// Allow streaming responses up to 30 seconds
export const maxDuration = 30;

export async function POST(req: Request) {
    const { messages } = await req.json();

    const openai = createOpenAI({
        apiKey: process.env.OPENAI_API_KEY,
        baseURL: process.env.OPENAI_API_BASE,
    })

    const result = await streamText({
        model: openai('gpt-4-turbo'),
        system: 'You are a helpful assistant.',
        messages: convertToCoreMessages(messages),
        async onFinish({ text, toolCalls, toolResults }) {
            messages.push({
                role: 'assistant',
                content: text
            })

            // implement storage logic:
            await invsy.save({
                id: 'chat123',
                user_id: 'user123',
                messages,
                meta: {},
            });
        },
    });

    return result.toDataStreamResponse();
}