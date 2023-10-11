import React, { createContext, useEffect, useState } from 'react';
import app from '../../firebase/firebase.config';
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";

 
 export const AuthContext = createContext(); 
 

const auth = getAuth(app);
const GoogleProvider = new GoogleAuthProvider();
const AuthProviders = ({children}) => {

    const [user,setUser] = useState(null);
    const [loading,setLoading] = useState(true);
    const createUser = (email,password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth,email,password);
    };
    const signIn = (email,password) => 
    {
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password);
    };
    const googleSignIn = () => {
        setLoading(true);
        return signInWithPopup(auth,GoogleProvider);
    };
    useEffect(() =>{
        const unsubscribe =  onAuthStateChanged(auth,(loggedUser)=>{
            //    console.log('auth state observer',loggedUser);
               setUser(loggedUser);
               setLoading(false);
    
               return () => {
                    unsubscribe();
               }
          })
        },[]);
        const logOut = () => {
            setLoading(true)
            return signOut(auth);
        }

    
    const authInfo = {user,createUser,signIn,googleSignIn,logOut,loading}
    return (
        <AuthContext.Provider value={authInfo} >
             {children}
        </AuthContext.Provider>
    );
};

export default AuthProviders;