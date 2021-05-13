import React, { useMemo } from 'react';
import { observer } from 'mobx-react';
import { Link } from 'react-router-dom';
import cns from 'classnames';

import routes from '@config/routes';

const Production = observer(({ ...props }) => {
  return (
    <section className="production">
      <div className="wrapper">
        <div className="production-img">
          <img src="/img/production/img-min.png" alt="" />
        </div>
        <div className="production-info">
          <h2 className="section-title">Expert Production</h2>
          <p>
            At Buzz Fit we take pride in the fact that our healthcare content is superior to anything else on the
            market. Our content based in behavioural economics is aimed at delivering specific benefits for both
            patients and doctors.
          </p>
          <p>
            Prior to production all scripts and content are approved by our medical advisory board to ensure that we
            deliver the highest quality of information to patients.
          </p>
        </div>
      </div>
    </section>
  );
});

export default Production;
