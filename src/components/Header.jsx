import React from 'react'
import ParticlesBackground from './ParticlesBackground'
import logo2 from '../../public/logo.jpeg'
import logo3 from '../../public/ultimate-code-review-removebg-preview.png'
import logo from '../../public/header.png'
import Image from 'next/image'

const Header = () => {
  return (
    <div>
      {/* <!-- Hero --> */}
<div className="bg-slate-900  pb-28">

<ParticlesBackground />
  <div className="bg-gradient-to-b from-violet-600/[.15] via-transparent">
    <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 py-24 space-y-8">
        
      {/* <!-- Title --> */}
      <div className="max-w-3xl flex justify-center text-center mx-auto">
        <Image  className='h- w-80 rounded' src={logo} alt='logo'></Image>
       
        {/* <h1 className="block font-medium  mt-3  sm:ml-5 text-gray-200  text-4xl">
          | Ultimate Code Review
        </h1> */}
      </div>
      {/* <!-- End Title --> */}

      <div className="max-w-3xl text-center mx-auto" style={{}}>
        <p className="text-lg text-gray-400">Test your application code for unexpected failures</p>
      </div>

      {/* <!-- Buttons --> */}
      <div className="text-center">
        <a className="inline-flex justify-center items-center gap-x-3 text-center bg-gradient-to-tl from-blue-600 to-violet-600 shadow-lg shadow-transparent hover:shadow-blue-700/50 border border-transparent text-white text-sm font-medium rounded-full focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-white py-3 px-6 dark:focus:ring-offset-gray-800" href="#contact-us">
          Get started
          <svg className="flex-shrink-0 w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m9 18 6-6-6-6"/></svg>
        </a>
      </div>
      {/* <!-- End Buttons --> */}
    </div>
  </div>
</div>
{/* <!-- End Hero --> */}
    </div>
  )
}

export default Header
