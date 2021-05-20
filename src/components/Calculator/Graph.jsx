import React, { useContext, useMemo } from 'react';
import { observer } from 'mobx-react';
import cns from 'classnames';

import { CalculatorStoreContext } from '@store/CalculatorStore';
import { Chart } from '@ui';

const Graph = observer(({ ...props }) => {
  const calculatorContext = useContext(CalculatorStoreContext);

  const summary = calculatorContext.reportSummary;

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
          <span>${summary && summary.Total.toLocaleString()}</span>
        </div>
        <div className="calculator-bottom__btn">
          <a href="#" className="primary-btn primary-btn-green">
            view details
          </a>
        </div>
      </div>
    </>
  );
});

export default Graph;
