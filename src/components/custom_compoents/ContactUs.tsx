import React from 'react'
import { HiBuildingOffice2 } from "react-icons/hi2";
import { MdContacts } from "react-icons/md";
const ContactUs = () => {
    return (
        <>
            <main className='px-4 sm:px-20  py-20 bg-gray-100 '>
                <h1 className='text-center text-4xl font-bold text-black pb-5'>Contact Us</h1>

                <section className='grid grid-cols-1 md:grid-cols-2 gap-4 justify-center items-between '>

                    {/* left content */}
                    <div className='bg-gray-200  '>
                        {/* contant */}
                        <div className='flex gap-2 items-between  my-10'>
                            <MdContacts size={60} />

                            <div>
                                <ul>
                                    <li> <b>Contact: </b> <span>+92 312-2646268 </span> OR <span>+92 335-2646268</span> </li>
                                    <li><b>Email: </b> <span>dev.abidkk@gail.com</span> OR <span>abidalikk@gmai.com</span></li>
                                    {/* <li><address><b>Address:</b> 1st floor Madina Masjid Khadplot Garibabad Mirpurkhas</address></li> */}
                                </ul>
                            </div>
                        </div>
                        {/*  */}


                        {/* address */}
                        <div className='flex gap-2 items-center my-10'>
                            <HiBuildingOffice2 size={80} />
                            <div>
                                <ul>
                                    <li> <b>Office Timing :</b> 09:00 am to 11:30 am</li>
                                    <li> <b>Days :</b> Monday to Saturday (Friday off)</li>
                                    <li><address> <b>Address:</b> 1st floor Madina Masjid Khadplot Garibabad Mirpurkhas</address></li>
                                </ul>
                            </div>
                        </div>
                        {/*  */}

                    </div>

                    {/* right form */}
                    <div className='bg-green-900 py-6  md:px-5'>

                        <div className='px-5'>
                            <form action="">
                                {/* <div className='flex flex-wrap gap-2 justify-center '>  */}
                                <input type="text" placeholder='enter your name' required className='px-4 py-2 rounded-md border border-gray-300 bg-white w-full' /> <br />
                                <input type="text" placeholder='enter your phone number' required className='px-4 py-2 rounded-md border border-gray-300 bg-white w-full mt-2' />
                                {/* </div> */}
                                <textarea name="" id="" placeholder='type your query ' required className='bg-white border border-gray-300 p-4 rounded-md w-full my-5 h-40'></textarea>
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