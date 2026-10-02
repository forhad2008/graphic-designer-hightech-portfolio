import express from 'express';
import { createServer as createViteServer } from 'vite';
import { GoogleGenAI } from '@google/genai';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
app.use(express.json());

const apiKey = process.env.GEMINI_API_KEY || process.env.API_KEY || '';
const ai = new GoogleGenAI({
  apiKey,
  httpOptions: {
    headers: {
      'User-Agent': 'aistudio-build',
    }
  }
});

// Multi-turn Gemini Chatbot Endpoint
app.post('/api/chat', async (req, res) => {
  try {
    const { messages, systemInstruction } = req.body;
    if (!messages || !Array.isArray(messages) || messages.length === 0) {
      return res.status(400).json({ error: 'Messages array is required' });
    }

    const formattedHistory = messages.slice(0, -1).map((m: any) => ({
      role: m.role === 'assistant' ? 'model' : 'user',
      parts: [{ text: m.text }]
    }));
    const lastMessage = messages[messages.length - 1]?.text || '';

    const chat = ai.chats.create({
      model: 'gemini-3.8-flash',
      history: formattedHistory,
      config: systemInstruction ? { systemInstruction } : undefined
    });

    const response = await chat.sendMessage({ message: lastMessage });
    res.json({ reply: response.text || 'No response generated.' });
  } catch (err: any) {
    console.error('Chat error details:', err);
    res.json({ reply: "I'm ready to bring your logo and brand vision to life! Feel free to reach out to me (Abdullah Forhad) directly on WhatsApp at +880 1342 900364 or email pchamza2025@gmail.com to discuss your project." });
  }
});

async function startServer() {
  const vite = await createViteServer({
    server: { middlewareMode: true },
    appType: 'spa'
  });

  app.use(vite.middlewares);

  const PORT = Number(process.env.PORT) || 3000;
  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
