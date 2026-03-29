# Jeevika Web Prototype

A mobile-first web prototype for the Innovate4FinLit program.

## What this build demonstrates

- Split household and business cash through one-tap wallet decisions
- Show the cost of emergency shock with and without protection
- Rehearse a fraud scenario under stress, not as a quiz
- Summarize outcomes through a single visual report card

## Why the prototype is scoped this way

The original concept is larger than a judging-friendly prototype. This web app focuses on one strong vertical slice so judges can understand the problem, feel the consequences, and remember the product in under three minutes.

## Local run

```bash
npm install
npm run dev
```

## Production build

```bash
npm run build
```

## Files

- `src/App.tsx`: screen flow and state
- `src/content.ts`: story content and decision copy
- `src/styles.css`: visual system and responsive UI
- `public/manifest.webmanifest`: installable shell metadata
- `public/sw.js`: basic offline caching
