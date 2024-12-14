import React from 'react'
import book2 from '../assets/book2.png'
import { GrSend } from "react-icons/gr";
import { GiChemicalDrop } from "react-icons/gi";
import { LuGraduationCap } from "react-icons/lu";
import { CiBank } from "react-icons/ci";


const Client = () => {
  return (
    <section id="testimonies" class=" bg-transparent">
      <div className='flex flex-col mx-auto mb-14 md:mb-28 justify-center items-center'>
        <GrSend size={70} className='opacity-25' />
        <h1 className='font-sans text-3xl md:text-6xl font-bold mb-1 md:mb-4'>Inquire Today</h1>
        <p className='font-sans text-sm md:text-2xl'>Contact Us for More Information</p>
      </div>
      <div className='flex flex-col md:flex-row  shadow-2xl my-4 md:my-16'>
        <div className='bg-[#C6E6EB] p-10 md:p-20 w-[100%] md:w-[60%] flex flex-col gap-5'>
          <h1 className='font-sans text-xl md:text-4xl font-bold mb-1 md:mb-6'>Enriching Communities</h1>
          <p className='font-sans text-sm md:text-3xl leading-snug'>Our mission at The Yenopoya World is to inspire and
            empower every student to achieve their full potential,
            become lifelong learners, and make positive contributions
            to society. We are
          </p>
          <button className='bg-white py-2 rounded-lg px-5 text-xl md:text-2xl w-fit'>Learn More</button>
          <div className='flex justify-end items-end'>
            <img src={book2} className='w-44 h-44' />
          </div>
        </div>
        <div className='w-[100%] md:w-[40%] h-full flex flex-col justify-between'>
          <div className=' pl-8md:pl-20 border-b-2 p-8 border-gray-400 max-w-full border-l-8 border-l-[#7A556E]'>
            <h1 className='font-sans font-bold text-xl md:text-3xl'>Mission</h1>
            <p className='font-sans text-sm md:text-2xl text-gray-600'>Our mission at The Yenopoya World is to inspire and</p>
          </div>
          <div className='pl-8md:pl-20 border-b-2 p-8 border-gray-400'>

            <h1 className='font-sans font-bold text-xl md:text-3xl'>Mission</h1>
            <p className='font-sans text-sm md:text-2xl text-gray-600' >Our mission at The Yenopoya World is to inspire and</p>
          </div>
          <div className='pl-8md:pl-20 border-b-2 p-8 border-gray-400'>

            <h1 className='font-sans font-bold text-xl md:text-3xl'>Mission</h1>
            <p className='font-sans text-sm md:text-2xl text-gray-600' >Our mission at The Yenopoya World is to inspire and</p>
          </div>
          <div className='pl-8md:pl-20 border-b-2 p-8 border-gray-400'>

            <h1 className='font-sans font-bold text-xl md:text-3xl'>Mission</h1>
            <p className='font-sans text-sm md:text-2xl text-gray-600' >Our mission at The Yenopoya World is to inspire and</p>
          </div>
          <div className=' pl-8md:pl-20 p-8 border-gray-400'>

            <h1 className='font-sans font-bold text-xl md:text-3xl'>Mission</h1>
            <p className='font-sans text-sm md:text-2xl text-gray-600' >Our mission at The Yenopoya World is to inspire and</p>
          </div>
        </div>
      </div>

      <div className='flex flex-col sm:flex-col md:flex-col lg:flex-row mx-3 md:mx-28 my-36 gap-14 grid-rows-3 justify-center'>
        <div className='flex flex-col md:flex-row items-center justify-center gap-4 bg-[#C9E9EE] hover:bg-[#2AACA0] p-24'>
          <h1 className='font-sans text-4xl text-white font-bold'>ACADEMICS</h1>
          <GiChemicalDrop size={80} color='white' />
        </div>
        <div className='flex flex-col md:flex-row items-center justify-center gap-4 bg-[#C9E9EE] hover:bg-[#FFC83E] p-28'>
          <h1 className='font-sans text-4xl text-white font-bold'>STUDENTS</h1>
          <LuGraduationCap size={80} color='white' />
        </div>
        <div className='flex flex-col md:flex-row items-center justify-center gap-4 bg-[#C9E9EE] hover:bg-[#2AACA0] p-28'>
          <h1 className='font-sans text-4xl text-white font-bold'>ADMISSIONS</h1>
          <CiBank size={80} color='white' />
        </div>
      </div>
      <div className= 'shadow-2xl bg-service-pattern my-28 p-8 md:p-60 justify-center h-72 items-center flex flex-col w-[100%] max-w-full bg-cover bg-no-repeat'>
       <div className='  box-content flex flex-col justify-center items-center gap-1 p-2'>
       <h1 className='  font-sans text-sm whitespace-nowrap font-bold md:text-6xl text-white'>Have Questions or need assistance</h1>
        <p className='font-sans text-white text-center text-sm md:text-2xl'>Together, let's embark on an exiting journey of education and exploration!</p>
        <button className='bg-white px-4 py-1 rounded-lg md:px-10 md:py-2 text-sm md:text-4xl text-center text-black mt-4 w-fit'>CONTACT US</button>
        </div>
      </div>
    </section>
  )
}

export default Client