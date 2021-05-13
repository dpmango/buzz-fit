import React from 'react';
import { Helmet } from 'react-helmet';
import Order from '@components/Order';

const OrderPage = () => {
  return (
    <>
      <Order />
      <Helmet>
        <title>Buzz Fit - Order</title>
      </Helmet>
    </>
  );
};

export default OrderPage;
