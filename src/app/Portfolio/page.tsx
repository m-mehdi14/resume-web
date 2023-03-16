import Image from 'next/image'
import React from 'react'
import Wrapper from '../components/Wrapper'

const page = () => {
  return (
    <>
    <section>
        <Wrapper>
            {/* PARENT DIV */}
            <div className=' bg-slate-100'>
                {/* Main heading */}
                <div className=' md:mt-7  small:mt-7 flex justify-center md:border-2 md:bg-slate-50 md:p-12  '>
                    <h2 className=' text-5xl font-bold '>Portfolio</h2> 
                </div>
                {/* MAIN HEADING END */}

                {/* PORTFOLIO SHOWCASE */}
                <div className=' flex flex-col md:flex-row small:mt-20'>
                    {/* First */}
                    <div className=' md:ml-40 md:mt-9'>
                        <Image className=' rounded-2xl shadow-2xl small:px-3 '  src="/1.png" alt="First-website" width={450} height={450} />
                     <a href="https://figma-website-ten.vercel.app/"><button className=' border-1 bg-green-700 text-white rounded-3xl hover:bg-green-500 hover:text-white px-6 py-2 md:mt-9 md:ml-40 md:mb-44 small:mt-5 small:ml-32'>Preview</button></a>   
                    </div>
                    {/* FIRST END */}

                    {/* SECOND */}
                    <div className=' md:ml-20 md:mt-9 small:mt-16'>
                        <Image className=' rounded-2xl shadow-2xl small:px-3 '  src="/2.png" alt="Second-website" width={450} height={450} />
                     <a href="https://tailwind-website-ebon.vercel.app/"><button className=' border-1 bg-green-700 text-white rounded-3xl hover:bg-green-500 hover:text-white px-6 py-2 md:mt-9 md:ml-40 mb-44 small:mt-5 small:ml-32'>Preview</button></a>   
                    </div>
                    </div>
                    {/* PORTFOLIO SHOWCASE END */}
                    
                    {/* PRICING LIST */}

                    {/* PARENT DIV */}
                    <div className=' flex flex-col md:flex-row bg-slate-100 '>
                        {/* TOP HEADING */}
                        
                        <div className='  small:ml-24 md:mt-10 mt-36 ml-5  '>    
                        <h2 className=' text-3xl font-semibold '>Pricing Table</h2>
                        {/* underline */}
                     <div className=' w-28 h-1 bg-slate-100 small:mt-2 mt-1'>
                        <div className=' w-20 h-1 bg-green-600'></div>
                    </div>
                    </div>
                    
                    {/* TOP HEADING END */}

                    {/* List */}
                    <div className=' flex flex-col md:flex-row small:items-center md:gap-x-14'>

                        {/* first */}
                        <div className=' border-2 shadow-2xl bg-white  mt-28 flex flex-col items-center  w-max px-5 py-8 h-max hover:scale-105 hover:transition-all '>
                                <Image className=' justify-center' src={"/calendar.png"} alt={"calendar Picture"} height={50} width={50}/>
                                <h2 className=' text-2xl font-semibold mt-3'>Full-Time Development</h2>
                                <p className=' text-base  mt-3'>I am available for Full Time Projects</p>
                                <p className=' text-2xl font-bold text-green-700 mt-3'>3000$</p>
                                <p className=' text-lg font-semibold mt-3 '>Front-end Development</p>        
                            </div>
                            {/* FIRST END */}

                            {/* Second */}
                            <div className=' border-2 shadow-2xl bg-white flex flex-col items-center  md:mb-40 mt-28  w-max px-5 py-8 h-max hover:scale-105 hover:transition-all '>
                                <Image className=' justify-center' src={"/project.png"} alt={"calendar Picture"} height={50} width={50}/>
                                <h2 className=' text-2xl font-semibold mt-3'>Single Project Development</h2>
                                <p className=' text-base  mt-3'>I am available for Single Projects</p>
                                <p className=' text-2xl font-bold text-green-700 mt-3'>1500$</p>
                                <p className=' text-lg font-semibold mt-3 '>Front-end Development</p>        
                            </div>
                            {/* Second End */}

                            {/* Third */}
                            <div className=' border-2 shadow-2xl bg-white flex flex-col items-center md:mb-40 mt-28  w-max px-5 py-8 h-max hover:scale-105 hover:transition-all '>
                                <Image className=' justify-center' src={"/working-hours.png"} alt={"calendar Picture"} height={50} width={50}/>
                                <h2 className=' text-2xl font-semibold mt-3'>Hourly Work Development</h2>
                                <p className=' text-base  mt-3'>I am available for Hourly Work</p>
                                <p className=' text-2xl font-bold text-green-700 mt-3'>50$</p>
                                <p className=' text-lg font-semibold mt-3 '>Front-end Development</p>        
                            </div>




                    </div>



                    </div>
            </div>
        </Wrapper>
    </section>
    </>
  )
}

export default page