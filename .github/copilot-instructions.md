# Copilot Instructions — Sportfreunde Urlau Frontend

## Project Overview

This is the public website for **Sportfreunde Urlau e.V.**, a German sports club. Built with **Next.js 16 (App Router)**, **React 19**, **TypeScript 5**, **Tailwind CSS 4**, and **Sanity CMS**.

---

## Stack

| Concern         | Tool                                                                       |
| --------------- | -------------------------------------------------------------------------- |
| Framework       | Next.js 16 — App Router                                                    |
| Language        | TypeScript 5 (strict mode)                                                 |
| Styling         | Tailwind CSS 4 — utility-first, configured via `globals.css`               |
| CMS             | Sanity (`next-sanity`, GROQ queries)                                       |
| Images          | `@sanity/image-url` + Next.js `<Image>` (remote pattern: `cdn.sanity.io`)  |
| Fonts           | DM Sans (body, `--font-sans`), Playfair Display (headings, `--font-serif`) |
| Analytics       | Vercel Analytics                                                           |
| Package manager | npm                                                                        |

---

## Project Structure

```
app/                     # Next.js App Router — pages live here
  layout.tsx             # Root layout (fonts, Navbar, Footer, Analytics)
  page.tsx               # Home page
  globals.css            # Tailwind theme & CSS custom properties
  abteilungen/           # One subfolder per Abteilung (department)
components/
  atoms/                 # Primitive, single-responsibility components
  molecules/             # Composed from atoms
  organisms/             # Full page sections composed from molecules/atoms
lib/
  abteilungen.ts         # Hardcoded Abteilung data (name, slug, icon emoji)
  cms/
    client.ts            # Sanity client (projectId: n07z17nt, dataset: production)
    get*.ts              # One async fetch function per data type
public/                  # Static assets
```

Path alias `@/*` maps to the project root — always use it for imports.

---

## Component Conventions

### Atomic Design

Follow **atoms → molecules → organisms** strictly:

- **Atoms**: One responsibility, no composition of other custom components. Examples: `Button`, `Headline`, `Tag`, `SectionLabel`.
- **Molecules**: Combine atoms. Examples: `AbteilungCard`, `NavItem`, `TerminCard`.
- **Organisms**: Full page sections. Examples: `Navbar`, `HeroSection`, `AbteilungenSection`, `Footer`.

### TypeScript

- Define props as inline `interface` (not `type`) above the component.
- Extend native HTML element props where appropriate (e.g., `ComponentPropsWithoutRef<"a">`).
- All data types returned from Sanity must be explicitly typed (exported interfaces in the fetch file).

### Server vs. Client Components

- **Server components by default** — fetch data at the server level, pass as props.
- Use `"use client"` only when browser APIs or React state/effects are required (e.g., `Navbar` for menu toggle).
- Never add `"use client"` to page files unless absolutely necessary.

### Naming

- **PascalCase** for component files and function names.
- **camelCase** for utility files and helper functions.
- Files match their default export name exactly.

---

## Styling

- **No `tailwind.config.js`** — all theme configuration is in `app/globals.css` inside `@theme` / `@theme inline` blocks.
- Use Tailwind utility classes. Avoid inline `style` props except for dynamic values that Tailwind can't express.
- Custom CSS properties defined in `globals.css`:
  - Colors: `--color-primary` (blue), `--color-secondary` (red), `--color-accent` (gold), `--color-surface`, `--color-muted`
  - Fonts: `--font-sans`, `--font-serif`
- **Focus rings**: Use `focus-visible:ring-3 focus-visible:ring-[--color-accent]` for interactive elements.
- **Responsive**: Use the `lg:` breakpoint for desktop layouts.
- **Animations**: Use predefined `fadeUp` / `fadeLeft` keyframes from `globals.css` where needed.
- Custom utility class `.hover-animation` for brightness hover effects.

### Typography Scale

Custom `@utility` classes are defined in `globals.css`. Always use these — never use arbitrary `text-[…rem]` or `leading-[…]` values on paragraph text.

| Class          | Size | Line-height | Use                                           |
| -------------- | ---- | ----------- | --------------------------------------------- |
| `text-body`    | 16px | 1.75        | Hero subtitles, hero/section intro paragraphs |
| `text-body-xs` | 14px | 1.70        | Card descriptions, secondary info             |
| `text-caption` | 13px | 1.65        | Fine print, small labels, footnotes           |

Margin-bottom on `<p>` elements follows the Tailwind spacing scale in **px** (not rem):

| Token   | px   | Context                                    |
| ------- | ---- | ------------------------------------------ |
| `mb-4`  | 16px | First paragraph before a second paragraph  |
| `mb-8`  | 32px | Paragraph before a button/CTA              |
| `mb-10` | 40px | Hero paragraph                             |
| `mb-11` | 44px | Section intro paragraph (before grid/list) |

---

## CMS (Sanity)

### Client

```ts
// lib/cms/client.ts
import { createClient } from "next-sanity";
export const client = createClient({
  projectId: "n07z17nt",
  dataset: "production",
  apiVersion: "2024-01-01",
  useCdn: false,
  perspective: "published",
});
```

### Data Fetching Pattern

- One file per data type under `lib/cms/`, named `get<DataType>.ts`.
- Export a single `async` function that calls `client.fetch<T>(groq`...`)`.
- Always provide a strongly-typed return interface in the same file.
- Call the fetch function in the **page server component** and pass data as props.

```ts
// Example pattern
export interface RadsportHerrenTour { ... }

export async function getRadsportHerrenTours(): Promise<RadsportHerrenTour[]> {
  return client.fetch<RadsportHerrenTour[]>(groq`*[_type == "radsportHerrenTour"] | order(date asc)`);
}
```

### Images

Use `@sanity/image-url` to build URLs from Sanity image references. Configure `urlFor` in `lib/cms/client.ts`. Wrap with Next.js `<Image>` for optimization.

---

## Pages

- Each page exports a `metadata` object (`Metadata` from `next/metadata`).
- Abteilung pages live under `app/abteilungen/<slug>/page.tsx`.
- Pages are async server components — fetch data directly inside the component function.
- Use semantic landmark elements (`<main id="main-content">`, `<section>`, `<article>`).

---

## Abteilungen Data

Hardcoded in `lib/abteilungen.ts`. Each entry has:

```ts
interface Abteilung {
  name: string; // Display name
  slug: string; // URL slug (matches app/abteilungen/<slug>/)
  icon: string; // Emoji icon
}
```

The `Navbar` and `AbteilungenSection` consume this list. When adding a new Abteilung, add it here **and** create the corresponding page route.

---

## Key Rules

1. **TypeScript strict** — no `any`, no non-null assertions (`!`) without justification.
2. **`@/*` imports** — always use the path alias, never relative `../..` chains.
3. **No CSS files per component** — all styling via Tailwind in JSX.
4. **Server-first** — keep `"use client"` surface area minimal.
5. **Sanity data** — never hard-code content that belongs in the CMS.
6. **Accessibility** — provide `alt` text for images, use semantic HTML, maintain focus-visible styles.
7. **No default exports from `lib/`** — use named exports for utilities and data.
