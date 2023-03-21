import React from 'react';
import Image, { StaticImageData } from 'next/image';

type Props = {
    src: string | StaticImageData;
    title: string;
    price: string;
    storage: string;
    users: string;
    size: string;
}

const Card = (props: Props) => {
    return (
        <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
            <Image
                className='mx-auto mt-[-3rem]'
                src={props.src}
                alt="An icon"
                width={50}
                height={45}
                placeholder="blur"
            />
            <h2 className='text-2xl font-bold text-center py-8'>{props.title}</h2>
            <p className='text-center text-4xl font-bold'>{props.price}</p>
            <div className='text-center font-medium'>
                <p className='py-2 border-t border-b mx-8 mt-8'>{props.storage}</p>
                <p className='py-2 border-b mx-8'>{props.users}</p>
                <p className='py-2 border-b mx-8'>{props.size}</p>
            </div>
            <button className='bg-blue-500 w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black'>Start Trial</button>
        </div>
    )
}

export default Card