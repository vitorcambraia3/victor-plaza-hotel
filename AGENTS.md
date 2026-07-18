<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

## Project

Marketing site for **Hotel Victor Plaza Formiga** (pt-BR content). Single Next.js app, no monorepo, no backend, no CMS — all content is hardcoded.

## Commands

- `npm run dev` — dev server (http://localhost:3000)
- `npm run build` — production build (also typechecks via Next)
- `npm run start` — serve the production build
- `npm run lint` — ESLint flat config (`eslint.config.mjs`); runs with no path args by design

There is **no test script and no `typecheck` script**. Do not invent test commands. To typecheck in isolation, use `npx tsc --noEmit`. Verification order: `lint` → `build`.

## Stack quirks (verify before assuming defaults)

- **Next.js 16 + React 19.2** — App Router only. `params`/`searchParams` are **Promises** and must be `await`ed in page components and `generateMetadata` (see `src/app/quartos/[slug]/page.tsx`). Use `generateStaticParams` for `[…]` routes — all content is statically known.
- **Tailwind v4** — there is no `tailwind.config.js`. Theme tokens are defined with `@theme inline` in `src/app/globals.css` (colors `ink/paper/sand/line/muted`, font vars, heading size scale). PostCSS uses `@tailwindcss/postcss`. Prefer these tokens over ad-hoc utilities.
- **`motion` (not framer-motion)** — imported from `motion/react`. See `src/components/Nav.tsx`.
- Path alias `@/*` → `./src/*` (configured in `tsconfig.json`).
- Fonts: `Inter` via `next/font/google`, exposed as `--font-inter` and `--font-inter-display` in `layout.tsx`. Do not introduce other font loaders.

## Where content lives

**`src/lib/data.ts` is the single source of truth** for rooms, services, testimonials, blog posts, menu, gallery, FAQs, legal pages, and all hotel contact info (phone, WhatsApp, address, Instagram). Editing a listing = editing this file; there is no DB or API. The WhatsApp number and `whatsappLink()` helper live here — reuse them, do not hardcode.

Images are served from `/public/images/` and referenced via the `IMG` constant (`"/images"`). Room/blog/gallery images must exist there or `next/image` will 404.

## Conventions to follow

- Pages are **async Server Components**; `"use client"` is reserved for interactive components (e.g. `Nav.tsx`, `Reveal.tsx`, `StatCounter.tsx`, `Accordion.tsx`). Don't add `"use client"` to page routes.
- Common building blocks in `src/components/`: `Section`, `SectionHeading`, `Hero`, `Reveal`, `Button`, `RoomCard`, `FullBleedImage`, `Accordion`. Compose with these before writing new markup — `cn()` from `src/lib/utils.ts` joins class names.
- Preserve Portuguese copy verbatim. Routes are slug-style pt-BR (`/quartos`, `/cafe-da-manha`, `/sobre`, `/galeria`, `/blog`, `/pagina-legal/[slug]`).
- `next.config.ts` sets a strict CSP per route (`default-src 'self'`, `connect-src 'self'`, no external origins) plus HSTS/COOP/X-Frame-Options headers. Any new external script/font/analytics will be blocked — update `headers()` there before adding third-party resources.

## Next.js 16 gotchas worth checking in `node_modules/next/dist/docs/`

The docs ship an inline hint: for slow client-side navigations, Suspense alone is insufficient — you may need to export `unstable_instant` from the route. Consult `docs/01-app/02-guides/instant-navigation.mdx` before touching navigation performance.

`CLAUDE.md` re-exports this file via `@AGENTS.md`; keep guidance here so both stay in sync.