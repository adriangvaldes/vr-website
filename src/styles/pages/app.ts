import { styled } from "..";

export const Container = styled('div', {
  display: "flex",
  flexDirection: 'column',
  alignItems: 'flex-start',
  minHeight: '100vh',
})

export const Header = styled('header', {
  background: '$accentDarker',
  width: '100%',
  minHeight: '3rem',
  maxWidth: '100%',
})

export const Link = styled('a', {
  fontSize: '0.9rem',
  textDecoration: 'none',
  color: '$textGrey',
  transition: 'all 0.5s',
  transitionProperty: 'background-color, color, width, height, opacity, transform, border, padding, box-shadow',
  WebkitBoxSizing: 'border-box ',
  MozBoxSizing: 'border-box',
  boxSizing: 'border-box',
  '&:hover': {
    color: '$white',
    borderBottom: '1px solid $spotlight',
    marginBottom: -1,
  },
})

export const HeaderContainer = styled('div', {
  maxWidth: '1440px',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '0.5rem 1rem',
  margin: '0 auto',
})

export const HeaderMenu = styled('div', {
  display: 'flex',
  gap: 10,
  marginRight: '2rem',
  webkitBoxSizing: 'border-box', /* Safari/Chrome, other WebKit */
  mozBoxSizing: 'border-box',    /* Firefox, other Gecko */
  boxSizing: 'border-box',         /* Opera/IE 8+ */
})

export const FooterContainer = styled('footer', {
  background: '$accentDarker',
  width: '100%',
})

export const Footer = styled('div', {
  maxWidth: '1440px',
  display: 'flex',
  minHeight: '6rem',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '0.5rem',
  margin: '0 auto',
  '& section': {
    display: 'flex',
    alignItems: 'center',
    gap: '1rem',
  },
  '& p': {
    color: '$textGrey',
  },
})