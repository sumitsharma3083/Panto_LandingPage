import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import HeroSection from './components/HeroSection'
import ChooseUs from './components/ChooseUs'
import Bestselling from './components/Bestselling'


function App() {
  return (
    <>
     <HeroSection/>
     <ChooseUs/>
     <Bestselling/>
    </>
  )
}

export default App
