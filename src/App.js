import React, { useState } from 'react'
import Nav from './Components/Nav'
import Footer from './Components/Footer'
import HeroSection from './Components/HeroSection'
import Contact from './Components/Contact'
import Client from './Components/Client'
import Services from './Components/Services'
import Testimonals from './Components/Testimonals';
import CarouselExample from './Components/CarouselExample';

const App = () => {
  const [nav, setNav] = useState(false)
  window.addEventListener("scroll", () => {
    const scroll = document.documentElement.scrollTop
    if (scroll > 305) {
      setNav(true)
    }
    else {
      setNav(false)
    }
  })

  return (
    <div className='App p-2'>
      <Nav nav={nav} />
      <CarouselExample />
      <HeroSection />
      <Client />
      <Services />
      <Testimonals />
      <Contact />
      <Footer nav={nav} />
    </div>
  )
}

export default App