import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, sendEmailVerification, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile, } from 'firebase/auth'
import app from '../../Firebase/firebase.config';

export const AuthContext = createContext()
const auth = getAuth(app)

const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [isLoading, setIsLoading] = useState(false);

    const createUser = (email, pass) => {
        setIsLoading(true)
        return signInWithEmailAndPassword(auth, email, pass)
    }

    const signIn = (email, pass) => {
        setIsLoading(true)
        return createUserWithEmailAndPassword(auth, email, pass)
    }
    const googleSignIn = () => {
        signInWithPopup(auth, googleProvider)
    }

    const logOut = () => {
        setIsLoading(true)
        return signOut(auth)
    }
    const updateUserProfile = (userInfo) => {
        setIsLoading(true)
        return updateProfile(auth.currentUser, userInfo)
    }
    const emailVerification = () => {
        setIsLoading(true)
        return sendEmailVerification(auth.currentUser)
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            setIsLoading(false)
        })
        return () => unsubscribe()
    }, [])

    const authInfo = { user, isLoading, createUser, signIn, logOut, googleSignIn, updateUserProfile, emailVerification }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;