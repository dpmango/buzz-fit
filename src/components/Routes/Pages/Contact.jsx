import React from 'react';
import { Helmet } from 'react-helmet';

import Contact from '@components/Static/Contact';
import NotMiss from '@components/Static/NotMiss';

const ContactPage = () => {
  return (
    <>
      <Contact />
      <NotMiss />
      <Helmet>
        <title>Buzz Fit - Contact</title>
      </Helmet>
    </>
  );
};

export default ContactPage;
