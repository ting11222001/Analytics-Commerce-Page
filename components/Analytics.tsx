import React from 'react';
import Image from 'next/image';
import laptop from '../public/laptop.webp';

type Props = {}

const Analytics = (props: Props) => {
    return (
        <div className='w-full bg-white py-16 px-4'>
            <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
                <Image
                    src={laptop}
                    alt="A picture of laptop"
                    width={500}
                    height={450}
                    placeholder="blur"
                />
                <div className='flex flex-col justify-center'>
                    <p className='text-blue-500 font-bold'>DATA ANALYTICS DASHBOARD</p>
                    <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>Manage Data Analytics With Us.</h1>
                    <p>Enjoy every data is collected and displayed at a central place.</p>
                    <button className='bg-black w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3 text-blue-500'>Get Started</button>
                </div>

            </div>

        </div>
    )
}

export default Analytics