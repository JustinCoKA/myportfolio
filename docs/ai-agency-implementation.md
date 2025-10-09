# AI Agency Implementation Plan

## Component Architecture

### 1. AI Agency Page (`/app/ai-agency/page.tsx`)
```typescript
// Main page component
- Hero section explaining the AI assistant
- Example questions display
- Chat interface component
- Usage guidelines/disclaimer
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

### 4. API Route (`/app/api/ai-chat/route.ts`)
```typescript
// POST /api/ai-chat
interface ChatRequest {
  message: string;
  conversationId?: string;
}

interface ChatResponse {
  response: string;
  conversationId: string;
}

// Features:
- Rate limiting (10 requests/hour per IP)
- Input validation and sanitization
- AI provider integration (OpenAI/Claude)
- Structured context injection
- Error handling
```

## Knowledge Base Structure

### 5. Portfolio Context (`/lib/ai-context.ts`)
```typescript
interface PortfolioContext {
  personal: {
    name: string;
    title: string;
    summary: string;
    location: string;
    experience_years: number;
  };
  
  skills: {
    programming_languages: string[];
    frameworks: string[];
    tools: string[];
    specialties: string[];
  };
  
  projects: Array<{
    name: string;
    description: string;
    technologies: string[];
    impact: string;
    role: string;
    year: string;
  }>;
  
  experience: Array<{
    company: string;
    title: string;
    duration: string;
    responsibilities: string[];
    achievements: string[];
  }>;
  
  volunteer: Array<{
    organization: string;
    role: string;
    description: string;
    impact: string;
  }>;
  
  education: {
    degree: string;
    institution: string;
    graduation_year: string;
    relevant_coursework?: string[];
  };
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

## Environment Variables Needed

```env
# AI Provider (choose one)
OPENAI_API_KEY=your_openai_key
# OR
ANTHROPIC_API_KEY=your_anthropic_key

# Rate limiting (optional - Redis for production)
REDIS_URL=your_redis_url
```

## Next Steps
1. Start with the AI Agency page structure
2. Create the chat interface component
3. Set up the API endpoint with mock responses
4. Extract and structure the knowledge base
5. Integrate real AI provider
6. Test and refine responses