import React from 'react';
import { Helmet } from 'react-helmet';

import Refund from '@components/Static/Refund';

const RefundPage = () => {
  return (
    <>
      <Refund />
      <Helmet>
        <title>Buzz Fit - Refund Policy</title>
      </Helmet>
    </>
  );
};

export default RefundPage;
