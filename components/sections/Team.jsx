import React from 'react';
import { SectionWrapper, Frame } from '../wrappers';

const TEAM = [
  { name: 'Carlos Santiago', photoUrl: '/barber1.jpg', instagramUrl: '' },
  { name: 'Peter Green', photoUrl: '/barber2.jpg', instagramUrl: '' },
  { name: 'Jan Maličký', photoUrl: '/barber3.jpg', instagramUrl: '' },
];

const Team = () => {
  return (
    <SectionWrapper id='team' title='Tým' description='Seznam se s našimi holiči'>
      <div className='flex gap-24 flex-wrap'>
        {
          TEAM.map(({ photoUrl, name, instagramUrl }, index) => (
            <article
              key={index}
              className='group'
            >
              <Frame hasDecoration>
                <div className='relative'>
                  <img src={photoUrl} alt={name} className='w-full h-full object-cover w-96 h-[500px]' />
                  <div
                    className='w-96 h-[80%] absolute bottom-0
                transition opacity-0 group-hover:opacity-100  
                bg-gradient-to-b from-[rgba(0,0,0,0)] to-[rgba(0,0,0)]'
                  />
                  <p
                    className='absolute bottom-[20%] left-[50%] -translate-x-[50%] 
                  text-2xl text-primary-100
                  transition opacity-0 group-hover:opacity-100'
                  >
                    {name}
                  </p>
                </div>
              </Frame>
            </article>
          ))
        }
      </div>
    </SectionWrapper>
  );
}

export default Team;