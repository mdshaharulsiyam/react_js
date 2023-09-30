import React, { useRef, useState } from 'react'
import { NavLink, Navigate, useNavigate } from 'react-router-dom'
import { sendPasswordResetEmail, signInWithEmailAndPassword } from "firebase/auth"
import auth from './fireBase'

const DefaultPage = () => {
    const [emailFiled, setemailFiled] = useState('')
    const emailref = useRef()
    const naviget = useNavigate()
    const loginUser = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        setemailFiled(email)
        const password = e.target.password.value;
        //   console.log(email,password)
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                console.log(user)
                naviget('/home')
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                alert(errorMessage)
            });
    }
    const handelPassword = () => {
        let email = ""
        if (!emailFiled) {
            email = emailref.current.value
        } else {
            email = emailFiled
        }
        if (!email) {
            alert('please insert your email')
        } else {
            sendPasswordResetEmail(auth, email)
                .then(() => {
                    alert("reset email send ")
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    // ..
                });
        }
    }
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Login now!</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        <span>don't have an account</span><NavLink className={'text-white'} to={'/signup'}><button className='ml-2 btn btn-primary'>  click to login </button></NavLink>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={loginUser} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" ref={emailref} name='email' placeholder="email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" placeholder="password" name='password' className="input input-bordered" />
                                <label className="label">
                                    <a onClick={handelPassword} className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Login</button>
                            </div>
                        </form>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default DefaultPage
