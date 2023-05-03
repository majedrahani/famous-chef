import React from 'react';
import NavigationBer from '../components/Navigationber';
import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer';

const LoginLayout = () => {
    return (
        <div className="bg-[url('../../public/login-bg.png')]">
            <NavigationBer></NavigationBer>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default LoginLayout;