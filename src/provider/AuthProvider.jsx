import React, { createContext } from 'react';
import app from '../firebase/firebase.config';
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";


export const AuthContext = createContext(null)
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();

const AuthProvider = ({children}) => {


    const createUser = (email, password) =>{
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const signIn = (email, password) => {
        
        return signInWithEmailAndPassword(auth, email, password)
    }

    const googleSignIn = () => {
        return signInWithPopup(auth, googleProvider);
    }

    const githubSignIn = () => {
        return signInWithPopup(auth, githubProvider);
    }



    const authInfo = {
        createUser,
        signIn,
        googleSignIn,
        githubSignIn
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;