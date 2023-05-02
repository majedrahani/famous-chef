import React from 'react';
import { HiThumbUp } from 'react-icons/hi';

const ChefCard = ({ data }) => {
    const { cardPicture, name, bio, numberOfLikes, numberOfRecipes, yearsOfExperience, bannerPicture } = data
    return (
        <div className="card w-[90%] mx-auto bg-white shadow-xl">
            <figure><img src={cardPicture} alt="..." /></figure>
            <div className="card-body">
                <h2 className="card-title text-[#2e8d05]">{name}</h2>
                
                <p className='mt-0 text-[12px] font-medium'>Years of Experience : <span className='bg-[#7ED957] px-1 rounded font-bold'>{yearsOfExperience}</span> </p>
                <p className='mt-0 text-[12px] font-medium'>Numbers Of recipes: <span className='bg-[#7ED957] px-1 rounded font-bold'>{numberOfRecipes}</span></p>
                <h2><HiThumbUp></HiThumbUp> {numberOfLikes}</h2>
                <div className="card-actions justify-end">
                    <button className="btn-card w-[100%]">View Recipes </button>
                </div>
            </div>
        </div>
    );
};

export default ChefCard;