import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { FaGoogle } from 'react-icons/fa';
import register from '../../assets/register.jpg'
import { AuthContext } from '../Providers/AuthProviders';


const Register = () => {
    const {createUser} = useContext(AuthContext);
     const handleRegister = (event) => {
        event.preventDefault();
  const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    console.log(name,email,password);
     
    createUser(email,password)
    .then(result => {
        const createdUser = result.user;
        console.log(createdUser);
        Window.alert("User Created Succesfully");
        form.reset();
    })
    .catch(error => {
        const errorMsg = error;
        console.log(errorMsg);
    })
       



     }

    return (
        <div>
            <div>
            <div className='grid grid-cols-2'>
                <div className='mt-28 w-4/5 mx-auto'>
                <form  onSubmit={handleRegister} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text text-2xl font-light">Name</span>
          </label>
          <input type="text" placeholder="name" name='name' className="input input-bordered" required />
        </div>
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
            <p className='text-zinc-600'>Alredy Have A Account?
             <Link to='/userLayout/login' className='btn btn-link' >Login</Link>
            </p>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Register</button>
               
                
        </div>
      </form>
                </div>
                <div >
                    <img  className='h-screen bg-fixed ' src={register} alt="" />
                </div>
            </div>
        </div>
        </div>
    );
};

export default Register; 