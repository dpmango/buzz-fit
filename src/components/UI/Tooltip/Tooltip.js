// import { ReactComponent as Icon } from './logo.svg';
import React, { memo } from 'react';
import PropTypes from 'prop-types';
import cns from 'classnames';

const Tooltip = ({ text, className, ...props }) => {
  return (
    <div className={cns('tooltip', className)} {...props}>
      <i className="hb-ico i-ico" />
      <div className="tooltip-info">Price details based on smallest available cable service Jan 2021</div>
    </div>
  );
};

Tooltip.propTypes = {
  className: PropTypes.string,
  text: PropTypes.string.isRequired,
};

export default memo(Tooltip);
