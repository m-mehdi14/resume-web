import Image from 'next/image'
import React from 'react'
import Wrapper from './Wrapper'

const Clients = () => {
  return (
    <>
    <section>
        <Wrapper>
            {/* main div */}
            <div>
                {/* top heading */}
                <div className=' px-9 md:mt-32 mt-36'>
                    <h2 className=' text-2xl font-bold'>Clients</h2>
                     {/* underline */}
                     <div className=' w-28 h-1 bg-slate-100'>
                        <div className=' w-14 h-1 bg-green-600'></div>
                    </div>    
                </div>
                {/* --------------------------------- */}
                
                {/* clients LOGO */}
                <div className=' flex flex-col md:flex-row md:mt-8 small:mt-12 md:px-32 small:px-28 md:space-x-24 small:space-y-16' >
                    {/* first */}
                    <div>
                        <Image  src={"/goldengrid.png"} alt={"goldenGrid"} height={200} width={200}/>
                    </div>
                    {/* second */}
                    <div>
                        <Image src={"/designlovers.png"} alt={"Design-Lovers"} height={200} width={200}/>
                    </div>
                    {/* Third */}
                    <div>
                         <Image src={"/lifeguard.png"} alt={"LifeGuard"} height={200} width={200}/>
                    </div>
                    {/* fourth */}
                    <div>
                        <Image src={"/Magic-Furnitures-1.png"} alt={"Magic-Furniture"} height={200} width={200}/>
                    </div>

                </div>



            </div>
        </Wrapper>
    </section>
    </>
  )
}

export default Clients