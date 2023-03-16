import Image from 'next/image';
import React from 'react'
import Wrapper from '../components/Wrapper'

const page = () => {
    const row = parseInt("5");
  return (
    <>
    <section>
        <Wrapper>
            {/* Top Heading */}
            <div className=' md:mt-7 small:mt-7 flex justify-center md:border-2 md:bg-slate-50 md:p-12  small:flex-col small:py-3 small:px-2 '>
                    <h2 className=' text-5xl font-bold '>Contact Me</h2>   
                </div>
                {/* TOP  HEADING END */}

                {/* PARENT DIV */}
                <div className='flex flex-col small:items-center md:flex-row gap-x-10 ' >
                    {/* Left Side */}
                    <div className=' md:ml-24 w-1/2 mt-4 '>
                        {/* first name and second name  */}
                        <div className=' flex justify-between small:flex-col gap-x-6'>
                            <div className=' mb-4'>
                                <label className=' text-xl font-normal'>First Name</label>
                                <input className=' border rounded w-full   py-2 px-3  focus:outline-none' type="text" placeholder='Enter Your First Name' />
                            </div>
                            <div className=' mb-4'>
                                <label className=' text-xl font-normal'>Last Name</label>
                                <input className='border rounded w-full  py-2 px-3 focus:outline-none' type="text" placeholder='Enter Your Last Name' />
                            </div>
                            </div>
                        
                        {/* email */}
                        <div className=' mb-4'>
                        <label className=' text-xl font-normal'>Email</label>
                        <input className='border rounded w-full py-2 px-3 focus:outline-none' type="email" placeholder='Enter Your Email Address' />
                        </div>

                        {/* message */}
                        <div>
                            <label className=' text-xl font-normal'>Message</label>
                          <input className='border rounded w-full py-9 px-3 focus:outline-none' type="text" placeholder='Enter Your Message' />
                        </div>

                        {/* button */}
                        <button className=' border bg-green-700 w-full mt-4 rounded-2xl text-white py-2' type="submit">Submit</button>
                         

                    </div>

                    <div className=' mb-14 mt-4 px-2'>
                           {/* right side */}
                           <div>
                            <Image className=' shadow-2xl' src={"/map.png"} alt={"map"} width={500} height={500}/>
                        </div>
                    </div>
                </div>
        </Wrapper>
    </section>
    </>
  )
}

export default page