import Head from 'next/head';
import { Header, Footer } from '../components';
import { Contact, Hero, News, Services, Team } from '../components/sections';

const BG_COLOR = 'bg-[#161616]'

const Home = () => {
  return (
    <>
      <Head>
        <title>Holičství u Johnyho</title>
        <meta name="description" content="Kvalitní pražský barbershop holiče Johny, který se těší, až se s Vámi bude moct podělit o své umění." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header bgColor={BG_COLOR} />
      <main className={`${BG_COLOR} flex flex-col gap-64 font-primary`}>
        <Hero />
        <Team />
        <Services />
        <News />
        <Contact />
      </main>
      <Footer bgColor={BG_COLOR} />
    </>
  );
}

export default Home;
