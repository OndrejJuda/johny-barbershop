import Head from 'next/head';
import Image from 'next/image';
import {Header, Footer} from '../components';
import {Contact, Hero, News, Services, Team} from '../components/sections';

const Home = () => {
  return (
    <>
      <Head>
        <title>Holičství u Johnyho</title>
        <meta name="description" content="Kvalitní pražský barbershop holiče Johny, který se těší, až se s Vámi bude moct podělit o své umění." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className='bg-black text-white'>
        <Header />
        <Hero />
        <Team />
        <Services />
        <News />
        <Contact />
        <Footer />
      </main>
    </>
  );
}

export default Home;