# Sportfreunde Urlau e.V. — Website

The public website for **Sportfreunde Urlau e.V.**, a sports club based in Urlau, Germany. The site presents the club, its departments (*Abteilungen*), upcoming events, news, and contact information.

## What's in this repo

- **Club overview** — history, board members, and association info
- **Abteilungen pages** — individual pages for each department (e.g. Radsport, Kinderturnen, Tischtennis, …)
- **Events & news** — content managed via Sanity CMS, no code changes needed for updates
- **Downloads & contact** — static utility pages

## Tech stack

| Concern   | Tool                          |
|-----------|-------------------------------|
| Framework | Next.js 16 (App Router)       |
| Language  | TypeScript 5                  |
| Styling   | Tailwind CSS 4                |
| CMS       | Sanity (content management)   |
| Hosting   | Vercel                        |

## Local development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## Content updates

All dynamic content (news, events, tours) is managed through **Sanity Studio** — no code changes required for day-to-day updates.
