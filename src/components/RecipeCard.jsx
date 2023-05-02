import React from 'react';

const RecipeCard = ({detail}) => {
    const {name} = detail;
    return (
        <div>
            <p>{name}</p>
        </div>
    );
};

export default RecipeCard;