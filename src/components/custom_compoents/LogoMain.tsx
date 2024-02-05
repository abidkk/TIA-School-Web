import React from 'react'
import Image from 'next/image'
import cap from "@/../public/cap.png"
import Link from 'next/link'

const LogoMain = () => {
  return (
    <div><Image src={cap} width={80} height={80} alt='cap logo'></Image></div>
    
  )
}

export default LogoMain