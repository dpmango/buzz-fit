import React from 'react';
import { Helmet } from 'react-helmet';

import { HowItWorks, Steps } from '@components/Info';

const HowPage = () => {
  return (
    <>
      <HowItWorks />
      <Steps className="steps-green" />

      <Helmet>
        <title>Buzz Fit - How it Works</title>
      </Helmet>
    </>
  );
};

export default HowPage;
