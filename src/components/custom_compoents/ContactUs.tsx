import React from 'react'
import { HiBuildingOffice2 } from "react-icons/hi2";
import { MdContacts } from "react-icons/md";
const ContactUs = () => {
    return (
        <>
            <main className='px-4 sm:px-20  py-10 bg-gray-100 '>
                <h1 className='text-center text-4xl font-bold text-black pb-5'>Contact Us</h1>
                <p className='text-center  pb-10'>Fill out this form we will reach your within 24 hours in working days</p>

                <section className='grid grid-cols-1 md:grid-cols-1 gap-4 justify-center items-between '>

                    {/* right form */}
                    <div className='bg-gray-200 py-6  md:px-5 rounded-md mx-auto'>

                        <div className='px-5'>
                            <form action="">
                                {/* <div className='flex flex-wrap gap-2 justify-center '>  */}
                                <input type="text" placeholder='enter your name' required className='px-4 py-2 rounded-md border border-gray-200 bg-white w-full' /> <br />
                                <input type="text" placeholder='enter your phone number' required className='px-4 py-2 rounded-md border border-gray-200 bg-white w-full mt-2' />
                                {/* </div> */}
                                <textarea name="" id="" placeholder='type your query ' required className='bg-white border border-gray-200 p-4 rounded-md w-full my-5 h-40'></textarea>
                                <div className='flex justify-between gap-2'>
                                    <button className='px-4 py-2 w-[80%] bg-green-600 text-white rounded-md hover:bg-green-800 hover:shadow-md duration-500'>Send </button>
                                    <input type='reset' className='px-4 py-1  bg-red-800 text-white rounded-md hover:bg-red-600 duration-500' />
                                </div>
                            </form>
                        </div>

                    </div>

                </section>


            </main>
        </>
    )
}

export default ContactUs