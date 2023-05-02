import React from 'react';
import NavigationBer from '../components/Navigationber';
import Footer from '../components/Footer';
import { Outlet } from 'react-router-dom';
import Header from '../components/Header';

const Main = () => {
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;