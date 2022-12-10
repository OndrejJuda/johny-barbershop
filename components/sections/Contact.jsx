import React from 'react';
import { SectionWrapper } from '../wrappers';
import { Map } from '../';
import { TfiEmail } from 'react-icons/tfi';
import { SlCallOut } from 'react-icons/sl';
import { CTAButton } from '../';
import { Frame } from '../wrappers';

const Contact = () => {
  return (
    <SectionWrapper id='contact' title='Kontakt' description='Staň se naším klientem'>
      <div className='flex justify-around items-center pb-64 gap-32'>
        <Frame hasDecoration>
          <div className='w-[700px] h-[550px] relative'>
            <Map />
          </div>
        </Frame>
        <div className='text-primary-100'>
          <h4 className='text-4xl mb-8'>Otevírací hodiny</h4>
          <div className='flex gap-12 text-3xl font-light mb-20'>
            <div className='flex flex-col gap-2'>
              <p>Pondělí - pátek</p>
              <p>Sobota</p>
              <p>Neděle</p>
            </div>
            <div className='flex flex-col gap-2'>
              <p>9:00 - 20:00</p>
              <p>9:00 - 17:00</p>
              <p>10:00 - 17:00</p>
            </div>
          </div>
          <div className='flex flex-col gap-10 items-start'>
            <a href='tel:+420123456789' target='_blank' rel='noreferrer' className='transition group'>
              <CTAButton>
                <div className='flex items-center gap-8'>
                  <SlCallOut />
                  <p>+420 123 456 789</p>
                </div>
              </CTAButton>
            </a>
            <a href='mailto: abc@example.com' target='_blank' rel='noreferrer' className='transition group'>
              <CTAButton>
                <div className='flex items-center gap-8'>
                  <TfiEmail />
                  <p>abc@example.com</p>
                </div>
              </CTAButton>
            </a>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}

export default Contact;