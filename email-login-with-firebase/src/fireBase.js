import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";
const firebaseConfig = {
  apiKey: "AIzaSyAUNjMLJyUvg7k6b0dM27MYQxLm2qyh4I0",
  authDomain: "login-with-email-453b3.firebaseapp.com",
  projectId: "login-with-email-453b3",
  storageBucket: "login-with-email-453b3.appspot.com",
  messagingSenderId: "91923123506",
  appId: "1:91923123506:web:19281bafcef7ac6deedb2b"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;