import React from 'react';
import PropTypes from 'prop-types';
import cns from 'classnames';

import Header from '@components/Layout/Header';
import Footer from '@components/Layout/Footer';

const Variants = {
  MAIN: 'main',
  ADMIN: 'admin',
};

const VariantClasses = {
  [Variants.MAIN]: '',
  [Variants.ADMIN]: '_admin',
};

const Layout = ({ variant, children }) => {
  return (
    <div className={cns('react-app', variant && VariantClasses[variant])}>
      <Header />

      {children}

      <Footer />
    </div>
  );
};

Layout.propTypes = {
  variant: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
};

Layout.defaultProps = {
  variant: Variants.SIMPLE,
};

export default Layout;
