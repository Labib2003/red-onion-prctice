import React from 'react';
import logo from '../../../red-onion/images/logo2.png'

const Navbar = () => {
    return (
        <nav className='w-4/5 mx-auto my-5 flex justify-between'>
            <div>
                <img className='h-12' src={logo} alt="" />
            </div>
            <div className='flex text-lg'>
                <p className='my-auto'>Login</p>
                <p className='bg-red-500 rounded-full px-7 py-1 ml-5 my-auto text-white'>Sign Up</p>
            </div>
        </nav>
    );
};

export default Navbar;