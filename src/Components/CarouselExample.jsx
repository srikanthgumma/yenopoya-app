import React from 'react';
import s1 from '../assets/s1.jpg';
import s2 from '../assets/s2.jpg';
import s3 from '../assets/s3.jpg';
import s5 from '../assets/s5.jpg';
import s4 from '../assets/s4.jpg';

const CarouselExample = () => {
    const images = [
        s5,
        s4,
        s2,
        s3,
        s4,
        s1
    ];
    return (
        <div className=" max-w-full overflow-x-auto ">
            <div className='flex flex-row gap-4 px-3 '>
                {images.map((item, ind) => {
                    return <img src={item} className='object-cover aspect-auto w-[100%] sm:w-[35%] sm:h-auto h-[300px]' />
                })}
            </div>
        </div>
    );
};

export default CarouselExample;
