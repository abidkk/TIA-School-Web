import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import darulIftaLogo from "@/../public/darulIfta.png"
import schoolLogo from "@/../public/schoolLogo.png"
import madressaLogo from "@/../public/madresa.png"
const OurServices = () => {
  return (
   <>
    <main className='px-4 sm:px-20  py-20 bg-gray-100 h-[500px]'>
        <h1 className='text-center text-4xl font-bold text-green-800'>Our <span className='text-black'>Services</span> </h1>

        <div className=' grid grid-cols-1 md:grid-cols-3 gap-4 py-10'>

            {/* school section */}
            <div className='border border-gray-200  text-white rounded-md text-center hover:bg-gray-200 duration-500 cursor-pointer p-2'>
                <Image src={schoolLogo} width={1000} height={1000} alt='schoolLogo' className='w-40 h-40 rounded-full mx-auto '/>
                <h1 className='text-xl font-bold py-1 my-1  rounded-md text-black'>School Section</h1>
            </div>

            {/* Madressa Section */}
            <div className='border border-gray-200  text-white rounded-md text-center hover:bg-gray-200 duration-500 cursor-pointer p-2'>
                <Image src={madressaLogo} width={1000} height={1000} alt='schoolLogo' className='w-40 h-40 rounded-full mx-auto '/>
                <h1 className='text-xl font-bold py-1 my-1  rounded-md text-black'>Madressa Section</h1>
            </div>

            {/* DarulIfta Section */}
            <div className='border border-gray-200  text-white rounded-md text-center hover:bg-gray-200 duration-500 cursor-pointer p-2'>
                <Image src={darulIftaLogo} width={1000} height={1000} alt='schoolLogo' className='w-40 h-40 rounded-full mx-auto '/>
                <h1 className='text-xl font-bold py-1 my-1  rounded-md text-black'>Darul-Ifta Section</h1>
            </div>
            
        </div>

    </main>
   </>
  )
}

export default OurServices