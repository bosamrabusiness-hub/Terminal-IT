
# Portfolio — Next.js 16, TypeScript & GSAP

![Project Banner](./public/heroarrow.svg)

A modern portfolio focused on UI/UX design and web development. Built with Next.js 16 (App Router), React 19, TypeScript, and Tailwind CSS. Animations and transitions are powered by GSAP and Framer Motion.

---

## Key Features
- Next.js 16 App Router
- Smooth animations with GSAP and Framer Motion
- Responsive UI with Tailwind CSS
- Performance, accessibility, and SEO optimizations

---

## Main Dependencies
- [Next.js](https://nextjs.org/) — v16
- [React](https://react.dev/) — v19
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [GSAP](https://greensock.com/gsap/) and [@gsap/react]
- [Framer Motion](https://www.framer.com/motion/)
- [Lenis](https://github.com/studio-freight/lenis) and [Locomotive Scroll](https://locomotivemtl.github.io/locomotive-scroll/)
- [next-transition-router](https://github.com/antfu/next-transition-router)

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

---

## Project Structure
```
├── public/
├── src/
│  ├── app/
│  │  ├── layout.tsx
│  │  ├── page.tsx
│  │  ├── projects/
│  │  ├── provider.tsx
│  │  └── template.tsx
│  ├── components/
│  │  ├── sections/
│  │  └── context/
│  ├── config/
├── tailwind.config.ts
├── next.config.ts
├── package.json
└── README.md
```

---

## Deployment
Deploy easily with [Vercel](https://vercel.com/) by connecting your GitHub repository. See the official Next.js docs for details.

---

## License
Licensed under [MIT](LICENSE).
