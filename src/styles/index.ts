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
      brown400: '#d5c7ba',
      accent: '#230f04',
      accentDarker: '#1f0e04',
      white: '#fff',
      black: '#050201',
      textBright: '#d7cdbe',
      textGrey: '#c6c0b8',
      spotlight: '#e3573b',
    }
  }
})