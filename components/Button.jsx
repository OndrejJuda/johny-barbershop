import React from 'react';
import { Frame } from './wrappers';

const Button = ({ children }) => {
  return (
    <div className='group transition group-hover:scale-110 group-active:scale-105'>
      <Frame
        hasBorder
      >
        <button
          type='button'
          className='text-primary-300 text-2xl font-light bg-primary-50 bg-opacity-20 p-4
          transition group-hover:text-primary-500'
        >
          {children}
        </button>
      </Frame>
    </div>
  );
};

export default Button;