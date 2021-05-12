// import { ReactComponent as Icon } from './logo.svg';
import React, { memo } from 'react';
import PropTypes from 'prop-types';
import cns from 'classnames';

const SvgIcon = ({ name, className, ...props }) => {
  return (
    <svg className={cns('ico', `ico-mono-${name}`, className)} {...props}>
      <use xlinkHref={`#ico-mono-${name}`} />
    </svg>
  );
};

SvgIcon.propTypes = {
  className: PropTypes.string,
  name: PropTypes.string.isRequired,
};

export default memo(SvgIcon);
