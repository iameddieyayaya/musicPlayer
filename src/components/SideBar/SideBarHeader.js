import logo from '../../images/logo.png';
import './SideBarHeader.css';
import React from 'react';

const SideBarHeader = () => {
  return (
    <div className='navBar-header'>
      <a
        alt='git logo'
        href='https://github.com/iameddieyayaya/musicPlayer'
        target='_blank'
      >
        <img className='logo' src={logo} />
      </a>
      <a
        className='navBar-header-text'
        href='https://github.com/iameddieyayaya/musicPlayer'
        target='_blank'
      >
        Webify
      </a>
    </div>
  );
};

export default SideBarHeader;
