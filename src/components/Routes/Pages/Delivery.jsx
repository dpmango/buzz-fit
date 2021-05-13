import React from 'react';
import { Helmet } from 'react-helmet';

import Delivery from '@components/Static/Delivery';

const DeliveryPage = () => {
  return (
    <>
      <Delivery />
      <Helmet>
        <title>Buzz Fit - Delivery Policy</title>
      </Helmet>
    </>
  );
};

export default DeliveryPage;
