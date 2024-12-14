import React from 'react'
import { IoLogoFacebook } from "react-icons/io5";
import { LuInstagram } from "react-icons/lu";
import { IoLogoYoutube } from "react-icons/io5";
import s1 from '../assets/s1.jpg';
import s2 from '../assets/s2.jpg';
import s3 from '../assets/s3.jpg';
import s5 from '../assets/s5.jpg';
import s4 from '../assets/s4.jpg';
import book from '../assets/book-removebg-preview.png'

const HeroSection = () => {
  const images = [
    s5,
    s4,
    s2,
    s3,
    s4,
    s1,
    s5,
    s4,
    s2,
    s3,
    s4,
    s1
  ];

  return (
    <section id='home' className=' min-h-screen my-16 max-sm:bg-center max-lg:bg-center'>
      <div className=' text-center  '>
        <h1 className='font-sans text-3xl font-semibold sm:text-6xl mb-3 sm:mb-7 '>The Yenopoya World</h1>
        <p className='font-sans opacity-75 text-sm sm:text-3xl'>A supporting and stimulating environment that fosters academic excellence.<br />
          character development, and a love for learning.  </p>
      </div>
      <div className='flex justify-end items-end text-right max-w-full w-full mt-6'>
        <div className='flex flex-row gap-4 mx-auto sm:mx-16 '>
          <IoLogoFacebook size={36} />
          <LuInstagram size={36} />
          <IoLogoYoutube size={36} />
        </div>
      </div>

      <div className='flex flex-row gap-4 overflow-x-auto mt-12 mx-4'>
        {images.map((item, ind) => {
          return <img src={item} className='w-52 h-auto' />
        })}
      </div>

      <div className='mt-28 sm:mt-44'>
        <div className='text-left ml-4 sm:ml-40 leading-none '>
          <h2 className='font-sans font-bold text-4xl sm:text-7xl mb-3 '>At A Glance</h2>
          <p className='font-sans opacity-75 text-sm sm:text-2xl'>character development, and a love of learning.</p>
        </div>
        <div className=' mt-16 flex mx-auto flex-col lg:flex-row border border-gray-700 w-fit max-w-full  justify-center items-center  px-12 py-10 gap-16 '>
          <div className='text-center'>
            <h1 className='font-sans font-bold text-5xl text-[#D1DEFC]'>1,954</h1>
            <p className='font-sans text-2xl opacity-60'>Year Founded</p>
          </div>
          <div className='text-center'>
            <h1 className='font-sans font-bold text-5xl text-[#D1DEFC]'>934</h1>
            <p className='font-sans text-2xl opacity-60'>Certified teachers</p>
          </div>
          <div className='text-center'>
            <h1 className='font-sans font-bold text-5xl text-[#D1DEFC]'>65,409</h1>
            <p className='font-sans text-2xl opacity-60'>Graduated Students</p>
          </div>
          <div className='text-center'>
            <h1 className='font-sans font-bold text-5xl text-[#D1DEFC]'>289</h1>
            <p className='font-sans text-2xl opacity-60'>Awards winner</p>
          </div>
        </div>
        <div className='w-full  py-16 px-1 sm:px-8 sm:p-32 lg:p-32 text-center md:text-right'>
          <p className='font-sans font-bold text-sm sm:text-4xl opacity-70 '>"Strive for excellence, Inspire for Life"</p>
        </div>

        <div className='bg-[#D0EDFC] max-w-full h-[400px] w-[100%]  border border-gray-300  justify-center items-center flex text-center relative'>
          <img src={book} className='absolute left-5 -top-6  bottom-3 md:bottom-60 w-36 md:w-72 rotate-12' />
          <div className='flex flex-col lg:flex-col xl:flex-row items-center justify-center text-center gap-6 ml-2  mt-20 w-fit float-right '>
            <h1 className='font-sans text-xl lg:text-5xl font-bold opacity-70'>Our Education like no other</h1>
            <button className='font-sans bg-white px-4 p-2 text-sm sm:2xl font-bold' >ENROLL</button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection