import React, { useRef } from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import logo from '../../../red-onion/images/logo2.png';

const Login = () => {
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    const emailRef = useRef();
    const passwordRef = useRef();
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        signInWithEmailAndPassword(email, password);
    }
    if (user) {
        navigate('/');
    }

    return (
        <div className='w-1/3 mx-auto'>
            <img className='w-2/6 mx-auto mb-10' src={logo} alt="" />
            <form onSubmit={handleSubmit} className='flex flex-col space-y-3 w-full mx-auto'>
                <input ref={emailRef} className='border border-gray-400 rounded-md text-xl p-3' type="email" placeholder='Email' />
                <input ref={passwordRef} className='border border-gray-400 rounded-md text-xl p-3' type="password" placeholder='Password' />
                <p className='text-red-500 font-semibold'>{error ? error.message : ''}</p>
                <input className='w-full bg-red-500 hover:bg-red-600 rounded-md p-3 text-white' type="submit" value="Login" />
            </form>
            <p className='mt-5'>New to Red Onion? <Link className='text-red-500' to='/register'>Register</Link></p>
        </div>
    );
};

export default Login;