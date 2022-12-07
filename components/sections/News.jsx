import React, { useEffect } from 'react';
import { SectionWrapper } from '../';

const News = () => {
  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch('https://api.woxo.tech/instagram?source=%40ondrajuda&count=40&type=hashtag&sort=top&token=null');
      const data = await response.json();
      console.log(data)
    }

    fetchPosts();
  }, []);

  return (
    <SectionWrapper id='news' title='Novinky' description='Měj vždy čerstvé informace'>
      News
    </SectionWrapper>
  );
}

export default News;