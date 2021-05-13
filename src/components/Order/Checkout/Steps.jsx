import React, { useMemo } from 'react';
import cns from 'classnames';

const Steps = ({ ...props }) => {
  return (
    <div className="checkout-top">
      <div className="checkout-step active">
        <b>Step 1</b>
        <span>Customer Info</span>
      </div>
      <div className="checkout-step">
        <b>Step 2</b>
        <span>Payment</span>
      </div>
    </div>
  );
};

export default Steps;
