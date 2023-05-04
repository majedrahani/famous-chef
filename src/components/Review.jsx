import React from 'react';

const Review = () => {
    return (
        <div className='bg-lime-100'>
            <h2 className='text-[40px] font-medium text-center'>Reviews</h2>
            <div className='p-8 my-auto bg-lime-100 grid gap-2 grid-cols-3'>
            
            <div className='p-6 bg-white rounded '>
                <img className='w-[60px]' src="https://i.ibb.co/Kr382P3/3.png" alt="" />
                <p className='text-[10px] text-zinc-700'>The Italian Chef website is a fantastic resource for anyone looking to master the art of Italian cooking. The site is well-designed, easy to navigate, and features a wide range of delicious recipes that are sure to impress even the most discerning of palates.</p>
                <h2 className='font-bold'>Marco</h2>
            </div>
            <div className='p-6 bg-white rounded '>
                <img className='w-[60px]' src="https://i.ibb.co/1XwpHQX/4.png" alt="" />
                <p className='text-[10px] text-zinc-700'>If you're a fan of Italian cuisine, you absolutely must check out the Italian Chef website. This site is packed with mouth-watering recipes, helpful tips and tricks, and lots of great advice on how to make your dishes taste authentic and delicious.</p>
                <h2 className='font-bold'>Giovanni</h2>
            </div>
            <div className='p-6 bg-white rounded '>
                <img className='w-[60px]' src="https://i.ibb.co/x2FwWLT/5.png" alt="" />
                <p className='text-[10px] text-zinc-700'>The Italian Chef website is a must-visit for anyone who loves Italian food. The recipes are easy to follow and the site is full of helpful tips and tricks that will take your cooking skills to the next level. Whether you're a beginner or an experienced chef, you're sure to find something new and exciting to try on this site.</p>
                <h2 className='font-bold'>Sofia</h2>
            </div>
        </div>
        </div>
    );
};

export default Review;