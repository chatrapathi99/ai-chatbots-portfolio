// backend/src/server.js
import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import cors from "cors";
import dotenv from "dotenv";
import { getAIResponse } from "./services/aiService.js"; // your AI logic

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
app.use(cors());
app.use(express.json());

// Serve React build
app.use(express.static(path.join(__dirname, "../../widget/build")));

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "../../widget/build/index.html"));
});

// AI chat API
app.post("/api/chat", async (req, res) => {
    const userMessage = req.body.message;
    const aiReply = await getAIResponse(userMessage);
    res.json({ reply: aiReply });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
