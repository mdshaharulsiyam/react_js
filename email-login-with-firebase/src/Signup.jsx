import { createUserWithEmailAndPassword } from 'firebase/auth'
import React from 'react'
import { NavLink } from 'react-router-dom'
import auth from './fireBase'
import {updateProfile,sendEmailVerification  } from "firebase/auth";
import { Result } from 'postcss';

const Signup = () => {
    const handelSignUp = (e) => {
        e.preventDefault()
        const email = e.target.email.value;
        const password = e.target.password.value;
        const name = e.target.name.value;
        createUserWithEmailAndPassword(auth, email, password)
            .then((userDetails) => {
                updateProfile(auth.currentUser, {
                    displayName:name,
                }).then(() => {
                    console.log(userDetails)
                }).catch((error) => {
                    console.log(error.error)
                });
                sendEmailVerification(auth.currentUser)
                .then(()=>{
                    alert('email verification send')
                })
                .catch((error)=>{
                    console.log(error.error)
                })
            })
            .catch((error) => {
                console.log(error)
            })
    }
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">sign up now</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        <span>already have an account</span><button className='ml-2 btn btn-primary'> <NavLink className={'text-white'} to={'/login'}> click to login</NavLink></button>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handelSignUp} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">name</span>
                                </label>
                                <input type="text" name='name' placeholder="email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name='email' placeholder="email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name='password' placeholder="password" className="input input-bordered" />
                                <label className="label">
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">sign Up</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Signup
