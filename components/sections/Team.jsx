import React from 'react';
import { SectionWrapper } from '../wrappers';
import { Image } from '../';
import { CiInstagram } from 'react-icons/ci';
import Link from 'next/link';

const TEAM = [
  { name: 'Carlos Santiago', photoUrl: '/barber1.jpg', instagramUrl: 'https://www.instagram.com/ondrajuda/' },
  { name: 'Peter Green', photoUrl: '/barber2.jpg', instagramUrl: 'https://www.instagram.com/ondrajuda/' },
  { name: 'Jan Maličký', photoUrl: '/barber3.jpg', instagramUrl: 'https://www.instagram.com/ondrajuda/' },
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
              <Image
                imageAlt={name}
                photoUrl={photoUrl}
              >
                <div className='absolute bottom-[20%] left-[50%] -translate-x-[50%]
                transition opacity-0 group-hover:opacity-100'>
                  <Link href={instagramUrl} target='_blank'>
                    <div className='flex flex-col items-center justify-center 
                    transition hover:scale-110 active:scale-105'>
                      <CiInstagram
                        color='#f3e6cf'
                        size='40px'
                      />
                      <p
                        className='text-2xl text-primary-100'
                      >
                        {name}
                      </p>
                    </div>
                  </Link>
                </div>
              </Image>
            </article>
          ))
        }
      </div>
    </SectionWrapper>
  );
}

export default Team;