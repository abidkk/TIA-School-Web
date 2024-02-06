import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import logo from "@/../public/madresa.png"
import LinksComp from './LinksComp'
import { MdContacts } from 'react-icons/md'
import { HiBuildingOffice2 } from 'react-icons/hi2'
import { Download, Mail, MapPinned, Phone, User } from 'lucide-react'

const Footer = () => {
    return (
        <>
            <main className='bg-[#1E3C21] p-2 px-2 md:px-10 flex flex-wrap gap-5 justify-between text-gray-300'>

                {/* 01:  logo */}
                <div>
                    <Image src={logo} width={300} height={300} alt='tia logo' />
                </div>



                {/* 02 :  contant */}
                <div className=' p-2 '>
                    {/* <div className='p-5  text-xl bg-green-800 border-b border-green-100'>
                        <LinksComp />
                    </div> */}

                    {/* address */}
                    <section className=''>

                        <div >
                            <h1 className='text-center font-bold bg-green-900 p-2 mb-4 text-white'>Contact & Address Info</h1>

                            {/* phone details */}
                            <div className='flex flex-wrap gap-5 justify-between py-2'>
                                <div className='flex gap-2'><Phone /> <span>+92 312-2626268</span></div>
                                <div className='flex gap-2'><Phone /> <span>+92 335-2646268</span></div>
                            </div>

                            {/* email details */}
                            <div className='flex flex-wrap gap-5 justify-between py-2'>
                                <div className='flex gap-2'><Mail /> <span>dev.abidkk@gmail.com</span></div>
                                <div className='flex gap-2'><Mail /> <span>tia.edu@gmail.com</span></div>
                            </div>



                            {/* office details */}
                            <div className=' justify-between py-2'>
                                <div className='flex gap-2 font-bold  text-white'><User /> <span >Office Timing</span></div>
                                <div className='flex gap-2'> <span> Monay-Saturday <span className='text-green-400'>( 09:00 am - 11:30 am )</span> </span></div>
                            </div>

                            {/* Address details */}
                            <div className=' justify-between py-2'>
                                <div className='flex gap-2 font-bold  text-white'><MapPinned /><span >Address</span></div>
                                <div className='flex gap-2 '> <span> 1st floor Madina Masjid Khadplot Garibabad Mirpurkhas </span></div>
                            </div>



                        </div>

                    </section>

                </div>


                {/* 03 Demo */}
                <div className=' m-2 p-4  h-full'>
                    <h3 className='font-bold bg-green-900 text-center py-2 mb-4'>Download Links</h3>
                    <ul>
                        <Link href={`/`}><li className='flex gap-2 items-center py-2 hover:text-green-300 duration-500'> <Download /> <p>Download School Admission Form</p> </li></Link>
                        <Link href={`/`}><li className='flex gap-2 items-center py-2 hover:text-green-300 duration-500'> <Download /> <p> Download Madressa Admission Form</p> </li></Link>
                        <Link href={`/`}><li className='flex gap-2 items-center py-2 hover:text-green-300 duration-500'> <Download /> <p>Download Certificate Issuence Form</p> </li></Link>
                        <Link href={`/`}><li className='flex gap-2 items-center py-2 hover:text-green-300 duration-500'> <Download /> <p>Download School Course Syllabus</p> </li></Link>
                    </ul>
                </div>

            </main>
        </>
    )
}

export default Footer