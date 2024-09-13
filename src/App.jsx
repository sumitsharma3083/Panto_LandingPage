import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import HeroSection from './components/HeroSection'
import ChooseUs from './components/ChooseUs'
import Bestselling from './components/Bestselling'
import BestExperience from './components/BestExperience'
import BestMaterial from './components/BestMaterial'
import ClientReview from './components/ClientReview'


function App() {
  return (
    <>
     <HeroSection/>
     <ChooseUs/>
     <Bestselling/>
     <BestExperience/>
     <BestMaterial/>
     <ClientReview/>
    </>
  )
}

export default App
