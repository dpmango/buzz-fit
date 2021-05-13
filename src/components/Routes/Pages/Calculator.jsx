import React from 'react';
import { Helmet } from 'react-helmet';

import Calculator from '@components/Calculator';

const CalculatorPage = () => {
  return (
    <>
      <Calculator />

      <Helmet>
        <title>Buzz Fit - Calculator</title>
      </Helmet>
    </>
  );
};

export default CalculatorPage;
