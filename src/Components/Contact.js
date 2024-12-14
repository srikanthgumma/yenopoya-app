import React from 'react';
import { HiOutlineMailOpen } from "react-icons/hi";
import book1 from '../assets/pbooks.png'

const Contact = () => {
  return (
    <section id='contact' className=' w-full font-sans max-w-full '>
      <div className='flex flex-col mx-auto mb-8 lg:mb-28 justify-center items-center'>
        <HiOutlineMailOpen size={70} className='opacity-25 my-2 -rotate-45' />
        <h1 className='font-sans text-3xl lg:text-6xl font-bold mb-2 lg:mb-4'>Inquire Today</h1>
        <p className='font-sans text-xl lg:text-2xl'>Contact Us for More Information</p>
      </div>

      <div className='bg-hero-pattern bg-no-repeat w-full max-w-full justify-center flex p-0 lg:p-56  bg-cover object-contain '>
        <form className='flex flex-col w-full max-w-[900px] justify-center items-center p-4 lg:p-16 bg-gray-200 bg-opacity-90  gap-4 rounded-3xl'>
          <input type='text' placeholder='Full Name' className='w-full text-3xl focus:border-none focus:border-blue-400  focus:border-b-4 font-sans p-2 rounded-lg lg:p-4 border border-b-4' />
          <input type='email' placeholder='Email' className='w-full text-3xl focus:border-none focus:border-blue-400  focus:border-b-4 font-sans p-2 rounded-lg lg:p-4border border-b-4' />
          <input type='text' placeholder='Mobile Number' className='w-full text-3xl focus:border-none focus:border-blue-400  focus:border-b-4 font-sans p-2 rounded-lg lg:p-4 border border-b-4' />
          <input type='text' placeholder='Grade' className='w-full text-3xl focus:border-none focus:border-blue-400  focus:border-b-4 font-sans p-2 rounded-lg lg:p-4 border border-b-4' />
          <input type='date' placeholder="Child's Year Of Birth" className='w-full text-3xl text-gray-300 focus:border-none focus:border-blue-400  focus:border-b-4 font-sans p-2 rounded-lg lg:p-4 border border-b-4' />
          <input type='text' placeholder='Message' className='w-full text-3xl focus:border-none focus:border-blue-400  focus:border-b-4 font-sans p-2 rounded-lg lg:p-4 border border-b-4' />
          <input type='submit' value='SUBMIT' className='px-6 rounded-lg py-2 text-xl lg:text-3xl font-sans bg-white' />
        </form>
      </div>
      <div className='flex justify-center items-center flex-col my-20'>
        <img src={book1} className='w-40 h-40' />
        <p className='font-sans text-2xl'>The Yenopoya World</p>
      </div>

      <div className='flex flex-col justify-center items-center p-10 lg:p-36 bg-[#C6E6EB]'>
        <h1 className='font-sans text-3xl lg:text-7xl text-white font-bold mb-4'>The Yenopoya World</h1>
        <p className='font-sans text-white text-center text-sm lg:text-3xl mb-6'>Our dedicated team of educators is commited to providing a<br />
          supportive and stimulating environment</p>
          <button className='font-sans bg-white px-6 py-2 text-sm rounded-xl lg:text-3xl font-bold'>CONTACT US</button>
      </div>
    </section>
  )
}

export default Contact 