import React, { Children } from 'react';
import { SideNav } from './Navbar/SideNav';
import { Dashboard } from './Dashboard/Dashboard';

export const Home = ({ children }) => {
  return (
    <div className="flex">
      <div className="fixed md:w-64 hidden md:block">
        <SideNav />
      </div>
      <div className="ml-64 flex-1">
        <Dashboard>{children}</Dashboard>
      </div>
    </div>
  );
};
