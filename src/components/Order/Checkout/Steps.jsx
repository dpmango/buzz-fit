import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import cns from 'classnames';

const Steps = ({ activeStep, ...props }) => {
  return (
    <div className="checkout-top">
      <div className={cns('checkout-step', activeStep === 1 && 'active')}>
        <b>Step 1</b>
        <span>Customer Info</span>
      </div>
      <div className={cns('checkout-step', activeStep === 2 && 'active')}>
        <b>Step 2</b>
        <span>Payment</span>
      </div>
    </div>
  );
};

Steps.propTypes = {
  activeStep: PropTypes.number.isRequired,
};

export default Steps;
