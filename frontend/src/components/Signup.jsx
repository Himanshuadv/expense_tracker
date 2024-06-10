import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {toast} from 'react-toastify'
import axios from 'axios'

export const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const input = "w-full p-3 mb-4 text-gray-700 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none "

  const handleSignup = (e) => {
    e.preventDefault();
    
      const data = { name, email, password };
    //   console.log(data);
      axios
        .post("http://localhost:3000/api/signup", data,{withCredentials: true, credentials: 'include'})
        .then((response) => {
          // alert(response.data.name);
          console.log(response);
          toast.success("Verify Your email and then Login!", {
            theme: "light",
            autoClose: 5000,
          });
          const name = response.data.data.user.name;
          const id = response.data.data.user._id;
          console.log(response.data.data.user.name);
          localStorage.setItem("name", name);
          localStorage.setItem("id", id);
          navigate('/homepage')
          
        })
        .catch((error) => {
          // Handle error
          const err = error.response.data.message;
          console.log(err);
          let cleanedErrorMessage = err.replace(
            /^User validation failed: /,
            ""
          );

          let email = "";
          let password = "";

          const emailIndex = cleanedErrorMessage.indexOf("email:");
          const passwordIndex = cleanedErrorMessage.indexOf("password:");

          if (emailIndex !== -1) {
            const nextIndex = cleanedErrorMessage.indexOf(",", emailIndex);
            email = cleanedErrorMessage.substring(
              emailIndex + 7,
              nextIndex !== -1 ? nextIndex : cleanedErrorMessage.length
            );
          }

          if (passwordIndex !== -1) {
            const nextIndex = cleanedErrorMessage.indexOf(",", passwordIndex);
            password = cleanedErrorMessage.substring(
              passwordIndex + 10,
              nextIndex !== -1 ? nextIndex : cleanedErrorMessage.length
            );
          }

          if (email !== "") {
            toast.error(email, {
              autoClose: 20000,
              hideProgressBar: true,
              closeOnClick: true,
              theme: "colored",
            });
          }
          if (password !== "") {
            toast.error(password, {
              autoClose: 20000,
              hideProgressBar: true,
              closeOnClick: true,
              theme: "colored",
            });
          }
        });
      }
    

  return (
    <div className="w-full h-screen flex items-center justify-center bg-gradient-to-r from-blue-100 to-blue-200">
      <div className="w-4/6 h-4/5 flex items-center justify-center bg-white shadow-lg rounded-2xl">

        {/*----------- left side - adding image ------------*/}
        <div className="h-full w-1/2">
          <img
            className="h-full rounded-l-2xl object-cover"
            src="https://cdn.dribbble.com/users/263266/screenshots/17089496/media/ba28f89f955054f6654bbbbb3a5bf1f1.jpg"
            alt="a pic showing features"
          />
        </div>

        {/*------------ right side - adding login functionality -----------*/}
        
        <div className="w-1/2 h-full bg-gray-50 flex flex-col p-10 justify-center items-center rounded-r-2xl">
          <h1 className="font-bold text-3xl text-gray-800 mb-8">Expanse Tracker</h1>
          <form className="w-full flex flex-col mb-8" onSubmit={handleSignup}>
            <h3 className="text-xl font-semibold mb-4 text-gray-700">Sign Up</h3>
            <p className="text-gray-600 mb-4">Create your account by filling in the details below.</p>
            <input
              type="text"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className={input} 
            />
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            className={input} 
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className={input} 
            />
            <button type="submit" className="w-full font-semibold text-white bg-blue-500 rounded-lg p-3 mb-4 hover:bg-blue-600 transition duration-300">
              Sign Up
            </button>
            <div className="w-full flex items-center justify-center relative py-4">
              <div className="w-full h-[1px] bg-gray-300"></div>
              <p className="absolute px-4 bg-gray-50 text-gray-600">or</p>
            </div>
            <button className="w-full font-semibold text-gray-700 bg-white border border-gray-300 rounded-lg p-3 flex items-center justify-center hover:bg-gray-50 transition duration-300">
              <img src="https://img.icons8.com/color/48/google-logo.png" alt="Google logo" className="h-6 mr-2"/>
              Sign up with Google
            </button>
          </form>
          <p className="text-sm text-gray-600">
            Already have an account?{" "}
            <span className="font-semibold text-blue-500 cursor-pointer" onClick={() => navigate('/signin')}>
              Log in
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};
