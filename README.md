# Portfolio — Next.js 16, TypeScript & GSAP

A modern portfolio focused on UI/UX design and web development. Built with Next.js 16 (App Router), React 19, TypeScript, and Tailwind CSS. Animations and transitions are powered by GSAP and Framer Motion, with smooth scrolling via Lenis.

---

## Tech Stack
- Next.js 16 (App Router)
- React 19 with TypeScript
- Tailwind CSS and SCSS Modules
- GSAP and Framer Motion
- next-transition-router for route transitions
- Lenis for smooth scrolling
- ESLint Flat config and Prettier

---

## Key Features
- Smooth route transitions and preloader flow
- Responsive UI with Tailwind and modern typography
- Interactive project previews and horizontal scroll sections
- Optimized image handling using Next/Image with remote patterns

---

## Getting Started
### Install
```bash
npm install
```

### Development
```bash
npm run dev
```
Open http://localhost:3000

### Production
```bash
npm run build
npm start
```

### Lint
```bash
npm run lint
```

Scripts are defined in [package.json](file:///c:/Ahmed/Terminal-portofolio1/package.json) and use the flat ESLint config [eslint.config.mjs](file:///c:/Ahmed/Terminal-portofolio1/eslint.config.mjs).

---

## Project Structure
- App Router
  - Global CSS: [globals.css](file:///c:/Ahmed/Terminal-portofolio1/src/app/globals.css)
  - Root layout: [layout.tsx](file:///c:/Ahmed/Terminal-portofolio1/src/app/layout.tsx)
  - Providers: [provider.tsx](file:///c:/Ahmed/Terminal-portofolio1/src/app/provider.tsx)
  - Lenis smoothing: [template.tsx](file:///c:/Ahmed/Terminal-portofolio1/src/app/template.tsx)
  - Home page: [page.tsx](file:///c:/Ahmed/Terminal-portofolio1/src/app/page.tsx)
  - Projects: [ProjectLayout.tsx](file:///c:/Ahmed/Terminal-portofolio1/src/app/projects/ProjectLayout.tsx), [RelatedProjectsSection.tsx](file:///c:/Ahmed/Terminal-portofolio1/src/app/projects/RelatedProjectsSection.tsx), [elysium/page.tsx](file:///c:/Ahmed/Terminal-portofolio1/src/app/projects/elysium/page.tsx), [kurskonfigurator/page.tsx](file:///c:/Ahmed/Terminal-portofolio1/src/app/projects/kurskonfigurator/page.tsx), [sonbola-edu/page.tsx](file:///c:/Ahmed/Terminal-portofolio1/src/app/projects/sonbola-edu/page.tsx)
- Components
  - Navbar: [Navbar.tsx](file:///c:/Ahmed/Terminal-portofolio1/src/components/Navbar/Navbar.tsx), [DesktopNav.tsx](file:///c:/Ahmed/Terminal-portofolio1/src/components/Navbar/DesktopNav.tsx), [MobileNav.tsx](file:///c:/Ahmed/Terminal-portofolio1/src/components/Navbar/MobileNav.tsx), [NavItemLink.tsx](file:///c:/Ahmed/Terminal-portofolio1/src/components/Navbar/NavItemLink.tsx), [TextHover.tsx](file:///c:/Ahmed/Terminal-portofolio1/src/components/Navbar/TextHover.tsx)
  - Offcanvas: [Offcanvas](file:///c:/Ahmed/Terminal-portofolio1/src/components/Offcanvas/Offcanvas.tsx), [Backdrop](file:///c:/Ahmed/Terminal-portofolio1/src/components/Offcanvas/Backdrop.tsx), [OffcanvasBody](file:///c:/Ahmed/Terminal-portofolio1/src/components/Offcanvas/OffcanvasBody.tsx), [OffcanvasToggle](file:///c:/Ahmed/Terminal-portofolio1/src/components/Offcanvas/OffcanvasToggle.tsx), [Links](file:///c:/Ahmed/Terminal-portofolio1/src/components/Offcanvas/Links.tsx)
  - Preloader: [index.tsx](file:///c:/Ahmed/Terminal-portofolio1/src/components/Preloader/index.tsx), [PreLoaderText.tsx](file:///c:/Ahmed/Terminal-portofolio1/src/components/Preloader/PreLoaderText.tsx), [IntroOverlay.tsx](file:///c:/Ahmed/Terminal-portofolio1/src/components/Preloader/IntroOverlay.tsx)
  - Sections: [Hero](file:///c:/Ahmed/Terminal-portofolio1/src/components/sections/Hero/index.tsx), [about](file:///c:/Ahmed/Terminal-portofolio1/src/components/sections/about/index.tsx), [horizontalScroll](file:///c:/Ahmed/Terminal-portofolio1/src/components/sections/horizontalScroll/index.tsx), [works](file:///c:/Ahmed/Terminal-portofolio1/src/components/sections/works/index.tsx), [process](file:///c:/Ahmed/Terminal-portofolio1/src/components/sections/process/index.tsx), [purpose](file:///c:/Ahmed/Terminal-portofolio1/src/components/sections/purpose/index.tsx), [specialization](file:///c:/Ahmed/Terminal-portofolio1/src/components/sections/specialization/index.tsx), [stitch](file:///c:/Ahmed/Terminal-portofolio1/src/components/sections/stitch/index.tsx)
  - Common UI: [AnimatedButton.tsx](file:///c:/Ahmed/Terminal-portofolio1/src/components/common/AnimatedButton.tsx), [FaviconSwitcher.tsx](file:///c:/Ahmed/Terminal-portofolio1/src/components/common/FaviconSwitcher.tsx), [MagneticButton.tsx](file:///c:/Ahmed/Terminal-portofolio1/src/components/common/MagneticButton.tsx), [PreviewImageBox.tsx](file:///c:/Ahmed/Terminal-portofolio1/src/components/common/PreviewImageBox.tsx), [TerminalIcon.tsx](file:///c:/Ahmed/Terminal-portofolio1/src/components/common/TerminalIcon.tsx), [toggle.tsx](file:///c:/Ahmed/Terminal-portofolio1/src/components/common/toggle.tsx)
  - Hooks: [useMedia.tsx](file:///c:/Ahmed/Terminal-portofolio1/src/components/hooks/useMedia.tsx), [useMagnetic.ts](file:///c:/Ahmed/Terminal-portofolio1/src/components/hooks/useMagnetic.ts)
  - Config: [navItems.ts](file:///c:/Ahmed/Terminal-portofolio1/src/config/navItems.ts)

---

## Animations & Transitions
- Route transitions: GSAP timelines with [provider.tsx](file:///c:/Ahmed/Terminal-portofolio1/src/app/provider.tsx) using next-transition-router
- Preloader and intro overlay orchestrated through [AppContext.tsx](file:///c:/Ahmed/Terminal-portofolio1/src/components/context/AppContext.tsx) and Preloader components
- Smooth scrolling: Lenis root in [template.tsx](file:///c:/Ahmed/Terminal-portofolio1/src/app/template.tsx)
- Component animations: Framer Motion variants in sections like [works](file:///c:/Ahmed/Terminal-portofolio1/src/components/sections/works/index.tsx)

---

## Navigation Model
- Links are defined in [navItems.ts](file:///c:/Ahmed/Terminal-portofolio1/src/config/navItems.ts) with per-target offsets
- On the homepage, anchors scroll smoothly via GSAP in [NavItemLink.tsx](file:///c:/Ahmed/Terminal-portofolio1/src/components/Navbar/NavItemLink.tsx)

---

## Image Handling
- Configured remote patterns in [next.config.js](file:///c:/Ahmed/Terminal-portofolio1/next.config.js) for external images
- All images use Next/Image with correct parent positioning and sizing

---

## Deployment
Deploy easily with Vercel by connecting your repository. See the official Next.js docs for details.

