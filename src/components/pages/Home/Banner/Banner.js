import React from 'react';
import banner from '../../../../red-onion/images/bannerbackground.png'

const Banner = () => {
    return (
        <div className='relative'>
            <div className='text-3xl absolute z-10 top-1/2 w-full mx-auto'>
                <p className='text-3xl font-semibold mb-3'>Best food waiting for you!</p>
                <div className='relative w-1/3 mx-auto'>
                    <input className='relative w-full border border-gray-300 rounded-full px-3' type="text" />
                    <button className='bg-red-500 rounded-full px-7 py-1 text-white text-xl hover:bg-red-600 absolute right-0'>Search</button>
                </div>
            </div>
            <img src={banner} alt="" />
        </div>
    );
};

export default Banner;