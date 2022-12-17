import React from 'react';
import { SectionWrapper } from '../wrappers';
import { Map } from '../';
import { TfiEmail } from 'react-icons/tfi';
import { SlCallOut } from 'react-icons/sl';
import { Button } from '../';
import { Frame } from '../wrappers';
import Link from 'next/link';
import { CiInstagram, CiFacebook } from 'react-icons/ci';
import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <SectionWrapper id='contact' title='Kontakt' description='Staň se naším klientem'>
      <div
        className='flex flex-col lg:flex-row justify-around items-center pb-64 gap-20 xl:gap-32'
      >
        <motion.div
          className='lg:order-2'
          initial='offscreen'
          whileInView='onscreen'
          viewport={{ once: true, amount: 0.4 }}
        >
          <motion.div
            className='text-primary-100 '
            transition={{ duration: 0.5, delay: 0.2 }}
            variants={{
              offscreen: {
                x: 200,
                opacity: 0
              },
              onscreen: {
                x: 0,
                opacity: 100
              }
            }}
          >

            <h4 className='text-3xl md:text-4xl mb-8'>Otevírací hodiny</h4>
            <div className='flex gap-12 text-2xl md:text-3xl font-light mb-12'>
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

            <div className='flex flex-col gap-10 items-center md:items-start'>
              <a href='tel:+420123456789' className='transition group'>
                <Button>
                  <div className='flex items-center gap-8'>
                    <SlCallOut />
                    <p>+420 123 456 789</p>
                  </div>
                </Button>
              </a>
              <a href='mailto: abc@example.com' target='_blank' rel='noreferrer' className='transition group'>
                <Button>
                  <div className='flex items-center gap-8'>
                    <TfiEmail />
                    <p>abc@example.com</p>
                  </div>
                </Button>
              </a>

              <div className='flex gap-10'>
                <Link href='https://www.instagram.com/ondrajuda/' target='_blank'>
                  <div className='transition hover:scale-150 active:scale-110'>
                    <CiInstagram
                      color='#f3e6cf'
                      size='64px'
                    />
                  </div>
                </Link>
                <Link href='https://www.facebook.com/juda.ondrej' target='_blank'>
                  <div className='transition hover:scale-150 active:scale-110'>
                    <CiFacebook
                      color='#f3e6cf'
                      size='64px'
                    />
                  </div>
                </Link>
              </div>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          className='h-[700px] flex justify-center items-end'
          initial='offscreen'
          whileInView='onscreen'
          viewport={{ once: true, amount: 'all' }}
        >
          <Frame hasDecoration>
            <motion.div
              className='w-[350px] md:w-[700px] lg:w-[350px] xl:w-[700px] relative'
              variants={{
                offscreen: {
                  height: 0
                  
                },
                onscreen: {
                  height: 600
                }
              }}
              transition={{
                duration: 1
              }}
            >
              <Map />
            </motion.div>
          </Frame>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}

export default Contact;