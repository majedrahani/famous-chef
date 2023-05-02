import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import RecipeCard from './RecipeCard';

const ChefDetails = () => {
    
    const data = useLoaderData();
    const {} = data
    
    
    return (
        <div>
           <p>{data.name}</p>
        </div>
    );
};

export default ChefDetails;