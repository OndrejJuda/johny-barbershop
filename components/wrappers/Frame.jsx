import React from 'react';

const Frame = ({ children, hasDecoration, style }) => {
  return (
    <div className={`border relative border-primary-500 p-[8px] ${style ? style : ''}`}>
      {
        hasDecoration && (
          <img
            src='/lines/line-11.svg'
            alt='line'
            className='absolute -top-[50px] left-1/2 -translate-x-1/2 w-full'
          />
        )
      }
      {children}
      {
        hasDecoration && (
          <img
            src='/lines/line-11.svg'
            alt='line'
            className='absolute -bottom-[50px] rotate-180 left-1/2 -translate-x-1/2 w-full'
          />
        )
      }
    </div>
  );
};

export default Frame;