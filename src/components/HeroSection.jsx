import React from 'react'
import Navigation from '../components/Navigation'
import Classes from './HeroSection.module.css'
import HeroContent from './HeroContent'

const HeroSection = () => {
  return (
     <div className={Classes.heroContainer}>
      <Navigation/>
      <HeroContent/>
     </div>
  )
}

export default HeroSection