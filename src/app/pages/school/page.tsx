import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import schoolBanner from "@/../public/schoolBanner.jpg"
import board1 from "@/../public/board1.png"
import board2 from "@/../public/board2.png"
import { SchoolTabs } from '@/components/custom_compoents/school_components/SchoolTabs'
const page = () => {

  return (
    <>
      <main className=' min-h-screen absulute'> 
      <h1 className='bg-green-900 text-center text-2xl  md:text-4xl font-bold text-green-700 py-2'>School Section</h1>
      
      <section className='px-2 md:px-10'>
      <SchoolTabs/>
      </section>
      
      
      
      
      </main>

    </>
  )
}

export default page