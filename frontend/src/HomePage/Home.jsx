// src/HomePage/Home.jsx
import React, { Children } from 'react';
import { SideNav } from './Navbar/SideNav';
import { Dashboard } from './Dashboard/Dashboard';

export const Home = () => {
  return (
    <div>
      <div className='fixed md:w-64 hidden md:block '>
          <SideNav/>
      </div>
      <div className='md:ml-64'>
            <Dashboard/>
      </div>
    </div>
  );
};
