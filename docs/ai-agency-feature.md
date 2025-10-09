# AI Agency Feature

## Overview
The AI Agency feature adds an interactive AI assistant to Justin Lee's portfolio website. Visitors can ask questions about Justin's background, projects, skills, and experience in natural language and receive contextual responses.

## Features
- **Interactive Chat Interface**: Clean, accessible chat UI with message history
- **Example Questions**: 10+ pre-written questions to guide users
- **Contextual Responses**: AI assistant with knowledge of Justin's actual portfolio data
- **Rate Limiting**: 10 messages per hour per visitor to prevent abuse
- **Privacy First**: No conversation storage - session-based only
- **Mobile Responsive**: Works seamlessly on all device sizes

## Implementation

### Files Created
- `/app/ai-agency/page.tsx` - Main AI Agency page
- `/components/ai-agency.tsx` - Main component with hero and features
- `/components/ai-chat.tsx` - Interactive chat interface
- `/components/ai-example-questions.tsx` - Clickable example questions
- `/app/api/ai-chat/route.ts` - API endpoint for AI responses
- `/lib/ai-context.ts` - Portfolio context and knowledge base

### Navigation
- Added "AI Assistant" link to main navigation in header
- Updated header component to handle both anchor links and page routes

## Development Setup

### Current State (Mock Responses)
The feature is currently implemented with intelligent mock responses that can answer common questions about Justin's background. The mock system provides realistic responses based on portfolio data.

### For Production (Real AI Integration)
To integrate with a real AI provider, update `/app/api/ai-chat/route.ts`:

1. **OpenAI Integration**:
```typescript
import OpenAI from 'openai'

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
})

// Replace generateMockResponse with:
const completion = await openai.chat.completions.create({
  model: "gpt-4",
  messages: [
    { role: "system", content: getPortfolioPrompt() },
    { role: "user", content: sanitizedMessage }
  ],
  max_tokens: 500,
})

const response = completion.choices[0]?.message?.content
```

2. **Environment Variables**:
```env
OPENAI_API_KEY=your_openai_api_key
# OR
ANTHROPIC_API_KEY=your_anthropic_api_key
```

## Testing

### Manual Testing
1. Navigate to `/ai-agency` 
2. Try clicking example questions
3. Type custom questions in the chat
4. Verify rate limiting (try 11+ messages rapidly)
5. Check mobile responsiveness

### Example Questions That Work Well
- "What programming languages does Justin specialize in?"
- "Tell me about Justin's most impactful project"
- "Does Justin have experience with data engineering?"
- "What makes Justin different from other developers?"

## Security & Privacy

### Rate Limiting
- 10 messages per hour per IP address
- Uses in-memory store (upgrade to Redis for production)
- Returns 429 status when limit exceeded

### Input Validation
- Maximum message length: 500 characters
- Basic sanitization of user input
- Validates required fields

### Privacy
- No conversation persistence
- Session-based chat history only
- No user data collection or storage

## Knowledge Base

The AI assistant has structured knowledge about:
- **Personal Info**: Name, title, location, experience level
- **Skills**: Programming languages, frameworks, tools, specialties  
- **Projects**: UrSaviour, Cancer Data ETL, SiteSync Solutions
- **Experience**: Roles, responsibilities, achievements
- **Education**: Current studies, relevant coursework
- **Volunteer Work**: LBW Trust gala participation

### Updating Knowledge
Update `/lib/ai-context.ts` to modify the AI's knowledge base when portfolio content changes.

## Performance Considerations

### Current Implementation
- Mock responses: ~50ms response time
- Client-side chat state management
- Optimistic UI updates

### Production Considerations  
- Real AI responses: 1-3 second response times
- Consider response streaming for better UX
- Cache common responses if needed
- Monitor API usage and costs

## Future Enhancements

1. **Response Streaming**: Stream AI responses for better perceived performance
2. **Conversation Context**: Maintain conversation context across messages  
3. **Advanced Analytics**: Track popular questions and improve responses
4. **Multi-language Support**: Support questions in different languages
5. **Voice Interface**: Add speech-to-text for voice queries
6. **Feedback System**: Allow users to rate response quality

## Troubleshooting

### Common Issues
1. **Rate Limit Errors**: Wait an hour or clear browser data
2. **Slow Responses**: Check network connection and API provider status
3. **Build Failures**: Ensure environment variables are set correctly
4. **Navigation Issues**: Verify header component updates are applied

### Debug Mode
Enable console logging in the chat component for debugging:
```typescript
console.log('Sending message:', content)
console.log('Received response:', data)
```