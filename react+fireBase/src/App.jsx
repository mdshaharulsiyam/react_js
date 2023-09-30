import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { getAuth, signInWithPopup, signOut } from "firebase/auth";
import { app } from './fireBase';
import { GoogleAuthProvider,GithubAuthProvider  } from "firebase/auth";

function App() {
  const [user, setUser] = useState();
  const auth = getAuth(app);
  const Googleprovider = new GoogleAuthProvider();
  const Githubprovider = new GithubAuthProvider();

  const signIngoogle = () => {
    signInWithPopup(auth, Googleprovider)
      .then((result) => {
        const users = result.user;
        console.log(users);
        setUser(users);
      })
      .catch((error) => {
        const errorMessage = error.message;
        console.log(errorMessage);
      });
  };

  const signIngithub = () => {
    signInWithPopup(auth, Githubprovider)
      .then((result) => {
        const users = result.user;
        console.log(users);
        setUser(users);
      })
      .catch((error) => {
        const errorMessage = error.message;
        console.log(errorMessage);
      });
  };

  const signout = () => {
    signOut(auth)
      .then((result) => {
        setUser(null);
        console.log(result);
      })
      .catch((error) => {
        const errorMessage = error.message;
        console.log(errorMessage);
      });
  };
// let formdata = document.querySelector('#formData');
//  console.log(formdata)
  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    console.log(formData)
    fetch('http://localhost/fetch/insert.php', {
      method: 'POST',
      body: formData,
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  };

  return (
    <>
      <form onSubmit={handleSubmit} id='formData' method="POST">
        <input name="name" type="text" />
        <input name="file1" type="file" />
        <input name="file2" type="file" />
        <input type="submit" value="send data" />
      </form>
      {
        user ? <button onClick={signout}>sign Out</button> : <>
          <button onClick={signIngoogle}>sign im with google</button>
          <button onClick={signIngithub}>sign im with github</button></>
      }
      {
        user && <div>
          <h2>user : {user.displayName}</h2>
          <h2>email : {user.email}</h2>
          <img src={user.photoURL} alt="" />
        </div>
      }

  <div>
      
  </div>
    </>
  )
}

export default App
