import React from 'react';

const Login = () => {
    return (
        <div>

            <div className='bg-white p-16 my-24 mx-60'>
                 <button className='py-2 rounded px-5 bg-lime-100 border-lime-400 border w-[100%]'>Email/Password</button>
                 <button className='py-2 rounded px-5 bg-lime-100 border-lime-400 border w-[100%] my-4'>Login with Google</button>
                 <button className='py-2 rounded px-5 bg-lime-100 border-lime-400 border w-[100%]'>Login with Github</button>
            </div>

        </div>
    );
};

export default Login;