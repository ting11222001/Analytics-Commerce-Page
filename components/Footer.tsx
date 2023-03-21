import React from 'react';
import {
    FaDribbbleSquare,
    FaFacebookSquare,
    FaGithubSquare,
    FaInstagram,
    FaTwitterSquare,
} from 'react-icons/fa';
import List from '@/components/List';


type Props = {}

const Footer = (props: Props) => {
    return (
        <div className='max-w-[1240px] mx-auto py-16 px-4 grid lg:grid-cols-3 gap-8 text-gray-300 mx-4'>
            <div>
                <h1 className='w-full text-3xl font-bold text-blue-500'>DATA.</h1>
                <p className='py-4'>Monitor and gain insights from your data.</p>
                <div className='flex md:w-[75%] my-6'>
                    <FaFacebookSquare size={30} className='mr-2' />
                    <FaInstagram size={30} className='mr-2' />
                    <FaTwitterSquare size={30} className='mr-2' />
                    <FaGithubSquare size={30} className='mr-2' />
                    <FaDribbbleSquare size={30} className='mr-2' />
                </div>
            </div>
            <div className='lg:col-span-2 flex justify-between'>
                <List title={'Solutions'} subTitle1={'Analytics'} subTitle2={'Marketing'} subTitle3={'Commerce'} subTitle4={'Insights'} />
                <List title={'Support'} subTitle1={'Pricing'} subTitle2={'Documentation'} subTitle3={'Guides'} subTitle4={'API Status<'} />
                <List title={'Company'} subTitle1={'About'} subTitle2={'Blog'} subTitle3={'Jobs'} subTitle4={'Press'} subTitle5={'Careers'} />
                <List title={'Legal'} subTitle1={'Claim'} subTitle2={'Policy'} subTitle3={'Terms'} />
            </div>
        </div>
    )
}

export default Footer