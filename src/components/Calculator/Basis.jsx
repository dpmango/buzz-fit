import React, { useMemo } from 'react';
import cns from 'classnames';

const Basis = ({ ...props }) => {
  return (
    <div className="calculator-basis">
      <div className="wrapper">
        <div className="calculator-basis__top">
          <img src="/img/calculator/img-5-min.png" alt="" />
          <div className="calculator-basis__info">
            <h2 className="section-title">Basis for Calculation</h2>
            <span className="calculator-basis__subtitle">
              To evaluate the merit of our waiting room solution, Buzz Fit commissioned 6 weeks of research to be
              undertaken by a medical industry specialist.
            </span>
            <p>
              The output of this work is a comprehensive white paper, on which we based the Buzz Fit calculator, you can
              download the PDF now (on the right).
            </p>
          </div>
        </div>
      </div>
      <div className="wrapper calculator-basis__wrapper">
        <div className="calculator-basis__wrap">
          <div className="calculator-basis__ico">
            <img src="/img/calculator/ico-1-min.png" alt="" />
          </div>
          <h3 className="calculator-basis__title">Download our White Paper</h3>
          <div className="calculator-basis__wrap-img">
            <img src="/img/calculator/img-6-min.png" alt="" />
            <a href="#" className="primary-btn primary-btn-green">
              download pdf
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Basis;
