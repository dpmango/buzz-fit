import React from 'react';
import { Helmet } from 'react-helmet';

import FAQ from '@components/Static/FAQ';

const FaqPage = () => {
  return (
    <>
      <FAQ />
      <Helmet>
        <title>Buzz Fit - FAQ</title>
      </Helmet>
    </>
  );
};

export default FaqPage;
