import React, { useContext } from 'react';
import logo from '../../public/logo.png'
import { Link } from 'react-router-dom';
import { AuthContext } from '../provider/AuthProvider';
import ActiveLink from '../activeLink/ActiveLink';


const NavigationBer = () => {
    const { user, logOut } = useContext(AuthContext)



    const handleLogout = () => {
        logOut()
            .then()
            .catch(error => console.log(error))
    }
    return (
        <div className='grid grid-cols-3 lg:flex justify-between lg:px-8 lg:mx-12 bg-white '>
            <img className='w-[120px]' src={logo} alt="" />
            <div className="flex gap-4 my-6 ">
                <Link to='/' className='my-auto'>Home</Link>
                <Link to="/blog" className='my-auto'>Blog</Link>
            </div>
            <div className='flex gap-4'>

                {
                    user &&
                    <div className="tooltip tooltip-open tooltip-left" data-tip={user && user.displayName}>
                        {user && <img src={user.photoURL} alt="" className='w-[40px] my-5 h-[40px] rounded-full' />} </div>
                }

                {user ?
                    <Link onClick={handleLogout} className='btn-card my-4'>Logout</Link> :
                    <Link to="/loginLayout" className='btn-card my-4'>Login</Link>}
            </div>
        </div>
    );
};

export default NavigationBer;