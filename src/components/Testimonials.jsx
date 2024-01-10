import img from '../../public/transparent-2.png'
import urbanPro from '../../public/urbanpro.svg'
import privateTutor from '../../public/privateTutor.png'
import teacheron from '../../public/teacheron.png'
import learnPick from '../../public/learnPick.png'
import Image from 'next/image'

const Testimonials = () => {
  return (
    <div className='bg-[#05134e]   bg-left-top bg-no-repeat '  style={{backgroundImage: `url('${img.src}')` }}>
      {/* <!-- Testimonials --> */}
<div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
<h3 className="text-4xl mt-20  text-center font-semibold  text-white dark:text-gray-300 dark:hover:text-white">
        Our Clients Testimonials
        </h3>
        <p className='text-xl mt-5 mb-16 text-center font-normal  text-white dark:text-gray-300 dark:hover:text-white'>
        Testimony of Our Quality Services.
        </p>
  {/* <!-- Grid --> */}
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
    {/* <!-- Card --> */}
    <div className="flex flex-col bg-white border border-gray-200 shadow-sm rounded-xl dark:bg-slate-900 dark:border-gray-700 hover:scale-[1.1]">
      <div className="flex-auto p-4 md:p-6">
        <Image src={urbanPro} alt='urbanPro' ></Image>

        <p className="mt-3 sm:mt-6 text-base text-gray-800 md:text-xl dark:text-white"><em>
          " I'm absolutely floored by the level of care and attention to detail the team at HS have put into this theme and for one can guarantee that I will be a return customer. "
        </em></p>
      </div>

      <div className="p-4 rounded-b-xl md:px-6">
        <h3 className="text-sm font-semibold text-gray-800 sm:text-base dark:text-gray-200">
          Nicole Grazioso
        </h3>
        <p className="text-sm text-gray-500">
          Director Payments & Risk | HubSpot
        </p>
      </div>
    </div>
    {/* <!-- End Card --> */}

    {/* <!-- Card --> */}
    <div className="flex flex-col bg-white border border-gray-200 shadow-sm rounded-xl dark:bg-slate-900 dark:border-gray-700 hover:scale-[1.1]">
      <div className="flex-auto p-4 md:p-6">
      <Image src={privateTutor} alt='privateTutor' ></Image>
        <p className="mt-3 sm:mt-6 text-base text-gray-800 md:text-xl dark:text-white"><em>
          " With Preline, we're able to easily track our performance in full detail. It's become an essential tool for us to grow and engage with our audience. "
        </em></p>
      </div>

      <div className="p-4 rounded-b-xl md:px-6">
        <h3 className="text-sm font-semibold text-gray-800 sm:text-base dark:text-gray-200">
          Josh Tyson
        </h3>
        <p className="text-sm text-gray-500">
          Product Manager | Capsule
        </p>
      </div>
    </div>
    {/* <!-- End Card --> */}

    {/* <!-- Card --> */}
    <div className="flex flex-col bg-white border border-gray-200 shadow-sm rounded-xl dark:bg-slate-900 dark:border-gray-700 hover:scale-[1.1]">
      <div className="flex-auto p-4 md:p-6">
      <Image src={learnPick} alt='learnPick' ></Image>
        <p className="mt-3 sm:mt-6 text-base text-gray-800 md:text-xl dark:text-white"><em>
          " With Preline, we're able to easily track our performance in full detail. It's become an essential tool for us to grow and engage with our audience. "
        </em></p>
      </div>

      <div className="p-4 rounded-b-xl md:px-6">
        <h3 className="text-sm font-semibold text-gray-800 sm:text-base dark:text-gray-200">
          Josh Tyson
        </h3>
        <p className="text-sm text-gray-500">
          Product Manager | Capsule
        </p>
      </div>
    </div>
    {/* <!-- End Card --> */}

    {/* <!-- Card --> */}
    <div className="flex flex-col bg-white border border-gray-200 shadow-sm rounded-xl dark:bg-slate-900 dark:border-gray-700 hover:scale-[1.1]">
      <div className="flex-auto p- md:p-6">
        <Image src={teacheron} alt='teacheron' className='-mt-7' ></Image>
        <p className="mt-3 sm:mt-6 text-base text-gray-800 md:text-xl dark:text-white"><em>
          " In September, I will be using this theme for 2 years. I went through multiple updates and changes and I'm very glad to see the consistency and effort made by the team. "
        </em></p>
      </div>

      <div className="p-4 rounded-b-xl md:px-6">
        <h3 className="text-sm font-semibold text-gray-800 sm:text-base dark:text-gray-200">
          Luisa
        </h3>
        <p className="text-sm text-gray-500">
          Senior Director of Operations | Fitbit
        </p>
      </div>
    </div>
    {/* <!-- End Card --> */}
  </div>
  {/* <!-- End Grid --> */}
</div>
{/* <!-- End Testimonials --> */}
    </div>
  )
}

export default Testimonials
