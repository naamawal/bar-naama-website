# NextGen-Ops Website

React + Vite single-page application (SPA).

## Local development

```sh
npm install
npm run dev
```

## Production build

```sh
npm run build
npm run preview
```

## Deploying to Vercel

This repository is configured for Vercel SPA routing using `vercel.json`.

- Framework preset: `Vite`
- Build command: `npm run build`
- Output directory: `dist`

### SPA routing behavior

Direct visits to app routes (for example `/who-we-are`) are rewritten to `index.html`, then handled by React Router in the browser.
