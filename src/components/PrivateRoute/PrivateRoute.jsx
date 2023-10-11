import React, { useContext } from 'react';
import { AuthContext } from '../Providers/AuthProviders';
import { Navigate, useLocation } from 'react-router-dom';
import {  ThreeBody } from '@uiball/loaders'

const PrivateRoute = ({children}) => {
    const location = useLocation();
    console.log(location);
    const {user,loading} = useContext(AuthContext);
    if(loading){
        return  <div className='text-center flex justify-center items-center h-80'>
            <ThreeBody size={45} color="#231F20" />
        </div>
    }
    if(user){
        return children;
    }
    return <Navigate state={{from:location}} to='/userLayout/login' replace ></Navigate>  
    ;
};

export default PrivateRoute;