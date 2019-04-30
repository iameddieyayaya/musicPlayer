import './Menu.css';
import React from 'react';

const Menu = () => {
  return (
    <ul className='menu'>
      <li className='navBar-group'>
        <div className='navBar-item'>
          <a aria-label='Home' className='navBar-link'>
            <i class='fas fa-home' />
            <span className='menu-text'>Home</span>
          </a>
        </div>
      </li>
      <li className='navBar-group'>
        <div className='navBar-item'>
          <a aria-label='Search' className='navBar-link'>
            <i class='fas fa-search' />
            <span className='menu-text'>Search</span>
          </a>
        </div>
      </li>
      <li className='navBar-group'>
        <div className='navBar-item'>
          <a aria-label='Book' className='navBar-link'>
            <i class='fas fa-book' />
            <span className='menu-text'>Library</span>
          </a>
        </div>
      </li>
    </ul>
  );
};

export default Menu;
