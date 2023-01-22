import { styled } from "..";

export const CatalogHeader = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '100%',
  minHeight: '300px',
  backgroundColor: '$accentDarker',
  '& h1': {
    fontSize: '4rem',
    color: '$background',
    fontWeight: '400',
  }
})

export const CatalogContainer = styled('div', {
  display: 'grid',
  gridTemplateColumns: '17% 83%',
  alignItems: 'center',
  justifyContent: 'center',
  width: '100%',
})
export const CatalogSideBar = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  backgroundColor: '$background',
  borderRight: '2px solid $accentDarker',
  alignItems: 'flex-start',
  justifyContent: 'flex-start',
  height: '100%',
})
export const SideBarItemTitle = styled('div', {
  cursor: 'pointer',
  // borderTop: '1px solid $background',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  width: '100%',
  height: '4rem',
  color: '$background',
  padding: '0 1rem',
  fontWeight: 'bold',
  backgroundColor: '$accentDarker',
})
export const SideBarItem = styled('div', {
  cursor: 'pointer',
  // borderTop: '1px solid $background',
  padding: '0 1rem',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-start',
  width: '100%',
  height: '2rem',
  color: '$accent'
})
export const CatalogContentContainer = styled('div', {
  display: 'grid',
  gridTemplateColumns: '300px 300px 300px 300px 300px',
  gap: '1rem',
  alignItems: 'center',
  justifyContent: 'center',
  width: '100%',
  padding: '2rem 0',
  // height: '500px',
})
export const CardItem = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  // height: '600px',
  alignItems: 'flex-start',
  // justifyContent: 'center',
  border: '1px solid $accentDarker',
  // padding: '1rem',
  '& div': {
    position: 'relative',
    width: '100%',
    height: '400px',
    borderBottom: '1px solid $accentDarker'
  },
  '& main': {
    width: '100%',
    display: 'flex',
    gap: '2rem',
    flexDirection: 'column',
    padding: '1rem'
  },
  '& section:last-child': {
    alignSelf: 'flex-end',
  },
})
