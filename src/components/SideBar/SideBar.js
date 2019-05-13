import './SideBar.css';
import React from 'react';
import SideBarHeader from './SideBarHeader';
import Menu from './Menu';
import RecentlyPlayed from './RecentlyPlayed';

const SideBar = props => {
  console.log(props.poop[0]);
  return (
    <div>
      <nav className='sider-bar'>
        <SideBarHeader />
        <Menu />
        <h3>Recently Played</h3>
        <RecentlyPlayed />
      </nav>
    </div>
  );
};

export default SideBar;
