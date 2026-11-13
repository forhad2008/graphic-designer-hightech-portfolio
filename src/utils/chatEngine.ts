import { AGENT_KNOWLEDGE_BASE, findMatchingKnowledge, KnowledgeItem } from '../data/agentKnowledge';

export interface ChatOption {
  label: string;
  query: string;
  description?: string;
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'assistant';
  text: string;
  timestamp: string;
  options?: ChatOption[];
  highlights?: string[];
  suggestedAction?: {
    label: string;
    actionType: 'whatsapp' | 'email' | 'scroll' | 'link';
    target: string;
  };
}

export const STUDIO_TOPIC_OPTIONS: ChatOption[] = [
  {
    label: '💼 Pricing & Packages',
    query: 'What are your logo & brand design pricing packages?',
    description: 'Starter ($45), Standard Pro ($120), Premium ($280)'
  },
  {
    label: '⚡ Turnaround & 24h Rush',
    query: 'Can you deliver within 24 hours? What is your turnaround time?',
    description: 'Standard 2–4 days or 24-hour express rush'
  },
  {
    label: '📁 Deliverables & Files',
    query: 'What source files and deliverables will I receive?',
    description: 'Master .AI, .SVG, .EPS, .PSD, 300 DPI CMYK PDF'
  },
  {
    label: '🔄 Revision Policy',
    query: 'How do revisions work and how many are included?',
    description: 'Unlimited revisions on Standard and Premium'
  },
  {
    label: '©️ Commercial Rights',
    query: 'Do I get full commercial copyright and trademark ownership?',
    description: '100% exclusive copyright and trademark ready'
  },
  {
    label: '📦 Packaging & Dielines',
    query: 'Do you design product packaging, labels, and box dielines?',
    description: 'Box dielines, pouches, bottle & jar labels'
  },
  {
    label: '📱 Social Media & Ads',
    query: 'Do you design high-converting social media ads and banners?',
    description: 'High-CTR YouTube thumbnails, LinkedIn & Meta ads'
  },
  {
    label: '🚀 How to Start Project',
    query: 'How do we get started on my design project?',
    description: 'Easy 4-step workflow from brief to delivery'
  },
  {
    label: '📞 Talk to Abdullah Directly',
    query: 'How can I contact Abdullah Forhad directly right now?',
    description: 'WhatsApp (+880 1342 900364) · Average reply: 15m'
  }
];

export const INITIAL_ASSISTANT_MESSAGE: ChatMessage = {
  id: 'msg-init',
  role: 'assistant',
  text: "Hello! I am Abdullah Forhad's AI Brand & Design Advisor.\n\nTo give you the most accurate recommendations, what do you need assistance with today? Choose an option below or type your inquiry:",
  timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
  options: STUDIO_TOPIC_OPTIONS,
  highlights: [
    '⚡ 24h Express Delivery available',
    '📁 Master Vector Files (.AI, .SVG, .EPS, .PSD, 300 DPI PDF)',
    '💼 Packages from $45 | Unlimited revisions'
  ]
};

export const QUICK_QUESTION_PROMPTS = STUDIO_TOPIC_OPTIONS;

export async function sendChatMessage(
  history: ChatMessage[],
  userText: string
): Promise<ChatMessage> {
  const userMessage: ChatMessage = {
    id: `user-${Date.now()}`,
    role: 'user',
    text: userText,
    timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
  };

  const payloadMessages = [...history, userMessage].map((m) => ({
    role: m.role,
    text: m.text
  }));

  try {
    const res = await fetch('/api/chat', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ messages: payloadMessages })
    });

    if (res.ok) {
      const data = await res.json();
      if (data.reply) {
        return {
          id: `asst-${Date.now()}`,
          role: 'assistant',
          text: data.reply,
          timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
          highlights: data.highlights,
          options: data.options || getFollowUpOptions(userText),
          suggestedAction: data.suggestedAction
        };
      }
    }
  } catch (e) {
    console.warn('Network call failed, using client-side knowledge matcher:', e);
  }

  // Client-side fallback knowledge match
  const match: KnowledgeItem | null = findMatchingKnowledge(userText);
  if (match) {
    return {
      id: `asst-${Date.now()}`,
      role: 'assistant',
      text: match.detailedAnswer,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      highlights: match.highlights,
      options: getFollowUpOptions(userText),
      suggestedAction: match.suggestedAction
    };
  }

  // If greeting or general query
  if (isGreeting(userText)) {
    return {
      id: `asst-${Date.now()}`,
      role: 'assistant',
      text: "Hello! I am Abdullah Forhad's AI Brand & Design Advisor.\n\nWhat kind of design help do you need today? Select an option below to get instant pricing, timelines, or deliverables:",
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      options: STUDIO_TOPIC_OPTIONS,
      suggestedAction: {
        label: 'Message Abdullah on WhatsApp',
        actionType: 'whatsapp',
        target: 'Hi Abdullah, I am visiting your portfolio and would like to discuss a project.'
      }
    };
  }

  return {
    id: `asst-${Date.now()}`,
    role: 'assistant',
    text: "I am ready to help you plan your brand identity, logo, packaging, or custom design project!\n\nYou can also connect with Abdullah Forhad directly on WhatsApp at **+880 1342 900364** or email **forhadalpha08@gmail.com** for an instant reply.",
    timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    options: STUDIO_TOPIC_OPTIONS.slice(0, 4),
    suggestedAction: {
      label: 'Message on WhatsApp',
      actionType: 'whatsapp',
      target: `Hi Abdullah, I'd like to discuss a design project: ${userText}`
    }
  };
}

function isGreeting(text: string): boolean {
  const clean = text.toLowerCase().trim();
  const greetings = ['hi', 'hello', 'hey', 'start', 'help', 'menu', 'options', 'salam'];
  return greetings.some(g => clean === g || clean.startsWith(g + ' '));
}

function getFollowUpOptions(answeredQuery: string): ChatOption[] {
  const clean = answeredQuery.toLowerCase();
  // Filter out the one just asked and provide 3 relevant follow-ups
  return STUDIO_TOPIC_OPTIONS.filter(opt => !clean.includes(opt.label.toLowerCase())).slice(0, 3);
}
