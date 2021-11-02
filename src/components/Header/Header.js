import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header>
      <div className='heading-content'>
        <h1>eat the fungus</h1>
        <h1>among us.</h1>
        <div className='heading-subtext-container'>
          <span className='heading-subtext'>
            high quality organic delicious mushrooms delivered directly to your
            door. what could be better? order today and eat tomorrow.
          </span>
        </div>
      </div>
      <div className='heading-img-container'>
        <img
          className='heading-img'
          src={require(`../../images/mushroom.png`).default}
          alt=''
        />
      </div>
    </header>
  );
};

export default Header;
