import './SideBar.css';
import React from 'react';
import SideBarHeader from './SideBarHeader';
import Menu from './Menu';
import RecentlyPlayed from './RecentlyPlayed';

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
