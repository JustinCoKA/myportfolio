# AI Agency — v1.1 (2025-10-25)

Updated by Copilot Revision

## Implementation Overview (v1.1)

This document expands the implementation plan to include streaming, category-aware KB retrieval, analytics, and feedback capture. It contains code snippets and integration guidance.

## Component Architecture (Updated)

### 1. AI Agency Page (`/app/ai-agency/page.tsx`)
```tsx
// Main page component
// - Hero section explaining the AI assistant
// - Example questions display
// - Streaming Chat interface component
// - Usage guidelines/disclaimer + feedback UI
```

### 2. Chat Interface Component (`/components/ai-chat.tsx`)
```typescript
interface Message {
  id: string;
  content: string;
  role: 'user' | 'assistant';
  timestamp: Date;
}

// Features:
- Message list display
- Input form with send button
- Loading states
- Error handling
- Session-based conversation history
```

### 3. Example Questions Component (`/components/ai-example-questions.tsx`)
```typescript
// Pre-defined questions that users can click to ask
- Grid/list of example questions
- Click to populate chat input
- Categories: Projects, Experience, Skills, Volunteer, General
```

### 4. API Routes

`/app/api/ai-chat/route.ts` (SSE Streaming)

```ts
// Pseudo-code: Server-Sent Events (SSE) streaming handler
import { NextRequest, NextResponse } from 'next/server'
import { getContextForMessage, generatePrompt } from '@/lib/ai-context'

export async function GET(request: NextRequest) {
  // SSE handshake
  const { searchParams } = new URL(request.url)
  const message = searchParams.get('message') || ''
  const persona = searchParams.get('persona') || 'recruiter'

  // Rate limiting and validation (reuse existing helpers)
  // ... validate message length, rate limit per IP ...

  // Retrieve KB context (category aware)
  const ctx = getContextForMessage(message)
  const prompt = generatePrompt({ message, context: ctx, persona })

  // Call streaming LLM API and pipe chunks to client
  // Example: openai.chat.completions.stream(...) -> yields chunks
  const stream = await callLLMStreamingAPI(prompt)

  return new Response(stream, {
    headers: {
      'Content-Type': 'text/event-stream',
      'Cache-Control': 'no-cache',
      Connection: 'keep-alive',
    },
  })
}
```

`/app/api/ai-feedback/route.ts` (Feedback capture)

```ts
import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  const body = await request.json()
  const { conversationId, messageId, feedback, comment } = body

  // Validate and enqueue analytics event (do not store PII)
  // Example: push to serverless analytics collector or event queue

  return NextResponse.json({ ok: true })
}
```

## Knowledge Base & Retrieval

The KB is enhanced to include category tags, short semantic summaries, and retrieval helpers suited for prompt construction and (future) embedding-based retrieval.

Key helpers:
- `getContextForMessage(message: string)` — returns category-scoped context snippets (skills/projects/experience) with relevance scores
- `generatePrompt({ message, context, persona })` — constructs the system+user messages with recruiter persona and concise answer instruction

Code sketch (see `/lib/ai-context.ts` for full implementation):

```ts
export type ContextSnippet = { id: string; category: string; title: string; summary: string; metadata?: Record<string, any> }

export function getContextForMessage(message: string): ContextSnippet[] {
  // Basic keyword matching or use embeddings (future)
  // Return top-N relevant snippets across projects, skills, experience
}

export function generatePrompt({ message, context, persona = 'recruiter' }) {
  const system = `You are a professional, concise recruiter assistant answering questions about Justin Lee. Keep answers factual and reference projects where relevant.`
  const contextText = context.map(c => `- ${c.title}: ${c.summary}`).join('\n')
  return [
    { role: 'system', content: system },
    { role: 'system', content: `Context:\n${contextText}` },
    { role: 'user', content: message }
  ]
}
```

## Implementation Steps

1. **Create AI Agency page structure**
   - Add to app router: `/app/ai-agency/page.tsx`
   - Update navigation to include AI Agency link

2. **Build chat interface**
   - Create reusable chat component
   - Implement message display and input
   - Add loading and error states

3. **Set up API endpoint**
   - Create `/app/api/ai-chat/route.ts`
   - Implement rate limiting middleware
   - Configure AI provider integration

4. **Extract portfolio context**
   - Create structured knowledge base from existing data
   - Extract information from components and data files
   - Format for AI context injection

5. **Add example questions**
   - Create example questions component
   - Implement click-to-ask functionality
   - Categorize questions by topic

## Environment Variables (additional)

```env
# AI Provider
OPENAI_API_KEY=your_openai_key

# Optional analytics / event collector endpoint
ANALYTICS_ENDPOINT=https://collector.example.com/events

# Rate limiting (for production)
REDIS_URL=redis://... (optional)
```

## Next Steps
1. Implement SSE server code using streaming-capable client for chosen LLM (OpenAI/Anthropic)
2. Implement `getContextForMessage` with keyword boost and fallback to full KB when required
3. Add `/api/ai-feedback` to record anonymized feedback to analytics
4. Add client-side rendering for SSE and feedback UI in `components/ai-chat.tsx`

## Next Steps
1. Start with the AI Agency page structure
2. Create the chat interface component
3. Set up the API endpoint with mock responses
4. Extract and structure the knowledge base
5. Integrate real AI provider
6. Test and refine responses