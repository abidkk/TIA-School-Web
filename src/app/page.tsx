
import Testimonials from '@/components/custom_compoents/Testimonials'
import Hero from '@/components/custom_compoents/hero_components/Hero'
import OurFeatures from '@/components/custom_compoents/services_components/OurFeatures'
import OurServices from '@/components/custom_compoents/services_components/OurServices'
import OurFaculty from '@/components/custom_compoents/services_components/OurFaculty'
import Gallary from '@/components/custom_compoents/services_components/Gallary'
import Statistics from '@/components/custom_compoents/Statistics'
import ContactUs from '@/components/custom_compoents/ContactUs'

const page = () => {
  return (
    <>
  <Hero/>
  <OurServices/>
  <OurFeatures/>
  <OurFaculty/>
  <Gallary/>
  <Statistics/>
  <Testimonials/>
  <ContactUs/>
  
    </>
  )
}

export default page