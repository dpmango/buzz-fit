import React from 'react';
import { Helmet } from 'react-helmet';

import { Content, Addressing, Production, Programing } from '@components/Info';

const ContentPage = () => {
  return (
    <>
      <Content />
      <Addressing />
      <Production />
      <Programing />

      <Helmet>
        <title>Buzz Fit - Content</title>
      </Helmet>
    </>
  );
};

export default ContentPage;
