import express from "express";
import { getAIResponse } from "../services/aiService.js";

const router = express.Router();

router.post("/", async (req, res) => {
    try {
        const { message } = req.body;

        const reply = await getAIResponse(message);

        res.json({ reply });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "AI error" });
    }
});

export default router;
