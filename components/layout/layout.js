import NavigationBar from '../navigationBar/navigationBar';
import React from 'react';

const Layout = ({children}) => {
  return (
    <div>
      <NavigationBar />
      <div>{children}</div>
    </div>
  );
};

export default Layout;