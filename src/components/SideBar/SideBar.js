import './SideBar.css';
import React from 'react';
import SideBarHeader from './SideBarHeader';
import Menu from './Menu';
import RecentlyPlayed from './RecentlyPlayed';

class SideBar extends React.Component {
  render() {
    return (
      <div>
        <nav className='side-bar'>
          <SideBarHeader />
          <Menu />
          <RecentlyPlayed recent={this.props.recentlyPlayed} />
        </nav>
      </div>
    );
  }
}

export default SideBar;
