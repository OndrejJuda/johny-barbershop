import React from 'react';
import { Frame } from './wrappers';

const Image = ({photoUrl, imageAlt, children}) => {
  return (
    <Frame hasDecoration>
      <div className='relative'>
        <img src={photoUrl} alt={imageAlt} className='object-cover w-[400px] h-[500px]' />
        {
          children
        }
      </div>
    </Frame>
  );
}

export default Image;