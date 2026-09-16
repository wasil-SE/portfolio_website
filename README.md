# IAmWasil — portfolio site

A static React + Vite portfolio frontend.

## Design system

Dark creative-tech palette built around a soft mint-green accent (`#7fe6a3`), paired
with `Space Grotesk` for display type and `IBM Plex Sans`/`IBM Plex Mono` for body
and technical labels. Tokens live at the top of `client/src/index.css` — change the
`:root` variables there to retheme the whole site.

## Running it locally

You'll need [Node.js](https://nodejs.org) 18+ installed.

```bash
cd client
npm install
npm run dev
```

The site opens at `http://localhost:5173`.

## Deploying

Build with:

```bash
cd client
npm run build
```

Then deploy the generated `client/dist` folder to any static hosting provider such as
Vercel, Netlify, Cloudflare Pages, or GitHub Pages.

## Customizing content

- **Projects** — edit `client/src/data/projects.js`. Add real GitHub/demo links as
  they become available; placeholders are `#`.
- **FAQ** — edit `client/src/data/faq.js`.
- **Contact options** — update the direct links in `client/src/components/Contact.jsx`.
- **Copy** — hero, about, services, and other copy live directly in their component
  files under `client/src/components/`.

## Structure

```
client/
  src/
    components/    one component + one CSS file per section
    data/           projects.js, faq.js — edit content here, not in components
    index.css       design tokens, global reset, shared utility classes
```
