import React from 'react';
import './ActiveLink.css'
import { NavLink } from 'react-router-dom';

const ActiveLink = ({to}) => {
    return (
        <NavLink
        to={to}
        className={({isActive})=> isActive ? "active" : "" }
        >
            
        </NavLink>
    );
};

export default ActiveLink;