import React from 'react';
import { Helmet } from 'react-helmet';
import { Main, Info, Testimonials, Begin, Actions, Pricing, Calculate, Industry, Result } from '@components/Home';
import { Steps, Guarantee } from '@components/Info';

const HomePage = () => {
  return (
    <>
      <div className="homepage">
        <Main />
        <Info />
        <Testimonials />
        <Steps className="steps-second" />
        <Begin />
        <Actions />
        <Pricing />
        <Calculate />
        <Industry />
        <Result />
        <Guarantee />
        <Steps className="steps-second" />
      </div>
      <Helmet>
        <title>Buzz Fit - Главная</title>
      </Helmet>
    </>
  );
};

export default HomePage;
