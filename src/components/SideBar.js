import './SideBar.css';
import React from 'react';
import SideBarHeader from './SideBar/SideBarHeader';
import Menu from './SideBar/Menu';
import RecentlyPlayed from './SideBar/RecentlyPlayed';

const SideBar = () => {
  return (
    <div>
      <nav className='navBar'>
        <SideBarHeader />
        <Menu />
        <RecentlyPlayed />
      </nav>
    </div>
  );
};

export default SideBar;
