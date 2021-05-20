import React, { useState, useMemo } from 'react';
import { observer } from 'mobx-react';
import { Link, useHistory } from 'react-router-dom';
import cns from 'classnames';

import { Input, Select } from '@ui';
import routes from '@config/routes';

const Calculate = observer(({ ...props }) => {
  const [speciality, setSpeciality] = useState(null);
  const [perWeek, setPerWeek] = useState('');
  const [perYear, setPerYear] = useState('');
  const [email, setEmail] = useState('');

  const history = useHistory();

  const selectOptions = [
    { value: 'Specialty 1', label: 'Specialty 1' },
    { value: 'Specialty 2', label: 'Specialty 2' },
  ];

  const handleFormSubmit = (e) => {
    e.preventDefault();

    history.push(routes.CALCULATOR);
  };

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
              <form action="" onSubmit={handleFormSubmit}>
                <div className="input-block">
                  <Select
                    placeholder="Specialty"
                    value={speciality}
                    options={selectOptions}
                    classNamePrefix="calculator"
                    onChange={(e) => setSpeciality(e)}
                  />
                </div>
                <div className="input-row">
                  <div className="input-col">
                    <Input
                      value={perWeek}
                      placeholder="Patients per week"
                      type="text"
                      onChange={(v) => setPerWeek(v)}
                    />
                  </div>
                  <div className="input-col">
                    <Input value={perYear} placeholder="Weeks per year" type="text" onChange={(v) => setPerYear(v)} />
                  </div>
                </div>
                <Input value={email} placeholder="Your email address" type="email" onChange={(v) => setEmail(v)} />

                <button type="submit" className="primary-btn">
                  calculate
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});

export default Calculate;
