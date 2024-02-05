import React from 'react'
import Link from 'next/link'
import LogoMain from './LogoMain'
import LinksComp from './LinksComp'
import SocialBtn from './SocialBtn'
const Navbar = () => {
  return (
    <>
    <nav className=' bg-[#1E3C21] p-2 px-4 md:px-10 flex flex-wrap gap-2 justify-center md:justify-between items-center text-white '>

    {/* logo */}
    <LogoMain/>

    {/* links */}
    <LinksComp/>

    {/* social icons */}
    <SocialBtn/>


    </nav>
    </>
  )
}

export default Navbar