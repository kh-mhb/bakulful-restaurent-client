import React from 'react';
import './Login.css'
import login from '../../assets/login.jpg'
import { Link } from 'react-router-dom';
import { FaGoogle } from 'react-icons/fa';

const Login = () => {
    return (
        <div>
            <div className='grid grid-cols-2'>
                <div className='mt-28 w-4/5 mx-auto'>
                <form className="card-body">
        <div className="form-control">
          
          <label className="label">
            <span className="label-text text-2xl font-light">Email</span>
          </label>
          <input type="email" name='name' placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text text-2xl font-light">Password</span>
          </label>
          <input type="password" name='password' placeholder="password" className="input input-bordered" required />
          <label className="label">
            <p className='text-zinc-600'>Need A Account ?
             <Link to='/userLayout/register' className='btn btn-link' >Register</Link>
            </p>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
                <p className='text-center font-bold' >or</p>
                <button className="btn btn-outline btn-primary">Google Login <FaGoogle></FaGoogle></button>
                
        </div>
      </form>
                </div>
                <div className=''>
                    <img src={login} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Login;