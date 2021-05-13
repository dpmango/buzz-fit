import React, { useCallback, useRef, useEffect, useMemo } from 'react';
import cns from 'classnames';

import { Chart } from '@ui';

const Graph = ({ ...props }) => {
  const chartData = useMemo(() => {
    let data = [];
    let value = 50;
    for (var i = 0; i < 300; i++) {
      let date = new Date();
      date.setHours(0, 0, 0, 0);
      date.setDate(i);
      value -= Math.round((Math.random() < 0.5 ? 1 : -1) * Math.random() * 10);
      data.push({ date: date, value: value });
    }

    return data;
  }, []);

  return (
    <>
      <div className="calculator-graph">
        <Chart data={chartData} type="graph" />
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
