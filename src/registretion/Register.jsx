import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
    return (


        <form className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 mx-auto my-16">
            <div className="card-body">
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Name</span>
                    </label>
                    <input type="text" name='name' placeholder="Name" className="input input-bordered" />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Photo URL</span>
                    </label>
                    <input type="text" name='photo-url' placeholder="Photo Url" className="input input-bordered" />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input type="text" name='email' placeholder="email" className="input input-bordered" />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Password</span>
                    </label>
                    <input type="text" placeholder="password" className="input input-bordered" />
                    <label className="label">
                        <p className='text-[10px] py-4 text-stone-900'>All ready have an account? <Link className='text-[#7ED957] font-bold '>Login</Link></p>
                    </label>
                </div>
                <div className="form-control mt-6">
                    <button className="btn-card">Register</button>
                </div>
            </div>
        </form>

    );
};

export default Register;