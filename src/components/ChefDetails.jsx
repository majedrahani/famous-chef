import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import RecipeCard from './RecipeCard';
import NavigationBer from './Navigationber';
import { HiThumbUp } from 'react-icons/hi';

const ChefDetails = () => {

    const data = useLoaderData();
    const { name, cardPicture, bannerPicture, yearsOfExperience, numberOfRecipes, numberOfLikes, bio, recipes } = data


    return (
        <div>
            {/* banner */}
            <div className='mt-0 bg-lime-50'>
                <NavigationBer></NavigationBer>
                <div className='flex justify-between px-16'>
                    <div className='my-auto '>
                        <p className='text-5xl'>{name}</p>
                        <p className='w-[70%] pl-2 py-3'>{bio}</p>
                        <p className='mt-0 text-[12px] font-medium'>Years of Experience : <span className='bg-[#7ED957] px-1 rounded font-bold'>{yearsOfExperience}</span> </p>
                        <p className='mt-0 text-[12px] font-medium'>Numbers Of recipes: <span className='bg-[#7ED957] px-1 rounded font-bold'>{numberOfRecipes}</span></p>
                        <h2 className='flex gap-2'><HiThumbUp className='my-auto'></HiThumbUp>  <span
                            className='bg-[#7ED957] px-1 rounded '
                        >{numberOfLikes}</span></h2>
                    </div>
                    <img className='w-[400px] ' src={bannerPicture} alt="" />
                </div>
            </div>

            {/* recipes card */}

            <div className='grid grid-cols-1 gap-4 px-32 py-24'>
                {
                    recipes.map(recipe => <RecipeCard
                        key={recipe.name}
                        recipe={recipe}
                    ></RecipeCard>)
                }
            </div>
        </div>
    );
};

export default ChefDetails;