import React from 'react';
import { Helmet } from 'react-helmet';

const NoMatchPage = () => {
  return (
    <div className="container page-404">
      <div className="h1-title">Page not found</div>
      <Helmet>
        <title>Buzz Fit - Not found</title>
      </Helmet>
    </div>
  );
};

export default NoMatchPage;
