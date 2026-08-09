# 🚀 Web Development Portfolio | Kavin Paul

A clean, responsive portfolio showcasing my work as a software engineer.
Built as a single-page app with instant section switching, full TypeScript,
and three selectable visual themes.

---

## 🛠️ Tech Stack

- **Frontend:** React 19 + TypeScript, built with Vite
- **Styling:** SCSS, CSS custom properties for theming (no CSS-in-JS)

## ✨ Key Features

- **Instant section switching:** Clicking a nav item swaps the visible
  section immediately - no scrolling, no anchor jumps.
- **Three selectable themes:** Terminal, Blueprint, and Daylight, each with
  its own full color palette, chosen via a theme picker and persisted to
  `localStorage`. All three meet WCAG AA contrast.
- **Responsive navigation:** a persistent left rail on desktop, a sticky
  inline-nav header on tablet, and a hamburger dropdown on mobile - all pure
  CSS breakpoints, no JS resize detection.
- **Live project integration:** features real, deployed work including
  **SpendShifter**.

## 📂 Project Structure

```text
src/
├── components/  # Button, Navigation, Footer, Tags, Typography, PageHeader, ThemePicker, Iconography
├── pages/       # About, Path, Skills, Work, Contact
├── context/     # Theme + Navigation state (React Context)
├── types/       # Shared TypeScript types, barrel-exported
├── styles/      # SCSS variables (theme tokens), mixins, global resets
└── assets/      # Fonts, images, resume
```

## Commands

- `npm run dev` — start the Vite dev server
- `npm run build` — production build
- `npm run preview` — serve the production build locally
- `npm run lint` — ESLint
