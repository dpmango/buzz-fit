import React, { useMemo } from 'react';
import { observer } from 'mobx-react';
import { Link } from 'react-router-dom';
import Select from 'react-select';
import cns from 'classnames';

import routes from '@config/routes';

const Calculate = observer(({ ...props }) => {
  const options = [
    { value: 'Specialty 1', label: 'Specialty 1' },
    { value: 'Specialty 2', label: 'Specialty 2' },
  ];

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
              <form action="">
                <div className="input-block">
                  <Select
                    placeholder="Specialty"
                    options={options}
                    value={options[2]}
                    classNamePrefix="calculator"
                    onChange={(e) => console.log(e)}
                  />
                </div>
                <div className="input-row">
                  <div className="input-col">
                    <div className="input-block">
                      <input type="text" name="text" placeholder="Patients per week" />
                    </div>
                  </div>
                  <div className="input-col">
                    <div className="input-block">
                      <input type="text" name="text" placeholder="Weeks per year" />
                    </div>
                  </div>
                </div>
                <div className="input-block">
                  <input type="email" name="email" placeholder="Your email address" />
                </div>
                <Link to={routes.CALCULATOR} className="primary-btn">
                  calculate
                </Link>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});

export default Calculate;
