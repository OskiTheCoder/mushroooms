import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header>
      <div className='heading-content'>
        <h1>eat the fungus</h1>
        <h1>among us.</h1>
      </div>
      <div className='heading-tags'>
        <span className='mushroom'>Enoki</span>
        <span className='mushroom'>Enoki</span>
        <span className='mushroom'>Enoki</span>
        <span className='mushroom'>Enoki</span>
        <span className='mushroom'>Enoki</span>
        <span className='mushroom'>Enoki</span>
        <span className='mushroom'>Enoki</span>
      </div>
    </header>
  );
};

export default Header;
