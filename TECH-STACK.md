# EDRA Arsitek Indonesia — Tech Stack 🛠️

> Complete technical overview of the current production codebase

---

## Overview

| | Detail |
|---|---|
| **Type** | Full-Stack Web Application |
| **Frontend** | Next.js 15 (App Router) |
| **Backend** | Node.js + Express REST API |
| **Storage** | JSON files (dev) → PostgreSQL (prod) |
| **Repo** | https://github.com/malul29/edra-architect-website |

---

## Frontend Stack

### Next.js 15 (App Router)
- Server & client components
- File-based routing under `app/`
- API proxy via `next.config.mjs` rewrites (`/api/*` → `localhost:5000/api/*`)
- `next/image` for optimised image rendering
- Dynamic routes: `app/blog/[id]/page.jsx`, `app/project/[id]/page.jsx`

### React 18+
- `"use client"` directive for interactive components
- `React.use(params)` for Next.js 15 async params unwrapping

### GSAP 3
- **IntroAnimation** — word-by-word slogan → logo reveal → logo flies to navbar
- Horizontal drag-scroll on projects strip (homepage)
- Timeline-based sequencing

### TipTap (Rich Text Editor)
- Used in admin dashboard for article creation
- Extensions: StarterKit, Image, Link, Typography, Placeholder, CharacterCount

### Pure CSS + CSS Variables
```css
:root {
  --bg: #1a1a1a;    /* dark background */
  --fg: #f5f5f5;    /* light foreground */
  --sans: 'Archivo', sans-serif;
  --ease: cubic-bezier(0.16,1,0.3,1);
}
```
- No Tailwind, no CSS-in-JS
- `globals.css` (~7,600 lines) — all styles
- CSS Grid + Flexbox layouts
- `clamp()` for fluid responsive typography

### Custom Hooks

#### `useApi.js` — with in-memory cache
```javascript
// Module-level cache — data fetched once per session
const _cache = new Map();
const _pending = new Map(); // deduplicates concurrent requests

export function useApi(endpoint) {
  // Returns cached data instantly on re-mount
  // cache invalidated on POST/PUT/DELETE
}
```

---

## Backend Stack

### Node.js + Express (port 5000)
```
server/
├── index.js           # entry point, cors, body-parser
├── routes/
│   ├── portfolio.js   # /api/portfolio (CRUD + in-memory cache)
│   ├── blogs.js       # /api/blogs    (CRUD + in-memory cache)
│   └── services.js    # /api/services (CRUD)
└── data/
    ├── portfolio.json  # projects data
    ├── blogs.json      # articles data
    └── services.json   # services data
```

### Performance: In-Memory Cache
```javascript
let _cache = null;
function read() {
  if (!_cache) _cache = JSON.parse(fs.readFileSync(DATA, "utf-8"));
  return _cache;
}
function write(data) {
  _cache = data;           // update cache
  fs.writeFileSync(...);   // persist
}
```
- File read only once at server start
- Cache invalidated on every write
- `Cache-Control: public, max-age=30` on GET responses

---

## Project Structure

```
web-edra/
├── client/                        # Next.js 15 app
│   ├── app/
│   │   ├── layout.jsx             # Root layout (BodyWrapper + Header)
│   │   ├── globals.css            # All global styles
│   │   ├── page.jsx               # Home page
│   │   ├── projects/page.jsx      # Projects listing
│   │   ├── project/[id]/page.jsx  # Project detail
│   │   ├── blogs/page.jsx         # Blog listing
│   │   ├── blog/[id]/page.jsx     # Blog article
│   │   ├── about/page.jsx
│   │   ├── services/page.jsx
│   │   ├── contact/page.jsx       # Contact + creative location
│   │   └── admin/
│   │       ├── login/page.jsx
│   │       └── dashboard/page.jsx # Admin CMS
│   ├── components/
│   │   ├── Header.jsx
│   │   ├── Footer.jsx
│   │   ├── IntroAnimation.jsx     # GSAP intro sequence
│   │   ├── BodyWrapper.jsx        # Controls intro state
│   │   ├── Lightbox.jsx
│   │   ├── MediumEditor.jsx       # TipTap article editor
│   │   └── YodezeenButton.jsx
│   ├── hooks/
│   │   └── useApi.js              # Fetch + cache hook
│   ├── public/
│   │   └── edra-logo.png
│   └── next.config.mjs            # API proxy + image domains
│
└── server/                        # Express API
    ├── index.js
    ├── routes/
    └── data/
```

---

## API Endpoints

| Method | Path | Description |
|---|---|---|
| GET | `/api/portfolio` | All projects |
| GET | `/api/portfolio/:id` | Single project |
| POST | `/api/portfolio` | Create project |
| PUT | `/api/portfolio/:id` | Update project |
| DELETE | `/api/portfolio/:id` | Delete project |
| GET | `/api/blogs` | All articles |
| GET | `/api/blogs/:id` | Single article |
| POST/PUT/DELETE | `/api/blogs/:id` | Manage articles |
| GET | `/api/health` | Server status |

---

## Key Features

- ✅ Intro animation (GSAP) — slogan → logo → flies to navbar
- ✅ Projects portfolio with category filter
- ✅ Blog / journal with rich text content
- ✅ Admin dashboard (CMS) with TipTap editor
- ✅ Creative contact page — typographic location display (Jakarta)
- ✅ Responsive design (mobile ↔ desktop)
- ✅ API caching (frontend + backend)
- ✅ Image lightbox viewer

---

## Running Locally

```powershell
# Frontend (port 3000)
cd client && npm run dev

# Backend (port 5000)
cd server && npm run dev
```

Access: `http://localhost:3000`
