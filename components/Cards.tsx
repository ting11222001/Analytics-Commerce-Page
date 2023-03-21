import React from 'react';
import Image from 'next/image';
import single from '../public/single.webp';
import double from '../public/double.webp';
import triple from '../public/triple.webp';

type Props = {}

const Cards = (props: Props) => {
    return (
        <div className='w-full py-[10rem] px-4 bg-white'>
            <div className='max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8'>
                <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
                    <Image
                        className='mx-auto mt-[-3rem]'
                        src={single}
                        alt="A picture of single"
                        width={50}
                        height={45}
                        placeholder="blur"
                    />
                    <h2 className='text-2xl font-bold text-center py-8'>Single User</h2>
                    <p className='text-center text-4xl font-bold'>AUD $149</p>
                    <div className='text-center font-medium'>
                        <p className='py-2 border-t border-b mx-8 mt-8'>500 GB Storage</p>
                        <p className='py-2 border-b mx-8'>1 Granted User</p>
                        <p className='py-2 border-b mx-8'>Send up to 2 GB</p>
                    </div>
                    <button className='bg-blue-500 w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3 text-black'>Start Trial</button>
                </div>
            </div>
        </div>
    )
}

export default Cards