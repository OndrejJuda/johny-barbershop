import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { RiScissors2Line } from 'react-icons/ri';

const NavLink = ({ href, title, setIsOpened }) => (
  <Link
    href={href}
    onClick={() => {
      setIsOpened && setIsOpened(false)
    }}>
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

  if (process.window) {
    if (isOpened) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }

  return (
    <header className={`${bgColor} text-primary-300 font-primary font-light`}>
      <nav className='justify-center items-center gap-44 h-40 hidden xl:flex'>
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
      <>
        <button
          type='button'
          className={`flex xl:hidden fixed z-30 top-5 left-5 
          bg-primary-50 text-primary-700 rounded-full p-4 
          transition ${isOpened ? 'rotate-180' : ''} duration-500
          ${isVisible ? '-translate-y-0' : '-translate-y-[100px]'}`}
          onClick={() => setIsOpened((prevValue) => !prevValue)}
        >
          <RiScissors2Line size={48} />
        </button>
        <div className={`bg-primary-900 opacity-100 fixed z-20 transition ${isOpened ? 'w-screen h-screen block' : 'hidden'}`}> </div>
        <nav className={`${isOpened ? 'flex' : 'hidden'} xl:hidden w-screen h-screen z-20 fixed justify-center items-center flex-col gap-24`}>
          <Link href='/' onClick={() => setIsOpened(false)}>
            <img
              alt='logo'
              src='/logo.png'
              className='w-48'
            />
          </Link>
          <NavLink href='#team' title='Tým' setIsOpened={setIsOpened} />
          <NavLink href='#services' title='Služby' setIsOpened={setIsOpened} />
          <NavLink href='#news' title='Novinky' setIsOpened={setIsOpened} />
          <NavLink href='#contact' title='Kontakt' setIsOpened={setIsOpened} />
        </nav>
      </>
    </header>
  );
}

export default Header;