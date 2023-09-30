import React, { createContext, useEffect, useState } from 'react';
import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged,signOut } from "firebase/auth";
import { app } from '../../Firebase';
import { signInWithEmailAndPassword } from "firebase/auth";
const usersDetails = createContext(null);
const Context = (props) => {
//loader 
const [loading,setloadig]=useState(true)

    // userr details  
    const [user, setuser] = useState(null)
    const auth = getAuth(app);
    //signup
    const handelSignup = (e) => {
        setloadig(true)
        e.preventDefault()
        const email = e.target.email.value;
        const password = e.target.password.value;
        return createUserWithEmailAndPassword(auth, email, password)

    }
    //login
    const handelLogin = (e) => {
        setloadig(true)
        const email = e.target.email.value;
        const password = e.target.password.value;
        return signInWithEmailAndPassword(auth, email, password)
    }
    // get logged in user
    useEffect(() => {
        const unsubscrive = onAuthStateChanged(auth, (currentuser) => {
                setuser(currentuser)
                setloadig(false)
        });
        return ()=>{
            unsubscrive()
        }
    }, [])
    // useEffect(() => {
    //     const unsubscrive = onAuthStateChanged(auth, (currentuser) => {
    //         if (currentuser) {
    //             setuser(currentuser)
    //         } else {
    //             return () => {
    //                 unsubscrive()
    //             }
    //         }
    //     });
    // }, [])
    // sign out
    const logout = () => {
        signOut(auth).then(() => {
            alert('Sign-out successful.')
            setuser(null)
        }).catch((error) => {
            console.log(error)
        });
    }
    // context list 
    const contextProvider = {
        handelLogin,
        handelSignup,
        user,
        logout,
        loading
    }
    return (
        <usersDetails.Provider value={contextProvider}>
            {props.children}
        </usersDetails.Provider>
    );
};

export { usersDetails, Context };

