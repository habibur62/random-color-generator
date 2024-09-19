import { useState } from 'react'
import './App.css'
import RandomColorGenerator from './components/Random-color-generator'
import StarRating from './components/Star-rating'
import ImageSlider from './components/ImageSlider'
import LoadMoreData from './components/load-more-data'
import QrCodeGenerator from './components/QrCodeGenerator'
import LightDarkMode from './components/LightDarkMode'
import ScrollIndicator from './components/ScrollIndicator'
import CustomTabs from './components/DinamicTabs/tabTest'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
          <ScrollIndicator />

      <RandomColorGenerator />
      <StarRating noOfStars={10}/>
      <ImageSlider  url ={"https://picsum.photos/v2/list"} limit={"10"} />
      <LoadMoreData />
      <QrCodeGenerator />
      <LightDarkMode />
      <CustomTabs />
    </>
  )
}

export default App
