/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#faf4eb',
        background20: '#d4c9bf',
        accent: '#230f04',
        accentDarker: '#1f0e04',
        white: '#f0f0f0',
        black: '#050201',
        textBright: '#d7cdbe',
        textGrey: '#c6c0b8',
        spotlight: '#e3573b',
      }
    },
  },
  plugins: [],
}

