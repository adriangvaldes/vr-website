import { styled } from "..";
import heroSectionBackground from '../../assets/heroSectionBackground.jpg'
import background2 from '../../assets/wood/background2.jpg'

export const NavContainer = styled('nav', {
  display: 'flex',
  gap: 20,
  justifyContent: 'flex-end',
  padding: '1rem 3rem',
  overflowXX: 'hidden',
  backgroundSize: 'cover',
  position: 'relative',
})

export const NavLink = styled('a', {
  fontSize: '0.9rem',
  textDecoration: 'none',
  color: '$white',
  cursor: 'pointer',
})

export const HeroContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  background: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${heroSectionBackground.src})`,
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  backgroundBlendMode: 'darken',
  height: '500px',
  width: '100%',
  maxWidth: '1920px',
  margin: '0 auto'
})

export const HeroDescription = styled('section', {
  color: '$white',
  maxWidth: '800px',
  margin: 'auto',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  '& h1': {
    fontSize: '3rem',
    textAlign: 'center',
    letterSpacing: '0.2rem'
  },
  '& p': {
    margin: '1rem',
    textAlign: 'center',
    letterSpacing: '0.2rem'
  },
  '& button': {
    marginTop: '1rem',
    border: '1px solid $white',
    background: 'transparent',
    padding: '0.6rem 1rem',
    transition: 'all 0.2s',
    cursor: 'pointer',
    color: '$white',
    '&:hover': {
      background: '$white',
      color: '$black'
    },
  },
})

export const CardsContainer = styled('div', {
  display: 'grid',
  margin: '5rem auto',
  justifyContent: 'center',
  gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
  gridAutoRows: '0.2fr',
  '& img': {
    maxWidth: '100%',
  },
  maxWidth: '80vw',
  gridAutoFlow: 'row',
  justifyItems: 'center',
  padding: '0rem',
  gridGap: '1.5rem',
})

export const CardsTecniqueContainer = styled('div', {
  display: 'grid',
  width: '80%',
  margin: '0 auto',
  maxWidth: '1400px',
  justifyContent: 'center',
  gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
  gridAutoRows: '0.2fr',
  '& img': {
    maxWidth: '100%',
    objectFit: 'contain',
  },
  gridAutoFlow: 'row',
  justifyItems: 'center',
  padding: '5rem 0rem',
  gridGap: '1rem',
})

export const Card = styled('div', {
  cursor: 'pointer',
  display: 'flex',
  alignItems: 'flex-start',
  justifyContent: 'flex-start',
  flexDirection: 'column',
  maxWidth: '30.25rem',
  maxHeight: '35rem',
  background: '$brown400',
  // padding: '1rem',
  transition: 'all .2s',
  boxShadow: 'rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px',
  '& img': {
    objectFit: 'cover',
    maxHeight: '300px',
  },
  '& h1': {
    alignSelf: 'flex-start',
    margin: '2rem 1.5rem 0rem',
    fontSize: '1.5rem',
  },
  '& p': {
    margin: '1rem 1.5rem 2rem'
  },
  '&:hover': {
    transform: 'scale(1.05)',
    boxShadow: 'rgba(17, 12, 46, 0.15) 0px 48px 100px 0px',
  }
})

export const Banner = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  background: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${background2.src})`,
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  backgroundBlendMode: 'darken',
  maxHeight: '300px',
  width: '100%',
  maxWidth: '1920px',
  margin: '0 auto',
  overflow: 'hidden',
  padding: '5rem 0',
  '& h1': {
    color: '$white',
    letterSpacing: '0.1rem',
    textAlign: 'center',
    margin: '0 2rem',
    fontSize: '1.5rem',
    maxWidth: '1100px',
  },
  '@bp1': {
    fontSize: '1.5rem',
    background: 'green'
  },
})

export const TecniqueCards = styled('div', {
  cursor: 'pointer',
  position: 'relative',
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'column',
  maxWidth: '40rem',
  maxHeight: '100rem',
  background: '$brown400',
  boxShadow: 'rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px',
  // padding: '1.5rem',
  transition: 'all .2s',
  '& section': {
    display: 'flex',
    // gridTemplateColumns: '35% 65%',
  },
  '& span': {
    position: 'absolute',
    fontWeight: 'bold',
    letterSpacing: '0.2rem',
    backgroundColor: '$spotlight',
    color: '$white',
    padding: '0.5rem 1rem',
    fontSize: '1.2rem',
    left: 0,
    top: 30,
  },
  '& h1': {
    alignSelf: 'flex-start',
    margin: '1.5rem',
    fontSize: '1.5rem',
  },
  '& p': {
    margin: '1rem 1.5rem 2rem'
  },
  '&:hover': {
    transform: 'scale(1.05)',
    boxShadow: 'rgba(17, 12, 46, 0.15) 0px 48px 100px 0px',
  }
})

export const CardBackgroundImage = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  overflow: 'hidden',
  alignItems: 'center',
  background: `url(${background2.src})`,
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  // backgroundBlendMode: 'darken',
  height: '250px',
  width: '100%',
  margin: '0 auto',
  '& h1': {
    color: '$white',
    letterSpacing: '0.1rem',
    textAlign: 'center',
  }
})

export const BottonDiv = styled('div', {
  margin: '1rem auto 5rem',
  display: 'flex',
  flexDirection: 'column',
  gap: '1rem',
  alignItems: 'center',
  justifyContent: 'center',
  maxWidth: '600px',
  '& h1': {
    textAlign: 'center',
    letterSpacing: '0.1rem',
  },
  '& button': {
    padding: '0.8rem 3rem',
    border: '2px solid #e3573b',
    backgroundColor: 'transparent',
    color: '#e3573b',
    fontWeight: 'bold',
    transition: 'all 0.2s',
    cursor: 'pointer',
    '&:hover': {
      backgroundColor: '$spotlight',
      color: '$white',
    }
  }
})