import { useState } from 'react'
import './App.css'
import RandomColorGenerator from './components/Random-color-generator'
import StarRating from './components/Star-rating'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>

      <StarRating noOfStars={10}/>
    </>
  )
}

export default App
