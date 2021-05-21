import React, { useCallback, useMemo, memo, Children } from 'react';
import PropTypes from 'prop-types';
import cns from 'classnames';
import { HashLink } from 'react-router-hash-link';

import { ScrollTo } from '@helpers';

const HashLinkScroll = ({ to, className, children, ...props }) => {
  const handleScroll = (el) => {
    ScrollTo(el.offsetTop, 600);
  };

  // const handleClick = (e) => {
  //   // e.preventDefault();

  //   const selector = e.target.getAttribute('href').substring(1);
  //   const el = document.querySelector(`${selector}`);

  //   ScrollTo(el.offsetTop, 600);
  // };

  return (
    <HashLink to={to} className={className} scroll={handleScroll} {...props}>
      {children}
    </HashLink>
  );
};

HashLinkScroll.propTypes = {
  to: PropTypes.string.isRequired,
  className: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
};

export default memo(HashLinkScroll);
