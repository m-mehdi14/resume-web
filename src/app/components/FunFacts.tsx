import Image from 'next/image'
import React from 'react'
import Wrapper from './Wrapper'

const FunFacts = () => {
  return (
    <>
    <section>
        <Wrapper>
            {/* main div */}
            <div>
                {/* top heading */}
                <div className=' px-9 md:mt-32 mt-36'>
                    <h2 className=' text-2xl font-bold'>Fun Facts</h2>
                     {/* underline */}
                     <div className=' w-28 h-1 bg-slate-100'>
                        <div className=' w-14 h-1 bg-green-600'></div>
                    </div>    
                </div>
                {/* --------------------------------- */}

                {/* Fun Facts Points */}
                <div className=' md:mt-8 mt-12 md:px-28 flex flex-col small:items-center md:flex-row space-x-7'>
                    {/* first point */}
                    <div className=' border-2 border-slate-500 w-64 h-max p-7 small:ml-6 text-center rounded-xl hover:scale-105 hover:shadow-2xl  flex flex-col items-center'>
                        <Image className='' src={"/heart.png"} alt={"Heart-Icon"} height={60} width={60}/>
                        <h4 className=' text-xl font-semibold mt-4 text-slate-900'>Happy Clients</h4>
                        <p className=' text-6xl mt-5 text-slate-300'>578</p>
                    </div>
                    {/* end */}

                    {/* second Point */}
                    <div className=' border-2 border-slate-500 w-64 h-max p-7 small:mt-14 text-center rounded-xl hover:scale-105 hover:shadow-2xl flex flex-col items-center'>
                        <Image className='' src={"/working-hours.png"} alt={"Heart-Icon"} height={60} width={60}/>
                        <h4 className=' text-xl font-semibold mt-4  text-slate-900'>Working Hours</h4>
                        <p className=' text-6xl mt-5 text-slate-300'>4,780</p>
                    </div>
                    {/* end */}
                    
                    {/* Third Point */}
                    <div className=' border-2 border-slate-500 w-64 h-max p-7 small:mt-14 text-center rounded-xl hover:scale-105 hover:shadow-2xl  flex flex-col items-center'>
                        <Image className='' src={"/star.png"} alt={"Heart-Icon"} height={60} width={60}/>
                        <h4 className=' text-xl font-semibold mt-4  text-slate-900'>Awards Won</h4>
                        <p className=' text-6xl mt-5 text-slate-300'>15</p>
                    </div>
                    {/* end */}

                    {/* Fourth Point */}
                    <div className=' border-2 border-slate-500 w-64 h-max p-7 mb-14 small:mt-14 text-center rounded-xl hover:scale-105 hover:shadow-2xl  flex flex-col items-center'>
                        <Image className='' src={"/coffee-cup.png"} alt={"Heart-Icon"} height={60} width={60}/>
                        <h4 className=' text-xl font-semibold mt-4  text-slate-900'>Coffee Consumed</h4>
                        <p className=' text-6xl mt-5 text-slate-300'>1,286</p>
                    </div>
                    {/* end */}



                







                </div>








            </div>
        </Wrapper>
    </section>
    </>
  )
}

export default FunFacts