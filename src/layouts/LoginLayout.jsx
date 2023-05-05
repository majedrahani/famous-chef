import React from 'react';
import NavigationBer from '../components/Navigationber';
import { Outlet, useLocation } from 'react-router-dom';
import Footer from '../components/Footer';

const LoginLayout = () => {
    
    return (
        <div className="bg-[url('https://i.ibb.co/5sS4z4Y/login-bg.png')]">
            <NavigationBer></NavigationBer>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default LoginLayout;