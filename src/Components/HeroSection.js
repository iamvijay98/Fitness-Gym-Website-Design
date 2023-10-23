import React from 'react'
import { motion } from 'framer-motion'


const HeroSection = () => {
  
  return (
    <section id='home' className=' w-screen min-h-screen bg-hero-pattern bg-cover bg-fixed bg-left max-sm:bg-center max-lg:bg-center'>
      <motion.div 
      initial={{x:-500, opacity:0}}
      animate={{x:0,opacity:1}}
      transition={{
        duration:1,
        repeatDelay:10,
        repeat:Infinity
      }}
      className=' min-h-screen max-container font-semibold flex justify-center items-start flex-col padding-x overflow-x-hidden'>
        <p className=' text-[#f04e3c] relative before:absolute before:w-20 before:h-1 before:bg-[#f04e3c] before:top-[50%] before:left-0 pl-24 text-2xl before:translate-y-[-50%] max-sm:text-xl max-sm:before:w-14 max-sm:pl-20'>WITH PATRICK POTTER</p>
        <div className=' my-12 text-8xl max-lg:text-7xl text-white max-w-[60%] max-xl:max-w-[70%] max-lg:max-w-[80%] max-md:max-w-[100%] max-sm:text-3xl'>
          <h1>BUILD PERFECT BODY SHAPE FOR GOOD AND HEALTHY LIFE.</h1>
        </div>

        <button className=' py-4 px-7 text-xl group relative text-white bg-[orangered] rounded-sm'>
          <div className=' buttonDiv'></div>
          <span className='buttonSpan'>BECOME A MEMBER</span>
        </button>
      </motion.div>
    </section>
  )
}

export default HeroSection