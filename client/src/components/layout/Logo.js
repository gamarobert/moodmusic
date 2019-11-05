import React from 'react';
import logo from '../../assets/logo.svg';

const Logo = () => {
  return (
    <div className='text-center'>
      <img src={logo} alt='moodmusic' className='logo'></img>
    </div>
  );
};

// TO DO: Add proptypes
export default Logo;
