import React, { useContext } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { usersDetails } from '../Context/Context'
import { updateProfile,getAuth } from 'firebase/auth'
import { app } from '../../Firebase'

const SignUp = () => {
  const {handelSignup} = useContext(usersDetails)
  const navigate = useNavigate()
  const auth = getAuth(app);
  const submitForm = (e)=>{
    e.preventDefault()
    const name = e.target.name.value;
    handelSignup(e)
    .then((userCredential) => {
      const user = userCredential.user;
      updateProfile(auth.currentUser, {
        displayName: name,
      }).then(() => {
        alert('profile updated')
      }).catch((error) => {
        console.log(error)
      });
      console.log(user,userCredential)
      e.target.reset()
      navigate('/')
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(error)
    });
  }
  return (
    <>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">register now!</h1>
            <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <div className="card-body">
           <form onSubmit={submitForm}>
           <div className="form-control">
                <label className="label">
                  <span className="label-text">username</span>
                </label>
                <input type="text" placeholder="username" name='name' className="input input-bordered" />
              </div>
           <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" placeholder="email" name='email' className="input input-bordered" />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="password" name='password' placeholder="password" className="input input-bordered" />
                <p className='text-sm py-2'>allready have an account? <NavLink className={'text-blue-600'} to={'/login'}>login</NavLink> </p>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">signup</button>
              </div>
           </form>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default SignUp
