import React from 'react';
import banner from '../assets/bannerCoppy.jpg';

function Banner() {
    return (
        <div className='container mt-32 w-full'>
            <div className='flex items-center justify-between w-full h-full'>
                <div className='min-h-[200px] md:min-h-[260px] bannerCoppy bg-cover bg-center w-full rounded-xl p-8 md:p-0'>
                    <img
                        src={banner}
                        alt='imagesNan'
                        className='w-full h-full object-cover rounded-xl'
                    />
                </div>
            </div>
        </div>
    );
}

export default Banner;
