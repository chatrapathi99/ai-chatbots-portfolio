import express from "express";
import cors from "cors";
import chatRoutes from "./routes/chat.js";

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/chat", chatRoutes);

app.listen(5000, () => {
    console.log("🚀 SmartWeb AI backend running on port 5000");
});
