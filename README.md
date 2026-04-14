# VR Ateliê

Portfolio and catalog website for **VR Ateliê**, a Brazilian artisan workshop specializing in handcrafted wood, fabric, and laser-engraved pieces. The site showcases the brand story, craft techniques, and a live product catalog backed by Firebase.

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 16 (static export) |
| Language | TypeScript |
| Styling | Tailwind CSS v4 + Stitches CSS-in-JS (hybrid) |
| UI Components | shadcn/ui, Radix UI primitives |
| Carousel | Embla Carousel |
| Icons | Lucide React, React Feather |
| Backend | Firebase Firestore + Firebase Storage |
| Hosting | Firebase Hosting |

> **Styling note:** Stitches is used exclusively for the catalog page styled components. All other pages use Tailwind with brand tokens.

---

## Project Structure

```
src/
├── pages/
│   ├── index.tsx        # Home page (Hero, About, Products, Techniques)
│   ├── catalog.tsx      # Product catalog with filters
│   ├── _app.tsx         # App shell: sticky header, mobile nav, footer
│   └── _document.tsx    # Custom HTML document
├── components/
│   └── ui/
│       ├── button.tsx   # shadcn-style Button component
│       └── carousel.tsx # Embla-based Carousel + CarouselDots
├── hooks/
│   └── useInView.ts     # IntersectionObserver hook for scroll animations
├── styles/
│   ├── index.ts         # Stitches theme tokens
│   └── globat.ts        # Global styled components (catalog)
├── database/
│   └── functions/
│       └── products.ts  # Firebase Firestore queries
├── lib/
│   └── utils.ts         # cn() helper (clsx + tailwind-merge)
└── assets/              # Local images (wood, fabric, laser, hero)
```

---

## Pages

### Home (`/`)

Full-page marketing site with four scroll-animated sections:

- **Hero** — Full-viewport cover image with headline and CTA linking to the catalog.
- **About** — Brand mission, vision, and four core values in a responsive card grid. Decorative masked image on large screens.
- **Products** — Three category cards (Tecidos, Marcenaria, Trabalho com Laser) with hover scale effects.
- **Techniques** — Embla Carousel showcasing individual craft techniques (Marchetaria, Inlay) with custom dot navigation.

### Catalog (`/catalog`)

Firebase-backed product grid with sidebar filters:

- Products are fetched from Firestore filtered by **category** and **subcategory**.
- **Filter categories:** Wood (Gourmet utensils, Small furniture, Decorative, Lighting) and Fabric (Bags & Nécessaires, Gourmet, Other utilities).
- Responsive layout: collapsible filter drawer on mobile, sticky sidebar on desktop.
- Loading skeleton and empty state with graceful fallback for missing images.
- Product cards display Firebase Storage images, category badge, name, and BRL price.

---

## Design System

### Brand Palette

| Token | Value | Usage |
|---|---|---|
| `background` | `#faf4eb` (warm cream) | Page backgrounds |
| `accentDarker` | `#1f0e04` (dark brown) | Headers, sidebar, borders |
| `spotlight` | `#e3573b` (orange-red) | CTAs, highlights, active states |
| `spotlight-dark` | `#c9432a` | Hover states on spotlight elements |

### Animations

Four entrance animation classes defined in Tailwind config (0.65s ease-out, `fill-mode: both`):

- `animate-fade-in-up` — slides up from below
- `animate-fade-in` — opacity only
- `animate-fade-in-left` — slides in from the left
- `animate-fade-in-right` — slides in from the right

Use `useInView(threshold)` to trigger them on scroll. For stagger effects, set `style={{ animationDelay: "Xs" }}` inline.

---

## Getting Started

### Prerequisites

- Node.js 18+
- A Firebase project with Firestore and Storage enabled

### Install & Run

```bash
npm install
npm run dev
```

### Build for Firebase Hosting

```bash
npm run build   # outputs static files to /out
firebase deploy
```

The project is configured for static export (`output: 'export'` in `next.config.js`) with unoptimized images, making it fully compatible with Firebase Hosting.

---

## Firebase Setup

Product documents in Firestore are expected to have the following shape:

```ts
{
  id: string;
  name: string;
  price: number;       // BRL
  imageUrl: string;    // Firebase Storage URL
  category: number;    // 1 = Wood, 2 = Fabric, 3 = Laser
  subCategory: number;
}
```
