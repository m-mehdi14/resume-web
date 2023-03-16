"use client";
import Image from 'next/image'
import React from 'react'
import Wrapper from './Wrapper'

const Content2 = () => {


  return (
    <>
    <section>
        <Wrapper>
            {/* main div */}
            <div  >
                {/* main heading */}
                <div className=' px-9 md:mt-32 mt-36'>
                    <h2 className=' text-2xl font-bold'>Testimonials</h2>
                     {/* underline */}
                     <div className=' w-28 h-1 bg-slate-100'>
                        <div className=' w-14 h-1 bg-green-600'></div>
                    </div>
                </div>
                {/* ------------------- */}

                {/* first review */}
                <div className=' md:mt-16 mt-28 items-center md:ml-6 md:px-16 flex flex-col md:flex-row md:space-x-5 '  >
                    {/* image div */}
                    <div className='  relative border-2 border-slate-500 w-4/12 h-auto rounded-tl-3xl m-0 md:p-14 py-16 px-4 text-center hover:shadow-xl hover:scale-105 hover:transition-all hover:duration-300 small:flex small:flex-col small:w-60 small:h-max' >
                        <Image className=' absolute -top-10 -left-6 object-cover rounded-full'  src={"/testimonial-1.jpg"} alt={"first picture"} height={100} width={100}/>
                        <p className=' small:text-sm text-slate-500'>{'"'}We had a complex website project that required a lot of customization and attention to detail.
                             Muhammad Mehdi was able to handle it all with ease. They were able to come up with creative solutions to
                              problems we hadn{"'"}t even thought of and were always willing to go the extra mile to make sure the site was perfect.
                               We appreciated their professionalism and ability to meet deadlines. We would definitely work with Muhammad Mehdi
                                again.{'"'}</p>
                                <p className=' text-lg text-slate-600 md:mt-6 mt-3 font-bold'>Billy Adams</p>
                    </div>
                    {/* image div end */}

                    {/* second review */}
                     {/* image div */}
                     <div className='  relative border-2 border-slate-500 w-4/12 h-auto rounded-tl-3xl m-0 md:p-14 py-16 px-4 small:mt-12  text-center hover:shadow-xl hover:scale-105 hover:transition-all hover:duration-300 small:flex small:flex-col small:w-60 small:h-max' >
                        <Image className=' absolute -top-10 -left-6 object-cover rounded-full'  src={"/testimonial-2.jpg"} alt={"second picture"} height={100} width={100}/>
                        <p className='small:text-sm text-slate-500'>{'"'}We hired Muhammad Mehdi to redesign our website and they exceeded our expectations.
                             They were able to create a beautiful design that was both modern and functional. 
                             They also made sure the site was responsive and looked great on all devices. 
                             We were impressed with their knowledge of the latest web technologies and their 
                             ability to implement them in our project. We would definitely recommend Muhammad Mehdi
                              to anyone looking for a skilled front-end developer.{'"'}</p>
                                <p className=' text-lg text-slate-600 md:mt-6 font-bold mt-3'>Gary Johnson</p>
                    </div>
                    
                    {/* third Review */}
                     {/* image div */}
                     <div className='  relative border-2 border-slate-500 w-4/12 h-auto rounded-tl-3xl m-0 p-14 small:mt-12  text-center hover:shadow-xl hover:scale-105 hover:transition-all hover:duration-300 small:flex small:flex-col small:w-60 small:h-max'>
                        <Image className=' absolute -top-10 -left-6 object-cover rounded-full'  src={"/testimonial-3.jpg"} alt={"third picture"} height={100} width={100}/>
                        <p className='small:text-sm text-slate-500'>{'"'}We had a tight deadline for our website project and Muhammad Mehdi was able to deliver on time 
                            without sacrificing quality. They were able to create a user-friendly design that was both visually
                             appealing and easy to navigate. We appreciated their attention to detail and their ability to incorporate
                              our feedback into the design. We would definitely work with Muhammad Mehdi again.{'"'}</p>
                                <p className=' text-lg text-slate-600 md:mt-6 font-bold mt-3'>Daniel Pringle</p>
                    </div>




                </div>
            </div>
        </Wrapper>
    </section>
    </>
  )
}

export default Content2