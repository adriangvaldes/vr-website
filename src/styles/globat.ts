import { globalCss } from ".";

export const globalStyles = globalCss({
  '*': {
    margin: 0,
    padding: 0,
    boxSizing: 'border-box',
    scrollBehavior: 'smooth',
  },

  body: {
    backgroundColor: '$background',
    color: '$accent',
    '-webkit-font-smoothing': 'antialised',
  },

  'body, input, textarea, button': {
    fontFamily: 'Poppins',
    fontWeight: 400,
  }
})