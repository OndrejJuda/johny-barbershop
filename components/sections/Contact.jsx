import React from 'react';
import { SectionWrapper } from '../wrappers';
import { Map } from '../';
import {TfiEmail} from 'react-icons/tfi';
import {SlCallOut} from 'react-icons/sl';

const Contact = () => {
  return (
    <SectionWrapper id='contact' title='Kontakt' description='Staň se naším klientem'>
      <div className='flex'>
        <div className='w-[500px] h-[500px] relative'>
          <Map />
        </div>
        <div className='text-primary-100'>
          <h4>Otevírací hodiny</h4>
          <div className='flex'>
            <div>
              <p>Pondělí - pátek</p>
              <p>Sobota</p>
              <p>Neděle</p>
            </div>
            <div>
              <p>9:00 - 20:00</p>
              <p>9:00 - 17:00</p>
              <p>10:00 - 17:00</p>
            </div>
          </div>
          <a href='tel:+420123456789' className='flex items-center'>
            <SlCallOut />
            <p>+420 123 456 789</p>
          </a>
          <a href='mailto: abc@example.com' className='flex items-center'>
            <TfiEmail />
            <p>abc@example.com</p>
            </a>
        </div>
      </div>
    </SectionWrapper>
  );
}

export default Contact;