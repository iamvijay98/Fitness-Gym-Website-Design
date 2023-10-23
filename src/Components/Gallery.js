import React from 'react'

import {AiOutlineArrowRight} from "react-icons/ai"

const Gallery = () => {
  return (
    <section id='gallery' className=' min-h-screen w-full grid grid-cols-4 grid-rows-2 gap-7 max-lg:grid-cols-2 max-lg:grid-rows-4 max-lg:gap-4 max-sm:grid-cols-1 max-sm:grid-rows-5 max-sm:gap-x-0'>

      <div className=' group h-screen row-span-2 col-span-2 max-lg:row-span-2 max-lg:h-[49vh] relative bg-gallery-pattern1 after:absolute after:top-0 after:left-[-100%] hover:after:left-0 after:w-full after:h-full after:bg-gradient-to-r from-black bg-cover max-sm:row-span-1 max-sm:col-span-1 '>
        <div className='w-full group-hover:left-[50%] duration-300 absolute top-[50%] left-[-50%] translate-x-[-50%] translate-y-[-50%] text-center z-10'>
          <div className=' bg-[#f04e3c] rounded-full p-4 max-lg:p-2 text-white text-2xl mb-7 max-lg:mb-3 w-fit m-auto cursor-pointer hover:bg-white hover:text-[#f04e3c] duration-300'>
            <AiOutlineArrowRight />
          </div>
          <h1 className=' text-4xl text-white font-medium mb-2'>Best fitness gallery</h1>
          <p className=' font text-xl text-slate-200 '>Fitness Body</p>
        </div>
      </div>

      <div className=' group h-full w-full relative overflow-hidden bg-gallery-pattern2 after:absolute after:top-0 after:left-[-100%] hover:after:left-0 after:w-full after:h-full after:bg-gradient-to-r from-black bg-cover'>
      
        <div className='w-full absolute top-[50%] left-[-50%] opacity-0 group-hover:left-[50%] group-hover:opacity-[1] translate-x-[-50%] translate-y-[-50%] text-center duration-300 z-10 '>
          <div className=' bg-[#f04e3c] max-lg:mb-3 max-lg:p-2 rounded-full p-4 text-white text-2xl mb-7 w-fit m-auto cursor-pointer hover:bg-white hover:text-[#f04e3c] duration-300'>
            <AiOutlineArrowRight />
          </div>
          <h1 className=' text-4xl text-white font-medium mb-2'>Best fitness gallery</h1>
          <p className=' font text-xl text-slate-200 '>Fitness Body</p>
        </div>
      </div>

      <div className='group h-full w-full relative overflow-hidden bg-gallery-pattern3 bg-right after:absolute after:top-0 after:left-[-100%] hover:after:left-0 after:w-full after:h-full after:bg-gradient-to-r from-black bg-cover'>
      
        <div className='w-full absolute top-[50%] left-[-50%] opacity-0 group-hover:left-[50%] group-hover:opacity-[1] translate-x-[-50%] translate-y-[-50%] text-center duration-300 z-10 '>
          <div className=' bg-[#f04e3c] max-lg:mb-3 max-lg:p-2 rounded-full p-4 text-white text-2xl mb-7 w-fit m-auto cursor-pointer hover:bg-white hover:text-[#f04e3c] duration-300'>
            <AiOutlineArrowRight />
          </div>
          <h1 className=' text-4xl text-white font-medium mb-2'>Best fitness gallery</h1>
          <p className=' font text-xl text-slate-200 '>Fitness Body</p>
        </div>
      </div>

      <div className='group  h-full w-full relative overflow-hidden bg-gallery-pattern4 after:absolute after:top-0 after:left-[-100%] hover:after:left-0 after:w-full after:h-full after:bg-gradient-to-r from-black bg-cover'>

        <div className='w-full absolute top-[50%] left-[-50%] opacity-0 group-hover:left-[50%] group-hover:opacity-[1] translate-x-[-50%] translate-y-[-50%] text-center duration-300 z-10 '>
          <div className=' bg-[#f04e3c] max-lg:mb-3 max-lg:p-2 rounded-full p-4 text-white text-2xl mb-7 w-fit m-auto cursor-pointer hover:bg-white hover:text-[#f04e3c] duration-300'>
            <AiOutlineArrowRight />
          </div>
          <h1 className=' text-4xl text-white font-medium mb-2'>Best fitness gallery</h1>
          <p className=' font text-xl text-slate-200 '>Fitness Body</p>
        </div>
      </div>

      <div className='group  h-full w-full relative overflow-hidden bg-gallery-pattern5 after:absolute after:top-0 after:left-[-100%] hover:after:left-0 after:w-full after:h-full after:bg-gradient-to-r from-black bg-cover'>
        
        <div className='w-full absolute top-[50%] left-[-50%] opacity-0 group-hover:left-[50%] group-hover:opacity-[1] translate-x-[-50%] translate-y-[-50%] text-center duration-300 z-10 '>
          <div className=' bg-[#f04e3c] max-lg:mb-3 max-lg:p-2 rounded-full p-4 text-white text-2xl mb-7 w-fit m-auto cursor-pointer hover:bg-white hover:text-[#f04e3c] duration-300'>
            <AiOutlineArrowRight />
          </div>
          <h1 className=' text-4xl text-white font-medium mb-2'>Best fitness gallery</h1>
          <p className=' font text-xl text-slate-200 '>Fitness Body</p>
        </div>
      </div>
    </section>
  )
}

export default Gallery