import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

import admissionLogo from "@/../../public/admissionopen3.png"
import freeAdm from "@/../../public/freeAdmission1.png"
const Hero = () => {
  return (
    <>
    <main className=" px-4 sm:px-10  py-10 bg-[#1E3C21]  h-[500px] border-t border-green-900"> 
    
    <div className='grid grid-cols-1 md:grid-cols-2 gap-4 justify-center'>

        {/* Content left side */}
        <div className=' '>
            <Image src={freeAdm} width={100} height={100} alt='admission logo' className='bg'/>
        <h1 className='text-6xl font-bold text-white '>The Islamic Academy</h1>
        <p className='text-2xl py-2 text-green-300'>The Path of the success of here and After here. </p>
        <p className='text-gray-300 py-5'>A complete Islamic Environment,We Intoduce our students with latest lechnologies, Elnglish Language, Science and special events for students to imporove thier presentation, communication and social skills </p>
       
       <div className='flex gap-2'>
        <Link href={'/'} className='px-4 py-2 bg-green-700 rounded-md hover:rounded-tl-none hover:rounded-br-none hover:bg-green-700 duration-500 text-white'> <button>Contact Us</button> </Link>
        <Link href={'/'} className='px-4 py-2 bg-green-700 rounded-md hover:rounded-tl-none hover:rounded-br-none hover:bg-green-700 duration-500 text-white'> <button>Apply Now</button> </Link>

       </div>
       
        </div>

        {/* Image Right side */}
        <div className='flex justify-center items-center  '>
            <Image src={admissionLogo} width={1000} height={1000} alt='logo' className='w-[400px] h-[400px]'/>
           
        </div>

    </div>

    </main>
    </>
  )
}

export default Hero