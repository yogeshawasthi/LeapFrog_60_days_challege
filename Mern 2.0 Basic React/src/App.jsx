import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const name = "Yogesh "

  return (
    <>
        <h1>Yogesh {name}</h1>
        {/* <p>{1+1}</p> */}
    </>
  )
}

export default App

