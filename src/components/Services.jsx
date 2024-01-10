import Image from 'next/image'
import s1 from '../../public/s1.png'
import s3 from '../../public/s3.png'
import s4 from '../../public/s4.png'
import s6 from '../../public/s6.png'

const Services = () => {
  return (
    <div style={{background:"rgba(72, 52, 212, 0.95"}}>
    {/* <!-- Card Blog --> */}
<div className="max-w-[85rem] px-4 py-10  sm:px-6 lg:px-8 lg:py-14 mx-auto" >
        <h3 className="text-4xl mt-20 mb-16 text-center font-semibold text-white dark:text-gray-300 dark:hover:text-white">
        Our Services
        </h3>
  {/* <!-- Grid --> */}
  <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
    {/* <!-- Card --> */}
    <div className="group flex flex-col h-full bg-white border border-gray-200 shadow-sm rounded-xl dark:bg-slate-900 dark:border-gray-700 dark:shadow-slate-700/[.7]  hover:-translate-y-10 hover:animate-bounce ">
      <div className="h-52 flex flex-col justify-center items-center rounded-t-xl">
       <Image src={s1} alt='s1'></Image>
      </div>
      <div className="p-4 md:p-6">
        
        <h3 className="text-xl text-center font-semibold text-[#13287e] dark:text-gray-300 dark:hover:text-white">
        Web Penetration Testing 
        </h3>
        
      </div>
      
    </div>
    {/* <!-- End Card --> */}

    {/* <!-- Card --> */}
    <div className="group flex flex-col h-full bg-white border border-gray-200 shadow-sm rounded-xl dark:bg-slate-900 dark:border-gray-700 dark:shadow-slate-700/[.7] hover:-translate-y-10 hover:animate-bounce">
      <div className="h-52 flex flex-col justify-center items-center  rounded-t-xl">
      <Image src={s3} alt='s3'></Image>
      </div>
      <div className="p-4 md:p-6">
        
        <h3 className="text-xl text-center font-semibold text-[#13287e] dark:text-gray-300 dark:hover:text-white">
        Mobile Penetration Testing 
        </h3>
        
      </div>
      
    </div>
    {/* <!-- End Card --> */}



    {/* <!-- Card --> */}
    <div className="group flex flex-col h-full bg-white border border-gray-200 shadow-sm rounded-xl dark:bg-slate-900 dark:border-gray-700 dark:shadow-slate-700/[.7] hover:-translate-y-10 hover:animate-bounce">
      <div className="h-52 flex flex-col justify-center items-center  rounded-t-xl">
      <Image src={s6} alt='s6'></Image>
      </div>
      <div className="p-4 md:p-6">
        
        <h3 className="text-xl text-center font-semibold text-[#13287e] dark:text-gray-300 dark:hover:text-white">
        Web Development Service
        </h3>
        
      </div>
      
    </div>
    {/* <!-- End Card --> */}

    {/* <!-- Card --> */}
    <div className="group flex flex-col h-full bg-white border border-gray-200 shadow-sm rounded-xl dark:bg-slate-900 dark:border-gray-700 dark:shadow-slate-700/[.7] hover:-translate-y-10 hover:animate-bounce">
      <div className="h-52 flex flex-col justify-center items-center rounded-t-xl">
      <Image src={s4} alt='s4'></Image>
      </div>
      <div className="p-4 md:p-6">
        
        <h3 className="text-xl text-center font-semibold text-[#13287e] dark:text-gray-300 dark:hover:text-white">
        Source Code Review
        </h3>
        
      </div>
      
    </div>
    {/* <!-- End Card --> */}
  </div>
  {/* <!-- End Grid --> */}
</div>
{/* <!-- End Card Blog --> */}
    </div>
  )
}

export default Services
