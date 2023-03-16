import React from 'react'
import Wrapper from '../components/Wrapper'

const page = () => {
  return (
    <>
    <section>
        <Wrapper>
            {/* main Div */}
            <div>
                {/* Main heading */}
                <div className=' md:mt-7 small:mt-7 flex justify-between items-center md:border-2 md:bg-slate-50 md:p-12  small:flex-col small:py-3 small:px-2 '>
                    <h2 className=' text-5xl font-bold '>Resume</h2>
                    <p className=' text-lg md:px-10 font-semibold small:mt-2 '>8 Years of Experience</p>
                    
                </div>
                {/* Main heading End */}

                {/* Work Experience */}
                <div>
                    {/* Top Heading */}
                    <div className=' flex justify-center mt-8 small:mt-10'>
                        <h3 className=' text-4xl font-bold'>Experience</h3>
                       
                    </div>
                </div>

                {/* Experience Points */}
                {/* Main Container */}
                <div className=' flex flex-col md:flex-row  justify-evenly md:mt-14 flex-wrap small:items-center'>
                {/* first */}
                <div className=' border-2 bg-gray-100 w-96 small:w-80 px-5 py-2 md:ml-8 small:mt-8 small:ml-2 shadow-2xl hover:scale-105'>
                    <h3 className=' text-xl font-semibold'>Internship at Developer Agency</h3>
                    <p className=' text-base font-bold mt-1 text-green-700'>2016-2017</p>
                    <p className=' text-sm mt-2'>Worked on various web development projects for clients{','}
                         including creating responsive designs{','} 
                         optimizing websites for search engines{','}
                         and implementing various web technologies. 
                         Assisted senior developers in coding and testing
                         </p>
                          </div>



                {/* Second */}
                <div className='border-2 bg-gray-100 w-96 small:w-80 px-5 py-2 md:ml-8 small:mt-8 small:ml-2 shadow-2xl hover:scale-105'>
                    <h3 className=' text-xl font-semibold'>Junior Web Developer</h3>
                    <p className=' text-base font-bold mt-1 text-green-700'>2017-2018</p>
                    <p className=' text-sm mt-2'>Developed and maintained web applications using HTML{','} CSS{','} JavaScript{','}
                     and various front-end frameworks.
                     Assisted senior developers in testing{','} debugging{','} and troubleshooting code.
                         </p>
                          </div>

                
                {/* third */}
                <div className='border-2 bg-gray-100 w-96 small:w-80 px-5 py-2 md:ml-8 small:mt-8 small:ml-2 shadow-2xl hover:scale-105'>
                    <h3 className=' text-xl font-semibold'>Senior Web Developer</h3>
                    <p className=' text-base font-bold mt-1 text-green-700'>2018-2021</p>
                    <p className=' text-sm mt-2'>Worked on various web development projects for clients{','}
                         including creating responsive designs{','} 
                         optimizing websites for search engines{','}
                         and implementing various web technologies. 
                         Assisted senior developers in coding and testing
                         </p>
                          </div>
                

                {/* Fourth */}
                <div className='border-2 bg-gray-100 w-96 small:w-80 px-5 py-2 md:ml-8 small:mt-8 md:mt-8 small:ml-2 shadow-2xl hover:scale-105'>
                    <h3 className=' text-xl font-semibold'>Web Development Bootcamp</h3>
                    <p className=' text-base font-bold mt-1 text-green-700'>2021</p>
                    <p className=' text-sm mt-2'>Completed a 12-week intensive coding program to learn full-stack web development{','}
                     including HTML{','} CSS{','} JavaScript{','} Node.js{','} and various front-end and back-end frameworks. 
                     Collaborated with other students on group projects and participated in code reviews and critiques
                         </p>
                          </div>
                          </div>

                {/* experience section End */}

               {/* PARENT DIV */}
               <div className='flex flex-col md:flex-row'>
                {/* CODING SKILLS */}
                <div>
                    {/* TOP HEADING */}
                    <div className=' md:ml-48 ml-20 md:mt-44 mt-36'> 
                        <h2 className=' text-3xl font-semibold '>Coding Skills</h2>
                        {/* underline */}
                     <div className=' w-28 h-1 bg-slate-100 small:mt-2 mt-1'>
                        <div className=' w-20 h-1 bg-green-600'></div>
                    </div>
                    </div>
                    {/* TOP HEADING END */}

                    {/* FIRST SKILL */}
                    <div className=' mt-8 md:ml-36 ml-5'>
                        <div className=' flex justify-between '>
                        <div className=' flex '>
                        <p className=' text-lg font-medium'>Javascript</p>
                        <p className=' ml-48 text-lg font-medium  md:ml-64'>70%</p>
                        </div>
                        </div>
                    <div className=' w-80 md:w-96 h-2 bg-slate-400 mt-1 rounded-full'>
                        <div className=' w-56 md:w-64 h-2 bg-green-600 rounded-full'></div>
                    </div>
                    </div>
                    {/* FIRST SKILL END */}

                    {/* SECOND SKILL */}
                    <div className=' mt-8 md:ml-36 ml-5 '>
                        <div className=' flex justify-between'>
                        <div className=' flex '>
                        <p className=' text-lg font-medium'>Typescript</p>
                        <p className=' ml-48 md:ml-64 text-lg font-medium'>75%</p>
                        </div>
                        </div>
                    <div className=' w-80 md:w-96 h-2 bg-slate-400 mt-1 rounded-full'>
                        <div className=' w-60 md:w-72 h-2 bg-green-600 rounded-full'></div>
                    </div>
                    </div>
                    {/* SECOND SKILL END */}

                    {/* THIRD SKILL */}
                    <div className=' mt-8 md:ml-36 ml-5'>
                        <div className=' flex justify-between'>
                        <div className=' flex '>
                        <p className=' text-lg font-medium'>React.js</p>
                        <p className=' ml-56 md:ml-72 text-lg font-medium'>65%</p>
                        </div>
                        </div>
                    <div className=' w-80 md:w-96 h-2 bg-slate-400 mt-1 rounded-full'>
                        <div className=' w-48 md:w-60 h-2 bg-green-600 rounded-full'></div>
                    </div>
                    </div>
                    {/* THIRD SKILL END  */}

                    {/* Fourth Skill */} 
                    <div className=' mt-8 md:ml-36 ml-5'>
                        <div className=' flex justify-between'>
                        <div className=' flex '>
                        <p className=' text-lg font-medium'>Next.js</p>
                        <p className=' ml-56 md:ml-72 text-lg font-medium'>77%</p>
                        </div>
                        </div>
                    <div className=' w-80 md:w-96 h-2 bg-slate-400 mt-1 rounded-full'>
                        <div className=' w-64 md:w-72 h-2 bg-green-600 rounded-full'></div>
                    </div>
                    </div>
                    {/* FOURTH SKILL END */}

                    {/* FIFTH SKILL  */} 
                    <div className=' mt-8 md:ml-36 ml-5 md:mb-14'>
                        <div className=' flex justify-between'>
                        <div className='flex'>
                        <p className=' text-lg font-medium'>Tailwind CSS</p>
                        <p className=' ml-44 md:ml-60 text-lg font-medium'>88%</p>
                        </div>
                        </div>
                    <div className=' w-80 md:w-96 h-2 bg-slate-400 mt-1 rounded-full'>
                        <div className=' w-64 md:w-80 h-2 bg-green-600 rounded-full'></div>
                    </div>
                    </div>



                </div>
                {/* DESIGN SKILLS */}
                <div>
                    {/* TOP HEADING */}
                    <div className=' md:ml-48 ml-20 md:mt-44 mt-36'> 
                        <h2 className=' text-3xl font-semibold '>Design Skills</h2>
                        {/* underline */}
                     <div className=' w-28 h-1 bg-slate-100 small:mt-2 mt-1 rounded-full'>
                        <div className=' w-20 h-1 bg-green-600 rounded-full'></div>
                    </div>
                    </div>
                    {/* TOP HEADING END */}

                     {/* FIRST SKILL */}
                     <div className=' mt-8 md:ml-36 ml-5 '>
                        <div className=' flex justify-between'>
                        <div className=' flex '>
                        <p className=' text-lg font-medium'>UX/UI Design</p>
                        <p className=' ml-44 text-lg font-medium  md:ml-64'>80%</p>
                        </div>
                        </div>
                    <div className=' w-80 md:w-96 h-2 bg-slate-400 mt-1 rounded-full'>
                        <div className=' w-56 md:w-80 h-2 bg-green-600 rounded-full'></div>
                    </div>
                    </div>
                    {/* FIRST SKILL END */}

                    {/* SECOND SKILL  */}
                    <div className=' mt-8 md:ml-36 ml-5'>
                        <div className=' flex justify-between'>
                        <div className=' flex '>
                        <p className=' text-lg font-medium'>Print Design</p>
                        <p className=' ml-48 text-lg font-medium  md:ml-64'>70%</p>
                        </div>
                        </div>
                    <div className=' w-80 md:w-96 h-2 bg-slate-400 mt-1 rounded-full'>
                        <div className=' w-56 md:w-64 h-2 bg-green-600 rounded-full'></div>
                    </div>
                    </div>
                    {/* SECOND SKILL END */}

                    {/* THIRD SKILL */}
                    <div className=' mt-8 md:ml-36 ml-5'>
                        <div className=' flex justify-between'>
                        <div className=' flex '>
                        <p className=' text-lg font-medium'>Graphic Design</p>
                        <p className=' ml-44 text-lg font-medium  md:ml-64'>80%</p>
                        </div>
                        </div>
                    <div className=' w-80 md:w-96 h-2 bg-slate-400 mt-1 rounded-full'>
                        <div className=' w-56 md:w-80 h-2 bg-green-600 rounded-full'></div>
                    </div>
                    </div>
                    {/* THIRD SKILL END */}

                    {/* FOURTH SKILL */}
                    <div className=' mt-8 md:ml-36 ml-5 mb-14'>
                        <div className=' flex justify-between'>
                        <div className=' flex '>
                        <p className=' text-lg font-medium'>Logo Design</p>
                        <p className=' ml-48 text-lg font-medium  md:ml-64'>80%</p>
                        </div>
                        </div>
                    <div className=' w-80 md:w-96 h-2 bg-slate-400 mt-1 rounded-full'>
                        <div className=' w-56 md:w-80 h-2 bg-green-600 rounded-full'></div>
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

export default page