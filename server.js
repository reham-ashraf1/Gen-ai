import express from "express";
import cors from "cors";
import fetch from "node-fetch";
import dotenv from "dotenv";

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());

const HF_API_KEY = process.env.HUGGINGFACE_API_KEY;
const MODEL = "facebook/blenderbot-400M-distill"; // Change model name

app.post("/chat", async (req, res) => {
  const { message } = req.body;
  console.log("Received message:", message);

  try {
    const response = await fetch(`https://api-inference.huggingface.co/models/${MODEL}`, {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${HF_API_KEY}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ inputs: message })
    });

    const data = await response.json();
    console.log("API Response:", data);

    if (data.error) {
      return res.json({ reply: `❌ API Error: ${data.error}` });
    }

    res.json({ reply: data[0]?.generated_text || "⚠️ No response from AI." });
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: "Something went wrong." });
  }
});

app.listen(3000, () => console.log("🚀 Server running on port 3000"));
