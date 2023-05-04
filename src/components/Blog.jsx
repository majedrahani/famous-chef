import React from 'react';
import { HiDocumentDownload } from "react-icons/hi";

const Blog = () => {
    return (
       <div >
        <button className='flex gap-2 btn-card m-4'>PDF Download
        <HiDocumentDownload className='my-auto'></HiDocumentDownload>
        </button>
         <div className='grid grid-cols-2 p-16 gap-4 '>
            <div className='rounded bg-lime-100 p-8'>
                <h2 className='text-[12px] font-bold'>Tell us the differences between uncontrolled and controlled components.</h2>
                <p className='text-[10px] text-zinc-700'> The primary difference between controlled and uncontrolled components is related to how they handle their value. Uncontrolled components pass down the value through props. In contrast, controlled components use state to handle the value internally.</p>
            </div>
            <div className='rounded bg-lime-100 p-8'>
                <h2 className='text-[12px] font-bold'>How to validate React props using PropTypes</h2>
                <p className='text-[10px] text-zinc-700'> You can validate React props using PropTypes by importing PropTypes from ‘prop-types’ and then defining the propTypes object on your component. The propTypes object should have a property for each prop that you want to validate. The value of each property should be a validator function that returns an error message if the validation fails.</p>
            </div>
            <div className='rounded bg-lime-100 p-8'>
                <h2 className='text-[12px] font-bold'>Tell us the difference between nodejs and express js.</h2>
                <p className='text-[10px] text-zinc-700'> Node.js is a platform for building server-side event-driven I/O applications using JavaScript. Express.js is a framework based on Node.js that is used for building web applications using the principles and approaches of Node.js event-driven architecture. In other words, Node.js provides the runtime environment for building server-side applications while Express.js provides a framework for building web applications on top of Node.js.</p>
            </div>
            <div className='rounded bg-lime-100 p-8'>
                <h2 className='text-[12px] font-bold'>What is a custom hook, and why will you create a custom hook?</h2>
                <p className='text-[10px] text-zinc-700'> Custom hooks are JavaScript functions that allow you to reuse stateful logic across multiple components. You would create a custom hook to extract stateful logic from a component so that it can be reused across multiple components</p>
            </div>
        </div>
       </div>
    );
};

export default Blog;