import { useState } from 'react'
import './App.css'
import RandomColorGenerator from './components/Random-color-generator'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <RandomColorGenerator />
    </>
  )
}

export default App
