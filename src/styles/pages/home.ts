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
  width: '88%',
  margin: '0 auto',
  maxWidth: '1920px',
  justifyContent: 'center',
  gridTemplateColumns: '1fr 1fr 1fr',
  gridAutoFlow: 'row',
  justifyItems: 'center',
  padding: '5rem',
  gridGap: '1.2rem',
})
export const CardsTecniqueContainer = styled('div', {
  display: 'grid',
  width: '80%',
  margin: '0 auto',
  maxWidth: '1920px',
  justifyContent: 'center',
  gridTemplateColumns: '1fr 1fr',
  gridAutoFlow: 'row',
  justifyItems: 'center',
  padding: '5rem',
  gridGap: '1rem',
})

export const Card = styled('div', {
  cursor: 'pointer',
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'column',
  width: '30.25rem',
  height: '35rem',
  background: '$brown400',
  padding: '1.5rem',
  boxShadow: 'rgba(149, 157, 165, 0.2) 0px 8px 24px',
  transition: 'transform .2s',
  '& h1': {
    alignSelf: 'flex-start',
    marginTop: '1.5rem',
    fontSize: '1.5rem',
  },
  '& p': {
    marginTop: '1rem'
  },
  '&:hover': {
    transform: 'scale(1.05)'
  }
})

export const ImageCard = styled('img', {
  width: '28rem',
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
  height: '350px',
  width: '100%',
  maxWidth: '1920px',
  margin: '0 auto',
  padding: '5rem 30rem',
  '& h1': {
    color: '$white',
    letterSpacing: '0.1rem',
    textAlign: 'center',
  }
})

export const TecniqueCards = styled('div', {
  cursor: 'pointer',
  position: 'relative',
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'column',
  width: '40rem',
  height: '35rem',
  background: '$brown400',
  // padding: '1.5rem',
  boxShadow: 'rgba(149, 157, 165, 0.2) 0px 8px 24px',
  transition: 'transform .2s',
  '& section': {
    display: 'grid',
    gridTemplateColumns: '35% 65%',
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
    margin: '1rem 1.5rem'
  },
  '&:hover': {
    transform: 'scale(1.05)'
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
  width: '600px',
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