import React from 'react';
import single from '../public/single.webp';
import double from '../public/double.webp';
import triple from '../public/triple.webp';
import Card from '@/components/Card';

type Props = {}

const Cards = (props: Props) => {
    return (
        <div className='w-full py-[10rem] px-4 bg-white'>
            <div className='max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8'>
                <Card src={single} title={'Single User'} price={'AUD $149'} storage={'500 GB Storage'} users={'1 Granted User'} size={'Send up to 2 GB'} />
                <Card src={double} title={'Partnership'} price={'AUD $199'} storage={'1 TB Storage'} users={'3 Users Allowed'} size={'Send up to 10 GB'} />
                <Card src={triple} title={'Group'} price={'AUD $299'} storage={'5 TB Storage'} users={'10 Users Allowed'} size={'Send up to 20 GB'} />
            </div>
        </div>
    )
}

export default Cards