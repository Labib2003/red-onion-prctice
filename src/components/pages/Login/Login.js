import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../red-onion/images/logo2.png';

const Login = () => {
    return (
        <div className='w-1/3 mx-auto'>
            <img className='w-2/6 mx-auto mb-10' src={logo} alt="" />
            <form className='flex flex-col space-y-3 w-full mx-auto'>
                <input className='border border-gray-400 rounded-md text-xl p-3' type="email" placeholder='Email'/>
                <input className='border border-gray-400 rounded-md text-xl p-3' type="password" placeholder='Password'/>
                <input className='w-full bg-red-500 rounded-md p-3 text-white' type="submit" value="Login" />
            </form>
            <p className='mt-5'>New to Red Onion? <Link className='text-red-500' to='/register'>Register</Link></p>
        </div>
    );
};

export default Login;