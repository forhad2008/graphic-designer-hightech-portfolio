import express from 'express';
import { createServer as createViteServer } from 'vite';
import { GoogleGenAI } from '@google/genai';
import dotenv from 'dotenv';
import { findMatchingKnowledge } from './src/data/agentKnowledge';
import { STUDIO_TOPIC_OPTIONS } from './src/utils/chatEngine';

dotenv.config();

const app = express();
app.use(express.json());

const apiKey = process.env.GEMINI_API_KEY || process.env.API_KEY || '';
const ai = apiKey ? new GoogleGenAI({
  apiKey,
  httpOptions: {
    headers: {
      'User-Agent': 'aistudio-build',
    }
  }
}) : null;

const STUDIO_SYSTEM_INSTRUCTION = `You are the official AI Design & Studio Advisor for Abdullah Forhad, an elite professional graphic designer specializing in Logo Design, Visual Brand Identity, Product Packaging & Dielines, and High-Converting Social Media Graphics.

Conversational Workflow:
1. When a user first enters, greets, or asks a vague question, first ask what they need from the available studio services/topics:
   - Pricing Packages (Starter $45, Standard Pro $120, Premium $280)
   - Turnaround & 24h Rush Delivery
   - Deliverables & Master Source Files (.AI, .SVG, .EPS, .PSD, 300 DPI PDF)
   - Revision Policy (Unlimited on Standard & Premium)
   - Commercial Rights & Copyright (100% exclusive transfer)
   - Product Packaging & Dielines (Boxes, labels, pouches, 3D renders)
   - High-Converting Social Media & YouTube Ads
   - How to Start & Ordering (Fiverr vs Direct WhatsApp)
2. When the user specifies an option or asks any specific question, answer intelligently, comprehensively, and specifically.
   - Mention exact dollar amounts, turnaround days, file types, and guarantees.
   - Use clean, polished markdown bullet points and bold highlights.
3. Conclude each answer by offering helpful next steps (e.g. inviting them to discuss further on WhatsApp at +880 1342 900364 or check another design service).

Designer Profile & Facts:
- Designer: Abdullah Forhad (Dhaka, Bangladesh; serving clients in USA, UK, Germany, Canada, UAE, Australia).
- Direct WhatsApp: +880 1342 900364 | Email: forhadalpha08@gmail.com.
- Turnaround: 2-4 business days (24h Express rush available).
- Revisions: Unlimited on Standard Pro ($120) & Premium Suite ($280).`;

function isGreeting(text: string): boolean {
  const clean = text.toLowerCase().trim();
  const greetings = ['hi', 'hello', 'hey', 'start', 'help', 'menu', 'options', 'salam'];
  return greetings.some(g => clean === g || clean.startsWith(g + ' '));
}

// Multi-turn Gemini Chatbot Endpoint
app.post('/api/chat', async (req, res) => {
  try {
    const { messages, systemInstruction } = req.body;
    if (!messages || !Array.isArray(messages) || messages.length === 0) {
      return res.status(400).json({ error: 'Messages array is required' });
    }

    const lastMessage = (messages[messages.length - 1]?.text || '').trim();

    // 1. If it's a greeting or first generic question, present options first
    if (isGreeting(lastMessage)) {
      return res.json({
        reply: `Hello! I am Abdullah Forhad's AI Brand & Design Advisor.\n\nTo help you with the most accurate information, what do you need assistance with today? Please select an option below:`,
        options: STUDIO_TOPIC_OPTIONS,
        suggestedAction: {
          label: 'Chat on WhatsApp',
          actionType: 'whatsapp',
          target: 'Hi Abdullah, I am visiting your portfolio and would like to discuss a project.'
        },
        source: 'knowledge-base-menu'
      });
    }

    // 2. Check for knowledge base match
    const match = findMatchingKnowledge(lastMessage);

    // 3. If Gemini is available, query Gemini
    if (ai && apiKey) {
      const formattedHistory = messages.slice(0, -1).map((m: any) => ({
        role: m.role === 'assistant' ? 'model' : 'user',
        parts: [{ text: m.text }]
      }));

      const chat = ai.chats.create({
        model: 'gemini-3.8-flash',
        history: formattedHistory,
        config: {
          systemInstruction: systemInstruction || STUDIO_SYSTEM_INSTRUCTION
        }
      });

      const response = await chat.sendMessage({ message: lastMessage });
      if (response && response.text) {
        return res.json({
          reply: response.text,
          highlights: match?.highlights,
          suggestedAction: match?.suggestedAction,
          source: 'gemini'
        });
      }
    }

    // 4. Return intelligent knowledge base answer if matched
    if (match) {
      return res.json({
        reply: match.detailedAnswer,
        matchId: match.id,
        highlights: match.highlights,
        suggestedAction: match.suggestedAction,
        source: 'knowledge-base'
      });
    }

    // 5. Default structured option-driven prompt if no match
    const defaultResponse = `I am Abdullah Forhad's AI Brand & Design Advisor.\n\nI can provide specific, in-depth details on any of our services. What would you like to explore?`;

    res.json({
      reply: defaultResponse,
      options: STUDIO_TOPIC_OPTIONS,
      source: 'knowledge-base-default'
    });
  } catch (err: any) {
    console.error('Chat error details:', err);
    const lastMessage = (req.body?.messages?.[req.body?.messages?.length - 1]?.text || '').trim();
    const match = findMatchingKnowledge(lastMessage);
    if (match) {
      return res.json({
        reply: match.detailedAnswer,
        matchId: match.id,
        highlights: match.highlights,
        suggestedAction: match.suggestedAction,
        source: 'knowledge-base'
      });
    }
    res.json({
      reply: `Hello! I am Abdullah Forhad's AI Brand & Design Advisor. What kind of project do you need help with? Select an option below to get instant pricing, timelines, or deliverables:`,
      options: STUDIO_TOPIC_OPTIONS,
      source: 'fallback'
    });
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
