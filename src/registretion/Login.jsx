import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../provider/AuthProvider';
import EmailLogin from './EmailLogin';

const Login = () => {
    const {googleSignIn,githubSignIn} = useContext(AuthContext)
    const navigate = useNavigate();
    const location = useLocation();
    console.log('login page', location);
    const from = location.state?.from?.pathname || "/" ;
 
    const handleGoogleLogin = () =>{
        googleSignIn()
        .then(result =>{
            const loggedUser = result.user;
            console.log(loggedUser);
            navigate(from, {replace: true})
            
        })
        .catch(error =>{
            console.log(error);
        })
    }
    const handleGithubLogin = () =>{
        githubSignIn()
        .then(result =>{
            const loggedUser = result.user;
            console.log(loggedUser);
            navigate(from, {replace: true})
        })
        .catch(error =>{
            console.log(error);
            
        })
    }

    return (
        <div>
             
            <div className='bg-white p-16 my-24 mx-60'>
                 {/* <button  className='py-2 rounded px-5 bg-lime-100 border-lime-400 border w-[100%]'><Link 
                 to="emailLogin"
                 
                 >Email/Password</Link></button> */}
                 <EmailLogin
                 fromm={from}
                 ></EmailLogin>
                 <button onClick={handleGoogleLogin} className='py-2 rounded px-5 bg-lime-100 border-lime-400 border w-[100%] my-4'>Login with Google</button>
                 <button onClick={handleGithubLogin} className='py-2 rounded px-5 bg-lime-100 border-lime-400 border w-[100%]'>Login with Github</button>
                 <p className='text-[10px] py-4 text-stone-900'>New to this world <Link to="register" className='text-[#7ED957] font-bold '>Register</Link> </p>
            </div>

        </div>
    );
};

export default Login;