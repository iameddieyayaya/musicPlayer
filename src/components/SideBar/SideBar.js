import './SideBar.css';
import React from 'react';
import SideBarHeader from './SideBarHeader';
import Menu from './Menu';
import RecentlyPlayed from './RecentlyPlayed';

const SideBar = props => {
  const test = props.recentlyPlayed.map(item => item.artist);
  console.log(test);

  return (
    <div>
      <nav className='sider-bar'>
        <SideBarHeader />
        <Menu />
        {/* <h3>Recently Played</h3>
        {props.recentlyPlayed.map(item => (
          <div>
            {item.track} <br />
          </div>
        ))} */}
        {/* {props.recentlyPlayed.map(item => (
          <div>
            {item.artist} <br />
          </div>
        ))} */}
        {/* <RecentlyPlayed /> */}
      </nav>
    </div>
  );
};

export default SideBar;
