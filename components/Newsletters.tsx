import React from 'react'

type Props = {}

const Newsletters = (props: Props) => {
    return (
        <div className='w-full py-16 text-white'>
            <div className='max-w-[1240px] mx-auto grid lg:grid-cols-3'>
                <div className='lg:col-span-2'>
                    <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>Want tips & tricks?</h1>
                    <p>Sign up to our newsletters today.</p>
                </div>
                <div className='my-4'>
                    <div>
                        <input type="email" placeholder='Enter email' className='p-3 flex w-full rounded-md text-black' />
                        <button className='bg-blue-500 w-[200px] rounded-md font-medium ml-4 my-6 mx-auto py-3 text-black'>Notify me</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Newsletters