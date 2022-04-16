import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../../firebase.init';
import logo from '../../../red-onion/images/logo2.png'

const Navbar = () => {
    const [user] = useAuthState(auth);

    const handleSignOut = () => {
        signOut(auth);
    }

    return (
        <nav className='w-4/5 mx-auto my-5 flex justify-between'>
            <button to='/'>
                <img className='h-12' src={logo} alt="" />
            </button>
            <div className='flex text-lg'>
                {
                    user ?
                    <button onClick={handleSignOut} className='bg-red-500 rounded-full px-7 py-1 ml-5 my-auto text-white hover:bg-red-600'>Logout</button>
                        :
                        <div>
                            <Link to='/login' className='my-auto'>Login</Link>
                            <Link to='/register' className='bg-red-500 rounded-full px-7 py-1 ml-5 my-auto text-white hover:bg-red-600'>Sign Up</Link>
                        </div>
                }
            </div>
        </nav>
    );
};

export default Navbar;