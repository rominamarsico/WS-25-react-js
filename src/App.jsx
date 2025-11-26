import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Title } from "./components/Title/Title"
import { Card } from "./components/Card/Card"
import { InputWithState } from "./components/Input/InputWithState"
import { InputWithEffect } from "./components/Input/InputWithEffect"
import { GetData } from './components/GetData/GetData'
import { Menu } from './components/Menu/Menu'

function App() {
  const [count, setCount] = useState(1)

  return (
    <>
      <Menu />
      <GetData />

      <Card link="https://react.dev" image={reactLogo} title="React" />
      <Card link="https://vite.dev" image={viteLogo} title="Vite" />

      <InputWithState />
      <InputWithEffect />

      <Title title="hello" />
      <Title title="Hi and welcome"></Title>


      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
