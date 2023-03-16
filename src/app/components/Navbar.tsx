"use client";
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import { IoIosMenu } from 'react-icons/io'
import Menuitems from './Menuitems';
import Wrapper from './Wrapper'

const Navbar = () => {
  const [active,setActive] = useState(false);

  const showMenu =()=>{
    setActive(!active)
  }
  return (
    <header>
        <Wrapper>
            {/* Main div */}
            <div className=' flex items-center justify-between sticky top-0 px-8 py-8'>
                {/* Logo */}
                <div className=' flex items-center  '>
                <svg width="40" height="40" viewBox="0 0 332 309" fill="none" xmlns="http://www.w3.org/2000/svg">
                <ellipse cx="166" cy="154.5" rx="166" ry="154.5" fill="#1DBC2D"/>
                <path d="M86.642 81.5455H124.568L164.625 179.273H166.33L206.386 81.5455H244.312V227H214.483V132.327H213.276L175.634 226.29H155.321L117.679 131.972H116.472V227H86.642V81.5455Z" fill="#FFF7F7"/>
                </svg>
                <h5 className=' text-2xl font-semibold'>M.Mehdi</h5>
                </div>

                {/* Navbar */}
                <div className="absolute right-6 md:hidden top-10 scale-150">
          <IoIosMenu onClick={showMenu} className=" scale-150 cursor-pointer"/>
        </div>
                <ul className='hidden md:flex  space-x-9 mr-8 font-semibold text-slate-400 '>
                  <Link href={"/"}><li className=' hover:text-black'><a href="">About Me</a></li></Link>
                  <Link href={"/Resume"}><li className=' hover:text-black'><a href="">Resume</a></li></Link>  
                  <Link href={"/Portfolio"}><li className=' hover:text-black'>Portfolio</li></Link>  
                  <Link href={"/Contact"}><li className=' hover:text-black'>Contact</li></Link>  
                  
                </ul>
                <Menuitems showMenu={showMenu} active={active}/>

            </div>
        </Wrapper>
    </header>
  )
}

export default Navbar