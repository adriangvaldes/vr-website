import { styled } from "../styles"

const Button = styled('button', {
  backgroundColor: '$background',
  color: '$accent',
  borderRadius: 4,
  padding: '4px 6px',
  border: 'none',

  '&:hover': {
    filter: 'brightness(0.8)',
  }
})

export default function Home() {
  return (
    <Button>Hellow World</Button>
  )
}
