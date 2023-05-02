import React from 'react';
import NavigationBer from '../components/Navigationber';
import Footer from '../components/Footer';
import { Outlet } from 'react-router-dom';

const Details = () => {
    return (
        <div>
            
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Details;