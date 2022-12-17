import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { RiScissors2Line } from 'react-icons/ri';

const NavLink = ({ href, title, setIsOpened, children }) => (
  <li>
    <Link
      href={href}
      onClick={() => {
        setIsOpened && setIsOpened(false);
      }}
    >
      {
        children ? (
          children
        ) : (
          <div className='group flex justify-center flex-col'>
            <p className='text-2xl transition group-hover:text-primary-500 mb-1 text-center'>{title}</p>
            <img
              src='/lines/line-9.svg'
              alt='line'
              className='opacity-0 group-hover:opacity-100 w-[150px] transition'
            />
          </div>
        )
      }
    </Link>
  </li>
);

const Header = ({ bgColor }) => {
  const [isOpened, setIsOpened] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  const previousYScroll = useRef();

  useEffect(() => {
    const handleScroll = (event) => {
      const { scrollY } = window;

      const diffY = previousYScroll.current - scrollY
      previousYScroll.current = scrollY;

      if (scrollY < 200) {
        setIsVisible(true);
      }
      else if (diffY > 0) { // scrolling upwards
        setIsVisible(true);
      } else if (diffY < 0) { // scrolling downwards
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    if (isOpened) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [isOpened]);

  const showButton = () => {
    if (isOpened) return true;

    return isVisible;
  };

  return (
    <header className={`${bgColor} text-primary-300 font-primary font-light`}>
      <nav className='h-40 hidden xl:flex justify-center'>
        <ul className='flex justify-center items-center gap-44 '>
          <NavLink href='#team' title='Tým' />
          <NavLink href='#services' title='Služby' />
          <NavLink href='/'>
            <img
              alt='logo'
              src='/logo.png'
              className='w-48'
            />
          </NavLink>
          <NavLink href='#news' title='Novinky' />
          <NavLink href='#contact' title='Kontakt' />
        </ul>
      </nav>
      <div className='xl:hidden'>
        <button
          type='button'
          className={`flex fixed z-30 top-5 left-5 
          bg-primary-50 text-primary-700 rounded-full p-4 select-none
          transition ${isOpened ? 'rotate-180' : ''} duration-500
          ${showButton() ? '-translate-y-0' : '-translate-y-[100px]'}`}
          onClick={() => setIsOpened((prevValue) => !prevValue)}
        >
          <RiScissors2Line size={48} />
        </button>
        <div className={`bg-primary-900 fixed z-20  w-screen h-screen 
        transition ${isOpened ? 'translate-x-0' : '-translate-x-[100%]'} duration-700`}>
          <nav className={`flex justify-center w-screen h-screen z-20 fixed `}>
            <ul className='flex justify-center items-center flex-col gap-24'>
              <NavLink href='/' setIsOpened={setIsOpened}>
                <img
                  alt='logo'
                  src='/logo.png'
                  className='w-48'
                />
              </NavLink>
              <NavLink href='#team' title='Tým' setIsOpened={setIsOpened} />
              <NavLink href='#services' title='Služby' setIsOpened={setIsOpened} />
              <NavLink href='#news' title='Novinky' setIsOpened={setIsOpened} />
              <NavLink href='#contact' title='Kontakt' setIsOpened={setIsOpened} />
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;