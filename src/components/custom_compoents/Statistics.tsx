import React from 'react'

const Statistics = () => {
    return (
        <>
            <main className='px-4 sm:px-20  py-20 bg-gray-100 '>

                <h1 className='text-center text-4xl  underline'>Statistics</h1>

                <div className='grid grid-cols-2  md:grid-cols-4 lg:grid-cols-5 gap-5 p-5 md:p-10 lg:p-20 opacity-80'>



                    <div className='text-center border border-gray-300 p-2 rounded-md'>
                        <h2 className='font-bold text-4xl '>300+</h2>
                        <p>Active students</p>
                    </div>

                    <div className='text-center border border-gray-300 p-2 rounded-md'>
                        <h2 className='font-bold text-4xl '>200+</h2>
                        <p>Passed out students</p>
                    </div>

                    <div className='text-center border border-gray-300 p-2 rounded-md'>
                        <h2 className='font-bold text-4xl '>20+</h2>
                        <p>Faculty Members</p>
                    </div>

                    <div className='text-center border border-gray-300 p-2 rounded-md'>
                        <h2 className='font-bold text-4xl'>2000+</h2>
                        <p> Library Books</p>
                    </div>

                    <div className='text-center border border-gray-300 p-2 rounded-md'>
                        <h2 className='font-bold text-4xl '>50%</h2>
                        <p>Scholarship on Fee</p>
                    </div>


                </div>
            </main>
        </>
    )
}

export default Statistics