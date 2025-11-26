import { Card } from "../components/Card/Card"
import reactLogo from '../assets/react.svg'
import viteLogo from '/vite.svg'

export function ShowCard() {
  return (
    <>
      <Card link="https://react.dev" image={reactLogo} title="React" />
      <Card link="https://vite.dev" image={viteLogo} title="Vite" />
    </>

  )
}