# Terminal IT

A high-performance digital agency portfolio built with Next.js 16, featuring cinematic scroll animations, interactive project showcases, and a terminal-inspired design system.

**Live Site** &mdash; [terminal-it.vercel.app](https://terminal-it.vercel.app)

---

## Overview

Terminal IT is a full-service digital agency site designed to showcase projects through immersive, scroll-driven experiences. The interface draws from terminal and developer aesthetics &mdash; dark palettes, monospace typography, and code-style annotations &mdash; while maintaining a polished, modern feel.

### Key Sections

| Section | Description |
|---------|-------------|
| **Hero** | Sticky landing with scrambling text animation and floating particle effects |
| **About** | Value proposition cards: Lightning Fast, Enterprise Security, Cloud Native |
| **Explorer** | Desktop-only Windows Explorer-style interactive UI |
| **Showcase** | Horizontal scroll gallery with browser mockup frames and spring physics |
| **Specialization** | 4-step process: Discovery, Design, Development, Deployment |
| **Projects** | Interactive project list with cursor-following preview modal |
| **Contact** | Contact form with service/timeline selectors and social links |

---

## Tech Stack

### Core

- **Next.js 16.1.1** &mdash; App Router, static generation, image optimization
- **React 19** &mdash; Server and client components
- **TypeScript 5** &mdash; Full type safety across the codebase

### Styling

- **Tailwind CSS 3.4** &mdash; Utility-first with custom design tokens
- **SCSS Modules** &mdash; Scoped styles for complex components
- **tailwind-merge** &mdash; Conflict-free class composition

### Animation

- **GSAP 3.12** &mdash; ScrollTrigger, quickTo for cursor tracking, timeline transitions
- **Framer Motion 12** &mdash; Scroll progress, spring physics, viewport-triggered animations
- **Lenis** &mdash; Butter-smooth native scroll
- **use-scramble** &mdash; Typewriter/scramble text effects

---

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

```bash
git clone https://github.com/bosamrabusiness-hub/Terminal-IT.git
cd Terminal-IT
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### Production Build

```bash
npm run build
npm start
```

---

## Project Structure

```
src/
├── app/
│   ├── page.tsx                  # Homepage (assembles all sections)
│   ├── layout.tsx                # Root layout, fonts, metadata
│   ├── template.tsx              # Lenis smooth scroll wrapper
│   ├── explorer/                 # Explorer page route
│   └── projects/
│       ├── ProjectLayout.tsx     # Shared project page layout
│       ├── RelatedProjectsSection.tsx
│       └── sonbola-edu/          # Individual project page
├── components/
│   ├── common/                   # Reusable: MagneticButton, AnimatedButton, PreviewImageBox, Toggle
│   ├── footer/                   # Contact section with form
│   ├── Navbar/                   # Navigation bar + mobile nav
│   ├── Offcanvas/                # Full-screen menu overlay
│   ├── Preloader/                # Multilingual loading screen
│   └── sections/
│       ├── Hero/                 # Landing section (desktop + mobile)
│       ├── about/                # Value propositions
│       ├── horizontalScroll/     # Showcase carousel with browser mockup cards
│       ├── works/                # Interactive project modal grid
│       ├── specialization/       # Process steps
│       ├── process/              # Company story
│       ├── purpose/              # Mission statement
│       └── stitch/               # Explorer-style UI section
└── context/                      # AppContext for preloader state & scroll management
```

---

## Design System

### Colors

| Token | Hex | Usage |
|-------|-----|-------|
| `hero-dark` | `#0C0C0C` | Dark backgrounds, cards |
| `mainbody-weg` | `#F8F7F3` | Light body background |
| `details-red` | `#E44021` | Accent, CTAs, highlights |
| `details-white` | `#FFFFFF` | Text on dark surfaces |

### Typography

- **Inter** &mdash; Body text (300&ndash;700)
- **JetBrains Mono** &mdash; Code annotations, labels, UI accents
- **Geist Sans / Mono** &mdash; Headings and system font

### Custom Animations

| Animation | Duration | Description |
|-----------|----------|-------------|
| `float` | 6s | Ambient floating particles |
| `pulse-slow` | 3s | Status indicator pulse |
| `shimmer` | 3s | Loading shimmer effect |
| `fade-in-up` | 0.6s | Scroll-triggered entrance |

---

## Features

- **Multilingual Preloader** &mdash; Cycles through 9 languages with progress bar and curved SVG exit animation
- **Magnetic Buttons** &mdash; Pointer-following spring physics on interactive elements
- **Cursor-Following Modal** &mdash; GSAP-powered preview that tracks mouse over project rows
- **Horizontal Scroll** &mdash; Spring-smoothed (`useSpring`) scroll-driven carousel with browser mockup frames
- **Text Scramble** &mdash; Rotating tech keywords with character-level scramble animation
- **Responsive Architecture** &mdash; `ShowOnDesktop` / `ShowOnMobile` component gates for optimized rendering
- **Noise Overlay** &mdash; Subtle grain texture on dark surfaces for depth

---

## Deployment

Deployed on **Vercel** with default Next.js configuration. Push to `master` triggers automatic deployment.

```bash
git push origin master
```

---

## Contact

- **Email** &mdash; hello@terminal.dev
- **Phone** &mdash; +201551891422
- **Location** &mdash; Cairo, Egypt

---

## License

This project is proprietary. All rights reserved.
