# Handoff Checklist — BA → Engineering — v1.0

Date: 2025-10-24
Author: Senior Business Analyst

Requirement Traceability Table

| Requirement ID | PRD Reference | TDD Reference | Acceptance Criteria | Test Case Status | Notes |
|----------------|---------------|---------------|---------------------|------------------|-------|
| FR-001 | PRD.md - FR-001 | TDD.md - Frontend: Homepage | Given user visits homepage, When loads, Then hero & CTA visible | Not tested | Must implement hero copy as in PRD
| FR-005 | PRD.md - FR-005 | TDD.md - Backend: Contact API | Given valid form submit, When posted, Then 200 and email delivered | Not tested | Requires RESEND_API_KEY
| FR-007 | PRD.md - FR-007 | TDD.md - Backend: AI Chat | Given a KB-contained question, When asked, Then correct answer returned | In progress | Mock responses available; integrate real LLM post-approval

Environment & Setup Checklist
- [ ] Repository cloned and branch created
- [ ] Node.js LTS installed
- [ ] VS Code configured with recommended extensions (TypeScript, ESLint, Prettier, Tailwind)
- [ ] Environment variables configured (`.env` from `.env.example`)

API & Database
- [ ] API endpoints implemented (`/api/contact`, `/api/ai-chat`)
- [ ] Database schema reviewed (if using DB)

UX & Accessibility
- [ ] UX mockups validated
- [ ] Accessibility checklist passed for core flows

Agile Backlog
- [ ] Backlog CSV/JSON imported into Agile tool (Jira/ClickUp/Trello)

Release & Deployment
- [ ] CI configured for build and tests
- [ ] Deploy target (Vercel) configured

Notes for Engineering
- Use `lib/ai-context.ts` as authoritative KB for AI assistant responses
- Contact API uses Resend SDK (requires `RESEND_API_KEY`)
- Rate limit default: 10 req/hr per IP (dev in-memory store; production use Redis)

*End of Handoff Checklist v1.0*