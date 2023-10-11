import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import './Header.css'
import { AuthContext } from '../Providers/AuthProviders';

const Header = () => {
  const {user,logOut} = useContext(AuthContext);
  const handleLogOut = () =>{
     logOut()
     .then(result => {
       console.log(result);
     } )
     .catch(error => console.log(error));
  }
    return (
        <div className=''>
             <div className="navbar  text-white bg-slate-900">
  <div className="flex-1">
    <a className="btn btn-ghost font-serif italic  text-xl">BakulFul </a>
  </div> 
  <div className='px-5 navlink font-'>
    <Link to='/' >Home</Link>
    {/* <Link>About</Link> */}
    {/* <Link>Menu</Link> */}
    {
      user ?  <button onClick={handleLogOut} >LogOut</button> :  <Link to='/userLayout/login' >Login</Link>
    }
    <Link to='/userLayout/register' >Register</Link>
  </div>
 
  <div className="flex-none">
    <div className="dropdown dropdown-end">
     
      
    </div>
    <div className="dropdown dropdown-end">
      <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" />
        </div>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        <li>
          <a className="justify-between">
            Profile
            <span className="badge">New</span>
          </a>
        </li>
        <li><a>Settings</a></li>
        <li><a>Logout</a></li>
      </ul>
    </div>
  </div>
</div>
        </div>
    );
};

export default Header;