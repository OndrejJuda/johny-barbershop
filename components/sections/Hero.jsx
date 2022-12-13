import React from 'react';
import { Button } from '../';
import Link from 'next/link';

const Hero = () => {
  return (
    <section
      id='welcome'
      className='h-screen xl:h-[calc(100vh-10rem)] relative'
    >
      <div
        className='absolute z-10 top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%]
        flex flex-col items-center gap-10'
      >
        <h2
          className='text-3xl md:text-4xl uppercase font-extralight tracking-widest text-primary-300'
        >
          Barbershop, kam se rádi vrátíte
        </h2>
        <h1
          className='text-8xl md:text-[7.5rem] font-light text-primary-500'
        >
          Vítej u Johnyho
        </h1>
        <Link href='#contact'>
          <div className='group'>
            <Button>Objednej se</Button>
          </div>
        </Link>
      </div>
      <img
        src='/hero-image.jpg'
        alt='hero image'
        className='brightness-[0.2] object-cover h-full w-full blur-[2px]'
      />
    </section >
  );
}

export default Hero;