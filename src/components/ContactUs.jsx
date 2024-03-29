"use client"
import { useState } from "react";

const ContactUs = () => {


  const [category1, setCategory1] = useState('');
  const [category2, setCategory2] = useState('');
  const [category3, setCategory3] = useState('');
  const [category4, setCategory4] = useState('');

  const handleCategoryChange1 = (category1) => {
     setCategory1(category1);
     console.log(category1);
 }

 const handleCategoryChange2 = (category2) => {
  setCategory2(category2);
  console.log(category2);
}

const handleCategoryChange3 = (category3) => {
  setCategory3(category3);
  console.log(category3);
}


const handleCategoryChange4 = (category4) => {
  setCategory4(category4);
  console.log(category4);
}


  return (
    <div> 
      {/* <!-- Contact Us --> */}
<div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
  <div className="max-w-2xl lg:max-w-5xl mx-auto">
    <div className="text-center">
      <h1 className="text-3xl font-bold text-gray-800 sm:text-4xl dark:text-white">
        Contact us
      </h1>
      <p className="mt-1 text-gray-600 dark:text-gray-400">
        We&apos;d love to talk about how we can help you.
      </p>
    </div>

    <div className="mt-12 grid items-center lg:grid-cols-2 gap-6 lg:gap-16">
      {/* <!-- Card --> */}
      <div style={{border:"2px solid blue"}} className="flex flex-col border rounded-xl p-4 sm:p-6 lg:p-8 dark:border-gray-700">
        <h2 className="mb-8 text-2xl text-center font-semibold text-blue-800 dark:text-gray-200">
          Fill in the form
        </h2>

        <form action="https://api.web3forms.com/submit" target="_blank" method="POST">

        <input type="hidden" name="access_key" value="24ae8449-c7be-42bc-a382-85d5f1d06b1f"/>

          <div className="grid gap-4">
            {/* <!-- Grid --> */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label for="hs-firstname-contacts-1" className="sr-only">First Name</label>
                <input style={{border:"1px solid blue"}} type="text" name="hs-firstname-contacts-1" id="hs-firstname-contacts-1" className="py-3 px-4 block w-full  border-blue-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600" placeholder="First Name" required  />
              </div>

              <div>
                <label for="hs-lastname-contacts-1" className="sr-only">Last Name</label>
                <input style={{border:"1px solid blue"}} type="text" name="hs-lastname-contacts-1" id="hs-lastname-contacts-1" className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600" placeholder="Last Name" required />
              </div>



            <div className="bg-white  mx-auto">
            <label className="text-blue-600  text-center mb-5 font-medium">Web Development</label>
               <select className="bg-white ml-2 flex px-4 py-3 border border-blue-600 rounded-xl" name="category1" value={category1} onChange={event => handleCategoryChange1(event.target.value)} required>
                  <option id="0" >yes</option>
                  <option id="1" >no</option>
              </select>
            </div>


            <div className="mx-auto">
               <select className="bg-white lg:mt-7  px-4 py-3 border border-blue-600 rounded-xl" name="category2" value={category2} onChange={event => handleCategoryChange2(event.target.value)}>
                  <option id="2" >None</option>
                  <option id="3" >Startup</option>
                  <option id="4" >Team</option>
                  <option id="5" >Enterprise</option>
              </select>
            </div>

{/* ---------------------------------------------- */}
            {/* <div className="bg-white flex mt-7 sm:gap-10 gap-2 sm:mb-10 ">
              
                <label className="text-blue-600  mb-5 font-medium">Web Development</label>
              
                <select className="bg-white px-4 py-2 border border-blue-600 rounded-xl" name="category1" value={category1} onChange={event => handleCategoryChange1(event.target.value)} required>
                  <option id="0" >yes</option>
                  <option id="1" >no</option>
              </select>
             
                <select className="bg-white px-4 py-3 border border-blue-600 rounded-xl" name="category2" value={category2} onChange={event => handleCategoryChange2(event.target.value)} >
                  <option id="2" >None</option>
                  <option id="3" >Startup</option>
                  <option id="4" >Team</option>
                  <option id="5" >Enterprise</option>
              </select>
              
            </div>
            <br/>


            <div className="bg-white flex sm:gap-14 gap-2 mb-7 ">
            <label className="text-blue-600  font-medium">Cyber Security</label>
               <select className="bg-white  px-4 py-3 border border-blue-600 rounded-xl" name="category3" value={category3} onChange={event => handleCategoryChange3(event.target.value)} required>
                  <option id="6" >yes</option>
                  <option id="7" >no</option>
              </select>
              <select className="bg-white px-4 py-3 border border-blue-600 rounded-xl" name="category4" value={category4} onChange={event => handleCategoryChange4(event.target.value)}>
                  <option id="8" >None</option>
                  <option id="9" >Free</option>
                  <option id="10" >Enterprise</option>
              </select>
            </div> */}

{/* -------------------------------------------------------------------------------------- */}



            <div className="bg-white mx-auto">
            <label className="text-blue-600 text-center font-medium">Cyber Security</label>
               <select className="bg-white ml-2 flex px-4 py-3 border border-blue-600 rounded-xl" name="category3" value={category3} onChange={event => handleCategoryChange3(event.target.value)} required>
                  <option id="6" >yes</option>
                  <option id="7" >no</option>
              </select>
            </div>


            <div className="mx-auto">
               <select className="bg-white px-4 lg:mt-6 py-3 border border-blue-600 rounded-xl" name="category4" value={category4} onChange={event => handleCategoryChange4(event.target.value)}>
                  <option id="8" >None</option>
                  <option id="9" >Free</option>
                  <option id="10" >Enterprise</option>
              </select>
            </div>
   

            

             
            </div>
            {/* <!-- End Grid --> */}

            <div>
              <label for="hs-email-contacts-1" className="sr-only">Email</label>
              <input style={{border:"1px solid blue"}} type="email" name="hs-email-contacts-1" id="hs-email-contacts-1" autocomplete="email" className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600" placeholder="Email" required />
            </div>

            <div>
              <label for="hs-phone-number-1" className="sr-only">Phone Number</label>
              <input style={{border:"1px solid blue"}} type="text" name="hs-phone-number-1" id="hs-phone-number-1" className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600" placeholder="Phone Number"/>
            </div>

            <div>
              <label for="hs-about-contacts-1" className="sr-only">Details</label>
              <textarea style={{border:"1px solid blue"}} id="hs-about-contacts-1" name="hs-about-contacts-1" rows="4" className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600" placeholder="Details" required ></textarea>
            </div>
          </div>
          {/* <!-- End Grid --> */}

          <div className="mt-4 grid">
            <button type="submit" className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600">Send inquiry</button>
          </div>

          <div className="mt-3 text-center">
            <p className="text-sm text-gray-500">
              We&apos;ll get back to you in 1-2 business days.
            </p>
          </div>
        </form>
      </div>
      {/* <!-- End Card --> */}

      <div className="divide-y lg:-mt-20 divide-gray-200 dark:divide-gray-800">
        {/* <!-- Icon Block --> */}
        <div className="flex gap-x-7 py-6">
          <svg className="flex-shrink-0 w-6 h-6 mt-1.5 text-xl text-blue-800 dark:text-gray-200" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/><path d="M12 17h.01"/></svg>
          <div className="grow">
            <h3 className="font-semibold text-xl text-blue-800 dark:text-gray-200">Knowledgebase</h3>
            <p className="mt-1 mb-10 text-md text-gray-500">We&apos;re here to help with any questions or code.</p>
            {/* <a className="mt-2 inline-flex items-center gap-x-2 text-sm font-medium text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" href="#">
              Contact support
              <svg className="flex-shrink-0 w-2.5 h-2.5 transition ease-in-out group-hover:translate-x-1" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M0.975821 6.92249C0.43689 6.92249 -3.50468e-07 7.34222 -3.27835e-07 7.85999C-3.05203e-07 8.37775 0.43689 8.79749 0.975821 8.79749L12.7694 8.79748L7.60447 13.7596C7.22339 14.1257 7.22339 14.7193 7.60447 15.0854C7.98555 15.4515 8.60341 15.4515 8.98449 15.0854L15.6427 8.68862C16.1191 8.23098 16.1191 7.48899 15.6427 7.03134L8.98449 0.634573C8.60341 0.268455 7.98555 0.268456 7.60447 0.634573C7.22339 1.00069 7.22339 1.59428 7.60447 1.9604L12.7694 6.92248L0.975821 6.92249Z" fill="currentColor"/>
              </svg>
            </a> */}
          </div>
        </div>
        {/* <!-- End Icon Block --> */}

        {/* <!-- Icon Block --> */}
        {/* <div className="flex gap-x-7 py-6">
          <svg className="flex-shrink-0 w-6 h-6 mt-1.5 text-gray-800 dark:text-gray-200" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 9a2 2 0 0 1-2 2H6l-4 4V4c0-1.1.9-2 2-2h8a2 2 0 0 1 2 2v5Z"/><path d="M18 9h2a2 2 0 0 1 2 2v11l-4-4h-6a2 2 0 0 1-2-2v-1"/></svg>
          <div className="grow">
            <h3 className="font-semibold text-gray-800 dark:text-gray-200">FAQ</h3>
            <p className="mt-1 text-sm text-gray-500">Search our FAQ for answers to anything you might ask.</p>
            <a className="mt-2 inline-flex items-center gap-x-2 text-sm font-medium text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" href="#">
              Visit FAQ
              <svg className="flex-shrink-0 w-2.5 h-2.5 transition ease-in-out group-hover:translate-x-1" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M0.975821 6.92249C0.43689 6.92249 -3.50468e-07 7.34222 -3.27835e-07 7.85999C-3.05203e-07 8.37775 0.43689 8.79749 0.975821 8.79749L12.7694 8.79748L7.60447 13.7596C7.22339 14.1257 7.22339 14.7193 7.60447 15.0854C7.98555 15.4515 8.60341 15.4515 8.98449 15.0854L15.6427 8.68862C16.1191 8.23098 16.1191 7.48899 15.6427 7.03134L8.98449 0.634573C8.60341 0.268455 7.98555 0.268456 7.60447 0.634573C7.22339 1.00069 7.22339 1.59428 7.60447 1.9604L12.7694 6.92248L0.975821 6.92249Z" fill="currentColor"/>
              </svg>
            </a>
          </div>
        </div> */}
        {/* <!-- End Icon Block --> */}

        {/* <!-- Icon Block --> */}
        {/* <div className=" flex gap-x-7 py-6">
          <svg className="flex-shrink-0 w-6 h-6 mt-1.5 text-gray-800 dark:text-gray-200" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m7 11 2-2-2-2"/><path d="M11 13h4"/><rect width="18" height="18" x="3" y="3" rx="2" ry="2"/></svg>
          <div className="grow">
            <h3 className="font-semibold text-gray-800 dark:text-gray-200">Developer APIs</h3>
            <p className="mt-1 text-sm text-gray-500">Check out our development quickstart guide.</p>
            <a className="mt-2 inline-flex items-center gap-x-2 text-sm font-medium text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" href="#">
              Contact sales
              <svg className="flex-shrink-0 w-2.5 h-2.5 transition ease-in-out group-hover:translate-x-1" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M0.975821 6.92249C0.43689 6.92249 -3.50468e-07 7.34222 -3.27835e-07 7.85999C-3.05203e-07 8.37775 0.43689 8.79749 0.975821 8.79749L12.7694 8.79748L7.60447 13.7596C7.22339 14.1257 7.22339 14.7193 7.60447 15.0854C7.98555 15.4515 8.60341 15.4515 8.98449 15.0854L15.6427 8.68862C16.1191 8.23098 16.1191 7.48899 15.6427 7.03134L8.98449 0.634573C8.60341 0.268455 7.98555 0.268456 7.60447 0.634573C7.22339 1.00069 7.22339 1.59428 7.60447 1.9604L12.7694 6.92248L0.975821 6.92249Z" fill="currentColor"/>
              </svg>
            </a>
          </div>
        </div> */}
        {/* <!-- End Icon Block --> */}

        {/* <!-- Icon Block --> */}
        <div className=" flex gap-x-7 py-6">
          <svg className="flex-shrink-0 text-xl w-6 h-6 mt-1.5 text-blue-800 dark:text-gray-200" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21.2 8.4c.5.38.8.97.8 1.6v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V10a2 2 0 0 1 .8-1.6l8-6a2 2 0 0 1 2.4 0l8 6Z"/><path d="m22 10-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 10"/></svg>
          <div className="grow">
            <h3 className="font-semibold text-xl  text-blue-800 dark:text-gray-200">Contact us by email</h3>
            <p className="mt-1 text-md text-gray-500">If you wish to write us an email instead please use</p>
            <a className="mt-2 inline-flex items-center gap-x-2 text-lg font-extrabold text-black hover:text-gray-500 dark:text-gray-400 dark:hover:text-gray-200 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" href="#">
            info@cystorm.solutions
            </a>
          </div>
        </div>
        {/* <!-- End Icon Block --> */}
      </div>
    </div>
  </div>
</div>
{/* <!-- End Contact Us --> */}
    </div>
  )
}

export default ContactUs
