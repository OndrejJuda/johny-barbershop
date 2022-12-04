import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const NavLink = ({href, title}) => (
  <Link href={href}>
    <p className='text-2xl transition hover:text-yellow-500'>{title}</p>
  </Link>
);

const Header = () => {
  return (
    <header>
      <nav className='flex justify-center items-center gap-44 p-8'>
        <NavLink href='#team' title='Tým' />
        <NavLink href='#services' title='Služby' />
        <img
          alt='logo'
          src='/logo.png'
          className='w-48'
        />
        <NavLink href='#news' title='Novinky' />
        <NavLink href='#contact' title='Kontakt' />
      </nav>
    </header>
  );
}

export default Header;