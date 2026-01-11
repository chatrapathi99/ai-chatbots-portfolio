import OpenAI from "openai";
import dotenv from "dotenv";
dotenv.config();

const client = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY
});

export async function askAI(message) {
    const completion = await client.chat.completions.create({
        model: "gpt-4o-mini",
        messages: [
            { role: "system", content: "You are SmartWeb AI, a helpful website assistant." },
            { role: "user", content: message }
        ]
    });

    return completion.choices[0].message.content;
}
