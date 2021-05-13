import React from 'react';
import { Helmet } from 'react-helmet';

import Privacy from '@components/Static/Privacy';

const PrivacyPage = () => {
  return (
    <>
      <Privacy />
      <Helmet>
        <title>Buzz Fit - Privacy Policy</title>
      </Helmet>
    </>
  );
};

export default PrivacyPage;
