import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../red-onion/images/logo2.png'

const Navbar = () => {
    return (
        <nav className='w-4/5 mx-auto my-5 flex justify-between'>
            <Link to='/'>
                <img className='h-12' src={logo} alt="" />
            </Link>
            <div className='flex text-lg'>
                <Link to='/login' className='my-auto'>Login</Link>
                <Link to='/register' className='bg-red-500 rounded-full px-7 py-1 ml-5 my-auto text-white hover:bg-red-600'>Sign Up</Link>
            </div>
        </nav>
    );
};

export default Navbar;