import React from 'react';
import { Frame } from './wrappers';

const Image = ({photoUrl, imageAlt, children}) => {
  return (
    <Frame hasDecoration>
      <div className='relative'>
        <img src={photoUrl} alt={imageAlt} className='object-cover w-[400px] h-[500px]' />
        <div
          className='w-[400px] h-[80%] absolute bottom-0
                transition opacity-0 group-hover:opacity-100  
                bg-gradient-to-b from-[rgba(0,0,0,0)] to-[rgba(0,0,0)]'
        />
        {
          children
        }
      </div>
    </Frame>
  );
}

export default Image;