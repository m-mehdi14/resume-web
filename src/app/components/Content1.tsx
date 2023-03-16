import Image from 'next/image'
import React from 'react'
import Wrapper from './Wrapper'

const Content1 = () => {
  return (
    <>
    <section>
        <Wrapper>
            {/* main div */}
            <div>
                {/* Top heading */}
                <div className=' px-9'>
                    <h2 className=' text-2xl font-bold md:mt-32 mt-24'>What I Do</h2>
                    {/* underline */}
                    <div className=' w-28 h-1 bg-slate-100'>
                        <div className=' w-14 h-1 bg-green-600'></div>
                    </div>
                </div>

                {/* skills description */}
                <div  >

                    
                    <div className=' flex flex-col md:flex-row small:text-center md:space-x-7 md:ml-32 md:mt-14 mt-9' >
                        {/* first */}
                        <div className=' small:ml-40'>
                        <Image src={"/web-design.png"} alt={"coding"} width={50} height={50} />
                        </div>
                        <div>
                        <h4 className=' text-xl font-semibold small:mt-6 small:mr-4'>Web Design</h4>
                        <p className=' mt-3 w-96 text-slate-500 small:text-center small:px-6 small:mt-4'>I believe in creating beautiful{','} user-friendly designs that engage and inspire.
                        I have a strong understanding of typography{','} color theory{','} and layout design principles.
                        I believe that good design is not just about aesthetics{','} but also about creating a positive user experience</p>
                        </div>
                        

                        
                        {/* Second */}
                        <div className='flex flex-col md:flex-row md:space-x-7 small:mt-10'>
                            <div className=' small:ml-40 small:mt-12'>
                            <Image src={"/marketing.png"} alt={"marketing"} width={50} height={50} />
                            </div>
                            <div>
                                <h4 className='text-xl font-semibold small:mt-4 small:mr-4 '>Marketing</h4>
                                <p className='mt-3 w-96 text-slate-500 small:text-center small:px-6 small:mt-3'>I believe that building relationships with customers and fostering brand loyalty is essential for long-term success{'.'}
                                I am constantly learning and experimenting with new marketing techniques to stay ahead of the curve{'.'}</p>
                            </div>
                        </div>
                        
                    </div>
                            {/* second Div */}
                            <div className='flex flex-col md:flex-row md:space-x-7 md:ml-32 md:mt-6 '>


                            {/* Third */}
                            <div className=' flex flex-col md:flex-row md:space-x-7 mt-6'>
                            {/* Image */}
                            <div className=' small:ml-40 small:mt-12'>
                                <Image src={"/programming.png"} alt={""} width={50} height={50}/>
                            </div>
                            {/* content */}
                            <div >
                                <h4 className='text-xl font-semibold small:mt-4 small:ml-32'>Programming</h4>
                                <p className='mt-3 w-96 text-slate-500 small:items-center small:px-6 small:mt-3 small:pl-12'>I have experience with various front-end frameworks and libraries, 
                                including React{','} Nextjs{','} TS{','} JS{','} CSS{','} Tailwind{','}
                                 Node{'.'}js {','} Html {','} Python{'.'} I am skilled at writing clean{','} maintainable, 
                                 and scalable code that adheres to best practices and industry standards{'.'}
                                </p>
                            </div>
                        </div>

                            {/* fourth */}
                            <div className='flex flex-col md:flex-row md:space-x-7 mt-6'>
                                {/* Image */}
                                <div className=' small:mt-12 small:ml-40 '>
                                    <Image src={"/ecommerce.png"} alt={"Ecommerce"} width={50} height={50}/>
                                </div>
                                {/* content */}
                                <div>
                                    <h4 className='text-xl font-semibold small:ml-32 small:mt-2'>Ecommerce</h4>
                                    <p className='mt-3 w-96 text-slate-500 small:text-center small:px-6'>I have experience designing and developing eCommerce websites that provide an exceptional user experience and drive sales{'.'}
                                    I am skilled at creating responsive designs that look great on all devices{','} ensuring a seamless user experience across desktop{','} tablet{','} and mobile{'.'}</p>
                                </div>
                            </div>

                        </div>








                </div>
            </div>
        </Wrapper>
    </section>
    </>
  )
}

export default Content1