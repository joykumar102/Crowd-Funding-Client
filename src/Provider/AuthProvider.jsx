import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import { auth } from '../firebase/firebase.init';



export const AuthContext = createContext(null);

const googleProvider = new GoogleAuthProvider;

const AuthProvider = ({children}) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    
    // console.log(user)
    
    const createUser = (email, password) => {
      setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    //   sing in user
    const signInUser = (email, password)=>{
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    const signInWithGoogle = () =>{
        setLoading(true);
        return signInWithPopup(auth, googleProvider);
    }

    const singOutUser = () => {
        setLoading(true);
        return signOut(auth);
    }

    useEffect( () => {
        const usSubscribe = onAuthStateChanged(auth, currentuser =>{
            setLoading(false);
            setUser(currentuser);
            
        })
        return() =>{
            usSubscribe();
        }
    }, []);

    const updateUserProfile = (updateData) => {
       return updateProfile(auth.currentUser, updateData)
   
    }
console.log(user);

    const authInfo = {
        user,
        createUser,
        signInUser,
        signInWithGoogle,
        singOutUser,
        updateUserProfile,
        setUser,
        loading
    }
    
    return (
       <AuthContext.Provider value={authInfo}>
        {children}
       </AuthContext.Provider>
    );
};

export default AuthProvider;