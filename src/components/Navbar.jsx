"use client"; 
import React, { useState } from 'react';
import logo2 from '../../public/logo.jpeg'
import logo from '../../public/ultimate-code-review.png'
import Image from 'next/image'

const Navbar = () => {

  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNavbar = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <div className=''>
      {/* <!-- ========== HEADER ========== --> */}
<header className="sm:flex bg-slate-900  sm:justify-start sm:flex-nowrap z-50 sm:w-full fixed text-white text-sm sm:py-0  dark:bg-gray-800 dark:border-gray-700">
  <nav className="relative  max-w-[85rem] w-full mx-auto px-4 sm:flex  sm:items-center sm:justify-between sm:px-6 lg:px-8" aria-label="Global">
    <div className="flex items-center justify-between">
      <div className='flex'>
        <Image src={logo} className='h-10 w-10 rounded-full' alt='logo'></Image>
        <a className="flex-none text-xl mt-2 mr-20 ml-2 font-semibold dark:text-white" href="#" aria-label="Brand">| Ultimate Code Review</a>
      </div>
      <div className="hidden bg-white rounded-lg ">
        <button type="button" onClick={toggleNavbar} className="hs-collapse-toggle w-9 h-9  flex justify-center items-center text-sm font-semibold rounded-lg  text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" data-hs-collapse="#navbar-collapse-with-animation" aria-controls="navbar-collapse-with-animation" aria-label="Toggle navigation">
          <svg className="hs-collapse-open:hidden flex-shrink-0 w-4 h-4 " xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="3" x2="21" y1="6" y2="6"/><line x1="3" x2="21" y1="12" y2="12"/><line x1="3" x2="21" y1="18" y2="18"/></svg>
          <svg className="hs-collapse-open:block hidden flex-shrink-0 w-4 h-4 " xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
        </button>
      </div>
    </div>
    <div id="navbar-collapse-with-animation" className={`hs-collapse ${
              isNavOpen ? 'hidden' : 'hidden'
            } overflow-hidden  transition-all duration-300 basis-full grow sm:block`}
          >
      <div className="flex gap-y-4 sm:ml-20  gap-x-7 sm:flex-row sm:items-center sm:gap-y-0 sm:gap-x-7 sm:mt-0 sm:ps-7">
        <a className="font-lg  text-white  hover:text-gray-400 sm:py-6 dark:text-gray-400 dark:hover:text-gray-500" href="#home">Home</a> 
        <a className="font-lg  text-white hover:text-gray-400 sm:py-6 dark:text-gray-400 dark:hover:text-gray-500" href="#about">About Us</a> 
        <a className="font-lg text-white hover:text-gray-400 sm:py-6 dark:text-gray-400 dark:hover:text-gray-500" href="#services">Our Services</a>
        <a className="font-lg text-white hover:text-gray-400 sm:py-6 dark:text-gray-400 dark:hover:text-gray-500" href="#pricing">Pricing</a>
        <a className="font-lg text-white hover:text-gray-400 sm:py-6 dark:text-gray-400 dark:hover:text-gray-500" href="#clients">Clients</a>
        <a className="font-lg text-white hover:text-gray-400 sm:py-6 dark:text-gray-400 dark:hover:text-gray-500" href="#contact-us">Contact Us </a>
      </div>
    </div>

  </nav>
</header>
{/* <!-- ========== END HEADER ========== --> */}
    </div>
  )
}

export default Navbar
