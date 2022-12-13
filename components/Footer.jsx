import React from 'react';
import Link from 'next/link';
import { CiInstagram, CiFacebook } from 'react-icons/ci';

const Footer = ({ bgColor }) => {
  return (
    <footer
      className={`${bgColor} py-28 relative
    text-lg text-primary-300 font-light 
    flex flex-col md:flex-row justify-center lg:justify-around items-center gap-8 lg:gap-44`}
    >
      <div className='w-[80%] h-[1px] bg-primary-500 bg-opacity-30 absolute top-0' />

      <Link href='/'>
        <img
          alt='logo'
          src='/logo.png'
          className='w-48 mr-auto'
        />
      </Link>

      <div className='flex flex-col md:flex-row gap-8'>

        <address className='order-3 md:order-1'>
          <span className='font-normal'>Najdeš nás na:</span> <br />
          Johnyho barberhop <br />
          Jezuitská 17/15 <br />
          602 00 Brno-střed
        </address>
        
        <div className='order-2'>
          <p>Ondřej Juda</p>
          <p>IČO: 09072535</p>
          <a href='mailto: abc@example.com' target='_blank' rel='noreferrer' className='block'>abc@example.com</a>
          <a href='tel:+420123456789' target='_blank' rel='noreferrer' className='block'>+420 123 456 789</a>
        </div>

        <div className='flex md:flex-col gap-8 md:gap-0 lg:gap-8 lg:flex-row order-1 md:order-3  justify-center items-center'>
          <Link href='https://www.instagram.com/ondrajuda/' target='_blank'>
            <div className='transition hover:scale-150 active:scale-110'>
              <CiInstagram
                color='#f3e6cf'
                size='64px'
              />
            </div>
          </Link>
          <Link href='https://www.facebook.com/juda.ondrej' target='_blank'>
            <div className='transition hover:scale-150 active:scale-110'>
              <CiFacebook
                color='#f3e6cf'
                size='64px'
              />
            </div>
          </Link>
        </div>

      </div>
    </footer>
  );
};

export default Footer;