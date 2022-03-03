import React, { FC } from 'react';

const Sidebar : FC = () => {
  return (
    <div className="bg-sidebarBg md:hidden lg:flex rounded-lg flex justify-center items-center">
        <h4 className="justify-self-center">Sidebar</h4>
    </div>
  )
};

export default Sidebar;