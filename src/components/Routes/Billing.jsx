import React from 'react';
import { Helmet } from 'react-helmet';

import Billing from '@components/Static/Billing';

const AboutPage = () => {
  return (
    <>
      <Billing />
      <Helmet>
        <title>Billing Policy</title>
      </Helmet>
    </>
  );
};

export default AboutPage;
