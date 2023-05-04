import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../provider/AuthProvider';

const EmailLogin = () => {

    const {signIn} = useContext(AuthContext)

    const handleSignIn = event =>{
        event.preventDefault();

        const form = event.target;
        
        const email = form.email.value;
        const password = form.password.value;

        console.log(email, password);

        signIn(email, password)
        .then(result =>{
            const loggedUser = result.user;
            console.log(loggedUser)
            navigate(from , {replace: true})
        })
        .catch(error=>{
            console.log(error);
        })
    }
    return (
        <form onSubmit={handleSignIn} className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 mx-auto my-16">
        <div className="card-body">
            

            <div className="form-control">
                <label className="label">
                    <span className="label-text">Email</span>
                </label>
                <input type="text" name='email' placeholder="email" className="input input-bordered" required />
            </div>
            <div className="form-control">
                <label className="label">
                    <span className="label-text">Password</span>
                </label>
                <input type="password" name='password' placeholder="password" className="input input-bordered" required />

            </div>
            
            <label className="label">
                <p className='text-[10px] py-4 text-stone-900'>New to this site? <Link className='text-[#7ED957] font-bold '>Register</Link></p>
            </label>
            <div className="form-control mt-6">
                <button className="btn-card">Login</button>
            </div>
        </div>
    </form>
    );
};

export default EmailLogin;