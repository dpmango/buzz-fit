import React from 'react';
import { Helmet } from 'react-helmet';

import About from '@components/Static/About';
import NotMiss from '@components/Static/NotMiss';

const AboutPage = () => {
  return (
    <>
      <About />
      <NotMiss />
      <Helmet>
        <title>О нас</title>
      </Helmet>
    </>
  );
};

export default AboutPage;
