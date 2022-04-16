import React, { useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import logo from '../../../red-onion/images/logo2.png'
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';

const Register = () => {
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);
    const nameRef = useRef("");
    const emailRef = useRef("");
    const passwordRef = useRef("");
    const confirmPasswordRef = useRef("");
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        const name = nameRef.current.value;
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        const confirmPassword = confirmPasswordRef.current.value;
        if (password === confirmPassword) {
            createUserWithEmailAndPassword(email, password);
        }
        else {
            alert("Password did not match");
        };
        if (user) {
            navigate('/');
        }
    }

    return (
        <div>
            <div className='w-1/3 mx-auto'>
                <img className='w-2/6 mx-auto mb-10' src={logo} alt="" />
                <form onSubmit={handleSubmit} className='flex flex-col space-y-3 w-full mx-auto'>
                    <input ref={nameRef} className='border border-gray-400 rounded-md text-xl p-3' type="text" placeholder='Name' required />
                    <input ref={emailRef} className='border border-gray-400 rounded-md text-xl p-3' type="email" placeholder='Email' required />
                    <input ref={passwordRef} className='border border-gray-400 rounded-md text-xl p-3' type="password" placeholder='Password' required />
                    <input ref={confirmPasswordRef} className='border border-gray-400 rounded-md text-xl p-3' type="password" placeholder='Confirm Password' required />
                    <p className='text-red-500 font-semibold'>{error ? error.message : ''}</p>
                    <input className='w-full bg-red-500 hover:bg-red-600 rounded-md p-3 text-white' type="submit" value="Register" />
                </form>
                <p className='mt-5'>Already have an account? <Link className='text-red-500' to='/login'>Login</Link></p>
            </div>
        </div>
    );
};

export default Register;