import express from "express";
import { askAI } from "../services/aiService.js";

const router = express.Router();

router.post("/", async (req, res) => {
    try {
        const { message } = req.body;

        const reply = await askAI(message);

        res.json({ reply });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "AI error" });
    }
});

export default router;
