import { styled } from "..";
import capa from '../../assets/capa.jpg'
import banner from '../../assets/wood/background2.jpg'
import background2 from '../../assets/wood/marchetariaExample.jpg'

export const HomeContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  width: '100%'
})

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
  background: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${capa.src})`,
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  backgroundSize: '100%',
  backgroundBlendMode: 'darken',
  height: '100vh',
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
  // justifyContent: 'center',
  alignItems: 'center',
  '& h1': {
    fontSize: '3rem',
    letterSpacing: '0.2rem'
  },
  '& p': {
    marginTop: '1rem',
    // textAlign: 'center',
    letterSpacing: '0.2rem',
    lineHeight: '1rem',
    '&:last-of-type': {
      marginBottom: '1rem'
    },
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

export const AboutUsContainer = styled('div', {
  display: 'flex',
  height: '100vh',
  background: '$accentDarker',
  width: '100%',
  // padding: '5rem 2rem',
  margin: '0 auto',
  // alignItems: 'center',
  position: 'relative',
  '& section': {
    display: 'flex',
    gap: '5rem',
    flexDirection: 'row',
    width: '100%',
    // maxWidth: '1200px',
    margin: '0 auto',

  },
  '& div': {
    marginLeft: '25rem',
    maxWidth: '35rem',
    alignSelf: 'center'
  },
  '& h2': {
    color: '$background',
    fontSize: '2rem'
  },
  '& p': {
    marginTop: '1rem',
    color: '$background',
    lineHeight: '1.8rem',
    fontSize: '1rem',
    '& span': {
      fontWeight: 'bold',
      fontSize: '1.1rem'
    }
  }
})

export const ImageContainer = styled('aside', {
  overflow: 'hidden',
  width: '100%',
  WebkitMask: 'linear-gradient(to left, #000, #0000)',
  mask: 'linear-gradient(to left, #000, #0000)',
})

export const Title = styled('h1', {
  color: '$background',
  fontSize: '1.25rem',
  // alignSelf: 'center',
  // margin: '0 auto',
})

export const SectionTitle = styled('div', {
  borderBottom: '3px solid $accentDarker',

  '& h1': {
    fontSize: '1.25rem',
    color: '$accentDarker',
    textAlign: 'center',
    margin: '1rem 0',
    letterSpacing: '1rem',
    // background: 'green',
  },
})

export const ProductsContainer = styled('div', {
  height: '100vh'
})

export const CardsContainer = styled('div', {
  display: 'grid',
  margin: '4rem auto',
  justifyContent: 'center',
  gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
  gridAutoRows: '0.2fr',
  '& img': {
    maxWidth: '100%',
  },
  alignSelf: 'center',
  maxWidth: '1300px',
  gridAutoFlow: 'row',
  justifyItems: 'center',
  padding: '0rem',
  gridGap: '1.5rem',
})

export const ProductsDescription = styled('div', {
  maxWidth: '1000px',
  margin: '0rem auto ',
  marginTop: '5rem',
  marginBottom: '0',
  '& span': {
    color: '$spotlight',
    fontWeight: 'bold',
  }
})

export const TecniqueContainer = styled('div', {
  height: '100vh',
})

export const CardsTecniqueContainer = styled('div', {
  display: 'grid',
  width: '80%',
  margin: '0rem auto',
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
  maxWidth: '25rem',
  maxHeight: '35rem',
  minHeight: '30rem',
  background: '$brown400',
  overflow: 'hidden',
  borderRadius: '10px',
  // padding: '1rem',
  transition: 'all .2s',
  boxShadow: 'rgba(0, 0, 0, 0.15) 0px 3px 3px 0px',
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
    boxShadow: 'rgba(0, 0, 0, 0.1) 0px 20px 25px -5px, rgba(0, 0, 0, 0.04) 0px 10px 10px -5px',
  }
})

export const H1 = styled('h1', {
  variants: {
    fontSizeVariant: {
      small: {
        fontSize: '1rem'
      },
      medium: {
        fontSize: '1rem'
      },
      large: {
        fontSize: '1rem'
      }
    },
  },
})

export const Banner = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  background: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${banner.src})`,
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
    maxWidth: '1100px',
    fontSize: '1.5rem'
  },
})

export const TecniqueCards = styled('div', {
  cursor: 'pointer',
  position: 'relative',
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'column',
  maxWidth: '40rem',
  maxHeight: '200rem',
  overflow: 'hidden',
  minHeight: '32rem',
  background: '$brown400',
  borderRadius: '10px',
  boxShadow: 'rgba(0, 0, 0, 0.15) 0px 3px 3px 0px',
  // padding: '1.5rem',
  transition: 'all .2s',
  '& section': {
    display: 'flex',
    margin: '1rem',
    gap: '1rem'
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
    margin: '1rem 1.5rem 0rem'
  },
  '&:hover': {
    transform: 'scale(1.05)',
    boxShadow: 'rgba(0, 0, 0, 0.1) 0px 20px 25px -5px, rgba(0, 0, 0, 0.04) 0px 10px 10px -5px',
  }
})

export const CardBackgroundImage = styled('div', {
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
  padding: '0 1rem',
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
    marginTop: '1rem',
    '&:hover': {
      backgroundColor: '$spotlight',
      color: '$white',
    }
  }
})