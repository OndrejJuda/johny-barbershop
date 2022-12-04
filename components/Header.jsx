import React from 'react';
import Image from 'next/image';

const Header = () => {
  return (
    <header>
      <nav>
        <img alt='logo' src='/logo.png'/>
      </nav>
    </header>
  );
}

export default Header;