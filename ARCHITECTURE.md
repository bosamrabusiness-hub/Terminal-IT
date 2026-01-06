# Project Architecture Overview

## Tech Stack
- Framework: Next.js 16 (App Router)
- Language: TypeScript (strict typing across components)
- UI: React 18, Tailwind CSS (utility classes), SCSS Modules (local styles)
- Animation: GSAP (including ScrollTo and ScrollTrigger), Framer Motion
- Images: Next/Image with remote patterns ([next.config.js](file:///c:/Ahmed/Terminal-portofolio1/next.config.js))
- Tooling: ESLint (Flat config), Prettier, PostCSS, Tailwind plugins

## Directory Layout
- Root
  - Build and tooling: [package.json](file:///c:/Ahmed/Terminal-portofolio1/package.json), [tailwind.config.ts](file:///c:/Ahmed/Terminal-portofolio1/tailwind.config.ts), [next.config.js](file:///c:/Ahmed/Terminal-portofolio1/next.config.js), [eslint.config.mjs](file:///c:/Ahmed/Terminal-portofolio1/eslint.config.mjs)
  - Static assets: [public](file:///c:/Ahmed/Terminal-portofolio1/public)
- App (Next.js App Router)
  - Global styling: [globals.css](file:///c:/Ahmed/Terminal-portofolio1/src/app/globals.css)
  - Root layout and providers:
    - [layout.tsx](file:///c:/Ahmed/Terminal-portofolio1/src/app/layout.tsx) — wraps pages with AppProvider and custom Providers, mounts Navbar and PreLoader
    - [provider.tsx](file:///c:/Ahmed/Terminal-portofolio1/src/app/provider.tsx) — page transition layers via next-transition-router + GSAP
    - [template.tsx](file:///c:/Ahmed/Terminal-portofolio1/src/app/template.tsx) — applies Lenis smooth scrolling with ReactLenis root
  - Home page composition: [page.tsx](file:///c:/Ahmed/Terminal-portofolio1/src/app/page.tsx)
  - Projects area:
    - [projects/ProjectLayout.tsx](file:///c:/Ahmed/Terminal-portofolio1/src/app/projects/ProjectLayout.tsx) — shared layout, hero banner, related projects
    - [projects/RelatedProjectsSection.tsx](file:///c:/Ahmed/Terminal-portofolio1/src/app/projects/RelatedProjectsSection.tsx) — linked cards for more projects
    - [projects/elysium/page.tsx](file:///c:/Ahmed/Terminal-portofolio1/src/app/projects/elysium/page.tsx), [ParallaxIntro.tsx](file:///c:/Ahmed/Terminal-portofolio1/src/app/projects/elysium/ParallaxIntro.tsx)
    - [projects/kurskonfigurator/page.tsx](file:///c:/Ahmed/Terminal-portofolio1/src/app/projects/kurskonfigurator/page.tsx), [projects/sonbola-edu/page.tsx](file:///c:/Ahmed/Terminal-portofolio1/src/app/projects/sonbola-edu/page.tsx)
- Components
  - Context: [AppContext.tsx](file:///c:/Ahmed/Terminal-portofolio1/src/components/context/AppContext.tsx) — preloader flow, hash-scroll, scramble refs, hero icon control
  - Navigation: [Navbar](file:///c:/Ahmed/Terminal-portofolio1/src/components/Navbar/Navbar.tsx) with [DesktopNav](file:///c:/Ahmed/Terminal-portofolio1/src/components/Navbar/DesktopNav.tsx), [MobileNav](file:///c:/Ahmed/Terminal-portofolio1/src/components/Navbar/MobileNav.tsx), and [NavItemLink](file:///c:/Ahmed/Terminal-portofolio1/src/components/Navbar/NavItemLink.tsx)
  - Common UI: [AnimatedButton](file:///c:/Ahmed/Terminal-portofolio1/src/components/common/AnimatedButton.tsx), [FaviconSwitcher](file:///c:/Ahmed/Terminal-portofolio1/src/components/common/FaviconSwitcher.tsx), [MagneticButton](file:///c:/Ahmed/Terminal-portofolio1/src/components/common/MagneticButton.tsx), [PreviewImageBox](file:///c:/Ahmed/Terminal-portofolio1/src/components/common/PreviewImageBox.tsx), [TerminalIcon](file:///c:/Ahmed/Terminal-portofolio1/src/components/common/TerminalIcon.tsx), [toggle](file:///c:/Ahmed/Terminal-portofolio1/src/components/common/toggle.tsx)
  - Sections:
    - [Hero](file:///c:/Ahmed/Terminal-portofolio1/src/components/sections/Hero/index.tsx) — sticky hero with headline and icon
    - [about](file:///c:/Ahmed/Terminal-portofolio1/src/components/sections/about/index.tsx) — heading and intro copy
    - [horizontalScroll](file:///c:/Ahmed/Terminal-portofolio1/src/components/sections/horizontalScroll/index.tsx) — framer-motion scroll sync; contains cards and stacks
    - [works](file:///c:/Ahmed/Terminal-portofolio1/src/components/sections/works/index.tsx) — recent projects carousel with modal preview ([style.module.scss](file:///c:/Ahmed/Terminal-portofolio1/src/components/sections/works/style.module.scss), [projectData.ts](file:///c:/Ahmed/Terminal-portofolio1/src/components/sections/works/projectData.ts))
    - [process](file:///c:/Ahmed/Terminal-portofolio1/src/components/sections/process/index.tsx) — sticky image and descriptive text
    - [purpose](file:///c:/Ahmed/Terminal-portofolio1/src/components/sections/purpose/index.tsx), [specialization](file:///c:/Ahmed/Terminal-portofolio1/src/components/sections/specialization/index.tsx)
    - [stitch](file:///c:/Ahmed/Terminal-portofolio1/src/components/sections/stitch/index.tsx) — Soft window frame and Windows Explorer UI ([SoftWindowFrame.tsx](file:///c:/Ahmed/Terminal-portofolio1/src/components/sections/stitch/SoftWindowFrame.tsx), [WindowsExplorer.tsx](file:///c:/Ahmed/Terminal-portofolio1/src/components/sections/stitch/WindowsExplorer.tsx))
  - Footer: [footer](file:///c:/Ahmed/Terminal-portofolio1/src/components/footer/index.tsx)
  - Hooks: [useMedia](file:///c:/Ahmed/Terminal-portofolio1/src/components/hooks/useMedia.tsx), [useMagnetic](file:///c:/Ahmed/Terminal-portofolio1/src/components/hooks/useMagnetic.ts)
  - Offcanvas: [Offcanvas](file:///c:/Ahmed/Terminal-portofolio1/src/components/Offcanvas/Offcanvas.tsx) with [Backdrop](file:///c:/Ahmed/Terminal-portofolio1/src/components/Offcanvas/Backdrop.tsx), [OffcanvasBody](file:///c:/Ahmed/Terminal-portofolio1/src/components/Offcanvas/OffcanvasBody.tsx), [OffcanvasToggle](file:///c:/Ahmed/Terminal-portofolio1/src/components/Offcanvas/OffcanvasToggle.tsx), [Links](file:///c:/Ahmed/Terminal-portofolio1/src/components/Offcanvas/Links.tsx)
  - Preloader: [Preloader](file:///c:/Ahmed/Terminal-portofolio1/src/components/Preloader/index.tsx), [PreLoaderText](file:///c:/Ahmed/Terminal-portofolio1/src/components/Preloader/PreLoaderText.tsx), [IntroOverlay](file:///c:/Ahmed/Terminal-portofolio1/src/components/Preloader/IntroOverlay.tsx)
- Config
  - Navigation items: [navItems.ts](file:///c:/Ahmed/Terminal-portofolio1/src/config/navItems.ts)

## Application Flow
1. Bootstrapping
   - Root layout applies fonts and mounts providers: [layout.tsx](file:///c:/Ahmed/Terminal-portofolio1/src/app/layout.tsx)
   - AppProvider initializes page-locking and preloader, then releases scroll and triggers hero animations: [AppContext.tsx](file:///c:/Ahmed/Terminal-portofolio1/src/components/context/AppContext.tsx)
   - Providers manage route transitions using GSAP timelines with next-transition-router: [provider.tsx](file:///c:/Ahmed/Terminal-portofolio1/src/app/provider.tsx)
   - Template wraps content with Lenis smooth-scrolling root: [template.tsx](file:///c:/Ahmed/Terminal-portofolio1/src/app/template.tsx)
2. Navigation
   - Desktop/Mobile nav observe scroll direction via Framer Motion useScroll to hide/show, and smooth scroll to anchors using GSAP ScrollTo: [DesktopNav.tsx](file:///c:/Ahmed/Terminal-portofolio1/src/components/Navbar/DesktopNav.tsx), [MobileNav.tsx](file:///c:/Ahmed/Terminal-portofolio1/src/components/Navbar/MobileNav.tsx), [NavItemLink.tsx](file:///c:/Ahmed/Terminal-portofolio1/src/components/Navbar/NavItemLink.tsx)
3. Home Page Sections
   - Hero: sticky section showing headline and hero arrow: [Hero/index.tsx](file:///c:/Ahmed/Terminal-portofolio1/src/components/sections/Hero/index.tsx)
   - About: text content with scramble-controlled label and scroll button: [about/index.tsx](file:///c:/Ahmed/Terminal-portofolio1/src/components/sections/about/index.tsx)
   - Horizontal Scroll: container tracks scroll progress to move a horizontal stack of cards; cards use Next/Image and Tailwind for layout: [horizontalScroll/index.tsx](file:///c:/Ahmed/Terminal-portofolio1/src/components/sections/horizontalScroll/index.tsx), [stacks.tsx](file:///c:/Ahmed/Terminal-portofolio1/src/components/sections/horizontalScroll/stacks.tsx)
   - Works: interactive modal preview following cursor; images pulled from [projectData.ts](file:///c:/Ahmed/Terminal-portofolio1/src/components/sections/works/projectData.ts); styling in [style.module.scss](file:///c:/Ahmed/Terminal-portofolio1/src/components/sections/works/style.module.scss)
   - Process: sticky image block using Next/Image fill with a relative wrapper: [process/index.tsx](file:///c:/Ahmed/Terminal-portofolio1/src/components/sections/process/index.tsx)
   - Purpose, Specialization: content sections for messaging and capabilities: [purpose/index.tsx](file:///c:/Ahmed/Terminal-portofolio1/src/components/sections/purpose/index.tsx), [specialization/index.tsx](file:///c:/Ahmed/Terminal-portofolio1/src/components/sections/specialization/index.tsx)
4. Projects
   - ProjectLayout composes hero and details, provides related projects via helper, and ensures hero icon is shown: [ProjectLayout.tsx](file:///c:/Ahmed/Terminal-portofolio1/src/app/projects/ProjectLayout.tsx)
   - Elysium page adds ParallaxIntro and challenge narratives: [elysium/page.tsx](file:///c:/Ahmed/Terminal-portofolio1/src/app/projects/elysium/page.tsx), [ParallaxIntro.tsx](file:///c:/Ahmed/Terminal-portofolio1/src/app/projects/elysium/ParallaxIntro.tsx)
   - RelatedProjectsSection renders cards linked to other projects: [RelatedProjectsSection.tsx](file:///c:/Ahmed/Terminal-portofolio1/src/app/projects/RelatedProjectsSection.tsx)

## State & Animations
- Global UI state and lifecycle are coordinated in [AppContext.tsx](file:///c:/Ahmed/Terminal-portofolio1/src/components/context/AppContext.tsx):
  - Preloader animation and unlocking scroll
  - Hash-based offset scrolling using GSAP ScrollTo
  - Scramble text references (labels/buttons) via use-scramble
- Component-level animations:
  - Framer Motion: scroll progress, variants, cursor-following modal: [works/index.tsx](file:///c:/Ahmed/Terminal-portofolio1/src/components/sections/works/index.tsx)
  - GSAP: route transitions ([provider.tsx](file:///c:/Ahmed/Terminal-portofolio1/src/app/provider.tsx)), smooth scroll ([NavItemLink.tsx](file:///c:/Ahmed/Terminal-portofolio1/src/components/Navbar/NavItemLink.tsx))

## Styling Strategy
- Tailwind CSS for global utility-first styles with custom theme tokens ([tailwind.config.ts](file:///c:/Ahmed/Terminal-portofolio1/tailwind.config.ts))
- SCSS Modules for localized section styles, especially the Works modal carousel: [works/style.module.scss](file:///c:/Ahmed/Terminal-portofolio1/src/components/sections/works/style.module.scss), [works/modal/style.module.scss](file:///c:/Ahmed/Terminal-portofolio1/src/components/sections/works/modal/style.module.scss)
- Global CSS for variables and base overrides: [globals.css](file:///c:/Ahmed/Terminal-portofolio1/src/app/globals.css)

## Image Handling
- All images load via Next/Image with appropriate sizes and parent positioning
- Remote patterns allow images from Unsplash and other specified hosts: [next.config.js](file:///c:/Ahmed/Terminal-portofolio1/next.config.js)

## Navigation Model
- Links defined in [navItems.ts](file:///c:/Ahmed/Terminal-portofolio1/src/config/navItems.ts) with per-target offsets
- Smooth anchor navigation on the homepage; on other routes, links navigate normally: [NavItemLink.tsx](file:///c:/Ahmed/Terminal-portofolio1/src/components/Navbar/NavItemLink.tsx)

## Build & Run
- Scripts: dev/build/start/lint — see [package.json](file:///c:/Ahmed/Terminal-portofolio1/package.json)
- ESLint Flat config with Next plugin, Prettier for formatting

## Key Design Decisions
- App Router structure keeps global providers and navigation consistent across routes
- GSAP + Framer Motion split: GSAP for complex timeline/route transitions; Framer Motion for declarative component animations
- Tailwind for speed and consistency; SCSS modules where component-specific styles benefit from local scoping

