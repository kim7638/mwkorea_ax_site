# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # Start development server at http://localhost:3000
npm run build    # Build for production
npm run start    # Start production server
npm run lint     # Run ESLint
```

## Stack

- **Next.js 16** with App Router (TypeScript)
- **React 19**
- **Tailwind CSS v4** (configured via `@tailwindcss/postcss`)
- No test framework configured yet

## Architecture

This is an early-stage Next.js App Router project for the Mobile Works Korea AX site — an Enterprise AI Service Builder landing page.

- `app/layout.tsx` — Root layout with Geist font variables applied globally
- `app/page.tsx` — Main landing page (currently the only route)
- `app/globals.css` — Global styles with Tailwind imports
- `next.config.ts` — Next.js config (currently empty)

**Path alias:** `@/*` maps to the project root (e.g., `@/app/...`, `@/components/...`).

**ESLint** uses `eslint-config-next/core-web-vitals` and `eslint-config-next/typescript` via flat config (`eslint.config.mjs`).

**TypeScript** strict mode is enabled.
