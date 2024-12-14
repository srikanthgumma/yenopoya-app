import React from 'react'
import { GiAlarmClock } from "react-icons/gi";
import s2 from '../assets/s2.jpg';
import s3 from '../assets/s3.jpg';
import s5 from '../assets/s5.jpg';


const Services = () => {
  return (
    <section id='services' className=' w-full min-h-screen bg-transparent max-lg:bg-center max-sm:bg-center'>
      <div className='flex flex-col mx-auto mb-10 md:mb-28 justify-center items-center'>
        <GiAlarmClock size={70} className='opacity-25' />
        <h1 className='font-sans text-3xl md:text-6xl font-bold mb-2 md:mb-4'>Discover Further</h1>
        <p className='font-sans text-sm md:text-2xl'>Explore More of The Yenopoya School Offerings</p>
      </div>

      <div className='bg-[#C9E9EE] p-4 lg:p-52 mx-auto text-center'>
        <div className=' flex flex-col lg:flex-row justify-center items-center  gap-24'>
          <div className='bg-white p-2 lg:p-16'>
            <img src={s3} className= ' w-full lg:w-96 h-80' />
            <div className='text-center py-10'>
              <h1 className='font-sans font-bold text-4xl mb-2'>Gallery</h1>
              <p className='font-sans text-xl'>A Glimpse into TYW</p>
            </div>
          </div>

          <div className='bg-white  p-2 lg:p-16'>
            <img src={s3} className='w-full lg:w-96 h-80' />
            <div className='text-center py-10'>
              <h1 className='font-sans font-bold text-4xl mb-2'>News</h1>
              <p className='font-sans text-xl'>Latest News and Updates</p>
            </div>
          </div>

          <div className='bg-white  p-2 lg:p-16'>
            <img src={s3} className='w-full lg:w-96 h-80' />
            <div className='text-center py-10'>
              <h1 className='font-sans font-bold text-4xl mb-2'>Blogs</h1>
              <p className='font-sans text-xl'>Latest News ans Updates</p>
            </div>
          </div>
        </div>
        <button className='bg-white px-6 py-2 my-12 text-2xl font-sans'>LEARN MORE</button>
      </div>
    </section>
  )
}


export default Services