import React from 'react';

const RecipeCard = ({ recipe }) => {
    const { name,rating,method,ingredients,picture } = recipe;
    return (
        <div className=''>
            <div className="card lg:card-side bg-lime-50 shadow-xl ">
                <figure><img className='w-[300px]' src={picture} alt="Album" /></figure>
                <div className="card-body ">
                    <h2 className="card-title">{name}</h2>
                    <p className='text-[12px] w-[50%] '> <span className='text-[15px]'>Method:</span> <br /> {method.slice(0,70)}...</p>
                    <p className='text-[8px]'><span className='text-[15px]'>Ingredients:</span> <br />{ingredients}</p>
                    <p>Rating: {rating}</p>
                    <div className="card-actions justify-end">
                        <button className="btn-card">Favorite</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RecipeCard;