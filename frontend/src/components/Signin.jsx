import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export const Signin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    if (email && password) { //if login successful
      navigate('/homepage'); 
    } else {
      alert("Please enter both email and password");
    }
  };

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

          <form className="w-full flex flex-col mb-8" onSubmit={handleLogin}>
            <h3 className="text-xl font-semibold mb-4 text-gray-700">Login</h3>
            <p className="text-gray-600 mb-4">Welcome back! Please enter your details.</p>

            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-3 mb-4 text-gray-700 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
            />

            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-3 mb-4 text-gray-700 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
            />

            <div className="w-full flex items-center justify-between mb-4">
              <div className="flex items-center">
                <input type="checkbox" className="w-4 h-4 mr-2 text-blue-500" />
                <p className="text-sm text-gray-600">Remember Me</p>
              </div>
              <p className="text-sm font-medium text-blue-500 cursor-pointer">
                Forgot password?
              </p>
            </div>

            <button type="submit" className="w-full font-semibold text-white bg-blue-500 rounded-lg p-3 mb-4 hover:bg-blue-600 transition duration-300">
              Log in
            </button>

            <div className="w-full flex items-center justify-center relative py-4">
              <div className="w-full h-[1px] bg-gray-300"></div>
              <p className="absolute px-4 bg-gray-50 text-gray-600">or</p>
            </div>

            <button className="w-full font-semibold text-gray-700 bg-white border border-gray-300 rounded-lg p-3 flex items-center justify-center hover:bg-gray-50 transition duration-300">
              <img src="https://img.icons8.com/color/48/google-logo.png" alt="Google logo" className="h-6 mr-2"/>
              Sign in with Google
            </button>
          </form>

          <p className="text-sm text-gray-600">
            Don't have an account?{" "}
            <span className="font-semibold text-blue-500 cursor-pointer"onClick={() => navigate('/signup')}>
              Sign up for free
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};
