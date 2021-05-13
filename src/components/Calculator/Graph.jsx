import React, { useMemo } from 'react';
import cns from 'classnames';

const Graph = ({ ...props }) => {
  return (
    <>
      <div className="calculator-graph">
        <div id="chartdiv"></div>
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

export default Graph;
