import { styled } from "..";
import heroSectionBackground from '../../assets/heroSectionBackground.jpg'

export const NavContainer = styled('nav', {
  display: 'flex',
  gap: 20,
  padding: '1rem 3rem',
  backgroundImage: `url(${heroSectionBackground.src})`,
  height: '400px',
  width: '100%',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  position: 'relative',
})

export const NavLink = styled('a', {
  fontSize: '0.9rem',
  textDecoration: 'none',
  color: '$white',
  cursor: 'pointer',
})