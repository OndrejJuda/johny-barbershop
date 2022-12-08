import React from 'react';
import Link from 'next/link';
import { Frame } from './wrappers';

const CTAButton = () => {
  return (
    <Link href='#contact'>
      <div className='group'>
        <Frame style='transition group-hover:p-[4px] group-hover:my-[4px]
        group-active:p-[6px] group-active:my-[2px]'>
          <button
            type='button'
            className='text-primary-300 text-2xl font-light bg-primary-50 bg-opacity-20 p-4
          transition group-hover:text-primary-500'
          >
            Objednej se
          </button>
        </Frame>
      </div>
    </Link>
  );
};

export default CTAButton;