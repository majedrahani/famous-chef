import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../provider/AuthProvider';
import { updateProfile } from 'firebase/auth';


const Register = () => {
    const { createUser } = useContext(AuthContext)

    const handleRegister = event => {
        event.preventDefault();

        const form = event.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;

        console.log(name, photo, email, password);

        createUser(email, password)
            .then(result => {
                const createdUser = result.user;
                console.log(createdUser)
                handleUserProfile(result.user, name, photo)
            })
            .catch(error => {
                console.log(error);
            })

         


    }

    const handleUserProfile = (user, name, photo) =>{
        updateProfile(user,{
            displayName : name,
            photoURL : photo
        })
        .then(()=>{
            console.log('updated user');
        })
        .catch(error => {
            console.log(error.message);
        } )
    }
    return (


        <form onSubmit={handleRegister} className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 mx-auto my-16">
            <div className="card-body">
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Name</span>
                    </label>
                    <input type="text" name='name' placeholder="Name" className="input input-bordered" />
                </div>

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
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Photo URL</span>
                    </label>
                    <input type="text" name='photo' placeholder="Photo Url" className="input input-bordered" />
                </div>
                <label className="label">
                    <p className='text-[10px] py-4 text-stone-900'>All ready have an account? <Link className='text-[#7ED957] font-bold '>Login</Link></p>
                </label>
                <div className="form-control mt-6">
                    <button className="btn-card">Register</button>
                </div>
            </div>
        </form>

    );
};

export default Register;