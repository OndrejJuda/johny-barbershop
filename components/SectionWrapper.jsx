import React from 'react';
import { HeadingSecondary, HeadingTertiary } from './typography';

const SectionWrapper = ({ children, id, title, description }) => {
  return (
    <section id={id}>
      <header>
        <HeadingTertiary text={title} />
        <HeadingSecondary text={description} />
      </header>
      {children}
    </section>
  );
}

export default SectionWrapper;