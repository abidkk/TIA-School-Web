import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import clab from "@/../public/design.jpg"
import library from "@/../public/library2.jpg"
import classroom from "@/../public/classroo.jpg"
import light from "@/../public/light.jpg"
import scholarship from "@/../public/scholarship.jpg"
const OurFeatures = () => {
    return (
        <>
            <main className='px-4 sm:px-10   py-20 bg-[#1E3C21]   '>
                <h1 className='text-center text-4xl font-bold text-white pb-5'>Our Features</h1>

                <div className='p-2 flex flex-wrap justify-center gap-5 py-10'>

                    {/* F-1 */}
                    <div className='p-1 bg-gray-200'>
                        <Image src={clab} width={1000} height={1000} alt='design' className='w-64 h-46' />
                        <h3 className='text-center py-1 font-bold text-xl text-green-800'>Computer Lab</h3>
                    </div>

                    {/* F-2 */}
                    <div className='p-1 bg-gray-200'>
                        <Image src={library} width={1000} height={1000} alt='design' className='w-64 h-46' />
                        <h3 className='text-center py-1 font-bold text-xl text-green-800'>Library</h3>
                    </div>
                    {/* F-3 */}
                    <div className='p-1 bg-gray-200'>
                        <Image src={classroom} width={1000} height={1000} alt='design' className='w-64 h-46' />
                        <h3 className='text-center py-1 font-bold text-xl text-green-800'>Safe Environment</h3>
                    </div>

                    {/* F-4 */}
                    <div className='p-1 bg-gray-200'>
                        <Image src={light} width={1000} height={1000} alt='design' className='w-64 h-46' />
                        <h3 className='text-center py-1 font-bold text-xl text-green-800'>24/7 Electricity </h3>
                    </div>

                    {/* F-5 */}
                    <div className='p-1 bg-gray-200'>
                        <Image src={scholarship} width={1000} height={1000} alt='design' className='w-64 h-46' />
                        <h3 className='text-center py-1 font-bold text-xl text-green-800'>Scholarships</h3>
                    </div>
                </div>


            </main>
        </>
    )
}

export default OurFeatures