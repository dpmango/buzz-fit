import React from 'react';
import { Helmet } from 'react-helmet';

import Billing from '@components/Static/Billing';

const BillingPage = () => {
  return (
    <>
      <Billing />
      <Helmet>
        <title>Buzz Fit - Billing Policy</title>
      </Helmet>
    </>
  );
};

export default BillingPage;
