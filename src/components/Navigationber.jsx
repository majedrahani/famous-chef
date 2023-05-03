import React from 'react';
import logo from '../../public/logo.png'
import { Link } from 'react-router-dom';

const NavigationBer = () => {
    return (
        <div className='flex justify-between px-8 mx-12 bg-white '>
            <img className='w-[120px]' src={logo} alt="" />
            <div className="flex gap-4 ">
                <Link to='/' className='my-auto'>Home</Link>
                <Link className='my-auto'>Blog</Link>
            </div>
            <div className='flex gap-4'>
            <h3 className='my-auto'>Profile</h3>
            <Link to="/loginLayout" className='btn-card my-4'>Login</Link>
            </div>
        </div>
    );
};

export default NavigationBer;