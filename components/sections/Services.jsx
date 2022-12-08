import React from 'react';
import { SectionWrapper, Frame } from '../wrappers';
import { CTAButton } from '../';

const SERVICES = [
  { name: 'Střih', price: 450 },
  { name: 'Střih a mytí', price: 540 },
  { name: 'Péče o dlouhé vlasy', price: 680 },
  { name: 'Úprava boků strojkem', price: 400 },
  { name: 'Zastřížení', price: 380 },
  { name: 'Holení', price: 580 },
  { name: 'Holení celé hlavy', price: 430 },
  { name: 'Péče o pleť', price: 500 },
  { name: 'Styling', price: 500 },
];



const CZK_FORMAT = new Intl.NumberFormat(
  'cs-CZ',
  { style: 'currency', currency: 'CZK' }
);

const Services = () => {
  return (
    <SectionWrapper id='services' title='Služby' description='Kvalitní péče o vlasy a vousy'>
      <Frame hasDecoration>
        <div className='p-16 flex flex-col items-center'>
          <ul className='mb-8'>
            {
              SERVICES.map(({ name, price }, index) => (
                <li
                  key={index}
                  className='text-primary-500 text-xl font-light flex gap-1'
                >
                  <p>{name}</p>
                  <span className='flex-1 min-w-[150px] border-b border-dotted mb-[6px]' />
                  <p>{CZK_FORMAT.format(price)}</p>
                </li>
              ))
            }
          </ul>
          <CTAButton />
        </div>
      </Frame>
    </SectionWrapper>
  );
}

export default Services;
