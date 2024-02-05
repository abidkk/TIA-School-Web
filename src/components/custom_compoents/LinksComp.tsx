import React from 'react'
import Link from 'next/link'
const LinksComp = () => {
  return (
    <>
        <div>
        <ul className='flex gap-4 flex-wrap justify-center'>
            <Link href={`/`} className='hover:text-green-200 duration-500'> <li> Home </li> </Link>
            <Link href={`/`} className='hover:text-green-200 duration-500'> <li> About </li> </Link>
            <Link href={`/`} className='hover:text-green-200 duration-500'> <li> Admissions </li> </Link>
            <Link href={`/`} className='hover:text-green-200 duration-500'> <li> Contact Us </li> </Link>
            <Link href={`/`} className='hover:text-green-200 duration-500'> <li> Gallery </li> </Link>
        </ul>
    </div>

    </>
  )
}

export default LinksComp