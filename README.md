# Portfolio — Fernando Castro

Personal portfolio of Jesús Fernando Castro Hernández. Software Development student
(TSU, Instituto Tecnológico de Software, Mérida) focused on backend/cloud and
AI-powered automation.

Concept: **"Ascent to the cloud"** — a scroll-driven climb from ground level to above
the clouds, with Liquid Glass panels over layered cloud imagery. See `DESIGN.md` for
the visual system and `PRODUCT.md` for the brief.

## Stack

- Next.js (App Router) + TypeScript
- Tailwind CSS (tokens from `DESIGN.md`)
- Motion (scroll-driven animation and micro-interactions)
- Web3Forms (contact form, no backend)
- Deployed on Vercel

## Development

```bash
npm install
npm run dev      # local development
npm run build    # production build
npm run lint
```

Contact form requires `NEXT_PUBLIC_WEB3FORMS_KEY` in `.env.local` (never committed).
