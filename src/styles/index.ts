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
      background: '#fbeedb',
      accent: '#230f04',
      white: '#fff',
      textBright: '#d7cdbe',
      textGrey: '#c6c0b8'
    }
  }
})