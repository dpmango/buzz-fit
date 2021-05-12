import React from 'react';
import { Helmet } from 'react-helmet';
import Homepage from '@components/Homepage';

const HomePage = () => {
  return (
    <>
      <Homepage />
      <Helmet>
        <title>Buzz Fit :: Главная</title>
      </Helmet>
    </>
  );
};

export default HomePage;
