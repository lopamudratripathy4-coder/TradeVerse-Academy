# TradeVerse Academy

A responsive single-page website for TradeVerse Academy, built with React and Vite. The site introduces the academy, outlines learning tracks, explains its learning approach, answers common questions and provides course enquiry links.

## Features

- Responsive desktop, tablet and mobile layout
- Mobile navigation menu
- Hero section with a CSS/SVG market-chart illustration
- About, learning tracks, learning approach and suggested learning path sections
- Course-specific WhatsApp enquiry links
- FAQ accordion using accessible native disclosure elements
- Contact form that opens a pre-filled Gmail compose window, with a default mail-app fallback
- Click-to-call, email and WhatsApp contact links
- Educational-risk disclaimer

## Tech stack

- React 19
- Vite 8
- CSS (responsive layout; no UI framework required)

## Run locally

**Prerequisites:** Node.js `20.19+` or `22.12+`, and npm.

1. Extract the project ZIP.
2. Open the extracted `TradeVerse_GitHub_Ready` folder in VS Code.
3. Open Terminal → New Terminal.
4. Run:

```bash
npm install
npm run dev
```

5. Open the local address printed in the terminal (normally `http://localhost:5173`).

To create and preview a production build:

```bash
npm run build
npm run preview
```

## Contact configuration

The existing source project supplied the following contact details, retained in `src/App.jsx`:

- Email: `tradeverse0707@gmail.com`
- Phone / WhatsApp: `+91 62967 29481`

Update the `EMAIL`, `PHONE` and `PHONE_DISPLAY` constants near the top of `src/App.jsx` if these details change.

The enquiry form first opens a pre-filled Gmail compose window in a new tab. If that is blocked or Gmail is not preferred, the page also shows links to open Gmail directly or use the visitor's default mail application. The visitor must review and send the email manually; the website does **not** submit to a server or store messages. For automatic online form submissions, connect a form service or backend before publishing.

## Publish to GitHub

This project intentionally does not include `node_modules` or build output. Those folders are recreated locally and should not be uploaded to GitHub.

1. Create an empty repository on GitHub, for example `TradeVerse-Academy`.
2. Open this extracted project folder in VS Code.
3. Run these commands in the terminal, replacing the URL with your own repository URL:

```bash
git init
git add .
git commit -m "Complete TradeVerse Academy website"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/TradeVerse-Academy.git
git push -u origin main
```

If Git asks you to sign in, complete the browser authentication prompt. Do not upload `node_modules`.

## Deploy (optional)

The website can be deployed as a static Vite site using a service such as Vercel or Netlify after the repository is pushed to GitHub.

- Build command: `npm run build`
- Output directory: `dist`

No API key or backend is required for the current static website. The contact form remains email-client based unless a backend or form service is configured.

## Content notes

Course topics and learning steps are presented as an informational outline. Confirm actual course availability, schedule, duration, fees, instructors and delivery format with the academy before treating them as official programme details. The site does not promise trading returns and is not investment advice.
