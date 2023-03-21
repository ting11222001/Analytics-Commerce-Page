import React from 'react'

type Props = {}

const Newsletters = (props: Props) => {
    return (
        <div className='w-full py-16 text-white px-4'>
            <div className='max-w-[1240px] mx-auto grid lg:grid-cols-3'>
                <div className='lg:col-span-2 my-4'>
                    <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>Want tips & tricks?</h1>
                    <p>Sign up to our newsletters today.</p>
                </div>
                <div className='my-4'>
                    <div className='flex flex-col sm:flex-row items-center justify-between w-full'>
                        <input type="email" placeholder='Enter email' className='p-3 flex w-full rounded-md text-black' />
                        <button className='bg-blue-500 w-[200px] rounded-md font-medium ml-4 my-6 px-6 py-3 text-black'>Notify me</button>
                    </div>
                    <p>We care about the protection of your data. Read our <span className='text-blue-500'>Privacy policy</span></p>
                </div>
            </div>
        </div>
    )
}

export default Newsletters