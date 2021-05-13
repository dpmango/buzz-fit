import React, { useMemo } from 'react';
import cns from 'classnames';

const Infograph = ({ ...props }) => {
  return (
    <>
      <h1 className="calculator-title">Your savings before passive income even comes into play</h1>
      <div className="calculator-row">
        <div className="calculator-col">
          <div className="calculator-img">
            <img src="/img/calculator/img-1-min.png" alt="" />
          </div>
          <div className="calculator-descr">
            <div>
              <span className="calculator-sub">Save</span>
              <span className="calculator-tit">$472,000</span>
              <ul>
                <li>Through patients</li>
                <li>Retention</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="calculator-col">
          <div className="calculator-descr">
            <div>
              <ul>
                <li>Business</li>
                <li>Profitability Growth</li>
              </ul>
              <span className="calculator-tit">$138,000</span>
            </div>
          </div>
          <div className="calculator-img">
            <img src="/img/calculator/img-2-min.png" alt="" />
          </div>
        </div>
        <div className="calculator-col">
          <div className="calculator-img">
            <img src="/img/calculator/img-3-min.png" alt="" />
          </div>
          <div className="calculator-descr">
            <div>
              <span className="calculator-tit">$122,000</span>
              <ul>
                <li>Business Volume</li>
                <li>
                  <b>Growth</b>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="calculator-col">
          <div className="calculator-descr">
            <div>
              <span className="calculator-sub">Supercharge</span>
              <span className="calculator-tit">customers</span>
              <ul>
                <li>Satisfaction Level</li>
              </ul>
            </div>
          </div>
          <div className="calculator-img">
            <img src="/img/calculator/img-4-min.png" alt="" />
          </div>
        </div>
      </div>
      <div className="calculator-bottom">
        <div className="calculator-bottom__info">
          <p>your Cumulative savings Over 5 Years</p>
          <span>$731,000</span>
        </div>
        <div className="calculator-bottom__btn">
          <a href="#" className="primary-btn primary-btn-green">
            view details
          </a>
        </div>
      </div>
    </>
  );
};

export default Infograph;
