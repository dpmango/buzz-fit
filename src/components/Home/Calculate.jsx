import React, { useMemo } from 'react';
import { observer } from 'mobx-react';
import { Link } from 'react-router-dom';
import cns from 'classnames';

import routes from '@config/routes';

import CalculateForm from '@components/Forms/Calculate';

const Calculate = observer(({ ...props }) => {
  return (
    <section className="calculate" id="calculate">
      <div className="wrapper">
        <div className="calculate-row">
          <div className="calculate-col calculate-col__1">
            <span className="section-subtitle">Your savings</span>
            <h2 className="section-title">Calculate your potential operational savings</h2>
            <div className="calculate-img">
              <img src="/img/main/think.png" alt="" />
            </div>
          </div>
          <div className="calculate-col calculate-col__2">
            <div className="calculate-info">
              <p>
                With only basic information about your practice, our calculator will estimate what your potential
                savings will be.
              </p>
              <p>
                We provide a full breakdown of the calculation, built on data from trusted brands in the healthcare
                industry and supported by an independently research white paper included in your report.
              </p>
            </div>
            <div className="calculate-form">
              <h3 className="calculate-title">Enter your details</h3>
              <CalculateForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});

export default Calculate;
