import React from 'react';
import { Helmet } from 'react-helmet';

import Terms from '@components/Static/Terms';

const TermsPage = () => {
  return (
    <>
      <Terms />
      <Helmet>
        <title>Buzz Fit - Terms and Conditions</title>
      </Helmet>
    </>
  );
};

export default TermsPage;
