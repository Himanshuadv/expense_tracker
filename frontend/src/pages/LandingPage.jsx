// src/pages/LandingPage.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';

export const LandingPage = () => {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate('/signin');
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <button
        onClick={handleGetStarted}
        className="px-6 py-3 text-white bg-blue-500 rounded hover:bg-blue-600"
      >
        Get Started!
      </button>
    </div>
  );
};




// import React from 'react';

// const LoginPage = () => {
//   return (
//     <div className="w-full h-screen flex items-center justify-center bg-green-50">
//       <h1 className="text-3xl font-semibold">HOME PAGE Here !</h1>
//       <button className='w-1/6 h-8 bg-blue-400'>Get Started !</button>
//     </div>
//   );
// };
// export default LoginPage;

