import React from 'react';
import Link from 'next/link';

const NavLink = ({ href, title }) => (
  <Link href={href}>
    <div className='group flex justify-center flex-col'>
      <p className='text-2xl transition group-hover:text-primary-500 mb-1 text-center'>{title}</p>
      <img
        src='/lines/line-9.svg'
        alt='line'
        className='opacity-0 group-hover:opacity-100 w-[150px] transition'
      />
    </div>
  </Link>
);

const Header = ({bgColor}) => {
  return (
    <header className={`${bgColor} text-primary-300 font-primary font-light hidden xl:block`}>
      <nav className='flex justify-center items-center gap-44 h-40'>
        <NavLink href='#team' title='Tým' />
        <NavLink href='#services' title='Služby' />
        <Link href='/'>
          <img
            alt='logo'
            src='/logo.png'
            className='w-48'
          />
        </Link>
        <NavLink href='#news' title='Novinky' />
        <NavLink href='#contact' title='Kontakt' />
      </nav>
    </header>
  );
}

export default Header;