import React, { useEffect, useState } from 'react';
import { SectionWrapper } from '../wrappers';
import { Image } from '../';
import { CiInstagram } from 'react-icons/ci';
import Link from 'next/link';
import { motion } from 'framer-motion';

import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

const responsive = {
  0: { items: 1 },
  900: { items: 2 },
  1400: { items: 3 },
  1800: { items: 4 },
};

const News = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch('https://api.woxo.tech/instagram?source=%40ondrajuda&count=20&type=hashtag&sort=top&token=null');
      const { data } = await response.json();
      const transformedData = data.map(({ id, image: imageUrl, link, text3: text, text7: date }) => ({
        id,
        imageUrl,
        link,
        text,
        date
      }));
      setPosts(transformedData);
    }

    fetchPosts();
  }, []);

  const slideHandler = ({ item, itemsInSlide }) => {
    if (item + itemsInSlide * 2 >= posts.length) {
      console.log('yes')
    }
  };

  let items = [];

  if (posts.length > 0) {
    items = posts.map(({ id, imageUrl, link, text, date }) => (
      <div
        key={id}
        className='group flex justify-center'
      >
        <Image imageAlt={text} photoUrl={imageUrl} >
          <div
            className='w-full h-[100%] absolute bottom-0
                transition opacity-0 group-hover:opacity-100  
                bg-gradient-to-b from-[rgba(0,0,0,0.8)] to-[rgba(0,0,0,0.8)]'
          />
          <div className='absolute w-[80%] bottom-[20%] left-[50%] -translate-x-[50%]
                transition opacity-0 group-hover:opacity-100'>
            <div className='group/link flex flex-col gap-4 items-center justify-center w-full 
                    '>
              <p
                className='text-xl text-primary-100'
              >
                {text}
              </p>
              <Link href={link} target='_blank'>
                <div className='transition group-hover/link:scale-150 group-active/link:scale-110'>
                  <CiInstagram
                    color='#f3e6cf'
                    size='40px'
                  />
                </div>
              </Link>
            </div>
          </div>
        </Image>
      </div>
    ));
  }

  return (
    <SectionWrapper id='news' title='Novinky' description='M??j v??dy ??erstv?? informace'>
      <motion.div
      className='w-full'
        initial={{
          y: 200
        }}
        whileInView={{
          y: 0
        }}
        viewport={{
          once: true,
        }}
      >
        {
          posts.length > 0
            ? (
              <AliceCarousel
                items={items}
                disableButtonsControls
                mouseTracking
                touchTracking
                responsive={responsive}
                onSlideChanged={slideHandler}
              />
            )
            : <div className='text-4xl'>LOADING</div>
        }
      </motion.div>
    </SectionWrapper>
  );
}

export default News;