import React from 'react';
import banner from '../../../../red-onion/images/bannerbackground.png'

const Banner = () => {
    return (
        <div className='relative'>
            <p ></p>
            <div className='text-3xl absolute z-10 top-1/2 w-full mx-auto'>
                <p className='text-3xl font-semibold mb-3'>Best food waiting for you!</p>
                <div>
                    <input className='relative border border-gray-300 rounded-full top-1' type="text" />
                    <button className='bg-red-500 rounded-full px-7 py-1 text-white text-xl'>Search</button>
                </div>
            </div>
            <img src={banner} alt="" />
        </div>
    );
};

export default Banner;