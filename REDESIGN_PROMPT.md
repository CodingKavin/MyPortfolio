# Portfolio Redesign — Prompt Draft for Claude Design

> Working doc. Fill in the `[ ... ]` sections at the bottom, then send the whole
> thing to Claude Design. Delete this header line before sending.

---

## Who this is for

I'm Kavin Paul, a software developer building a personal portfolio site. I spent
8 years in banking — starting as an IIROC-licensed Financial Advisor at CIBC
(top 3% of advisors in Calgary), then moving into Software/QA Engineering as an
SDET at RBC (via Capgemini), where I built RPA bots and CI/CD automation. I just
finished a Software Engineering diploma at BrainStation (2026) on top of an
earlier civil engineering degree and a data analytics certificate. I'm now
job-hunting as a software engineer, with a growing focus on AI-orchestrated
development and cloud (AWS).

The portfolio needs to read as credible to engineering hiring managers/recruiters
while still telling the "non-traditional path, precision from finance +
engineering background" story — not just a template dev portfolio.

## What exists today (for context, not to be copied as-is)

- Single-page React 19 + Vite site, one long scroll with four sections: About,
  Skills, Projects, Contact, plus a sticky nav with scrollspy highlighting and a
  dark/light theme toggle.
- Visual identity: near-black dark theme, purple/teal accents, a terminal-style
  logo treatment (`~/kavin-paul_` with a blinking cursor).
- Currently plain JavaScript/SCSS; being rebuilt in TypeScript. This prompt is
  for a fresh visual/UX design, not a literal reskin — layout, structure, and
  navigation pattern are all open for reconsideration.
- Known pain point to design around: the old scroll/anchor-nav interaction felt
  janky. Whatever structure you propose should have a clear, deliberate answer
  for how navigation and scrolling/section-transitions feel.
- Current live site: https://kavinpaul.com — linked for reference only, to show
  what "bland/resume-like" means concretely. Don't treat it as a starting point
  or anchor for the new design; every piece of content on it is already
  reproduced as text below, so you don't need to browse it to have the facts.

## Content to design around (real copy — use as-is or tighten it, don't invent new facts)

**About**
> Hey I'm Kavin, I am a developer who bridges the gap between high-level logic
> and low-level implementation. With 8 years in the banking industry,
> transitioning from financial advising to Robotic Process Automation, I have
> built my career on precision and problem-solving. I am a fast learner with an
> innate curiosity for how things work under the hood. I specialize in building
> clean, functional applications and am currently diving into the AWS ecosystem.

**Experience**
- Senior Software Engineer – SDET, RBC (via Capgemini), Jan 2025 – Aug 2025 —
  Led Agile automation teams to define standards and streamline CI/CD pipelines
  using Jenkins and GitHub Actions.
- Software Engineer – SDET, RBC (via Capgemini), May 2022 – Dec 2024 — Deployed
  50+ RPA bots and UI/API frameworks (Cypress/Robot) to automate financial
  migrations, replacing $5M in manual effort.
- Financial Advisor – Imperial Service, CIBC, May 2018 – Feb 2021 — IIROC
  licensed advisor managing complex client relationships; ranked in the Top 3%
  of advisors in Calgary.

**Education**
- Diploma, Software Engineering — BrainStation, 2026
- Cert., Data Analytics & Big Data — Toronto Metropolitan University, 2022
- B.A.Sc., Civil Engineering — University of Windsor, 2016

**Skills** (grouped)
- Development: React.js, Node.js, TypeScript, Tailwind CSS, Express.js,
  JavaScript (ES6+), MySQL, Supabase
- AI Orchestration & Modern Engineering: AI-Collaborative Dev, Environment
  Sandboxing, Prompt Engineering, Claude/LLM Integration, Automated Unit Testing
- Automation & RPA: Selenium, Robot Framework, Cypress, Python (pandas/NumPy),
  Postman, API Testing, RPA, VM Deployment
- Infrastructure: Docker, Jenkins, Git, GitHub Actions, Cloudflare

**Projects**
1. **SpendShifter** — Full-stack budget tracker. Dashboard with
   month-over-month spending analysis and category-based pie charts. Focus on
   data integrity and secure authentication, full CRUD expense management.
   Stack: React.js, Axios, Node.js, Express.js, Supabase (Auth & DB),
   Cloudflare, Render, Netlify, Resend (SMTP). Live at spendshifter.com, has a
   demo video and public repo.
2. **AtmoSentry** — AI-orchestrated weather & air quality checker, designed and
   deployed in under 24 hours. Entire project built inside a Dockerized WSL2
   sandbox to isolate AI-generated code. Custom skeleton loaders for perceived
   performance, automated CI/CD integrity checks. Stack: React 19, TypeScript,
   Tailwind CSS, Docker, GitHub Actions, Vitest, AI Orchestration. Live at
   atmosentry.com, public repo.

**Contact**
- Email: kavinp622@gmail.com
- Phone: +1 (403) 618-3509
- LinkedIn: linkedin.com/in/kavin-paul-dev
- GitHub: github.com/CodingKavin
- Downloadable resume (PDF)

## What I want from you (Claude Design)

Design a full visual concept for this portfolio — not production code, a design
direction I can hand to a build phase afterward. Specifically:

1. **A layout/navigation recommendation**: propose whether this should be one
   continuous scroll, a paginated/routed feel with instant transitions, or a
   hybrid — and justify it against the goal of feeling smooth (not janky) and
   easy to navigate on both desktop and mobile. One fixed point: on mobile, keep
   the nav collapsing into a hamburger/dropdown menu — I like that pattern from
   the current site, keep it in whatever layout you propose.
2. **A visual system**: color palette, type pairing, spacing/grid rhythm, and a
   theme system — see my style notes below for what I mean by that. Every
   theme/color combination must meet WCAG AA contrast at minimum; treat
   accessibility as a hard requirement, not a nice-to-have, across all text,
   interactive states, and theme variants.
3. **Section-by-section design** for About, Skills, Projects, Contact, and nav,
   using the real content above.
4. **Responsive behavior**: how the design adapts from mobile through
   ultra-wide.

---

## My style preferences

- **Overall mood**: calm, neat, stylish/modern. Not loud or trendy for its own
  sake — clean and considered.
- **The core problem with the current site**: it just looks like a resume in a
  browser — bland, generic, no visual personality. The redesign needs to
  actually look designed, not like a content dump into a template.
- **Mobile nav**: keep the pattern of the nav collapsing into a hamburger/
  dropdown menu — that part already works, don't reinvent it.
- **Color**: open to any direction, no attachment to the current purple/teal.
  The only non-negotiable is accessibility — every palette and every theme
  needs to hold up on contrast and be comfortable to read, not just look good
  in a screenshot.
- **Typography**: I like what I have (Titillium Web) but I'm not precious
  about it — suggest a change only if it genuinely fits the new visual
  direction better, don't swap it just for novelty.
- **Tone**: hybrid of personal and serious. It should read as credible to a
  hiring manager but still feel like an actual person, not a corporate
  brochure.
- **Theming idea — please explore this**: I like having light/dark mode, but
  instead of (or in addition to) a plain light/dark toggle, I'd like you to
  explore a small set of selectable **themes** that each say something about
  my skill set / background — e.g. a mode that leans into the dev/terminal
  aesthetic, a mode that nods to the finance/fintech background, a clean
  "professional/light" mode for recruiters who just want to read fast. Treat
  this as a genuine design exploration, not a checkbox: it should feel like a
  deliberate showcase of range and technical polish (theming is itself a skill
  demonstration), not a gimmick that gets in the way of reading the content.
  Every theme must clear the same accessibility bar as the rest of the design.
- **Open**: reference sites/portfolios I like, whether to keep the terminal
  `~/kavin-paul_` motif, and section additions/reorders beyond About/Skills/
  Projects/Contact — I don't have strong opinions here yet, so feel free to
  propose something and I'll react to it.
