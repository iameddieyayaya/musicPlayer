import './SideBar.css';
import React from 'react';
import SideBarHeader from './SideBar/SideBarHeader';
import Menu from './SideBar/Menu';

const SideBar = () => {
  return (
    <div>
      <nav className='navBar'>
        <SideBarHeader />
        <Menu />
      </nav>
    </div>
  );
};

export default SideBar;
