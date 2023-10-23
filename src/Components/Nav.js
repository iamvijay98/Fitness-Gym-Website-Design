import React, { useState } from 'react'
import logo from "../assets/logo-2.png"
import { navLinks } from '../Data/Data'
import {FiMenu} from "react-icons/fi"
import {IoClose} from "react-icons/io5"

const Nav = ({nav}) => {

  const [openNav,setOpenNav] = useState(false)

  return (
    <header className={`w-full ${nav ? "fixed bg-black duration-300 top-0 left-0 z-30" : "absolute"}`}>
      <nav className='max-w-[1540px] m-auto py-6 px-6 max-lg:px-12 flex justify-between items-center gap-14 max-xl:gap-5 max-sm:py-4 max-sm:px-6'>
        <a href="#home" className=' font-semibold text-5xl flex justify-center items-center text-white gap-1'>
          <img src={logo} alt="logo" width={60} height={60}/>
          FITNESS
        </a>

        <ul className=' flex flex-1 justify-end gap-10 max-xl:gap-7 max-lg:flex-col max-lg:bg-stone-700 max-lg:text-white max-lg:pt-10 max-lg:pb-3 max-lg:px-4 max-lg:gap-4 max-lg:absolute max-lg: max-lg:top-24 max-lg:left-[5%] max-lg:w-[90%] max-lg:z-20 max-sm:top-20'>
          {navLinks.map((val)=>(
            <li key={val.label} className={`text-white font-medium hover:text-red-500 text-xl max-lg:text-lg ${openNav ? "max-lg:block" : "max-lg:hidden"}`}><a href={val.href}>{val.label}</a></li>
          ))}

        <div className={`absolute right-[20px] translate-y-[-50%] text-2xl cursor-pointer ${openNav ? 'top-[25px] right-[20px] translate-y-[-50%]' : 'top-[25px]'}`} onClick={()=>setOpenNav(!openNav)}>
          {openNav ? <IoClose /> :  <FiMenu />}
        </div>
        </ul>

        <button className=' py-4 px-7 text-xl group relative text-white bg-[orangered] rounded-sm max-lg:hidden'>
          <div className=' buttonDiv'></div>
          <span className='buttonSpan'>BECOME A MEMBER</span>
        </button>
      </nav>
    </header>
  )
}

export default Nav