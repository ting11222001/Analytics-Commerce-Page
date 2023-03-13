import React from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';

type Props = {}

const Navbar = (props: Props) => {
  return (
    <div className='text-white flex justify-between items-center max-w-[1024px] mx-auto h-24 px-4'>
      <h1 className='w-full text-3xl font-bold text-blue-500'>DATA.</h1>
      <div className='flex hidden'>
        <a href="" className='p-4'>Home</a>
        <a href="" className='p-4'>Company</a>
        <a href="" className='p-4'>Resources</a>
        <a href="" className='p-4'>About</a>
        <a href="" className='p-4'>Contact</a>
      </div>

      {/* Hamburger */}
      <div>
        <AiOutlineMenu size={20} />
      </div>

      {/* Mobile menu */}
      <div className='fixed top-0 left-0 w-[60%] h-full border-r border-r-gray-900 pt-24'>
        <div className='flex flex-col bg-black'>
          <a href="" className='p-4 uppercase'>Home</a>
          <a href="" className='p-4 uppercase'>Company</a>
          <a href="" className='p-4 uppercase'>Resources</a>
          <a href="" className='p-4 uppercase'>About</a>
          <a href="" className='p-4 uppercase'>Contact</a>
        </div>
      </div>

    </div>
  )
}

export default Navbar