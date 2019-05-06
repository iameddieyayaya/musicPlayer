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
        rel='noopener noreferrer'
      >
        <img className='logo' src={logo} alt='gitHub logo' />
      </a>
      <a
        className='navBar-header-text'
        href='https://github.com/iameddieyayaya/musicPlayer'
        target='_blank'
        rel='noopener noreferrer'
      >
        Webify
      </a>
    </div>
  );
};

export default SideBarHeader;
