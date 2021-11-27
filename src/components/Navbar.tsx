// import React from 'react';
// import { Routes, Route } from 'react-router-dom';

import MenuIcon from '@images/icon-menu.svg?react';
import CartIcon from '@images/icon-cart.svg?react';
import Avatar from '@images/image-avatar.png';

export const Navbar = () => (
  <header>
    <div className='header__wrapper'>
      <div className='header__nav'>
        <MenuIcon />
        <div className='header__nav--logo'>SHOPIT</div>
      </div>
      <div className='header__search'>Search</div>
      <div className='header__user'>
        <CartIcon />
        <img src={Avatar} alt='' />
        <div className='header__user--language'>EN</div>
      </div>
    </div>
  </header>
);
