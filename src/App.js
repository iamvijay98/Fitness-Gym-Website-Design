import React, { useState } from 'react'
import Nav from './Components/Nav'
import About from './Components/About'
import Services from './Components/Services'
import Client from './Components/Client'
import Gallery from './Components/Gallery'
import TeamMembers from './Components/TeamMembers'
import Offer from './Components/Offer'
import TimeSchedule from './Components/TimeSchedule'
import Contact from './Components/Contact'
import Blog from './Components/Blog'
import Footer from './Components/Footer'
import HeroSection from './Components/HeroSection'

const App = () => {

  
  const [nav,setNav] = useState(false)

  window.addEventListener("scroll",()=>{
    const scroll = document.documentElement.scrollTop
    if(scroll > 405){
      setNav(true)
    }
    else{
      setNav(false)
    }
   })

  return (
    <div className='App'>
        <Nav nav={nav}/>
        <HeroSection />
        <About />
        <Services />
        <Client />
        <Gallery />
        <TeamMembers />
        <Offer />
        <TimeSchedule />
        <Contact />
        <Blog />
        <Footer nav={nav}/>
    </div>
  )
}

export default App