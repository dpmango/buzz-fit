import React from 'react';
import { Helmet } from 'react-helmet';
import Auth from '@components/Auth';

const AuthPage = () => {
  return (
    <div className="container">
      <Auth />
      <Helmet>
        <title>Buzz Fit - Auth</title>
      </Helmet>
    </div>
  );
};

export default AuthPage;
