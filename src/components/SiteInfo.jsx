import React from 'react';
import { FaUserAlt,FaScroll,FaAddressBook } from "react-icons/fa";

const SiteInfo = () => {
    return (
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-2 px-20 mx-auto mt-16'>
            <div className='p-8 border border-lime-600 bg-lime-50 text-center rounded'>
                <FaUserAlt className='text-[35px] text-lime-600 mx-auto'></FaUserAlt>
                <h2 className='text-[20px] font-medium text-zinc-900'>Subscriber</h2>
                <p className='text-[50px] font-bold text-zinc-900'>30k+</p>
            </div>
            <div className='p-8 border border-lime-600 bg-lime-50 text-center rounded'>
                <FaScroll className='text-[35px] text-lime-600 mx-auto'></FaScroll>
                <h2 className='text-[20px] font-medium text-zinc-900'>Daily Visitor</h2>
                <p className='text-[50px] font-bold text-zinc-900'>50k+</p>
            </div>
            <div className='p-8 border border-lime-600 bg-lime-50 text-center rounded'>
                <FaAddressBook className='text-[35px] text-lime-600 mx-auto'></FaAddressBook>
                <h2 className='text-[20px] font-medium text-zinc-900'>Daily book</h2>
                <p className='text-[50px] font-bold text-zinc-900'>50/60</p>
            </div>
        </div>
    );
};

export default SiteInfo;