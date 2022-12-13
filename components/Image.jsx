import React from 'react';
import { Frame } from './wrappers';

const Image = ({photoUrl, imageAlt, children}) => {
  return (
    <Frame hasDecoration hasBorder>
      <div className='relative'>
        <img src={photoUrl} alt={imageAlt} className='object-cover w-[320px] lg:max-w-[280px] h-[500px] xl:max-w-[400px]' />
        {
          children
        }
      </div>
    </Frame>
  );
}

export default Image;