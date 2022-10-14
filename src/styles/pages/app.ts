import { styled } from "..";

export const Container = styled('div', {
  display: "flex",
  flexDirection: 'column',
  alignItems: 'flex-start',
  minHeight: '100vh',
})

export const Header = styled('header', {
  background: '$accent',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '0.3rem 0',
  width: '100%',
  margin: '0 auto',
})

export const Link = styled('a', {
  fontSize: '0.9rem',
  textDecoration: 'none',
  color: '$textGrey',
})

export const HeaderMenu = styled('div', {
  display: 'flex',
  gap: 10,
  marginRight: '2rem',
})