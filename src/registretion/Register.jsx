import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../provider/AuthProvider';
import { updateProfile } from 'firebase/auth';


const Register = () => {
    const { createUser } = useContext(AuthContext)
    const [error, setError] = useState('');

    const handleRegister = event => {
        event.preventDefault();

        const form = event.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;

        console.log(name, photo, email, password);

        if(password.length < 6){
            setError('Please add at least 6 character!')
        }

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
               
                <p className=' text-orange-500'>{error}</p>
                <div className="form-control mt-6">
                    <button className="btn-card">Register</button>
                   
                </div>
            </div>
        </form>

    );
};

export default Register;