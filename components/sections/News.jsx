import React, { useEffect, useState } from 'react';
import { SectionWrapper } from '../wrappers';
import { Image } from '../';

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
      const response = await fetch('https://api.woxo.tech/instagram?source=%40ondrajuda&count=40&type=hashtag&sort=top&token=null');
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

  let items = [];

  if (posts.length > 0) {
    items = posts.map(({ id, imageUrl, link, text, date }) => (
      <div
        key={id}
        className='group flex justify-center'
      >
        <Image imageAlt={text} photoUrl={imageUrl} >

        </Image>
      </div>
    ));
  }

  return (
    <SectionWrapper id='news' title='Novinky' description='Měj vždy čerstvé informace'>
      {
        posts.length > 0
          ? (
            <AliceCarousel
              items={items}
              disableButtonsControls
              mouseTracking
              responsive={responsive}
            />
          )
          : <div className='text-4xl'>LOADING</div>
      }
    </SectionWrapper>
  );
}

export default News;