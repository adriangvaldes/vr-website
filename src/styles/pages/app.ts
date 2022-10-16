import { styled } from "..";

export const Container = styled('div', {
  display: "flex",
  flexDirection: 'column',
  alignItems: 'flex-start',
  minHeight: '100vh',
})

export const Header = styled('header', {
  background: '$accent',
  width: '100%',
})

export const Link = styled('a', {
  fontSize: '0.9rem',
  textDecoration: 'none',
  color: '$textGrey',
  transition: 'all 0.2s',
  WebkitBoxSizing: 'border-box ',
  MozBoxSizing: 'border-box',
  boxSizing: 'border-box',
  '&:hover': {
    color: '$white',
    borderBottom: '1px solid $spotlight'
  },
})

export const HeaderContainer = styled('div', {
  maxWidth: '1920px',
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
})

export const FooterContainer = styled('footer', {
  background: '$accentDarker',
  width: '100%',
})

export const Footer = styled('div', {
  maxWidth: '1920px',
  display: 'flex',
  height: '6rem',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '0.5rem 10rem',
  margin: '0 auto',
  '& section': {
    display: 'flex',
    alignItems: 'center',
  },
  '& p': {
    color: '$textGrey',
  },
})