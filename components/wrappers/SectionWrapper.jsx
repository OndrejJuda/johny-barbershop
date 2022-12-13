import React from 'react';
import { HeadingSecondary, HeadingTertiary } from '../typography';

const SectionWrapper = ({ children, id, title, description }) => {
  return (
    <section 
    id={id}
    className='flex flex-col items-center gap-36 p-4'
    >
      <header className='flex flex-col items-center'>
        <HeadingTertiary text={title} />
        <HeadingSecondary text={description} />
      </header>
      {children}
    </section>
  );
}

export default SectionWrapper;