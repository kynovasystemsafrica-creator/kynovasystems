# KYNOVA Website

KYNOVA's marketing website and services showcase, built with React and Vite. The project includes routed service pages, SEO metadata, consent-aware Google Analytics loading, and a responsive frontend for product engineering, cloud, consulting, engineering, design, careers, and contact flows.

## Overview

- React 18 + Vite single-page application
- Route-based code splitting with `React.lazy`
- SEO support via `react-helmet-async`
- Consent-aware Google Analytics integration
- Contact flow powered by EmailJS
- Static assets, sitemap, and robots configuration included

## Pages

- `/` - Home
- `/about` - About
- `/mobile-web-development` - Mobile & Web Development
- `/cloud-computing` - Cloud Computing
- `/consulting` - Consulting
- `/engineering` - Engineering & Digitization
- `/graphic-design` - Graphic Design
- `/careers` - Careers
- `/contact` - Contact
- `/privacy` - Privacy Policy
- `/terms` - Terms and Conditions

## Tech Stack

- React
- React Router
- Vite
- React Helmet Async
- EmailJS Browser SDK
- React Icons

## Prerequisites

- Node.js 18+ recommended
- npm

## Getting Started

1. Install dependencies:

```bash
npm install
```

2. Create a local environment file:

```bash
copy .env.example .env
```

3. Start the development server:

```bash
npm run dev
```

4. Open the local app in your browser:

```text
http://localhost:5173
```

## Environment Variables

The project expects these values in `.env`:

```bash
VITE_EMAILJS_SERVICE_ID=your_service_id_here
VITE_EMAILJS_TEMPLATE_ID=your_template_id_here
VITE_EMAILJS_PUBLIC_KEY=your_public_key_here
VITE_GA_MEASUREMENT_ID=G-XXXXXXXXXX
```

## Available Scripts

- `npm run dev` - Start the Vite development server
- `npm run build` - Build the production bundle into `dist/`
- `npm run preview` - Preview the production build locally
- `npm run lint` - Run ESLint

## Project Structure

```text
Kynova_systems/
|-- public/                 Static assets, sitemap, robots, and brand images
|-- src/
|   |-- components/         Shared UI building blocks
|   |-- contexts/           React context providers
|   |-- hooks/              Reusable hooks
|   |-- lib/                Consent and asset helpers
|   |-- pages/              Route-level page components
|   |-- App.jsx             Application routes and app shell
|   |-- main.jsx            App entry point
|   |-- index.css           Global styles
|   `-- theme.css           Theme styles
|-- .env.example            Example environment variables
|-- package.json            Scripts and dependencies
`-- vite.config.js          Vite configuration
```

## Build and Deployment

Build the project with:

```bash
npm run build
```

The generated production files are written to `dist/`.

This repository also includes:

- `vercel.json` for Vercel deployment
- `public/sitemap.xml` and `public/robots.txt` for search indexing support

## Notes

- Google Analytics only loads after analytics consent is accepted.
- EmailJS credentials must be configured before the contact form can work in a live environment.
- `dist/` is intentionally ignored by Git and should be generated from source when deploying.
