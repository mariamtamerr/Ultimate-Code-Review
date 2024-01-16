import Image from 'next/image'
import urbanPro from '../../public/urbanpro.svg'
import privateTutor from '../../public/privateTutor.png'
import teacheron from '../../public/teacheron.png'
import learnPick from '../../public/learnPick.png'
import tutorGrip from '../../public/tutorgrip-logo.png'
import img from '../../public/transparent-2.png'


const Clients = () => {
  return (
    <div className='   bg-left-top bg-no-repeat '  style={{backgroundImage: `url('${img.src}')` }}>
        <div className="max-w-[85rem] px-4 py-10  sm:px-6 lg:px-8 lg:py-14 mx-auto" >
        <h3 className="text-4xl mt-20  text-center font-semibold text-[#13287e] dark:text-gray-300 dark:hover:text-white">
        Our Clients 
        </h3>

        <p className="text-xl mt-5 mb-9 text-center font-semibold text-gray-500 dark:text-gray-300 dark:hover:text-white">
         Our Portfolio of Esteemed Clients.
        </p>
  {/* <!-- Grid --> */}
  <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-5 lg:gap-10 ">
    {/* <!-- Card --> */}
    <div className="group flex flex-col h-full bg-white  border-gray-200 shadow-sm rounded-xl dark:bg-slate-900 dark:border-gray-700 dark:shadow-slate-700/[.7]  hover:-translate-y-10 hover:animate-bounce ">
      <div className="h-52 flex flex-col justify-center items-center rounded-t-xl">
       <Image src={urbanPro} alt='urbanPro'></Image>
      </div>
      
      
    </div>
    {/* <!-- End Card --> */}

     {/* <!-- Card --> */}
     <div className="group flex flex-col h-full bg-white  border-gray-200 shadow-sm rounded-xl dark:bg-slate-900 dark:border-gray-700 dark:shadow-slate-700/[.7]  hover:-translate-y-10 hover:animate-bounce ">
      <div className="h-52 flex flex-col justify-center items-center rounded-t-xl">
       <Image src={learnPick} className='sm:h-10 h-7 w-60 lg:h-auto' alt='learnPick'></Image>
      </div>
     
      
    </div>
    {/* <!-- End Card --> */}


     {/* <!-- Card --> */}
     <div className="group flex flex-col h-full bg-white  border-gray-200 shadow-sm rounded-xl dark:bg-slate-900 dark:border-gray-700 dark:shadow-slate-700/[.7]  hover:-translate-y-10 hover:animate-bounce ">
      <div className="h-52 flex flex-col justify-center items-center rounded-t-xl">
       <Image src={tutorGrip} className='h-10 w-48 lg:h-auto lg:w-auto' alt='tutorGrip'></Image>
      </div>
     
      
    </div>
    {/* <!-- End Card --> */}




    {/* <!-- Card --> */}
    <div className="group flex flex-col h-full bg-white  border-gray-200 shadow-sm rounded-xl dark:bg-slate-900 dark:border-gray-700 dark:shadow-slate-700/[.7] hover:-translate-y-10 hover:animate-bounce">
      <div className="h-52 flex flex-col justify-center items-center  rounded-t-xl">
      <Image src={privateTutor} alt='privateTutor'></Image>
      </div>
      
      
    </div>
    {/* <!-- End Card --> */}

    {/* <!-- Card --> */}
    <div className="group flex flex-col h-full bg-white  border-gray-200 shadow-sm rounded-xl dark:bg-slate-900 dark:border-gray-700 dark:shadow-slate-700/[.7] hover:-translate-y-10 hover:animate-bounce">
      <div className="h-52 flex flex-col justify-center items-center rounded-t-xl">
      <Image src={teacheron} alt='teacheron'></Image>
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

export default Clients
