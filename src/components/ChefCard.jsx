import React from 'react';
import { HiThumbUp } from 'react-icons/hi';
import { Link } from 'react-router-dom';
import { FaArrowRight } from "react-icons/fa";

const ChefCard = ({ data }) => {
    const { cardPicture, name, bio, numberOfLikes, numberOfRecipes, yearsOfExperience, bannerPicture, id } = data
    return (
        <div className="card w-[90%] mx-auto bg-white shadow-xl">
            <figure><img src={cardPicture} alt="..." /></figure>
            <div className="card-body">
                <h2 className="card-title text-[#2e8d05]">{name}</h2>

                <p className='mt-0 text-[12px] font-medium'>Years of Experience : <span className='bg-[#7ED957] px-1 rounded font-bold'>{yearsOfExperience}</span> </p>
                <p className='mt-0 text-[12px] font-medium'>Numbers Of recipes: <span className='bg-[#7ED957] px-1 rounded font-bold'>{numberOfRecipes}</span></p>
                <h2 className='flex gap-2'><HiThumbUp className='my-auto text-[#2e8d05] '></HiThumbUp>  <span
                className='bg-[#7ED957] px-1 rounded '
                >{numberOfLikes}</span></h2>


            <Link to={`/details/${id}`} className='btn-card w-[100%] flex gap-2'>View Recipes <FaArrowRight className='my-auto' /></Link>
            </div>
        </div>
    );
};

export default ChefCard;