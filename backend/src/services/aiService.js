import OpenAI from "openai";
import dotenv from "dotenv";
dotenv.config();

const client = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY
});

export async function getAIResponse(userMessage) {
    try {
        const completion = await client.chat.completions.create({
            model: "gpt-4o-mini", // or "gpt-4" if available
            messages: [
                { role: "system", content: "You are a helpful AI chatbot." },
                { role: "user", content: userMessage }
            ],
            max_tokens: 150
        });

        // Return the AI's reply text
        return completion.choices[0].message.content;
    } catch (err) {
        console.error("AI Error:", err);
        return "Sorry, something went wrong!";
    }
}
