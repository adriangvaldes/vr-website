import { createStitches } from '@stitches/react';

export const {
  config,
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme,
} = createStitches({
  theme: {
    colors: {
      // background: '#ccbda7',
      background: '#faf4eb',
      background20: '#d4c9bf',
      brown400: '#d5c7ba',
      accent: '#230f04',
      accentDarker: '#1f0e04',
      white: '#fff',
      black: '#050201',
      textBright: '#d7cdbe',
      textGrey: '#c6c0b8',
      spotlight: '#e3573b',
    },
    media: {
      sm: '(min-width: 640px)',
      md: '(min-width: 768px)',
      lg: '(min-width: 1024px)',
    },
  }
})