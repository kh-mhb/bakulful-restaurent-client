import React, { useContext, useState } from 'react';
import './Login.css'
import login from '../../assets/login.jpg'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FaGoogle } from 'react-icons/fa';
import { AuthContext } from '../Providers/AuthProviders';

const Login = () => {
   const location = useLocation()
   console.log(location);
   const [alert,setError] = useState('');
   const from = location.state?.from?.pathname || '/'
  const navigate = useNavigate();
    const {signIn,googleSignIn} = useContext(AuthContext);
    const handleLogin = (event) => {
    event.preventDefault();
  const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email,password);
    signIn(email,password)
    .then(result => {
        const loggedUser = result.user;
        console.log(loggedUser);
        window.alert("Login Successfull");
        form.reset();
        navigate(from,{replace:true});

    })
    .catch(error => {
      console.log(error);
      setError(error.message);
     window.alert(alert);
     return;
    })
    

    };
     const signInWithGoogle =() => {
        googleSignIn()
        .then(result => {
            const googleUser = result.user;
            console.log(googleUser);
        })
        .catch(error => {
             console.log(error);
        })
     }
    return (
        <div className='bg-fixed' >
            <h3 className='text-center font-bold text-slate-700  py-2 text-6xl mb-4' >Login</h3>
            <div className='grid grid-cols-2'>
                <div className='mt-28 w-4/5 mx-auto'>
                <form onSubmit={handleLogin} className="card-body">
        <div className="form-control">
          
          <label className="label">
            <span className="label-text text-2xl font-light">Email</span>
          </label>
          <input type="email" name='email' placeholder="email" className="input input-bordered" required />
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
                <button onClick={signInWithGoogle} className="btn btn-outline btn-primary">Google Login <FaGoogle></FaGoogle></button>
                
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