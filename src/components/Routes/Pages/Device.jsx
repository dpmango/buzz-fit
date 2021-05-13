import React from 'react';
import { Helmet } from 'react-helmet';

import { Device, Plug, Advantages, Streaming, Guarantee, Hero } from '@components/Info';

const DevicePage = () => {
  return (
    <>
      <Device />
      <Plug />
      <Advantages />
      <Streaming />
      <Guarantee />
      <Hero />

      <Helmet>
        <title>Buzz Fit - Device</title>
      </Helmet>
    </>
  );
};

export default DevicePage;
