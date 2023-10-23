import React from 'react'
import { blog } from '../Data/Data'

const Blog = () => {
  return (
    <section id='blog' className=' w-full'>
      <div className=' max-container padding-hero-y padding-x'>
        <p className=' text-[#f04e3c] relative before:absolute before:w-20 before:h-1 before:bg-[#f04e3c] before:top-[50%] before:left-0 pl-24 text-2xl before:translate-y-[-50%] text-center w-fit m-auto max-sm:before:w-16 max-sm:pl-20'>RECENT NEWS FORM BLOG</p>

        <div className='text-6xl font-semibold leading-[70px] mt-5 mb-20 text-center max-lg:text-5xl max-lg:leading-[50px] max-sm:text-3xl'>
          <h1>GYM TIPS NEWS FOR YOU</h1>
          <h1>THAT SELECTED BY US</h1>
        </div>

        <div className='grid grid-cols-2 gap-10 max-md:grid-cols-1'>
          {blog.map((val)=>(
            <div key={val.img} className='group'>
              <div className=' flex justify-center items-center relative overflow-hidden '>
                 <img src={val.img} alt="blogImg" className=' duration-500 group-hover:scale-105 w-full object-cover'/>
                 <p className='absolute bottom-0 left-0 text-2xl bg-[red] text-white p-6 max-lg:p-4'>{val.date} Nov</p>
              </div>
    
              <div className=' p-8 max-lg:p-5'>
                <p className=' text-slate-500 mb-4 relative before:absolute before:w-14 before:h-[2px] font before:bg-slate-600 before:top-[50%] before:left-0 pl-20 before:translate-y-[-50%] text-center w-fit'>{val.role}</p>
                <p className=' cursor-pointer hover:text-[red] font text-2xl font-bold w-[70%] max-lg:w-[100%] max-lg:text-lg'>
                  {val.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Blog