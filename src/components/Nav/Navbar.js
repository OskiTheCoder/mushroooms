import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSeedling, faShoppingBag } from '@fortawesome/free-solid-svg-icons';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className='navbar'>
      <div className='heading'>
        <span className='letter letter-m'>M</span>
        <span className='letter letter-u'>u</span>
        <span className='letter letter-s'>s</span>
        <span className='letter letter-h'>h</span>
        <span className='letter letter-r'>r</span>
        <span className='letter letter-o-1'>o</span>
        <span className='letter letter-o-2'>o</span>
        <FontAwesomeIcon
          icon={faSeedling}
          size='2x'
          style={{ color: '#b4c8ae' }}
        />
      </div>
      <div className='cart-container'>
        <FontAwesomeIcon
          icon={faShoppingBag}
          size='3x'
          style={{
            color: '#2d3436',
            background: '#ffeaa7',
            borderRadius: '20%',
            padding: '10px',
          }}
        />
        <span className='cart-items'>3</span>
      </div>
    </nav>
  );
};

export default Navbar;
