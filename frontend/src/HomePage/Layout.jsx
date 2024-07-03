// Layout.jsx
import React from 'react';
import { SideNav } from './SideNav';

const Layout = ({ children }) => {
  return (
    <div className="flex h-screen">
      <SideNav />
      <div className="flex flex-col flex-1">
        {children}
      </div>
    </div>
  );
};

export default Layout;
