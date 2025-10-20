# AI Agency — v1.1 (2025-10-25)

Updated by Copilot Revision

Document Control
- Version: v1.1
- Author: Senior Solution Architect / AI Systems Engineer
- Date: 2025-10-25
- Related PRD: `docs/PRD.md` (FR IDs referenced)

1. System Overview

The Digital Portfolio / AI-Enabled Digital CV is a Next.js application (App Router) with a small serverless backend for API endpoints. The system serves static content, dynamic project pages, and provides an AI assistant endpoint that consumes a structured portfolio knowledge base. Primary deployment target is Vercel.

Mermaid Architecture Diagram

```mermaid
flowchart LR
  Browser[User Browser]
  CDN[CDN / Edge Cache]
  NextApp[Next.js App (SSR/SSG)]
  API[Serverless API (ai-chat, contact)]
    AI[LLM Provider (OpenAI/Anthropic) - optional]
    Analytics[Analytics Tracker (serverless collector)]
    Feedback[Feedback Capture Endpoint]
  Email[Email Provider (Resend)]
  DB[Database (Postgres) - optional]

  Browser --> CDN --> NextApp
  NextApp --> API
  API --> AI
  API --> Email
  NextApp --> DB
```

2. Tech Stack & Justification

- Next.js (14.x) + TypeScript: Familiar, fast development, App Router for file-based routing
- React + Tailwind CSS: Rapid UI composition and consistent styling
- Framer Motion: Polish and micro-interactions
- Node serverless functions: API endpoints (`/api/contact`, `/api/ai-chat`)
- LLM integration (OpenAI/Anthropic): Optional for production AI responses
- PostgreSQL: Optional for future message or admin persistence (not MVP)
- Vercel: Zero-config deployments, serverless API support

3. Component Design (Updated for v1.1)

Frontend
- `app/ai-agency/page.tsx` — AI Agency page (Hero, features, ExampleQuestions, AIChat)
- `components/ai-chat.tsx` — Client chat component (session history, send/receive)
- `components/ai-example-questions.tsx` — Example question list
- `components/header.tsx`, `components/footer.tsx` — Navigation and site chrome

Backend
- `app/api/ai-chat/route.ts`  Chat endpoint with SSE streaming support: validate, rate-limit, retrieve KB context, call LLM streaming API, and stream partial responses to client
- `app/api/ai-feedback/route.ts`  Feedback POST endpoint: record anonymized feedback events (thumbs up/down, optional comment)

AI Module
- `lib/ai-context.ts`  Enhanced KB: category tags, semantic summaries, retrieval helpers (getContextByCategory, generatePrompt)

Analytics
- `lib/analytics.ts`  Lightweight event sender to push anonymized events to serverless collector or analytics provider

AI Module
- `lib/ai-context.ts` — Build portfolio prompt and structured KB

4. Data Model

ER Diagram (textual)
- Portfolio (single)
  - Projects (1..N)
  - Experience (1..N)
  - Volunteer (0..N)
  - Skills (1..N)

Table Schemas (for optional DB persistence)

projects
- id (PK)
- slug (unique)
- title
- subtitle
- description (text)
- tech_tags (json)
- github_url
- live_url
- created_at

experience
- id (PK)
- company
- title
- start_date
- end_date
- bullets (json)

messages (optional)
- id (PK)
- conversation_id
- role (user/assistant)
- content (text)
- created_at

5. API Design (v1.1 additions)

Summary
- POST `/api/ai-chat`  Supports both JSON POST for non-streaming and Server-Sent Events (SSE) for streaming responses. Request: { message, conversationId?, persona?: 'recruiter' }
- POST `/api/ai-feedback`  Accepts { conversationId, messageId, feedback: 'up'|'down', comment?: string } -> records anonymized feedback event
- POST `/api/contact`  Accepts { name, email, message, company (honeypot) } -> sends email

OpenAPI Spec: `openapi/openapi.yaml` (extend with `/api/ai-feedback` and SSE notes)

6. Security, Authentication & Compliance
- No public admin endpoints in MVP
- Environment variables for API keys (RESEND_API_KEY, OPENAI_API_KEY)
- Rate limiting middleware for `/api/*`
- Input validation and length limits
- Logging without PII; do not persist messages
- GDPR/Local privacy: explicit privacy note on contact and AI pages

7. Scalability & Performance
- Edge caching for static pages via Vercel
- Rate limiting to protect LLM costs
- Use streaming responses for LLM if supported for better UX

8. Key Technical Decisions & Assumptions
- Start with mocked AI responses during development; integrate LLM after acceptance
- Keep KB in `lib/ai-context.ts` (authoritative source within repo)
- No CMS in MVP to reduce scope and cost

9. Testing Strategy
- Unit tests for utility functions (`lib/ai-context.ts` prompt generation)
- Integration tests for API routes (contact and ai-chat) using mocked external services
- Streaming tests: simulate LLM streaming chunks and verify client partial render and finalization
- Analytics tests: verify events emitted for question categories and feedback
- UAT: Recruiter panel testing for AI accuracy with test cases that measure 95%+ accuracy
- Accessibility testing: axe-core or equivalent automated checks + manual keyboard/screen-reader tests

10. Future Enhancements
- Admin UI for updating KB and projects
- Persist conversation (opt-in) with user consent
- Multi-language support and response quality feedback
- Response streaming and incremental rendering for AI responses

Appendix
- Links to PRD FR IDs referenced above. Ensure any change in PRD is reflected in TDD.

*End of TDD v1.0*