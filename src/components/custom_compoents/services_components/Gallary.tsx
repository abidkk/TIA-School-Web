import React from 'react'
import Image from 'next/image'
import vrar from "@/../public/pic2.jpg"
import { ArrowLeft, ArrowRight } from 'lucide-react'


const Gallary = () => {
    return (
        <>
            <main className='px-4 sm:px-10 md:px-20  py-10 bg-[#1E3C21]  '>
                <h1 className='text-center font-bold text-4xl text-white p-4'>Gallary</h1>
                <section className='flex justify-center'>
                    <div>
                    <div className=''>
                        <Image src={vrar} width={1000} height={1000} alt='pic1'  className='rounded-md '/>
                    </div>

                {/* buttons */}
                    <div className='flex  justify-center pt-4 '>
                        <button className='bg-white px-4 py-1 hover:rounded-tl-md hover:rounded-bl-md duration-500'><ArrowLeft /></button>
                        <button className='bg-white px-4 py-1 hover:rounded-tr-md hover:rounded-br-md duration-500'><ArrowRight /></button>
                    </div>
                    </div>

                </section>

            </main>
        </>
    )
}

export default Gallary