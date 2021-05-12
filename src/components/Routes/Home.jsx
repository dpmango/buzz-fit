import React from 'react';
import { Helmet } from 'react-helmet';
import Homepage from '@components/Homepage';

const HomePage = () => {
  return (
    <div className="container">
      <Homepage />
      <Helmet>
        <title>Главная</title>
      </Helmet>
    </div>
  );
};

export default HomePage;
