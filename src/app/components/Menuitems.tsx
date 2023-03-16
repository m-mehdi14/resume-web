import Link from 'next/link'
import React from 'react'
import { IoIosClose } from "react-icons/io";
const Menuitems = ({showMenu,active
}:{showMenu :any, active : any}
    ) => {
  return (
    <>
    
     <ul className={active ? ' flex flex-col bg-slate-100  z-20 px-6 py-2 items-center gap-y-2 md:hidden mt-9 font-semibold' : 'hidden'}>
     <IoIosClose onClick={showMenu} className=" text-5xl  cursor-pointer"/>
     
                  <Link href={"/"}><li className=' hover:text-green-500'><a href="">About Me</a></li></Link>
                  <Link href={"/Resume"}><li className=' hover:text-green-500'><a href="">Resume</a></li></Link>  
                  <Link href={"/Portfolio"}><li className=' hover:text-green-500'>Portfolio</li></Link>  
                  <Link href={"/Contact"}><li className=' hover:text-green-500'>Contact</li></Link>  
                  
                </ul>
    </>
  )
}

export default Menuitems