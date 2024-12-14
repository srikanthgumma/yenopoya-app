import React from 'react'
import s1 from '../assets/s1.jpg';
import s2 from '../assets/s2.jpg';
import s3 from '../assets/s3.jpg';
import s5 from '../assets/s5.jpg';
import s4 from '../assets/s4.jpg';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';


const Testimonals = () => {
  const images = [
    s5,
    s4,
    s2,
    s3,
    s4,
    s1
  ];
  const reviews = [
    { text: "Our mission at The Yenopoya World is to inspire and empower every student to achieve their full potential, become lifelong learners, and make positive contributions to society. We areOur mission at The Yenopoya World is to inspire and empower every student to achieve their full potential," },
    { text: "Our mission at The Yenopoya World is to inspire and empower every student to achieve their full potential, become lifelong learners, and make positive contributions to society. We areOur mission at The Yenopoya World is to inspire and empower every student to achieve their full potential," },
    { text: "Our mission at The Yenopoya World is to inspire and empower every student to achieve their full potential, become lifelong learners, and make positive contributions to society. We areOur mission at The Yenopoya World is to inspire and empower every student to achieve their full potential," },
    { text: "Our mission at The Yenopoya World is to inspire and empower every student to achieve their full potential, become lifelong learners, and make positive contributions to society. We areOur mission at The Yenopoya World is to inspire and empower every student to achieve their full potential," },
    { text: "Our mission at The Yenopoya World is to inspire and empower every student to achieve their full potential, become lifelong learners, and make positive contributions to society. We areOur mission at The Yenopoya World is to inspire and empower every student to achieve their full potential," },
  ];
  return (
    <section className=' w-full mb-32 bg-white'>
      <div className='bg-white flex flex-col md:flex-row  gap-5 justify-center p-1 md:p-5 grid-cols-4 '>
        <div className='flex flex-col justify-center items-start mt-6 w-[100%] lg:w-[40%]'>
          <h1 className='font-sans font-bold text-4xl mb-2'>Testimonals</h1>
          <p className='font-sans text-sm md:text-xl mb-16 md:mb-48'>Contact Us for More Information</p>
          <div className=' flex flex-row overflow-auto gap-5 w-full p-2 '>
            {/* <Carousel
              autoPlay={true}
              interval={3000}
              infiniteLoop={true}
              className='text-center mx-auto'
            > */}
              <div className=' p-2 text-center'>
                <p className='font-sans text-xl'>make positive contributions to society. We are Our mission at The Yenopoya World is to inspire and empower every student to achieve their full potential.</p>
              </div>
              {/* <div className=' p-2 text-center'>
                <p className='font-sans text-xl'>make positive contributions to society. We are Our mission at The Yenopoya World is to inspire and empower every student to achieve their full potential, We areOur mission at The Yenopoya World is to inspire and empower every student to achieve their full potential,</p>
              </div>
              <div className=' p-2 text-center'>
                <p className='font-sans text-xl'>make positive contributions to society. We are Our mission at The Yenopoya World is to inspire and empower every student to achieve their full potential, We areOur mission at The Yenopoya World is to inspire and empower every student to achieve their full potential,</p>
              </div> */}
            {/* </Carousel> */}
          </div>
        </div>

        <div className=' h-80 md:h-[850px] overflow-y-auto'>
          {images.map((image, index) => (
            <img src={image} alt={`Slide ${index}`} className=" w-[100%] max-w-[680px] h-auto md:h-[300px] object-cover" />
          ))}
        </div>
        <div className='h-[850px] hidden lg:block overflow-y-auto'>
          {images.map((image, index) => (
            <img src={image} alt={`Slide ${index}`} className="w-[100%] max-w-[550px] h-[300px] object-cover" />
          ))}
        </div>
      </div>
    </section >
  )
}

export default Testimonals