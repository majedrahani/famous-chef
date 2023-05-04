import React from 'react';
import bg from '../../public/bg.png'
import NavigationBer from './Navigationber';
import { FaArrowRight } from "react-icons/fa";

const Header = () => {
    return (
        <div className="bg-[url('https://i.ibb.co/2sShGkz/bg.png')] text-[#2e8d05]">
            <NavigationBer></NavigationBer>
            <div className='pt-[250px] pb-[50px]'>
                <div className='ml-24 p-8 bg-white w-[350px] bg-opacity-80'>
                    <p className='font-bold text-3xl'>Make some unique recipes at home</p>

                    <small>Contact</small>
                    <p>Phone: +0347347</p>
                    <p>Email: famous@chef.columns-6</p>
                    <button className='text-white  font-bold mt-2 bg-[#2e8d05] py-2 px-4 flex gap-2 my-auto' > Explore More <FaArrowRight className='my-auto' /> </button>

                </div>
            </div>
        </div>
    );
};

export default Header;