import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter, FaYoutube } from "react-icons/fa";

const Footer = () => {
    return (
        <div className=' bg-lime-100 '>
            <div className='grid grid-cols-2 lg:grid-cols-3 mt-10 p-16'>
                <div className=' lg:mx-auto'>
                    <h2 className='font-bold text-[#2e8d05] mb-2'>HELP</h2>
                    <Link className='text-[12px] font-bold text-zinc-900'>Home</Link><br />
                    <Link className='text-[12px] font-bold text-zinc-900'>About</Link><br />
                    <Link className='text-[12px] font-bold text-zinc-900'>Blog</Link><br />
                    <Link className='text-[12px] font-bold text-zinc-900'>Contact</Link>

                </div>
                <div className='lg:mx-auto'>
                    <h2 className='font-bold text-[#2e8d05] mb-2'>POLICIES</h2>
                    <Link className='text-[12px] font-bold text-zinc-900'>Privacy Policy</Link><br />
                    <Link className='text-[12px] font-bold text-zinc-900'>Shipping Policy</Link><br />
                    <Link className='text-[12px] font-bold text-zinc-900'>Refund Policy</Link><br />
                    <Link className='text-[12px] font-bold text-zinc-900'>Terms and Condition</Link>
                </div>
                <div className='lg:mx-auto'>
                    <h2 className='font-bold text-[#2e8d05] mb-2'>Find Us</h2>
                    <div className='flex gap-2 text-neutral-900'>
                    <FaFacebook />
                    <FaInstagram />
                    <FaYoutube />
                    <FaTwitter />
                    <FaLinkedin />
                    </div>
                </div>
            </div>
            <p className='text-[8px] text-center py-2'>Copy right by Mazed</p>
        </div>
    );
};

export default Footer;