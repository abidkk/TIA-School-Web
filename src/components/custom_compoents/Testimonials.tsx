import { Quote } from 'lucide-react'
import React from 'react'

const Testimonials = () => {
    return (
        <>
            <main className='px-4 sm:px-10 md:px-20  py-10 bg-[#1E3C21]  h-[500px]'>
                <h1 className='text-center font-bold text-4xl text-white p-4'>Testimonials</h1>

                <div className='grid gird-cols-1 md:grid-cols-2 gap-5 py-10'>


                    {/* test1 */}
                    <div className='bg-gray-100 p-5 min-h-[250px] rounded-md  text-gray-700'>
                        <Quote />
                        <p className='py-2 '> Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                            Odio necessitatibus consequuntur explicabo non beatae, eos ab fuga ex numquam rem sequi iusto,
                            culpa molestiae.Voluptatibus vero labore dicta ut similique? ratratione harum voluptates,
                            corporis nulla ex incidunt! Labore mollitia, Lorem ipsum dolor sit amet consectetur,
                            adipisicing elit. Odio necessitatibus consequuntur explicabo non beatae,
                            eos ab fuga ex numquam rem sequi iusto,culpa molestiae.</p>
                        <div className='font-bold px-5 py-2'>
                            <h3 className='text-black'>Holden Caulfield</h3>
                            <h3>UI DEVELOPER</h3>
                        </div>
                    </div>


                    {/* test2 */}
                    <div className='bg-gray-100 p-5 min-h-[250px] rounded-md  text-gray-700'>
                        <Quote />
                        <p className='py-2 '> Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                            Odio necessitatibus consequuntur explicabo non beatae, eos ab fuga ex numquam rem sequi iusto,
                            culpa molestiae.Voluptatibus vero labore dicta ut similique? ratratione harum voluptates,
                            corporis nulla ex incidunt! Labore mollitia, Lorem ipsum dolor sit amet consectetur,
                            adipisicing elit. Odio necessitatibus consequuntur explicabo non beatae,
                            eos ab fuga ex numquam rem sequi iusto,culpa molestiae.</p>
                        <div className='font-bold px-5 py-2'>
                            <h3 className='text-black'>Holden Caulfield</h3>
                            <h3>UI DEVELOPER</h3>
                        </div>
                    </div>

                </div>

            </main>
        </>
    )
}

export default Testimonials