import './Menu.css';
import React from 'react';

const Menu = () => {
  return (
    <ul className='menu'>
      <li className='navBar-group'>
        <div className='navBar-item'>
          <a aria-label='Home' className='link-subtle' href='#Home'>
            <i className='fas fa-home' />
            <span className='menu-text'>Home</span>
          </a>
        </div>
      </li>
      <li className='navBar-group'>
        <div className='navBar-item'>
          <a aria-label='Search' className='link-subtle' href='#Search'>
            <i className='fas fa-search' />
            <span className='menu-text'>Search</span>
          </a>
        </div>
      </li>
      <li className='navBar-group'>
        <div className='navBar-item'>
          <a aria-label='Book' className='link-subtle' href='#Library'>
            <i className='fas fa-book' />
            <span className='menu-text'>Library</span>
          </a>
        </div>
      </li>
    </ul>
  );
};

export default Menu;
