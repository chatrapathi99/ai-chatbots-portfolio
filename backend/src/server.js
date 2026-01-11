import express from "express";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
app.use(express.json());

// Serve chat UI page
app.get("/chat-ui", (req, res) => {
    res.sendFile(path.join(__dirname, "chat-ui.html"));
});

// API endpoint (POST only)
app.post("/api/chat", (req, res) => {
    res.json({ reply: "Your AI will respond here" });
});

app.listen(3000, () => console.log("Server running on 3000"));
