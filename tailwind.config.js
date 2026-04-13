/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "1.5rem",
        lg: "2rem",
      },
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        // ── Brand Design System ──────────────────────────────────────
        // Single source of truth for the brand palette.
        // These map to the CSS variables defined in global.css.
        background:       "#faf4eb",   // warm cream — page background
        accentDarker:     "#1f0e04",   // primary dark brown — header, footer, borders
        spotlight:        "#e3573b",   // orange-red — highlights, CTAs
        "spotlight-dark": "#c9432a",   // spotlight hover variant
        textBright:       "#d7cdbe",   // light warm text on dark backgrounds
        textGrey:         "#c6c0b8",   // muted warm text on dark backgrounds

        // ── shadcn/ui — CSS-variable driven ──────────────────────────
        // Aligned to the brand palette via :root variables in global.css.
        border:     "hsl(var(--border))",
        input:      "hsl(var(--input))",
        ring:       "hsl(var(--ring))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT:    "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT:    "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT:    "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT:    "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT:    "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT:    "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT:    "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to:   { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to:   { height: "0" },
        },
        // ── Entrance animations ──────────────────────────────────────
        "fade-in-up": {
          "0%":   { opacity: "0", transform: "translateY(32px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "fade-in": {
          "0%":   { opacity: "0" },
          "100%": { opacity: "1" },
        },
        "fade-in-left": {
          "0%":   { opacity: "0", transform: "translateX(-32px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        "fade-in-right": {
          "0%":   { opacity: "0", transform: "translateX(32px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
      },
      animation: {
        "accordion-down":  "accordion-down 0.2s ease-out",
        "accordion-up":    "accordion-up 0.2s ease-out",
        "fade-in-up":      "fade-in-up 0.65s ease-out both",
        "fade-in":         "fade-in 0.65s ease-out both",
        "fade-in-left":    "fade-in-left 0.65s ease-out both",
        "fade-in-right":   "fade-in-right 0.65s ease-out both",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
