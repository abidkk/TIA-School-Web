
import Testimonials from '@/components/custom_compoents/Testimonials'
import Hero from '@/components/custom_compoents/hero_components/Hero'
import OurFeatures from '@/components/custom_compoents/services_components/OurFeatures'
import OurServices from '@/components/custom_compoents/services_components/OurServices'
import React from 'react'

const page = () => {
  return (
    <>
  <Hero/>
  <OurServices/>
  <OurFeatures/>
  <div className='bg-gray-100 py-10'>

  </div>
  <Testimonials/>
    </>
  )
}

export default page