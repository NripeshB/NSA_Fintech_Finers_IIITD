import React from 'react';

import Header from '../partials/Header';
import HeroHome from '../partials/HeroHome';
import FeaturesHome from '../partials/Features';
import FeaturesBlocks from '../partials/FeaturesBlocks';
import Team from '../partials/Team';
import Footer from '../partials/Footer';
import Banner from '../partials/Banner';

function Home() { 

  return (
    <div className="flex flex-col min-h-screen overflow-hidden">

      {/*  Site header */}
      <Header />
      {/*  Page content */}
      <main className="flex-grow">

        {/*  Page sections */}
        <HeroHome />
        <FeaturesBlocks />
        <Team />


      </main>

      <Banner />

      {/*  Site footer */}
      <Footer />

    </div>
  );
}

export default Home;
