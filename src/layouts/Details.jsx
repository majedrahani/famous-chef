import React from 'react';
import NavigationBer from '../components/Navigationber';
import Footer from '../components/Footer';
import { Outlet } from 'react-router-dom';

const Details = () => {
    return (
        <div>
            <NavigationBer></NavigationBer>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Details;