import Image from 'next/image'
import React from 'react'
import Wrapper from './Wrapper'

const Header = () => {
  return (
    <>
    <section>
        <Wrapper>
            <div className=' flex flex-col md:flex-row  items-center'>
                {/* Left Side Image Section */}
                
                <div className=' md:ml-40 md:mt-6 rounded-full  flex items-center px-8 '>
                    <Image className=' rounded-full border-8 border-opacity-20 shadow-2xl border-slate-500 outline-offset-8 ml-3' src={"/mehdi.jpg"} alt={"Mehdi-Picture"} height={400} width={400}/>
                </div>
                
                {/* Right Side CONTENT SIDE */}
                <div className=' md:space-x-10 mt-5 small:text-center'>
                    <h4 className=' text-xl font-semibold text-slate-400 md:ml-10'>Front-End Developer</h4>
                    <h1 className=' text-5xl font-bold mt-2'>Muhammad Mehdi</h1>
                    <p className=' text-lg text-center w-96 mt-2 ml-2  text-slate-400 px-3 small:mt-6'>Hi there{","} I{"'"}m a front-end developer with an academic background in BSCS. I learned skills in web development. Currently, I{"'"}m focusing on creating front-end websites to polish my skills. 
                        I{"'"}m always eager to learn more about my field and to upgrade my skills.</p>
                        <div className=' md:space-x-5 space-x-2 small:mt-6'>
                            <button className=' border-2 border-green-600 px-3 py-1 rounded-2xl mt-4 hover:bg-green-600 hover:text-white'>Download CV</button>
                        <button className=' border-2 px-6 py-1 hover:bg-slate-300 rounded-2xl mt-1 border-slate-300'>Contact</button>
                        </div>
                        
                </div>
            </div>
        </Wrapper>
    </section>
    </>
  )
}

export default Header 