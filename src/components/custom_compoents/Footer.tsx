import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import logo from "@/../public/madresa.png"
import LinksComp from './LinksComp'

const Footer = () => {
  return (
    <>
    <main className='bg-[#1E3C21] p-2 px-4 md:px-10 flex flex-wrap gap-5 justify-between '>

        {/* logo */}
        <div>
            <Image src={logo} width={300} height={300} alt='tia logo'/>
        </div>

        <div className='md:px-10 pt-10'>
            <LinksComp/>
        </div>

    </main>
    </>
  )
}

export default Footer