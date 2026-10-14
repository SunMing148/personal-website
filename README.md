# Wenming Sun — Photographer

A small portfolio site: an introduction, a selection of work, pricing, and an
email you can't miss. Built on Next.js with shadcn/ui, Tailwind CSS v4, and
the Fraunces / Inter type pairing.

## Getting started

```bash
pnpm install
pnpm dev      # http://localhost:3000
pnpm build    # production build
pnpm lint     # eslint
pnpm typecheck
```

## Make it yours

Everything personal lives in **`lib/photos.ts`** — name, email, and every
photograph. The rest of the checklist:

| Where | What to replace |
| --- | --- |
| `lib/photos.ts` → `site` | Your name, wordmark, and **email address** (used in the header, hero, pricing, contact, and footer) |
| `lib/photos.ts` → `heroPhoto` | The wide image under the opening headline |
| `lib/photos.ts` → `portraitPhoto` | The portrait beside "Who I am" |
| `lib/photos.ts` → `gallery` | The eight selected-work photographs, with titles and categories |
| `components/site/about.tsx` | The biography paragraphs and the "what I shoot" list |
| `components/site/pricing.tsx` | Tier names, prices, and what each includes |
| `app/layout.tsx` | The page `<title>` and description |

All photographs are placeholders served from Unsplash. To use your own work,
drop files into `public/photos/` and change the `src` values to local paths
such as `/photos/your-file.jpg` — drop the `?…` query string; nothing else
needs to change.

Design notes: warm paper neutrals, hairline rules, and a squared-off button —
the interface stays quiet so the photographs carry the color. Light and dark
themes are both supported; toggle with the button in the header or press
<kbd>d</kbd>.
