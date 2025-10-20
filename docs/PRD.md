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
# AI Agency — v1.1 (2025-10-25)

Updated by Copilot Revision

Document Control
- Version: v1.1
- Author: Senior Business Analyst / AI Systems Engineer
- Date: 2025-10-25
- Repository: myportfolio (JustinCoKA)

## Executive Overview

### Problem statement
Recruiters and technical leads frequently evaluate candidates based on static resumes, fragmented project links, and non-interactive materials. This leads to longer evaluation cycles and missed opportunities. The Digital Portfolio / AI-Enabled Digital CV provides an authoritative, interactive single source of truth that showcases Justin Lee's technical abilities, projects, and experience — augmented by an AI assistant that answers recruiter questions from a controlled internal knowledge base.

### Goals (Updated for v1.1)
- Reduce recruiter time-to-contact to <= 5 minutes
- Present verifiable project evidence and impact metrics
- Deliver >= 95% response accuracy for KB-contained queries (measured in UAT)
- Achieve WCAG 2.1 AA accessibility for core flows
- Provide recruiter-focused persona (professional, concise) for AI Assistant
- Collect anonymized analytics on question categories and feedback for continuous improvement

### Success metrics
- Median recruiter time-to-contact <= 5 minutes
- Contact conversions >= 5 qualified messages/month (initial)
- Lighthouse Performance (desktop) >= 90
- AI KB accuracy >= 95% (UAT)
- Target traffic: 200–300 unique visitors/month (initial)

## Scope

### In-scope (MVP)
- Static/responsive portfolio pages (Home, Projects, Volunteer, Experience, Education)
- Downloadable resume (public PDF)
- Contact form with email delivery to personal address (no storage)
- AI Assistant page (`/ai-agency`) with chat UI and KB-backed responses
- Privacy-aware analytics and basic SEO
- Accessibility improvements to reach WCAG 2.1 AA

### Out-of-scope (MVP)
- External CMS integration (deferred)
- Long-term message storage or CRM integration
- Full multi-language support (planned for future releases)

## Personas & Use Cases

### Recruiter (Primary)
- Goal: Rapidly verify skills & projects; contact candidate.
- Use cases: Scan featured projects, ask targeted AI questions about skills/projects, download resume, submit contact form.

### Technical Lead
- Goal: Assess technical depth and architecture.
- Use cases: Inspect project detail pages, request technical clarifications via AI, open GitHub links.

### Collaboration Partner
- Goal: Understand volunteer/community fit and collaboration opportunities.
- Use cases: Read volunteer pages, query AI for community engagement history.

## Functional Requirements (FR)

All FRs are traceable and mapped to TDD components and backlog items.

| ID | Title (Short) | Description | MoSCoW |
|----|----------------|-------------|--------|
| FR-001 | HOM | Homepage — hero, summary, featured projects, CTA, resume link | Must |
| FR-002 | PRJ-IDX | Projects index with cards, tech tags, GitHub/live links | Must |
| FR-003 | PRJ-DET | Project detail with images, tech, impact, links | Must |
| FR-004 | VOL | Volunteer index & detail pages | Should |
| FR-005 | CNT | Contact form POST -> `/api/contact/route` -> email delivery | Must |
| FR-006 | RES | Public resume PDF in `/public/resume/` | Must |
| FR-007 | AI-AG | AI Recruiter Assistant page `/ai-agency` with streaming chat UI, example questions, and feedback controls | Must |
| FR-008 | AI-KB | Structured portfolio KB with category tags, semantic summaries and retrieval functions (`lib/ai-context.ts`) | Must |
| FR-015 | AI-ANL | Analytics event tracking for question categories and feedback | Should |
| FR-016 | AI-FB | Feedback capture (thumbs up/down) per response with optional comment | Should |
| FR-009 | ANL | Privacy-aware analytics (Plausible/GA4) on key pages | Should |
| FR-010 | ACC | WCAG 2.1 AA for core flows | Must |
| FR-011 | SEO | Title/meta tags and structured data for projects | Should |
| FR-012 | SEC-RATE | Rate limiting on API endpoints (default 10 req/hr/ip) | Must |
| FR-013 | AI-SESSION | Session-based chat history (no persistence) | Must |
| FR-014 | DEPLOY | CI/CD and deployment to Vercel | Should |

## Non-functional Requirements (NFR)

- Performance: Lighthouse >= 90 for desktop; cached pages TTFB < 1s
- Scalability: Handle initial 200–300 monthly unique visitors; scale via serverless
- Security: Input validation, sanitization, rate-limiting, PII minimization
- Privacy: No storage of contact messages; explicit privacy note on contact/AI pages
- Accessibility: WCAG 2.1 AA for color contrast, keyboard navigation, and semantic structure
- Maintainability: TypeScript, consistent interfaces, component-driven architecture

## Assumptions & Constraints

- Content editing is in-code (developers update `data/` and components)
- AI is restricted to internal KB; external browsing and live web searches by the LLM are disallowed
- LLM calls are optional for MVP (mock responses acceptable for dev)
- Personal email configured in environment variables for contact delivery
- Limited budget/time — prioritize Must requirements

## Dependencies & Risks

### Dependencies
- Vercel or similar for hosting and serverless functions
- Email provider (Resend or similar) for contact delivery
- AI provider (OpenAI/Anthropic) if enabling real-time LLM responses
- Analytics provider (Plausible or privacy-aware GA config)

### Risks & Mitigations
- AI inaccuracy for out-of-KB queries — Mitigation: KB-only responses, disclaimers, UAT validation
- Contact spam — Mitigation: Honeypot and API rate-limiting
- Missing env variables causing build failures — Mitigation: Provide `.env.example` and CI checks
- Operational cost of LLMs — Mitigation: Rate-limiting and mock-first development

## Acceptance Criteria (Gherkin)

### FR-001 (Homepage)
Given a user visits the homepage
When the page loads
Then the hero, featured projects, and resume CTA are visible and accessible

### FR-005 (Contact)
Given a visitor fills out the contact form with name, email, and message
When the form is submitted
Then `/api/contact/route` returns 200 and the message is delivered to the configured personal email

### FR-007 (AI Assistant - Streaming & Persona)
Given a visitor opens `/ai-agency`
When they ask a KB-contained question
Then the assistant streams a professional, concise response (recruiter persona) and the chat displays partial responses as they arrive

### FR-015 (Analytics)
Given a user asks a question
When the response is delivered
Then an anonymized analytics event is recorded with question category and feedback opportunity

### FR-016 (Feedback Capture)
Given an assistant response is rendered
When the user provides thumbs-up or thumbs-down
Then the feedback event is recorded and an optional comment can be submitted (not stored with PII)

### FR-010 (Accessibility)
Given an accessibility review is performed
When core flows (home, project detail, contact) are tested
Then they meet WCAG 2.1 AA for semantic structure, keyboard navigation, and color contrast

## Appendix
- References: `docs/ai-agency-implementation.md`, `lib/ai-context.ts`, `docs/ai-agency-feature.md`
- Revision history: initial PRD (2025-10-07), Week 4 submission update (2025-10-24)

*** End of PRD v1.0 ***