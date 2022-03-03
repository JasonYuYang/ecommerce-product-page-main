// import { useState } from 'react';
// import { Routes, Route } from 'react-router-dom';

// import MenuIcon from '@images/icon-menu.svg?react';
import CartIcon from '@images/icon-cart.svg?react';
import SearchIcon from '@images/search.svg?react';

// import Avatar from '@images/image-avatar.png';

interface NavbarTypes {
  onSearchClick: () => void;
  onNavigateClick: () => void;
}

export const Navbar = ({ onSearchClick, onNavigateClick }: NavbarTypes) => {
  return (
    <header>
      <div className='header__wrapper'>
        <div className='header__menuwrapper'>
          <div className='header__menu-icon'>
            {' '}
            <input type='checkbox' className='header__menu-icon--checkbox' id='menu-toggle' />
            <label
              htmlFor='menu-toggle'
              className='header__menu-icon--button'
              onClick={onNavigateClick}
              aria-hidden
            >
              <span className='header__menu-icon--icon'></span>
            </label>
          </div>

          <div className='header__nav--logo'>
            SHOP<span className='logoit'>IT</span>
            <span className='logodot'>.</span>
          </div>
        </div>

        <div className='header__user'>
          <SearchIcon className='header__user--search' fill='#69707D' onClick={onSearchClick} />
          <CartIcon className='header__user--cart' fill='#69707D' />
        </div>
      </div>
    </header>
  );
};
