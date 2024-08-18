import React from 'react'
import About from './Components/About/About'
import Calc from './Components/Calculator/Calc'
import Contact from './Components/Contact/Contact'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import Testimonials from './Components/Testimonials/Testimonials'

const App = () => {
  return (
    <div>
        <Navbar/>
      <Hero/>
      <About/>
      <Calc/>
      <Testimonials/>
      <Contact/>
    </div>
  )
}

export default App
