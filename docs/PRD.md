# Product Purpose and goals
- **Primary**: Support job search by showcasing Justin Lee's professional projects, skills, and experience to recruiters and hiring managers.
- **Secondary**: Build personal brand through a clean, professional portfolio that highlights technical capabilities and volunteer work.
- Make it easy for recruiters to evaluate fit and contact Justin directly.
- Provide downloadable resume and functional contact form for direct outreach.equirements Document (Draft)

Last updated: 2025-10-07

## One-line summary
A clean, fast personal portfolio website for Justin Lee showcasing projects, volunteer work, experience, education, a downloadable resume, and a contact endpoint — implemented with Next.js + TypeScript.

## Purpose and goals
- Provide a concise, professional online presence for Justin Lee that highlights work, volunteer contributions, skills, and contact information.
- Make it easy for recruiters and collaborators to find and evaluate projects and experience.
- Support a downloadable resume and a contact form that sends messages to a backend endpoint.

## Success metrics
- Time on site (target: > 60s for visitors exploring projects).
- SEO: organic visits from key queries.
- Accessibility: pass WCAG 2.1 AA audit for core pages.

## Audience
- **Primary**: Recruiters and hiring managers
- **Secondary**: Potential collaborators and open-source contributors
- **Tertiary**: Peers and community members interested in volunteer work or projects

## Assumptions
- This application is a static-first Next.js site with serverless API route(s) (the project includes an API contact route).
- Content is authored in the codebase (components and data files) — there is no CMS in the current repo.
- Styling is implemented with a global stylesheet and component-level styles; PostCSS is present.

## MVP scope (what will be built/delivered)
- Homepage with hero, summary, featured projects, volunteer highlights, skills, and contact CTA.
- Project detail pages (dynamic routes under `/projects/[slug]`).
- Volunteer detail pages (`/volunteer/[slug]`).
- Experience and education sections.
- **AI Agency section**: Interactive AI assistant that can answer questions about Justin's background, projects, and experience.
- Contact form component that POSTs to `/api/contact/route`.
- Resume download link.
- Responsive layout and basic SEO meta tags per page.
- Basic analytics instrumentation (e.g., Google Analytics or server-side logs) — optional in draft.

## Features & user flows
1. Visitor arrives at homepage and reads a concise intro (hero).
2. Visitor navigates to Projects, clicks a project card, and reads the project detail page with images, descriptions, and links.
3. Visitor checks volunteer work and experience to assess fit.
4. **AI Agency flow**: Visitor accesses AI assistant, sees example questions, and can ask custom questions about Justin's background, skills, projects, or experience. AI responds with contextual information.
5. Visitor clicks "Contact" to open a form, fills it out, and submits (message delivered to backend/email).
6. Visitor can download the resume PDF from the resume link.

## Content model
- Site metadata: name, title, description, social links
- Pages: home, projects index, project detail, volunteer index, volunteer detail, AI agency, resume (static), contact (form)
- Project object: slug, title, short description, long description (MD or JSX), images, links, tech tags, dates
- Volunteer object: slug, role, org, description, dates, links
- Experience object: title, company, dates, bullets
- **AI Agency**: Example questions, chat interface, knowledge base of Justin's background for AI context

## Information architecture / sitemap
- / (Home)
- /projects
- /projects/[slug]
- /volunteer
- /volunteer/[slug]
- **/ai-agency** (Interactive AI assistant page)
- /resume (or direct link to resume PDF)
- /contact (or contact form component on home)
- /api/contact/route (serverless contact endpoint)
- **/api/ai-chat/route** (AI assistant endpoint)

## Non-functional requirements
- Performance: Lighthouse Performance score >= 90 for core pages on desktop where possible.
- Accessibility: Target WCAG 2.1 AA conformance (recommend audit for key flows).
- SEO: Proper title and meta description per page; structured data for projects optional.
- Security: Contact endpoint should validate/sanitize inputs and implement rate-limiting or spam protection.
- Privacy: No contact message storage - direct email delivery only.

## Technical stack
- Framework: Next.js (app router) + TypeScript
- Styling: global CSS + PostCSS (no CMS noted in repo)
- Hosting: Static hosting with serverless functions (e.g., Vercel)
- Assets: images and resume stored in `/public`

## Data & integrations
- Contact endpoint: POST JSON (name, email, message) -> send to personal email (no storage)
- **AI Chat endpoint**: POST JSON (message, conversation_id) -> AI response with portfolio context
- **AI Provider**: OpenAI API, Anthropic Claude, or similar for natural language processing
- Analytics: Include analytics provider (Google Analytics or similar)
- Content management: In-code editing (no CMS required)
- Future: Internationalization support (not MVP)

## Acceptance criteria
- Homepage loads and renders hero, featured projects, volunteer, and contact CTA.
- Project detail pages render from available project data and have working links.
- **AI Agency page displays example questions and functional chat interface.**
- **AI assistant responds accurately to questions about Justin's background, projects, and skills.**
- Contact form successfully POSTs to `/api/contact/route`, sends email to personal address, and returns success response.
- Resume PDF is publicly accessible and downloadable.
- Analytics tracking is functional on key pages.
- Site works well for job search scenarios (recruiter can evaluate and contact within 3-5 minutes).

## AI Agency Feature Specification

### Overview
Interactive AI assistant that allows visitors (especially recruiters) to ask questions about Justin's background, projects, skills, and experience in natural language.

### User Experience
- **Landing**: Dedicated `/ai-agency` page with clear explanation of the AI assistant's capabilities
- **Example Questions**: Prominently displayed sample questions to guide users
- **Chat Interface**: Clean, accessible chat UI with message history
- **Contextual Responses**: AI provides specific answers based on Justin's actual portfolio data

### Example Questions to Display
```
- "What programming languages does Justin specialize in?"
- "Tell me about Justin's most impactful project"
- "What kind of volunteer work has Justin done?"
- "Does Justin have experience with [specific technology]?"
- "What was Justin's role at [company name]?"
- "How many years of experience does Justin have in software development?"
- "What makes Justin different from other developers?"
- "Can you summarize Justin's educational background?"
- "What are Justin's career goals and interests?"
- "Has Justin worked with AI/ML projects before?"
```

### Technical Implementation
- **Frontend**: React chat component with TypeScript
- **Backend**: `/api/ai-chat/route.ts` serverless function
- **AI Provider**: OpenAI GPT-4 or Anthropic Claude API
- **Context**: Structured knowledge base from portfolio data (projects, experience, skills, volunteer work)
- **Rate Limiting**: Prevent abuse (e.g., 10 messages per IP per hour)
- **Conversation**: Maintain chat history during session (no persistence)

### AI Context Data
- Extract and structure data from existing components:
  - Projects data from `data/` folder and project pages
  - Experience details from `components/experience.tsx`
  - Skills information from `components/skills.tsx`
  - Volunteer work from `data/volunteer.ts`
  - Education from `components/education.tsx`

### Privacy & Security
- No conversation storage (session-only chat history)
- Rate limiting to prevent API abuse
- Input validation and sanitization
- Clear disclaimer about AI-generated responses

## Risks & mitigations
- **AI costs**: Implement rate limiting and usage monitoring
- **Inaccurate responses**: Create comprehensive, structured knowledge base
- **API abuse**: Rate limiting and input validation
- Spam through contact form: add captcha / rate limits.  
- Content updates require code changes: consider a lightweight CMS if frequent non-dev edits are needed.  
- Images are large: add image optimization or use Next.js Image where appropriate.

## Roadmap / milestones
- **Immediate**: Configure contact endpoint for email delivery; add analytics.
- **Week 1**: Audit and improve content for job search optimization (clear project descriptions, impact metrics).
- **Week 2**: Accessibility review and SEO optimization for recruiter discovery.
- **Future**: Internationalization infrastructure, advanced analytics, performance optimizations.

## Implementation notes (based on requirements clarification)
1. **Primary goal**: Job search and personal branding - optimize for recruiter evaluation flow.
2. **Contact handling**: Send directly to personal email address (to be configured in environment).
3. **Data retention**: No storage of contact messages - direct email delivery only.
4. **Analytics**: Include analytics provider integration.
5. **Content management**: Keep in-code editing approach (no CMS needed).
6. **Visual design**: Use existing design system and assets in `/public`.
7. **Resume access**: Public PDF download (no gating required).
8. **Featured projects**: Review existing project data to determine homepage highlights.
9. **Accessibility**: Target WCAG 2.1 AA - recommend testing key flows.
10. **Internationalization**: Plan for future multi-language support (not MVP).

## Next steps
- **Immediate**: Configure contact endpoint with personal email delivery.
- **New Priority**: Implement AI Agency section with chat interface and example questions.
- **AI Setup**: Configure AI provider API and create knowledge base for portfolio context.
- **Priority**: Set up analytics tracking on key pages.
- **Content audit**: Review project descriptions for job search effectiveness.
- **Future considerations**: Plan internationalization architecture when needed.

---

**Status**: Final PRD (updated 2025-10-07 with requirements)