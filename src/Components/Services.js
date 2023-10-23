import React from 'react'
import { services } from '../Data/Data'


const Services = () => {
  return (
    <section id='services' className=' w-full min-h-screen bg-service-pattern bg-cover bg-fixed max-lg:bg-center max-sm:bg-center'>
      <div className=' max-container padding-hero-y padding-x'>
        <div className='flex justify-between items-end mb-28 max-lg:flex-col max-lg:items-start max-lg:gap-5 max-sm:mb-20'>
          <div>
            <p className=' text-[#f04e3c] relative before:absolute before:w-20 before:h-1 before:bg-[#f04e3c] before:top-[50%] before:left-0 pl-24 text-2xl before:translate-y-[-50%]'>OUR SERVICES FOR YOU</p>
            <div className=' text-6xl text-white mt-8 leading-[60px] max-w-[65%] font-semibold max-xl:text-4xl max-lg:text-5xl max-lg:leading-[60px] max-lg:max-w-[100%] max-sm:text-3xl'>
              <h1>PUSH YOUR LIMITS FORWARD WE OFFER TO YOU</h1>
            </div>
          </div>

          <div>
            <button className=' py-4 px-9 text-xl group relative text-white bg-[orangered] rounded-sm'>
              <div className=' buttonDiv'></div>
              <span className='buttonSpan'>MORE SERVICES</span>
            </button>
          </div>
        </div>


        <div className=' grid grid-cols-3 cursor-pointer gap-10 place-items-center overflow-hidden max-lg:grid-cols-2 max-sm:grid-cols-1'>
          {services.map((val)=>(
            <div key={val.label} className=' relative group bg-white min-h-[350px] pt-20 pb-9 text-center flex flex-col items-center justify-center max-xl:pt-16'>
              <div>
                <p className=' group-hover:text-[#f04e3c] flex justify-center mb-10 text-5xl'>{val.icon}</p>
                <p className=' text-2xl mb-5'>{val.label}</p>
                <p className='px-12 font text-lg pb-16 max-xl:px-5'>
                  {val.desc}
                </p>
              </div>
              <button className=' absolute -bottom-16 opacity-0 group-hover:bottom-0 group-hover:opacity-[1] duration-300 left-0 w-full flex justify-center items-center gap-3 py-5 bg-[orangered] text-white text-lg text-center'>
                {val.btnDec}{val.btnIcon}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services