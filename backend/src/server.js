import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import { getAIResponse } from "./services/aiService.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
app.use(express.json());

// Serve chat UI page
app.get("/chat-ui", (req, res) => {
    res.sendFile(path.join(__dirname, "chat-ui.html"));
});

// API endpoint
app.post("/api/chat", async (req, res) => {
    const userMessage = req.body.message;
    const aiReply = await getAIResponse(userMessage);
    res.json({ reply: aiReply });
});

app.listen(3000, () => console.log("Server running on 3000"));
