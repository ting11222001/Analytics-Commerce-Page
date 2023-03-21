import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';

type Props = {}

const Navbar = (props: Props) => {
  const [navbar, setNavbar] = useState(false);

  const handleNavbar = () => {
    setNavbar(!navbar);
  }

  return (
    <div className='text-white flex justify-between items-center max-w-[1024px] mx-auto h-24 px-4'>
      <h1 className='w-full text-3xl font-bold text-blue-500'>DATA.</h1>
      <div className='hidden md:flex'>
        <a href="#About" className='p-4'>About</a>
        <a href="#Plans" className='p-4'>Plans</a>
        <a href="#Newsletters" className='p-4'>Newsletters</a>
        <a href="#Contact" className='p-4'>Contact</a>
      </div>

      {/* Hamburger */}
      <div onClick={handleNavbar} className='block md:hidden'>
        {navbar ? (
          <AiOutlineClose size={20} />
        ) : (
          <AiOutlineMenu size={20} />
        )}

      </div>

      {/* Mobile menu */}
      <div className={`${navbar ? 'w-[60%]' : 'fixed left-[-100%]'} fixed top-0 left-0 h-full border-r  bg-black border-r-gray-900 pt-24 transition-all duration-500`}>
        <h1 className='w-full text-3xl font-bold text-blue-500 p-4'>DATA.</h1>
        <div className='flex flex-col p-4'>
          <a href="#About" className='p-4 uppercase border-b border-r-gray-600' onClick={handleNavbar}>About</a>
          <a href="#Plans" className='p-4 uppercase border-b border-r-gray-600' onClick={handleNavbar}>Plans</a>
          <a href="#Newsletters" className='p-4 uppercase border-b border-r-gray-600' onClick={handleNavbar}>Newsletters</a>
          <a href="#Contact" className='p-4 uppercase border-b border-r-gray-600' onClick={handleNavbar}>Contact</a>
        </div>
      </div>

    </div >
  )
}

export default Navbar